import type { Dictionary, Locale } from "@/lib/i18n";

export type LandingPageProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export type LandingSectionProps = {
  t: Dictionary;
};

export type LocalizedLandingSectionProps = LandingSectionProps & {
  locale: Locale;
};
