# Handover Plan — Alan's July 15, 2026 Email

Owner: Michelle (taking over from Eric). Source: Alan's email of Wed, Jul 15, 2026.
Companion docs: `PLAN.md` (original roadmap, Sessions 1–4 largely done, Session 5 open),
`DESIGN-NOTES.md`, `CBC-attorney-credentials-reference.md`.

Legend: 🔶 = blocked on something only Alan can provide/decide.

---

## A. Quick wins — do first, one small PR

### A1. Banner headline (Alan item 2)

- `src/content/en.ts:37` — replace
  `"Serious Counsel for Chinese Companies — In the Courtroom and in the Boardroom."`
  with **"Protecting and Securing the Business of Foreign Companies in the United States."**
  (Alan said "something like" — ship his wording verbatim; he can tweak later.)
- `src/content/zh.ts:42` — the Chinese headline is a translation of the old line
  (为中国企业提供严肃法律顾问——从法庭到董事会。). Draft a matching translation of the
  new headline and 🔶 flag for native-speaker review before deploy.
- **Ripple to flag for Alan (don't change unilaterally):** the "Chinese companies"
  positioning appears beyond the headline — hero subheadline (`en.ts:39`), practice
  section title `"Two Practices, One Standard: Serious Counsel for Chinese Enterprises."`
  (`en.ts:107`), client descriptors, and page metadata. If the firm is repositioning to
  "foreign companies" broadly, those should follow. 🔶 Ask how far to take it.

### A2. Email corrections (Alan item 3)

Update `src/content/attorneys.ts` — **both** the English and Chinese roster blocks
(each attorney appears twice), and keep `CBC-attorney-credentials-reference.md` in sync.

| Attorney | Currently in repo | Alan's correct address |
|---|---|---|
| Ning Zhang | ning.zhang@ | **ning@cbcounselor.com** |
| Alan Engle | alan.engle@ | **aengle@cbcounselor.com** |
| Wesley Johnson | wesley.johnson@ | **wjohnson@cbcounselor.com** |
| Edwin Wheeler | edwin.wheeler@ | **ewheeler@cbcounselor.com** |
| Ben Solter | benjamin.solter@ | **bsolter@cbcounselor.com** |
| Daniel Yuan | *(no contact block)* | **daniel.yuan@cbcounselor.com** — add contact block |

Already correct (no change): charles.cheng@, Jessie.yang@, Schuyler@, ian.yang@, fengyang@.

Discrepancies to resolve with Alan:

- 🔶 **Grace Cai (grace@cbcounselor.com)** is in Alan's list but is **not on the roster
  at all** (not on the live site's 23-person roster either). New hire needing a full
  profile (photo, bio, admissions, both locales)? Ask.
- 🔶 **Cedrick Sun (cedricksun@)** and **Funmi Owolabi (Funmi@)** have emails on the site
  but are absent from Alan's list. His list is probably just incomplete — confirm rather
  than remove.

### A3. Verification for the A-block

`npm run lint` + `npm run build`; spot-check `/`, `/zh`, and a corrected profile page
(e.g. `/people/alan-engle`) in `npm run dev`.

---

## B. Themed photography (Alan item 1)

Goal: shipping / industrial / ports imagery supporting the cross-border trade story.

1. **Source** 🔶 — two options, ask Alan's preference:
   - Firm-supplied photos (best: authentic, no license questions).
   - Licensed stock (e.g. Unsplash/Pexels commercial-use licenses). If stock, record the
     source + license per image in `DESIGN-NOTES.md` — this is a law firm's site;
     provenance matters.
2. **Placement** — highest-value spots, using the duotone/gradient treatment that already
   exists (PLAN Session 4): hero background or side panel, practice-areas section band,
   contact/offices section, and the e-commerce defense page header.
3. **Implementation** — drop optimized files (WebP, ~1600px, compressed) into
   `public/brand/` or a new `public/imagery/`; images are `unoptimized: true` under
   static export, so compress at rest. Keep alt text meaningful in both locales.
4. Interim approach if Alan is slow to decide: proceed with 2–3 free-license placeholders
   so he can react to something concrete, and swap on feedback.

---

## C. Office addresses (Alan item 5) — partially done 2026-07-15

- The live cbcounselor.com contact page publishes **no street addresses** (verified
  2026-07-15); Alan supplied four the same day, now live in `en.ts`/`zh.ts`:
  - **Silicon Valley** — 149 Commonwealth Dr, Suite 1042, Menlo Park, CA 94025
  - **Southern California** — Suite 1167, 7755 Center Ave, Huntington Beach, CA 92647
    (*renamed from "Los Angeles"* — the address is Orange County, and Alan labeled it
    Southern California; zh name is now 南加州)
  - **Chicago** — 105 W. Madison St., Suite 2300, Chicago, IL 60602-4678;
    Phone (312) 752-4828, Fax (312) 264-2535
  - **Shanghai** — c/o Yuanda Law Firm, Room 2010B, 5 Corporate Avenue, No. 150 Hubin
    Road, Huangpu District, Shanghai 200021
- Implementation: `OfficeCity` type (`types.ts`) with optional `addressLines`/`phone`/
  `fax`; rendered on `/contact` and `/zh/contact`; homepage map unchanged (labels only).
  City order in the content files is index-mapped to `OfficeMap.tsx` dot coordinates —
  don't reorder.
- Addresses display in English on both locales (postal accuracy). 🔶 A Chinese rendering
  of the Shanghai address (incl. Yuanda Law Firm's Chinese name, which we won't guess)
  can replace it on /zh once a native speaker confirms it.
- Still open 🔶: Beijing and Shenzhen addresses ("may not be an address," per Alan —
  they stay listed without addresses, or ask if they should come off the list);
  Seattle and Cancun unmentioned — confirm they're still offices.

---

## D. Portability & Alan self-managing content (Alan item 4)

Current state: content lives in typed TS files (`src/content/*.ts`); push to `main` on
GitHub auto-builds a fully static site (`out/`) to GitHub Pages. The static export is
already host-portable — any static host (Vercel, Cloudflare Pages, plain nginx) can serve
it. The gap is that adding a news article requires editing TypeScript.

Recommended, in order:

1. **Migrate insights to one-Markdown-file-per-article** (`content/insights/en/*.md`,
   `zh/*.md`) with YAML frontmatter (title, date, summary, category, image, related
   attorney), loaded at build time (gray-matter + a small loader — works fine with
   `output: "export"`; per AGENTS.md, check `node_modules/next/dist/docs/` before
   writing loader code). Adding an article = adding one text file. Keep `insights.ts`
   types as the loader's output shape.
2. **Write `CONTENT-GUIDE.md`** for Alan: how to add an article via the GitHub web UI
   (no local tooling), how to edit attorney emails/offices, and what auto-deploys when.
   Written for a non-developer.
3. **Give Alan repo access** 🔶 — need his GitHub account (or create one). CI already
   lints + builds on PR, which protects against most content typos.
4. **Optional later:** a browser CMS layer (e.g. Decap CMS) on top of the same repo if
   editing Markdown on GitHub proves too fiddly for him. Don't build it until he's tried
   the simpler path.

---

## E. Domain (from Alan's closing note)

- **cbclawllp.com (test domain, Alan owns it):** set it up as the GitHub Pages custom
  domain — add a `CNAME` file / Pages setting + DNS records at Alan's registrar 🔶
  (need registrar access or send him the exact records). This removes the
  `/cbcounselor` basePath (`GITHUB_PAGES` no longer sets it — verify `next.config.ts`
  behavior and retest all internal links and image srcs per PLAN Session 5).
- **cbcounselor.com (real domain):** Alan lacks back-end/DNS access today. Document the
  eventual cutover (same DNS records, swap the custom domain) so it's a 30-minute task
  once he recovers access. 🔶 Discuss with Alan per his offer.
- Custom domain also improves mainland-China reachability vs raw `*.github.io`
  (PLAN Session 5 note) — retest from a China proxy after cutover.

---

## F. "Anything else" (Alan item 6) — every still-open item from PLAN.md

Sessions 1–4 of `PLAN.md` are done except the two content-blocked items below;
Session 5 is fully open. This section supersedes PLAN.md as the tracking list.

- **SEO/discoverability:** `sitemap.xml`, `robots.txt`, JSON-LD (`LegalService` +
  `Attorney`), verify hreflang between `/` and `/zh`, then submit to Google Search
  Console and Baidu Webmaster (do after the custom-domain move in E, so the indexed
  URLs are final).
- **404 page.**
- **Accessibility audit:** contrast (white/70 on navy is borderline), focus-visible
  states, keyboard nav through the mobile menu, alt text on all images.
- **Performance audit:** Lighthouse on throttled mobile; confirm no runtime third-party
  requests.
- **Insights article bodies** (PLAN Session 4, source-blocked): 28 local article routes
  exist, but the old site publishes only titles/dates/abstracts — full bodies must come
  from the firm 🔶. Fits naturally with section D: once insights are Markdown files,
  Alan can paste bodies in himself.
- **Testimonials v2** (PLAN Session 3): carousel is built; still needs 2–4 more
  testimonials beyond Fan He, ideally one in Chinese 🔶.
- **Client descriptors** ("A NASDAQ-listed EV manufacturer…"), anonymized is fine 🔶.
- **Content cross-check** against live cbcounselor.com before launch — it may have
  changed since the port (roster changed once already).
- Known data gaps: Chinese-locale photos missing for Roberto Luo and Yenting Feng
  (`attorneys.ts`, noted in the credentials reference).
- **Analytics decision** (GFW-tolerant: Umami/Plausible/Baidu Tongji, not GA) 🔶.
- **China reachability test** after the domain move — covered in E.

---

## Suggested sequence

1. **PR 1 (same day):** A1 headline + A2 email corrections + reference-doc sync.
2. **PR 2:** C code prep (address fields, empty) + E cbclawllp.com custom-domain setup.
3. **PR 3:** D1 Markdown insights migration + D2 CONTENT-GUIDE.md; then onboard Alan (D3).
4. **PR 4:** B imagery once source is decided (or placeholder pass).
5. **PR 5:** F launch-readiness items.

## One consolidated question list for Alan

1. Grace Cai — new attorney? Need full profile info if so.
2. Cedrick Sun / Funmi Owolabi emails — confirm cedricksun@ and Funmi@ are still right.
3. ~~Street addresses~~ (4 received 2026-07-15, now live). Remaining: Beijing/Shenzhen
   addresses if they exist, and confirm Seattle + Cancun are still offices.
4. Photos: firm-supplied or licensed stock?
5. How far should the "Chinese companies → foreign companies" repositioning go beyond
   the headline?
6. GitHub account for content editing; registrar access (or willingness to add DNS
   records) for cbclawllp.com.
7. New zh headline translation — who reviews the Chinese?
8. Full bodies for the insight articles (the old site only published abstracts) — even
   a few to start; plus 2–4 more testimonials and anonymized client descriptors.
