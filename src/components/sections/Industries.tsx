import { SiteContent } from "@/content/types";
import Reveal from "@/components/Reveal";

export default function Industries({ content }: { content: SiteContent }) {
  return (
    <section id="industries" className="bg-neutral-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            {content.industries.title}
          </h2>
          <p className="mt-3 text-lg text-neutral-600">{content.industries.subtitle}</p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {content.industries.items.map((industry, i) => (
            <Reveal key={industry.name} delay={i * 0.08}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-100">
                <div className="mb-4 h-1 w-8 rounded-full bg-accent" />
                <h3 className="font-semibold text-navy">{industry.name}</h3>
                <p className="mt-2 text-sm text-neutral-600">{industry.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
