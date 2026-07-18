# /cisem-meta — The Meta-Wizard (protocol-creation guide, implements ARCH-00340)
**Type:** Claude Code Skill | **Tier:** Opus (drafts protocols); Sonnet (builds wizards per protocols)  
**Goal:** Guide creation of ANY CISEM protocol through the meta-protocol structure (ARCH-00340), so protocols stop being ad-hoc.

---

## Pocket Declaration (AI Behavior §3.3)
- **reasoning_scope:** guide protocol creation through ARCH-00340 §1 checklist (identity, goal, rule, does-not-cover, SSOT, pocket, wizard-ref)
- **inherited_constraints:** ARCH-00340 meta-protocol, Axioms A1–A8, Doctrine D1–D6, I10 (protocol is SSOT, wizard mirrors it), I19 (no parallel protocols)
- **output_contract:** a protocol skeleton following ARCH-00340 §1 checklist exactly, with all required sections, ready for foundational decree (root) or double-ratification (non-root)
- **ai_cannot:** self-ratify a protocol; decide which protocols need foundational decree; assume a protocol is CORE from one example
- **recorded_at:** 2026-07-18
- **cal_reference:** CISEM-ARCH-00390 — enforcement fires mechanically; run `bash dna/checks/plan-audit.sh` and confirm [ZF] ACHIEVED before any done claim.

---

## Invocation
```
/cisem-meta protocol_name="..." goal="..." rule_scope="..." 
  [is_root_candidate=true] [wizard_name="..."]
```

Returns: a protocol skeleton following ARCH-00340, ready for Opus review + Governor decree.

---

## META-WIZARD FLOW (implements ARCH-00340 §1, the 7-item checklist)

### STEP 1: PROTOCOL IDENTITY (ARCH-00340 §1.1)
**Ask the Designer:**

```
[ ] Protocol name: what does this protocol govern? 
    (e.g., "plan creation," "node schema," "layer-2 validation")

[ ] Protocol type: is this a ROOT protocol or a regular protocol?
    ROOT (foundational): META-PROTOCOL, META-WIZARD only → ratified by Governor decree
    REGULAR: most protocols → double-ratified (Opus soundness + Governor authority)

[ ] File location: dna/protocols/CISEM-ARCH-{SEQ}-{slug}.md
    (where SEQ comes from naming-registry.yaml ARCH next_seq)

[ ] Header (ARCH-00008 format):
    - Node ID: (auto-assign from naming-registry)
    - Type: ARCH
    - Status: PROVISIONAL-ACTIVE
    - depth_level: L1 / L2
    - tags: [protocol, ...]
    - goal: (from below)
    - governing corespine: CS-CREATION-001
    - Pocket Declaration: (reasoning_scope, inherited_constraints, output_contract, ai_cannot, recorded_at)
```

### STEP 2: PROTOCOL GOAL (ARCH-00340 §1.2)
**Ask: What does this protocol achieve?**

```
[ ] Goal (measurable): state what this protocol accomplishes.
    Examples:
    - "Define how ANY plan becomes ratified (PLAN-PROTOCOL)"
    - "Standardize Sonnet→Opus handoffs (ARCH-00350)"
    - "Define how ANY protocol is created (META-PROTOCOL)"

[ ] Why it exists: what problem does it solve?
    (Necessary for §1 "Why" section in the protocol file)

[ ] Governing corespine: which corespine does this serve?
    (Almost always CS-CREATION-001, unless it's part of a different corespine's domain)
```

### STEP 3: THE RULE (ARCH-00340 §1.3)
**Ask: What is the executable procedure?**

```
This is the CORE of the protocol. It must be stated as numbered STEPS, not prose.

[ ] Is this rule a CHECKLIST (items to verify)?
    Format: [ ] item 1, [ ] item 2, ... with YES/NO or PASS/FAIL branches
    Example: ARCH-00230 (creation-time checklist)

[ ] Is this rule a SEQUENCE (steps that happen in order)?
    Format: STEP 1 → STEP 2 → STEP 3, with decision gates
    Example: PLAN-PROTOCOL (draft → review → ratification)

[ ] Is this rule a GATE (a decision point)?
    Format: condition → YES branch / NO branch
    Example: Threshold routing (PROCESS-NOW / QUEUE / PARK / REJECT)

[ ] State the full rule inline (not external reference).
    Each step must be EXECUTABLE (someone could follow it without guessing context).
```

### STEP 4: PROTOCOL SCOPE — "DOES NOT COVER" (ARCH-00340 §1.4)
**Ask: What is explicitly OUT OF SCOPE?**

```
[ ] Name 1–3 things this protocol does NOT define.
    Examples from real protocols:
    - ARCH-00190 DOES NOT cover: implementation tracking, IBD capture protocol
    - ARCH-00230 DOES NOT cover: corespine-level templates, file-storage logistics
    - ARCH-00340 DOES NOT cover: plan creation specifically (PLAN-PROTOCOL), node schema (ARCH-00008)

[ ] Why these boundaries matter (keep rigidity out, D6).
    (Necessary so this protocol doesn't bloat to cover everything.)
```

