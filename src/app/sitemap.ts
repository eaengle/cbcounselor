import type { MetadataRoute } from "next";
import { siteUrl } from "./base-layout";
import { getAttorneys } from "@/content/attorneys";
import { getInsights } from "@/content/insights";

// Generated at build time from the same content files the site is built from, so
// adding an attorney (src/content/attorneys.ts) or an article (content/insights/**)
// makes that page appear here automatically on the next build. No manual upkeep.
export const dynamic = "force-static";

const base = siteUrl.replace(/\/$/, "");

// Match the site's trailingSlash: true output (every route is served as /path/).
function url(path: string): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? `${base}/${clean}/` : `${base}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Pages that exist in both locales: [English path, Chinese path, priority].
  const paired: Array<[string, string, number]> = [
    ["/", "/zh", 1],
    ["/people", "/zh/people", 0.8],
    ["/contact", "/zh/contact", 0.7],
    [
      "/services/ecommerce-amazon-defense",
      "/zh/services/ecommerce-amazon-defense",
      0.7,
    ],
  ];

  for (const [en, zh, priority] of paired) {
    const languages = { en: url(en), zh: url(zh) };
    entries.push({
      url: url(en),
      lastModified: now,
      changeFrequency: "monthly",
      priority,
      alternates: { languages },
    });
    entries.push({
      url: url(zh),
      lastModified: now,
      changeFrequency: "monthly",
      priority,
      alternates: { languages },
    });
  }

  // Attorney profiles (same slug in both locales).
  for (const { slug } of getAttorneys("en")) {
    const languages = {
      en: url(`/people/${slug}`),
      zh: url(`/zh/people/${slug}`),
    };
    entries.push({
      url: url(`/people/${slug}`),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
      alternates: { languages },
    });
    entries.push({
      url: url(`/zh/people/${slug}`),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
      alternates: { languages },
    });
  }

  // Insight articles. Cross-link locales only where both language files exist.
  const zhSlugs = new Set(getInsights("zh").map((a) => a.slug));
  const enSlugs = new Set(getInsights("en").map((a) => a.slug));

  for (const { slug } of getInsights("en")) {
    const languages = zhSlugs.has(slug)
      ? { en: url(`/insights/${slug}`), zh: url(`/zh/insights/${slug}`) }
      : undefined;
    entries.push({
      url: url(`/insights/${slug}`),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
      ...(languages ? { alternates: { languages } } : {}),
    });
  }

  for (const { slug } of getInsights("zh")) {
    const languages = enSlugs.has(slug)
      ? { en: url(`/insights/${slug}`), zh: url(`/zh/insights/${slug}`) }
      : undefined;
    entries.push({
      url: url(`/zh/insights/${slug}`),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
      ...(languages ? { alternates: { languages } } : {}),
    });
  }

  return entries;
}
