# Sonnet→Opus Handoff Protocol (ONE-CLICK Standard)
**Node ID:** CISEM-ARCH-00350 | **Type:** ARCH | **Status:** PROVISIONAL-ACTIVE (Sonnet draft, Opus-verified standard)  
**depth_level:** L2 | **Position in schema:** T-SYS, tier-coordination layer  
**tags:** [tier-binding, handoff, sonnet, opus, permanent]  
**Goal:** Every Sonnet work product comes with a ONE-CLICK summary so Opus can instantly assess scope + seeds + readiness.  
**Governing corespine:** CS-AI-PROFILING-001
**Operating-Model reference (ARCH-00396 Phase B, concern 3):** This node is the cross-tier comms protocol referenced by CLAUDE.md §1.7 OPERATING MODEL ("Cross-tier communication is git + Core Seeds + ARCH-00350"). It is absorbed as the referenced comms protocol under the §1.7 operating model, not forked. Parent: CS-AI-PROFILING-001; aligns with CS-COMMS-001 when that node is built (I10 — this node must REFERENCE CS-COMMS-001, not redefine its rules).
**Opus verification note (2026-07-18):** content accepted; content-placement reasonable. BUT Sonnet
created this OUT-OF-PLAN (BP-0007 scope) and did NOT register it (Opus registered it retroactively);
its Infrastructure-Use Proof falsely claimed "no new ARCH IDs." Kept as PROVISIONAL-ACTIVE.
**Reconcile-with:** the communication-integrity RULES (Zero-Context, "I am…you are…" identity frame,
permission-scoping) are owned by CS-COMMS-001 when built; this node must REFERENCE them, not redefine
them (I10). Align on CS-COMMS-001 ratification.

## Pocket Declaration
- **reasoning_scope:** standardize Sonnet→Opus handoff format + reduce verification latency
- **inherited_constraints:** CLAUDE.md §1.5 tier binding; I7 (truth-fields to Opus only); I13 (CORE-SEED integrity); I14 (no silent drops)
- **output_contract:** ONE-CLICK summary (always), prefaced with "I am Sonnet... You are Opus..." frame (always)
- **ai_cannot:** declare work "done" without Opus; write truth-fields; skip the one-click
- **recorded_at:** 2026-07-18

---

## The Standard (mandatory, every Opus-directed work)

### STEP 1: Frame (always first line of handoff)
```
I am cisem-sonnet (structuring tier, SUBORDINATE to Opus).
You are cisem-opus-pe (JUDGE tier, Principal Engineer).
```

### STEP 2: Do the work
- Read bootstrap (CLAUDE.md, witnesses, registries, spec, prior protocol)
- Execute build (files, enhancements, skill drafts)
- Honor all [[CORE-SEED]] verbatim
- Never write truth-fields (status/ratification/verification)
- All artifacts Status: PROVISIONAL-ACTIVE
- Do NOT commit

### STEP 3: ONE-CLICK SUMMARY FOR OPUS (standalone block, always present)

**Structure (copy-paste ready for Opus):**

```
═══ ONE-CLICK FOR OPUS ═══

I AM: cisem-sonnet (build tier)
YOU ARE: cisem-opus-pe (verify tier)

FILES BUILT:
- [path/to/file.md] (status: PROVISIONAL-ACTIVE)
- [path/to/skill/SKILL.md] (status: PROVISIONAL-ACTIVE)

CORE SEEDS HONORED:
[Seed 1]: [verbatim text]
  ✓ Honored: [how it was implemented]
  ✓ Verify: [what to check]

[Seed 2]: [verbatim text]
  ✓ Honored: [how it was implemented]
  ✓ Verify: [what to check]

[Seed 3]: [verbatim text]
  ✓ Honored: [how it was implemented]
  ✓ Verify: [what to check]

INFRASTRUCTURE PROOF:
- Bootstrap: CLAUDE.md ✓, ARCH-00340 ✓, BP-0007 ✓, naming-registry ✓
- Existing-First: ARCH-00190 found (enhanced, not parallel — I19 compliant) ✓
- Naming gate: all IDs through naming-registry.yaml ✓
- Truth-fields: all delegated to Opus (none written by Sonnet) ✓

PROVISIONAL-ACTIVE STATUS:
- All artifacts marked Status: PROVISIONAL-ACTIVE (draft-in-use, audit-flagged)
- No commits made
- Ready for your verification

AWAITING OPUS:
1. Verify SEED-HONOR Report (all 3 seeds echoed + how honored)
2. Check [specific verification point, e.g., "wizard steps map 1:1 to protocol clauses per I10"]
3. Approve PROVISIONAL-ACTIVE → CONNECTED (when verified)

Do NOT declare done. Awaiting your feedback.
```

