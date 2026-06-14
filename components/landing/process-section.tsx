import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { pageSectionClass } from "@/components/landing/constants";
import type { LocalizedLandingSectionProps } from "@/components/landing/types";

export function ProcessSection({ t }: LocalizedLandingSectionProps) {
  return (
    <section id="process" className={`flex items-center bg-[#f7f7f7] ${pageSectionClass}`}>
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <Reveal>
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-black sm:text-6xl">
            {t.pricing.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-black/64">{t.pricing.body}</p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-black/58 sm:text-base sm:leading-8">
            {t.pricing.note}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="rounded-[8px] border border-black/10 bg-white p-4 shadow-2xl shadow-black/[0.08] sm:p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              {t.process.steps.map((step, index) => (
                <article key={step.title} className="rounded-[8px] border border-black/10 bg-[#f7f7f7] p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-black text-xs font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-black">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-black/62">{step.description}</p>
                </article>
              ))}
            </div>
            <div className="mt-5 border-t border-black/10 pt-5">
              <div className="grid gap-3 sm:grid-cols-2">
                {t.pricing.bullets.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-6 text-black/64">
                    <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-black" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {t.pricing.plans.map((plan) => (
                <div key={plan.label} className="rounded-[8px] border border-black/10 p-4">
                  <p className="text-xs font-semibold text-black/50">{plan.label}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-black">{plan.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
