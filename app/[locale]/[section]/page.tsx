import { notFound } from "next/navigation";
import LocalePage, { generateMetadata as generateLocaleMetadata } from "../page";
import { navTargets } from "@/components/landing/constants";
import { isLocale, locales } from "@/lib/i18n";

type SectionPageProps = {
  params: Promise<{ locale: string; section: string }>;
};

const sectionTargets = navTargets
  .map(([, target]) => target)
  .filter((target) => target !== "top");
const sectionTargetSet = new Set<string>(sectionTargets);

export function generateStaticParams() {
  return locales.flatMap((locale) => sectionTargets.map((section) => ({ locale, section })));
}

export async function generateMetadata({ params }: SectionPageProps) {
  const { locale } = await params;
  return generateLocaleMetadata({ params: Promise.resolve({ locale }) });
}

export default async function SectionPage({ params }: SectionPageProps) {
  const { locale, section } = await params;

  if (!isLocale(locale) || !sectionTargetSet.has(section)) {
    notFound();
  }

  return <LocalePage params={Promise.resolve({ locale })} />;
}
