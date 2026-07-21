import Image from "next/image";
import { withBasePath } from "@/lib/base-path";

// Full-width photographic divider band (container-ship image on brand navy).
// Self-contained and easy to remove: delete this file and its use in HomePage.
// Toggle visibility via SHOW_TRADE_BAND in HomePage.tsx.
export default function TradeBand({ locale }: { locale: "en" | "zh" }) {
  const isZh = locale === "zh";

  return (
    <section
      aria-labelledby="trade-band-title"
      className="relative isolate overflow-hidden bg-navy"
    >
      <Image
        src={withBasePath("/brand/container-ship.jpg")}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Light navy wash — keeps brand cohesion but lets the ship read clearly */}
      <div aria-hidden className="absolute inset-0 bg-navy/28" />
      {/* Bottom scrim so the headline stays legible over the water */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(11,29,48,0.9) 0%, rgba(11,29,48,0.45) 22%, rgba(11,29,48,0) 52%)",
        }}
      />
      <div className="relative mx-auto flex min-h-[320px] max-w-6xl flex-col justify-end px-6 pb-10 pt-24 sm:min-h-[440px] sm:pb-12">
        <h2
          id="trade-band-title"
          className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
          style={{ textShadow: "0 2px 14px rgba(0,0,0,0.55)" }}
        >
          {isZh ? "全球贸易 · 美国法院" : "Global Trade, U.S. Courts"}
        </h2>
      </div>
    </section>
  );
}
