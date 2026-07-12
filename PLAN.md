# Multi-Session Roadmap

Working plan for taking cbcounselor.com from homepage v1 to launch-ready.
Companion to `DESIGN-NOTES.md` (design rationale lives there; execution order lives here).
Check items off as sessions complete.

**Content source:** this project is an upgrade of the live https://cbcounselor.com/, whose
content is accurate and trustworthy. Most "missing content" can be ported from there
rather than gathered fresh: 21 attorney profiles at `/people/[first]-[last]/` (photos,
bar admissions, education, representative matters, individual emails), dated insight
articles, additional case results, the real contact email (`info@cbcounselor.com` —
**our current placeholder `contact@cbcounselor.com` is wrong**), LinkedIn/WeChat links,
and an existing Chinese version whose copy the firm already stands behind (largely
removing the "commission a legal translation" dependency).

---

## Session 1 — Fix what's broken (small, high-value)

Bugs and gaps found in review on 2026-07-11. All are self-contained; no new content needed.

- [x] **Fix the stat-bar count-up (real bug, visible on the live site).**
  In `src/components/CountUp.tsx`, `match` is recomputed on every render and is in the
  `useEffect` dependency array. Every `setDisplay` re-render creates a new `match` array,
  which stops and restarts the animation from 0 — so the counters get stuck near their
  starting values ("$3M+", "0", "0", "2/7" instead of "$66M+", "8", "3", "24/7").
  Fix: parse `value` inside the effect (or `useMemo` it) and depend on `[isInView, value]`.
- [x] **Add a mobile nav menu.** `Header.tsx` hides all nav links below `lg` (1024px) with
  no hamburger fallback — phone visitors get only the logo, language toggle, and Contact
  button. Add a simple slide-down/sheet menu. (Chinese clients skew heavily mobile/WeChat
  browser, so this matters more than usual.)
- [x] **Set `lang` correctly per locale.** `layout.tsx` hardcodes `lang="en"`; `/zh` should
  be `lang="zh"`. Cleanest: restructure to an `app/[locale]` segment with
  `generateStaticParams` (works with `output: "export"`), root layout reads the param.
  Also add `hreflang` alternate links between `/` and `/zh` while in there (SEO for both
  Google and Baidu).
  *Done differently: `app/[locale]` would have moved the English homepage from `/` to
  `/en` under static export, so instead there are two root layouts via route groups —
  `app/(en)/layout.tsx` and `app/(zh)/layout.tsx` (a pattern the Next docs endorse) —
  sharing `app/base-layout.tsx`. URLs unchanged; `lang`, `hreflang`, and per-locale
  canonical all render correctly.*
- [x] **Honor `prefers-reduced-motion`.** Wrap the page in framer-motion's
  `<MotionConfig reducedMotion="user">` so reveals/count-ups degrade gracefully.
- [x] **Correct the contact email** in `src/content/en.ts` and `zh.ts`:
  `contact@cbcounselor.com` → `info@cbcounselor.com` (verified against the live site).
- [x] **Housekeeping:** replace the boilerplate `README.md` with a real one (what the site
  is, dev commands, deploy notes, pointer to DESIGN-NOTES/PLAN); delete unused
  `public/*.svg` starter icons; add `npm run lint` + `npm run build` as a PR check in CI.

**Done when:** stat bar counts up to correct values on `/` and `/zh`, site is navigable on a
375px viewport, `document.documentElement.lang` is right on both routes, build passes.

---

## Session 2 — Chinese-first polish (the #1 differentiator)

From DESIGN-NOTES priority pick #3. Mostly code; one external dependency flagged below.

- [x] **Chinese typography pass.** Add a proper zh font stack (system-first:
  `"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif` — avoids shipping a
  multi-MB webfont; optionally layer a subsetted Noto Sans SC via `next/font` later).
  When locale is zh: slightly reduced letter-spacing, larger line-height on body text,
  no tracking on CJK headlines (the `tracking-[0.2em]` eyebrow looks wrong in Chinese).
- [x] **Chinese watermark characters as section design elements** (e.g. 跨境 behind the
  hero/cases headline in a light weight, low opacity). One or two sections, not every one.
- [x] **WeChat block in footer + contact section:** QR code placeholder image, WeChat ID
  text, and a "Consultations available in Mandarin" line (both locales).
- [x] **Per-locale metadata polish:** OpenGraph tags, zh-specific description, keywords
  Baidu cares about.
