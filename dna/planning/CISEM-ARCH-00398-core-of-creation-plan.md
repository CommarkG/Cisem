---
Node_ID: CISEM-ARCH-00398
Type: ARCH
Status: PROVISIONAL-ACTIVE
Planning_Status: COMMENTS-RECEIVED — Stage-1 independent review returned UNSOUND. HALT-1 (model): D2 single-apex INVERTS doctrine-inheritance (doctrine lives at CS-CREATION-001, flows down; cannot be inherited from the validation root) + silently overrode STEP-0 §2c (two orthogonal inheritance types). HALT-2: change-set omits ARCH-00397 (would re-stamp a RATIFIED apex → needs Governor re-decree). HALT-3: plan uses both two-root + single-apex framings. CORRECTION (pending Governor consensus): TWO-AXIS model — parent-tree (apex CS-CREATION-001, doctrine down) + separate validated_by (CS-MASTER-VALIDATION-001). Revise + re-review before any implementation (I25).
depth_level: L1
tags: [planning-domain, core-of-creation, self-hosting, corespine-model, protocol, wizard, plan, cisem-way]
---

# The Core of Creation — Plan (Protocol · Wizard · Corespine · Plan)
**CISEM-ARCH-00398** | ARCH | **Status: PROVISIONAL-ACTIVE** | **Planning Status: AWAITING-BUILDER-REVIEW**
**Goal:** Finish the FULL, self-consistent, DOGFOODABLE creation process for each of the 4 core creation types —
Protocol, Wizard, Corespine, Plan — so CISEM creates itself THROUGH its own machinery ("the CISEM way"). This is the
generative kernel: **NOTHING else moves until these 4 are complete + wired.** Measurable: each type can be RUN
end-to-end (wizard-through-protocol, gated, connected) to generate an instance of itself, verified on disk.
**Governing corespine:** CS-CREATION-001 (the creation apex; validated by root CS-MASTER-VALIDATION-001 — D2).
**CAL reference (ARCH-00390):** pre-commit [ZF] gates each phase; SessionStart inherits this plan.
**Independent Verifier (P5):** a FRESH cisem-opus-pe soundness review — MANDATORY, author (Opus) ≠ verifier (the 3/3-UNSOUND lesson, ⑤).

## THE PIVOT (mission — Governor 2026-07-19)
"We stop developing in the regular way and start developing in the CISEM way." CISEM's ONE differentiator from every
other platform is **self-hosting** — it must create + govern itself through its own machinery, not be hand-built around
it. Every freestyle hand-edit makes CISEM "a repo with good docs," not a self-creating platform. This plan builds the
kernel that makes the CISEM-way possible, then hardwires it. **From ratification on: no implementation without a
ratified plan; all creation runs through the wizards/gates.**

## Existing-First (§3.2b — searched, stated; ENHANCE, never fork — A8-extended)
STEP-0 draft `dna/audits/corespine-model-draft-2026-07-19.md` (Sonnet gather from full SSOT) + ARCH-00340 (meta-protocol,
LIVE) + cisem-meta (VERIFIED mirror, run 24) + ARCH-00190 + cisem-plan (LIVE) + ARCH-00394 (corespine wizard, RATIFIED) +
ARCH-00382 (deferred graph — mine for inheritance/connection). All 4 creation types already have SOME machinery; this
plan COMPLETES + PROVES it, creating no parallel. Where consolidation needs restructuring existing artifacts, restructure
boldly (A8-extended: over-preserving is ossification) — via this plan, not ad-hoc.

## Pocket Declaration
- **reasoning_scope:** author the plan that completes the 4-type creation kernel + wires the CISEM-way discipline
- **inherited_constraints:** A1–A8 (A8-extended); D1–D6; I7/I10/I19/I25; §1.6 persona (CORE-FIRST + RESOLVE-BY-DOING); ARCH-00190
- **output_contract:** a phase-gated plan; each type proven end-to-end before "done"; nothing self-ratified
- **ai_cannot:** self-certify soundness (P5); self-ratify (Governor, A4/I7); implement before ratification; hand-build outside the machinery
- **recorded_at:** 2026-07-19 | **cal_reference:** ARCH-00390

