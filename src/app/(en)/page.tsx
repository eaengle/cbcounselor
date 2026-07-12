import { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { en } from "@/content/en";

export const metadata: Metadata = {
  title: en.meta.title,
  description: en.meta.description,
};

export default function Page() {
  return <HomePage content={en} />;
}
