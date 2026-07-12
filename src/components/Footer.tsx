import { SiteContent } from "@/content/types";
import Image from "next/image";
import { withBasePath } from "@/lib/base-path";
import WeChatCard from "@/components/WeChatCard";

export default function Footer({ content }: { content: SiteContent }) {
  return (
    <footer className="border-t border-white/10 bg-navy px-6 py-12 text-white/70">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <div>
          <Image
            src={withBasePath("/brand/logo-cbc-white.svg")}
            alt="CBC Law"
            width={219}
            height={87}
            className="h-11 w-auto"
          />
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
