import { ArrowRight, CalendarCheck, Gauge } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { pageSectionClass } from "@/components/landing/constants";
import { Field } from "@/components/landing/form-field";
import type { LandingSectionProps } from "@/components/landing/types";

export function ContactSection({ t }: LandingSectionProps) {
  return (
    <section id="contact" className={`bg-[#f7f7f7] ${pageSectionClass}`}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold text-black/50">{t.contact.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-black sm:text-5xl">{t.contact.title}</h2>
          <p className="mt-5 text-base leading-8 text-black/64">{t.contact.body}</p>
          <div className="mt-7 grid gap-3">
            <div className="flex items-center gap-3 text-sm font-medium text-black/70">
              <CalendarCheck aria-hidden="true" className="h-5 w-5 text-black" />
              {t.contact.call}
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-black/70">
              <Gauge aria-hidden="true" className="h-5 w-5 text-black" />
              {t.contact.roadmap}
            </div>
          </div>
          <WhatsAppButton
            label={t.whatsapp.contactCta}
            message={t.whatsapp.message}
            className="mt-7"
            variant="dark"
          />
        </div>
        <form
          action="mailto:hello@ronivatech.com"
          method="post"
          encType="text/plain"
          className="rounded-[8px] border border-black/10 bg-white p-4 shadow-2xl shadow-black/[0.08] sm:p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label={t.contact.name} name="name" placeholder={t.contact.namePlaceholder} />
            <Field label={t.contact.email} name="email" type="email" placeholder={t.contact.emailPlaceholder} />
          </div>
          <div className="mt-4">
            <Field label={t.contact.company} name="company" placeholder={t.contact.companyPlaceholder} />
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="text-sm font-semibold text-black">
              {t.contact.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder={t.contact.messagePlaceholder}
              className="mt-2 w-full resize-none rounded-[8px] border border-black/12 bg-[#f7f7f7] px-4 py-3 text-sm text-black outline-none transition placeholder:text-black/32 focus:border-black focus:bg-white"
            />
          </div>
          <button
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-black px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            {t.contact.submit}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
          <p className="mt-4 text-center text-sm text-black/48">{t.contact.note}</p>
        </form>
      </div>
    </section>
  );
}
