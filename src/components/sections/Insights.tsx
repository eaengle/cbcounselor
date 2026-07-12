import Link from "next/link";
import { SiteContent } from "@/content/types";
import Reveal from "@/components/Reveal";

const coverStyles = [
  "from-[#0b1d30] via-[#173b5c] to-[#9a2a24]",
  "from-[#251619] via-[#702b2b] to-[#d17a62]",
  "from-[#122f38] via-[#155465] to-[#9a2a24]",
  "from-[#171f35] via-[#32335d] to-[#a23a42]",
];

export default function Insights({ content }: { content: SiteContent }) {
  const formatter = new Intl.DateTimeFormat(content.locale === "zh" ? "zh-CN" : "en-US", {
    year: "numeric", month: "short", day: "numeric", timeZone: "UTC",
  });

  return (
    <section id="insights" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">{content.insights.title}</h2>
          <p className="mt-3 text-lg text-neutral-600">{content.insights.subtitle}</p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {content.insights.articles.map((article, i) => (
            <Reveal key={article.href} delay={i * 0.06}>
              <Link href={article.href} className="group grid h-full overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:grid-cols-[42%_1fr]">
                <div className={`relative min-h-52 overflow-hidden bg-gradient-to-br ${coverStyles[i % coverStyles.length]} p-6 text-white`}>
                  <div aria-hidden className="absolute -right-8 -top-12 text-[11rem] font-bold leading-none text-white/[0.055]">{String(i + 1).padStart(2, "0")}</div>
                  <div aria-hidden className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(118deg, transparent 0 23px, rgba(255,255,255,.22) 24px, transparent 25px 48px)" }} />
                  <div className="relative flex h-full flex-col justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">CBC Law</p>
                    <p className="max-w-[12rem] text-xl font-semibold leading-tight">{article.title}</p>
                  </div>
                </div>
                <div className="flex flex-col p-6">
                  <time dateTime={article.date} className="text-xs font-medium uppercase tracking-wide text-neutral-400">{formatter.format(new Date(`${article.date}T00:00:00Z`))}</time>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">{article.summary}</p>
                  <p className="mt-auto pt-5 text-sm font-medium text-accent transition-transform group-hover:translate-x-1">{content.insights.readMore} →</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
