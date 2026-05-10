type SectionIntroProps = {
  eyebrow: string;
  title: string;
  body?: string;
  inverted?: boolean;
};

export function SectionIntro({ eyebrow, title, body, inverted = false }: SectionIntroProps) {
  return (
    <div className="max-w-3xl">
      <p className={`text-sm font-semibold ${inverted ? "text-[#7cffcb]" : "text-black/50"}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-3xl font-semibold leading-tight sm:text-5xl ${
          inverted ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>
      {body ? (
        <p className={`mt-5 text-base leading-8 ${inverted ? "text-white/62" : "text-black/64"}`}>
          {body}
        </p>
      ) : null}
    </div>
  );
}
