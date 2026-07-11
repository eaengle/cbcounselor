import { SiteContent } from "@/content/types";
import Reveal from "@/components/Reveal";

export default function Offices({ content }: { content: SiteContent }) {
  return (
    <section className="relative overflow-hidden bg-navy px-6 py-20 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(193,69,58,0.4), transparent 35%), radial-gradient(circle at 80% 70%, rgba(193,69,58,0.3), transparent 35%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {content.offices.title}
          </h2>
          <p className="mt-3 text-lg text-white/70">{content.offices.subtitle}</p>
        </Reveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {content.offices.groups.map((group, i) => (
            <Reveal key={group.country} delay={i * 0.1}>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-accent-light">
                  {group.country}
                </p>
                <ul className="mt-3 space-y-2">
                  {group.cities.map((city) => (
                    <li key={city} className="text-white/80">
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
