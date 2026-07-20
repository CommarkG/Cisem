# /cisem-plan — The Plan Creation Wizard (mirrors ARCH-00190)
**Type:** Claude Code Skill | **Tier:** Sonnet (builds) + Opus (verifies)  
**Goal:** Auto-guide creation of any CISEM plan through the double-ratification path (Opus soundness + Governor authority).
**Parent meta-root:** ARCH-00340 (meta-protocol — the root that every protocol/wizard/plan flows through; ARCH-00396 Phase B pointer).

**PERSONA (SSOT — load before acting):** dna/corespines/CS-AI-PROFILING-001/persona-collaborator.md — the Collaborator persona: L1 core always; L2 in an active process; L3 for complex/domain work. REFERENCE only, never copy (I10). Governor read-true 2026-07-20.

---

## Pocket Declaration (AI Behavior §3.3)
- **reasoning_scope:** guide plan creation through full lifecycle (DRAFT → CONSENSUS-REACHED → COMPLETE)
- **inherited_constraints:** ARCH-00190 (PLAN-PROTOCOL, SSOT); Axioms A1–A8; Doctrine D1–D6; I10 (mirror protocol, never diverge)
- **output_contract:** a plan skeleton following ARCH-00190 structure exactly, with every section filled, ready for Opus soundness review
- **ai_cannot:** self-ratify a plan; decide consensus (only Opus + Governor can); write as if implementation is already approved
- **recorded_at:** 2026-07-18
- **cal_reference:** CISEM-ARCH-00390 — enforcement fires mechanically; run `bash dna/checks/plan-audit.sh` and confirm [ZF] ACHIEVED before any done claim.

---
**tags:** [skill, creation, governance] | **Status:** PROVISIONAL-ACTIVE (in-use governance infrastructure; added by creation-gate audit 2026-07-20)

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
    - Independent Verifier: (named, distinct from author — P5; ARCH-00190 Enh.4)

[ ] Fill sections (§2, per ARCH-00190 — amended CISEM-ARCH-00401 2026-07-20):
    - Tier-Routing Declaration (which steps → Haiku/Sonnet/Opus/fable + why, CLAUDE.md §3.0)
    - Executive Summary (1 paragraph)
    - Anti-Scatter Ordering (rank steps by significance vs goal/DNA/active spine; infrastructure/completion-first,
      park the peripheral — CLAUDE.md §2 Principle 16)
    - The Rule (numbered steps, executable)
    - Tags + Statuses on EVERY node this plan creates (VOC-00001/VOC-00002 — not only the plan header)
    - Per-File Alignment Table (name · naming-registry number · schema placement SCHEMA-00001 · tag · status,
      for every file created/modified)
    - What DOES change (explicit list)
    - What DOES NOT change (explicit boundary)
    - Definition-of-Done reference (dna/checks/definition-of-done.md — cited, not re-derived)
    - Propagation Declaration (how a rule/nuance change reaches ALL surfaces BY-REFERENCE + which generated
      views regenerate)
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
[ ] Tier-Routing Declaration present + Anti-Scatter Ordering applied to the plan's own steps
[ ] All dependencies are named (blocks-on, unblocks-for)
[ ] "What changes" is specific (files, fields, commands)
[ ] "What does NOT change" is explicit (boundaries clear)
[ ] Tags + Statuses present for every created node; Per-File Alignment Table complete
[ ] Definition-of-Done referenced; Propagation Declaration present
[ ] No assumptions about implementation already being approved
[ ] Self-compliance filled (the plan follows its own rules)
[ ] Path Rejection Declaration present (rejected alternatives stated)
[ ] Independent Verifier field filled with a NAMED verifier distinct from the author (P5)
[ ] Plan is readable COLD (node-as-context-carrier); any complementary-facet decision is singly-homed + crisp (A9)

UPDATE Planning Status: AWAITING-BUILDER-REVIEW

SEND TO OPUS: [plan file] + request soundness review
```

**Opus reviews & decides:**
```
OPUS VERDICT OPTIONS:
1. SOUND → Planning Status: CONSENSUS-REACHED (proceed to Wizard Step 2.5 or Step 3)
2. UNSOUND → return plan to creator for revision (stay at AWAITING-BUILDER-REVIEW)
```

### WIZARD STEP 2.5 ↔ PROTOCOL §3 STAGE 1.5 (Fable Mentor Gate — OPTIONAL, human-ratification-gated)
**Only if the Governor explicitly activates this stage for THIS plan (never automatic, never solo):**
```
[ ] Activation request states a token-consumption ESTIMATE (cost-disclosed, persona cost-routing)
[ ] Governor ratifies activation → root-principle/permanence pass runs (Opus, informed by Haiku+Sonnet's Stage-1 material)
[ ] NOT activated → skip silently to Wizard Step 3 (this stage is additive, never a blocker)

Planning Status: UNCHANGED (stays CONSENSUS-REACHED whether or not this stage ran)
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
[ ] Implementation follows the plan's OWN Tier-Routing Declaration (no silent re-routing, CLAUDE.md §3.0)
[ ] Outcome matches plan expectation? (verify)

VERIFY: all steps in "What changes" list are complete
VERIFY: "What does NOT change" boundaries respected
VERIFY: against dna/checks/definition-of-done.md (DoD gate) — wired+propagated+hooked+pushed+verified,
        or an honest NOT-YET-WIRED, never "produced" alone
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
| Step 1: Location & Structure | §2: Plan Creation Location & Structure | Ask for location, file format, all required sections (incl. ARCH-00401 Tier-Routing/Anti-Scatter/Tags-Statuses/Alignment-Table/DoD-ref/Propagation) |
| Step 2: Opus Soundness Gate | §3 STAGE 1: Opus Soundness Review | Checklist before Opus review (incl. Independent Verifier filled + node-as-context-carrier/A9); Opus verdict |
| Step 2.5: Fable Mentor Gate | §3 STAGE 1.5: Fable Mentor Gate | Human-ratification-gated, cost-disclosed, optional/additive |
| Step 3: Governor Ratification Gate | §3 STAGE 2: Governor Authority Ratification | Ask readiness questions; Governor decree |
| Step 4: Implementation Tracking | §4/§5: Implementation Protocol | Verify steps completed (incl. Tier-Routing followed), outcomes match, boundaries respected, DoD gate passed |

**Verification rule (I10):** For every clause in ARCH-00190 §2–5, there is a corresponding wizard step. No protocol clause is missed; no wizard step adds requirements not in the protocol.

---

## Change log
- v1.0 — 2026-07-18: Sonnet draft (via BP-0007). Mirrors ARCH-00190 PLAN-PROTOCOL exactly (4 steps ↔ §2, §3.1, §3.2, §5). Status: PROVISIONAL-ACTIVE (draft-in-use, awaiting Opus verification).
- v1.1 — 2026-07-20: Sonnet STRUCTURING tier, executing CISEM-ARCH-00401 (Governor-ratified 2026-07-20) — re-synced
  to ARCH-00190 v1.1 (I10, no divergence). Added: Independent Verifier field to Step 1 header block; the 6 new §2
  plan-contents items (Tier-Routing Declaration, Anti-Scatter Ordering, Tags+Statuses-per-node, Per-File Alignment
  Table, DoD reference, Propagation Declaration) to Step 1; Independent-Verifier-filled + node-as-context-carrier/A9
  checks to Step 2; new Step 2.5 mirroring the new Stage 1.5 Fable Mentor Gate; Tier-Routing-followed + DoD-gate
  checks to Step 4; MIRROR VERIFICATION table updated (5 rows, was 4).
