import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Roniva Tech",
    short_name: "Roniva",
    description:
      "Roniva Tech, küçük işletmeler için Yapay Zeka otomasyon, iş akışı sistemleri ve modern web siteleri kurar.",
    start_url: "/tr",
    display: "standalone",
    background_color: "#f7f7f7",
    theme_color: "#050505",
    icons: [
      { src: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  };
}
