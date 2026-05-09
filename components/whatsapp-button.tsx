import { MessageCircle } from "lucide-react";
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
      className={`inline-flex items-center justify-center gap-2 rounded-[8px] font-semibold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
        variantClasses[variant]
      } ${sizeClasses[size]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      <MessageCircle aria-hidden="true" className="h-4 w-4" />
      <span>{label}</span>
    </a>
  );
}
