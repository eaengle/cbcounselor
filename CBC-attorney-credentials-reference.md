# CBC Attorney Credentials — Bar Admissions & Law Schools

Source: `src/content/attorneys.ts` (firm-published roster, already ported into the repo). Verified 2026-07-11. All 23 profiles carry both bar admissions and a law school in each locale, so the school/bar portion of source items 35 and 57 needs **no external gathering** — it is already publishable data.

Per Alan's July 11, 2026 direction, profiles publish **school + bar admissions only**; years of experience, languages, China practice history, and individual WeChat are intentionally omitted. Attorneys with `email: null` (the 11 marked below) get **no contact block** rather than a guessed address.

| # | Attorney | Role | Law school (primary J.D./LL.M.) | Bar admissions | CBC email |
|---:|---|---|---|---|---|
| 1 | Ning Zhang | Founding Partner | J.D., Georgetown (cum laude) | California, Georgia | ✅ ning.zhang@ |
| 2 | Charles Cheng | Managing Partner | LL.M., Stanford (PhD/LL.M./LL.B., Wuhan) | California | ✅ charles.cheng@ |
| 3 | Wesley Johnson | Partner | J.D., Chicago-Kent College of Law | Illinois | ✅ wesley.johnson@ |
| 4 | Alan Engle | Partner | J.D., UC Berkeley | California, U.S. Patent and Trademark Office | ✅ alan.engle@ |
| 5 | Edwin Wheeler | Partner | J.D., University of Chicago | California | ✅ edwin.wheeler@ |
| 6 | Benjamin Solter | Associate | J.D., Santa Clara University | California, Illinois | ✅ benjamin.solter@ |
| 7 | Conrad Everhard | Alliance Partner | J.D., Seton Hall (cum laude) | New York | ❌ none → omit contact |
| 8 | Leonard Nuara | Alliance Partner | J.D., Seton Hall | New York | ❌ none → omit contact |
| 9 | Marilynn Schuyler | Of Counsel | J.D., Georgetown University Law Center | California, U.S. Supreme Court | ✅ Schuyler@ |
| 10 | Ian Yang | Of Counsel | LL.M., Temple; LL.M., Glasgow; LL.B., CUPL | New York, PRC | ✅ ian.yang@ |
| 11 | Chris Klug | Of Counsel | LL.M., Georgetown; J.D., Michigan State | Washington D.C., New York, Illinois, Virginia, Michigan | ❌ none → omit contact |
| 12 | Daniel Yuan | Foreign Law Counsel | J.D., University of Arizona | PRC | ❌ none → omit contact |
| 13 | Jessie Yang | Associate | J.D., UC Irvine; LL.M., Northwestern | California, PRC | ✅ Jessie.yang@ |
| 14 | Yi Fan | Of Counsel | J.D., University of Arizona | Minnesota; passed the Chinese National Judicial Examination | ❌ none → omit contact |
| 15 | Cedrick Sun | Foreign Law Counsel | LL.M., UW–Madison; Master of Law, SJTU | PRC | ✅ cedricksun@ |
| 16 | Gong Chen | Of Counsel | J.D., University of Iowa | California | ❌ none → omit contact |
| 17 | Roberto Luo | Foreign Law Counsel | M.S., Tongji; B.S., Nanjing (China-licensed patent attorney; no J.D.) | New York, PRC | ❌ none → omit contact |
| 18 | Yenting Feng | Of Counsel | LL.M., Stanford; LL.B., National Chengchi University | California | ❌ none → omit contact |
| 19 | Leo Zheng | Foreign Law Counsel | LL.M., William & Mary; LL.M., Wuhan | PRC | ❌ none → omit contact |
| 20 | Ziqi Yu | Of Counsel | J.D., UC College of the Law, San Francisco | California, Florida, PRC | ❌ none → omit contact |
| 21 | Yiyang Huang Daciuk | Of Counsel | J.D., University of Texas | California | ❌ none → omit contact |
| 22 | Feng Yang | Associate | LL.M., UC Davis; LL.B., Wuhan | California, PRC | ✅ fengyang@ |
| 23 | Olufunmilayo Owolabi | Of Counsel | LL.M., University of Baltimore; LL.B., Reading | District of Columbia | ✅ Funmi@ |

## Notes

- **Roberto Luo (17)** is a China-licensed patent attorney and attorney-at-law; his listed degrees are technical (M.S./B.S.), not a J.D. Present education as-is — do not manufacture a J.D.
- **Full education arrays** (additional degrees beyond the primary law degree) are already in `attorneys.ts`; this table lists the primary law credential for quick reference.
- **Data gaps discovered (not in scope, flag for Session 5):** in the **Chinese** roster, the photo entries for **Roberto Luo** and **Yenting Feng** are empty (`"src": "/people/"`, null dimensions) while the English roster has real images. Standardization work should reconcile these across locales.
- Nothing in this table required external scraping; it is a consolidation of the firm-published data already in the repository.
