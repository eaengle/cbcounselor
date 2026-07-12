import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AttorneyProfile from "@/components/AttorneyProfile";
import { en } from "@/content/en";
import { getAttorney, getAttorneys } from "@/content/attorneys";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAttorneys("en").map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const attorney = getAttorney("en", slug);
  if (!attorney) return {};

  return {
    title: `${attorney.name} | CBC Law`,
    description: `${attorney.name} is ${attorney.title} at CBC Law, focusing on ${attorney.practiceFocus.slice(0, 3).join(", ")}.`,
    alternates: {
      canonical: `/people/${slug}`,
      languages: { en: `/people/${slug}`, zh: `/zh/people/${slug}`, "x-default": `/people/${slug}` },
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const attorney = getAttorney("en", slug);
  if (!attorney) notFound();
  return <AttorneyProfile attorney={attorney} content={en} />;
}
