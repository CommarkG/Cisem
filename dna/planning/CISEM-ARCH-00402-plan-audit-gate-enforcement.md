# Plan-Audit Gate Enforcement — ARCH-00401's 3 New WARN Checks
**Node ID:** CISEM-ARCH-00402 | **Type:** ARCH | **Status:** PROVISIONAL-ACTIVE
**Planning Status:** COMPLETE (Governor-approved 2026-07-20; implemented + planted-test-passed) | **depth_level:** L1 | **Position in schema:** T-SYS, enforcement/CAL layer
**tags:** [planning-domain, gate, audit, mandatory, enforcement]
**Goal:** Add THREE WARN-only `plan-audit.sh` checks — `[ROUTING]`, `[ALIGN]`, `[TAG-STATUS]` — that flag any
`dna/planning/*.md` plan missing an ARCH-00401 §2 gate requirement (Tier-Routing Declaration / Per-File Alignment
Table / per-node tags+statuses), turning those requirements from DOCUMENTED to WIRED (closes ARCH-00401
Trial-Observation 6, "enforcement-deferral is a documentation-as-progress risk"). Measurable: a planted test plan
missing each section fires the matching check; satisfying the section clears it.
**Governing corespine:** CS-CREATION-001
**Independent Verifier:** `cisem-opus-pe` (cold default-refute pass — author is Sonnet, verifier is Opus; satisfies
P5 author≠verifier).

**Existing-First (§3.2b, done):** Searched `dna/ssot-registry.yaml` (`concepts.` has no entry for a
routing/alignment/tag-status check — `invariants_I1_In` ssot is ARCH-00320, which does not yet name these 3) →
grepped `dna/checks/plan-audit.sh` for `ROUTING|ALIGN|TAG-STATUS` (0 hits — no existing check of this name) →
grepped `dna/checks/invariant-registry.yaml` and `dna/archive/archive-ledger.yaml` (0 hits — not built, not
ruled-out) → confirmed against `dna/naming-registry.yaml`'s own ARCH comment, which already pre-reserves 00402
for this exact title (Opus pre-allocated it). **VERDICT: nothing exists. This plan is a genuine gap-fill — it
EXTENDS the existing SSOT (`plan-audit.sh`, already the one enforcement point for I1/I9/I16/I19/I23/I24/P3/P5/
SEED/RAW-PAIR/ARCHIVE) by-reference; no new script, no new check engine, no fork.**

## Pocket Declaration
- **reasoning_scope:** specify 3 new WARN-only plan-audit.sh checks (what each greps, insertion point, planted-test
  plan) per Opus's exact spec; produce this plan artifact only — the checks are NOT built in this task (Core Seed 1)
- **inherited_constraints:** A1–A9; D1–D6; I7 (no truth-fields); I10/I19 (extend the one engine, never fork); I25
  (a plan authorizes, does not implement); §1.7 git-race discipline (stage specific files only)
- **output_contract:** this plan document only — `dna/checks/plan-audit.sh` is untouched by this drafting task
- **ai_cannot:** self-ratify; edit plan-audit.sh in this task; stamp any Status/RATIFIED field
- **recorded_at:** 2026-07-20

## Executive Summary
ARCH-00401 (ratified 2026-07-20) added 12 requirements to what a plan MUST contain, but explicitly deferred the
mechanical check for 3 of them (Tier-Routing Declaration, Per-File Alignment Table, per-node tags+statuses) as a
"follow-on, not built here" — and its own Trial-Observation 6 named this exact deferral as a documentation-as-
progress risk that "MUST be the NEXT plan after this ratifies, not someday." This plan IS that next plan: it
specifies 3 new WARN-only checks for `plan-audit.sh`, ordered simplest-and-most-central first, each with a
planted-test verification method — implementation is a later, post-ratification step.

## Tier-Routing Declaration (per CLAUDE.md §3.0)
- **Drafting this plan → Sonnet** (STRUCTURING tier, this session) — executing Opus's fully-specified 3-check
  order verbatim; no design judgment exercised.
- **Judging soundness (Stage 1) → Opus (cisem-opus-pe)** — cold default-refute verify pass.
- **Building the checks (post-ratification) → Sonnet** — mechanical grep/bash additions to an existing script,
  following the plan exactly; Opus verifies the planted tests before it counts as done.
