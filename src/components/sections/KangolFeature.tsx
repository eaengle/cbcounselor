import { kangolResult } from "@/content/verified-claims";

export default function KangolFeature({ locale }: { locale: "en" | "zh" }) {
  const isZh = locale === "zh";

  return (
    <section className="bg-white px-6 py-10 sm:py-12" aria-labelledby="kangol-home-title">
      <div className="mx-auto grid max-w-6xl gap-5 border-l-4 border-accent bg-[#f5f2ec] p-6 sm:p-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
        <div>
          <p className="locale-eyebrow text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {isZh ? "Schedule A 重要进展" : "Schedule A case development"}
          </p>
          <h2 id="kangol-home-title" className="mt-2 text-xl font-semibold leading-snug text-navy">
            <cite>{kangolResult.caseName}</cite>
          </h2>
          <p className="mt-1 text-sm font-medium text-navy/60">{kangolResult.citation}</p>
        </div>
        <div>
          <p className="leading-7 text-navy/70">
            {isZh ? kangolResult.descriptionZh : kangolResult.description}
          </p>
          <a
            href={kangolResult.opinionUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex font-semibold text-accent underline decoration-accent/35 underline-offset-4 hover:text-accent-light"
          >
            {isZh ? "阅读第七巡回上诉法院判决" : "Read the Seventh Circuit opinion"}
            <span className="ml-1" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
