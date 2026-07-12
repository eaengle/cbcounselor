import type { Metadata } from "next";
import EcommerceDefensePage from "@/components/EcommerceDefensePage";
import { ecommerceEn } from "@/content/ecommerce";
import { en } from "@/content/en";

export const metadata: Metadata = {
  title: ecommerceEn.meta.title,
  description: ecommerceEn.meta.description,
  alternates: {
    canonical: "/services/ecommerce-amazon-defense",
    languages: {
      en: "/services/ecommerce-amazon-defense",
      zh: "/zh/services/ecommerce-amazon-defense",
      "x-default": "/services/ecommerce-amazon-defense",
    },
  },
};

export default function Page() {
  return <EcommerceDefensePage content={en} page={ecommerceEn} />;
}
