# Unified Typed-Inheritance-Graph Architecture — Phased MVP Plan
**Node ID:** CISEM-ARCH-00382 | **Type:** ARCH | **Status:** PROVISIONAL-ACTIVE
**Planning Status:** CONSENSUS-REACHED (independent Opus RE-review = SOUND, 2026-07-18; awaiting Governor Stage-2 ratification — A4)
**depth_level:** L1 | **tags:** [planning-domain, architecture, graph, inheritance, node-as-hub, mvp, stress-gated]
**Goal:** Realize the CONSENSUS-REACHED **Node-as-Hub** architecture (IBD-0004) and EXTEND it into a full
typed-inheritance graph, delivered as a REAL MVP then grown phase-by-phase, each phase BLOCKED until the prior
passes an adversarial stress test (Opus + Governor, I7). **Whole-graph "done" (acceptance):** every repo node
is a schema-positioned hub with a resolvable inherited core and a header-derivable map, retrieval provably
bounded at full repo size (Phase 4 numeric gate).
**Governing corespine:** CS-CREATION-001 (planning) | **Subject anchors:** FOUND-00001 + SCHEMA-00001.
**Lineage (I19):** this plan REALIZES + EXTENDS **IBD-0004 (Node-as-Hub / "the Gem")**, the ratified target
architecture designated "the first plan through the wizard." It is NOT a parallel proposal; it inherits that
consensus and adds scope-roles (specific/regular/meganode≡corespine), typed edges, and universal-core inheritance.

## Pocket Declaration
- **reasoning_scope:** sequence the Node-as-Hub graph into stress-gated phases, MVP-first, contract-first
- **inherited_constraints:** A1–A7; D1–D6; I7; I10 (one home); I19 (this plan's lineage = IBD-0004, not a fork); I22
- **output_contract:** a phased plan; each phase = deliverable + stress test + NUMERIC pass criteria + gate
- **ai_cannot:** self-ratify; start a phase before the prior gate passes; declare a phase done without shown stress-test output
- **recorded_at:** 2026-07-18 (v2)

## Executive Summary
This plan builds the Node-as-Hub model (IBD-0004: every node = persistent SSOT hub, mini-tree, on-demand
sub-files, wired to schema) and extends it: nodes carry a ROLE by scope (specific → regular → meganode≡corespine),
are joined by typed edges, and inherit a universal core down each ancestry path; depth-levels are the layer axis;
dossiers (IBD-0006) + harvest (IBD-0005) are the learning loop. We do NOT big-bang it. We prove the smallest real
mechanism on ONE subtree, stress-test it with NUMERIC criteria, and only then widen. Every gate is adversarial
and human-ratified. Contract-first: nothing works until nodes self-describe.

## The Rule (phases — each BLOCKED until the prior gate passes)

**PHASE 0 — MVP: node contract on ONE small subtree + validator**
- Deliverable: pick one small corespine + its ~3–5 hub nodes; add contract fields to each header
  (`schema_position, depth_level, inherits_from[] (MULTI-valued from the start), core_ref, summary`).
  Fields are OPTIONAL in ARCH-00008 (validated WHERE PRESENT) — NO mandatory-everywhere mutation of the ratified
  schema until Phase 4's versioned migration. Author the **depth-level rubric** as a P0 sub-deliverable (owner: this
  plan) — without it the "wrong depth" test cannot run. Extend `plan-audit.sh` to validate the contract + DERIVE
  the shallow map from headers alone.
- Stress test: plant violations (missing field, bad/absent parent, orphan, wrong depth per the rubric) → validator
  catches 100%; derive-map-from-headers == actual; resolve ONE node's inherited core (incl. a multi-parent case) → correct.
- Pass criteria (numeric): 100% of planted violations caught; derived map identical to hand-built truth; inheritance resolves correctly on ≥1 multi-parent node.
- **GATE 0 → 1:** independent Opus adversarial review + Governor sign-off.

**PHASE 1 — inheritance computation + precedence**
- Deliverable: compute the union of inherited cores along a node's multi-parent ancestry; implement precedence
  (foundational/root cores win; deterministic diamond resolution).
- Stress test: two ancestor cores conflict; a diamond (two inheritance paths to one core); mutate a core → children reflect it.
- Pass criteria (numeric): 100% of conflict/diamond cases resolve to the precedence-predicted core; 0 nondeterministic outcomes across ≥10 adversarial cases.
- **GATE 1 → 2:** Opus + Governor sign-off.

**PHASE 2 — retrieval-as-activation (bounded)**
- Deliverable: given a task + seed node, assemble context = shallow map + task-scoped drill + delegate-deep-to-subagent, under an explicit token budget. Never whole-repo load.
- Stress test: synthetically expand the slice to 10× and 100× node count; run a fixed query set with a known answer set.
- Pass criteria (numeric): **recall ≥ 0.95** on the known answer set; **token cost per query ≤ the P0 slice's full-load cost and FLAT within ±10% across 10×→100×** (does not grow with corpus size); **zero whole-repo loads**.
- **GATE 2 → 3:** Opus + Governor sign-off.

