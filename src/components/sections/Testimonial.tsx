"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiteContent } from "@/content/types";

export default function Testimonial({ content }: { content: SiteContent }) {
  const [active, setActive] = useState(0);
  const items = content.testimonials.items;
  const testimonial = items[active];
  const showControls = items.length > 1;

  function move(direction: -1 | 1) {
    setActive((current) => (current + direction + items.length) % items.length);
  }

  if (!testimonial) return null;

  return (
    <section className="bg-neutral-50 px-6 py-20" aria-roledescription="carousel">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-5xl leading-none text-accent" aria-hidden="true">&ldquo;</p>
        <AnimatePresence mode="wait">
          <motion.figure
            key={active}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3 }}
          >
            <blockquote className="mt-2 text-xl font-medium leading-relaxed text-navy sm:text-2xl">
              {testimonial.quote}
            </blockquote>
            {testimonial.translation && (
              <p lang={content.locale === "zh" ? "en" : "zh"} className="mt-5 text-sm leading-relaxed text-neutral-500">
                {testimonial.translation}
              </p>
            )}
            <figcaption className="locale-eyebrow mt-6 text-sm font-medium uppercase tracking-wide text-neutral-500">
              {testimonial.attribution}
            </figcaption>
          </motion.figure>
        </AnimatePresence>
        {showControls && (
          <div className="mt-8 flex justify-center gap-3">
            <button type="button" onClick={() => move(-1)} aria-label={content.testimonials.previous} className="rounded-full border border-neutral-300 px-4 py-2 text-navy hover:border-accent hover:text-accent">←</button>
            <button type="button" onClick={() => move(1)} aria-label={content.testimonials.next} className="rounded-full border border-neutral-300 px-4 py-2 text-navy hover:border-accent hover:text-accent">→</button>
          </div>
        )}
      </div>
    </section>
  );
}
