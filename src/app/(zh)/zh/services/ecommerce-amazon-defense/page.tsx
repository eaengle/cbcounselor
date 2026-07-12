import type { Metadata } from "next";
import EcommerceDefensePage from "@/components/EcommerceDefensePage";
import { ecommerceZh } from "@/content/ecommerce";
import { zh } from "@/content/zh";

export const metadata: Metadata = {
  title: ecommerceZh.meta.title,
  description: ecommerceZh.meta.description,
  alternates: {
    canonical: "/zh/services/ecommerce-amazon-defense",
    languages: {
      en: "/services/ecommerce-amazon-defense",
      zh: "/zh/services/ecommerce-amazon-defense",
      "x-default": "/services/ecommerce-amazon-defense",
    },
  },
};

export default function Page() {
  return <EcommerceDefensePage content={zh} page={ecommerceZh} />;
}
