"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion, animate } from "framer-motion";

const parse = (value: string) => value.match(/^([^\d]*)(\d+)(.*)$/);

export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(() => {
    const match = parse(value);
    return match ? `${match[1]}0${match[3]}` : value;
  });

  useEffect(() => {
    const match = parse(value);
    if (!isInView || !match) return;
    const [, prefix, digits, suffix] = match;
    const target = parseInt(digits, 10);
    const controls = animate(0, target, {
      duration: reducedMotion ? 0 : 1.2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(`${prefix}${Math.round(v)}${suffix}`),
    });
    return () => controls.stop();
  }, [isInView, value, reducedMotion]);

  return <span ref={ref}>{display}</span>;
}
