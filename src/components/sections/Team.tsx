import { SiteContent } from "@/content/types";
import Reveal from "@/components/Reveal";

function initialsFor(title: string) {
  return title
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Team({ content }: { content: SiteContent }) {
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
          {content.team.roles.map((role, i) => (
            <Reveal key={role.title} delay={i * 0.06}>
              <div className="group rounded-2xl border border-neutral-200 p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy text-lg font-semibold text-accent-light transition-colors group-hover:bg-accent">
                  {initialsFor(role.title)}
                </div>
                <p className="mt-4 font-semibold text-navy">{role.title}</p>
                <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                  {role.languages.map((lang) => (
                    <span
                      key={lang}
                      className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-600"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-neutral-500">{content.team.comingSoon}</p>
      </div>
    </section>
  );
}
