# PART02 — [BUILD-STATE] check (closes the ratified-but-unbuilt class)
**Parent:** CISEM-ARCH-00420 (Wiring Consolidation minitree root) | **Node ID:** CISEM-ARCH-00420-PART02
**Type:** ARCH | **Status:** PROVISIONAL-ACTIVE | **Planning Status:** CONSENSUS-REACHED (Opus soundness post-GI-68 dual-review 2026-07-24 — awaiting Governor ratification; NOTHING built until ratified, A4/A11)
**depth_level:** L2 | **Position in schema:** T-SYS, planning-governance layer (a plan-audit check)
**Priority:** 1 (highest — smallest surface, whole-class closure) | **tags:** [build-state, ri-0027, plan-audit, wiring, check]
**Goal:** A mechanical WARN guard, run at every commit, so the ratified-but-unbuilt class (RI-0027) cannot recur SILENTLY: any plan whose status is COMPLETE/RATIFIED must have its named deliverables on disk, OR explicitly declare which are unbuilt — else it is FLAGGED. Measurable: the known RI-0027 instances reproduce as flags (or clean once marked); a planted should-pass plan stays clean; both shown.
**Governing corespine:** CS-CREATION-001
**Independent Verifier:** `cisem-haiku` (cold protocol/evidence lens) + `cisem-sonnet` (design/implementability lens) — GI-68 mandatory dual review; both distinct from author (Opus).

