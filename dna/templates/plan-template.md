# Plan Template (PLACEHOLDER)
**tags:** [template, plan, placeholder, governance, t-sys, ratification]
**Status:** PLACEHOLDER
**Aligned to:** ARCH-00008 Node DNA + ARCH-00230 + ARCH-00190 (planning-domain-protocol, the SSOT this template structures) + ARCH-00401 (plan-protocol self-enhancement, 12 gate enhancements)

## Sections to populate
- Header — Node ID, Type: ARCH, Status, **Planning Status** (AWAITING-BUILDER-REVIEW | COMMENTS-RECEIVED | CONSENSUS-REACHED | IN-PROGRESS | COMPLETE | SUPERSEDED — VOC-00002, a SEPARATE lifecycle from node Status), depth_level, tags, Goal, Governing corespine, CAL reference, Independent Verifier named (author ≠ verifier, P5)
- Existing-First (§3.2b) — full 4-source search stated, with the verdict (enhance/reuse vs. genuinely new)
- Pocket Declaration — reasoning_scope, inherited_constraints, output_contract, ai_cannot, recorded_at
- Executive Summary — what the plan does and why, standalone-readable (no assumed conversation context, A1)
- Tier-Routing Declaration (§3.0) — who drafts, who judges, who ratifies, who implements — for EACH phase if multi-phase
- Anti-Scatter Ordering (§2 Principle 16) — CENTRAL items first, PERIPHERAL explicitly PARKED (not dropped)
- The Rule / procedure — the plan's content as an executable numbered sequence, not prose
- Tags + Statuses on EVERY node this plan creates — explicit table or "creates zero new nodes" statement
- Per-File Alignment Table — File | ID/Number | Schema Placement | Tag | Status, for every artifact touched
- What DOES change / What does NOT change — explicit two-list split
- Definition-of-Done reference (`dna/checks/definition-of-done.md`) — PRODUCED→WIRED→PROPAGATED→HOOKED→COMMITTED+PUSHED→VERIFIED
- Propagation Declaration — how the change reaches every dependent surface (by-reference, never by copy — A8)
- Dependencies — blocks-on / unblocks-for / explicitly-not-built-here follow-ons (I2/I22 disclosure)
- Ratification Path — Stage 0 → Stage 1 (Opus soundness) → Stage 1.5 (optional) → Stage 2 (Governor decree)
- Self-Compliance check against ARCH-00230 + ARCH-00190
- Path Rejection Declaration (§2.8) — alternatives rejected and why
- Change log

## Notes
A specific plan is a duplicate of this template with `core_template: plan-template` + `disabled_capabilities:` declared where a lighter plan skips a section (e.g. no Per-File Alignment Table for a zero-file-touching plan) — sections are disabled explicitly, never silently omitted (ARCH-00408).
