# Consolidated Governance Spine (CGS) — Phased Plan
**Node ID:** CISEM-ARCH-00391 | **Type:** ARCH | **Status:** PROVISIONAL-ACTIVE
**Planning Status:** SUPERSEDED (by ARCH-00392, 2026-07-18 — folded into the merged Context-Envelope + Governance-Spine plan per A8; was UNSOUND) | **depth_level:** L1
**tags:** [planning-domain, consolidation, spine, ai-defaults, threshold, sonnet-role]
**Goal:** Consolidate CISEM's scattered governance into ONE navigable spine anchored by the threshold, and turn
the named AI-defaults into a single registry that every plan/implementation self-checks against — measurable as
(a) one master index resolving every governance element to its home, (b) an AI-Defaults Registry the planning
protocol mechanically consults.
**Governing corespine:** CS-CREATION-001 | **CAL reference (ARCH-00390):** pre-commit `[ZF]` gate enforces each phase.
**Independent Verifier:** a fresh `cisem-opus-pe` instance (distinct from the author) — Stage-1 soundness + per-phase gates.
**Existing-First (§3.2b, done):** NO master spine exists; pieces scattered (ssot-registry [closest home to ENHANCE],
corespine-/naming-registry, quality-ledger, learning-registry, ARCH-00320 invariants, FOUND-00001 axioms, agents,
CS-THRESHOLD-001 [the ratified threshold = entry-routing anchor]). AI-defaults NAMED but scattered across ~9 files.
Node-as-Hub (IBD-0004) = structural pattern. This plan ENHANCES ssot-registry; it does NOT fork (A8/I19).

## Pocket Declaration
- **reasoning_scope:** sequence the consolidation into stress-gated phases, MVP-first, AI-defaults-first
- **inherited_constraints:** A1–A8; D1–D6; I7; I10 (one home); I19 (enhance, no fork); I25 (this plan authorizes the creation)
- **output_contract:** a phased plan; each phase = deliverable + stress test + NUMERIC pass criteria + gate
- **ai_cannot:** self-ratify; start a phase before the prior gate passes; declare a phase done without shown output
- **recorded_at:** 2026-07-18

## Executive Summary
CISEM's governance is scattered — no single map, and the AI-defaults that cause its failures are named but spread
across nine files. This plan builds ONE spine: an AI-Defaults Registry (MVP — highest prevention value), a master
index of all governance anchored by the threshold, and a consolidated home for Sonnet's role/permissions. Contract-
first: consolidate what exists (never fork); every plan then self-checks against the known AI-defaults before proceeding.

## The Rule (phases — each BLOCKED until the prior gate passes)
**PHASE 0 — MVP: AI-Defaults Registry + self-check injection**
- Deliverable: `dna/ai-defaults-registry.yaml` — consolidate the ~9 scattered named biases into ONE home; each entry:
  `{name, the-failure-it-produces, the-prevention/invariant that guards it, example}`. Inject an "AI-defaults self-check"
  step into ARCH-00190 Stage 0 (iterative draft-review): every plan states which defaults it is at risk of + its guard.
- Stress test: map each of this session's ad-hoc builds → the default that produced it; confirm the registry covers all;
  plant a plan draft that ignores a known default → the Stage-0 loop flags it.
- Pass criteria (numeric): 100% of the ~9 named defaults consolidated (0 left scattered as the sole home); 100% of session ad-hoc builds map to a registry entry; the planted default-blind draft is flagged.
- **GATE 0 → 1:** independent Opus review + Governor sign-off.

**PHASE 1 — Master Index (SSOT-of-SSOTs), threshold-anchored**
- Deliverable: enhance `ssot-registry.yaml` into a navigable map — every governance element (registry/invariant/axiom/
  agent/check/protocol) → its ONE home, entry-routed by CS-THRESHOLD-001 (PROCESS-NOW | QUEUE | PARK | REJECT).
- Stress test: pick 10 random governance elements; each resolves to exactly one home via the index; no orphan, no duplicate home.
- Pass criteria (numeric): 100% of sampled elements resolve to exactly one home; 0 forks (A8).
- **GATE 1 → 2:** Opus + Governor sign-off.

**PHASE 2 — Sonnet role consolidation + I25 enforcement check**
- Deliverable: consolidate Sonnet's ROLE + PERMISSIONS + PROTOCOLS (from cisem-sonnet.md + ARCH-00300 + ARCH-00350)
  into ONE home, referenced (not duplicated) by cisem-sonnet.md. Wire the deferred **I25 enforcement check** into
  `plan-audit.sh`: flag a new governed node lacking an authorizing-plan reference (grandfather pre-I25 nodes).
