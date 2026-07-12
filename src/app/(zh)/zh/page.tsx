import { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { zh } from "@/content/zh";

export const metadata: Metadata = {
  title: zh.meta.title,
  description: zh.meta.description,
};

export default function Page() {
  return <HomePage content={zh} />;
}
