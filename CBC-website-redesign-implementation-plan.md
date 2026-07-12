# CBC Law Website Redesign — Actionable Implementation Plan

Source checklist: `CBC-website-redesign-action-items.md`

This plan covers the **67 of 70 checklist items that can be completed with the information currently available**. It deliberately excludes the 3 items that still require firm-supplied assets (the official WeChat QR and new headshots). *Originally 60 of 69; Alan's July 11, 2026 follow-up unblocked items 33, 34, 35, 44, 57, and 65 and added item 70 (office addresses).*

Each session is sized for one focused conversation with a capable LLM coding assistant: one coherent area of the site and a concrete verification gate. Sessions should normally be completed in order because later sessions build on the content model, routes, and components created earlier.

## Customer guidance received

Alan Engle provided the following additional direction:

- The site should communicate that the attorneys attended strong law schools because this matters to Chinese and corporate clients, but schools should not be more prominent than they ordinarily are on a law-firm website.
- The following profile facts are confirmed: Ning Zhang — Georgetown; Charles Cheng — Stanford; Alan Engle — Berkeley; Edwin Wheeler — University of Chicago.
- Attorney profiles should be standardized in structure and presentation. This can be refined after an initial draft, but the first implementation should already use a consistent data-driven format.
- Alan said he plans to obtain new headshots. The standardized-headshot item remains blocked until those files are delivered.
- Alan plans to review the source memo and send a revised draft. Reconcile that draft with this plan when it arrives; do not silently override accepted guidance.
- Alan previously supplied a public WeChat interview URL: `https://mp.weixin.qq.com/s/-DRCnYtP-zMq9LEiBceDAw`. This is a specific interview article, not CBC's WeChat account homepage. It may be offered as optional browser-readable content only when labeled accurately. Do not represent the supplied article/content QR as the official-account homepage QR.
- Replace the proposed average-experience metric with: **“Attorneys at the firm have decades of experience handling complex legal matters.”** Alan confirmed that the average across all attorneys is more than 20 years, but does not consider an average-years claim typical firm-website copy. Do not publish the numeric average.
- The approved public description of the firm's Schedule A volume is **“dozens of Schedule A cases.”** Do not convert “dozens” into a more precise number.
- Do not distinguish “senior partners,” identify Alan as the litigation lead, or identify Ning as the corporate/cross-border lead. Use inclusive firm-level language such as: **“Our attorneys have substantial experience across a range of corporate work, litigation, or both.”**
- Use a conventional profile order: name, title, admissions, education, and contact. Alan supplied his own profile as the format example, including California and U.S. Patent and Trademark Office admissions; UC Berkeley School of Law, J.D.; University of Pittsburgh PhD studies; University of California, San Diego, B.S. and B.A.; and `aengle@cbcounselor.com`. Treat these as Alan-specific facts, not defaults for other attorneys.
- Alan supplied an attorney-written Kangol description. Preserve its substance but include the qualification in his accompanying note: the Seventh Circuit reversed the default judgment and remanded because Hague Service Convention requirements apply when the defendant's address is known. Do not characterize the remand as an unqualified or complete victory. The approved significance is that the decision affects Schedule A e-commerce litigation in which Chinese defendants may have accounts seized without lawful service.
- Alan also supplied Eric Goldman's May 2026 blog discussion as background context: `https://blog.ericgoldman.org/archives/2026/05/seventh-circuit-limits-email-service-to-chinese-sad-scheme-defendants-kangol-v-hangzhou-silk.htm`. Treat it as a secondary commentary source, not as the authoritative opinion URL required by source item 55.
- Alan indicated that the rest of his answers would follow. His follow-up reply (recorded below) resolved most of the outstanding profile and asset questions.

Eric emailed the consolidated request for the remaining information to Alan at `alanengle@rushpost.com` on July 11, 2026.

### Alan's follow-up answers (received July 11, 2026)

- **Site purpose:** Almost no one uses the site to contact or hire the firm; it functions mainly as a **credibility** reference (e.g., opposing counsel vetting the firm's and attorneys' backgrounds). Design and copy should favor credibility and clear firm/attorney information over lead capture. The accepted urgent-intake redlines still stand.
- **Office addresses:** The site should list CBC's office addresses and apparently does not currently. Add them (contact area/footer), publishing only firm-confirmed addresses. Tracked as source item 70 (Section 10 of the action items).
- **Attorney profile fields — omit, do not collect:**
  - Years of experience → do not list ("generally not listed on firm sites").
  - Languages spoken → do not list ("it's complicated").
  - China-specific practice history → do not list.
  - Individual WeChat → do not list ("we don't for now"). WeChat stays firm-level only.
  - Bar admissions and law school → keep. **Already present** in `src/content/attorneys.ts` for all 23 attorneys in both locales; no gathering needed. Consolidated in `CBC-attorney-credentials-reference.md` (verified 2026-07-11).