- Stress test: planted governed node without a plan-ref → flagged; IBD-capture / SWIFT-safe → exempt; pre-I25 node → grandfathered.
- Pass criteria (numeric): planted violation flagged; 0 false positives on exempt/grandfathered classes.
- **GATE 2 → 3:** Opus + Governor sign-off.

**PHASE 3 — rollout + reconciliation mapping**
- Deliverable: the full reconciliation table (every session artifact → its AI-default → its guard); index all nodes into the spine.
- Stress test: full-repo — every governance element in the index; every named default in the registry with a guard.
- Pass criteria (numeric): 100% coverage, 0 orphans, 0 defaults without a guard.
- **GATE 3 → LIVE:** Opus + Governor foundational decree.

## What DOES change
- New: `dna/ai-defaults-registry.yaml` (P0); Sonnet-role SSOT node (P2); I25 enforcement check in `plan-audit.sh` (P2).
- Enhanced: `ssot-registry.yaml` → master index (P1); ARCH-00190 gains the AI-defaults self-check step (P0).

## What DOES NOT change (boundary)
- No existing ratified invariant/decree/axiom altered. No registry forked (A8). No repo-wide edits until Phase 3.
- Nothing auto-ratified; no phase starts before the prior gate passes (I7). Sonnet's role is CONSOLIDATED, not redefined.

## Dependencies
- **Blocks-on:** CS-THRESHOLD-001 (anchor, ratified); ssot-registry (host); the learning-registry (AI-defaults source).
- **Unblocks:** the rigid-vs-context layer (IBD-0007 — the AI-defaults self-check pairs with its echo-to-apply).
- **Related (distinct, no fork):** IBD-0004 (Node-as-Hub pattern), ARCH-00370 (learning loop), ARCH-00320 (invariants).

## Ratification Path (ARCH-00190 §3)
Stage 1 — independent Opus soundness review (dispatched after authoring; author must not self-certify, I22).
Stage 2 — Governor authority decree → advances to COMPLETE (Governor's alone, A4/I7). Then phase-gated implementation.

## Self-compliance (vs ARCH-00230)
Header + pocket + Independent-Verifier + CAL-reference + Existing-First present; rule-as-procedure (numerically gated phases);
explicit change/no-change boundary; dependencies named; path-rejection below; governed by CS-CREATION-001; size within gate.

## Path Rejection Declaration
- ❌ Forking a new master registry (I19/A8) → ENHANCE ssot-registry.
- ❌ Building the spine ad-hoc (I25 — the exact rule that mandated this plan) → routed through /cisem-plan.
- ❌ Duplicating Sonnet's role into a 4th place → ONE consolidated home, referenced.
- ❌ AI-defaults as prose scattered across files → ONE registry the planning protocol consults.
- ❌ Opus self-certifying its own plan (I22) → independent review before the Governor gate.

## Change log
- v1.0 — 2026-07-18: Opus draft via /cisem-plan (Governor "consolidate; use the threshold; make it mechanical for Sonnet;
  map AI-defaults + inject into protocols"). Planning Status AWAITING-BUILDER-REVIEW; independent soundness review next.
- v1.0 UNSOUND — 2026-07-18: independent cisem-opus-pe review = UNSOUND. Blocking: (1) AI-Defaults Registry FORKS
  CLAUDE.md §1.6 (the ONE home for the named biases — Governor-CONFIRMED §1.6 stays) + collides with IBD-0007's
  invariant-registry, un-cited (the ARCH-00382 lesson recurring); (2) CS-THRESHOLD-001 mis-applied as a static-index
  anchor — category error (it is an INTAKE gate; Governor CLARIFIES: "all processes START from the threshold" = its
  correct entry-routing role, NOT an index anchor); (3) "mechanically consults" over-claims (Stage-0 is behavioral).
  + soft Phase-1/3 gates + ssot-registry size-blast. RESOLUTION (Opus rec, awaiting Governor nod): SUPERSEDE this
  standalone plan INTO the promotion of IBD-0007 — the two overlap; per A8 they become ONE plan (Context-Envelope +
  Governance-Spine), MVP = invariant-registry.yaml; §1.6 stays the AI-defaults home (index-and-point, no new registry).