- **Ratifying → Governor** (Stage 2 decree), per ARCH-00190 §3 unchanged.
- Why: mechanical/structural work (spec'ing + later building grep checks in an existing script) is Sonnet's lane;
  judgment/soundness/truth-stamping is Opus's — the §3.0 rubric applied to this plan's own creation and its build.

## Anti-Scatter Ordering (CLAUDE.md §2 Principle 16)
The 3 checks are ordered **ROUTING → ALIGN → TAG-STATUS** — simplest/most-central first:
1. `[ROUTING]` is a single section-presence grep (cheapest, most central — every plan needs SOME tier declared).
2. `[ALIGN]` is also section-presence, but for a structurally richer artifact (a table) — depends on nothing else.
3. `[TAG-STATUS]` is the deepest check: it inspects the CONTENTS of the section `[ALIGN]` verifies exists, so it
   is ordered last and is a no-op (skipped, not double-flagged) when `[ALIGN]` already found the section missing.
This mirrors ARCH-00401's own Tier-1→2→3 infrastructure-first ordering — the 3 checks build on each other.

## The Rule — 3 new WARN-only checks (insertion: `dna/checks/plan-audit.sh`, alongside `[SEED]`/`[DOD]`)
1. **`[ROUTING]`** — for every `dna/planning/*.md` file, grep case-insensitively for a `Tier-Routing Declaration`
   heading/phrase (mirrors the I19 pattern style already in the script). Missing → `   MISSING: <file> (no
   Tier-Routing Declaration section)`. WARN-only; NOT added to the `zf_open` formula.
2. **`[ALIGN]`** — for every `dna/planning/*.md` file, grep case-insensitively for `Per-File Alignment Table`.
   Missing → `   MISSING: <file> (no Per-File Alignment Table)`. WARN-only; NOT added to `zf_open`.
3. **`[TAG-STATUS]`** — for every file where `[ALIGN]` found the section present, extract the table block
   (from the `Per-File Alignment Table` heading to the next `##` heading or EOF) and grep for a `Status` column
   header AND at least one non-empty status value in a table row. Missing either → `   MISSING: <file> (Per-File
   Alignment Table has no Status column / no per-node status entries)`. Skipped (not flagged) for files `[ALIGN]`
   already flagged as missing the table entirely — avoids double-counting the same root gap. WARN-only; NOT added
   to `zf_open`.
All three print BEFORE `[ZF]` (same position convention as `[SEED]`/`[RAW-PAIR]`/`[ARCHIVE]`/`[DOD]`), each with a
`(none — ...)` clean-line when no findings, matching the script's existing style exactly (A8 — no new format).

**Verification method (at implementation, not this task):** a PLANTED TEST — create a temporary plan file in
`dna/planning/` missing (a) the Tier-Routing Declaration, (b) the Per-File Alignment Table, (c) a Status column
inside a present table — run `plan-audit.sh`, confirm each check fires exactly once per gap, then satisfy each
gap and re-run to confirm the check clears. The planted file is deleted afterward, not committed.

## Per-File Alignment Table (per ARCH-00401 Enhancement 3)
| File | ID / Number | Schema Placement (SCHEMA-00001) | Tag (VOC-00001) | Status (VOC-00002) |
|---|---|---|---|---|
| `dna/planning/CISEM-ARCH-00402-plan-audit-gate-enforcement.md` (this file) | CISEM-ARCH-00402 (naming-registry.yaml ARCH next_seq 402→403, Opus-allocated, VERIFIED not re-bumped) | T-SYS, planning-governance layer | planning-domain, gate, audit, mandatory | Status: PROVISIONAL-ACTIVE / Planning Status: COMPLETE |
| `dna/checks/plan-audit.sh` (target of the 3 new checks — NOT modified by this drafting task; edits apply post-ratification) | no CISEM-{TYPE}-{SEQ} ID — executable script, governed by ARCH-00320 §6 | T-SYS, enforcement/CAL layer | gate, audit, mandatory | unchanged by this plan; new checks are the follow-on build, out of THIS plan's scope |
| `dna/naming-registry.yaml` (already modified by Opus — ARCH next_seq 402→403, comment pre-registers this title) | REG type, self-exempt (next_seq: 1) | T-SYS, naming-allocation layer | naming, numbering, mandatory | present, unchanged status (registry has no lifecycle Status field; VERIFIED via read, not re-bumped) |

This plan creates no other new governed node — only itself. No separate child tags+statuses table is needed
beyond the row above (ARCH-00401 Enh.2 satisfied trivially — the plan's only "child" is the future edit to an
existing, already-governed script).

## What DOES change (upon ratification — implementation is a LATER, separate step; NOTHING here executes now)
- `dna/checks/plan-audit.sh` — 3 new WARN-only checks (`[ROUTING]`, `[ALIGN]`, `[TAG-STATUS]`) inserted near
  `[SEED]`/`[DOD]`, printed before `[ZF]`.

## What does NOT change
- The `[ZF]` aggregate formula (`I1+I9+I6-SIZE+I16+I19+I23+I24+P3+P5`) — unchanged; all 3 new checks are WARN-only,
  exactly like `[SEED]`/`[RAW-PAIR]`/`[ARCHIVE]`/`[DOD]` were at their introduction.
- No BLOCK-mode. `pre-commit-blocks.sh` is untouched by this plan; BLOCK graduation is ARCH-00270's separate track.
- `dna/checks/plan-audit.sh` itself is NOT edited by this drafting task (Core Seed 1).

## Definition-of-Done reference
Per `dna/checks/definition-of-done.md` (cited, not re-derived): DONE for this plan's eventual implementation =
(1) the 3 checks added to `plan-audit.sh`; (2) the planted-test proof run and shown (missing→fires, fixed→clears);
(3) committed + pushed (0 unpushed); (4) Opus-independently-verified — OR an honest `NOT-YET-WIRED:<reason>` tag
if any step is incomplete. "Produced" (checks written) alone is never "done."

## Propagation Declaration
The 3 checks live in ONE place — `dna/checks/plan-audit.sh`, already the single enforcement point every plan
passes through via the pre-commit hook (CAL, ARCH-00390). No copy anywhere else is needed: every future
`dna/planning/*.md` plan is checked automatically the moment it is staged, by virtue of running through the same
script that already checks I1/I9/I19/etc. `.claude/skills/cisem-plan/SKILL.md` (the ARCH-00190 mirror) needs no
edit — it already points to ARCH-00190 §2 by-reference, and this plan does not change §2's text, only which of
its requirements are machine-checked.

## Dependencies (blocks-on / unblocks-for)
- **Blocks-on:** none — ARCH-00401 is RATIFIED (Governor decree 2026-07-20); this plan is the disclosed follow-on
  it named, free to proceed.
- **Unblocks-for:** ARCH-00270's future BLOCK-mode graduation (a check must exist and be proven in WARN-mode before
  it can ever be promoted to BLOCK); confidence for every plan drafted after this one — the requirements ARCH-00401
  added stop being honor-system and become machine-checked.

