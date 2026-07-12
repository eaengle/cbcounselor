# CBC Law Website Redesign — Actionable Implementation Plan

Source checklist: `CBC-website-redesign-action-items.md`

This plan covers the **51 of 69 checklist items that can be completed with the information currently available**. It deliberately excludes the 18 items that require firm-supplied facts, contact details, approved language, proprietary assets, or purchasing access.

Each session is sized for one focused conversation with a capable LLM coding assistant: one coherent area of the site, roughly four to eight checklist items, and a concrete verification gate. Sessions should normally be completed in order because later sessions build on the content model, routes, and components created earlier.

## Customer guidance received

Alan Engle provided the following additional direction:

- The site should communicate that the attorneys attended strong law schools because this matters to Chinese and corporate clients, but schools should not be more prominent than they ordinarily are on a law-firm website.
- The following profile facts are confirmed: Ning Zhang — Georgetown; Charles Cheng — Stanford; Alan Engle — Berkeley; Edwin Wheeler — University of Chicago.
- Attorney profiles should be standardized in structure and presentation. This can be refined after an initial draft, but the first implementation should already use a consistent data-driven format.
- Alan said he plans to obtain new headshots. The standardized-headshot item remains blocked until those files are delivered.
- Alan plans to review the source memo and send a revised draft. Reconcile that draft with this plan when it arrives; do not silently override accepted guidance.
- Alan previously supplied a public WeChat interview URL: `https://mp.weixin.qq.com/s/-DRCnYtP-zMq9LEiBceDAw`. This is a specific interview article, not CBC's WeChat account homepage. It may be offered as optional browser-readable content only when labeled accurately. Do not represent the supplied article/content QR as the official-account homepage QR.

Eric emailed the consolidated request for the remaining information to Alan at `alanengle@rushpost.com` on July 11, 2026.

## Working rules for every session

1. Read `AGENTS.md` and the relevant guide in `node_modules/next/dist/docs/` before changing Next.js code. This project uses Next.js 16.2.10 and its local documentation is controlling.
2. Read this plan, the source checklist, and the files involved in the session before editing.
3. Inspect `git status --short` and preserve unrelated or user-authored changes.
4. Treat the existing firm-published content as the factual ceiling. Do not strengthen, generalize, or quantify a claim unless the evidence is recorded in the repository.
5. Keep English and Chinese routes structurally equivalent whenever the session adds user-facing features. Translate meaning faithfully; do not introduce new claims in translation.
6. Keep blocked fields absent or clearly unpublished. Never use `[X]`, invented metrics, guessed email addresses, fabricated WeChat details, or placeholder case outcomes.
7. Use only firm-owned or clearly licensed imagery. Record the source and license for any new image. Premium stock purchasing remains blocked until purchasing access is available.
8. At the end of each session:
   - Run `npm run lint`.
   - Run `npm run build`.
   - Check the affected English and Chinese routes at mobile and desktop widths.
   - Report the source-checklist item numbers completed, files changed, tests run, and any newly discovered blocker.
9. Do not mark an item complete merely because its component shell exists. The session's definition of done must be satisfied.

## Session 1 — Positioning, information architecture, and navigation

**Goal:** Establish the site hierarchy that every later content and design session will use.

**Source items:** 1, 2, 3, 4, 5

### Steps

1. Audit the current header, homepage section order, practice-area data, industry data, and both locale content files.
2. Define the two co-equal primary practices in the typed content model:
   - IP and business litigation.
   - Corporate and cross-border counsel.
3. Define e-commerce/Amazon seller defense, international arbitration, entertainment/media, and funds/family offices as supporting capabilities.
4. Refactor the homepage practice data so visual prominence follows that hierarchy rather than the current generalist list.
5. Simplify the main navigation. Keep only the destinations necessary for orientation, the urgent route, people, insights, and contact; do not add a mega-menu.
6. Make the bilingual, Chinese-fluent cross-border positioning visible in the header-adjacent experience and section framing without adding unsupported language claims to individual attorneys.
7. Confirm that the mobile navigation exposes the same essential destinations as desktop.

### Definition of done

- The content types explicitly distinguish primary practices from supporting capabilities.
- Litigation and corporate/cross-border counsel are structurally equal.
- The navigation remains compact on desktop and fully usable on mobile.
- Both locales use the same information architecture.
- No existing deep link is silently broken; redirects or retained anchors are used where needed.

