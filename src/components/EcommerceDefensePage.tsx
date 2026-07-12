import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UrgentIntakeForm from "@/components/UrgentIntakeForm";
import type { SiteContent } from "@/content/types";
import type { EcommercePageContent } from "@/content/ecommerce";
import { kangolResult } from "@/content/verified-claims";

export default function EcommerceDefensePage({
  content,
  page,
}: {
  content: SiteContent;
  page: EcommercePageContent;
}) {
  const isZh = page.locale === "zh";
  const languageToggleHref = isZh
    ? "/services/ecommerce-amazon-defense"
    : "/zh/services/ecommerce-amazon-defense";

  return (
    <div className="flex min-h-screen flex-col">
      <Header content={content} languageToggleHref={languageToggleHref} />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-navy px-6 py-20 text-white sm:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 15%, rgba(154,42,36,0.42), transparent 36%), linear-gradient(120deg, transparent 45%, rgba(255,255,255,0.04) 45%, rgba(255,255,255,0.04) 46%, transparent 46%)",
            }}
          />
          <div className="relative mx-auto max-w-6xl">
            <p className="locale-eyebrow text-sm font-semibold uppercase tracking-[0.2em] text-accent-light">
              {page.eyebrow}
            </p>
            <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              {page.headline}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">{page.intro}</p>
            <a
              href="#urgent-intake"
              className="mt-9 inline-flex rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {page.heroCta}
            </a>
          </div>
        </section>

        <section className="bg-white px-6 py-20 sm:py-24" aria-labelledby="services-title">
          <div className="mx-auto max-w-6xl">
            <p className="locale-eyebrow text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {page.servicesLabel}
            </p>
            <h2 id="services-title" className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-navy sm:text-5xl">
              {page.servicesTitle}
            </h2>
            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-navy/10 ring-1 ring-navy/10 sm:grid-cols-2 lg:grid-cols-3">
              {page.services.map((service, index) => (
                <article key={service.title} className="bg-[#f8f7f4] p-7 sm:p-8">
                  <p className="text-xs font-semibold tabular-nums text-accent">0{index + 1}</p>
                  <h3 className="mt-4 text-xl font-semibold text-navy">{service.title}</h3>
                  <p className="mt-3 leading-7 text-navy/65">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f2ec] px-6 py-20 sm:py-24" aria-labelledby="reasons-title">
          <div className="mx-auto max-w-6xl">
            <p className="locale-eyebrow text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {page.reasonsLabel}
            </p>
            <h2 id="reasons-title" className="mt-2 text-3xl font-semibold tracking-tight text-navy sm:text-5xl">
              {page.reasonsTitle}
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {page.reasons.map((reason) => (
                <article key={reason.title} className="border-t-2 border-accent pt-5">
                  <h3 className="text-lg font-semibold text-navy">{reason.title}</h3>
                  <p className="mt-3 leading-7 text-navy/65">{reason.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy px-6 py-20 text-white sm:py-24" aria-labelledby="results-title">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="locale-eyebrow text-sm font-semibold uppercase tracking-[0.18em] text-accent-light">
                {page.resultsLabel}
              </p>
              <h2 id="results-title" className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">
                {page.resultsTitle}
              </h2>
            </div>
            <article className="border-l border-white/20 pl-6 sm:pl-9">
              <h3 className="text-xl font-semibold leading-relaxed">
                <cite>{page.resultTitle}</cite>
              </h3>
              <p className="mt-4 leading-8 text-white/70">{page.resultDescription}</p>
              <a
                href={kangolResult.opinionUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex font-semibold text-accent-light underline decoration-accent-light/40 underline-offset-4 hover:text-white"
              >
                {page.opinionLabel}<span className="ml-1" aria-hidden="true">↗</span>
              </a>
            </article>
          </div>
        </section>

        <section id="urgent-intake" className="scroll-mt-24 bg-[#f5f2ec] px-6 py-20 sm:py-24" aria-labelledby="intake-title">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="locale-eyebrow text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {page.intake.eyebrow}
              </p>
              <h2 id="intake-title" className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-5xl">
                {page.intake.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-navy/65">{page.intake.intro}</p>
              <a className="mt-6 inline-block font-semibold text-accent hover:text-accent-light" href={`mailto:${content.contactCta.email}`}>
                {content.contactCta.email}
              </a>
            </div>
            <UrgentIntakeForm copy={page.intake} recipient={content.contactCta.email} />
          </div>
        </section>
      </main>
      <Footer content={content} />
    </div>
  );
}
