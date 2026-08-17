# Sonnet Dispatch — UX/UI Report Consolidation (v2, Brain-hardened, Opus-ruled)
**From:** Opus (CISEM PE) · **For:** cisem-sonnet · **Date:** 2026-08-17
**Status:** READY-TO-EXECUTE (Governor go pending) · **tags:** [dispatch, consolidation, ssot, uxui]
**Supersedes:** the v1 dispatch prompt (withdrawn — Brain found 5 defects; all fixed here).
**Target file (the ONLY file you edit):** `dna/learning-registry/CISEM-UX-UI-COMPREHENSIVE-REPORT-2026-08-17.md`

---

## 0 · ROLE & BOOTSTRAP
You are cisem-sonnet executing a ratified consolidation. **You move text and add ONE supplied column. You make NO canon-ownership, architectural, or priority decisions** — every such call is already made below by Opus. If any step seems to require a judgment you were told not to make, STOP and report it; do not invent.

Read cold, in order: `CLAUDE.md` → this file → the target report. State the preventions you apply before editing.

---

## 1 · THE CORRECTING FRAME (read before touching anything)
The goal is **single-source the CONTENT, preserve every VIEW.** A full table, a quick-reference card, an incident log, and a checklist are **not duplication** — they are one body of knowledge expressed at **different moments of use** (learning · fast-lookup · post-mortem · pre-ship · runtime). **Collapsing a view destroys its function even if no sentence is lost.** So: the ONLY thing you truly replace-with-a-pointer is a **value that is literally re-copied from a declared SSOT** (the contrast hex numbers). Everything else is *kept and reconciled*, not collapsed.

**Preservation beats dedup. When in doubt, LEAVE IT and note it.**

---

## 2 · THE TASKS (exact)

### T1 — Contrast values → SSOT pointer (the one genuine collapse)
In **§1.3** and the **Part 11 "Contrast Ratios (WCAG Verified)"** appendix, the hex token values + ratio numbers are re-copied from the SSOT `frontend/css/style.css :root`. Replace **only the re-listed numeric blocks** with a pointer: *"Token values + verified ratios live in the SSOT `frontend/css/style.css :root`; do not re-list here (I10 — a mirror may not diverge). FE-I13 (`functional-check.mjs` GATE A) computes and enforces them."*
**Preserve:** the verification METHOD description and the FE-I13 enforcement note. **Remove only** the duplicated numbers.

### T2 — AI-trigger content: single-source, KEEP BOTH views
**Part 3** (full trigger table) and **Part 11** ("AI Trigger Prevention Quick Card") list the same 9 triggers. **Do NOT collapse either.** Make **Part 3 the content source**. Read both; if any trigger/prevention wording DIFFERS between them, reconcile Part 11 to match Part 3's wording (no content invented). Add one line under Part 11's card: *"Quick-reference view of the Part 3 trigger source — keep in sync."* **Both tables stay in full.**

### T3 — Prevention forms: KEEP all three, reconcile only verbatim copies
The **Incident log (Part 4.1)**, **pre-ship checklist (Part 7.1)**, and **trigger table (Part 3)** are three forms for three moments. **Leave all three intact.** Only where the *identical sentence* is copied verbatim across them, keep it in its primary form and add a light cross-reference from the others. If unsure whether two lines are the same, **LEAVE BOTH.** No form is removed or shortened.

### T4 — 5-question walkthrough: canonical = FE-I14; protect the primary source
The walkthrough appears in **KL-0002 §7.1**, **FE-I14**, and the **"Governor verbatim" block (Part 6)**.
- **Canonical = FE-I14** (the ratified home, ARCH-00393). 
- **KL-0002 §7.1's copy** → replace with a reference to FE-I14, but **keep any unique supporting per-component questions** it adds.
- **The Governor-verbatim block is a PRIMARY SOURCE. It is NEVER replaced by a reference, in any consolidation, ever.** Leave it 100% intact and add the label: *"Primary source — the Governor's verbatim words; preserved, not deduplicated."*

### T5 — Parent-principle column (ADDITIVE; mapping supplied — transcribe, do not derive)
Add a **"Parent universal law"** column to (a) the FE-invariant table **§2.2** and (b) the AI-trigger table **Part 3**. **Transcribe exactly** the mapping in §3 below. Rules: a row **not** in the mapping → write the literal `UNMAPPED` (an honest pass — do NOT invent a parent); a row with **two** parents → list both, comma-separated. Invent nothing; leave no blank in the column.

---

## 3 · PARENT-PRINCIPLE MAPPING (Opus-supplied — use verbatim)

