"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteContent } from "@/content/types";
import { withBasePath } from "@/lib/base-path";

type LabelPlacement = {
  dx: number;
  dy: number;
  side: "left" | "right";
};

type MapPoint = {
  x: number;
  y: number;
  group: number;
  city: number;
  label: LabelPlacement;
  primary?: boolean;
};

const pointPositions: MapPoint[] = [
  { x: 66.6, y: 44.64, group: 0, city: 0, primary: true, label: { dx: -12, dy: 1, side: "left" } },
  { x: 67.0, y: 48.38, group: 0, city: 1, label: { dx: 12, dy: 16, side: "right" } },
  { x: 66.6, y: 40.67, group: 0, city: 2, label: { dx: 12, dy: -9, side: "right" } },
  { x: 74.7, y: 41.35, group: 0, city: 3, label: { dx: 12, dy: -8, side: "right" } },
  { x: 26.09, y: 40.22, group: 1, city: 0, label: { dx: -12, dy: -10, side: "left" } },
  { x: 27.62, y: 47.82, group: 1, city: 1, label: { dx: 12, dy: 0, side: "right" } },
  { x: 26.71, y: 52.24, group: 1, city: 2, label: { dx: -12, dy: 10, side: "left" } },
  { x: 73.91, y: 53.72, group: 2, city: 0, label: { dx: 12, dy: 9, side: "right" } },
];

const routes = [
  { from: 0, to: 4, controlX: 47.3, controlY: 17, opacity: 0.34 },
  { from: 3, to: 5, controlX: 52.8, controlY: 43, opacity: 0.22 },
];

export default function OfficeMap({ content }: { content: SiteContent }) {
  const reduceMotion = useReducedMotion();
  const primaryLabel = content.locale === "zh" ? "主要办公室" : "Primary";

  return (
    <div>
      <div
        className="relative aspect-[2/1] w-full overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm sm:rounded-2xl"
        role="img"
        aria-label={content.offices.mapLabel}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-transparent to-neutral-50/60" />
        <Image
          src={withBasePath("/world-map-dots-real.svg")}
          alt=""
          fill
          sizes="(max-width: 1280px) 100vw, 1152px"
          className="pointer-events-none select-none object-contain opacity-40"
        />

        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          viewBox="0 0 100 50"
          preserveAspectRatio="none"
        >
          {routes.map((route, index) => {
            const from = pointPositions[route.from];
            const to = pointPositions[route.to];

            return (
              <motion.path
                key={`${route.from}-${route.to}`}
                d={`M ${from.x} ${from.y / 2} Q ${route.controlX} ${route.controlY / 2} ${to.x} ${to.y / 2}`}
                fill="none"
                stroke={`rgba(154, 42, 36, ${route.opacity})`}
                strokeWidth="1.15"
                strokeDasharray="5 2"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                initial={reduceMotion ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 + index * 0.18, duration: 1.6, ease: "easeOut" }}
              />
            );
          })}
        </svg>

        {pointPositions.map((point, index) => {
          const group = content.offices.groups[point.group];
          const city = group.cities[point.city];
          const labelTransform = point.label.side === "left" ? "translate(-100%, -50%)" : "translate(0, -50%)";

          return (
            <div
              key={city}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${point.x}%`, top: `${point.y}%` }}
            >
              <motion.div
                className="relative h-3 w-3"
                initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.06, duration: 0.35 }}
              >
                <span
                  aria-hidden="true"
                  className="absolute hidden whitespace-nowrap rounded-md border border-neutral-200/90 bg-white/95 px-2 py-1 text-[11px] font-semibold leading-none text-navy shadow-sm backdrop-blur-sm md:block"
                  style={{
                    left: `calc(50% + ${point.label.dx}px)`,
                    top: `calc(50% + ${point.label.dy}px)`,
                    transform: labelTransform,
                  }}
                >
                  {city}
                </span>
                <span
                  className={`absolute inset-0 rounded-full border-2 border-white shadow-sm ${point.primary ? "bg-accent ring-4 ring-accent/15" : "bg-accent-light ring-2 ring-white/70"}`}
                />
              </motion.div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-7 sm:grid-cols-4 sm:gap-4">
        {pointPositions.map((point) => {
          const group = content.offices.groups[point.group];
          const city = group.cities[point.city];

          return (
            <div
              key={city}
              className={`rounded-lg border bg-white px-3 py-4 text-center transition-all hover:border-accent/30 hover:shadow-md sm:p-5 ${point.primary ? "border-accent/20" : "border-neutral-200"}`}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="mx-auto mb-2 h-4 w-4 fill-none stroke-accent sm:mb-3" strokeWidth="2">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <h3 className="text-sm font-semibold text-navy">{city}</h3>
              <p className="mt-1 text-xs text-neutral-400">{group.country}</p>
              {point.primary && <span className="mt-2 inline-block text-[9px] font-semibold uppercase tracking-widest text-accent sm:text-[10px]">{primaryLabel}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
