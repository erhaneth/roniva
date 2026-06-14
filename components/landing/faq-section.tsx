import { Plus } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { pageSectionClass } from "@/components/landing/constants";
import { SectionIntro } from "@/components/landing/section-intro";
import type { LandingSectionProps } from "@/components/landing/types";

export function FaqSection({ t }: LandingSectionProps) {
  return (
    <section id="faq" className={`flex items-center bg-white ${pageSectionClass}`}>
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:min-h-[calc(100svh-14rem)] lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
        <Reveal>
          <SectionIntro title={t.faq.title} body={t.faq.body} />
        </Reveal>
        <Reveal delay={100} className="grid gap-3">
          {t.faq.items.map((item) => (
            <details
              key={item.question}
              className="group rounded-[8px] border border-black/10 bg-[#f7f7f7] transition duration-300 open:border-black/16 open:bg-white open:shadow-2xl open:shadow-black/[0.06]"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-base font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                {item.question}
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white transition-transform duration-300 group-open:rotate-45 group-open:bg-black group-open:text-white"
                  aria-hidden="true"
                >
                  <Plus className="h-3.5 w-3.5" />
                </span>
              </summary>
              <p className="px-5 pb-5 text-sm leading-7 text-black/64">{item.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
