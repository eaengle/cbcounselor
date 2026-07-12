import { SiteContent } from "@/content/types";
import WeChatCard from "@/components/WeChatCard";

export default function Footer({ content }: { content: SiteContent }) {
  return (
    <footer className="border-t border-white/10 bg-navy px-6 py-12 text-white/70">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <div>
          <p className="text-lg font-semibold text-white">
            CBC <span className="text-accent-light">Law</span>
          </p>
          <p className="mt-1 max-w-xl text-sm">{content.footer.tagline}</p>
        </div>
        <WeChatCard content={content} compact />
        <p className="border-t border-white/10 pt-6 text-sm md:col-span-2">
          {content.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