### STEP 5: SSOT DECLARATION (ARCH-00340 §1.5)
**Ask: Is this THE ONE source of truth for its concern?**

```
[ ] SSOT Claim: "This protocol is the ONE authoritative source for {concern}."
    Examples:
    - "This is the ONE source for how plans are ratified"
    - "This is the ONE source for node field structure"
    - "This is the ONE source for naming + numbering"

[ ] Mirror Rule (I10): If there's a wizard or skill that implements this protocol,
    it MUST mirror the protocol exactly (1:1 mapping).
    - What is the wizard name? (e.g., /cisem-plan, /cisem-meta)
    - The wizard is DERIVED from the protocol; the protocol is SSOT.

[ ] Conflict Resolution: "On conflict with [other protocol/doc], THIS protocol wins."
    (Establishes dominance; necessary for I10 audit to work.)
```

### STEP 6: POCKET DECLARATION (ARCH-00340 §1.6)
**Ask: What are the reasoning scope + constraints + output?**

```
Fill out the Pocket Declaration inline (5 fields):

[ ] reasoning_scope: What decisions does this protocol make?
    (e.g., "define plan creation lifecycle", "establish naming authority")

[ ] inherited_constraints: What hard-limits come from above?
    (List axioms, doctrine, other protocols this serves under)

[ ] output_contract: What does a creation that follows this protocol deliver?
    (e.g., "a plan that passes §3 checks", "a node that follows ARCH-00008")

[ ] ai_cannot: What is explicitly OUT OF SCOPE for AI?
    (e.g., "cannot self-ratify", "cannot decide what is CORE vs INSTANCE")

[ ] recorded_at: (today's date)
```

### STEP 7: SELF-COMPLIANCE CHECK (ARCH-00340 §1.7)
**Ask: Does the protocol follow its own rules + ARCH-00230?**

```
[ ] ARCH-00230 checklist (§3.3 of the protocol file):
    [ ] Header present + complete
    [ ] Goal (measurable)
    [ ] Governing corespine
    [ ] Why-standalone (this section in the protocol)
    [ ] Rule-as-procedure (§3 fully stated)
    [ ] Does-NOT-cover (explicit boundaries)
    [ ] Role/Who-serving/Pocket
    [ ] Self-compliance (this check)

[ ] Meta-protocol §1 checklist (this wizard's own checklist):
    [ ] Identity ✓
    [ ] Goal ✓
    [ ] Rule ✓
    [ ] Does-NOT-cover ✓
    [ ] SSOT declaration ✓
    [ ] Pocket Declaration ✓
    [ ] Self-compliance ✓

If ANY checkbox is empty: go back and fill it.
No protocol ships without all 7 items.
```

---

## PROTOCOL RATIFICATION PATH (embedded in wizard output)

**After wizard completes, the protocol goes through:**

### FOR ROOT PROTOCOLS (META-PROTOCOL, META-WIZARD only):
```
PROVISIONAL-ACTIVE (draft) → Governor foundational decree → RATIFIED, wiring-state LIVE
```

### FOR REGULAR PROTOCOLS:
```
PROVISIONAL-ACTIVE (draft) 
  ↓ (Opus soundness review)
CONNECTED (Opus verified sound)
  ↓ (Governor authority decree)
RATIFIED, wiring-state LIVE (both approved)
```

---

## WIZARD-PROTOCOL MIRROR (I10 Verification)

| Wizard Step | ARCH-00340 §1 Item | Verification |
|---|---|---|
| Step 1: Identity | §1.1 (identity, header, file location) | Protocol header is complete |
| Step 2: Goal | §1.2 (goal + why exists) | Goal is measurable; exists section present |
| Step 3: Rule | §1.3 (executable procedure) | Rule is numbered steps, not prose |
| Step 4: Does-NOT-cover | §1.4 (scope boundary) | Explicit "does NOT cover" section filled |
| Step 5: SSOT | §1.5 (ONE source + wizard pairing) | SSOT claim + wizard reference present |
| Step 6: Pocket | §1.6 (pocket declaration) | All 5 fields (reasoning_scope, etc.) filled |
| Step 7: Self-compliance | §1.7 (checklist pass) | Both ARCH-00230 + meta-checklist passed |

**Rule (I10):** Every ARCH-00340 §1 item has a wizard step. They map 1:1. Protocol is SSOT; wizard is derived.

---

## What This Wizard Does NOT Do

❌ Does NOT self-declare a protocol "ratified"  
❌ Does NOT decide if a protocol should be ROOT (only flags candidate)  
❌ Does NOT create parallel protocols (I19 — Existing-First required)  
❌ Does NOT skip any of the 7 items (all required)  
❌ Does NOT let a wizard diverge from its protocol (I10)

---

## Change log
- v1.0 — 2026-07-18: Sonnet draft (via BP-0007). Implements ARCH-00340 §1 checklist (7 items). Status: PROVISIONAL-ACTIVE (draft-in-use, awaiting Opus verification).
