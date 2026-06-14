import { Bot, CalendarCheck, Gauge, Globe2, Mail, Palette } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { contactEmail, pageSectionClass } from "@/components/landing/constants";
import type { LandingSectionProps } from "@/components/landing/types";

const contactServiceIcons = [Globe2, Palette, Bot] as const;

export function ContactSection({ t }: LandingSectionProps) {
  return (
    <section id="contact" className={`flex items-center bg-[#f7f7f7] ${pageSectionClass}`}>
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:min-h-[calc(100svh-12rem)] lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <Reveal className="max-w-3xl">
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-black sm:text-6xl">
            {t.contact.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-black/64">{t.contact.body}</p>
          <div className="mt-7 grid max-w-md gap-3">
            <div className="flex items-center gap-3 text-sm font-medium text-black/70">
              <CalendarCheck aria-hidden="true" className="h-5 w-5 text-black" />
              {t.contact.call}
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-black/70">
              <Gauge aria-hidden="true" className="h-5 w-5 text-black" />
              {t.contact.roadmap}
            </div>
            <a
              href={`mailto:${contactEmail}`}
              className="flex w-fit items-center gap-3 text-sm font-medium text-black/70 underline-offset-4 transition hover:text-black hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <Mail aria-hidden="true" className="h-5 w-5 text-black" />
              {contactEmail}
            </a>
          </div>
          <WhatsAppButton
            label={t.whatsapp.contactCta}
            message={t.whatsapp.message}
            className="mt-8"
            variant="dark"
          />
        </Reveal>
        <Reveal delay={100}>
          <div className="max-w-xl lg:ml-auto">
            <p className="text-sm font-semibold text-black">{t.contact.servicesTitle}</p>
            <div className="mt-3 grid gap-3">
              {t.contact.services.map((item, index) => {
                const Icon = contactServiceIcons[index] ?? Globe2;

                return (
                  <article
                    key={item.title}
                    className="flex gap-4 rounded-[8px] border border-black/10 bg-white/80 p-5 shadow-sm shadow-black/[0.03] backdrop-blur"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] border border-black/10 bg-[#f7f7f7]">
                      <Icon aria-hidden="true" className="h-5 w-5 text-black" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-black">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-black/62">{item.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
