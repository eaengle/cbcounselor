"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, type PointerEvent } from "react";
import { withBasePath } from "@/lib/base-path";

type Coordinate = { x: number; y: number };
type Position = Coordinate | null;

const cities = [
  { name: "Silicon Valley", country: "United States", group: 0, city: 0, primary: true, label: { dx: -12, dy: 1, side: "left" } },
  { name: "Southern California", country: "United States", group: 0, city: 1, label: { dx: 12, dy: 16, side: "right" } },
  { name: "Seattle", country: "United States", group: 0, city: 2, label: { dx: 12, dy: -9, side: "right" } },
  { name: "Chicago", country: "United States", group: 0, city: 3, label: { dx: 12, dy: -8, side: "right" } },
  { name: "Beijing", country: "China", group: 1, city: 0, label: { dx: -12, dy: -10, side: "left" } },
  { name: "Shanghai", country: "China", group: 1, city: 1, label: { dx: 12, dy: 0, side: "right" } },
  { name: "Shenzhen", country: "China", group: 1, city: 2, label: { dx: -12, dy: 10, side: "left" } },
  { name: "Cancun", country: "Mexico", group: 2, city: 0, label: { dx: 12, dy: 9, side: "right" } },
] as const;

const originalPositions: Position[] = [
  { x: 66.6, y: 44.64 },
  { x: 67.0, y: 48.38 },
  { x: 66.6, y: 40.67 },
  { x: 74.7, y: 41.35 },
  { x: 26.09, y: 40.22 },
  { x: 27.62, y: 47.82 },
  { x: 26.71, y: 52.24 },
  { x: 73.91, y: 53.72 },
];

const storageKey = "cbc-map-calibration-v1";

function isPositionArray(value: unknown): value is Position[] {
  return Array.isArray(value) && value.length === cities.length && value.every((item) => (
    item === null
    || (typeof item === "object" && item !== null
      && typeof (item as Coordinate).x === "number"
      && typeof (item as Coordinate).y === "number")
  ));
}

function formatExport(positions: Position[]) {
  const lines = cities.map((office, index) => {
    const position = positions[index];
    const coordinates = position
      ? `x: ${position.x.toFixed(2)}, y: ${position.y.toFixed(2)}`
      : "x: 0, y: 0 /* TODO: position not set */";
    const primary = "primary" in office && office.primary ? ", primary: true" : "";

    return `  { ${coordinates}, group: ${office.group}, city: ${office.city}${primary}, label: { dx: ${office.label.dx}, dy: ${office.label.dy}, side: \"${office.label.side}\" } }, // ${office.name}`;
  });

  return `const pointPositions: MapPoint[] = [\n${lines.join("\n")}\n];`;
}

