# Unified Typed-Inheritance-Graph Architecture — Phased MVP Plan
**Node ID:** CISEM-ARCH-00382 | **Type:** ARCH | **Status:** PROVISIONAL-ACTIVE
**Planning Status:** AWAITING-BUILDER-REVIEW | **depth_level:** L1
**tags:** [planning-domain, architecture, graph, inheritance, mvp, phased, stress-gated]
**Goal:** Deliver the depth-tagged typed-inheritance graph as a REAL MVP, then grow it phase-by-phase where
each phase is BLOCKED until the prior one passes an adversarial stress test (Opus + Governor sign-off, I7).
**Governing corespine:** CS-CREATION-001 (planning) | **Subject anchors:** FOUND-00001 + SCHEMA-00001.

## Pocket Declaration
- **reasoning_scope:** sequence the graph architecture into stress-gated phases, MVP-first, contract-first
- **inherited_constraints:** A1–A7; D1–D6; I7 (only Opus/Governor pass gates); I10 (one home); I19 (no duplication); I22 (no unverified done)
- **output_contract:** a phased plan; each phase = deliverable + stress test + pass criteria + gate
- **ai_cannot:** self-ratify; start a phase before the prior gate passes; declare a phase done without shown stress-test output
- **recorded_at:** 2026-07-18

## Executive Summary
CISEM becomes ONE typed graph: a single node primitive whose ROLE is set by scope (specific → regular →
meganode≡corespine), connected by typed edges, with a universal core inherited down each ancestry path;
depth-levels are the layer axis; dossiers + harvest are the learning loop. We do NOT build this big-bang.
We prove the smallest real mechanism on ONE subtree, stress-test it, and only then widen. Every phase gate
is adversarial and human-ratified. This is contract-first: nothing else works until nodes self-describe.

## The Rule (phases — each BLOCKED until the prior gate passes)

**PHASE 0 — MVP: node contract on ONE small subtree + validator**
- Deliverable: pick one small corespine + its ~3–5 nodes; add mandatory header contract to each
  (`schema_position, depth_level, inherits_from, core_ref, summary`); extend `plan-audit.sh` with a validator
  that (a) checks every slice node carries the contract and (b) DERIVES the shallow map from headers alone.
- Stress test: plant violations (missing field, bad/absent parent, orphan, wrong depth) → validator must catch
  100%; derive-map-from-headers must match reality; resolve ONE node's inherited core by walking edges → correct.
- Pass criteria: 100% planted violations caught; derived map == actual; inheritance resolves correctly.
- **GATE 0 → 1:** Opus adversarial review + Governor sign-off.

**PHASE 1 — inheritance computation + precedence**
- Deliverable: compute the union of inherited cores along a node's ancestry; implement precedence
  (foundational/root cores win; diamond resolution).
- Stress test: two ancestor cores conflict; a diamond (two inheritance paths); mutate a core → children reflect it.
- Pass criteria: conflicts resolve deterministically per precedence; propagation correct across the slice.
- **GATE 1 → 2:** Opus + Governor sign-off.

**PHASE 2 — retrieval-as-activation (bounded)**
- Deliverable: given a task + seed node, assemble context = shallow map + task-scoped drill + delegate-deep-to-
  subagent, under an explicit token budget. Never whole-repo load.
- Stress test: synthetically expand the slice ~10×; measure precision/recall of retrieved nodes vs a known
  answer set; confirm budget held as size grows.
- Pass criteria: budget respected under growth; correct nodes retrieved; zero whole-repo absorption.
- **GATE 2 → 3:** Opus + Governor sign-off.

**PHASE 3 — dossier + harvest learning loop**
- Deliverable: instantiate a dossier (the real AI-council responses) on a node; run harvest to consolidate a
  VERIFIED pattern into a core; observe inheritance propagate it to children.
- Stress test: inject an UNVERIFIED/wrong claim → must be rejected at verification (I7), never promoted; a
  verified pattern → must reach ALL children via inheritance.
- Pass criteria: learn→consolidate→propagate works end-to-end; unverified claims blocked.
- **GATE 3 → 4:** Opus + Governor sign-off.

**PHASE 4 — scale-out / generalize**
- Deliverable: migrate the contract repo-wide; turn engines on broadly; the corespine registry becomes the
  high-scope layer of the graph.
- Stress test: full-repo retrieval + inheritance under real load; metadata-rot / orphan audit.
- Pass criteria: full repo navigable; retrieval bounded at full scale; no orphans, no stale cores.
- **GATE 4 → LIVE:** Opus + Governor foundational decree.

## What DOES change
- ARCH-00008 (node DNA) extended with the mandatory contract fields (Phase 0 scope: the slice only).
- `plan-audit.sh` gains the contract validator (P0), inheritance check (P1); new engine scripts (P2–P3).
- ONE small subtree's headers (P0); repo-wide only at P4.

## What DOES NOT change (boundary)
- No existing ratified invariant/decree is altered.
- No repo-wide edits until Phase 4 passes its gate.
- The corespine registry is NOT restructured until Phase 4.
- Nothing is auto-ratified; no phase starts before the prior gate passes (I7).

## Dependencies
- **Blocks-on:** node metadata+edge contract (ARCH-00008 extension); depth-level rubric.
- **Unblocks:** retrieval engine at scale; dossier (IBD-0006) at scale; harvest-as-consolidation (IBD-0005).
- **Related (no duplication, I19):** SCHEMA-00001 (placement), IBD-0004/0005/0006, ARCH-00330 (mini-tree).

## Self-compliance (vs ARCH-00230)
Header + pocket present; rule-as-procedure (phases are executable + gated); explicit change/no-change boundary;
dependencies named; path-rejection below; governed by CS-CREATION-001; size within gate.

## Path Rejection Declaration
- ❌ Big-bang build (rejected: unverifiable, high blast radius) → MVP + stress-gates.
- ❌ Literal ML "neural net" (rejected: no weights/backprop) → typed inheritance graph + activation retrieval.
- ❌ Copy a shared dossier into many nodes (rejected: I10/I19) → one home, many links.
- ❌ Opus self-certifying its own soundness (rejected: I22) → independent adversarial review before Governor gate.

## Change log
- v1.0 — 2026-07-18: Opus (PE) draft via /cisem-plan wizard (mirrors ARCH-00190). Planning Status:
  AWAITING-BUILDER-REVIEW. Needs an INDEPENDENT soundness pass (Opus authored → must not self-rubber-stamp), then Governor ratification.
