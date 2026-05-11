import { CalendarCheck, Gauge } from "lucide-react";
import Image from "next/image";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { pageSectionClass } from "@/components/landing/constants";
import type { LandingSectionProps } from "@/components/landing/types";

export function ContactSection({ t }: LandingSectionProps) {
  return (
    <section id="contact" className={`bg-[#f7f7f7] ${pageSectionClass}`}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold text-black/50">{t.contact.eyebrow}</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-black sm:text-6xl">
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
          </div>
          <WhatsAppButton
            label={t.whatsapp.contactCta}
            message={t.whatsapp.message}
            className="mt-8"
            variant="dark"
          />
        </div>
        <div className="relative min-h-[420px] overflow-hidden rounded-[8px] border border-black/10 bg-black shadow-2xl shadow-black/[0.10] lg:min-h-[620px]">
          <Image
            src="/images/contact.png"
            alt="Roniva Tech branded workspace"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-full w-full object-cover object-[44%_50%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/18 to-transparent" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
