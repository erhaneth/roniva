import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/landing-page";
import { dictionaries, isLocale, locales, type Dictionary, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://ronivatech.com";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "tr";
  const t = dictionaries[safeLocale];

  return {
    metadataBase: new URL(siteUrl),
    title: t.metadata.title,
    description: t.metadata.description,
    keywords: [...t.metadata.keywords],
    applicationName: "Roniva Tech",
    creator: "Roniva Tech",
    alternates: {
      canonical: `/${safeLocale}`,
      languages: {
        tr: "/tr",
        "ku-Latn": "/ku"
      }
    },
    openGraph: {
      title: t.metadata.title,
      description: t.metadata.description,
      url: `/${safeLocale}`,
      siteName: "Roniva Tech",
      locale: safeLocale === "ku" ? "ku_Latn" : "tr_TR",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: t.metadata.title,
      description: t.metadata.description
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
      ],
      apple: "/apple-touch-icon.png"
    }
  };
}

function buildJsonLd(locale: Locale, t: Dictionary) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Roniva Tech",
      description: t.metadata.description,
      url: `${siteUrl}/${locale}`,
      email: "ronivatech21@gmail.com",
      logo: `${siteUrl}/roniva-full-logo.png`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Diyarbakır",
        addressCountry: "TR"
      },
      areaServed: "TR",
      knowsLanguage: ["tr", "ku"]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: t.faq.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer
        }
      }))
    }
  ];
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = dictionaries[locale];

  return (
    <>
      {buildJsonLd(locale, dictionary).map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <LandingPage locale={locale} dictionary={dictionary} />
    </>
  );
}
