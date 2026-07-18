# /cisem-plan — The Plan Creation Wizard (mirrors ARCH-00190)
**Type:** Claude Code Skill | **Tier:** Sonnet (builds) + Opus (verifies)  
**Goal:** Auto-guide creation of any CISEM plan through the double-ratification path (Opus soundness + Governor authority).

---

## Pocket Declaration (AI Behavior §3.3)
- **reasoning_scope:** guide plan creation through full lifecycle (DRAFT → CONSENSUS-REACHED → COMPLETE)
- **inherited_constraints:** ARCH-00190 (PLAN-PROTOCOL, SSOT); Axioms A1–A7; Doctrine D1–D6; I10 (mirror protocol, never diverge)
- **output_contract:** a plan skeleton following ARCH-00190 structure exactly, with every section filled, ready for Opus soundness review
- **ai_cannot:** self-ratify a plan; decide consensus (only Opus + Governor can); write as if implementation is already approved
- **recorded_at:** 2026-07-18

---

## Invocation
```
/cisem-plan goal="..." dependencies="..." what_changes="..." what_not_changes="..."
```

Returns: a draft plan skeleton following ARCH-00190 structure, ready for review.

---

## PLAN-WIZARD FLOW (mirrors ARCH-00190 §2–5 exactly, 1:1)

### WIZARD STEP 1 ↔ PROTOCOL §2 (Location & Structure)
**Ask the Creator:**
```
[ ] Plan goal: what does this plan accomplish? (one sentence, measurable)
[ ] Plan scope: does it fit in <3500 words / <200 lines? (size gate)
    NO → suggest breaking into sub-plans
    YES → continue

[ ] Create plan file: dna/planning/CISEM-ARCH-{SEQ}-{slug}.md
    (where SEQ comes from naming-registry.yaml ARCH next_seq)

[ ] Fill plan header (ARCH-00008 format):
    - Node ID: (auto-assign from naming-registry)
    - Type: ARCH
    - Status: PROVISIONAL-ACTIVE
    - Planning Status: AWAITING-BUILDER-REVIEW
    - depth_level: L1 / L2 / L3
    - tags: [planning-domain, ...]
    - goal: (from above)
    - governing corespine: CS-CREATION-001
    - Pocket Declaration: (reasoning_scope, inherited_constraints, output_contract, ai_cannot, recorded_at)

[ ] Fill sections (§2):
    - Executive Summary (1 paragraph)
    - The Rule (numbered steps, executable)
    - What DOES change (explicit list)
    - What DOES NOT change (explicit boundary)
    - Dependencies (blocks-on, unblocks-for)
    - Self-compliance (against ARCH-00230)
    - Path Rejection Declaration (what was rejected, why)
    - Change log (v1.0 — date, author, what was created)
```

### WIZARD STEP 2 ↔ PROTOCOL §3 STAGE 1 (Opus Soundness Review Gate)
**Wizard asks: Is this plan SOUND (ready for Opus review)?**

```
Checklist before presenting to Opus:
[ ] Plan follows ARCH-00190 structure (all sections filled)
[ ] Goal is measurable and achievable
[ ] All dependencies are named (blocks-on, unblocks-for)
[ ] "What changes" is specific (files, fields, commands)
[ ] "What does NOT change" is explicit (boundaries clear)
[ ] No assumptions about implementation already being approved
[ ] Self-compliance filled (the plan follows its own rules)
[ ] Path Rejection Declaration present (rejected alternatives stated)

UPDATE Planning Status: AWAITING-BUILDER-REVIEW

SEND TO OPUS: [plan file] + request soundness review
```

**Opus reviews & decides:**
```
OPUS VERDICT OPTIONS:
1. SOUND → Planning Status: CONSENSUS-REACHED (proceed to Wizard Step 3)
2. UNSOUND → return plan to creator for revision (stay at AWAITING-BUILDER-REVIEW)
```

### WIZARD STEP 3 ↔ PROTOCOL §3 STAGE 2 (Governor Authority Ratification Gate)
**Only if Opus verdict = SOUND:**

```
Planning Status: CONSENSUS-REACHED (Opus agreed on soundness)

Wizard asks: Ready for Governor ratification?
[ ] Is this plan aligned with project priorities?
[ ] Are resources/timeline acceptable?
[ ] Are outcomes measurable + acceptable?

UPDATE Planning Status: IN-PROGRESS (Governor is reviewing / has ratified)

SEND TO GOVERNOR: [plan file] + request authority decree
```

**Governor decrees & decides:**
```
GOVERNOR VERDICT OPTIONS:
1. RATIFIED → Planning Status: COMPLETE (plan is binding, proceed to implementation)
2. DEFERRED → Planning Status: SUPERSEDED (plan is parked, can be resurrected)
3. REJECTED → Planning Status: SUPERSEDED (plan is cancelled)
```

### WIZARD STEP 4 ↔ PROTOCOL §5 (Implementation Tracking)
**Only if Planning Status = COMPLETE (both Opus + Governor approved):**

```
Implementation can now begin per the plan.

For each step in the plan's "The Rule" section:
[ ] Step completed? (mark done in plan change log)
[ ] Step followed as written? (no ad-hoc deviations)
[ ] Outcome matches plan expectation? (verify)

VERIFY: all steps in "What changes" list are complete
VERIFY: "What does NOT change" boundaries respected
```

---

## What This Wizard Does NOT Do

❌ Does NOT self-ratify a plan (Opus rules, Governor decrees)  
❌ Does NOT decide consensus (only asks readiness questions)  
❌ Does NOT implement the plan (only guides creation + tracking)  
❌ Does NOT skip Opus soundness review  
❌ Does NOT skip Governor ratification  
❌ Does NOT diverge from ARCH-00190 structure (mirror rule, I10)

---

## MIRROR VERIFICATION (I10 — Wizard ↔ Protocol 1:1 mapping)

| Wizard Step | Protocol Section | Mapping |
|---|---|---|
| Step 1: Location & Structure | §2: Plan Creation Location & Structure | Ask for location, file format, all required sections |
| Step 2: Opus Soundness Gate | §3 STAGE 1: Opus Soundness Review | Checklist before Opus review; Opus verdict |
| Step 3: Governor Ratification Gate | §3 STAGE 2: Governor Authority Ratification | Ask readiness questions; Governor decree |
| Step 4: Implementation Tracking | §5: Implementation Protocol | Verify steps completed, outcomes match, boundaries respected |

**Verification rule (I10):** For every clause in ARCH-00190 §2–5, there is a corresponding wizard step. No protocol clause is missed; no wizard step adds requirements not in the protocol.

---

## Change log
- v1.0 — 2026-07-18: Sonnet draft (via BP-0007). Mirrors ARCH-00190 PLAN-PROTOCOL exactly (4 steps ↔ §2, §3.1, §3.2, §5). Status: PROVISIONAL-ACTIVE (draft-in-use, awaiting Opus verification).
