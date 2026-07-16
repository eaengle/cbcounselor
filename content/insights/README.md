# How to add a News & Insights article

You can publish a new article yourself, from your web browser, without any developer
help. An article is just **one text file** added to this folder. When you save it,
the website rebuilds automatically and the article appears within a few minutes.

No software to install. You only need your GitHub account.

---

## Where articles live

```
content/insights/
├── en/   ← English articles (one .md file each)
└── zh/   ← Chinese articles (one .md file each)
```

- To publish an **English** article, add a file to `content/insights/en/`.
- To publish a **Chinese** article, add a file to `content/insights/zh/`.
- To publish in **both** languages, add one file to each folder and give them the
  **same file name** — that links them together.

Each article file ends in `.md`. The file name (without `.md`) becomes the article's
web address. For example `content/insights/en/new-tariff-rules.md` becomes
`cbcounselor.com/insights/new-tariff-rules`.

Articles are always shown newest-first, and the five newest appear on the homepage —
automatically, based on the `date` you set. You never have to touch the homepage.

---

## Step-by-step (in the browser)

1. Go to the repository on **github.com** and open the folder for your language:
   `content/insights/en` (or `.../zh`).
2. Click **Add file → Create new file**.
3. In the name box at the top, type a short name ending in `.md`, using lowercase
   letters and hyphens instead of spaces, e.g. `new-tariff-rules.md`.
4. Paste the template below and fill it in.
5. Scroll down, click **Commit new file**. That's it — the site rebuilds itself.

To **edit** an article later, open its file and click the pencil ✏️ icon.
To **remove** one, open its file and use the "Delete file" option (trash icon).

---

## Copy this template

```
---
title: Your headline goes here
date: 2026-07-15
summary: One or two sentences describing the article. This shows on the card.
author: Alan Engle
---

Write your first paragraph here.

Leave a blank line between paragraphs. Each block of text separated by a blank
line becomes its own paragraph on the page.

Write as many paragraphs as you like.
```

### The three required lines

| Line      | What to put                                                    |
|-----------|----------------------------------------------------------------|
| `title`   | The headline. It can contain colons, commas, quotes — anything.|
| `date`    | Publication date as `YYYY-MM-DD` (year-month-day). Controls ordering. |
| `summary` | A short teaser shown on the article card and at the top of the page. |

`author` is optional; leave the line out if you don't want a byline.

**Rules of thumb**
- Keep everything between the two `---` lines to simple `key: value` lines.
- Write the article body *below* the second `---` line, as normal paragraphs.
- Don't worry about quotation marks or indentation in the top section — just type.

---

## Optional extras (only if you need them)

Most articles need nothing more than the four lines above. If you want to link out to
a press piece, add a photo, or link an attorney, you can add any of these optional
lines to the top section (between the `---` fences):

```
category: In the News
link: https://www.law.com/article-url
link_label: Press coverage by Law.com
link_cta: Read the full coverage
image: https://example.com/photo.jpg
image_alt: Description of the photo for screen readers
image_credit: Photo via Law.com
attorney: Wesley Johnson
attorney_href: /people/wesley-johnson
attorney_label: Meet the attorney
```

- `link` adds a button linking to an external article.
- `image` shows a photo at the top of the article (use a full web address).
- `attorney` adds a link to that attorney's profile page.

Leave out any line you don't need.

---

## A note on drafts

If you want to keep a file in the folder without publishing it yet, start its file
name with an underscore, e.g. `_draft-new-tariff-rules.md`. Files that start with `_`
are ignored and won't appear on the site until you rename them.

---

*Technical note (for developers): these Markdown files are read at build time by
`src/content/insights.ts`, which turns them into the typed `InsightArticle` objects
the site renders. No code changes are needed to add, edit, or remove an article.*
