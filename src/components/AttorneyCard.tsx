import Image from "next/image";
import Link from "next/link";
import type { Attorney, Locale } from "@/content/types";
import { withBasePath } from "@/lib/base-path";

export default function AttorneyCard({
  attorney,
  locale,
  revealDetails = false,
}: {
  attorney: Attorney;
  locale: Locale;
  revealDetails?: boolean;
}) {
  const href = `${locale === "zh" ? "/zh" : ""}/people/${attorney.slug}`;
  const notableResult = attorney.representativeMatters[0];

  return (
    <Link
      href={href}
      className="group relative block h-full overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <Image
          src={withBasePath(attorney.photo.src)}
          alt={attorney.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top grayscale-[35%] contrast-[1.08] transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-tr from-navy/35 via-transparent to-accent/20 mix-blend-color transition-opacity duration-500 group-hover:opacity-0" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-navy">{attorney.name}</h3>
        <p className="mt-1 text-sm font-medium text-accent">{attorney.title}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {attorney.practiceFocus.slice(0, 3).map((area) => (
            <span key={area} className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600">
              {area}
            </span>
          ))}
        </div>
        {revealDetails && (
          <div className="grid grid-rows-[0fr] transition-all duration-300 group-hover:mt-5 group-hover:grid-rows-[1fr] group-focus-visible:mt-5 group-focus-visible:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <div className="border-t border-neutral-100 pt-4 text-sm text-neutral-600">
                <p className="font-medium text-navy">{attorney.barAdmissions}</p>
                {notableResult && <p className="mt-2 line-clamp-3">{notableResult}</p>}
              </div>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
