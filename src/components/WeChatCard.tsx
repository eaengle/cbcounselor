import { SiteContent } from "@/content/types";

export default function WeChatCard({
  content,
  compact = false,
}: {
  content: SiteContent;
  compact?: boolean;
}) {
  return (
    <a
      href={content.wechat.href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.04] p-4 text-left transition-colors hover:border-accent-light/60 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <div
        aria-hidden="true"
        className={`grid shrink-0 place-items-center rounded-xl bg-[#07c160] text-white ${compact ? "h-14 w-14" : "h-16 w-16"}`}
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
          <path d="M9.6 4C5.4 4 2 6.8 2 10.2c0 1.9 1.1 3.7 2.9 4.8l-.7 2.2 2.6-1.3c.9.3 1.8.5 2.8.5h.5a5.6 5.6 0 0 1-.2-1.5c0-3.2 2.9-5.8 6.5-5.8h.5C16.3 6.2 13.3 4 9.6 4Zm-2.5 4.1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
          <path d="M22 14.9c0-2.7-2.6-4.9-5.7-4.9s-5.7 2.2-5.7 4.9 2.6 4.9 5.7 4.9c.8 0 1.5-.1 2.2-.4l2 1-.5-1.8c1.2-.9 2-2.2 2-3.7Zm-7.6-1.2a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6Zm3.8 0a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6Z" />
        </svg>
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent-light">
          {content.wechat.title}
        </p>
        <p className="mt-1 font-semibold text-white">{content.wechat.accountName}</p>
        <p className="mt-1 text-xs text-white/50">
          {content.wechat.idLabel}: {content.wechat.id}
        </p>
        <p className="mt-2 text-sm font-medium text-white/80 transition-colors group-hover:text-white">
          {content.wechat.linkLabel} <span aria-hidden="true">↗</span>
        </p>
      </div>
    </a>
  );
}
