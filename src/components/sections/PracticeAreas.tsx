import { SiteContent } from "@/content/types";
import Reveal from "@/components/Reveal";

export default function PracticeAreas({ content }: { content: SiteContent }) {
  return (
    <section id="practice-areas" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            {content.practiceAreas.title}
          </h2>
          <p className="mt-3 text-lg text-neutral-600">{content.practiceAreas.subtitle}</p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {content.practiceAreas.items.map((area, i) => (
            <Reveal key={area.name} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-neutral-200 p-8">
                <h3 className="text-xl font-semibold text-navy">{area.name}</h3>
                <p className="mt-3 text-neutral-600">{area.description}</p>
                {area.subareas && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {area.subareas.map((sub) => (
                      <span
                        key={sub}
                        className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
