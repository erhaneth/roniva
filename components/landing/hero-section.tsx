import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LocalizedLandingSectionProps } from "@/components/landing/types";

export function HeroSection({ locale, t }: LocalizedLandingSectionProps) {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden border-b border-black/10 bg-black text-white">
      <Image
        src="/images/home.png"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[58%_50%]"
        priority
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.86)_0%,rgba(0,0,0,0.66)_42%,rgba(0,0,0,0.2)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_24%_46%,rgba(255,255,255,0.12),transparent_34%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex w-full max-w-7xl items-center px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="max-w-3xl lg:-translate-x-16 lg:-translate-y-6">
          <h1 className="max-w-full break-words text-4xl font-semibold leading-[1.08] text-white sm:text-6xl sm:leading-[1.02] lg:text-[4.75rem] lg:leading-[0.98]">
            {t.hero.headline}
          </h1>
          <p className="mt-7 max-w-xl text-pretty text-base leading-8 text-white/72 sm:text-lg">
            {t.hero.body}
          </p>
          <div className="mt-25 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}#contact`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-white px-5 py-3 text-sm font-semibold text-black shadow-2xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-white/88 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              {t.hero.primaryCta}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <ul className="mt-55 flex flex-wrap gap-2 text-sm text-white/64" aria-label="Hero service highlights">
            {t.hero.proof.map((item) => (
              <li
                key={item}
                className="inline-flex items-center rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-[11px] font-medium tracking-[0.02em] text-white/70 backdrop-blur-sm sm:px-3.5 sm:text-xs"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
