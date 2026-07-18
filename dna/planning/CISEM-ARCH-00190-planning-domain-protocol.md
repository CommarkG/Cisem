# Planning Domain Protocol (PLAN-PROTOCOL)
**Node ID:** CISEM-ARCH-00190 | **Type:** ARCH | **Status:** LIVE (ratified by Governor foundational decree 2026-07-18; plan-gate LIVE)  
**depth_level:** L1 | **Position in schema:** T-SYS, planning-governance layer  
**tags:** [planning-domain, protocol, plan-creation, double-ratification, ssot]  
**Goal:** The SSOT for "how a DRAFT becomes a PLAN" — defines the double-ratification path (Opus soundness + Governor authority), the gate structure, and the PLAN-WIZARD that executes it.  
**Governing corespine:** CS-CREATION-001  
**SSOT declaration:** This protocol is the ONE authoritative source for plan creation; the PLAN-WIZARD mirrors it 1:1 (I10).

**Existing-First exemption (§3.2b, I19):** Governance protocol definition — not a creating-plan. This document defines the plan lifecycle process; it proposes no new nodes or files of its own. The PLAN-WIZARD skill it references was created under BP-0007. Exempt from Existing-First: process/protocol specifications are governance definitions analogous to the "open-questions" class, not artifact creation proposals.

## Pocket Declaration
- **reasoning_scope:** define the complete plan lifecycle (DRAFT → PLAN → implementation)
- **inherited_constraints:** Axioms A1–A7; Doctrine D1–D6; ARCH-00340 meta-protocol structure; I10 (wizard mirrors); I19 (no parallel protocols)
- **output_contract:** full planning gate structure, double-ratification path, Planning Status enum, integration with PLAN-WIZARD
- **ai_cannot:** self-ratify a plan (only Opus + Governor can); leave ambiguity about who decides consensus
- **recorded_at:** 2026-07-18
**Independent Verifier:** [pre-P5 legacy — grandfathered 2026-07-18; assign on next revision]

---

## 1. Planning Status Enum (distinct from Node Status)

```
AWAITING-BUILDER-REVIEW
  ↓
COMMENTS-RECEIVED
  ↓
CONSENSUS-REACHED
  ↓
IN-PROGRESS
  ↓
COMPLETE
  ↓
SUPERSEDED (any state can transition here)
```

**Definition:**
- A node's Status (DRAFT/PROPOSED/DECLARED/RATIFIED) tracks node maturity
- Planning Status tracks the plan's REVIEW lifecycle — independent axes
- A plan can be SUPERSEDED while its node stays RATIFIED (separate concerns)

---

## 2. Plan Creation Location & Structure

**WHERE:** Every plan created in `dna/planning/`, never elsewhere.

**FILE FORMAT:** `CISEM-ARCH-{SEQ}-{slug}.md` per naming-registry.yaml (registered, sequenced).

**WHAT A PLAN CONTAINS:**
```
[ ] Header (Node ID, Status, Planning Status, depth_level, tags, goal, corespine, pocket)
[ ] Executive Summary (1 paragraph: what problem, why now, what changes)
[ ] The Rule (executable procedure, not prose; step-by-step numbered)
[ ] What DOES change (explicit list: files created, fields updated, commands run)
[ ] What DOES NOT change (explicit boundary: what stays stable, what's out of scope)
[ ] Dependencies (blocks on / unblocks for: lists other plans or nodes)
[ ] Ratification Path (Opus soundness review → Governor authority decree)
[ ] Self-compliance (against ARCH-00230 checklist + this protocol)
[ ] Path Rejection Declaration (CLAUDE.md §2.8: what was rejected and why)
[ ] CAL reference (CISEM-ARCH-00390): which autonomic trigger(s) enforce this plan — pre-commit / SessionStart / PreCompact
[ ] Change log (version + date + author + what changed)
```

---

## 3. Double-Ratification Path (The Gate)

A plan becomes valid and ratified through a TWO-STAGE process (never one-stage):

### STAGE 0: ITERATIVE DRAFT-REVIEW LOOP (prevention-during-planning — Governor 2026-07-18)
BEFORE soundness (Stage 1), every plan DRAFT runs iterative review passes — catching improvements +
preventions while they are CHEAP (planning time), not in implementation/audit (expensive). Each pass:
1. **Haiku** enumerates gaps / risks / duplication / unstated-assumptions in the draft (evidence only, `{finding, file:line}`).
2. **Sonnet** structures the findings into concrete improvements + prevention candidates.
3. **Opus** judges each (default-refute), folds accepted improvements into the draft, routes preventions (D3/D4).
4. **Repeat** until a full pass yields NO new material finding (CONVERGED) OR max K passes (default K=3, residuals disclosed).
Every pass LOGS its improvements + preventions to the plan's change log + `dna/learning-registry/` (the loop learns).
A plan may NOT enter Stage 1 until the loop has CONVERGED. **Shift-left value:** a defect caught here costs a
planning pass; the same defect in implementation/audit costs a rebuild. Iterate on the DRAFT, not the build.

**Planning Status after Stage 0:** COMMENTS-RECEIVED (draft improved through the loop).

