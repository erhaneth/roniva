import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LocalizedLandingSectionProps } from "@/components/landing/types";

export function HeroSection({ locale, t }: LocalizedLandingSectionProps) {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-center border-b border-black/10 bg-[#f7f7f7] text-black">
      <div className="hero-grid absolute inset-0 opacity-55" aria-hidden="true" />
      <Image
        src="/roniva-full-logo.png"
        alt=""
        width={1254}
        height={1254}
        className="pointer-events-none absolute -right-8 top-[46%] hidden h-[62%] w-auto opacity-[0.055] lg:block"
        loading="eager"
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="max-w-full break-words text-3xl font-semibold leading-[1.06] text-black sm:text-6xl sm:leading-[0.98] lg:text-7xl">
            {t.hero.headline}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-8 text-black/62 sm:text-lg">
            {t.hero.body}
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={`/${locale}#contact`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-black px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:w-auto"
            >
              {t.hero.primaryCta}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-5 text-sm text-black/45">{t.hero.proof}</p>
        </div>
      </div>
    </section>
  );
}