- **Attorneys with no CBC email (Conrad Everhard, Leonard Nuara, Chris Klug, Daniel Yuan, Yi Fan, Gong Chen, Roberto Luo, Yenting Feng, Leo Zheng, Ziqi Yu, Yiyang Huang Daciuk):** They generally do not have a CBC email. **Remove the contact entirely** for any attorney with no associated email rather than guessing one.
- **WeChat account:** Confirmed usable for urgent inquiries; ~95% of inquiries route through Ning Zhang or Charles Cheng. The official **QR code remains unavailable** — Ning does not have it and may not yet have access to generate one. Do not substitute a home-generated QR. Items 40 and 58 stay blocked.
- **Headshots:** Still ~1 month out; Alan or a future admin will organize consistent headshots. Item 37 stays blocked.
- **Photography (item 44) — unblocked:** Alan approved buying stock images and supplied a payment method out-of-band. Either purchase directly or start with properly licensed free images and swap later — he is fine with either. **Do not store the payment-card details in any repository file.**
- **Redlined memo:** Alan re-sent the redlined draft. Its tracked changes are consistent with the accepted action items; the only reconciliation is that this follow-up supersedes the redline's "probably wechat links" note on profiles — individual WeChat is now omitted.

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

**Goal:** Implement the approved homepage positioning and primary calls to action using the approved qualitative experience language.

**Source items:** 6, 7, 8, 10, 11, 12, 13, 14, 17, 18

### Steps

1. Replace the English hero headline with the approved headline from the source checklist.
2. Revise the proposed hero paragraph to remove “averaging 20 years experience each.” Use the approved qualitative statement, “Attorneys at the firm have decades of experience handling complex legal matters,” where it reads naturally. The “top law schools” portion of the positioning is customer-confirmed and may be used in restrained copy, but it must not imply that every roster member attended one of the four specifically identified schools.
3. Add the two approved hero/sub-navigation calls to action:
   - “Facing a Schedule A Lawsuit? Start Here” targeting the future e-commerce route.
   - “Talk to Our Team” targeting the contact path.
4. Replace the generic featured carousel with the three approved featured subjects and their supplied descriptions.
5. Replace the practice-section heading with “Two Practices, One Standard: Serious Counsel for Chinese Enterprises.”
6. Replace the proposed “half of the senior partners” claim with inclusive firm-level wording: “Our attorneys have substantial experience across a range of corporate work, litigation, or both.” Do not name practice leaders or distinguish a senior-partner subset.
7. Render the two primary practices with equal layout, typography, spacing, and interaction weight.
8. Render supporting capabilities in a visibly secondary row without hiding them from keyboard or mobile users.
9. Ensure the supporting litigation copy includes patent, trademark, copyright, trade-secret, state/federal court, arbitration, and ITC experience.
10. Remove the $66 million result from firm-wide homepage positioning. Preserve it only in Benjamin Solter's profile, using the spelling and profile association already present in the repository.
11. Add equivalent Chinese structure and faithful copy using qualitative experience and practice language rather than the numeric average or a leadership split.

### Definition of done

- The hero, featured bar, and practice section tell one consistent boutique cross-border story.
- Neither practice appears subordinate to the other at desktop or mobile widths.
- Both CTAs resolve to valid destinations or an intentionally staged route added in the same session.
- The $66 million result is absent from homepage-wide credentials and remains confined to the appropriate bio.

## Session 3 — Verifiable credibility, Kangol foundation, and urgent intake

**Goal:** Establish the evidence-backed claims and site-wide pathways needed by the homepage and e-commerce work.

**Source items:** 9, 15, 16, 19, 20, 27, 50, 51, 52, 53, 54, 55, 56

### Steps

1. Create a small claim ledger in the repository or in structured content. For every published result, record its source, exact supported wording, and where it may appear.
2. Verify the two ITC Section 337 lead-counsel matters against the firm-published attorney profiles already ported into `src/content/attorneys.ts`. Ensure duplicate descriptions of the same two matters are not counted as four matters.
3. Verify the eight listed office locations and three-country grouping against the trusted firm-published source retained in the project. If the evidence is not adequate, omit the numeric shorthand and record a new blocker instead of assuming confirmation.
4. Audit verdict amounts and representative results against the corresponding published profiles/content. Narrow any wording that exceeds the source.
5. Locate the authoritative public URL for the Kangol opinion. Prefer an official court or government source; record the URL and access date in the claim ledger.
6. Add the supplied interim citation for the opinion. Do not claim that it is an official reporter citation.
7. Use Alan's supplied Kangol description with his stated qualification: the Seventh Circuit reversed the default judgment and remanded, and Hague Service Convention requirements apply when a defendant's address is known. Explain the significance for Schedule A defendants without describing the remand as a complete victory.
8. Mention the Kangol Schedule A result in two appropriate site locations, such as a homepage credibility/insight treatment and the e-commerce page foundation.
9. Replace the generic credibility tiles only with claims that survived the audit. The approved qualitative proof points now include “Attorneys at the firm have decades of experience handling complex legal matters” and “dozens of Schedule A cases.” Do not publish a numeric average or infer a precise case count from “dozens.”
10. Add a persistent site-wide urgent-intake control linking to the e-commerce intake section. Make it accessible, unobtrusive, and responsive.

