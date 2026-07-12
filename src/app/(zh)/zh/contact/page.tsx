import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";
import { zh } from "@/content/zh";

export const metadata: Metadata = {
  title: "联系我们 | CBC Law",
  description: "联系 CBC Law 团队，讨论您的跨境法律事务。",
  alternates: {
    canonical: "/zh/contact",
    languages: { en: "/contact", zh: "/zh/contact", "x-default": "/contact" },
  },
};

export default function Page() {
  return <ContactPage content={zh} />;
}
