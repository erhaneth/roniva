import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { pageSectionClass } from "@/components/landing/constants";
import type { LocalizedLandingSectionProps } from "@/components/landing/types";

export function ConsultationSection({ locale, t }: LocalizedLandingSectionProps) {
  return (
    <section id="pricing" className={`bg-[#f7f7f7] ${pageSectionClass}`}>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold text-black/50">{t.pricing.eyebrow}</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-black sm:text-5xl">
            {t.pricing.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-black/64">{t.pricing.body}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}#contact`}
              className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-black px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800"
            >
              {t.pricing.primaryCta}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              href={`/${locale}#services`}
              className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#f2f2f2]"
            >
              {t.pricing.secondaryCta}
            </Link>
            <WhatsAppButton label={t.whatsapp.label} message={t.whatsapp.message} variant="light" />
          </div>
        </div>
        <div className="rounded-[8px] border border-black/10 bg-white p-5 shadow-sm shadow-black/[0.03]">
          <div className="grid gap-3">
            {t.pricing.plans.map((plan) => (
              <div key={plan.label} className="rounded-[8px] border border-black/10 bg-[#f7f7f7] p-4">
                <p className="text-xs font-semibold text-black/50">{plan.label}</p>
                <p className="mt-2 text-lg font-semibold text-black">{plan.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 border-t border-black/10 pt-5">
            <div className="grid gap-3">
              {t.pricing.bullets.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-6 text-black/64">
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-black" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
