import { getWhatsAppUrl } from "@/lib/contact";

type WhatsAppButtonProps = {
  label: string;
  message: string;
  className?: string;
  fullWidth?: boolean;
  size?: "sm" | "md";
  variant?: "dark" | "outline" | "light";
};

const variantClasses = {
  dark: "bg-black text-white shadow-sm shadow-black/15 hover:bg-neutral-800",
  outline: "border border-black/10 bg-white text-black hover:bg-black/[0.04]",
  light: "border border-black/10 bg-[#f7f7f7] text-black hover:bg-white"
} as const;

const sizeClasses = {
  sm: "px-3 py-2 text-sm",
  md: "px-5 py-3 text-sm"
} as const;

function WhatsAppBadge() {
  return (
    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm shadow-[#25D366]/30">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
        <path d="M19.07 4.93A9.96 9.96 0 0 0 12.01 2C6.47 2 2 6.47 2 12c0 1.77.47 3.5 1.37 5.01L2 22l5.13-1.34A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10 0-2.66-1.04-5.16-2.93-7.07ZM12 20.1c-1.55 0-3.07-.42-4.38-1.2l-.31-.19-3.04.79.81-2.96-.2-.32A8.06 8.06 0 0 1 3.9 12c0-4.49 3.65-8.1 8.1-8.1 2.2 0 4.27.86 5.83 2.42A8.17 8.17 0 0 1 20.1 12c0 4.47-3.63 8.1-8.1 8.1Zm4.57-5.73c-.25-.12-1.47-.72-1.7-.8-.23-.08-.4-.12-.57.12-.17.25-.65.8-.8.97-.15.17-.3.2-.55.08-.25-.12-1.05-.39-1.99-1.23-.73-.65-1.22-1.45-1.37-1.7-.14-.25-.02-.39.1-.52.1-.1.25-.27.37-.41.12-.14.16-.25.24-.42.08-.17.04-.32-.02-.44-.06-.12-.57-1.38-.78-1.89-.2-.48-.41-.42-.57-.43h-.49c-.17 0-.44.06-.67.32-.23.25-.89.87-.89 2.13 0 1.26.92 2.48 1.05 2.65.12.17 1.8 2.75 4.36 3.86.61.26 1.1.42 1.48.54.62.2 1.18.18 1.62.11.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
      </svg>
    </span>
  );
}

export function WhatsAppButton({
  label,
  message,
  className = "",
  fullWidth = false,
  size = "md",
  variant = "outline"
}: WhatsAppButtonProps) {
  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-[8px] font-semibold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
        variantClasses[variant]
      } ${sizeClasses[size]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      <WhatsAppBadge />
      <span>{label}</span>
    </a>
  );
}
