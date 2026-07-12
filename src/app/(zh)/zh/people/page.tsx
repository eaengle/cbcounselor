import type { Metadata } from "next";
import PeoplePage from "@/components/PeoplePage";
import { zh } from "@/content/zh";

export const metadata: Metadata = {
  title: "专业团队 | CBC Law",
  description: "认识 CBC Law 的律师团队与国际联盟合伙人。",
  alternates: {
    canonical: "/zh/people",
    languages: { en: "/people", zh: "/zh/people", "x-default": "/people" },
  },
};

export default function Page() {
  return <PeoplePage content={zh} />;
}
