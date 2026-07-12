import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsightArticlePage from "@/components/InsightArticlePage";
import { zh } from "@/content/zh";
import { getInsight, getInsights } from "@/content/insights";

export const dynamicParams = false;
export function generateStaticParams() { return getInsights("zh").map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsight("zh", slug);
  if (!article) return {};
  return { title: `${article.title} | CBC Law`, description: article.summary, alternates: { canonical: `/zh/insights/${slug}`, languages: { en: `/insights/${slug}`, zh: `/zh/insights/${slug}`, "x-default": `/insights/${slug}` } } };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getInsight("zh", slug);
  if (!article) notFound();
  return <InsightArticlePage article={article} content={zh} />;
}
