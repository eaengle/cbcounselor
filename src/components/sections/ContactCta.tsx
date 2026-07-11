import { SiteContent } from "@/content/types";
import Reveal from "@/components/Reveal";

export default function ContactCta({ content }: { content: SiteContent }) {
  return (
    <section id="contact" className="bg-navy px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {content.contactCta.title}
          </h2>
          <p className="mt-4 text-lg text-white/70">{content.contactCta.body}</p>
          <a
            href={`mailto:${content.contactCta.email}`}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent-light"
          >
            {content.contactCta.button}
          </a>
          <p className="mt-4 text-sm text-white/50">{content.contactCta.email}</p>
        </Reveal>
      </div>
    </section>
  );
}
