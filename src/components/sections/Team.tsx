import Link from "next/link";
import { SiteContent } from "@/content/types";
import { getAttorneys } from "@/content/attorneys";
import AttorneyCard from "@/components/AttorneyCard";
import Reveal from "@/components/Reveal";

export default function Team({ content }: { content: SiteContent }) {
  const attorneys = getAttorneys(content.locale);
  const featured = content.team.featuredSlugs
    .map((slug) => attorneys.find((attorney) => attorney.slug === slug))
    .filter((attorney) => attorney !== undefined);

  return (
    <section id="team" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            {content.team.title}
          </h2>
          <p className="mt-3 text-lg text-neutral-600">{content.team.subtitle}</p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((attorney, i) => (
            <Reveal key={attorney.slug} delay={i * 0.08}>
              <AttorneyCard attorney={attorney} locale={content.locale} revealDetails />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href={`${content.locale === "zh" ? "/zh" : ""}/people`}
            className="inline-flex rounded-full border border-navy px-6 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-white"
          >
            {content.team.viewAll} →
          </Link>
        </div>
      </div>
    </section>
  );
}