### STAGE 1: OPUS SOUNDNESS REVIEW
**Opus (cisem-opus-pe) reviews the plan as JUDGE:**
- Does the plan faithfully execute a ratified corespine goal?
- Does it follow ARCH-00340 meta-protocol structure?
- Are all dependencies correctly mapped (blocks-on, unblocks-for)?
- Does it respect invariants I1–I18 + I19 (no parallel protocols)?
- Are all truth-fields clearly delegated (not assumed)?
- **Opus verdict:** SOUND (proceed to Stage 2) or UNSOUND (return for revision)

**Planning Status after Stage 1:** CONSENSUS-REACHED (Opus agrees on soundness)

### STAGE 2: GOVERNOR AUTHORITY RATIFICATION
**Governor (Yariv Fink) decrees the plan:**
- Does this align with project priorities + timeline?
- Is the resource/authority allocation acceptable?
- Are the outcomes measurable and acceptable?
- **Governor verdict:** RATIFIED (plan is binding, proceed to implementation) or DEFERRED/REJECTED (plan is parked or cancelled)

**Planning Status after Stage 2:** COMPLETE (ratified and ready) or SUPERSEDED (cancelled/replaced)

---

## 4. Implementation Protocol

**ONLY when Planning Status = COMPLETE (both Opus + Governor have ratified):**
- Implementation begins (Sonnet executes, or lower tiers per tier-routing)
- Each implementation step is tracked against the plan (no ad-hoc deviations)
- Completion is verified against the plan's "what changes" list

**NO EXCEPTION:** A plan at AWAITING-BUILDER-REVIEW, COMMENTS-RECEIVED, or CONSENSUS-REACHED is NOT binding. Implementation cannot start.

---

## 5. Plan Lifecycle & Transitions

```
AWAITING-BUILDER-REVIEW
  ↓ (Builder reads, comments)
COMMENTS-RECEIVED
  ↓ (Brain responds, alignment check)
CONSENSUS-REACHED
  ↓ (Opus reviews: soundness verdict)
  └─→ UNSOUND? Return to COMMENTS-RECEIVED (revise)
  └─→ SOUND? Proceed to next

(implicit: Governor review period)
  ↓
IN-PROGRESS
  ↓ (implementation running, tracked against plan)
COMPLETE
  ↓ (all steps done, outcomes achieved)

OR at any point:
  ↓
SUPERSEDED
  ↓ (plan cancelled, replaced, deferred)
```

---

## 6. PLAN-WIZARD Integration

Every plan is created / reviewed / ratified through the **PLAN-WIZARD** skill (`.claude/skills/cisem-plan/SKILL.md`).

The wizard MIRRORS this protocol exactly:
- Wizard Step 1 → Protocol §2 (location, structure)
- Wizard Step 2 → Protocol §3 (Opus soundness gate)
- Wizard Step 3 → Protocol §4 (Governor ratification gate)
- Wizard Step 4 → Protocol §5 (implementation tracking)

**RULE (I10):** The wizard and protocol have ONE SSOT (this document). The wizard is its runnable form. They must never diverge.

---

## 7. Special Cases

### Raw Capture (IBD) — EXEMPT from double-ratification
A Governor/Opus PARK-BY-DEMAND capture (dna/ibd/IBD-*.md) is exempt: it's a raw thought, not a plan. When promoted from IBD → plan, it goes through §3–5 above.

### SWIFT-Safe Extraction — EXEMPT from double-ratification
A zero-blast extraction (e.g., "copy this snippet to that file") is exempt if it carries no dependencies. It's not a plan, it's a task.

### Refinement Loop — Within CONSENSUS-REACHED
Revisions during COMMENTS-RECEIVED → CONSENSUS-REACHED loop do NOT require re-ratification; they're part of the consensus process.

---

## Does NOT cover
- Node-level structure (ARCH-00008)
- Implementation tracking / audit (separate post-plan protocol)
- IBD capture protocol (CLAUDE.md §2.6)

## Self-Compliance (ARCH-00230 checklist)
✓ Header (ID, Type, Status, depth_level, tags, goal, corespine, pocket)  
✓ Why-standalone (SSOT for plan creation; decoupled from node creation)  
✓ Rule-as-procedure (§2–7 define the executable protocol)  
✓ Does-NOT-cover (listed above)  
✓ Role/Who-serving (Sonnet / Opus / Governor in planning cycle)  
✓ Self-compliance (this section)

## Path Rejection Declaration (CLAUDE.md §2.8)
- ❌ Rejected: single-stage ratification (history shows single-stage reviews are missed; double-stage enforces rigor)
- ❌ Rejected: implementation before COMPLETE status (plans at earlier stages are binding promises, not yet approved)
- ❌ Rejected: wizard that interprets protocol differently (I10 — mirror, not independent)

## Change log
- v0.1 — earlier: Planning Status enum + basic protocol (PROPOSED status)
- v1.0 — 2026-07-18: Enhanced into full PLAN-PROTOCOL (Opus-directed, BP-0007). Double-ratification path, gate structure, PLAN-WIZARD integration. Status: PROVISIONAL-ACTIVE (draft-in-use, audit-flagged until ratified)
