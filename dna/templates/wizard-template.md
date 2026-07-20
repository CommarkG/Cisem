# Wizard Template (PLACEHOLDER)
**tags:** [template, wizard, placeholder, governance, t-sys, creation-gate]
**Status:** PLACEHOLDER
**Aligned to:** ARCH-00008 Node DNA + ARCH-00230 + ARCH-00340 (meta-protocol, the parent of every wizard) + ARCH-00394 (Universal Corespine Creation Wizard, the concrete precedent)

## Sections to populate
- Header — Node ID, Type, Status, depth_level, tags, Goal, Governing corespine, Parent meta-root (ARCH-00340 pointer, per ARCH-00396 Phase B convention)
- Pocket Declaration — reasoning_scope, inherited_constraints, output_contract, ai_cannot, recorded_at
- Existing-First search (§3.2b) — the 4-source search performed BEFORE this wizard was authored (ssot-registry → naming-manifest+corespine-registry → archive → grep), stated explicitly
- Tier-Routing Declaration (§3.0) — who drafts, who judges soundness, who ratifies, who implements post-ratification
- Input schema — what the wizard consumes (e.g. a YAML batch, a form, a set of answers); batch-mode note if N instances can run from one input
- STEP 1–N procedure — the executable sequence this wizard runs (numbered, unambiguous, no ambiguity permitted per ARCH-00394's own dogfood-run precedent)
- Output artifacts — exactly what files/fields the wizard produces at each step, and where they're registered (naming-registry.yaml, corespine-registry.yaml, ssot-registry.yaml, etc.)
- Ratification Path — Stage 0 (iterative draft-review) → Stage 1 (Opus soundness, cold default-refute) → Stage 1.5 (fable mentor, optional) → Stage 2 (Governor decree)
- Self-Compliance check — the wizard run against its own output checklist
- Path Rejection Declaration — what alternate designs were rejected and why
- CAL reference (CISEM-ARCH-00390) — which plan-audit check(s) this wizard's output must pass
- I24 activation-proof note — a wizard earns RATIFIED only on its FIRST clean independently-verified run (never claimed at authoring time)
- Change log

## Notes
A new wizard instance duplicates this template and declares `core_template: wizard-template` + `disabled_capabilities:` (ARCH-00408) — e.g. a narrower wizard that reuses the STEP structure but disables batch-mode — rather than being authored as an unrelated one-off procedure.
