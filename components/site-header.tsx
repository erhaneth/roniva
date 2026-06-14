"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import type { MouseEvent } from "react";
import { useCallback, useEffect, useState } from "react";
import { RonivaWordmark } from "@/components/roniva-wordmark";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { navTargets } from "@/components/landing/constants";
import {
  localeNames,
  localeShortNames,
  locales,
  type Locale,
  type Dictionary
} from "@/lib/i18n";

type SiteHeaderProps = {
  locale: Locale;
  nav: Dictionary["nav"];
  whatsapp: Dictionary["whatsapp"];
};

export function SiteHeader({ locale, nav, whatsapp }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const getSectionHref = useCallback(
    (target: string) => (target === "top" ? `/${locale}` : `/${locale}/${target}`),
    [locale]
  );

  const scrollToSection = useCallback((target: string, behavior: ScrollBehavior = "smooth") => {
    if (target === "top") {
      window.scrollTo({ top: 0, behavior });
      return;
    }

    const element = document.getElementById(target);
    if (!element) return;

    const header = document.querySelector("header");
    const headerHeight = header?.getBoundingClientRect().height ?? 64;
    const top = element.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({ top: Math.max(0, top), behavior });
  }, []);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    const [, pathLocale, section] = pathname.split("/");

    if (pathLocale !== locale) return;

    const target = section ?? "top";
    const isKnownTarget = target === "top" || navTargets.some(([, item]) => item === target);

    if (!isKnownTarget) return;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => scrollToSection(target, "auto"));
    });
  }, [locale, pathname, scrollToSection]);

  const closeMenu = () => setOpen(false);
  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>, target: string) => {
    event.preventDefault();
    closeMenu();

    window.history.replaceState(null, "", getSectionHref(target));
    scrollToSection(target);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-black/10 backdrop-blur-xl transition-[background-color,box-shadow] duration-300 ${
        scrolled ? "bg-white/92 shadow-lg shadow-black/[0.05]" : "bg-white/82"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href={getSectionHref("top")}
          className="group flex items-center gap-3"
          aria-label="Roniva Tech home"
          onClick={(event) => handleSectionClick(event, "top")}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-black shadow-sm ring-1 ring-black/10">
            <Image
              src="/roniva-mark-light-transparent.png"
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 object-contain transition-transform duration-300 group-hover:scale-105"
              loading="eager"
            />
          </span>
          <RonivaWordmark compact />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navTargets.map(([key, target]) => (
            <Link
              key={target}
              href={getSectionHref(target)}
              className="rounded-[8px] px-3 py-2 text-sm font-medium text-black/64 transition hover:bg-black/[0.04] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={(event) => handleSectionClick(event, target)}
            >
              {nav[key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageLinks locale={locale} />
          <WhatsAppButton label={whatsapp.label} message={whatsapp.message} size="sm" />
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-black/10 bg-white text-black transition hover:bg-black/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="absolute inset-x-0 top-full z-50 max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-black/10 bg-white px-4 pb-5 pt-3 shadow-2xl shadow-black/8 lg:hidden">
          <nav aria-label="Mobile navigation" className="grid gap-1">
            {navTargets.map(([key, target]) => (
              <Link
                key={target}
                href={getSectionHref(target)}
                className="rounded-[8px] px-3 py-3 text-base font-medium text-black/74 transition hover:bg-black/[0.04]"
                onClick={(event) => handleSectionClick(event, target)}
              >
                {nav[key]}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col items-center gap-3 border-t border-black/10 pt-4">
            <LanguageLinks locale={locale} fullWidth />
            <WhatsAppButton label={whatsapp.contactCta} message={whatsapp.message} fullWidth />
          </div>
        </div>
      ) : null}
    </header>
  );
}

function LanguageLinks({ locale, fullWidth = false }: { locale: Locale; fullWidth?: boolean }) {
  return (
    <div
      className={`inline-grid grid-cols-2 rounded-full border border-black/10 bg-[#f4f4f4] p-0.5 shadow-inner shadow-black/[0.04] ${
        fullWidth ? "mx-auto w-fit" : ""
      }`}
      aria-label="Language selector"
    >
      {locales.map((item) => (
        <Link
          key={item}
          href={`/${item}`}
          aria-current={locale === item ? "page" : undefined}
          title={localeNames[item]}
          className={`min-w-10 rounded-full px-3 py-1 text-center text-[11px] font-semibold uppercase tracking-[0.08em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
            locale === item
              ? "bg-black text-white shadow-sm"
              : "text-black/50 hover:bg-white hover:text-black"
          }`}
        >
          {localeShortNames[item]}
        </Link>
      ))}
    </div>
  );
}
