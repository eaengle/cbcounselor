# CBC Law — Pre-Publication Fact-Verification Report

**Implements Section 7 of `CBC-website-redesign-action-items.md`.**
Generated from a codebase audit on 2026-07-11.

Section 7 requires that every factual claim on the site be verified before publication.
This report is the verification instrument: it lists each factual claim, its **exact
on-site wording**, its **location in code**, its **current source**, and its
**verification status**. Alan is the source of truth for every row marked *Gated*.

**How to use:** Alan reviews each *Gated* row and either confirms the wording as-is or
supplies a correction. When a row is confirmed, flip its status to **Verified** and check
the corresponding box in Section 7 / Section 8 of the action-items file. Nothing marked
*Gated* or *Discrepancy* should go live until resolved.

---

## A. Approved copy — implemented and verified in code

These items were verified directly against the codebase in this pass. No firm sign-off
is outstanding for the wording itself.

| Claim | On-site wording | Location | Status |
| --- | --- | --- | --- |
| Experience (qualitative, no numeric average) | "Attorneys at the firm have decades of experience handling complex legal matters." | `src/content/en.ts:82` | **Verified** — no numeric average appears anywhere in `src/`. |
| Schedule A volume (no precise count) | "Dozens of Schedule A cases" / "experience includes dozens of Schedule A cases involving cross-border e-commerce defendants." | `src/content/en.ts:85-87`, `zh.ts:87-88` | **Verified** — no precise count published. |
| $66M verdict not a firm-wide credential | Appears once, inside an attorney's representative-matters list; not on the homepage. | `src/content/attorneys.ts:171` | **Verified** for the "not firm-wide" requirement. **See Discrepancy D1 for attribution.** |
| Kangol opinion link | Official Seventh Circuit opinion URL (court's own server). | `src/content/verified-claims.ts:4-5` | **Verified** — real court URL, wired into the e-commerce page and homepage feature. Citation remains the provisional Westlaw cite per action-items §3/§7 (acceptable to publish now). |
| No bracketed placeholders | — | entire `src/` tree | **Verified** — no `[TBD]`, `[insert]`, `[amount]`, `Lorem`, `TKTK`, or `coming soon` markers found. |

---

## B. Claims GATED on Alan's verification

These are published (or draftable) as asserted facts but require the firm to confirm
before going live. Wording is quoted exactly as it renders.

| # | Claim | On-site wording | Location | What Alan must confirm |
| --- | --- | --- | --- | --- |
| B1 | Two ITC Section 337 lead-counsel investigations (firm credibility tile) | "CBC attorneys have served as lead counsel in two ITC Section 337 investigations." | `src/content/en.ts:90-92` | That the firm may claim lead-counsel credit for two Section 337 investigations. Note: the underlying matter is a **single client engagement** (one LED manufacturer, two related investigations), co-counseled — see Discrepancy D2/D3. |
| B2 | Eight offices, three countries | "Eight offices, three countries, one team." + city list: Silicon Valley, Los Angeles, Seattle, Chicago (US); Beijing, Shanghai, Shenzhen (China); Cancun (Mexico). | `src/content/en.ts:162-168` | Each of the eight cities is a real, current CBC office. (All eight assumed confirmed for now per action-items §2/§7.) |
| B3 | Verdict / representative-result amounts | "$66 million jury verdict…"; "award of $7.6 million" (both in Edwin Wheeler's matters). | `src/content/attorneys.ts:171,173` | That each amount and outcome is accurate as stated. |
| B4 | Kangol result description | "…the Seventh Circuit reversed and remanded… Hague Service Convention… requirements apply when the defendant's address is known…" | `src/content/verified-claims.ts:6-9` | Attorney-supplied; already confirmed in action-items §7. Retained here for completeness. |

---

## C. Placeholder / clean-sweep results

- No bracketed placeholders, Lorem ipsum, or "coming soon" text anywhere in `src/`.
- No numeric average-experience claim ("averaging 20 years each" or similar) anywhere.
- No precise Schedule A case count.
- WeChat: no links, QR, or copyable account name/ID surfaced on-site (deferred per §5/§9).
- **The only remaining provisional element is the Kangol *citation*** (Westlaw cite),
  which action-items §3/§7 explicitly permit publishing now; swap to the official
  reporter cite when available. Not a publication blocker.

---

## D. Discrepancies found during audit — need resolution

These are internal inconsistencies or redline/data mismatches surfaced by the audit.
They are **not** yet reflected as changes to user-facing copy, because resolving them
requires a fact only Alan holds.

### D1 — $66M verdict: attribution vs. the redline

- **Redline (action-items §2):** "confine it to **Ben Stolter's** bio."
- **In code:** the $66M LED trade-secret verdict is in **Edwin Wheeler's**
  `representativeMatters` (`attorneys.ts:171`), not in any "Solter" bio.
- **Likely person intended:** **Benjamin "Ben" Solter** (`benjamin-solter`), an
  associate whose practice is e-commerce IP defense and whose `representativeMatters`
  is empty (`attorneys.ts:186-204`). "Stolter" appears to be a misspelling of "Solter."
- **Assessment:** the LED-chip / high-power-lighting detail matches Edwin Wheeler's
  documented LED and ITC career, not Solter's e-commerce practice, so the redline most
  likely misattributed the verdict. **Do not move it without confirmation.**
- **Alan to confirm:** Which attorney won the $66M verdict, and in whose profile should
  it appear? (Leave in Wheeler's matters, or move to Solter's bio?)

### D2 — ITC source note names the wrong attorneys

- `verified-claims.ts` (before this pass) sourced the ITC claim to
  "Charles Cheng and Edwin Wheeler." Charles Cheng's profile is corporate governance /
  venture capital / cross-border — **no ITC or Section 337 matters** (`attorneys.ts:49-78`).
- The two-investigation matter actually appears under **Wesley Johnson**
  (`attorneys.ts:102`) and **Edwin Wheeler** (`attorneys.ts:170`).
- **Action taken this pass:** the source note in `verified-claims.ts` was corrected to
  reference Wesley Johnson and Edwin Wheeler and marked *pending firm confirmation*.
- **Alan to confirm:** which CBC attorneys are properly credited as lead counsel on the
  two Section 337 investigations.

### D3 — "Two ITC investigations" rests on one engagement

- Both Wesley Johnson and Edwin Wheeler describe the **same** two Section 337
  investigations for the **same** major Chinese LED manufacturer (dismissal of the first
  before trial; no-violation decision in the second).
- The firm-level tile "two ITC Section 337 investigations" is therefore supported, but by
  a single co-counseled client engagement rather than two independent client matters.
- **Alan to confirm:** whether the framing "two ITC Section 337 investigations as lead
  counsel" is accurate given it is one engagement comprising two related investigations.

---

## Sign-off

| Item | Confirmed by | Date | Notes |
| --- | --- | --- | --- |
| B1 — Two ITC investigations | | | |
| B2 — Eight offices, three countries | | | |
| B3 — Verdict/result amounts | | | |
| D1 — $66M verdict attribution | | | |
| D2 — ITC attorney credit | | | |
| D3 — ITC "two investigations" framing | | | |
