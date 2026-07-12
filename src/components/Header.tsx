"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { SiteContent } from "@/content/types";
import { withBasePath } from "@/lib/base-path";

export default function Header({ content }: { content: SiteContent }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={content.locale === "en" ? "/" : "/zh"} aria-label="CBC Law" className="shrink-0">
          <Image
            src={withBasePath("/brand/logo-cbc-white.svg")}
            alt="CBC Law"
            width={219}
            height={87}
            priority
            className="h-10 w-auto"
          />
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
            href={content.locale === "en" ? "/#contact" : "/zh/#contact"}
            className="hidden rounded-full bg-accent px-4 py-2 font-medium text-white transition-colors hover:bg-accent-light sm:block"
          >
            {content.nav.contactLabel}
          </a>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-md text-white/80 transition-colors hover:text-white lg:hidden"
            aria-label={content.nav.menuLabel}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            className="overflow-hidden border-t border-white/10 bg-navy lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="mx-auto flex max-w-6xl flex-col px-6 py-4">
              {content.nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="border-b border-white/5 py-3 text-sm text-white/80 transition-colors last:border-b-0 hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={content.locale === "en" ? "/#contact" : "/zh/#contact"}
                className="mt-4 rounded-full bg-accent px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-accent-light"
                onClick={() => setMenuOpen(false)}
              >
                {content.nav.contactLabel}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
