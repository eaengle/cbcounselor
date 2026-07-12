import { SiteContent } from "@/content/types";
import Reveal from "@/components/Reveal";

export default function PracticeAreas({ content }: { content: SiteContent }) {
  return (
    <section id="practice-areas" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="locale-eyebrow text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {content.practiceAreas.primaryLabel}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            {content.practiceAreas.title}
          </h2>
          <p className="mt-3 text-lg text-neutral-600">{content.practiceAreas.subtitle}</p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {content.practiceAreas.primaryItems.map((area, i) => (
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

        <div className="relative mt-16 border-t border-neutral-200 pt-10">
          <span id="industries" className="absolute -top-24" aria-hidden="true" />
          <span id="ecommerce-defense" className="absolute -top-24" aria-hidden="true" />
          <Reveal>
            <p className="locale-eyebrow text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {content.practiceAreas.supportingLabel}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-navy">
              {content.practiceAreas.supportingTitle}
            </h3>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.practiceAreas.supportingItems.map((capability, i) => (
              <Reveal key={capability.name} delay={i * 0.06}>
                <article className="h-full rounded-xl bg-neutral-50 p-5 ring-1 ring-neutral-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {capability.eyebrow}
                  </p>
                  <h4 className="mt-2 font-semibold text-navy">{capability.name}</h4>
                  <p className="mt-2 text-sm text-neutral-600">{capability.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
