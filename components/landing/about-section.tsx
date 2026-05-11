import Image from "next/image";
import { pageSectionClass } from "@/components/landing/constants";
import type { LandingSectionProps } from "@/components/landing/types";

export function AboutSection({ t }: LandingSectionProps) {
  return (
    <section id="about" className={`bg-[#f7f7f7] ${pageSectionClass}`}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
        <div className="relative min-h-[420px] overflow-hidden rounded-[8px] border border-black/10 bg-black shadow-2xl shadow-black/[0.10] lg:min-h-[620px]">
          <Image
            src="/images/about.png"
            alt="Roniva Tech studio interior"
            fill
            sizes="(min-width: 1024px) 47vw, 100vw"
            className="h-full w-full object-cover object-[58%_50%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/22 via-transparent to-black/8" aria-hidden="true" />
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
