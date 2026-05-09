import type { ReactNode } from "react";
import "../globals.css";
import { isLocale, type Locale } from "@/lib/i18n";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

const htmlLang: Record<Locale, string> = {
  tr: "tr",
  ku: "ku-Latn"
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "tr";

  return (
    <html lang={htmlLang[safeLocale]}>
      <body>{children}</body>
    </html>
  );
}