export default function MapCalibrator() {
  const [positions, setPositions] = useState<Position[]>(originalPositions);
  const [history, setHistory] = useState<Position[][]>([]);
  const [selected, setSelected] = useState(0);
  const [copied, setCopied] = useState(false);
  const storageLoaded = useRef(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const saved = window.localStorage.getItem(storageKey);
        if (saved) {
          const parsed: unknown = JSON.parse(saved);
          if (isPositionArray(parsed)) setPositions(parsed);
        }
      } catch {
        // A corrupt local draft should not prevent the utility from loading.
      } finally {
        storageLoaded.current = true;
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!storageLoaded.current) return;
    window.localStorage.setItem(storageKey, JSON.stringify(positions));
  }, [positions]);

  const completed = positions.filter(Boolean).length;
  const exportText = useMemo(() => formatExport(positions), [positions]);

  function updatePositions(next: Position[]) {
    setHistory((current) => [...current.slice(-19), positions]);
    setPositions(next);
    setCopied(false);
  }

  function placeMarker(event: PointerEvent<HTMLButtonElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((event.clientX - bounds.left) / bounds.width) * 100));
    const y = Math.max(0, Math.min(100, ((event.clientY - bounds.top) / bounds.height) * 100));
    const next = [...positions];
    next[selected] = { x: Number(x.toFixed(2)), y: Number(y.toFixed(2)) };
    updatePositions(next);
    setSelected((selected + 1) % cities.length);
  }

  async function copyCoordinates() {
    await navigator.clipboard.writeText(exportText);
    setCopied(true);
  }

  function undo() {
    const previous = history.at(-1);
    if (!previous) return;
    setPositions(previous);
    setHistory((current) => current.slice(0, -1));
    setCopied(false);
  }

  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-8 text-navy sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Developer utility</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Office map calibrator</h1>
            <p id="calibrator-help" className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base">
              Select a city, then click its exact location on the map. The next city is selected automatically and your progress is saved in this browser.
            </p>
          </div>
          <a href={withBasePath("/")} className="text-sm font-semibold text-accent hover:underline">Back to home</a>
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_20rem]">
          <section>
            <div className="relative aspect-[2/1] overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
              <Image
                src={withBasePath("/world-map-dots-real.svg")}
                alt="Pacific-centered dotted world map"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 960px"
                className="pointer-events-none select-none object-contain opacity-60"
              />
              <button
                type="button"
                aria-label={`Place ${cities[selected].name} on the map`}
                aria-describedby="calibrator-help"
                className="absolute inset-0 z-10 cursor-crosshair touch-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                onPointerDown={placeMarker}
              />
              <div className="pointer-events-none absolute inset-0 z-20">
                {positions.map((position, index) => position && (
                  <div
                    key={cities[index].name}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${position.x}%`, top: `${position.y}%` }}
                  >
                    <span className={`grid h-6 w-6 place-items-center rounded-full border-2 border-white text-[10px] font-bold text-white shadow-md ${selected === index ? "scale-125 bg-accent ring-4 ring-accent/20" : "bg-navy"}`}>
                      {index + 1}
                    </span>
                    {selected === index && (
                      <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-navy px-2 py-1 text-xs font-semibold text-white shadow-md">
                        {cities[index].name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button type="button" onClick={undo} disabled={!history.length} className="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40">Undo</button>
              <button type="button" onClick={() => updatePositions(originalPositions)} className="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold">Restore current</button>
              <button type="button" onClick={() => updatePositions(Array(cities.length).fill(null))} className="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold">Start fresh</button>
              <span className="ml-auto text-sm text-neutral-500">{completed}/{cities.length} positions set</span>
            </div>
          </section>

          <aside className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
            <h2 className="px-2 text-sm font-semibold uppercase tracking-wider text-neutral-500">Choose a city</h2>
            <div className="mt-3 space-y-1">
              {cities.map((office, index) => {
                const position = positions[index];
                return (
                  <button
                    type="button"
                    key={office.name}
                    onClick={() => setSelected(index)}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${selected === index ? "bg-accent/10 text-accent" : "hover:bg-neutral-50"}`}
                  >
                    <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-[10px] font-bold text-white ${selected === index ? "bg-accent" : "bg-navy"}`}>{index + 1}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold">{office.name}</span>
                      <span className="block text-xs text-neutral-400">{office.country}</span>
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400">
                      {position ? `${position.x.toFixed(1)}, ${position.y.toFixed(1)}` : "Not set"}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>
        </div>

        <section className="mt-8 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="font-semibold">Generated coordinates</h2>
              <p className="mt-1 text-sm text-neutral-500">Copy this block into <code className="rounded bg-neutral-100 px-1 py-0.5">OfficeMap.tsx</code>.</p>
            </div>
            <button type="button" onClick={copyCoordinates} className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent/90">
              {copied ? "Copied" : "Copy coordinates"}
            </button>
          </div>
          <pre className="mt-4 overflow-x-auto rounded-xl bg-navy p-4 text-xs leading-6 text-neutral-200"><code>{exportText}</code></pre>
        </section>
      </div>
    </main>
  );
}
