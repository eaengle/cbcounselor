import type { AttorneyRole, SiteContent } from "@/content/types";
import { getAttorneys } from "@/content/attorneys";
import AttorneyCard from "@/components/AttorneyCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roleOrder: AttorneyRole[] = [
  "partner",
  "of-counsel",
  "associate",
  "foreign-law-counsel",
  "alliance-partner",
];

export default function PeoplePage({ content }: { content: SiteContent }) {
  const attorneys = getAttorneys(content.locale);

  return (
    <div className="flex min-h-screen flex-col">
      <Header content={content} />
      <main className="flex-1">
        <section className="bg-navy px-6 py-20 text-white sm:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="locale-eyebrow text-sm font-medium uppercase tracking-[0.2em] text-accent-light">
              CBC Law
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{content.team.title}</h1>
            <p className="mt-5 max-w-2xl text-lg text-white/70">{content.team.subtitle}</p>
          </div>
        </section>
        <div className="mx-auto max-w-6xl space-y-20 px-6 py-20">
          {roleOrder.map((role) => {
            const group = attorneys.filter((attorney) => attorney.role === role);
            if (group.length === 0) return null;

            return (
              <section key={role} aria-labelledby={`role-${role}`}>
                <div className="mb-8 flex items-center gap-4">
                  <span className="h-px w-10 bg-accent" aria-hidden="true" />
                  <h2 id={`role-${role}`} className="locale-eyebrow text-sm font-semibold uppercase tracking-widest text-accent">
                    {content.team.sectionLabels[role]}
                  </h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {group.map((attorney) => (
                    <AttorneyCard key={attorney.slug} attorney={attorney} locale={content.locale} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
      <Footer content={content} />
    </div>
  );
}
