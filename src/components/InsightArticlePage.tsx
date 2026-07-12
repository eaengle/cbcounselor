import Link from "next/link";
import type { InsightArticle, SiteContent } from "@/content/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function InsightArticlePage({ article, content }: { article: InsightArticle; content: SiteContent }) {
  const homeHref = content.locale === "zh" ? "/zh/#insights" : "/#insights";
  const formatter = new Intl.DateTimeFormat(content.locale === "zh" ? "zh-CN" : "en-US", {
    year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Header content={content} />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-navy px-6 py-20 text-white sm:py-28">
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(193,69,58,.35),transparent_42%)]" />
          <div aria-hidden className="absolute inset-0 opacity-15" style={{ backgroundImage: "repeating-linear-gradient(118deg, transparent 0 39px, rgba(255,255,255,.2) 40px, transparent 41px 80px)" }} />
          <div className="relative mx-auto max-w-4xl">
            <p className="locale-eyebrow text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">{content.insights.articleLabel}</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">{article.title}</h1>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/55">
              <time dateTime={article.date}>{formatter.format(new Date(`${article.date}T00:00:00Z`))}</time>
              {article.author && <span>{article.author}</span>}
            </div>
          </div>
        </section>
        <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <p className="text-xl font-medium leading-relaxed text-navy sm:text-2xl">{article.summary}</p>
          <div className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-sm leading-relaxed text-neutral-500">
            {content.insights.archiveNote}
          </div>
          <Link href={homeHref} className="mt-12 inline-flex text-sm font-medium text-accent transition-colors hover:text-accent-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">← {content.insights.backLabel}</Link>
        </article>
      </main>
      <Footer content={content} />
    </div>
  );
}
