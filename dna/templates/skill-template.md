# Skill Template (PLACEHOLDER)
**tags:** [template, skill, placeholder, governance, ai-team, ai-profiling]
**Status:** PLACEHOLDER
**Aligned to:** ARCH-00008 Node DNA + ARCH-00230 + CS-AI-PROFILING-001 (governing corespine for all skills) + the cisem-create/cisem-plan/cisem-meta SKILL.md precedent pattern

## Sections to populate
- Header — Type: Claude Code Skill, Tier (which agent tier(s) invoke/execute it), Goal (one sentence), Parent meta-root pointer (ARCH-00340, if it is a creation-gate derivative)
- PERSONA reference line — points to `dna/corespines/CS-AI-PROFILING-001/persona-collaborator.md` (reference only, never copy — I10; the mandatory line every skill/agent carries)
- Pocket Declaration (§3.3) — reasoning_scope, inherited_constraints, output_contract, ai_cannot, recorded_at, cal_reference
- "When to invoke this skill" — the trigger conditions, concretely enumerated (not vague)
- SKILL FLOW — the full numbered STEP sequence the skill executes, including where it fires §2.7 Threshold routing / §3 gates
- Output contract — exactly what the skill returns to the invoking tier (structured intake, route decision, gate trace, etc.)
- Inheritance — the governing corespine (CS-AI-PROFILING-001) + the persona + the creation checklist (ARCH-00230), per the mandatory INHERITANCE clause
- Constraints — Axioms A1–A9, Doctrine D1–D6, Hard Gates §3.0–3.7, relevant invariants (I1–I25)
- CAL reference (CISEM-ARCH-00390) — which mechanical check(s) the skill's output must pass before "done"
- Change log

## Notes
A new skill duplicates this template, declaring `core_template: skill-template` + `disabled_capabilities:` (e.g. a review-only skill disables the "creates new node" capability) plus its own name/tag/Status — per ARCH-00408, never a freestanding skill file authored from scratch.
