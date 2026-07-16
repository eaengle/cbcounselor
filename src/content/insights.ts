import fs from "node:fs";
import path from "node:path";
import type { InsightArticle, Locale } from "./types";

// News & Insights articles are plain Markdown files, one per article, under
// `content/insights/<locale>/<slug>.md`. Adding an article = adding one file
// (see content/insights/README.md). This module reads those files at build time
// and turns them into the typed `InsightArticle` objects the site renders.
//
// Frontmatter is a simple block of `key: value` lines between `---` fences.
// The Markdown after the closing fence becomes the article body (each
// blank-line-separated block is one paragraph).

const CONTENT_DIR = path.join(process.cwd(), "content", "insights");

interface RawFields {
  [key: string]: string;
}

/** Split "key: value" frontmatter on the FIRST colon so titles/summaries may contain colons. */
function parseFrontmatter(block: string): RawFields {
  const fields: RawFields = {};
  for (const line of block.split(/\r?\n/)) {
    if (!line.trim() || line.trimStart().startsWith("#")) continue;
    const colon = line.indexOf(":");
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    const value = line.slice(colon + 1).trim();
    if (key && value) fields[key] = value;
  }
  return fields;
}

/** Split the body into paragraphs on blank lines. */
function parseBody(body: string): string[] {
  return body
    .split(/\r?\n\s*\r?\n/)
    .map((p) => p.replace(/\s*\r?\n\s*/g, " ").trim())
    .filter(Boolean);
}

function parseFile(raw: string): { fields: RawFields; body: string[] } {
  const match = raw.match(/^﻿?---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { fields: {}, body: parseBody(raw) };
  return { fields: parseFrontmatter(match[1]), body: parseBody(match[2] ?? "") };
}

function buildArticle(slug: string, fields: RawFields, body: string[], locale: Locale): InsightArticle {
  const prefix = locale === "zh" ? "/zh" : "";
  const article: InsightArticle = {
    title: fields.title ?? slug,
    date: fields.date ?? "",
    summary: fields.summary ?? "",
    href: `${prefix}/insights/${slug}`,
    slug,
  };

  if (fields.author) article.author = fields.author;
  if (fields.category) article.category = fields.category;
  if (body.length) article.body = body;

  if (fields.image) {
    article.image = {
      src: fields.image,
      alt: fields.image_alt ?? article.title,
      width: Number(fields.image_width) || 1200,
      height: Number(fields.image_height) || 800,
      credit: fields.image_credit ?? "",
    };
  }

  if (fields.link) {
    article.source = {
      url: fields.link,
      label: fields.link_label ?? (locale === "zh" ? "外部链接" : "External source"),
      cta: fields.link_cta ?? (locale === "zh" ? "阅读原文" : "Read the full article"),
    };
  }

  if (fields.attorney && fields.attorney_href) {
    article.relatedAttorney = {
      name: fields.attorney,
      href: fields.attorney_href,
      label: fields.attorney_label ?? (locale === "zh" ? "律师简介" : "Meet the attorney"),
    };
  }

  return article;
}

function loadLocale(locale: Locale): InsightArticle[] {
  const dir = path.join(CONTENT_DIR, locale);
  let files: string[];
  try {
    // Skip files starting with "_" or "." so drafts/templates never publish.
    files = fs.readdirSync(dir).filter((f) => f.endsWith(".md") && !/^[._]/.test(f));
  } catch {
    return [];
  }

  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const { fields, body } = parseFile(fs.readFileSync(path.join(dir, file), "utf8"));
      return buildArticle(slug, fields, body, locale);
    })
    // Newest first. Articles without a date sort last.
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}

// Read once at build time.
const insightsByLocale: Record<Locale, InsightArticle[]> = {
  en: loadLocale("en"),
  zh: loadLocale("zh"),
};

export function getInsights(locale: Locale): InsightArticle[] {
  return insightsByLocale[locale];
}

export function getInsight(locale: Locale, slug: string): InsightArticle | undefined {
  return insightsByLocale[locale].find((article) => article.slug === slug);
}