- [x] **Replace the machine-assisted `src/content/zh.ts` with the live site's Chinese
  copy** wherever sections correspond — the firm already publishes and stands behind that
  text. Only genuinely new copy (sections that don't exist on the old site) needs
  🔶 review by a native speaker, a far smaller ask than translating the whole site.
- [ ] **Pull the real WeChat QR / WeChat ID and LinkedIn URL from the live site's footer**
  instead of using placeholders.
  *Blocked by the source site as of 2026-07-11: its production footer renders both
  LinkedIn and WeChat as literal `href="#"` links, and its public homepage payload and
  JavaScript bundles contain no QR image, WeChat ID, or LinkedIn URL. The rebuild uses
  an explicitly labeled QR placeholder and directs visitors to the verified firm email
  until the firm supplies the official social details.*

**Done when:** `/zh` looks designed-for-Chinese rather than translated, its copy matches
the live site's published Chinese, and the WeChat/LinkedIn presence is real.

---

## Session 3 — Real content & trust signals (port from the live site)

Most content now comes from https://cbcounselor.com/ instead of fresh gathering.
Start the session by pulling content into the typed content files:

- [ ] **Port the attorney roster** from `/people` and the individual
  `/people/[first]-[last]/` bio pages: 21 attorneys across Partners (5), Of Counsel (8),
  Associates (3), Foreign Law Counsel (4), Alliance Partners (2) — names, titles, bar
  admissions, education, practice focus, representative matters, individual emails.
  Download headshots into `public/` (firm-owned imagery). Extend `types.ts` with a real
  `Attorney` type replacing the placeholder `TeamRole`.
- [ ] **Port the fuller case list** — the live site also has an ICC arbitration award for
  a U.S. infrastructure manufacturer, Shanghai Automotive Air-Conditioning
  Factory / Delphi cross-border M&A, and a medical-device patent settlement. Gives the
  Session 4 filterable case wall enough entries to be worth filtering.
- [ ] **Port insight article metadata** (titles + publication dates, e.g. Schedule A
  article Jan 20 2025). Link cards to the live articles for now; porting full article
  bodies into `/insights/[slug]` pages can wait for Session 4.
- [ ] **Grab the logo/brand assets and favicon source** from the live site.

**Attorney prominence (decided by Alan Engle, 2026-07-11):**

- **Homepage / top billing:** Ning Zhang, Charles Cheng, Alan Engle.
- **Second tier (featured, but on the roster page or a second row):** Wesley Johnson,
  Edwin Wheeler, Jessie, Marylin (confirm last names from the live `/people` page —
  some of these four may change firms, so keep them easy to remove: data-driven cards,
  no hardcoded layout assumptions).
- **Remaining of-counsel are secondary** — full-roster page only, no homepage billing.
- Before porting, re-check the live `/people` page for roster changes.

Remaining 🔶 items only the user can supply:

- 🔶 2–4 more testimonials beyond Fan He (ideally at least one in Chinese)
- 🔶 Client descriptors ("A NASDAQ-listed EV manufacturer…") — anonymized is fine

Build work once content is in:

- [ ] **Homepage team scope (per the prominence decision above):** the top three get
  homepage cards; the full roster lives on a `/people` page with `/people/[slug]` bio
  pages (static export handles these fine). This is the moment the site graduates from
  one-pager to multi-page — align nav anchors accordingly.
- [ ] **Team section v2:** real attorney cards with photos, language badges, hover/flip
  reveal of bar admissions + notable result.
- [ ] **Testimonials v2:** rotating carousel, Chinese quotes shown with translation.
- [ ] **Client descriptor strip** near the hero.
- [ ] **Real favicon + logo,** OG share image.
- [ ] **Contact path:** on a static host there's no backend — wire the CTA to a form
  service (Formspree/Web3Forms) or keep mailto with `info@cbcounselor.com`. Note: pick a
  form service reachable from mainland China.

**Done when:** no placeholder text remains, real attorneys are live, and the team/bio
information matches the live site.

---

## Session 4 — Interaction & depth (the "pop")

Pure enhancement — safe to reorder or trim. From DESIGN-NOTES:

- [ ] **Filterable case wall:** expand `featuredCases` data with practice-area/industry
  tags; client-side filter chips. Case entries ported from the live site in Session 3.
- [ ] **Offices world map:** SVG Pacific-centered map, office dots with soft pulse, arced
  connection lines drawn on scroll. Replaces the current text list (keep the list as the
  accessible fallback / mobile view).
- [ ] **Hero ambient motion:** slow (~20s loop) skyline blend or animated line-art arcs.
  Respect reduced-motion from Session 1.
- [ ] **Insights v2:** typographic cover cards with real publication dates; port full
  article bodies from the live site into `/insights/[slug]` static pages (MDX), replacing
  the interim links to the old site.
- [ ] **Duotone/gradient imagery treatment** once real photos exist (depends on Session 3
  assets).

**Done when:** the three "if only three" DESIGN-NOTES picks are all ✅ and the case wall
filters work.

---

## Session 5 — Launch readiness

- [ ] **SEO/discoverability:** `sitemap.xml` + `robots.txt` (Next static export supports
  both), JSON-LD structured data (`LegalService` + `Attorney`), verify hreflang, submit to
  Google Search Console and Baidu Webmaster.
- [ ] **Accessibility audit:** color contrast (white/70 on navy is borderline — check),
  focus-visible states on all interactive elements, keyboard nav through mobile menu,
  alt text on all images.
- [ ] **Performance audit:** Lighthouse on throttled mobile; font subsetting if Noto Sans
  SC was added; confirm no runtime third-party requests (next/font already self-hosts —
  the Google Fonts GFW concern in DESIGN-NOTES applies to runtime CDN loads, which we
  don't have).
- [ ] **China reachability test:** GitHub Pages is unreliable from the mainland. Test via a
  China-region proxy/service (e.g. a Chinafirewall-test tool). Decide hosting:
  - Custom domain + Cloudflare/Vercel — better than raw GH Pages, no ICP filing, still
    imperfect from the mainland.
  - Mainland CDN (Alibaba/Tencent) — best performance but requires an ICP filing
    (needs a Chinese business entity); Hong Kong CDN nodes are the common middle ground.
  🔶 Decision + domain purchase is yours; code changes are minimal either way.
- [ ] **Analytics:** pick something GFW-tolerant (self-hosted Umami/Plausible or Baidu
  Tongji for zh), not Google Analytics.
- [ ] **Pre-launch checklist:** 404 page, all links resolve under the `/cbcounselor`
  basePath AND under a custom domain (basePath goes away — retest image srcs), zh copy
  ported/reviewed per Session 2, content cross-checked once more against the live site
  (it may have been updated since this plan was written).

---

## Standing notes

- 🔶 = needs something only the user can provide (content, decisions, purchases).
- Each session: run `npm run lint` and `npm run build` before pushing; pushes to `main`
  auto-deploy to GitHub Pages.
- Keep `DESIGN-NOTES.md` checkboxes in sync as items land.