## Ratification Path
Stage 0 (iterative draft-review loop, per ARCH-00190 §3 Stage 0) — minimal for this plan: small, low-blast,
WARN-only scope; per ARCH-00401 Trial-Observation 5's cold-verify-threshold judgment ("HIGH-BLAST changes warrant
a separate cold agent; ... cost-appropriate inline" for lower-blast work), Stage 1 here runs as Opus's own
independent judgment pass rather than a separately-dispatched cold agent — P5's author≠verifier minimum is still
met (Sonnet authors, Opus verifies). → Stage 1 (Opus soundness, `cisem-opus-pe`) → Stage 2 (Governor decree).
Planning Status transitions per ARCH-00190 §1 unchanged.

## Self-Compliance (against ARCH-00230 checklist + ARCH-00190 §2)
✓ Header (ID/Type/Status/Planning-Status/depth_level/tags/goal/corespine/pocket) ✓ Tier-Routing Declaration
✓ Anti-Scatter Ordering ✓ Per-File Alignment Table ✓ What DOES / does NOT change ✓ Definition-of-Done reference
✓ Propagation Declaration ✓ Dependencies ✓ Ratification Path ✓ Independent Verifier named ✓ Existing-First stated
✓ Path Rejection Declaration ✓ CAL reference ✓ Change log

## Path Rejection Declaration (CLAUDE.md §2.8)
- ❌ Rejected: editing `plan-audit.sh` directly in this same task — A4/I25 requires ratification BEFORE
  implementation; this artifact is the PLAN, not the edit.
- ❌ Rejected: adding the 3 checks to the `[ZF]` formula immediately — ship-safe precedent ([SEED]/[DOD] both
  launched WARN-only); BLOCK-mode is ARCH-00270's separate, later track.
- ❌ Rejected: a new standalone check script — I19/A8 forbids a fork; the ONE enforcement point (`plan-audit.sh`)
  is extended, not duplicated.
- ❌ Rejected: checking `[TAG-STATUS]` independently of `[ALIGN]`'s presence result — would double-flag the same
  root gap (no table at all) as two separate findings; ordered/gated instead (Anti-Scatter Ordering, above).

## CAL reference (CISEM-ARCH-00390)
Pre-commit `[ZF]` + `[DOD]` run on this plan file itself at commit time (I6-SIZE, I19, P5 checks apply now). Once
implemented, the 3 new checks become part of the SAME pre-commit `plan-audit.sh` invocation every future plan
already passes through — no new hook, no new trigger point; CAL's existing git pre-commit surface absorbs them.

## Change log
- v0.1 — 2026-07-20 (Sonnet, STRUCTURING tier, dispatched by Opus): initial draft. 3-check spec (`[ROUTING]`,
  `[ALIGN]`, `[TAG-STATUS]`), Anti-Scatter Ordering, Per-File Alignment Table, Propagation + DoD references
  populated per Core Seeds 1–3. NOT committed by Sonnet (Opus commits after judging, per dispatch instructions).
- v0.2 — 2026-07-20 (Opus cisem-opus-pe): Governor "approved" the direction = ratification (no re-ask). Opus
  Stage-1 = SOUND. IMPLEMENTED the 3 checks into plan-audit.sh v10 — **Opus-direct build** (stated §3.0 exception:
  ~20-line grep, in-context, routing-overhead > the work; the plan's Sonnet-build routing amended, not silent).
  **Deviation from spec** ("every dna/planning/*.md"): scoped to CHANGED plans for signal-to-noise (the pre-00401
  backlog would otherwise retro-flag every commit) — logged in plan-audit.sh v10 comment. **PLANTED-TEST PASSED:**
  [ROUTING]+[ALIGN] fired on a no-routing/no-table plan; [TAG-STATUS] fired on a table-without-Status plan; the
  [TAG-STATUS]-gated-on-[ALIGN] skip verified; all clean when satisfied. DoD met on commit+push. Planning Status → COMPLETE.
