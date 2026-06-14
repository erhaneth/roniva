type SectionIntroProps = {
  title: string;
  body?: string;
  inverted?: boolean;
};

export function SectionIntro({ title, body, inverted = false }: SectionIntroProps) {
  return (
    <div className="max-w-2xl">
      <h2
        className={`text-3xl font-semibold leading-tight sm:text-5xl ${
          inverted ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>
      {body ? (
        <p className={`mt-4 text-base leading-7 ${inverted ? "text-white/62" : "text-black/64"}`}>
          {body}
        </p>
      ) : null}
    </div>
  );
}
