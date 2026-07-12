import type { Metadata } from "next";
import BaseLayout, { localeAlternates, siteUrl } from "../base-layout";
import { en } from "@/content/en";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: en.meta.title,
  description: en.meta.description,
  alternates: {
    canonical: "/",
    languages: localeAlternates,
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <BaseLayout lang="en">{children}</BaseLayout>;
}
