import Image from "next/image";
import { pageSectionClass } from "@/components/landing/constants";
import type { LandingSectionProps } from "@/components/landing/types";

export function AboutSection({ t }: LandingSectionProps) {
  return (
    <section id="about" className={`bg-[#f7f7f7] ${pageSectionClass}`}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
        <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-[8px] border border-black/10 bg-white p-8 shadow-2xl shadow-black/[0.08] lg:min-h-[380px]">
          <div
            className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.045),rgba(255,255,255,0)_46%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 opacity-55 [background-image:linear-gradient(rgba(0,0,0,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.055)_1px,transparent_1px)] [background-size:52px_52px]"
            aria-hidden="true"
          />
          <Image
            src="/roniva-full-logo.png"
            alt="Roniva Tech"
            width={1254}
            height={1254}
            className="relative z-10 h-auto w-[min(88%,30rem)] object-contain drop-shadow-[0_24px_70px_rgba(0,0,0,0.12)]"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-black/50">{t.about.eyebrow}</p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-[8px] border border-black/10 bg-black/[0.03] px-3 py-2 text-xs font-semibold text-black/58">
            <span className="h-1.5 w-1.5 rounded-full bg-black" aria-hidden="true" />
            {t.about.origin}
          </div>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-black sm:text-5xl">{t.about.title}</h2>
          <p className="mt-5 text-base leading-8 text-black/64">{t.about.body}</p>
        </div>
      </div>
    </section>
  );
}