### Definition of done

- Every live credibility statement has an identified source.
- No numeric average-experience claim or more precise Schedule A case count than “dozens” is published.
- The Kangol citation and authoritative opinion link are stored centrally and reusable.
- The Kangol description reflects both Alan's supplied summary and his remand/address-known qualification.
- The urgent route is reachable from every rendered site page by keyboard and touch.

## Session 4 — E-Commerce & Amazon Seller Defense page

**Goal:** Build the bilingual urgent-services landing page and intake experience using only approved services and verified results.

**Source items:** 21, 22, 23, 24, 25, 26, 28, 29, 30

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
7. Build a representative-results section populated only from the Session 3 claim ledger. Use the qualified attorney-supplied Kangol description and other directly relevant verified results; omit unsupported amounts, release totals, dismissal counts, and reinstatement timelines.
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

**Source items:** 31, 32, 33, 34, 35, 36, 57, 64, 65, 70 *(33/34/35/57/65 became actionable once Alan directed the disputed fields be omitted and the missing-email contacts removed; 70 is the new office-address item.)*

### Steps

1. Audit role values and the ordering logic in the people directory.
2. Render partners first, then of counsel, then associates. Preserve additional published categories such as foreign law counsel and alliance partners after the required hierarchy rather than silently deleting them.
3. Remove or avoid any layout that presents only one litigation partner and one corporate partner as the firm's representative team.
4. Keep the directory data-driven so roster changes do not require layout rewrites.
5. Standardize every profile's section order, label treatment, spacing, image dimensions, and handling of missing fields. Use the same underlying structure in both locales.
6. Refine name, title, education, and bar-admission presentation so credentials are visible but secondary to the person's identity and practice.
7. Use the conventional field order Alan supplied: name, title, admissions, education, and contact. Omit any section with no verified data rather than changing the order or displaying an empty label.
8. Apply Alan's confirmed school guidance: show law schools at normal profile prominence and do not turn them into oversized homepage badges or promotional tiles.
9. Confirm the following four school associations against the existing profile records while implementing the standardized layout: Ning Zhang — Georgetown; Charles Cheng — Stanford; Alan Engle — Berkeley; Edwin Wheeler — University of Chicago. (All four, and the full school/bar set for the other 19 attorneys, are already present in `attorneys.ts` and consolidated in `CBC-attorney-credentials-reference.md`.)
10. Confirm Alan's supplied profile facts against the existing record and add or correct them where needed: California and U.S. Patent and Trademark Office admissions; UC Berkeley School of Law, J.D.; University of Pittsburgh PhD studies; University of California, San Diego, B.S. and B.A.; and `aengle@cbcounselor.com`.
11. Omit per-attorney years of experience, languages, China practice history, and individual WeChat by decision — Alan directed these not be listed, so their absence is intentional, not a placeholder. Do not derive emails from name patterns.
12. Show a `cbcounselor.com` email only where the record already has one. For the 11 attorneys with `email: null` (Everhard, Nuara, Klug, Yuan, Yi Fan, Gong Chen, Luo, Feng, Zheng, Yu, Huang Daciuk), remove the contact block entirely rather than rendering an empty or guessed contact.
13. Add CBC's office addresses to the contact area/footer if the firm-confirmed addresses are available in the repository; otherwise carry item 70 forward as pending firm confirmation. Do not invent addresses.
14. Verify the same hierarchy on English and Chinese people pages and confirm each existing profile link resolves. Reconcile the two locale photo gaps found on 2026-07-11: the **Chinese** records for Roberto Luo and Yenting Feng have empty `photo.src` (`/people/`) while the English records have real images — point both at the existing English asset.
15. Bar admissions and law schools require no collection — they are already in `attorneys.ts` for all 23 attorneys (see `CBC-attorney-credentials-reference.md`). This session applies them to the standardized layout; it does not gather them.

### Definition of done

