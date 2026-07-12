import { SiteContent } from "@/content/types";
import Reveal from "@/components/Reveal";

export default function FeaturedCases({ content }: { content: SiteContent }) {
  return (
    <section id="cases" className="relative overflow-hidden bg-white px-6 py-20">
      <div
        aria-hidden="true"
        lang="zh"
        className="pointer-events-none absolute -right-6 top-0 select-none whitespace-nowrap font-extralight text-navy/[0.035]"
        style={{ fontSize: "clamp(8rem, 20vw, 17rem)", letterSpacing: "-0.08em" }}
      >
        {content.featuredCases.watermark}
      </div>
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            {content.featuredCases.title}
          </h2>
          <p className="mt-3 text-lg text-neutral-600">{content.featuredCases.subtitle}</p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {content.featuredCases.items.map((item, i) => (
            <Reveal key={item.result} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-neutral-200 p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg">
                <div className="mb-3 h-1 w-10 rounded-full bg-accent transition-all group-hover:w-16" />
                <p className="locale-eyebrow text-sm font-semibold uppercase tracking-wide text-accent">
                  {item.category}
                </p>
                <p className="mt-3 text-neutral-700">{item.result}</p>
                {item.client && (
                  <p className="mt-5 border-t border-neutral-100 pt-4 text-xs font-medium uppercase tracking-wide text-neutral-400">
                    {item.client}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
