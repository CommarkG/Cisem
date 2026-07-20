# Corespine Manifest Template (PLACEHOLDER)
**tags:** [template, corespine, manifest, placeholder, governance, t-sys]
**Status:** PLACEHOLDER
**Aligned to:** ARCH-00008 Node DNA (Sections I–X) + ARCH-00230 (creation checklist) + ARCH-00394 (Universal Corespine Creation Wizard) + CISEM-TEMPLATE-PROTOCOL-001

## Sections to populate
- **I. IDENTITY** — Node ID (`CISEM-ARCH-{SEQ}` via naming-registry.yaml), Type: ARCH, corespine ID (`CS-{NAME}-001`), Short description (human + AI), Status (never RATIFIED by a lower tier — I7), Version + Change protocol
- **II. GOAL & PURPOSE** — Goal (what this corespine governs, one sentence + measurable outcome), Role, Who I'm serving
- **III. POSITION IN THE ARCHITECTURE** — Position in schema (T-SYS/T-DOM), Position in corespine (parent corespine, or apex/none), Position in pipeline(s), Connection to Threshold
- **IV. RELATIONSHIPS** — Who I inherit from / obligated by (parent corespine per ARCH-00230 INHERITANCE clause), Who inherits from me / children, Dependencies, Propagation membership
- **V. GOVERNANCE / VOCABULARY / NAMING** — Vocabulary alignment (VOC-00001/00002), Naming/numbering compliance, Tags, Statuses (incl. internal)
- **VI. AI BEHAVIOR / POCKET** — Pocket Declaration (reasoning_scope, inherited_constraints, output_contract, ai_cannot), Path Rejection Declaration
- **VII. STRUCTURE / SIZE GOVERNANCE** — Length/complexity compliance (3,500 words / 200 lines, §3.6), mini-tree split protocol if exceeded
- **VIII. NOTIFICATION / MONITORING** — What I notify, How I stay updated
- **IX. IMPROVEMENT / EVOLUTION** — Improvement loop membership, Wisdom-entry hook, Verification scenario + last_verified + owner
- **X. AUDIT** — Applicable checklist reference, Gate Trace (§3.0–3.7 run-by/when/result), Change log
- **Corespine-specific fields** — `carries_doctrine:` (true/false, whether D1–D6 fire through this corespine's gates), `content_location:` (`canonical_file:` + `distributed_in:` list), `wizard:` (which wizard created this manifest, e.g. ARCH-00394), Invariants block (this corespine's own `{PREFIX}-I1..In` if it defines any, per the CS-FRONTEND-001/FE-I1–I10 pattern), `children:`/`branches:` (child nodes or sub-routes), Mirrors + SSOT Map (§VI-style pointer table — points to doctrine/rules elsewhere, never copies them, A8/I10)
- **corespine-registry.yaml entry** — the matching top-level block (`status`, `goal`, `content_location`, `wizard`, `depth_level`) that must be added/updated alongside this manifest

## Notes
An instance corespine is created by duplicating this template, then following ARCH-00408's core-template principle: declare `core_template: corespine-manifest-template` + any `disabled_capabilities:`, and give the duplicate its OWN name, tag, and Status — never a silent hand-fork.
