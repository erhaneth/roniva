import { SiteHeader } from "@/components/site-header";
import { AboutSection } from "@/components/landing/about-section";
import { ContactSection } from "@/components/landing/contact-section";
import { FaqSection } from "@/components/landing/faq-section";
import { Footer } from "@/components/landing/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { PortfolioSection } from "@/components/landing/portfolio-section";
import { ProcessSection } from "@/components/landing/process-section";
import { ServicesSection } from "@/components/landing/services-section";
import type { LandingPageProps } from "@/components/landing/types";

export function LandingPage({ locale, dictionary: t }: LandingPageProps) {
  return (
    <>
      <SiteHeader locale={locale} nav={t.nav} whatsapp={t.whatsapp} />
      <main id="top" className="overflow-hidden">
        <HeroSection locale={locale} t={t} />
        <ProcessSection locale={locale} t={t} />
        <ServicesSection t={t} />
        <PortfolioSection t={t} />
        <AboutSection t={t} />
        <FaqSection t={t} />
        <ContactSection t={t} />
      </main>
      <Footer locale={locale} t={t} />
    </>
  );
}