**FE invariants (§2.2):**
| Invariant | Parent universal law |
|---|---|
| FE-I1 (only style.css) | A8 / I10 (SSOT — one stylesheet) |
| FE-I2 (only search.js) | A8 / I10 (SSOT — one behavior file) |
| FE-I3 (standard nav) | UNMAPPED |
| FE-I4 (.bc breadcrumb) | UNMAPPED |
| FE-I5 (tokens only) | A8 / I10 (tokens are the SSOT) |
| FE-I6 (responsive) | UNMAPPED |
| FE-I7 (mobile/touch) | UNMAPPED |
| FE-I8 (dead-link-free) | A1 / I1 (no orphans / no dangling refs) |
| FE-I9 (collapsible via search.js) | A8 / I10 (behavior SSOT) |
| FE-I10 (view toggle auto-inject) | A8 / I10 (behavior SSOT) |
| FE-I11 (presence≠behavior) | Principle 17 |
| FE-I12 (single control row) | UNMAPPED |
| FE-I13 (WCAG contrast) | UNMAPPED |
| FE-I14 (user-shoes review) | UNMAPPED |
| FE-I14 (element-inventory / no-removal) | Principle 18A (no-collateral-deletion) |

**AI triggers (Part 3):**
| Trigger | Parent universal law |
|---|---|
| Controls-first layout | UNMAPPED |
| Internal naming leakage | UNMAPPED |
| Tooltip-as-sufficient | Principle 18C (documentation-as-progress / plausibility-completion) |
| Below-the-fold primary action | UNMAPPED |
| Feature-completeness over guided attention | Principle 16 (anti-scatter) |
| Silent defaults | UNMAPPED |
| Cold-start screens | A1 (nothing stands alone / continuity) |
| Fabricated personalization | I2, I22 |
| Orphaned captured input | A1 (DONE = wired + called + read) |

---

## 4 · COMMIT PROTOCOL (two commits — additive first)
1. **Run `bash dna/checks/plan-audit.sh` BEFORE committing.** If a `[ZF]` finding appears, rule it or route it first. Never claim green if it isn't.
2. **Commit 1 — ADDITIVE (near-zero risk): T5 only** (the two parent-principle columns). Stage the single target file (never `git add -A`), never `--no-verify`. Report the **real hex hash**.
3. **Commit 2 — CONSOLIDATING: T1–T4.** Same discipline. Report the **real hex hash**.
   (Split so a bad consolidation can revert without taking the safe additive work.)

## 5 · DONE EVIDENCE (you report; the Governor verifies)
Do **not** attest "zero unique content lost" — a diff cannot prove that. Instead produce, for **Commit 2**:
- the **git diff**, AND
- a **PER-DELETION TABLE:** every removed/replaced line → the file + section where its **surviving copy** now lives.

Then confirm: both commit hashes · the three architectural forks untouched (see §6) · Governor-verbatim block intact + labeled · the honest `[ZF]` board. **HARVEST-BEFORE-RETURN.**

## 6 · SCOPE FENCES — DO NOT TOUCH OR DECIDE
Leave these **exactly as they are** (Governor/Brain calls, not yours):
- World-A / World-B convergence (§1.2, §8.2 Q1/Q2)
- The CS-UX-UI-001 corespine decision
- GAP-01…09 priority (product vs demo)

## 7 · CORE SEEDS (immutable — honor verbatim)
[[CORE-SEED | MUST: single-source CONTENT, preserve every VIEW/form; the only replace-with-pointer is a value re-copied from a declared SSOT (the contrast numbers). Preservation beats dedup — when unsure, leave it. | WHY: a card/checklist/log serve different moments; collapsing destroys function even with no sentence lost | VERIFY: all views still present; only SSOT-duplicated values pointed]]
[[CORE-SEED | MUST: the Governor-verbatim block is a PRIMARY SOURCE — never replaced by a reference, in any consolidation, ever | WHY: verbatim capture of his words is evidence, not a duplicate | VERIFY: the block is byte-intact + labeled primary source]]
[[CORE-SEED | MUST: never attest what a diff can't prove — output the diff + a per-deletion table, never a "zero content lost" claim | WHY: a mandatory claim with no mechanical basis is the fabricated-value class | VERIFY: a per-deletion table accompanies Commit 2]]
[[CORE-SEED | MUST: transcribe the §3 mapping exactly; unmapped row = literal UNMAPPED, two-parent row = both; invent no parent, leave no blank | WHY: mandatory presence without real binding forces invention | VERIFY: every column cell is a supplied value or UNMAPPED]]
[[CORE-SEED | MUST: make NO canon/architectural/priority decision; the three fences (§6) are untouched | WHY: those are Governor/Brain calls | VERIFY: §6 sections byte-unchanged]]
