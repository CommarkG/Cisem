# Context-Envelope + Governance-Spine — Phased Plan
**Node ID:** CISEM-ARCH-00392 | **Type:** ARCH | **Status:** PROVISIONAL-ACTIVE
**Planning Status:** IN-PROGRESS — Governor RATIFIED 2026-07-18. Stage-1 independent soundness review returned **SOUND** (run 17; HALT not triggered). **Phase-0 BUILT + GATE 0→1 PASSED** (Opus SOUND + Governor "Phase-0 signed" 2026-07-18) → Phase-1 planning authorized. Findings 6a/6b folded below (required before Gate-3 decree). | **depth_level:** L1
**tags:** [planning-domain, context-envelope, three-state, invariant-registry, threshold-entry, consolidation]
**Goal:** Make context-focus (A6/D6) MECHANICAL: give every check a machine-readable ENVELOPE and a third
verdict state (UNKNOWN) so out-of-scope application flags instead of silently false-passing — measurable as
`invariant-registry.yaml` driving `plan-audit.sh` with PASS/FAIL/**UNKNOWN** on ≥3 checks + a planted-edge test.
**Governing corespine:** CS-CREATION-001 | **CAL reference (ARCH-00390):** pre-commit `[ZF]` + new `[EDGE]` enforce each phase.
**Independent Verifier:** a fresh `cisem-opus-pe` (distinct from author) — Stage-1 soundness + per-phase gates.
**Existing-First (§3.2b, done):** PROMOTES **IBD-0007** (the ratified-by-6+6-personas design; this is its wizard plan) +
SUPERSEDES **ARCH-00391** (A8 — one plan, not two overlapping). AI-defaults home stays **CLAUDE.md §1.6** (Governor-confirmed —
index-and-point, NO new registry). Threshold **CS-THRESHOLD-001** = the UNIVERSAL PROCESS-ENTRY gate (Governor: "all processes
start from the threshold"), NOT an index anchor. Enhances ssot-registry; reuses `found_iN`/ZF/P3-TTL patterns (no fork, I19/A8).

## Pocket Declaration
- **reasoning_scope:** sequence the context-envelope + spine into stress-gated phases, MVP-first
- **inherited_constraints:** A1–A8; D1–D6; I7; I10/I19 (one home, no fork); I25 (this plan authorizes the build)
- **output_contract:** phased plan; each phase = deliverable + adversarial stress test + NUMERIC pass criteria + gate
- **ai_cannot:** self-ratify; start a phase before the prior gate; declare a phase done without shown output
- **recorded_at:** 2026-07-18

## Executive Summary
CISEM's checks are two-state (PASS/FAIL) with no scope schema — so a rule misfiring out-of-scope silently false-passes,
and A6 stays doctrine. This plan adds a machine-readable envelope per check (`invariant-registry.yaml`) + a third state
(UNKNOWN=flag) so context becomes mechanical. Rigid in the core, flagged in the penumbra, penumbra shrinks over time
(the learning loop). Contract-first; reuses existing patterns; forks nothing (§1.6 owns the persona-biases; this owns invariant envelopes).

## The Rule (phases — each BLOCKED until the prior gate passes)
**PHASE 0 — MVP: invariant-registry + three-state, on ≥3 checks**
- Deliverable: `dna/checks/invariant-registry.yaml` — one entry per invariant: `{legal_kind (RULE/STANDARD/PRINCIPLE),
  applies_to, silent_on, core[], penumbra[]}`. Wire `plan-audit.sh` to READ it for ≥3 checks (start I19, I23, I24) and emit
  **PASS / FAIL / UNKNOWN**; UNKNOWN → a new `[EDGE]` channel beside `[ZF]`. Empty `penumbra[]` where judgment is used = itself flagged.
- Stress test: plant an out-of-scope artifact for each of the 3 checks → each yields UNKNOWN (not PASS); in-scope → PASS/FAIL; in-core → no flag.
- Pass criteria (numeric): 3/3 checks read the registry; 100% of planted out-of-scope cases → UNKNOWN; 0 false UNKNOWN on in-core cases.
- **GATE 0 → 1:** independent Opus review + Governor sign-off. ✅ **PASSED 2026-07-18** — invariant-registry.yaml live; three-state PASS/FAIL/UNKNOWN + `[EDGE]` channel wired into plan-audit.sh v6; 3/3 planted penumbra → UNKNOWN, 0 false-UNKNOWN; Opus SOUND (run 17) + Governor sign-off.

**PHASE 1 — echo-to-apply + the 5 core concepts**
- Deliverable: mandatory `applies_to` on every `[[CORE-SEED]]` (I13 enhancement flags seeds lacking it); enumerate
  `core[]`/`penumbra[]` for the 5 under-scoped concepts — **"creation event" · "plan" · "done" · "hardwired" · "ratified"** — on the VOC nodes.
- Stress test: a seed without `applies_to` → flagged; a "creation event" edge (one-line field fix) → routes to UNKNOWN, not a false "creation" FAIL.
- Pass criteria (numeric): 100% of seeds carry `applies_to`; the 5 concepts each have a non-empty core+penumbra; planted edge routes correctly.
- **GATE 1 → 2:** Opus + Governor sign-off.

**PHASE 2 — penumbra planted-test cadence + the false-pass metric (active surveillance)**
- Deliverable: `test_cadence: N` on each `penumbra[]` entry; a Haiku sweep that PLANTS each enumerated edge on cadence + asserts
  UNKNOWN (not false PASS). Add `out_of_scope_false_pass_rate` to `quality-ledger.yaml` beside `haiku_miss_rate`.
- Stress test: run the sweep; a deliberately-mis-scoped registry entry → the sweep catches the false PASS.
- Pass criteria (numeric): 100% of penumbra entries planted-tested; the mis-scoped entry is caught; metric logged.
- **GATE 2 → 3:** Opus + Governor sign-off.

**PHASE 3 — the spine: index + threshold-entry + §1.6 pointer + Sonnet role**
- Deliverable: enhance `ssot-registry.yaml` into a master index (every governance element → its ONE home) — enumerated
  programmatically (grep the registries), NOT sampled. Add the principle: **all processes START at CS-THRESHOLD-001** (entry-routing).
  Add an `ai_defaults → CLAUDE.md §1.6` pointer row (no new file). Consolidate Sonnet's role into one referenced home.
  **If the index approaches 200 lines (§3.6): pre-declared mini-tree split** (this index must not become the bloat it prevents).
- Stress test: enumerate ALL governance elements via grep; assert each resolves to exactly one home; assert index size vs the gate.
- Pass criteria (numeric): 100% of enumerated elements → one home; **0 forks *among plan-introduced elements*** (scope-6b);
  PRE-EXISTING A8 debt is enumerated + routed SEPARATELY (not counted as a Phase-3 failure — the plan did not cause it).
- **6b (blocks-on, now largely cleared):** the P3 collision risk named at review — CS-FRONTEND-001 I25 debt + ARCH-00393/00394
  wizard-role collision — is **RESOLVED** as of run 18 (I25 debt closed; D-2/D-3 fixed 393-manifest / 394-wizard roles). Any
  residual inherited fork at P3 is disclosed + routed, never silently failed.
- **GATE 3 → LIVE:** Opus + Governor foundational decree.

## What DOES change
- New: `dna/checks/invariant-registry.yaml` (P0). Modified: `plan-audit.sh` (three-state read of the registry, `[EDGE]` channel).
- Enhanced: VOC nodes (5-concept core/penumbra, P1); `quality-ledger.yaml` (false-pass metric, P2); `ssot-registry.yaml` (index, P3).

## What DOES NOT change (boundary)
- No ratified invariant/decree/axiom altered. §1.6 remains the AI-defaults home (not moved, not copied). No registry forked (A8).
- CS-THRESHOLD-001 used ONLY in its ratified intake-routing role (entry gate), never repurposed as an index anchor.
- Nothing auto-ratified; no phase before its gate (I7). Repo-wide only at P3.

## Dependencies
- **Blocks-on / promotes:** IBD-0007 (the design this plan realizes); ssot-registry (host); CS-THRESHOLD-001 (entry gate).
  **6a disclosure:** CS-THRESHOLD-001 is RATIFIED-but-**BODILESS** (corespine-registry `distributed_in` only; no manifest file).
  The plan uses it ONLY in its ratified entry-routing role — Phase-0/MVP does NOT depend on threshold body-content; the empty
  body must be resolved (own manifest OR explicit "distributed, no manifest by design" ruling) before Gate-3 LIVE decree.
- **Supersedes:** ARCH-00391 (the overlapping standalone spine — folded here, A8).
- **Related (distinct homes, cross-linked):** CLAUDE.md §1.6 (persona biases — NOT duplicated here); ARCH-00370 (learning loop); ARCH-00320.

## Ratification Path (ARCH-00190 §3)
Stage 1 — independent Opus soundness review (dispatched after authoring; author must not self-certify, I22).
Stage 2 — Governor authority decree → COMPLETE (Governor's alone, A4/I7). Then phase-gated implementation.

## Self-compliance (vs ARCH-00230)
Header + pocket + Independent-Verifier + CAL-ref + Existing-First (with lineage) present; numerically-gated phases;
explicit change/no-change; dependencies + supersede named; path-rejection below; governed by CS-CREATION-001; size within gate.

## Path Rejection Declaration
- ❌ A new AI-Defaults Registry (I19/A8 fork of §1.6 — the v1/ARCH-00391 error) → §1.6 stays home; index-and-point.
- ❌ Anchoring a static index to the threshold (category error — the ARCH-00391 error) → threshold = universal ENTRY gate only.
- ❌ Two overlapping plans (IBD-0007 + ARCH-00391) → ONE plan (A8); ARCH-00391 superseded.
- ❌ "10 random elements" gates → enumerate the FULL population programmatically (adversarial, ungameable).
- ❌ Letting the consolidation index itself bloat past §3.6 → pre-declared mini-tree split.
- ❌ Building ad-hoc (I25) / Opus self-certifying (I22) → routed through /cisem-plan + independent review.

## Change log
- v1.0 — 2026-07-18: Opus draft via /cisem-plan. Promotes IBD-0007, supersedes ARCH-00391, incorporates the ARCH-00391
  UNSOUND revisions (no §1.6 fork; threshold=entry-gate; enumerated gates; size-blast pre-declared). Planning Status
  AWAITING-BUILDER-REVIEW; independent soundness review is the first post-compact action.
- v1.1 — 2026-07-18: Stage-1 review SOUND (run 17); Phase-0 built + GATE 0→1 PASSED (Governor "Phase-0 signed", run 18).
  Folded findings 6a (CS-THRESHOLD-001 bodiless disclosure, Dependencies) + 6b (P3 "0-forks" scoped to plan-introduced elements;
  inherited I25/393-394 debt now RESOLVED run 18). Revision-4 (stale axioms_A1_A7→A1_A8) already applied to ssot-registry. | Opus PE
