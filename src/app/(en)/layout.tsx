import type { Metadata } from "next";
import BaseLayout, { localeAlternates, siteUrl } from "../base-layout";
import { en } from "@/content/en";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: en.meta.title,
  description: en.meta.description,
  keywords: en.meta.keywords,
  alternates: {
    canonical: "/",
    languages: localeAlternates,
  },
  openGraph: {
    type: "website",
    siteName: "CBC Law",
    title: en.meta.title,
    description: en.meta.description,
    url: "/",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <BaseLayout lang="en">{children}</BaseLayout>;
}
