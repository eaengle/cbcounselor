import { SiteContent } from "@/content/types";
import Reveal from "@/components/Reveal";

export default function Insights({ content }: { content: SiteContent }) {
  const formatter = new Intl.DateTimeFormat(content.locale === "zh" ? "zh-CN" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });

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
          {content.insights.articles.map((article, i) => (
            <Reveal key={article.href} delay={i * 0.06}>
              <a
                href={article.href}
                className="group block h-full rounded-2xl border border-neutral-200 p-6 transition-all hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <div className="mb-4 h-1.5 w-full rounded-full bg-gradient-to-r from-accent to-navy" />
                <time dateTime={article.date} className="text-xs font-medium uppercase tracking-wide text-neutral-400">
                  {formatter.format(new Date(`${article.date}T00:00:00Z`))}
                </time>
                <p className="mt-2 font-semibold leading-snug text-navy">{article.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{article.summary}</p>
                <p className="mt-4 text-sm font-medium text-accent transition-transform group-hover:translate-x-1">
                  {content.insights.readMore} →
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
