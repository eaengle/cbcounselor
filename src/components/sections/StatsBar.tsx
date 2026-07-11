import { SiteContent } from "@/content/types";
import CountUp from "@/components/CountUp";

export default function StatsBar({ content }: { content: SiteContent }) {
  return (
    <section className="border-y border-white/10 bg-navy-light px-6 py-10 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-4">
        {content.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-semibold text-accent-light sm:text-4xl">
              <CountUp value={stat.value} />
            </p>
            <p className="mt-2 text-sm text-white/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
