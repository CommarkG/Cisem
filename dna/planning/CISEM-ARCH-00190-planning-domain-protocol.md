# Planning Domain Protocol (PLAN-PROTOCOL)
**Node ID:** CISEM-ARCH-00190 | **Type:** ARCH | **Status:** LIVE (ratified by Governor foundational decree 2026-07-18; plan-gate LIVE)  
**depth_level:** L1 | **Position in schema:** T-SYS, planning-governance layer  
**tags:** [planning-domain, protocol, plan-creation, double-ratification, ssot]  
**Goal:** The SSOT for "how a DRAFT becomes a PLAN" — defines the double-ratification path (Opus soundness + Governor authority), the gate structure, and the PLAN-WIZARD that executes it.  
**Governing corespine:** CS-CREATION-001  
**SSOT declaration:** This protocol is the ONE authoritative source for plan creation; the PLAN-WIZARD mirrors it 1:1 (I10).
**Amended by:** CISEM-ARCH-00401 (Governor-ratified 2026-07-20) — applied the 12 ordered enhancements below (see
Change log v1.1). Status stays **LIVE** throughout — this line + the header ARE the single truth; the v1.0
changelog's creation-time "PROVISIONAL-ACTIVE" wording is corrected in the changelog itself (no two-truth field, I10).
**Size-gate exception (§3.6, documented):** this file exceeds 200 lines after the ARCH-00401 amendment (12 integral
Governor-ratified enhancements to a single core protocol). Splitting a live core protocol mid-amendment was not
requested and would fragment the SSOT the enhancements themselves strengthen — kept whole, flagged per §3.6's
"documented exception," not "exceed and flag" silently.

**Existing-First exemption (§3.2b, I19):** Governance protocol definition — not a creating-plan. This document defines the plan lifecycle process; it proposes no new nodes or files of its own. The PLAN-WIZARD skill it references was created under BP-0007. Exempt from Existing-First: process/protocol specifications are governance definitions analogous to the "open-questions" class, not artifact creation proposals.

## Pocket Declaration
- **reasoning_scope:** define the complete plan lifecycle (DRAFT → PLAN → implementation)
- **inherited_constraints:** Axioms A1–A8; Doctrine D1–D6; ARCH-00340 meta-protocol structure; I10 (wizard mirrors); I19 (no parallel protocols)
- **output_contract:** full planning gate structure, double-ratification path, Planning Status enum, integration with PLAN-WIZARD
- **ai_cannot:** self-ratify a plan (only Opus + Governor can); leave ambiguity about who decides consensus
- **recorded_at:** 2026-07-18
**Independent Verifier:** `cisem-opus-pe` (cold default-refute pass, author≠verifier per P5) — assigned by
CISEM-ARCH-00401 Enhancement 4 (Governor-ratified 2026-07-20), closing the prior pre-P5-legacy placeholder.

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
[ ] Tier-Routing Declaration (which steps → Haiku/Sonnet/Opus/fable + why, per CLAUDE.md §3.0) — ARCH-00401 Enh.1
[ ] Executive Summary (1 paragraph: what problem, why now, what changes)
[ ] Anti-Scatter Ordering (rank the plan's own steps by significance vs the compasses — goal/DNA/active spine;
    sequence infrastructure/completion-first, park the peripheral — CLAUDE.md §2 Principle 16) — ARCH-00401 Enh.10