## Pocket Declaration (§3.3)
- **reasoning_scope:** design one plan-audit check + its wiring; not the whole ARCH-00420 program.
- **inherited_constraints:** ARCH-00190 (plan protocol); ARCH-00320 §6 (plan-audit WARN posture); ARCH-00270 (WARN→BLOCK graduation); A4/A11 (no build pre-ratification); Principles 17/18 (class-coverage, wire-don't-document); RI-0012 (anchor on field value); RI-0025 (source not paraphrase).
- **output_contract:** a `dna/checks/build-state.sh` check + a wired call in `plan-audit.sh`, WARN-only, with a two-direction planted test.
- **ai_cannot:** self-ratify; promote to BLOCK; mark COMPLETE before the deliverable is on disk + tested (dogfoods its own rule).
- **recorded_at:** 2026-07-24
- **cal_reference:** ARCH-00390 — the check RUNS at CAL pre-commit; `[ZF]` stays the done-gate.

## Tier-Routing Declaration (§3.0)
- **GATHER → Haiku:** the manual dry-run (which COMPLETE/RATIFIED plans have deliverables on disk) + audit source-verification — DISPATCHED this turn; supplies fixtures + real deliverable-naming prose patterns.
- **JUDGE/DESIGN → Opus:** this plan, the check's anchor design, the WARN/BLOCK posture, the Core Seed — here.
- **BUILD → Sonnet:** author `build-state.sh` + wire it + the planted test, from this plan's "The Rule", AFTER Governor ratification.

## Executive Summary
Five Governor-RATIFIED plans read Planning Status "COMPLETE" while their deliverables were never built (RI-0027) — "plan ratified" was conflated with "artifact on disk", producing a green ledger over unbuilt mechanisms. This plan adds a heuristic `[BUILD-STATE]` WARN check to `plan-audit.sh`: for every plan whose status field VALUE contains COMPLETE/RATIFIED, it extracts the deliverable paths the plan names and flags any that are absent on disk without an explicit unbuilt-marker. WARN-not-BLOCK because prose-parsing is heuristic; it extends the `[I23]`/`[DOD]` existence-verification family (A8), never forks it.

## Existing-First (§3.2b — searched, stated)
Searched: `plan-audit.sh` full check list (incl. `[I23]`, `[I24]`, `[DOD]`) · `dna/checks/definition-of-done.md` · `dna/checks/` dir · ssot-registry. **Finding:** no check verifies that a COMPLETE/RATIFIED PLAN's named DELIVERABLES exist on disk. **Genuine gap.** Crisp boundary vs the three adjacent existence/evidence checks (each a DISTINCT evidence axis — A9 singly-homed facets, no overlap):
- **`[I23]`** (EXISTS≠ACTIVE) = an ACTIVATION claim on a node must cite a mechanism on disk — *node-activation* axis.
- **`[I24]`** (premature promotion, plan-audit.sh:214-224, verified by source-read per RI-0025) = a node whose `Status: RATIFIED` must cite a **decree / ratified-by / foundational** in its TEXT — *governance-authority* axis. It checks the ratification is legitimate, NOT whether the ratified work was built. It would **never** catch RI-0027 (a plan can cite its decree perfectly and still never build the deliverable).
- **`[DOD]`** = a per-artifact Definition-of-Done spot-check — *single-artifact-quality* axis.
- **`[BUILD-STATE]`** (this) = a COMPLETE/RATIFIED PLAN's named new-file deliverables must EXIST on disk — *physical-deliverable* axis. This is the missing axis.
`[BUILD-STATE]` EXTENDS this existence/evidence family (same WARN posture, same `dna/checks/` home) as a fourth distinct axis, not a duplicate of any. (Overlap raised by Brain's Existing-First 2026-07-24; ruled complementary by Opus source-read.)

## Anti-Scatter Ordering (§ Principle 16 — significance rank of this PART's own steps)
Central: get status-selection ANCHORING right (Step 3 — the BLOCKER, everything downstream depends on selecting the right plans) → then reliable existence + row-scoped markers (Steps 4-5) → then honest shape-disclosure (Step 6). Peripheral (parked, not in this PART): edit-in-place detection, ARCH-ID-ref resolution, BLOCK-promotion — each named + routed, none chased here (core-first, GI-04).

## The Rule (executable — what Sonnet builds after ratification)
1. Create `dna/checks/build-state.sh` (sourced/called by `plan-audit.sh`, like the other checks).
2. **Enumerate universally** (Principle 18B): `find dna/planning -name '*.md'` — the WHOLE class, not a sample.
3. For each plan, read its header **Status:** and **Planning Status:** field VALUES; **token-anchor the selection** (GI-68 BLOCKER fix — RI-0012 applied to the check's OWN design): extract the LEADING enum token of the value (the text after the field marker, up to the first `—`/`-`/whitespace separator) and **exact-match** it against `{COMPLETE, RATIFIED}` — NEVER substring-scan the whole value. Reuse `[RATIFY-GATE]`'s proven anchor (`status:\**[[:space:]]*ratified` immediately after the marker; plan-audit.sh:634). Acid test: `ARCH-00392` and `ARCH-00406` both read `Planning Status: IN-PROGRESS — Governor RATIFIED …` — the value CONTAINS "RATIFIED" but the enum is IN-PROGRESS; the token-anchor must NOT select them.
4. **Extract deliverable FILE PATHS ONLY** (form-(a) — see Fixtures; the check deliberately does NOT verify ARCH-ID refs or "check X wired inside Y", which grep cannot do reliably — proven this turn):
   a. **Per-File Alignment Table** rows (ARCH-00401 mandates it — the reliable structured source): the file-path cell of each row.
   b. Explicit repo paths in **"What DOES change"** and **"The Rule"** lines: tokens matching `(dna|frontend|\.claude|\.git/hooks)/…\.(md|sh|yaml|yml|js|html)`.
   c. De-duplicate; drop paths the plan lists under **"What does NOT change"**.
5. For each extracted path: **`test -e`** on disk (robust — NEVER infer existence by content-grep).
   - **Present** → clean (see the shape-disclosure below — "present" proves the FILE exists, not that an in-place edit landed).
   - **Absent** → search for an unbuilt-marker **scoped to the deliverable's OWN row/paragraph** (GI-68 MAJOR fix), via **`grep -iF`** (fixed-string, case-insensitive — NEVER a bracketed/regex pattern; the trap that produced 3 false negatives this turn) against the validated marker list (see Fixtures). Marker in the SAME row → clean (legitimately-phased). No row-local marker → **FLAG**. **Whole-file marker scan is forbidden** — one stray marker would clear every absent row in a multi-row plan (proven on ARCH-00406's 11-row table).
6. **SHAPE-DISCLOSURE (GI-68 MAJOR fix — the honest scope boundary).** The check reliably covers exactly ONE deliverable shape: **NEW-FILE existence** (a plan promises a new file; it is absent; no marker → FLAG). It does **NOT** cover **edit-in-place** deliverables — a plan naming an existing file it was meant to EDIT passes `test -e` even if the edit never landed (proven live: `ARCH-00401` COMPLETE, names `ARCH-00190`, which exists, yet 3 of its 12 promised insertion-points remain `[ ]` — an undetected RI-0027 instance). The check MUST print this limitation each run and ROUTE edit-in-place verification elsewhere (candidate follow-on: a checkbox-state signal — an unchecked `[ ]` in a COMPLETE plan's deliverable list — and/or Opus behavioral oversight). Disclosing the blind spot is the design, not a weakness; over-claiming coverage would reintroduce the exact plausibility-over-verification this whole PART exists to kill.
7. Print findings under a `[BUILD-STATE]` heading (WARN-only, NOT in the `[ZF]` formula — same posture as `[SEED]`/`[TEMPLATE]`). **Each finding is ACTIONABLE, not console noise** (Brain Q1): it names the **plan file path** AND the **absent deliverable path** — the committer can open both and act (`plan → deliverable path (absent, no unbuilt-marker)`); the bare count is the separate summary (step 8). Include the shape-disclosure line (step 6) in the output header.
8. Emit a one-line summary count (feeds RI-0003 full-board honesty).
9. **AI-oversight pocket:** Opus resolves heuristic UNKNOWNs (a phased plan mid-build) — WARN surfaces, Opus judges; no auto-BLOCK.

## Planted test (both directions — Definition-of-Done, dogfoods ARCH-00418 MECHANICAL grade)
Fixtures under `dna/checks/fixtures/build-state/` (synthetic plans, never real):
- **should-FLAG:** a plan with `Planning Status: COMPLETE` naming `dna/checks/__nonexistent__.sh`, no unbuilt-marker → the check FLAGS it. (Verified failing→passing.)
- **should-PASS (deliverable present):** same plan naming an existing path → CLEAN.
- **should-PASS (unbuilt-marker):** same absent deliverable but the plan carries `NOT-YET-BUILT` → CLEAN.
Closure-grade: **MECHANICAL** — the check's own output on the three fixtures IS the finish-line evidence, shown in the build report.
**Real-corpus check:** the RI-0027 instances (from Haiku's dry-run) must reproduce as flags/clean as expected — the live regression proof, not just synthetic.
**Test cadence (Brain Q2):** the planted test is a **standalone re-runnable harness** (`dna/checks/fixtures/build-state/run-test.sh`) executed at build AND re-run whenever `build-state.sh` changes (a regression guard) — it is NOT fired on every unrelated commit. The fixtures live under `dna/checks/fixtures/` (synthetic COMPLETE plans), OUTSIDE the per-commit `find dna/planning` enumeration, so they never self-flag or pollute the live commit run.

## Fixtures + parser-anchor evidence (from Haiku GATHER + Opus source-verification 2026-07-24 — VALIDATED)
**Validated unbuilt-marker vocabulary** (real phrases in live COMPLETE plans — feed Step 5's `grep -iF` list): `NOT-YET-WIRED` · `NOT-YET-BUILT` · `implementation is a LATER` · `follow-on build` · `awaiting build` · `buildable` (⚠ "buildable"/"now proposable" = NOT built) · `Phase … not yet greenlit`.
**Validated deliverable-naming forms:** (a) direct repo paths `dna/…\.(md|sh|yaml|js|html)`; (b) ARCH-{ID} references ("ARCH-00190 (12 insertion points)"); (c) prose "a [X] check in plan-audit.sh" (content, not a path).

**CRITICAL DESIGN CONSTRAINT — empirically proven this turn (routed prevention, GI-70):** Haiku's gather made **3/3 false "absent" claims** (ARCH-00403/00408/00409 all verified PRESENT by Opus source-read) because grep on `[TEMPLATE]` hit the bracket-as-regex-char-class trap and `DRAFTS` vs `Drafts` hit case-sensitivity. Existence-by-grep is fragile. Therefore the check MUST:
- test existence ONLY of form-(a) **file paths**, via `test -e` (robust) — never infer existence by content-grep;
- match unbuilt-markers via `grep -iF` (fixed-string, case-insensitive) — never a bracketed/regex pattern;
- **NOT** attempt to verify form-(b)/(c) deliverables (ARCH-ID refs, "is check X wired inside file Y") — content-level wiring is exactly what produced the false negatives; that verification stays **Opus/behavioral oversight**, not this mechanical check. The check reports only path-existence gaps; it explicitly disclaims content-wiring. This is why it is **WARN**, not BLOCK.

**Real-corpus regression fixtures (post-verification):**
- should-PASS (deliverable present): ARCH-00403, ARCH-00408, ARCH-00409, ARCH-00395, ARCH-00396.
- should-PASS (absent but unbuilt-marker present): ARCH-00401, ARCH-00402, ARCH-00410, ARCH-00414.
- should-FLAG candidates (RI-0027's named remaining — spot-verify at build): ARCH-00392-P1, ARCH-00406-P1.
- The synthetic 3-fixture set (above) remains the deterministic MECHANICAL proof; the real corpus is the live regression proof.

## What DOES change
- NEW: `dna/checks/build-state.sh`
- NEW: `dna/checks/fixtures/build-state/` (3 synthetic fixture plans)
- MODIFIED: `dna/checks/plan-audit.sh` — one call line + `[BUILD-STATE]` output block (additive, WARN-only, NOT added to the `[ZF]` invariant list)

## Per-File Alignment Table (ARCH-00401 mandatory — GI-68 Haiku GAP-1 fix)
| File | naming-registry | schema placement (SCHEMA-00001) | tag | status |
|---|---|---|---|---|
| `dna/checks/build-state.sh` | non-node script (dna/checks/ family, like plan-audit.sh — no CISEM-{TYPE}-{SEQ} id) | T-SYS, plan-audit check layer | check | NEW → PROVISIONAL-ACTIVE on build |
| `dna/checks/fixtures/build-state/*.md` (×3) | non-node fixtures (synthetic, test-only) | T-SYS, check-fixture layer | fixture, test | NEW → PROVISIONAL-ACTIVE on build |
| `dna/checks/plan-audit.sh` | existing (registered aggregator) | T-SYS, CAL pre-commit | check | MODIFIED (additive call + output block) |

## What does NOT change
- The `[ZF]` formula (I1+I9+I6-SIZE+I16+I19+I23+I24+P3+P5) — `[BUILD-STATE]` is WARN-only, outside it.
- BLOCK posture — introduced WARN; BLOCK only later via ARCH-00270's graduation rule (not this plan).
- No existing check is modified or removed (deletion-guard clean).
- No real plan's status is edited by this plan (that is separate per-instance remediation).

## Definition-of-Done (ref — dna/checks/definition-of-done.md, not re-derived)
Wired (`build-state.sh` exists + called in plan-audit.sh) + runs at CAL pre-commit + planted test passes both directions + the real RI-0027 instances reproduce + `[ZF]` still ACHIEVED. Any leg unmet → honest NOT-YET-WIRED, never "done".

## Propagation Declaration
Self-propagating (runs on ALL plans at every commit by construction — universal enumeration). No mirror/regenerated view depends on it. On build, RI-0027 status updated to reference the built check; the ARCH-00420 PRESERVE line already names `[BUILD-STATE]` as the regression guard — no further surface.

## Dependencies
- **Blocks-on:** Governor ratification (A4/A11); Haiku dry-run (fixtures + real patterns — in flight); GI-68 dual review.
- **Unblocks-for:** the ARCH-00420 PRESERVE guarantee (regression guard); a trustworthy status ledger for PART01/11 (the drain).
- **Independent of:** every other PART (ships alone — core-first, GI-04).

## Self-compliance (against ARCH-00230)
Goal measurable (real instances reproduce + 2-direction planted test) · corespine declared (CS-CREATION-001) · Existing-First stated · core-vs-instance: a reusable CHECK (core), justified by 5 real instances not one · pocket declared · size < 200 lines · dogfoods its own rule (this plan is not marked COMPLETE until build-state.sh is on disk + tested).

## Path Rejection Declaration
- **REJECTED: make it a BLOCK check immediately** — prose-parsing is heuristic; a false-flag that BLOCKs commits is worse than the gap. WARN first, graduate via ARCH-00270 once proven low-false-positive.
- **REJECTED: a new [I-number] invariant inside the ZF formula** — would let a heuristic check gate commits; keep it WARN, outside ZF.
- **REJECTED: parse ALL file-path-looking tokens repo-wide** — over-broad, false-flags references/examples; anchor on the plan's declared-deliverable sections (Alignment Table first).
- **REJECTED: fork a new existence-check family** — `[I23]`/`[DOD]` already verify existence; extend that family (A8).

## Change log
- v0.1 2026-07-24 (Opus, pre-compact) — seed from RI-0027 + Brain's #1 shortest-cycle rec.
- v0.2 2026-07-24 (Opus, post-compact) — elevated to ratifiable ARCH-00190/00401 plan: full sections, tier-routing, planted-test both directions, path-rejections, DoD ref. Fixtures folded from Haiku dry-run + Opus source-verification (3/3 alleged silent-gaps overturned — RI-0025).
- v0.3 2026-07-24 (Opus, GI-68 dual-review folded) — Sonnet (design) + Haiku (protocol) reviewed; Opus value-assessed + accepted all: BLOCKER token-anchored status-selection (Step 3); MAJOR row-scoped marker search (Step 5); MAJOR shape-disclosure new-file-vs-edit-in-place (Step 6, new); Haiku GAP-1 Per-File Alignment Table added; GAP-3 Anti-Scatter Ordering added. Class-prevention → RI-0029. Planning Status → CONSENSUS-REACHED.
- v0.4 2026-07-24 (Opus, Brain Existing-First gate folded) — Brain's mandatory Existing-First surfaced `[I24]` overlap; Opus source-read (RI-0025) ruled it COMPLEMENTARY (I24 = governance-authority text-citation axis; BUILD-STATE = physical-deliverable axis) + stated the crisp 4-axis boundary in Existing-First. Brain clarifying Qs answered in-plan: findings are actionable file paths (Step 7), planted test is a re-runnable regression harness outside the per-commit enumeration (Planted test §). Process-catch (premature ratify-invitation before this gate closed) → RI-0030; gate now CLOSED → legitimately ratify-ready.
