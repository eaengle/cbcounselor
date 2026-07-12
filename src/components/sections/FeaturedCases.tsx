"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiteContent } from "@/content/types";
import Reveal from "@/components/Reveal";

export default function FeaturedCases({ content }: { content: SiteContent }) {
  const [filter, setFilter] = useState("all");
  const filters = useMemo(
    () => Array.from(new Set(content.featuredCases.items.flatMap((item) => [item.practiceArea, ...item.industries]))),
    [content.featuredCases.items],
  );
  const visibleItems = filter === "all"
    ? content.featuredCases.items
    : content.featuredCases.items.filter((item) => item.practiceArea === filter || item.industries.includes(filter));

  return (
    <section id="cases" className="relative overflow-hidden bg-white px-6 py-20">
      <div aria-hidden="true" lang="zh" className="pointer-events-none absolute -right-6 top-0 select-none whitespace-nowrap font-extralight text-navy/[0.035]" style={{ fontSize: "clamp(8rem, 20vw, 17rem)", letterSpacing: "-0.08em" }}>
        {content.featuredCases.watermark}
      </div>
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">{content.featuredCases.title}</h2>
          <p className="mt-3 text-lg text-neutral-600">{content.featuredCases.subtitle}</p>
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label={content.featuredCases.filterLabel}>
          {[{ value: "all", label: content.featuredCases.allLabel }, ...filters.map((value) => ({ value, label: value }))].map(({ value, label }) => {
            const active = filter === value;
            return (
              <button
                key={value}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(value)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${active ? "border-navy bg-navy text-white" : "border-neutral-200 bg-white text-neutral-600 hover:border-accent/50 hover:text-accent"}`}
              >
                {label}
              </button>
            );
          })}
        </div>
        <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleItems.map((item) => (
              <motion.article
                layout
                key={item.result}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className="group h-full rounded-2xl border border-neutral-200 p-6 transition-[border-color,box-shadow] hover:border-accent/40 hover:shadow-lg"
              >
                <div className="mb-3 h-1 w-10 rounded-full bg-accent transition-all group-hover:w-16" />
                <p className="locale-eyebrow text-sm font-semibold uppercase tracking-wide text-accent">{item.category}</p>
                <p className="mt-3 text-neutral-700">{item.result}</p>
                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-neutral-100 pt-4">
                  {item.industries.map((industry) => <span key={industry} className="rounded-full bg-neutral-100 px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-wide text-neutral-500">{industry}</span>)}
                </div>
                {item.client && <p className="mt-3 text-xs font-medium uppercase tracking-wide text-neutral-400">{item.client}</p>}
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
