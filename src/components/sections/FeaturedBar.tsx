import Reveal from "@/components/Reveal";
import { SiteContent } from "@/content/types";

export default function FeaturedBar({ content }: { content: SiteContent }) {
  return (
    <section aria-labelledby="featured-bar-title" className="border-b border-neutral-200 bg-neutral-50 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p
            id="featured-bar-title"
            className="locale-eyebrow text-xs font-semibold uppercase tracking-[0.18em] text-accent"
          >
            {content.featuredBar.label}
          </p>
        </Reveal>
        <div className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 lg:grid-cols-3">
          {content.featuredBar.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06} className="h-full">
              <article className="h-full bg-white p-6 sm:p-7">
                <p className="text-xs font-semibold tabular-nums text-accent" aria-hidden="true">
                  0{index + 1}
                </p>
                <h2 className="mt-3 text-lg font-semibold leading-snug text-navy">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