**PHASE 3 — dossier + harvest learning loop**
- Deliverable: instantiate a dossier (the real AI-council responses) on a node; run harvest to consolidate a VERIFIED pattern into a core; observe inheritance propagate it to children.
- Stress test: inject an UNVERIFIED/wrong claim → must be rejected at verification (I7), never promoted; a verified pattern → must reach ALL children.
- Pass criteria (numeric): 100% of injected unverified claims blocked; a promoted core is inherited by 100% of in-scope children.
- **GATE 3 → 4:** Opus + Governor sign-off.

**PHASE 4 — scale-out / generalize (highest blast radius — hardest gate)**
- Deliverable: versioned migration making the contract fields mandatory repo-wide (resolves the P0 optional→mandatory versioning); engines on broadly; corespine registry becomes the high-scope graph layer.
- Stress test: full-repo retrieval + inheritance under real load; orphan + stale-core audit via named commands.
- Pass criteria (numeric): **orphan-count = 0** (via `plan-audit.sh` I1/I5); **stale-core count = 0** (via a freshness audit command); **per-query token cost ≤ the Phase-2 ceiling at full repo size**; 100% of nodes carry a resolvable inherited core.
- **GATE 4 → LIVE:** Opus + Governor foundational decree.

## What DOES change
- ARCH-00008 (node DNA) gains the contract fields as **OPTIONAL** (Phase 0); made mandatory only via the Phase-4 versioned migration.
- `plan-audit.sh` gains the contract validator + map-derivation (P0), inheritance/precedence check (P1); new engine scripts (P2–P3).
- ONE small subtree's headers (P0); repo-wide only at P4. A new depth-level rubric node (P0 sub-deliverable).

## What DOES NOT change (boundary)
- No existing ratified invariant/decree altered; ARCH-00008's existing mandatory fields untouched.
- No repo-wide edits until Phase 4 passes its gate. Corespine registry not restructured until P4.
- Nothing auto-ratified; no phase starts before the prior gate passes (I7).

## Dependencies
- **Blocks-on / realizes:** IBD-0004 (Node-as-Hub consensus — this plan IS its wizard-produced plan); ARCH-00008 (contract host); the plan-gate (ARCH-00190/00340) it rode in on.
- **P0 sub-deliverable (discharges the old phantom dep):** the depth-level rubric (authored in P0, owner: this plan).
- **Unblocks:** retrieval engine at scale; dossier (IBD-0006) at scale; harvest-as-consolidation (IBD-0005).
- **Related (distinct, no duplication):** SCHEMA-00001 (placement), ARCH-00330 (mini-tree = the hub sub-file mechanism).

## Ratification Path (ARCH-00190 §3)
Stage 1 — independent Opus soundness review (v1 verdict: UNSOUND; this v2 addresses all findings → awaiting RE-review).
Stage 2 — Governor authority decree → advances Planning Status to COMPLETE — Governor's alone (A4); must not be self-stamped. Then implementation (§5) may begin, phase-gated.

## Self-compliance (vs ARCH-00230)
Header + pocket present; rule-as-procedure (phases executable + numerically gated); explicit change/no-change boundary; dependencies named + lineage declared; path-rejection below; governed by CS-CREATION-001; size within gate.

## Path Rejection Declaration
- ❌ Big-bang build (unverifiable, high blast) → MVP + numeric stress-gates.
- ❌ Re-proposing Node-as-Hub as NEW (I19 violation — the v1 flaw the reviewer caught) → this plan REALIZES + EXTENDS IBD-0004, cited as lineage.
- ❌ Literal ML "neural net" (no weights/backprop) → typed inheritance graph + activation retrieval.
- ❌ Copying a shared dossier into many nodes (I10/I19) → one home, many links.
- ❌ Mutating the ratified ARCH-00008 to "mandatory on 5 nodes" (schema contradiction) → OPTIONAL fields, versioned mandatory at P4.
- ❌ Opus self-certifying its own soundness (I22) → independent adversarial review (done; UNSOUND → revised).

## Change log
- v1.0 — 2026-07-18: Opus draft via /cisem-plan. Verdict UNSOUND (independent cisem-opus-pe): un-cited IBD-0004 (false Existing-First proof), 2 unfalsifiable gates, ARCH-00008 schema-versioning contradiction, unspecified edge model, phantom depth-rubric dep, missing Ratification Path.
- v1.1 (v2) — 2026-07-18: revised addressing ALL 5 findings — anchored to IBD-0004 lineage; P2/P4 gates made numeric; multi-valued `inherits_from` from P0; ARCH-00008 fields OPTIONAL→versioned-mandatory-at-P4; depth-rubric = P0 sub-deliverable; Ratification Path added; false I19 claim removed.
- v1.2 — 2026-07-18: independent RE-review verdict SOUND (all 5 findings verified fixed, cited). Two wording nits applied (Stage-2 label clarified; P2 "flat" given ±10% band). Planning Status → CONSENSUS-REACHED; awaiting Governor Stage-2 ratification.
