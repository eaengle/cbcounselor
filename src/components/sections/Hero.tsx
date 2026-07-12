"use client";

import { motion } from "framer-motion";
import { SiteContent } from "@/content/types";

export default function Hero({ content }: { content: SiteContent }) {
  return (
    <section className="relative overflow-hidden bg-navy px-6 pb-20 pt-24 text-white sm:pb-28 sm:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(154,42,36,0.35), transparent 40%), radial-gradient(circle at 85% 0%, rgba(20,44,71,0.6), transparent 45%)",
        }}
      />
      <div
        aria-hidden="true"
        lang="zh"
        className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 select-none whitespace-nowrap font-extralight text-white/[0.035]"
        style={{ fontSize: "clamp(8rem, 24vw, 22rem)", letterSpacing: "-0.08em" }}
      >
        {content.hero.watermark}
      </div>
      <div className="relative mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="locale-eyebrow mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent-light"
        >
          {content.hero.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        >
          {content.hero.headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/70"
        >
          {content.hero.subheadline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent-light"
          >
            {content.hero.cta}
          </a>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-xs uppercase tracking-wider text-white/50"
          aria-label={content.locale === "zh" ? "客户类型" : "Representative client types"}
        >
          {content.hero.clientDescriptors.map((descriptor) => (
            <li key={descriptor}>{descriptor}</li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
