import { Reveal } from "@/components/reveal";
import { pageSectionClass } from "@/components/landing/constants";
import { ProjectMockup } from "@/components/landing/project-mockup";
import { SectionIntro } from "@/components/landing/section-intro";
import type { LandingSectionProps } from "@/components/landing/types";

const portfolioAccents = ["#111111", "#d6a84f", "#f0b8cf", "#77d6b2"] as const;

export function PortfolioSection({ t }: LandingSectionProps) {
  return (
    <section id="work" className={`flex items-center bg-[#f7f7f7] ${pageSectionClass}`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionIntro title={t.portfolio.title} body={t.portfolio.body} />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {t.portfolio.items.map((item, index) => (
            <Reveal key={item.name} delay={index * 80} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-black/10 bg-white shadow-sm shadow-black/[0.03] transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/[0.08]">
                <ProjectMockup index={index} accent={portfolioAccents[index] ?? "#111111"} />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between lg:flex-col xl:flex-row">
                    <div>
                      <p className="text-sm text-black/48">{item.type}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-black">
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="underline-offset-4 transition hover:text-black/70 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                          >
                            {item.name}
                          </a>
                        ) : (
                          item.name
                        )}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-black/62">{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