## Session 2 — Homepage hero, featured bar, and practice presentation

**Goal:** Implement the approved homepage positioning and primary calls to action while omitting the unverified experience metric.

**Source items:** 6, 8, 10, 11, 12, 14, 17, 18

### Steps

1. Replace the English hero headline with the approved headline from the source checklist.
2. Do **not** publish the approved hero paragraph verbatim yet because it contains the blocked “averaging 20 years experience each” claim. The “top law schools” portion of the positioning is customer-confirmed and may be used in restrained copy, but it must not imply that every roster member attended one of the four specifically identified schools.
3. Add the two approved hero/sub-navigation calls to action:
   - “Facing a Schedule A Lawsuit? Start Here” targeting the future e-commerce route.
   - “Talk to Our Team” targeting the contact path.
4. Replace the generic featured carousel with the three approved featured subjects and their supplied descriptions.
5. Replace the practice-section heading with “Two Practices, One Standard: Serious Counsel for Chinese Enterprises.”
6. Render the two primary practices with equal layout, typography, spacing, and interaction weight.
7. Render supporting capabilities in a visibly secondary row without hiding them from keyboard or mobile users.
8. Ensure the supporting litigation copy includes patent, trademark, copyright, trade-secret, state/federal court, arbitration, and ITC experience.
9. Remove the $66 million result from firm-wide homepage positioning. Preserve it only in Benjamin Solter's profile, using the spelling and profile association already present in the repository.
10. Add equivalent Chinese structure and faithful copy that does not reintroduce the blocked experience claim.

### Definition of done

- The hero, featured bar, and practice section tell one consistent boutique cross-border story.
- Neither practice appears subordinate to the other at desktop or mobile widths.
- Both CTAs resolve to valid destinations or an intentionally staged route added in the same session.
- The $66 million result is absent from homepage-wide credentials and remains confined to the appropriate bio.

## Session 3 — Verifiable credibility, Kangol foundation, and urgent intake

**Goal:** Establish the evidence-backed claims and site-wide pathways needed by the homepage and e-commerce work.

**Source items:** 15, 19, 20, 27, 52, 53, 54, 55

### Steps

1. Create a small claim ledger in the repository or in structured content. For every published result, record its source, exact supported wording, and where it may appear.
2. Verify the two ITC Section 337 lead-counsel matters against the firm-published attorney profiles already ported into `src/content/attorneys.ts`. Ensure duplicate descriptions of the same two matters are not counted as four matters.
3. Verify the eight listed office locations and three-country grouping against the trusted firm-published source retained in the project. If the evidence is not adequate, omit the numeric shorthand and record a new blocker instead of assuming confirmation.
4. Audit verdict amounts and representative results against the corresponding published profiles/content. Narrow any wording that exceeds the source.
5. Locate the authoritative public URL for the Kangol opinion. Prefer an official court or government source; record the URL and access date in the claim ledger.
6. Add the supplied interim citation for the opinion. Do not claim that it is an official reporter citation.
7. Use a short, neutral description limited to the court's publicly verifiable disposition and holding. Do not label this text as the requested attorney-written summary.
8. Mention the Kangol Schedule A result in two appropriate site locations, such as a homepage credibility/insight treatment and the e-commerce page foundation.
9. Replace the generic credibility tiles only with claims that survived the audit. It is acceptable to publish fewer proof points rather than fill space with an unverified metric.
10. Add a persistent site-wide urgent-intake control linking to the e-commerce intake section. Make it accessible, unobtrusive, and responsive.

### Definition of done

- Every live credibility statement has an identified source.
- No average-experience or Schedule A matter-count metric is published.
- The Kangol citation and authoritative opinion link are stored centrally and reusable.
- The neutral Kangol description is clearly distinct from the still-blocked attorney-supplied summary.
- The urgent route is reachable from every rendered site page by keyboard and touch.

## Session 4 — E-Commerce & Amazon Seller Defense page

**Goal:** Build the bilingual urgent-services landing page and intake experience using only approved services and verified results.

**Source items:** 21, 22, 23, 24, 25, 26, 29, 30

### Steps

