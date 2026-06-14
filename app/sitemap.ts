import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

const siteUrl = "https://ronivatech.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: locale === "tr" ? 1 : 0.9,
    alternates: {
      languages: {
        tr: `${siteUrl}/tr`,
        "ku-Latn": `${siteUrl}/ku`
      }
    }
  }));
}
