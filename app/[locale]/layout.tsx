import type { ReactNode } from "react";
import type { Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "../globals.css";
import { isLocale, type Locale } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap"
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600"],
  variable: "--font-montserrat",
  display: "swap"
});

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

const htmlLang: Record<Locale, string> = {
  tr: "tr",
  ku: "ku-Latn"
};

export const viewport: Viewport = {
  themeColor: "#f7f7f7"
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "tr";

  return (
    <html lang={htmlLang[safeLocale]} className={`${inter.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
