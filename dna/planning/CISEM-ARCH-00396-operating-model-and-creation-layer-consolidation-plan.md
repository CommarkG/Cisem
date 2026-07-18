---
Node_ID: CISEM-ARCH-00396
Type: ARCH
Status: PROVISIONAL-ACTIVE
Planning_Status: AWAITING-BUILDER-REVIEW
depth_level: L1
tags: [planning-domain, operating-model, one-tab-orchestrator, git-ssot, creation-layer, consolidation, apex-corespine]
---

# Operating-Model + Creation-Layer Consolidation — Plan
**CISEM-ARCH-00396** | ARCH | **Status: PROVISIONAL-ACTIVE** | **Planning Status: AWAITING-BUILDER-REVIEW**
**Goal:** Fix the ROOT cause of CISEM's recurring gaps — parallel unsynced work — by (A) formalizing the
one-tab-orchestrator + git-SSOT operating model, and (B) consolidating the scattered creation layer under the
proven meta-root (ARCH-00340) with CS-CREATION-001 formalized as the apex "corespine-of-corespines". ONE plan,
because it is ONE problem: *how CISEM creates and coordinates, made single-source.*
**Governing corespine:** CS-CREATION-001
**CAL reference (ARCH-00390):** pre-commit [ZF] + [SEED] gate each execution phase; SessionStart inherits this plan.
**Independent Verifier (P5):** a FRESH cisem-opus-pe soundness review, dispatched post-draft — author (Opus) ≠ verifier.

## Existing-First (§3.2b — searched, stated)
Ran the Haiku creation-layer OVERLAP MAP (this session): ARCH-00340 (meta-protocol, LIVE) + cisem-meta (mirror,
self-generation test PASS this session) already ARE "the protocol+wizard that create protocols/wizards" — do NOT
rebuild (A8/I19). CS-CREATION-001 already IS the implicit apex (L1, carries_doctrine, parent of every corespine —
corespine-registry.yaml:21) — FORMALIZE, don't invent. ARCH-00350 is the existing (out-of-plan) comms protocol —
absorb, don't fork. This plan ENHANCES/CONSOLIDATES existing homes; it creates exactly one new manifest (CS-CREATION-001).

