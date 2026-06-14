import Image from "next/image";
import Link from "next/link";
import type { LocalizedLandingSectionProps } from "@/components/landing/types";

export function HeroSection({ locale, t }: LocalizedLandingSectionProps) {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden border-b border-black/10 bg-black text-white">
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
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="-translate-y-7 max-w-3xl sm:-translate-x-3 sm:-translate-y-10 lg:-translate-x-4">
          <h1 className="animate-rise max-w-full break-words text-4xl font-semibold leading-[1.08] text-white sm:text-6xl sm:leading-[1.02] lg:text-[4.5rem] lg:leading-[1.02]">
            {t.hero.headline}
          </h1>
          <p className="animate-rise mt-8 max-w-xl text-pretty text-base leading-8 text-white/72 [animation-delay:120ms] sm:text-lg">
            {t.hero.body}
          </p>
          <div className="animate-rise mt-14 flex w-full max-w-[16.5rem] flex-col items-stretch gap-3 [animation-delay:240ms] sm:mt-10 sm:max-w-none sm:flex-row sm:items-start">
            <Link
              href={`/${locale}/contact`}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-white px-5 py-3 text-sm font-semibold text-black shadow-2xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-white/88 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:px-6 sm:py-3.5"
            >
              {t.hero.primaryCta}
            </Link>
            <Link
              href={`/${locale}/services`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] border border-white/30 bg-white/[0.08] bg-[linear-gradient(135deg,rgba(255,255,255,0.24),rgba(255,255,255,0.06)_48%,rgba(255,255,255,0.12))] px-5 py-3 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_16px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/[0.14] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:px-6 sm:py-3.5"
            >
              {t.hero.secondaryCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
