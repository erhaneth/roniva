import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { isLocale, type Locale } from "@/lib/i18n";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Roniva Tech";

// The default font embedded by next/og only covers basic latin glyphs,
// so these taglines are written without Turkish/Kurmancî diacritics.
const taglines: Record<Locale, string> = {
  tr: "Yapay Zeka Otomasyon & Web Sistemleri",
  ku: "Otomasyona AI & Malper"
};

type OgImageProps = {
  params: Promise<{ locale: string }>;
};

export default async function OpengraphImage({ params }: OgImageProps) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "tr";
  const mark = await readFile(join(process.cwd(), "public", "roniva-mark-light-transparent.png"));
  const markSrc = `data:image/png;base64,${mark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050505",
          backgroundImage: "radial-gradient(circle at 50% 8%, #2a2a2a 0%, #050505 58%)"
        }}
      >
        <img src={markSrc} alt="" width={148} height={148} />
        <div
          style={{
            marginTop: 44,
            display: "flex",
            color: "#ffffff",
            fontSize: 84,
            fontWeight: 600,
            letterSpacing: 30
          }}
        >
          RONIVA
        </div>
        <div
          style={{
            marginTop: 6,
            display: "flex",
            color: "#ffffff",
            fontSize: 30,
            fontWeight: 500,
            letterSpacing: 26
          }}
        >
          TECH
        </div>
        <div
          style={{
            marginTop: 40,
            width: 76,
            height: 4,
            backgroundColor: "#7cffcb",
            borderRadius: 2
          }}
        />
        <div
          style={{
            marginTop: 32,
            display: "flex",
            color: "rgba(255, 255, 255, 0.66)",
            fontSize: 30,
            fontWeight: 500,
            letterSpacing: 2
          }}
        >
          {taglines[safeLocale]}
        </div>
      </div>
    ),
    size
  );
}