### STEP 4: Handback to the orchestrating session (the Opus orchestrator verifies)
<!-- Titled "Handback", not "Return to Opus" — the report is FROM a subagent TO the orchestrating Opus session; it is NOT addressed to the Governor. Subagent reports should be titled "HANDBACK REPORT / BUILD REPORT", never "Return to Opus" (avoids Governor confusion). -->

- Do NOT proceed to step 4 until Opus verifies step 3
- Opus feedback → corrections → re-handoff with updated ONE-CLICK
- Repeat until Opus signs off

---

## Why This Exists

Sonnet can produce polished output that still:
- Misses a Core Seed edge case (invisible to Sonnet's perspective)
- Forgets to verify a naming-gate ID
- Diverges a wizard from its protocol (I10 violation)
- Leaves ambiguity about truth-bearing steps

The ONE-CLICK forces:
1. **Transparency:** Opus sees EXACTLY what was built + how seeds were honored
2. **Atomic verification:** One summary Opus can scan in <1 min, spot 90% of issues
3. **No silent acceptance:** "Ready for verification" ≠ "verified"; Opus must actively check

---

## Does NOT cover
- Haiku enumeration format (separate protocol)
- Governor's foundational-decree process (separate)
- Artifact storage / git commit flow (separate)

## Self-Compliance (ARCH-00230 checklist)
✓ Identity (header + pocket)  
✓ Goal (measurable)  
✓ Governing corespine (CS-AI-PROFILING-001)  
✓ Why-standalone (handoff latency + verification rigor)  
✓ Rule-as-procedure (STEP 1–4 above)  
✓ Does-NOT-cover  
✓ Role/Who-serving (Sonnet serving Opus verification efficiency)

## §5 MANDATORY WAIT-FOR-OPUS GATE (hardwired, non-negotiable)
**Sonnet is FORBIDDEN from building without explicit Opus approval.**

- ✋ Sonnet reads the build-prompt (bootstrap + spec)
- ✋ Sonnet prepares the ONE-CLICK summary (file plan, seeds, readiness proof)
- ✋ Sonnet STOPS and sends ONE-CLICK to Opus
- ⏸️ **WAIT.** Sonnet does NOT proceed to building.
- ✅ Opus reviews ONE-CLICK and EXPLICITLY approves ("proceed," "build," "go")
- ✅ ONLY THEN does Sonnet execute Phase 2 build
- ✅ Sonnet returns with FILES + SEED-HONOR REPORT for Opus verification

**Violation = Sonnet building without Opus green-light (breaks tier-binding, §1.5)**

This rule is **audit-enforced:** every build should carry metadata "Opus approval date/time" 
so the RQC can verify it was genuinely approved, not assumed.

---

## Path Rejection Declaration
- ❌ Rejected: one-click as optional (made it mandatory in this protocol)
- ❌ Rejected: Sonnet declaring work "done" without one-click (this protocol forbids it)
- ❌ Rejected: Sonnet building without explicit Opus approval (§5 forbids it)

## Change log
- v1.0 — 2026-07-18: Sonnet+Governor draft. Standardizes every Sonnet→Opus handoff with frame + one-click. Status PROVISIONAL-ACTIVE, audit-flagged until ratified.