[ ] The Rule (executable procedure, not prose; step-by-step numbered)
[ ] Tags + Statuses on EVERY node this plan creates (VOC-00001/VOC-00002 — not only the plan's own header) — ARCH-00401 Enh.2
[ ] Per-File Alignment Table — for every file created/modified: name · number (via the ONE naming-registry gate)
    · schema placement (SCHEMA-00001) · tag (VOC-00001) · status (VOC-00002) — ARCH-00401 Enh.3
[ ] What DOES change (explicit list: files created, fields updated, commands run)
[ ] What DOES NOT change (explicit boundary: what stays stable, what's out of scope)
[ ] Definition-of-Done reference (dna/checks/definition-of-done.md — cited, not re-derived; verified at §4
    implementation gate) — ARCH-00401 Enh.5
[ ] Propagation Declaration — how any rule/nuance change reaches ALL surfaces BY-REFERENCE (never copy) + which
    generated views regenerate — ARCH-00401 Enh.6
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

**Two-model verify (ARCH-00401 Enh.7):** the Opus judge step (3, above) applies TWO orthogonal lenses per
`persona-collaborator.md` `## DEVELOPMENT DISCIPLINE` — protocol-compliance × content-correctness, never a
single-lens read. Each finding is classified **NEW-DRIFT** (a genuinely new gap this pass surfaces) vs
**ALREADY-RESOLVED** (a finding a prior pass already folded in) — the classifier stops closed findings from
being re-litigated as fresh, and stops a stale-context pass from missing what actually changed.

**Synergetic Decision Protocol (SDP) hook (ARCH-00401 Enh.9):** when a pass surfaces a genuine polarity/conflict
inside the plan (two real values that appear to compete), route it: assess → name the polarities → surface
edge-options → ask the synergy question ("what holds both?", A9) — threshold-gated per CS-THRESHOLD-001 (not
every disagreement triggers this; SDP is referenced here by name as a to-be-built protocol, not yet a canonical
file — no content is inlined here, A8).

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
- Is the plan's Independent Verifier field filled with a NAMED verifier distinct from the author (P5,
  author≠verifier — not left as a placeholder)? — ARCH-00401 Enh.4
- Is the plan readable COLD, zero conversation dependency (node-as-context-carrier)? Where it holds a
  complementary-facet decision, is each facet SINGLY-HOMED + CRISP per the A9 guardrail (never mushed,
  never asserted-consistent outside a checkable language) — CLAUDE.md §2.4 A9? — ARCH-00401 Enh.11
- **Opus verdict:** SOUND (proceed to Stage 2) or UNSOUND (return for revision)

**Planning Status after Stage 1:** CONSENSUS-REACHED (Opus agrees on soundness)

### STAGE 1.5: FABLE MENTOR GATE (ARCH-00401 Enhancement 8 — OPTIONAL, human-ratification-gated, never solo)
AFTER Opus has prepared its Stage 1 verdict with Haiku + Sonnet + the best available insights, a plan MAY route
through one final root-principle/permanence "fable mentor" pass — a check against first principles and
long-term durability, distinct from Stage 1's mechanical/structural soundness check.
- **Never automatic, never solo:** this stage REQUIRES explicit human (Governor) ratification to ACTIVATE for
  a given plan, invoked case-by-case — it is not a standing default every plan runs.
- **Cost-disclosed:** the activation REQUEST must state a token-consumption ESTIMATE (persona `## DEVELOPMENT
  DISCIPLINE` cost-routing) before the Governor decides.
- **Additive, not blocking:** if NOT activated, the plan proceeds Stage 1 → Stage 2 unchanged.
- Planning Status is UNCHANGED by this stage alone — it stays CONSENSUS-REACHED (from Stage 1) until Stage 2,
  whether or not Stage 1.5 ran.

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
- Implementation follows the plan's OWN Tier-Routing Declaration (§2) — no silent re-routing (CLAUDE.md §3.0;
  ARCH-00401 Enh.1)
- Each implementation step is tracked against the plan (no ad-hoc deviations)
- Completion is verified against the plan's "what changes" list AND against `dna/checks/definition-of-done.md`
  (the DoD gate) — "done" means wired + propagated + hooked + pushed + verified, or an honest NOT-YET-WIRED,
  never "produced" alone (ARCH-00401 Enh.5)

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
**AI-default guard (Governor decree 2026-07-21, parked [[IBD-0028-wide-view-ask-scope-ai-default]]):** WIDE-VIEW DEFAULT + ASK-SCOPE-BEFORE-EXPANDING. A plan PERCEIVES the whole class/scope a reported issue implies (never just the pointed-at instance; measure the objective standard), but the plan's ACTION scope is CONFIRMED with the human before expanding the blast — *see the whole, act on the agreed part.* First-cut pointer; deep integration pending the Governor's later processing.


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
- v1.0 — 2026-07-18: Enhanced into full PLAN-PROTOCOL (Opus-directed, BP-0007). Double-ratification path, gate
  structure, PLAN-WIZARD integration. Status AT CREATION TIME: PROVISIONAL-ACTIVE (draft-in-use, audit-flagged
  until ratified) — this was accurate THEN; it was SUPERSEDED by the Governor foundational decree the same day
  (2026-07-18), which the header has stated since (`Status: LIVE`). This line is corrected 2026-07-20
  (CISEM-ARCH-00401 Enh.12) to remove the two-truth contradiction — the header is the ONE current-status field (I10).
- v1.1 — 2026-07-20 (Sonnet STRUCTURING tier, executing CISEM-ARCH-00401, Governor-ratified 2026-07-20): applied
  the 12 ordered enhancements — Tier-Routing Declaration (§2/§4), per-node tags+statuses (§2), Per-File Alignment
  Table (§2), Independent Verifier filled (header/§3 Stage 1), Definition-of-Done reference (§2/§4), Propagation
  Declaration (§2), two-model Stage-0 verify + NEW-DRIFT-vs-ALREADY-RESOLVED classifier (§3 Stage 0), Synergetic
  Decision Protocol hook (§3 Stage 0), new Stage 1.5 fable mentor gate (§3), anti-scatter ordering requirement
  (§2), node-as-context-carrier + A9 soundness criteria (§3 Stage 1), header/changelog status contradiction
  resolved (v1.0 entry above, this entry). Status: LIVE (unchanged — now internally consistent). Independent
  Verifier: `cisem-opus-pe`. `.claude/skills/cisem-plan/SKILL.md` updated in the same pass to keep the I10 mirror.
