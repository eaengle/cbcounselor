import Image from "next/image";
import Link from "next/link";
import type { Attorney, SiteContent } from "@/content/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { withBasePath } from "@/lib/base-path";

export default function AttorneyProfile({ attorney, content }: { attorney: Attorney; content: SiteContent }) {
  const labels = content.team.profileLabels;
  const peopleHref = `${content.locale === "zh" ? "/zh" : ""}/people`;

  return (
    <div className="flex min-h-screen flex-col">
      <Header content={content} />
      <main className="flex-1">
        <section className="bg-navy px-6 py-16 text-white sm:py-20">
          <div className="mx-auto max-w-6xl">
            <Link href={peopleHref} className="text-sm text-white/60 transition-colors hover:text-white">
              ← {labels.backToPeople}
            </Link>
            <div className="mt-10 grid items-end gap-10 md:grid-cols-[320px_1fr]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#e7e5e1] shadow-2xl shadow-black/20">
                <Image
                  src={withBasePath(attorney.photo.src)}
                  alt={attorney.name}
                  fill
                  preload
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover object-center"
                />
              </div>
              <div>
                <p className="locale-eyebrow text-sm font-medium uppercase tracking-widest text-accent-light">{attorney.title}</p>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">{attorney.name}</h1>
                <div className="mt-6 flex flex-wrap gap-2">
                  {attorney.practiceFocus.map((area) => (
                    <span key={area} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">{area}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[1fr_280px]">
          <article>
            <div className="space-y-5 text-lg leading-relaxed text-neutral-700">
              {attorney.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            {attorney.representativeMatters.length > 0 && (
              <section className="mt-14">
                <h2 className="text-2xl font-semibold text-navy">{labels.representativeMatters}</h2>
                <ul className="mt-6 space-y-4">
                  {attorney.representativeMatters.map((matter) => (
                    <li key={matter} className="flex gap-4 leading-relaxed text-neutral-700">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      <span>{matter}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </article>
          <aside className="space-y-8 lg:border-l lg:border-neutral-200 lg:pl-8">
            <section>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-navy">{labels.barAdmissions}</h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{attorney.barAdmissions}</p>
            </section>
            <section>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-navy">{labels.education}</h2>
              <ul className="mt-2 space-y-2 text-sm leading-relaxed text-neutral-600">
                {attorney.education.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
            {attorney.email && (
              <section>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-navy">{labels.contact}</h2>
                <a href={`mailto:${attorney.email}`} className="mt-2 block break-all text-sm font-medium text-accent hover:underline">{attorney.email}</a>
              </section>
            )}
          </aside>
        </div>
      </main>
      <Footer content={content} />
    </div>
  );
}
