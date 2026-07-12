import { SiteContent } from "@/content/types";
import Reveal from "@/components/Reveal";
import OfficeMap from "@/components/OfficeMap";

export default function Offices({ content }: { content: SiteContent }) {
  return (
    <section className="relative overflow-hidden bg-neutral-50 px-6 py-20">
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">{content.offices.title}</h2>
            <p className="mt-3 text-lg leading-relaxed text-neutral-600">{content.offices.subtitle}</p>
          </div>
        </Reveal>
        <div className="mt-12 lg:mt-16">
          <Reveal><OfficeMap content={content} /></Reveal>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:sr-only">
          {content.offices.groups.flatMap((group) => group.cities.map((city) => (
            <div key={city} className="rounded-xl border border-neutral-200 bg-white p-5">
              <p className="font-semibold text-navy">{city}</p>
              <p className="mt-1 text-sm text-neutral-500">{group.country}</p>
            </div>
          )))}
        </div>
      </div>
    </section>
  );
}
