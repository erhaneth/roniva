import Image from "next/image";
import Link from "next/link";
import { RonivaWordmark } from "@/components/roniva-wordmark";
import type { LocalizedLandingSectionProps } from "@/components/landing/types";

export function Footer({ locale, t }: LocalizedLandingSectionProps) {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 text-center sm:px-6 md:grid-cols-3 md:items-center lg:px-8">
        <p className="mx-auto max-w-xl text-sm leading-6 text-black/56 md:mx-0 md:text-left">{t.footer.line}</p>
        <Link
          href={`/${locale}#top`}
          className="mx-auto flex w-fit items-center justify-center gap-3"
          aria-label="Roniva Tech home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-black">
            <Image
              src="/roniva-mark-light-transparent.png"
              alt=""
              width={24}
              height={24}
              className="h-5 w-5 object-contain"
            />
          </span>
          <RonivaWordmark compact />
        </Link>
        <p className="text-sm text-black/42 md:text-right">
          © {new Date().getFullYear()} Roniva Tech. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
