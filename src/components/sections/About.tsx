import { SiteContent } from "@/content/types";
import Reveal from "@/components/Reveal";

export default function About({ content }: { content: SiteContent }) {
  return (
    <section id="about" className="bg-neutral-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            {content.about.title}
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-neutral-600">{content.about.body}</p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.about.differentiators.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-100">
                <p className="font-semibold text-navy">{item.title}</p>
                <p className="mt-2 text-sm text-neutral-600">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
