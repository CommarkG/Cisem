---
Node_ID: CISEM-ARCH-00396
Type: ARCH
Status: PROVISIONAL-ACTIVE
Planning_Status: IN-PROGRESS — Governor DECREED v1.1 2026-07-18 (after Stage-1 UNSOUND → v1.1 closed HALT-1/2/3); fast confirmatory re-check of the 3 HALT-fixes dispatched as safety-net (execution HALTS on any residual); executing phase-gated A→D (Gate A + C = Governor decree; B = sign-off; D = Opus)
depth_level: L1
tags: [planning-domain, operating-model, one-tab-orchestrator, git-ssot, creation-layer, consolidation, apex-corespine]
---

# Operating-Model + Creation-Layer Consolidation — Plan
**CISEM-ARCH-00396** | ARCH | **Status: PROVISIONAL-ACTIVE** | **Planning Status: IN-PROGRESS — Governor DECREED v1.1 2026-07-18; executing phase-gated (confirmatory re-check as safety-net)**
**Goal:** Fix the ROOT cause of CISEM's recurring gaps — parallel unsynced work — by (A) formalizing the
one-tab-orchestrator + git-SSOT operating model, and (B) consolidating the scattered creation layer under the
proven meta-root (ARCH-00340) with CS-CREATION-001 formalized as the apex "corespine-of-corespines". ONE plan,
because it is ONE problem: *how CISEM creates and coordinates, made single-source.*
**Governing corespine:** CS-CREATION-001
**CAL reference (ARCH-00390):** pre-commit [ZF] + [SEED] gate each execution phase; SessionStart inherits this plan.
**Independent Verifier (P5):** a FRESH cisem-opus-pe soundness review, dispatched post-draft — author (Opus) ≠ verifier.

## Existing-First (§3.2b — searched, stated)
Ran the Haiku creation-layer OVERLAP MAP, embedded on disk at `dna/audits/creation-layer-overlap-map-2026-07-18.md`:
`dna/protocols/CISEM-ARCH-00340-meta-protocol.md` (LIVE, root_authority) + `.claude/skills/cisem-meta/SKILL.md` (mirror,
self-generation test PASS this session) already ARE "the protocol+wizard that create protocols/wizards" — do NOT rebuild
(A8/I19). CS-CREATION-001 already IS the implicit apex (L1, carries_doctrine, parent of every corespine —
`dna/corespines/corespine-registry.yaml:21`) — FORMALIZE, don't invent. `dna/protocols/CISEM-ARCH-00350-*` is the existing
(out-of-plan) comms protocol — absorb, don't fork. `dna/planning/CISEM-ARCH-00190-*` is the plan-protocol this plan itself
obeys. This plan ENHANCES/CONSOLIDATES existing homes; it creates exactly one new manifest (CS-CREATION-001) + one registry entry.

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
  NOTE (HALT-3): §1.7 is an ALWAYS-LOADED, foundational governing rule binding every future session — a foundational
  decree in effect, not mechanical bookkeeping; it is gated as such below.
- Pass criteria (numeric): decree present in CLAUDE.md §1.7; the 3 agent files + §3.0 reference it; git-race discipline
  (stage-specific-files, no `git add -A`; worktree isolation for parallel writers) stated as a rule.
- **GATE A → B:** Opus soundness + Governor **FOUNDATIONAL DECREE** (§1.7 is foundational, not a sign-off).

**PHASE B — Creation-layer consolidation (A8 under the proven root; closes the 4 overlap-map concerns)**
- Evidence on disk (HALT-2 fix): `dna/audits/creation-layer-overlap-map-2026-07-18.md` enumerates the 4 flagged concerns this phase must resolve.
- Deliverable: (1) ratify cisem-meta as verified mirror of ARCH-00340 (self-generation PASS rendered this session);
  (2) **fix the creation-checklist SSOT (concerns 1+4, HALT-1)** — designate ARCH-00230 the ONE SSOT for the *file/node
  creation CHECKLIST* (its ACTUAL scope; it explicitly excludes plans + node-DNA per ARCH-00230:38-40 — do NOT over-title it
  "everything"). To do so it MUST: (a) transition OUT of DRAFT; (b) correct its header self-identity (it is the creation-checklist
  protocol, NOT CISEM-TEMPLATE-PROTOCOL-001); (c) be REGISTERED in `dna/ssot-registry.yaml` as `creation_checklist → ARCH-00230`.
  Then CLAUDE.md §3 + cisem-create REFERENCE it (stop restating). ARCH-00340 §1 stays SSOT for *protocol structure* (concern 4);
  (3) resolve ARCH-00394 protocol-in-wizard (concern 2) — annotate as a declared combined node with an explicit note, OR split;
  (4) absorb ARCH-00350 as the referenced comms protocol under the Phase-A operating-model (concern 3);
  (5) map plan/corespine/create wizards as INSTANCES deriving from ARCH-00340 (parent pointer).
- Pass criteria (numeric): all 4 overlap-map concerns marked RESOLVED on disk; `ssot-registry.yaml` carries the new
  `creation_checklist` entry; ARCH-00230 no longer DRAFT + header self-identity corrected; each wizard cites parent ARCH-00340 + its mirrored protocol; [ZF] green.
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
- New: CLAUDE.md §1.7 (operating-model decree); CS-CREATION-001 manifest (via ARCH-00394); **`dna/ssot-registry.yaml` new
  `creation_checklist → ARCH-00230` entry (HALT-1)**; `dna/audits/creation-layer-overlap-map-2026-07-18.md` (gate evidence, HALT-2 — created).
  Modified: ARCH-00230 (status out of DRAFT + header self-identity corrected + SSOT scope tightened), CLAUDE.md §3 + cisem-create
  (reference ARCH-00230), cisem-meta (ratified mirror), ARCH-00394 (role resolved), the 3 wizards (parent pointer),
  penumbra-sweep.sh + invariant-registry + quality-ledger (Phase-D fixes), naming-registry (BP next_seq drift).

## What DOES NOT change (boundary)
- No ratified invariant/axiom/decree weakened. ARCH-00340 (root) content unchanged — only referenced-from. The plan-gate,
  ZF gate, CAL hooks unchanged. No creation-layer PROTOCOL deleted — only consolidated/pointed. Nothing self-ratified; no phase before its gate (I7).

## Dependencies
- **Blocks-on / uses:** overlap map `dna/audits/creation-layer-overlap-map-2026-07-18.md`; cisem-meta self-generation PASS (rendered); ARCH-00394 (Phase C dogfood).
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
- v1.1 — 2026-07-18: Revised per Stage-1 independent review (verdict UNSOUND — 3 blocking items). Closed HALT-1 (Phase B now
  registers `creation_checklist → ARCH-00230` in ssot-registry, transitions ARCH-00230 out of DRAFT, corrects its header
  self-identity, tightens SSOT scope to its actual coverage), HALT-2 (overlap map embedded on disk + cited in the gate),
  HALT-3 (Phase A §1.7 re-gated as a Governor FOUNDATIONAL decree). Fixed self-compliance path refs (§3.4). Architecture
  unchanged (reviewer: "fundamentally sound"). Planning Status COMMENTS-RECEIVED; Governor decree pending on v1.1.