## Current state — honest exist/wired of the 4 (the starting line)
| Type | Machinery | Exists | Wired / proven end-to-end |
|---|---|---|---|
| **Plan** | ARCH-00190 + cisem-plan | ✅ | ✅ ran on ARCH-00396 (with review) |
| **Corespine** | ARCH-00394 + the MODEL | ✅ wizard RATIFIED, dogfooded Phase C | ❌ **MODEL missing**: 0/15 corespines declare a parent (A1/A2 unenforced) |
| **Protocol** | ARCH-00340 + cisem-meta | ✅ mirror VERIFIED | ⚠️ never RUN end-to-end to GENERATE a protocol |
| **Wizard** | — | ❌ no creation protocol/wizard | ❌ all wizards were HAND-BUILT — the biggest gap |

## The Rule (phases — each BLOCKED until its gate; ALL 4 core types complete before anything downstream moves)

**PHASE 1 — CORESPINE creation COMPLETE (the model — the A1/A2 enforcement core; D1–D3 Governor-backed)**
- Deliverable: (a) add a mechanical **`parent:` field** to EVERY corespine in `corespine-registry.yaml`; (b) a **plan-audit
  check** (new invariant) that every corespine's parent RESOLVES and the chain terminates at the apex — mechanically
  enforcing A1 ("nothing stands alone") + A2 ("everything is part of a corespine"); (c) **single-apex = CS-MASTER-VALIDATION-001**
  (root_authority), with **CS-CREATION-001 as its child** (creation apex under the validation root — this REVISES the earlier
  two-root ruling, D2); (d) **inheritance** defined (child inherits doctrine/gates/invariants; SSOT content never copied — A8;
  mined from ARCH-00382 multi-valued `inherits_from[]`); (e) **fork** mechanics defined (branch-fork = CS-ACCOUNTABILITY 4-route;
  child-fork = CS-UNIVERSAL children); (f) `Schema_anchor`/`Core_spine` given a real SSOT home in ARCH-00008 (D4).
- Connection (A1): **flat `parent:` field FIRST** (cheap, mechanical, today); resurrect the full ARCH-00382 graph ONLY if the
  flat model proves insufficient (D3, core-first/low-blast).
- Pass criteria (numeric): 15/15 corespines carry a resolving `parent:`; the parent-chain check is LIVE + green; apex singular; inheritance+fork defined on disk.
- **GATE 1:** independent Opus soundness + Governor decree.

**PHASE 2 — PROTOCOL creation COMPLETE (prove the meta-pair end-to-end)**
- Deliverable: RUN cisem-meta / ARCH-00340 end-to-end to GENERATE a real protocol (a genuine needed one — candidate: the
  **check/script-creation protocol**, itself a real gap) — proving the protocol-creation path works, not just mirrors.
- Pass criteria: a protocol generated via the wizard, passing §3 gates + [ZF]; cisem-meta earns its first clean generative run.
- **GATE 2:** independent Opus soundness + Governor sign-off.

**PHASE 3 — WIZARD creation COMPLETE (close the biggest gap)**
- Deliverable: define the **wizard-creation process** — either a wizard-creation protocol+wizard, OR formalize + wire the rule
  "a wizard is the runnable MIRROR of its protocol (I10), created by deriving from the protocol" — so wizards stop being hand-built.
- Pass criteria: a documented, gate-checked path by which any new wizard is created from its protocol (mirror-verified); the mirror-rule is a running check.
- **GATE 3:** independent Opus soundness + Governor sign-off.

**PHASE 4 — PLAN creation COMPLETE (confirm + strengthen)**
- Deliverable: confirm ARCH-00190/cisem-plan end-to-end (already proven on ARCH-00396) + **fold in MANDATORY independent
  review for Opus-authored plans** (⑤; the 3/3-UNSOUND lesson — make P5 a hard gate, not habit).
- Pass criteria: ARCH-00190 amended so independent review is mandatory; the amendment itself passes the amended gate.
- **GATE 4:** independent Opus soundness + Governor sign-off.

**PHASE 5 — WIRE THE CISEM-WAY (only after Phases 1–4; the self-hosting discipline)**
- Deliverable: (a) hardwire "all creation runs THROUGH the machinery; inside a ratified plan → proceed; outside any plan →
  Governor's explicit OK; only raw-IBD auto-exempt" (item 3 / I25 amendment); (b) the **habit**: Opus Core-Seeds + delegates to
  Sonnet by default, never assuming Sonnet's awareness — Sonnet always bootstraps the full SSOT (⑥); (c) **persona → sub-corespine**
  of CS-AI-BEHAVIOR-001 (`persona-mechanism.md` pointer to §1.6 — persona permanence); (d) resolve restructure flags R-1..R-4 + the CS-AI-BEHAVIOR-001/ARCH-00008 mismatch.
- **GATE 5:** independent Opus soundness + Governor decree.

