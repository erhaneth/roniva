import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CalendarCheck,
  Check,
  Code2,
  Gauge,
  Globe,
  Plug,
  Quote,
  Target,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { RonivaWordmark } from "@/components/roniva-wordmark";
import { WhatsAppButton } from "@/components/whatsapp-button";
import type { Dictionary, Locale } from "@/lib/i18n";

type LandingPageProps = {
  locale: Locale;
  dictionary: Dictionary;
};

const serviceIcons = [Bot, Globe, Code2, Plug, Target, Gauge] as const;
const portfolioAccents = ["#111111", "#d6a84f", "#f0b8cf"] as const;

export function LandingPage({ locale, dictionary: t }: LandingPageProps) {
  return (
    <>
      <SiteHeader locale={locale} nav={t.nav} cta={t.hero.primaryCta} whatsapp={t.whatsapp} />
      <main id="top" className="overflow-hidden">
        <Hero locale={locale} t={t} />
        <Services t={t} />
        <Portfolio t={t} />
        <Testimonials t={t} />
        <Process t={t} />
        <Consultation locale={locale} t={t} />
        <About t={t} />
        <Contact t={t} />
      </main>
      <Footer locale={locale} t={t} />
    </>
  );
}

function Hero({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <section className="relative isolate border-b border-black/10 bg-[#f7f7f7] text-black">
      <div className="hero-grid absolute inset-0 opacity-55" aria-hidden="true" />
      <Image
        src="/roniva-full-logo.png"
        alt=""
        width={1254}
        height={1254}
        className="pointer-events-none absolute -right-6 top-24 hidden h-[78%] w-auto opacity-[0.055] lg:block"
        loading="eager"
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="max-w-full break-words text-3xl font-semibold leading-[1.06] text-black sm:text-6xl sm:leading-[0.98] lg:text-7xl">
            {t.hero.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-8 text-black/62 sm:text-lg">
            {t.hero.body}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={`/${locale}#contact`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-black px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:w-auto"
            >
              {t.hero.primaryCta}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-5 text-sm text-black/45">{t.hero.proof}</p>
        </div>
      </div>
    </section>
  );
}

function Services({ t }: { t: Dictionary }) {
  return (
    <section id="services" className="bg-[#f7f7f7] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow={t.services.eyebrow} title={t.services.title} body={t.services.body} />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index] ?? Bot;
            const shouldSpan = t.services.items.length % 3 === 1 && index === t.services.items.length - 1;
            return (
              <article
                key={service.title}
                className={`group rounded-[8px] border border-black/10 bg-white p-6 shadow-sm shadow-black/[0.03] transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-2xl hover:shadow-black/[0.08] ${
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
                <h3 className="mt-8 text-xl font-semibold text-black">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/62">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Portfolio({ t }: { t: Dictionary }) {
  return (
    <section id="work" className="bg-[#f7f7f7] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow={t.portfolio.eyebrow} title={t.portfolio.title} body={t.portfolio.body} />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {t.portfolio.items.map((item, index) => (
            <article
              key={item.name}
              className="group overflow-hidden rounded-[8px] border border-black/10 bg-white shadow-sm shadow-black/[0.03] transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/[0.08]"
            >
              <ProjectMockup index={index} accent={portfolioAccents[index]} />
              <div className="p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between lg:flex-col xl:flex-row">
                  <div>
                    <p className="text-sm text-black/48">{item.type}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-black">{item.name}</h3>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-black/62">{item.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[8px] border border-black/10 px-3 py-1 text-xs font-medium text-black/62"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectMockup({ index, accent }: { index: number; accent: string }) {
  const bars =
    index === 0
      ? [84, 58, 72]
      : index === 1
        ? [62, 92, 47]
        : [76, 54, 89];

  return (
    <div className="border-b border-black/10 bg-[#f7f7f7] p-4">
      <div className="overflow-hidden rounded-[8px] border border-black/10 bg-white">
        <div className="flex items-center gap-1 border-b border-black/10 px-3 py-2">
          <span className="h-2 w-2 rounded-[4px] bg-black/20" />
          <span className="h-2 w-2 rounded-[4px] bg-black/12" />
          <span className="h-2 w-2 rounded-[4px] bg-black/12" />
          <span className="ml-3 h-3 w-24 rounded-[4px] bg-black/8" />
        </div>
        <div className="grid min-h-56 gap-4 p-4 text-black sm:grid-cols-[1fr_0.72fr] lg:grid-cols-1 xl:grid-cols-[1fr_0.72fr]">
          <div>
            <div className="h-3 w-16 rounded-[4px]" style={{ backgroundColor: accent }} />
            <div className="mt-5 h-7 w-4/5 rounded-[4px] bg-black" />
            <div className="mt-2 h-7 w-3/5 rounded-[4px] bg-black" />
            <div className="mt-5 space-y-2">
              {bars.map((bar) => (
                <div key={bar} className="h-2 rounded-[4px] bg-black/8">
                  <div className="h-2 rounded-[4px] bg-black" style={{ width: `${bar}%` }} />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[8px] border border-black/10 bg-[#f7f7f7] p-3">
            <div className="flex items-center justify-between">
              <div className="h-8 w-8 rounded-[8px] bg-black" />
              <div className="h-3 w-14 rounded-[4px]" style={{ backgroundColor: accent }} />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-2">
              <div className="h-16 rounded-[8px] bg-white" />
              <div className="h-16 rounded-[8px] bg-black" />
            </div>
            <div className="mt-3 h-16 rounded-[8px] bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Testimonials({ t }: { t: Dictionary }) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {t.testimonials.items.map((item) => (
            <figure
              key={item.name}
              className="rounded-[8px] border border-black/10 bg-[#f7f7f7] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-2xl hover:shadow-black/[0.08]"
            >
              <Quote aria-hidden="true" className="h-5 w-5 text-black/32" />
              <blockquote className="mt-6 text-base leading-8 text-black/74">“{item.quote}”</blockquote>
              <figcaption className="mt-8 border-t border-black/10 pt-5">
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

function Process({ t }: { t: Dictionary }) {
  return (
    <section id="process" className="bg-[#f7f7f7] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow={t.process.eyebrow} title={t.process.title} />
        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {t.process.steps.map((step, index) => (
            <article key={step.title} className="relative rounded-[8px] border border-black/10 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-black text-sm font-semibold text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-8 text-xl font-semibold text-black">{step.title}</h3>
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

function Consultation({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <section id="pricing" className="bg-[#f7f7f7] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold text-black/50">{t.pricing.eyebrow}</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-black sm:text-5xl">
            {t.pricing.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-black/64">{t.pricing.body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

function About({ t }: { t: Dictionary }) {
  return (
    <section id="about" className="bg-[#f7f7f7] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
        <div className="relative flex min-h-[440px] items-center justify-center overflow-hidden rounded-[8px] border border-black/10 bg-white p-8 shadow-2xl shadow-black/[0.08] lg:min-h-[520px]">
          <div
            className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.045),rgba(255,255,255,0)_46%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 opacity-55 [background-image:linear-gradient(rgba(0,0,0,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.055)_1px,transparent_1px)] [background-size:52px_52px]"
            aria-hidden="true"
          />
          <Image
            src="/roniva-full-logo.png"
            alt="Roniva Tech"
            width={1254}
            height={1254}
            className="relative z-10 h-auto w-[min(88%,30rem)] object-contain drop-shadow-[0_24px_70px_rgba(0,0,0,0.12)]"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-black/50">{t.about.eyebrow}</p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-[8px] border border-black/10 bg-black/[0.03] px-3 py-2 text-xs font-semibold text-black/58">
            <span className="h-1.5 w-1.5 rounded-full bg-black" aria-hidden="true" />
            {t.about.origin}
          </div>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-black sm:text-5xl">{t.about.title}</h2>
          <p className="mt-5 text-base leading-8 text-black/64">{t.about.body}</p>
        </div>
      </div>
    </section>
  );
}

function Contact({ t }: { t: Dictionary }) {
  return (
    <section id="contact" className="bg-[#f7f7f7] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold text-black/50">{t.contact.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-black sm:text-5xl">{t.contact.title}</h2>
          <p className="mt-5 text-base leading-8 text-black/64">{t.contact.body}</p>
          <div className="mt-8 grid gap-3">
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

function Field({
  label,
  name,
  placeholder,
  type = "text"
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-black">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-[8px] border border-black/12 bg-[#f7f7f7] px-4 py-3 text-sm text-black outline-none transition placeholder:text-black/32 focus:border-black focus:bg-white"
      />
    </div>
  );
}

function Footer({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 text-center sm:px-6 md:grid-cols-3 md:items-center lg:px-8">
        <p className="mx-auto max-w-xl text-sm leading-6 text-black/56 md:mx-0 md:text-left">{t.footer.line}</p>
        <Link
          href={`/${locale}#top`}
          className="mx-auto flex w-fit items-center justify-center gap-3"
          aria-label="Roniva Tech home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-black">
            <Image
              src="/roniva-mark-light-transparent.png"
              alt=""
              width={24}
              height={24}
              className="h-5 w-5 object-contain"
            />
          </span>
          <RonivaWordmark compact />
        </Link>
        <p className="text-sm text-black/42 md:text-right">© {new Date().getFullYear()} Roniva Tech. {t.footer.rights}</p>
      </div>
    </footer>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
  inverted = false
}: {
  eyebrow: string;
  title: string;
  body?: string;
  inverted?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className={`text-sm font-semibold ${inverted ? "text-[#7cffcb]" : "text-black/50"}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-3xl font-semibold leading-tight sm:text-5xl ${inverted ? "text-white" : "text-black"}`}>
        {title}
      </h2>
      {body ? (
        <p className={`mt-5 text-base leading-8 ${inverted ? "text-white/62" : "text-black/64"}`}>{body}</p>
      ) : null}
    </div>
  );
}