- Partners, of counsel, and associates appear in the accepted order.
- The full published roster remains accessible.
- Profiles use a consistent structure and visual hierarchy across both locales.
- Credentials are readable without oversized school or former-firm promotion.
- Profiles show school and bar admissions only; years-of-experience, languages, China history, and individual WeChat are intentionally absent.
- The 11 emailless attorneys show no contact block; no email is guessed or derived.
- Office addresses are published if firm-confirmed, or item 70 is carried forward as pending.

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
3. Select both literal and abstract shipping/commerce imagery from firm-owned or explicitly free/licensed sources. Do not download or publish preview/watermarked stock. Purchasing within the $100 experiment budget is now approved (Alan supplied a payment method out-of-band); either buy properly licensed stock or start with free/licensed images and swap later. Never write the payment-card details into any repository or planning file.
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
- Premium-stock purchasing is now approved within the $100 budget (payment method supplied out-of-band, never stored in-repo); standardized attorney headshots remain separately blocked pending Alan's delivery. This session does not disguise previews or synthetic edits as supplied photography.

## Session 8 — Cleanup, acceptance audit, and handoff

**Goal:** Remove temporary content, validate the completed actionable scope, and produce a precise launch handoff.

**Source items:** 59, 60, 61, 62, 63, 67

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
   - All 67 actionable item numbers and completion status.
   - Evidence/source location for factual claims.
   - Routes added or changed.
   - The 3 remaining blocked items (37 headshots, 40/58 official WeChat QR) and the exact input needed for each.

### Definition of done

- No bracketed or dummy placeholder is present in the production output.
- The five acceptance checks assigned to this session pass.
- `npm run lint` and `npm run build` pass.
- Any incomplete source item is explicitly carried forward rather than optimistically checked off.

## Traceability matrix

| Session | Actionable source items | Count |
|---|---|---:|
| 1. Positioning and architecture | 1, 2, 3, 4, 5 | 5 |
| 2. Homepage presentation | 6, 7, 8, 10, 11, 12, 13, 14, 17, 18 | 10 |
| 3. Credibility, Kangol, urgent intake | 9, 15, 16, 19, 20, 27, 50, 51, 52, 53, 54, 55, 56 | 13 |
| 4. E-commerce defense page | 21, 22, 23, 24, 25, 26, 28, 29, 30 | 9 |
| 5. Team hierarchy | 31, 32, 33, 34, 35, 36, 57, 64, 65, 70 | 10 |
| 6. Chinese and WeChat experience | 38, 39, 41, 66, 69 | 5 |
| 7. Visual system | 42, 43, 44, 45, 46, 47, 48, 49, 68 | 9 |
| 8. Acceptance and cleanup | 59, 60, 61, 62, 63, 67 | 6 |
| **Total** | **67 items** | **67** |

## Blocked items intentionally excluded

These items should be revisited when the stated input is available. Their exclusion is what allows the eight sessions above to proceed without guessing.

| Source item | Missing input or dependency |
|---:|---|
| 37 | Alan will obtain new headshots (~1 month out). Blocked pending delivery of the consistently photographed files. |
| 40 | Official WeChat QR-code asset. Ning does not have it and may not yet have access to generate one. A home-generated code must not be represented as the official asset. |
| 58 | The account is identified in the repository, but the official QR asset is still missing (same blocker as item 40). |

**Resolved by Alan's July 11, 2026 follow-up (moved from blocked to actionable — handled in Session 5 or 7):**

| Source item | Resolution |
|---:|---|
| 33 | Show the CBC email where a record already has one; for the 11 emailless attorneys, remove the contact block entirely. No email is guessed. |
| 34 | Individual WeChat is not published ("we don't for now"); WeChat stays firm-level. Nothing to collect. |
| 35 | The marker set is reduced by decision: publish school and bar admissions only; omit years of experience, languages, and China practice history. School/bar data is confirmed present for all 23 profiles (`CBC-attorney-credentials-reference.md`). |
| 44 | Premium-stock purchasing approved within the $100 budget; payment method supplied out-of-band (never stored in-repo). |
| 57 | Only school and bar admissions are needed, and both are already in the repo for all 23 attorneys (verified 2026-07-11); all other per-attorney fields are intentionally omitted. No open profile inputs remain. |
| 65 | Now completable once 33/34/35/57 are applied in Session 5. |
| 70 (new) | Add firm-confirmed office addresses (Section 10). Actionable if the firm's addresses are in the repository; otherwise carried forward pending confirmation. |

## Recommended handoff prompt for each new session

Use the following structure when starting a later conversation:

> Implement Session N from `CBC-website-redesign-implementation-plan.md`. Read `AGENTS.md`, the relevant local Next.js documentation, the source action-items file, and the current repository state first. Complete only that session's scope, preserve unrelated changes, do not fill any blocked field by inference, run lint and build, and report completed source-item numbers plus remaining blockers.