## Pocket Declaration
- **reasoning_scope:** author the plan that formalizes the operating model + consolidates the creation layer
- **inherited_constraints:** A1–A8 (esp. A8 one-source); D1–D6; I7/I10/I19/I25; ARCH-00190 (this plan's own protocol); §1.6 persona
- **output_contract:** a phase-gated plan; each phase numerically verified before the next; nothing self-ratified
- **ai_cannot:** self-certify soundness (P5 independent review required); self-ratify (Governor, A4/I7); mark any phase done without [ZF]
- **recorded_at:** 2026-07-18 | **cal_reference:** ARCH-00390

## Executive Summary
The Governor traced CISEM's recurring gaps to their real cause: separate tabs + human copy-paste between them =
parallel, unsynced activity (the "Model-A collision" our learning registry already flagged). The cause-fix is
structural: adopt ONE writing tab with Opus as the single orchestrator dispatching Haiku/Sonnet subagents + skills,
git as the sole source of truth. That model already RUNS this session (informally); this plan makes it official and
mechanical. In the same pass it consolidates the creation layer — which the overlap map showed is scattered
(cisem-create unanchored; ARCH-00394 embeds protocol-in-wizard; triple-overlap ARCH-00230/§3/ARCH-00340) — under the
proven meta-root, and formalizes the apex corespine. One coordinated build; no new parallel machinery.

## The Rule (phases — each BLOCKED until its gate passes)

**PHASE A — Operating-Model decree (the cause-fix)**
- Deliverable: a decree (CLAUDE.md new §1.7 "OPERATING MODEL", always-loaded) — *one writing tab; Opus orchestrates
  Haiku/Sonnet/skills; git = SSOT; a second WRITING tab is the Model-A violation.* Absorbs stream ① (CS-COMMS) + ② (1-tab).
  Cross-tier comms protocol = ARCH-00350 referenced (not forked). Wire the delegation rubric (§3.0) as its execution arm.
- Pass criteria (numeric): decree present in CLAUDE.md §1.7; the 3 agent files + §3.0 reference it; git-race discipline
  (stage-specific-files, no `git add -A`; worktree isolation for parallel writers) stated as a rule.
- **GATE A → B:** Opus soundness + Governor sign-off.

**PHASE B — Creation-layer consolidation (A8 under the proven root)**
- Deliverable: (1) ratify cisem-meta as verified mirror of ARCH-00340 (self-generation PASS rendered this session);
  (2) declare **ARCH-00230 the ONE SSOT for "what every creation contains"** — CLAUDE.md §3 + cisem-create REFERENCE it,
  stop restating (kills the triple-overlap); (3) resolve ARCH-00394 protocol-vs-wizard (annotate as a declared combined
  node OR split the STEP 1–6 protocol out as SSOT); (4) map plan/corespine/create wizards as INSTANCES deriving from ARCH-00340.
- Pass criteria (numeric): 0 unresolved SSOT-ambiguities from the overlap map's 4 flagged concerns; each wizard cites its
  parent (ARCH-00340) + its mirrored protocol; [ZF] green.
- **GATE B → C:** Opus soundness + Governor sign-off.

**PHASE C — Formalize CS-CREATION-001 as the apex**
- Deliverable: create the CS-CREATION-001 manifest VIA ARCH-00394 (dogfood the corespine wizard — earns its I24 RATIFIED
  on this first clean run). Manifest states the explicit "corespine-of-corespines" role + parent-of-all-corespines +
  consolidates the currently-distributed content pointers (no fork). Status DECLARED → ratifiable.
- Pass criteria (numeric): manifest exists; corespine-registry CS-CREATION-001 points to it; every child corespine's
  Parent field resolves to it; ARCH-00394 first-run clean (→ eligible for RATIFIED).
- **GATE C → D:** Opus soundness + Governor foundational decree (apex = foundational).

**PHASE D — Phase-2 fixes + hygiene (batched)**
- Deliverable: fix penumbra-sweep counter (separate planted-caught vs real-escape); tighten I19-P2 pattern
  ("nothing found" + named source); reconcile the `out_of_scope_false_pass_rate` ledger field so it does not mislead
  on its face (I16/I22); fix naming-registry BP next_seq drift (says 5; 0005–0008 exist).
- Pass criteria (numeric): sweep reports 0 real-escapes distinctly from planted-caught; I19-P2 routes to UNKNOWN; metric
  field self-explanatory; BP next_seq = 9; [ZF] green.
- **GATE D:** Opus soundness (mechanical hygiene — Governor sign-off optional).

## What DOES change
- New: CLAUDE.md §1.7 (operating-model decree); CS-CREATION-001 manifest (via ARCH-00394). Modified: ARCH-00230 (SSOT
  declaration), CLAUDE.md §3 + cisem-create (reference ARCH-00230), cisem-meta (ratified mirror), ARCH-00394 (role
  resolved), the 3 wizards (parent pointer), penumbra-sweep.sh + invariant-registry + quality-ledger (Phase-D fixes), naming-registry.

## What DOES NOT change (boundary)
- No ratified invariant/axiom/decree weakened. ARCH-00340 (root) content unchanged — only referenced-from. The plan-gate,
  ZF gate, CAL hooks unchanged. No creation-layer PROTOCOL deleted — only consolidated/pointed. Nothing self-ratified; no phase before its gate (I7).

## Dependencies
- **Blocks-on / uses:** Haiku overlap map (run); cisem-meta self-generation PASS (rendered); ARCH-00394 (Phase C dogfood).
- **Absorbs:** deep-work streams ① CS-COMMS + ② 1-tab-optimization (folded into Phase A — no separate plans).
- **Related (distinct homes):** ARCH-00350 (comms — referenced), ARCH-00392 (Phase-2 fixes land in Phase D), ARCH-00300 (§3.0 rubric).

## Ratification Path (ARCH-00190 §3)
- Stage 0 — iterative draft-review (Haiku enumerate gaps → Sonnet structure → Opus judge) until CONVERGED.
- Stage 1 — INDEPENDENT Opus soundness review (fresh cisem-opus-pe; author ≠ verifier, P5).
- Stage 2 — Governor authority decree → COMPLETE. Then phase-gated execution (Sonnet builds; Opus judges each gate).

## Self-compliance (vs ARCH-00230)
Header + pocket + Independent-Verifier + CAL-ref + Existing-First (with the overlap-map lineage) present; numerically-gated
phases; explicit change/no-change; dependencies + absorbed-streams named; path-rejection below; governed by CS-CREATION-001; under the 200-line gate.

## Path Rejection Declaration
- ❌ Building a NEW protocol/wizard for protocol-creation (it exists — ARCH-00340 + cisem-meta; A8/I19).
- ❌ Inventing a new apex corespine (CS-CREATION-001 already is it — formalize, not rebuild).
- ❌ Two separate plans for operating-model vs consolidation (they are one problem — one plan, A8).
- ❌ Keeping the human copy-paste tab-bus (the diagnosed root cause — Phase A removes it).
- ❌ Opus self-certifying soundness (P5 independent review) / self-ratifying (Governor, A4/I7).

## Change log
- v1.0 — 2026-07-18: Opus draft (PE pocket). Folds the Governor-approved operating-model decision + the meta-consolidation
  architecture + the Phase-2 fixes into one phase-gated plan. Planning Status AWAITING-BUILDER-REVIEW; independent soundness review next.