1. Read the local Next.js routing and static-export documentation before adding the route.
2. Create `/services/ecommerce-amazon-defense/` and the structurally equivalent Chinese route.
3. Add the approved headline exactly in English and a faithful Chinese equivalent.
4. Explain the firm's response capabilities for Schedule A lawsuits, ex parte TROs, and Amazon/PayPal/Alipay fund freezes without promising a particular outcome or response time beyond the approved “respond immediately” language.
5. Cover all five approved service groups:
   - Schedule A/John Doe defense and TRO dissolution.
   - Amazon, Temu, and Walmart Marketplace suspension/reinstatement.
   - Trademark and patent troll defense, including bad-faith IP claims.
   - Amazon, PayPal, Payoneer, and Alipay asset/fund-freeze release.
   - U.S. entity structuring and compliance for high-volume sellers.
6. Add the approved reasons to choose CBC, using the verified firm-level bilingual and WeChat information. Do not infer language fluency for a specific attorney.
7. Build a representative-results section populated only from the Session 3 claim ledger. Use the Kangol result and other directly relevant verified results; omit unsupported amounts, release totals, dismissal counts, and reinstatement timelines.
8. Add the Kangol citation and opinion link from the shared structured content.
9. Add a short intake form labeled “Urgent — Active U.S. Litigation.” Reuse the site's privacy-preserving contact mechanism unless a backend has been explicitly authorized.
10. Include practical fields such as name, email, marketplace/platform, deadline or hearing date, and a short matter description. Do not request privileged documents through an insecure workflow.
11. Ensure the persistent urgent-intake control scrolls or routes directly to this form.

### Definition of done

- English and Chinese pages export successfully at their intended routes.
- All approved service categories are present and no unverified outcome appears.
- The intake experience works without a server-only dependency.
- The page has appropriate metadata, headings, focus order, labels, and mobile layout.

## Session 5 — Team hierarchy and restrained credential design

**Goal:** Align the team directory with the accepted hierarchy without fabricating missing profile data.

**Source items:** 31, 32, 36, 64

### Steps

1. Audit role values and the ordering logic in the people directory.
2. Render partners first, then of counsel, then associates. Preserve additional published categories such as foreign law counsel and alliance partners after the required hierarchy rather than silently deleting them.
3. Remove or avoid any layout that presents only one litigation partner and one corporate partner as the firm's representative team.
4. Keep the directory data-driven so roster changes do not require layout rewrites.
5. Standardize every profile's section order, label treatment, spacing, image dimensions, and handling of missing fields. Use the same underlying structure in both locales.
6. Refine name, title, education, and bar-admission presentation so credentials are visible but secondary to the person's identity and practice.
7. Apply Alan's confirmed school guidance: show law schools at normal profile prominence and do not turn them into oversized homepage badges or promotional tiles.
8. Confirm the following four school associations against the existing profile records while implementing the standardized layout: Ning Zhang — Georgetown; Charles Cheng — Stanford; Alan Engle — Berkeley; Edwin Wheeler — University of Chicago.
9. Do not add missing years of experience, emails, language history, or WeChat details. Do not derive emails from name patterns.
10. Verify the same hierarchy on English and Chinese people pages and confirm each existing profile link resolves.

### Definition of done

- Partners, of counsel, and associates appear in the accepted order.
- The full published roster remains accessible.
- Profiles use a consistent structure and visual hierarchy across both locales.
- Credentials are readable without oversized school or former-firm promotion.
- Missing profile fields stay absent rather than appearing as empty labels or placeholders.

## Session 6 — Chinese parallel experience and verified WeChat touchpoints

**Goal:** Make the Chinese experience structurally complete and make the verified official WeChat account useful throughout the client journey.

**Source items:** 38, 39, 41, 66, 69

### Steps

1. Inventory every English route, section, CTA, metadata field, form label, validation message, and footer/header destination against its Chinese counterpart.
2. Add any missing Chinese route or UI text introduced in Sessions 1–5.
3. Compare existing Chinese copy with the firm's published Chinese source and preserve accepted terminology.
4. Replace any placeholder `#` WeChat link with the verified official-account URL already stored in the repository.
5. Create bilingual CBC-owned browser landing pages at `/wechat/` and `/zh/wechat/`. These pages must render in an ordinary browser without requiring WeChat.
6. Include three clearly distinguished choices on each landing page:
   - **Open in WeChat** — the verified, app-oriented official-account profile endpoint already stored in the site.
   - **Read a Recent Interview on WeChat** — the specific public article at `https://mp.weixin.qq.com/s/-DRCnYtP-zMq9LEiBceDAw`.
   - **Contact CBC Law** — the normal locale-appropriate website contact route.