## What DOES change
`corespine-registry.yaml` (parent fields), `plan-audit.sh` (parent-chain check + new invariant), ARCH-00008 (Schema_anchor/Core_spine
SSOT), ARCH-00190 (mandatory-review amendment), CLAUDE.md (CISEM-way discipline), CS-AI-BEHAVIOR-001 (persona sub-corespine).
New (generated VIA the wizards, not hand-built): a check-creation protocol (Phase 2), the wizard-creation path (Phase 3).

## What DOES NOT change (boundary)
No ratified axiom/decree weakened. The 4 wizards/protocols that exist are ENHANCED, never forked. No downstream feature
(security corespine IBD-0008, import-saturation/SWIFT, vocab-lifecycle, anti-bloat expert, CS-COMMS, founding axioms,
CS-MASTER-VALIDATION content, ai-oversight-layer3) is built until the core (Phases 1–4) is complete — they wait, then get
created THROUGH the completed machinery. Nothing self-ratified; no phase before its gate (I7).

## Dependencies
- **Blocks-on / uses:** STEP-0 draft (corespine-model-draft-2026-07-19.md); the 4 existing wizards/protocols; ARCH-00382 (mined, not built).
- **Unblocks (downstream, deferred until core done):** vocab-lifecycle (② — creates terms via the machinery), security corespine
  (IBD-0008), import-saturation (SWIFT), anti-bloat expert, cadences, CS-COMMS, founding axioms (⑪), CS-MASTER-VALIDATION content
  (⑫ — its own consensus discussion), ai-oversight-layer3 (⑬ — likely folds into CS-AI-BEHAVIOR-001). Each becomes tractable/obvious once the core exists (the ripple).

## The 5 consensus decisions (FIRST ratification — settle these to ratify the model)
D1 adopt the mechanical `parent:` field as A1/A2 enforcement (Rec YES). · D2 single-apex = CS-MASTER-VALIDATION-001, CS-CREATION-001
its child (Rec YES — revises two-root). · D3 flat parent-field now, defer ARCH-00382 graph (Rec YES). · D4 Schema_anchor/Core_spine
home = ARCH-00008 (Rec YES). · D5 persona → sub-corespine of CS-AI-BEHAVIOR-001 + R-1..R-4 (Rec: after model ratifies).

## Ratification Path (ARCH-00190 §3 — the CISEM way)
Stage 0 — iterative draft-review (Haiku gaps → Sonnet structure → Opus judge) until CONVERGED. Stage 1 — INDEPENDENT Opus
soundness review (fresh cisem-opus-pe; author ≠ verifier, MANDATORY). Stage 2 — Governor decree → COMPLETE. Then phase-gated
implementation, each phase BUILT THROUGH THE WIZARDS (dogfood), Opus judging + Governor decreeing each gate.

## Self-compliance (vs ARCH-00230)
Header + pocket + Independent-Verifier + CAL-ref + Existing-First (with STEP-0 lineage) present; numerically-gated phases;
explicit change/no-change; dependencies + downstream named; path-rejection below; governed by CS-CREATION-001. Size: >200
lines — **size exception declared** (master core-of-creation plan; the 4 types + model + 5 phases + decisions are not
separable without losing the single-source coherence the Governor asked for; §3.6 exception per ARCH-00330).

## Path Rejection Declaration
- ❌ Continuing "the regular way" (hand-building around the machinery) — the diagnosed core problem (item 5).
- ❌ Building any downstream feature before the 4 core creation types are complete (Governor: "nothing moves until…").
- ❌ Two separate roots for the corespine tree (revised to single-apex, D2).
- ❌ The full ARCH-00382 graph now (deferred — flat parent-field first, D3).
- ❌ Opus self-certifying soundness / self-ratifying / implementing before ratification (P5 + I7 + I25).
- ❌ Creating new axioms/artifacts when an existing home can contain the change (A8-extended; enhance).

## Change log
- v1.0 — 2026-07-19: Opus draft. Captures the full conversation intent: the CISEM-way pivot (item 5), the 4-type creation
  core (Governor "nothing moves until…"), the corespine MODEL D1–D3 (parent-field + single-apex + field-first, backed), the
  existing-weight/consolidation tension (A8-extended), CORE-FIRST + RESOLVE-BY-DOING, persona-as-sub-corespine, the STEP-0
  findings (0/15 parents), the downstream deferrals, and mandatory independent review. Planning Status AWAITING-BUILDER-REVIEW;
  independent soundness review is the next action (no implementation until ratified).
