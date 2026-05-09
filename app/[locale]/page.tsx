import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/landing-page";
import { dictionaries, isLocale, locales, type Locale } from "@/lib/i18n";

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
      images: [
        {
          url: "/apple-touch-icon.png",
          width: 180,
          height: 180,
          alt: "Roniva Tech"
        }
      ],
      locale: safeLocale === "ku" ? "ku_Latn" : "tr_TR",
      type: "website"
    },
    twitter: {
      card: "summary",
      title: t.metadata.title,
      description: t.metadata.description,
      images: ["/apple-touch-icon.png"]
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

export default async function Page({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <LandingPage locale={locale} dictionary={dictionaries[locale]} />;
}