7. Explain briefly that the official-account profile opens through WeChat. Do not describe the article as the company page or account homepage.
8. Display the official account name and ID as selectable/copyable text.
9. Point ordinary footer, contact, urgent-matter, and appropriate profile-area WeChat links to the CBC-owned landing page rather than directly opening the app.
10. Keep the direct app link available inside the landing page, but do not automatically redirect visitors into WeChat.
11. Label every displayed QR according to what it actually opens. Do not present the supplied interview/content QR as an official-account homepage QR.
12. Do not imply that the official account is an individual's WeChat account and do not invent per-attorney handles.
13. Confirm the Chinese pages use the existing CJK typography treatment and do not inherit unsuitable English tracking or line-height.
14. Search the codebase for placeholder links, untranslated English UI fragments, bracketed placeholders, and stale contact details.

### Definition of done

- Every public English route has a current Chinese counterpart or an intentional, documented reason not to.
- No placeholder WeChat link remains.
- Normal website WeChat links lead to a bilingual CBC-owned landing page that renders in an ordinary browser.
- The landing page's app-opening choice uses the verified official-account profile URL and is labeled as an app link.
- Any linked interview is clearly identified as a specific article rather than CBC's company or WeChat homepage.
- The account name and ID are copyable, and the website contact route remains available without WeChat.
- The Chinese urgent-intake path is complete and usable on mobile.
- The missing official QR asset remains documented as blocked and is not replaced with a fake “official” QR image.

## Session 7 — Photography-led visual system

**Goal:** Replace the SaaS-like visual language with a consistent editorial system using legally usable assets already available or obtainable without purchasing access.

**Source items:** 42, 43, 45, 46, 47, 48, 49, 68

### Steps

1. Inventory every current icon, dotted-map use, decorative graphic, and image slot.
2. Establish a small asset manifest containing filename, intended section, source, license/ownership, alt-text intent, and crop guidance.
3. Select both literal and abstract shipping/commerce imagery from firm-owned or explicitly free/licensed sources. Do not download or publish preview/watermarked stock.
4. Apply relevant imagery to:
   - Homepage hero: port, cargo, Pacific trade, or appropriate skyline imagery.
   - E-commerce page: fulfillment, containers, or product logistics.
   - Entertainment/media: production, licensing, streaming, or screens.
   - Litigation: courthouse or ITC-related imagery paired with commerce.
   - Case studies: matter-relevant product, logistics, or courthouse imagery where a supported asset exists.
5. Remove flat SaaS-style icons and the dotted world-map treatment from public-facing sections once their replacements are ready. Preserve accessible text and semantic structure.
6. Reject generic handshake, laptop/chart, generic-gavel, and obvious template imagery.
7. Standardize the palette on navy, charcoal, white, and the already selected deep-red accent (`#9a2a24` with its existing lighter companion). Do not introduce gold as a second competing accent.
8. Use large image fields, generous white space, restrained overlays, and minimal iconography.
9. Select and implement one serif/sans-serif pairing with a documented type scale. Ensure the fonts are self-hosted or otherwise safe for China reachability, performant, and complete enough for both Latin and Chinese text.
10. Test image cropping, legibility, layout shift, alt text, reduced motion, and responsive behavior.

### Definition of done

- Public pages no longer read visually as a SaaS template.
- Every new bitmap has a documented right to use and meaningful alt treatment.
- The world-map graphic and flat icons are removed from the targeted public sections.
- The color and type systems are consistently applied in both locales.
- Premium-stock purchasing and standardized attorney photography remain separately blocked; this session does not disguise previews or synthetic edits as supplied photography.

## Session 8 — Cleanup, acceptance audit, and handoff

**Goal:** Remove temporary content, validate the completed actionable scope, and produce a precise launch handoff.

**Source items:** 59, 60, 61, 63, 67

### Steps

