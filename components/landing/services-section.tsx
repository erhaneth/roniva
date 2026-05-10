import { Bot, Code2, Gauge, Globe, Plug, Target } from "lucide-react";
import { pageSectionClass } from "@/components/landing/constants";
import { SectionIntro } from "@/components/landing/section-intro";
import type { LandingSectionProps } from "@/components/landing/types";

const serviceIcons = [Bot, Globe, Code2, Plug, Target, Gauge] as const;

export function ServicesSection({ t }: LandingSectionProps) {
  return (
    <section id="services" className={`bg-[#f7f7f7] ${pageSectionClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow={t.services.eyebrow} title={t.services.title} body={t.services.body} />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index] ?? Bot;
            const shouldSpan = t.services.items.length % 3 === 1 && index === t.services.items.length - 1;

            return (
              <article
                key={service.title}
                className={`group rounded-[8px] border border-black/10 bg-white p-5 shadow-sm shadow-black/[0.03] transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-2xl hover:shadow-black/[0.08] ${
                  shouldSpan ? "lg:col-span-3" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-black text-white transition group-hover:bg-[#111]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <span className="rounded-[8px] bg-black/[0.04] px-3 py-1 text-xs font-semibold text-black/58">
                    {service.stat}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-black">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/62">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
