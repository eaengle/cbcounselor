import type { Metadata } from "next";
import PeoplePage from "@/components/PeoplePage";
import { en } from "@/content/en";

export const metadata: Metadata = {
  title: "Our People | CBC Law",
  description: "Meet CBC Law's attorneys and international alliance partners.",
  alternates: {
    canonical: "/people",
    languages: { en: "/people", zh: "/zh/people", "x-default": "/people" },
  },
};

export default function Page() {
  return <PeoplePage content={en} />;
}
