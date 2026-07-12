import { SiteContent } from "@/content/types";
import Reveal from "@/components/Reveal";
import WeChatCard from "@/components/WeChatCard";
import Link from "next/link";

export default function ContactCta({ content }: { content: SiteContent }) {
  return (
    <section id="contact" className="bg-navy px-6 py-20 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.8fr)]">
        <Reveal>
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {content.contactCta.title}
            </h2>
            <p className="mt-4 text-lg text-white/70">{content.contactCta.body}</p>
            <Link
              href={content.locale === "en" ? "/contact" : "/zh/contact"}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent-light"
            >
              {content.contactCta.button}
            </Link>
            <p className="mt-4 text-sm text-white/50">{content.contactCta.email}</p>
            <p className="mt-2 text-sm text-accent-light">
              {content.contactCta.mandarinNote}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <WeChatCard content={content} />
        </Reveal>
      </div>
    </section>
  );
}
