import Link from "next/link";
import { SiteContent } from "@/content/types";

export default function Header({ content }: { content: SiteContent }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={content.locale === "en" ? "/" : "/zh"} className="text-lg font-semibold tracking-tight text-white">
          CBC <span className="text-accent-light">Law</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-white/80 lg:flex">
          {content.nav.links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-sm">
          <Link
            href={content.nav.languageToggleHref}
            className="rounded-full border border-white/20 px-3 py-1 text-white/80 transition-colors hover:border-white/50 hover:text-white"
          >
            {content.nav.languageToggleLabel}
          </Link>
          <a
            href="#contact"
            className="rounded-full bg-accent px-4 py-2 font-medium text-white transition-colors hover:bg-accent-light"
          >
            {content.nav.contactLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
