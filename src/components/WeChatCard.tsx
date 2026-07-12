import Image from "next/image";
import { SiteContent } from "@/content/types";

export default function WeChatCard({
  content,
  compact = false,
}: {
  content: SiteContent;
  compact?: boolean;
}) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.04] p-4 text-left">
      <div className="shrink-0 rounded-xl bg-white p-2">
        <Image
          src={`${basePath}/wechat-qr-placeholder.svg`}
          alt={content.wechat.qrAlt}
          width={compact ? 80 : 112}
          height={compact ? 80 : 112}
          className={compact ? "h-20 w-20" : "h-24 w-24 sm:h-28 sm:w-28"}
        />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent-light">
          {content.wechat.availability}
        </p>
        <h3 className="mt-1 font-semibold text-white">{content.wechat.title}</h3>
        <p className="mt-2 text-xs text-white/50">{content.wechat.idLabel}</p>
        <p className="text-sm text-white/80">{content.wechat.id}</p>
        <p className="mt-1 text-xs text-white/40">{content.wechat.placeholder}</p>
      </div>
    </div>
  );
}
