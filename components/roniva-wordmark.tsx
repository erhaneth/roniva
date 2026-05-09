type RonivaWordmarkProps = {
  compact?: boolean;
  className?: string;
};

const ronivaLetters = ["R", "O", "N", "I", "V"] as const;
const techLetters = ["T", "E", "C", "H"] as const;

export function RonivaWordmark({ compact = false, className = "" }: RonivaWordmarkProps) {
  return (
    <span
      className={`roniva-wordmark inline-flex flex-col items-center text-black ${className}`}
      aria-label="Roniva Tech"
    >
      <span className={`flex items-end justify-center ${compact ? "gap-[0.34em]" : "gap-[0.5em]"}`}>
        {ronivaLetters.map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            className={`font-medium leading-none ${compact ? "text-[12px]" : "text-[18px]"}`}
          >
            {letter}
          </span>
        ))}
        <svg
          aria-hidden="true"
          viewBox="0 0 28 28"
          className={`${compact ? "mb-[1px] h-[12px] w-[13px]" : "mb-[2px] h-[18px] w-[19px]"}`}
        >
          <path
            d="M3 26 14 2 25 26"
            fill="none"
            stroke="currentColor"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth={compact ? 3.2 : 4}
          />
        </svg>
      </span>
      <span
        className={`flex justify-center font-medium leading-none ${compact ? "mt-1 gap-[1.2em] text-[7px]" : "mt-3 gap-[1.55em] text-[10px]"}`}
      >
        {techLetters.map((letter) => (
          <span key={letter}>{letter}</span>
        ))}
      </span>
    </span>
  );
}
