import type { Metadata } from "next";
import BaseLayout, { localeAlternates, siteUrl } from "../base-layout";
import { zh } from "@/content/zh";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: zh.meta.title,
  description: zh.meta.description,
  keywords: zh.meta.keywords,
  alternates: {
    canonical: "/zh",
    languages: localeAlternates,
  },
  openGraph: {
    type: "website",
    siteName: "CBC Law",
    title: zh.meta.title,
    description: zh.meta.description,
    url: "/zh",
    locale: "zh_CN",
    alternateLocale: ["en_US"],
  },
};

export default function ZhLayout({ children }: { children: React.ReactNode }) {
  return <BaseLayout lang="zh">{children}</BaseLayout>;
}
