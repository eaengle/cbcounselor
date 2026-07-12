import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";
import { en } from "@/content/en";

export const metadata: Metadata = {
  title: "Contact Us | CBC Law",
  description: "Contact CBC Law to discuss a cross-border legal matter with our team.",
  alternates: {
    canonical: "/contact",
    languages: { en: "/contact", zh: "/zh/contact", "x-default": "/contact" },
  },
};

export default function Page() {
  return <ContactPage content={en} />;
}
