import { SiteContent } from "@/content/types";
import Reveal from "@/components/Reveal";

export default function Insights({ content }: { content: SiteContent }) {
  return (
    <section id="insights" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            {content.insights.title}
          </h2>
          <p className="mt-3 text-lg text-neutral-600">{content.insights.subtitle}</p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {content.insights.articles.map((title, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div className="group h-full rounded-2xl border border-neutral-200 p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 h-1.5 w-full rounded-full bg-gradient-to-r from-accent to-navy" />
                <p className="font-semibold leading-snug text-navy">{title}</p>
                <p className="mt-4 text-sm font-medium text-accent transition-transform group-hover:translate-x-1">
                  {content.insights.readMore} →
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
