import { SiteContent } from "@/content/types";
import Image from "next/image";
import { withBasePath } from "@/lib/base-path";

export default function Footer({ content }: { content: SiteContent }) {
  return (
    <footer className="border-t border-white/10 bg-navy px-6 py-12 text-white/70">
      <div className="mx-auto max-w-6xl">
        <Image
          src={withBasePath("/brand/logo-cbc-white.svg")}
          alt="CBC Law"
          width={219}
          height={87}
          className="h-11 w-auto"
        />
        <p className="mt-1 max-w-xl text-sm">{content.footer.tagline}</p>
        <p className="mt-8 border-t border-white/10 pt-6 text-sm">
          {content.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
