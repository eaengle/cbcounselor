import { withBasePath } from "@/lib/base-path";

// Homepage callout announcing the Schedule A class action, sitting directly under the
// hero (near the hero's Schedule A defense button). Self-contained and bilingual, in the
// same pattern as KangolFeature — no changes to the shared content types or en/zh files.
// The primary button routes to the e-commerce defense intake; the secondary opens the
// press-release article in News & Insights.
export default function ScheduleAClassActionCallout({ locale }: { locale: "en" | "zh" }) {
  const isZh = locale === "zh";
  const prefix = isZh ? "/zh" : "";
  const intakeHref = withBasePath(
    `${prefix}/services/ecommerce-amazon-defense#urgent-intake`,
  );
  const pressHref = withBasePath(`${prefix}/insights/schedule-a-class-action`);

  return (
    <section
      className="bg-white px-6 py-10 sm:py-12"
      aria-labelledby="sched-a-class-action-title"
    >
      <div className="mx-auto grid max-w-6xl gap-5 border-l-4 border-accent bg-[#f5f2ec] p-6 sm:p-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
        <div>
          <p className="locale-eyebrow text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {isZh ? "集体诉讼已提起" : "Class action filed"}
          </p>
          <h2
            id="sched-a-class-action-title"
            className="mt-2 text-xl font-semibold leading-snug text-navy"
          >
            {isZh ? "Schedule A 集体诉讼" : "Schedule A Class Action"}
          </h2>
        </div>
        <div>
          <p className="leading-7 text-navy/70">
            {isZh
              ? "本所在美国伊利诺伊州北区法院提起集体诉讼，寻求撤销针对中国大陆卖家作出的数千起 “Schedule A” 缺席判决，并追回据此扣划的资金。可能受影响的卖家欢迎免费咨询，无任何费用或义务。"
              : "A class action filed in the Northern District of Illinois seeks to void thousands of “Schedule A” default judgments entered against mainland-China sellers and to return the money collected under them. Sellers who may have been affected are welcome to inquire, at no cost or obligation."}
          </p>
          <div className="mt-5 flex flex-col items-start gap-3">
            <a
              href={intakeHref}
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {isZh
                ? "Schedule A 既往受害者集体诉讼"
                : "Class Action for prior victims of Schedule A cases"}
            </a>
            <a
              href={pressHref}
              className="inline-flex items-center justify-center rounded-full border border-navy/25 px-7 py-3 text-sm font-semibold text-navy transition-colors hover:border-navy hover:bg-navy/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              {isZh ? "新闻稿" : "Press Release"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