1. Search all source, content, metadata, and public route output for bracketed placeholders, `TODO`, `TBD`, dummy metrics, placeholder links, and stale generic positioning.
2. Remove placeholders or hide the dependent UI when verified content is unavailable.
3. Compare homepage visual weight for corporate and litigation at desktop, tablet, and phone widths.
4. Confirm patent, trademark, and copyright litigation are visible without presenting the firm primarily through the $66 million trade-secret result.
5. Traverse every generated page and confirm the Schedule A urgent-intake route is easy to reach.
6. Audit all metrics, locations, and outcomes against the Session 3 claim ledger. Remove anything not supported.
7. Run lint and a production static build. Review build output for route, metadata, image, and hydration problems.
8. Perform a keyboard and screen-reader-oriented smoke test of navigation, urgent CTA, filters, forms, locale switching, and profile links.
9. Produce a final checklist report with:
   - All 51 actionable item numbers and completion status.
   - Evidence/source location for factual claims.
   - Routes added or changed.
   - Remaining 18 blocked items and the exact input needed for each.

### Definition of done

- No bracketed or dummy placeholder is present in the production output.
- The five acceptance checks assigned to this session pass.
- `npm run lint` and `npm run build` pass.
- Any incomplete source item is explicitly carried forward rather than optimistically checked off.

## Traceability matrix

| Session | Actionable source items | Count |
|---|---|---:|
| 1. Positioning and architecture | 1, 2, 3, 4, 5 | 5 |
| 2. Homepage presentation | 6, 8, 10, 11, 12, 14, 17, 18 | 8 |
| 3. Credibility, Kangol, urgent intake | 15, 19, 20, 27, 52, 53, 54, 55 | 8 |
| 4. E-commerce defense page | 21, 22, 23, 24, 25, 26, 29, 30 | 8 |
| 5. Team hierarchy | 31, 32, 36, 64 | 4 |
| 6. Chinese and WeChat experience | 38, 39, 41, 66, 69 | 5 |
| 7. Visual system | 42, 43, 45, 46, 47, 48, 49, 68 | 8 |
| 8. Acceptance and cleanup | 59, 60, 61, 63, 67 | 5 |
| **Total** | **51 items** | **51** |

## Blocked items intentionally excluded

These items should be revisited when the stated input is available. Their exclusion is what allows the eight sessions above to proceed without guessing.

| Source item | Missing input or dependency |
|---:|---|
| 7 | Verified scope and calculation for the “averaging 20 years experience each” claim; the supplied paragraph cannot be published unchanged until then. |
| 9 | Attorney-approved short Kangol holding/victory description. The authoritative URL can be obtained under item 55, but that does not replace approved wording. |
| 13 | Definition of “senior partners” and confirmation that half lead each practice; the current roster has five partners. |
| 16 | Verified average-experience scope, Schedule A matter count, and confirmation of every proposed proof point as a combined set. |
| 28 | Attorney-supplied Kangol summary. |
| 33 | CBC email addresses for every profile; 11 of the 23 English roster records currently have `email: null`. |
| 34 | Confirmation of which attorneys have publishable individual WeChat details and the actual details. |
| 35 | The school-positioning approach and four school associations are confirmed, but years of experience and China-specific language/practice history remain missing for applicable attorneys. Education and bar data can be standardized now, but the entire requested marker set cannot be completed. |
| 37 | Alan said he will obtain new headshots. This remains blocked pending delivery of the consistently photographed files; remind him if they are not included with his revised memo/materials. |
| 40 | Official WeChat QR-code asset supplied or explicitly approved by the firm. A home-generated code should not be represented as the official asset. |
| 44 | Access and authority needed to license premium stock imagery within the stated $100 experiment budget. Free/firm-owned images used in Session 7 can later be swapped. |
| 50 | Verified attorney start dates and a decision about whether the average covers all attorneys, litigators, partners, or senior attorneys. |
| 51 | Firm-confirmed number of Schedule A matters handled. |
| 56 | Attorney-written Kangol holding/victory summary. |
| 57 | Four law-school associations are now confirmed, but remaining attorney school/practice-year/bar/language/email/WeChat data is still needed, especially the fields identified above. |
| 58 | The account is identified in the repository, but the official QR asset is still missing. |
| 62 | Completion depends on the attorney-approved homepage Kangol description from items 9/56. |
| 65 | Completion depends on missing CBC emails and credential/contact data from items 33–35 and 57. |

## Recommended handoff prompt for each new session

Use the following structure when starting a later conversation:

> Implement Session N from `CBC-website-redesign-implementation-plan.md`. Read `AGENTS.md`, the relevant local Next.js documentation, the source action-items file, and the current repository state first. Complete only that session's scope, preserve unrelated changes, do not fill any blocked field by inference, run lint and build, and report completed source-item numbers plus remaining blockers.
