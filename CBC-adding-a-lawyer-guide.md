# Adding (or Removing) a Lawyer — CBC Website Guide

**Who this is for:** whoever maintains the CBC website for Alan's team. It does **not**
require a professional developer, but it does require someone comfortable editing a text
file and using Git (or GitHub's web editor). There is **no admin login or CMS** — the
lawyer roster lives in the site's source code and is published automatically when changes
are pushed.

If that's a blocker, the alternative is to email the new lawyer's details (see the
checklist at the bottom) to whoever holds this role and have them do it.

---

## The one file you edit

All attorney profiles live in a single file:

```
src/content/attorneys.ts
```

Every lawyer appears **twice** in that file:

- once in the English block, which starts at `"en": [`
- once in the Chinese block, which starts at `"zh": [`

**Both are required.** If you add a lawyer to only the English block, they will be missing
from the Chinese version of the site (and their Chinese profile page will 404).

Everything else is automatic. When you add an entry:

- their card appears on the **People** page, in the right group for their role
- their individual profile page (`/people/their-slug`) is generated automatically
- no other file needs to change (unless you want to feature them on the homepage — see
  "Optional extras" below)

---

## Step 1 — Prepare the portrait photo

1. Get a portrait image of the new lawyer. A vertical (portrait-orientation) photo looks
   best; the existing ones are roughly 1152 × 1430 pixels.
2. Save it as a `.webp` (or `.png`/`.jpg`) file.
3. Name it after the lawyer using lowercase and hyphens, e.g. `jane-doe-portrait-v2.webp`.
4. Put the file in the `public/people/` folder alongside the other portraits.

You'll reference this filename in Step 2.

---

## Step 2 — Add the English entry

In `src/content/attorneys.ts`, find the `"en": [` block. Copy the template below, fill in
the blanks, and paste it as a **new entry** — place it near others of the same role (all
partners together, associates together, etc.), and make sure there's a comma between
entries.

```ts
{
  "name": "Jane Doe",
  "slug": "jane-doe",
  "title": "Partner",
  "role": "partner",
  "barAdmissions": "California, New York",
  "education": [
    "JD, Stanford University",
    "BA, UC Berkeley"
  ],
  "practiceFocus": [
    "Intellectual Property",
    "Patent Litigation"
  ],
  "bio": [
    "First paragraph of the bio goes here.",
    "Second paragraph (optional) goes here."
  ],
  "representativeMatters": [
    "A notable matter or result.",
    "Another notable matter."
  ],
  "email": "jane.doe@cbcounselor.com",
  "photo": {
    "src": "/people/jane-doe-portrait-v2.webp",
    "width": 1152,
    "height": 1430
  }
},
```

### Field-by-field

| Field | What to put |
|---|---|
| `name` | Full display name. |
| `slug` | Lowercase, hyphenated version of the name. **Must be identical in the English and Chinese entries** — this is what links the two and forms the profile URL (`/people/jane-doe`). |
| `title` | Job title shown on the card, e.g. `Partner`, `Of Counsel`, `Associate`, `Foreign Law Counsel`, `Alliance Partner`, `Founding Partner`, `Managing Partner`. |
| `role` | Controls which section the lawyer is grouped under. **Must be exactly one of:** `partner`, `alliance-partner`, `of-counsel`, `foreign-law-counsel`, `associate`. (Note: `title` is free text; `role` is a fixed keyword.) |
| `barAdmissions` | A single string, e.g. `"California, New York"`. |
| `education` | A list of degrees, one per line inside the `[ ]`. |
| `practiceFocus` | A list of practice areas. |
| `bio` | A list of paragraphs. One paragraph = one `"..."` item. |
| `representativeMatters` | A list of notable results. Leave as `[]` (empty) if none. |
| `email` | Their email in quotes, or `null` (no quotes) if they don't list one publicly. |
| `photo.src` | `"/people/your-file-name.webp"` — the file you added in Step 1. |
| `photo.width` / `photo.height` | Use `1152` and `1430` unless you know the exact dimensions. |

**Formatting rules that matter:**

- Keep every text value inside double quotes: `"like this"`.
- Separate list items with commas; **no** comma after the last item in a list.
- Put a comma after the closing `}` of each lawyer's entry (so the next one is separated).

---

## Step 3 — Add the Chinese entry

Scroll down to the `"zh": [` block and add a matching entry with the **same `slug`** but
Chinese text for `name`, `title`, `barAdmissions`, `education`, `practiceFocus`, `bio`,
and `representativeMatters`. The `role`, `email`, and `photo` are usually identical to the
English entry.

```ts
{
  "name": "简·多伊",
  "slug": "jane-doe",
  "title": "合伙人",
  "role": "partner",
  "barAdmissions": "加州、纽约州",
  "education": [
    "斯坦福大学法律博士",
    "加州大学伯克利分校学士"
  ],
  "practiceFocus": [
    "知识产权",
    "专利诉讼"
  ],
  "bio": [
    "中文简介第一段。"
  ],
  "representativeMatters": [],
  "email": "jane.doe@cbcounselor.com",
  "photo": {
    "src": "/people/jane-doe-portrait-v2.webp",
    "width": 1152,
    "height": 1430
  }
},
```

> If you don't have Chinese copy ready, a reasonable stopgap is to reuse the English text
> in the Chinese entry so the profile still appears, then update it later. What you must
> **not** do is skip the Chinese entry entirely.

---

## Step 4 — Preview locally (optional but recommended)

If you have the project set up on your computer:

```bash
npm install      # first time only
npm run dev      # then open http://localhost:3000/people in your browser
```

Check that the new lawyer shows up on the People page in both languages and that their
photo loads. Press `Ctrl+C` to stop the preview.

If you don't run it locally, you can still verify after publishing (Step 5) by visiting the
live site.

---

## Step 5 — Publish

Publishing is automatic. **Commit your changes and push to the `main` branch** — either via
Git or by editing the file directly on GitHub and committing. That triggers the deploy
workflow (`.github/workflows/deploy.yml`), which rebuilds the site and pushes it live to
GitHub Pages within a few minutes.

If you edit on GitHub.com: open `src/content/attorneys.ts`, click the pencil icon, make the
changes, upload the photo to `public/people/`, and commit both. No local setup needed.

> **Tip:** The deploy runs a build first. If you left a typo (a missing comma or quote), the
> build fails and the site simply keeps the previous version — it won't publish a broken
> page. Check the "Actions" tab on GitHub to see whether the deploy succeeded.

---

## Optional extras

- **Feature them on the homepage.** The homepage shows three highlighted lawyers. To change
  who, edit `featuredSlugs` in **both** `src/content/en.ts` and `src/content/zh.ts`
  (currently `["ning-zhang", "charles-cheng", "alan-engle"]`). Use the lawyer's `slug`.
- **Ordering.** Within each role group, lawyers appear in the order they're listed in the
  file. Reorder the entries to reorder the cards. The role sections themselves are always
  ordered: partners → alliance partners → of counsel → foreign law counsel → associates.

---

## Removing a lawyer

Delete that lawyer's entry from **both** the `"en"` and `"zh"` blocks (from the opening `{`
to the closing `},`). If they were listed in `featuredSlugs`, replace them there too.
Commit and push. Their photo file can be left in `public/people/` or deleted — it won't
affect the site either way.

---

## What to send if someone else does the editing

To hand a new lawyer off to whoever maintains the site, provide:

- [ ] Full name (English **and** Chinese)
- [ ] Title (e.g. Partner, Of Counsel, Associate)
- [ ] Which group/role they belong to
- [ ] Bar admissions
- [ ] Education (degrees + schools)
- [ ] Practice focus areas
- [ ] Bio (English and Chinese)
- [ ] Representative matters (optional)
- [ ] Public email address (or note that there isn't one)
- [ ] A portrait photo (vertical orientation, high resolution)
- [ ] Whether they should be featured on the homepage
