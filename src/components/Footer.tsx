import { SiteContent } from "@/content/types";

export default function Footer({ content }: { content: SiteContent }) {
  return (
    <footer className="border-t border-white/10 bg-navy px-6 py-12 text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">
            CBC <span className="text-accent-light">Law</span>
          </p>
          <p className="mt-1 max-w-xl text-sm">{content.footer.tagline}</p>
        </div>
        <p className="text-sm">{content.footer.copyright}</p>
      </div>
    </footer>
  );
}
