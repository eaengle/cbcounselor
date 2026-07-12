"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteContent } from "@/content/types";
import { withBasePath } from "@/lib/base-path";

const pointPositions = [
  { x: "16.1%", y: "29.3%", group: 0, city: 0, primary: true },
  { x: "17.2%", y: "31.1%", group: 0, city: 1 },
  { x: "16.0%", y: "23.6%", group: 0, city: 2 },
  { x: "25.7%", y: "26.7%", group: 0, city: 3 },
  { x: "78.5%", y: "28.5%", group: 1, city: 0 },
  { x: "80.0%", y: "33.0%", group: 1, city: 1 },
  { x: "78.5%", y: "38.0%", group: 1, city: 2 },
  { x: "25.9%", y: "38.2%", group: 2, city: 0 },
];

export default function OfficeMap({ content }: { content: SiteContent }) {
  const reduceMotion = useReducedMotion();
  const primaryLabel = content.locale === "zh" ? "主要办公室" : "Primary";

  return (
    <div className="hidden lg:block">
      <div className="relative aspect-[2/1] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm" role="img" aria-label={content.offices.mapLabel}>
        <Image
          src={withBasePath("/world-map-dots-real.svg")}
          alt=""
          fill
          sizes="(max-width: 1280px) 100vw, 1152px"
          className="pointer-events-none select-none object-contain opacity-40"
        />

        <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full">
          <motion.line x1="16.1%" y1="29.3%" x2="78.5%" y2="28.5%" stroke="rgba(154,42,36,.28)" strokeWidth="1" strokeDasharray="4 4" initial={{ pathLength: reduceMotion ? 1 : 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 1.8 }} />
          <motion.line x1="25.7%" y1="26.7%" x2="80%" y2="33%" stroke="rgba(154,42,36,.18)" strokeWidth="1" strokeDasharray="4 4" initial={{ pathLength: reduceMotion ? 1 : 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 1.8 }} />
        </svg>

        {pointPositions.map((point, index) => {
          const group = content.offices.groups[point.group];
          const city = group.cities[point.city];
          const labelOnLeft = Number.parseFloat(point.x) >= 50;
          return (
            <motion.div
              key={city}
              className="absolute z-10"
              style={{ left: point.x, top: point.y, transform: "translate(-50%, -50%)" }}
              initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + index * 0.06, duration: 0.4 }}
            >
              <div className="relative flex items-center">
                {labelOnLeft && <span className="absolute right-full mr-2 whitespace-nowrap rounded border border-neutral-200 bg-white/95 px-2 py-0.5 text-[11px] font-semibold text-navy shadow-sm">{city}</span>}
                <span className={`block h-3 w-3 rounded-full ${point.primary ? "bg-accent ring-2 ring-accent/25 ring-offset-2 ring-offset-white" : "bg-accent-light"}`} />
                {!labelOnLeft && <span className="absolute left-full ml-2 whitespace-nowrap rounded border border-neutral-200 bg-white/95 px-2 py-0.5 text-[11px] font-semibold text-navy shadow-sm">{city}</span>}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-4 gap-4">
        {pointPositions.map((point) => {
          const group = content.offices.groups[point.group];
          const city = group.cities[point.city];
          return (
            <div key={city} className={`rounded-lg border bg-white p-5 text-center transition-all hover:border-accent/30 hover:shadow-md ${point.primary ? "border-accent/20" : "border-neutral-200"}`}>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="mx-auto mb-3 h-4 w-4 fill-none stroke-accent" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <h3 className="text-sm font-semibold text-navy">{city}</h3>
              <p className="mt-1 text-xs text-neutral-400">{group.country}</p>
              {point.primary && <span className="mt-2 inline-block text-[10px] font-semibold uppercase tracking-widest text-accent">{primaryLabel}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
