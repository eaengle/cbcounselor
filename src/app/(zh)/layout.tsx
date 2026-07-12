import type { Metadata } from "next";
import BaseLayout, { localeAlternates, siteUrl } from "../base-layout";
import { zh } from "@/content/zh";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: zh.meta.title,
  description: zh.meta.description,
  alternates: {
    canonical: "/zh",
    languages: localeAlternates,
  },
};

export default function ZhLayout({ children }: { children: React.ReactNode }) {
  return <BaseLayout lang="zh">{children}</BaseLayout>;
}
