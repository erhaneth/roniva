import { pageSectionClass } from "@/components/landing/constants";
import { SectionIntro } from "@/components/landing/section-intro";
import type { LandingSectionProps } from "@/components/landing/types";

export function ProcessSection({ t }: LandingSectionProps) {
  return (
    <section id="process" className={`bg-[#f7f7f7] ${pageSectionClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow={t.process.eyebrow} title={t.process.title} />
        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {t.process.steps.map((step, index) => (
            <article key={step.title} className="relative rounded-[8px] border border-black/10 bg-white p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-black text-sm font-semibold text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-black">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-black/62">{step.description}</p>
              {index < t.process.steps.length - 1 ? (
                <div
                  className="absolute -right-2 top-11 hidden h-px w-4 bg-black/20 lg:block"
                  aria-hidden="true"
                />
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
