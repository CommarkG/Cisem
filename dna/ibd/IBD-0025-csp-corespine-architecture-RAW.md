# IBD-0025 — CSP Corespine Architecture (RAW — structural skeleton + source)
**Status:** PARKED-RAW | **tags:** [ibd, RAW-EXTERNAL, corespine, architecture, spine-tree, node-taxonomy, precedence, sibling-to-plan-ARCH-00404]
**source:** "Governor-supplied, 2026-07-20 — two CSP/CSPS platform docs: PLTF_CORE_SPINE_COMPREHENSIVE_GUIDE_S335.md (5-spine model + 3-layer doctrine + attribution chain) + CSP_2026-03-24_SPINE-DEFINITION-CANON.md (3-type node model Core-Spine/Branch/Leaf + Branch threshold T1-T4 + pillar-protection-line). Full text provided in-conversation."
**trust_tier:** HIGH (Governor-authored, mature platform) | **PURIFIED sibling:** IBD-0025-csp-corespine-architecture-PURIFIED.md

## Transferable skeleton (CSP-specific scaffolding dropped — see the sibling extract file)
- **5 canonical spines** with precedence: CNST > GVRN > VALD > ARCH > OPER (Constitutional/Governance/Validation/Architecture/Operations). Lower defers on conflict. Every governed artifact declares ONE primary `core_spine:` (singular, required) + optional `core_spines:` (plural, cross-cutting).
- **Pillars** (Context/Governance/Timing/Integrity) are ORTHOGONAL to spines — an artifact declares BOTH a spine and pillars.
- **3-layer doctrine model:** L1_CORE (sealed essence, `do_not_expand`, council-only amendment) · L2_DOMAIN (decomposition, ~3/spine, normal review) · L3_INSTANCES (which artifacts instantiate the spine, per-session).
- **Mechanical attribution chain:** frontmatter `core_spine:` + `schema_anchor:` → orphan validator (missing spine/anchor = RED) + corespine validator (spine in canonical set + L1 doctrine file exists) → entity_state store → audit_state (per-node hash + freshness). "The schema is the gate; the spines are how the gate organizes what passes through."
- **3-type node model (SPINE-DEFINITION-CANON):** Core Spine (originates authority; has children, no parent) · Branch (derived authority; has parent AND children) · Leaf (terminal; parent, no children). Structural tests, not vibes.
- **Branch threshold (earns its own governance boundary only if ALL of T1-T4):** T1 distinct independently-evaluable North Star · T2 ≥3 governing nodes not naturally governed by an existing spine · T3 internal heterogeneity + would contaminate parent if shared · T4 sibling-scope-uniqueness. Plus **MEG justification:** "this Branch removes more architectural risk than the complexity it adds."
- **Guardrails:** No-Empty-Branch (a branch with no governance function collapses) · Overload-Alert (too many children → split; ~2-5 healthy) · Level Role Definitions (CORE originates · SPINE governs domain · BRANCH narrows · LEAF holds content; governance flows DOWN, content flows UP) · CNST is the only spine with depends_on:[] (self-standing bedrock).
- **Pillar Protection Line:** a "pillar" = an element whose modification invalidates assumptions in ≥3 other governed elements → escalated approval REGARDLESS of blast; classified by CONSEQUENCE not level (a Leaf can be ABOVE the line).
- **Core insight (why it matters):** "A node in the wrong spine is not mis-organized — it is MIS-GOVERNED: wrong authority, wrong blast radius, wrong goals, silently, from admission." Organization + authority are inseparable at the schema level → silent mis-governance is the failure mode → the taxonomy must be formal, testable, enforced at admission.

## Governor directive
"Purify + extract valuable + SAVE A DETAILED PLAN optimized to CISEM." → see PURIFIED sibling + the plan (dna/planning/CISEM-ARCH-00404).
