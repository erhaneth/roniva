import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { RonivaWordmark } from "@/components/roniva-wordmark";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { contactEmail, navTargets } from "@/components/landing/constants";
import type { LocalizedLandingSectionProps } from "@/components/landing/types";

export function Footer({ locale, t }: LocalizedLandingSectionProps) {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-[1.15fr_1fr_1fr] md:items-start lg:px-8 lg:py-12">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <Link
            href={`/${locale}`}
            className="flex w-fit items-center gap-3"
            aria-label="Roniva Tech home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-black">
              <Image
                src="/roniva-mark-light-transparent.png"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
            </span>
            <RonivaWordmark compact />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-black/56">{t.footer.line}</p>
          <p className="mt-4 flex items-center justify-center gap-2 text-sm text-black/48 md:justify-start">
            <MapPin aria-hidden="true" className="h-4 w-4" />
            {t.footer.location}
          </p>
        </div>
        <nav aria-label="Footer navigation" className="text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-black/40">
            {t.footer.navHeading}
          </p>
          <ul className="mx-auto mt-4 grid max-w-xs grid-cols-2 gap-2 md:mx-0">
            {navTargets.map(([key, target]) => (
              <li key={target}>
                <Link
                  href={target === "top" ? `/${locale}` : `/${locale}/${target}`}
                  className="block rounded-[8px] px-3 py-2 text-sm text-black/62 transition hover:bg-black/[0.04] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  {t.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col items-center text-center md:items-end md:text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-black/40">
            {t.footer.contactHeading}
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="mt-4 block w-fit rounded-[8px] px-3 py-2 text-sm text-black/62 underline-offset-4 transition hover:bg-black/[0.04] hover:text-black hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            {contactEmail}
          </a>
          <WhatsAppButton
            label={t.whatsapp.contactCta}
            message={t.whatsapp.message}
            size="sm"
            className="mt-3"
          />
        </div>
      </div>
      <div className="border-t border-black/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-sm text-black/42 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Roniva Tech. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
