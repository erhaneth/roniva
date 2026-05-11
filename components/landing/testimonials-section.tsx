import { Quote } from "lucide-react";
import { pageSectionClass } from "@/components/landing/constants";
import { SectionIntro } from "@/components/landing/section-intro";
import type { LandingSectionProps } from "@/components/landing/types";

export function TestimonialsSection({ t }: LandingSectionProps) {
  return (
    <section className={`bg-white ${pageSectionClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {t.testimonials.items.map((item) => (
            <figure
              key={item.name}
              className="flex h-full flex-col rounded-[8px] border border-black/10 bg-[#f7f7f7] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-2xl hover:shadow-black/[0.08]"
            >
              <Quote aria-hidden="true" className="h-5 w-5 text-black/32" />
              <blockquote className="mt-5 flex-1 text-base leading-8 text-black/74">“{item.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-black/10 pt-5">
                <p className="font-semibold text-black">{item.name}</p>
                <p className="mt-1 text-sm text-black/50">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
