import type { SiteContent } from "@/content/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage({ content }: { content: SiteContent }) {
  const page = content.contactPage;
  const languageToggleHref = content.locale === "en" ? "/zh/contact" : "/contact";

  return (
    <div className="flex min-h-screen flex-col">
      <Header content={content} languageToggleHref={languageToggleHref} />
      <main className="flex-1 bg-[#f5f2ec]">
        <section className="relative overflow-hidden bg-navy px-6 py-20 text-white sm:py-28">
          <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/10" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-4 -top-16 h-64 w-64 rounded-full border border-accent-light/25" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl">
            <p className="locale-eyebrow text-sm font-medium uppercase tracking-[0.2em] text-accent-light">{page.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">{page.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{page.intro}</p>
          </div>
        </section>

        <section className="px-6 py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <aside>
              <p className="locale-eyebrow text-sm font-semibold uppercase tracking-[0.16em] text-accent">CBC Law</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy">{page.infoTitle}</h2>
              <p className="mt-4 leading-7 text-navy/65">{page.infoBody}</p>

              <div className="mt-9 border-t border-navy/10 pt-7">
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-navy/50">{page.emailLabel}</h3>
                <a className="mt-2 inline-block text-lg font-semibold text-accent hover:text-accent-light" href={`mailto:${content.contactCta.email}`}>
                  {content.contactCta.email}
                </a>
              </div>

              <div className="mt-7 border-t border-navy/10 pt-7">
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-navy/50">{page.officesLabel}</h3>
                <div className="mt-4 space-y-6">
                  {content.offices.groups.map((group) => (
                    <div key={group.country}>
                      <p className="font-semibold text-navy">{group.country}</p>
                      <div className="mt-2 space-y-3">
                        {group.cities.map((city) => (
                          <div key={city.name} className="text-sm leading-6 text-navy/60">
                            <p className="font-medium text-navy/85">{city.name}</p>
                            {city.addressLines?.map((line) => (
                              <p key={line}>{line}</p>
                            ))}
                            {city.phone && (
                              <p>
                                {content.offices.phoneLabel}: <a className="hover:text-accent" href={`tel:${city.phone.replace(/[^+\d]/g, "")}`}>{city.phone}</a>
                              </p>
                            )}
                            {city.fax && (
                              <p>
                                {content.offices.faxLabel}: {city.fax}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
            <ContactForm copy={page.form} recipient={content.contactCta.email} />
          </div>
        </section>
      </main>
      <Footer content={content} />
    </div>
  );
}
