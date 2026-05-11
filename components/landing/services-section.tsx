import { Bot, Code2, Gauge, Globe, Plug, Target } from "lucide-react";
import Image from "next/image";
import { pageSectionClass } from "@/components/landing/constants";
import { SectionIntro } from "@/components/landing/section-intro";
import type { LandingSectionProps } from "@/components/landing/types";

const serviceIcons = [Bot, Globe, Code2, Plug, Target, Gauge] as const;

export function ServicesSection({ t }: LandingSectionProps) {
  return (
    <section id="services" className={`relative isolate overflow-hidden bg-black text-white ${pageSectionClass}`}>
      <Image
        src="/images/services.png"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow={t.services.eyebrow} title={t.services.title} body={t.services.body} inverted />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index] ?? Bot;
            const shouldSpan = t.services.items.length % 3 === 1 && index === t.services.items.length - 1;

            return (
              <article
                key={service.title}
                className={`group flex h-full flex-col rounded-[8px] border border-white/12 bg-white/[0.08] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/22 hover:bg-white/[0.12] ${
                  shouldSpan ? "lg:col-span-3" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-white text-black transition group-hover:bg-[#7cffcb]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <span className="rounded-[8px] bg-white/[0.10] px-3 py-1 text-xs font-semibold text-white/70">
                    {service.stat}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/64">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
