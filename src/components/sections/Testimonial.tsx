import { SiteContent } from "@/content/types";
import Reveal from "@/components/Reveal";

export default function Testimonial({ content }: { content: SiteContent }) {
  return (
    <section className="bg-neutral-50 px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-5xl leading-none text-accent">&ldquo;</p>
          <p className="mt-2 text-xl font-medium leading-relaxed text-navy sm:text-2xl">
            {content.testimonial.quote}
          </p>
          <p className="locale-eyebrow mt-6 text-sm font-medium uppercase tracking-wide text-neutral-500">
            {content.testimonial.attribution}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
