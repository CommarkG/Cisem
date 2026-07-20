# Core-Template Principle — ONE Battle-Tested Template, Instances Duplicate-and-Disable
**Node ID:** CISEM-ARCH-00408 | **Type:** ARCH | **Status:** PROVISIONAL-ACTIVE
**Planning Status:** AWAITING-BUILDER-REVIEW | **depth_level:** L1 | **Position in schema:** T-SYS, planning-governance layer
**tags:** [planning-domain, template, core-vs-instance, configuration-not-fork, gate, mandatory]
**Goal:** Establish ONE core template per template-class as the SSOT (complete, verified, battle-tested capability
set); every specific use is a DUPLICATE of the core declaring `core_template:` + `disabled_capabilities:` + its own
name/tag/status — never a hand-forked variant. Hardwire CISEM to PUSH BACK on divergent templates forming outside
this pattern. Measurable as: (1) CISEM-TEMPLATE-PROTOCOL-001 states the rule as an executable procedure; (2) a
`[TEMPLATE]` WARN check exists (spec'd here, buildable immediately on ratification) that flags any template-type
element lacking a registered `core_template:` parent + `disabled_capabilities:` declaration.
**Governing corespine:** CS-CREATION-001 | **CAL reference (CISEM-ARCH-00390):** pre-commit `[TEMPLATE]` WARN check
(this plan's disclosed follow-on CAL surface, same posture as `[SEED]`/`[RAW-PAIR]`/`[NAMING]` at introduction).
**Independent Verifier:** `cisem-opus-pe`, cold default-refute pass (author = Sonnet, dispatched by Opus; verifier
= Opus fresh read, not a rubber-stamp of its own dispatch — satisfies P5 author≠verifier).

**Existing-First (§3.2b, done) — searched, in order:**
1. `dna/ssot-registry.yaml` `concepts:` — no `core_template`/`template_instance` entry exists; `creation_checklist`
   (ARCH-00230) is a DIFFERENT concept (what every file must contain), not template-duplication semantics.
2. `dna/naming-manifest.yaml` + `dna/corespines/corespine-registry.yaml` — **`CISEM-TEMPLATE-PROTOCOL-001` already
   EXISTS** (`dna/protocols/CISEM-TEMPLATE-PROTOCOL-001.md`, Status: DRAFT) — the exact governing home: "A corespine
   governs WHY and WHAT'S REQUIRED. A template is the concrete default-compliant starting artifact." No competing
   template-governance node found.
3. `dna/archive/archive-ledger.yaml` — grepped `template|core_template|duplicate` across DEC-0001..0010: no entry
   rules out a core-template/duplicate-and-disable pattern; ARCH-00280 Q4 (RULED-OUT-TEMPORARY, DEC-0010) is the
   *node-vs-corespine two-level* template question — adjacent but distinct from THIS plan's duplicate-and-disable
   scope (that question is about template STRUCTURE tiers; this plan is about template PROLIFERATION control).
4. Repo grep for `core_template`/`disabled_capabilities`/`core-template` — **zero hits**, confirming no fork exists.
**VERDICT: CISEM-TEMPLATE-PROTOCOL-001 IS the existing home. This plan ENHANCES it in place (no new template node,
no new corespine) — Core Seed 1.**

## Pocket Declaration
- **reasoning_scope:** author the ratifiable plan that enhances CISEM-TEMPLATE-PROTOCOL-001 with the core-template
  + duplicate-and-disable rule, and specs the `[TEMPLATE]` WARN check; produce the plan artifact only
- **inherited_constraints:** A1–A9; D1–D6 (esp. D2 guard-boundaries-not-paths — hardcode WHAT a template must be,
  not HOW an instance configures it); §3.2c core-vs-instance; I10/I19 (enhance, never fork); I25 (plan authorizes,
  does not itself implement)
- **output_contract:** this plan document only — CISEM-TEMPLATE-PROTOCOL-001 and `plan-audit.sh` are NOT edited
  by this drafting task
- **ai_cannot:** self-ratify; stamp CISEM-TEMPLATE-PROTOCOL-001's Status; write any corespine-registry truth field
- **recorded_at:** 2026-07-20

## Executive Summary
The Governor named a recurring risk: template proliferation by ad-hoc forking (a new use case quietly becomes a
new, slightly-different template instead of a configured duplicate of the proven one). This plan enhances the
EXISTING CISEM-TEMPLATE-PROTOCOL-001 with a firm model — ONE core template per class holds the complete,
battle-tested capability set (built to flawless via Principle 15 divergent-iteration, then reused); every specific
use case is a NAMED, TAGGED, STATUSED DUPLICATE that declares its parent (`core_template:`) and which capabilities
it turns OFF (`disabled_capabilities:`) — configuration over forking. A `[TEMPLATE]` WARN check is spec'd as a
low-blast follow-on, buildable immediately on ratification (same posture as `[SEED]`/`[RAW-PAIR]` introductions),
so the rule is "up and running" fast rather than left as prose alone.

## Tier-Routing Declaration (per CLAUDE.md §3.0)
- **Drafting this plan → Sonnet** (STRUCTURING tier, this dispatch) — executing Opus's fully-specified model
  verbatim (ONE core template = SSOT; instance = duplicate + `core_template:` + `disabled_capabilities:` + name/
  tag/status); no design judgment exercised beyond structuring per ARCH-00190/00401.
- **Judging soundness (Stage 1) → Opus (cisem-opus-pe)** — cold default-refute verify pass.
- **Governor Stage 2 → ratification authority**, per ARCH-00190 §3 unchanged.
- **Implementation (post-ratification) → Sonnet** for both phases (protocol-text enhancement + `[TEMPLATE]` check
  build) — mechanical/structural work, no further judgment calls; Opus reviews the diff at Gate close, per §3.0.
- Why: drafting a spec'd plan and building a WARN check that reuses the `[SEED]`/`[RAW-PAIR]` pattern are both
  Sonnet's lane (structuring/building); only the soundness verdict and the ratification decree are Opus's/Governor's.

## Anti-Scatter Ordering (CLAUDE.md §2 Principle 16)
Two phases, infrastructure-first, both authorized by THIS one ratification (no second plan needed — Governor
explicitly wants this "up and running"):
- **Phase 1 (CENTRAL — the doctrine itself):** enhance CISEM-TEMPLATE-PROTOCOL-001 with the core-template rule.
  Nothing downstream (the check, any future template instance) means anything without this first.
- **Phase 2 (CENTRAL but low-blast — the enforcement surface):** the `[TEMPLATE]` WARN check, spec'd here,
  buildable immediately on ratification per the established WARN-introduction pattern (`[SEED]`/`[RAW-PAIR]`/
  `[NAMING]`/`[ARCHIVE]` were each added as a single-commit mechanical follow-on under their governing plan).
- **PARKED (peripheral, not this plan):** retrofitting EXISTING template-type elements (e.g. any prior
  hand-authored variant, if one is found by the check on first run) to declare `core_template:` retroactively —
  that is a SEPARATE cleanup pass once the check surfaces real findings, not pre-emptive work here.

## The Rule — executable procedure
1. **Define the model in CISEM-TEMPLATE-PROTOCOL-001** (new §4, after the existing §§1–3):
   - A **core template** is the ONE template per class carrying the COMPLETE, verified, battle-tested capability
     set for that class (proven via CLAUDE.md §2 Principle 15 — divergent iteration to flawless-flow BEFORE any
     generalization/sealing; a template promoted from a single build is a violation of Principle 15, not this rule).
   - An **instance** is a DUPLICATE of the core template that: (a) declares `core_template: {CoreTemplateID}`;
     (b) declares `disabled_capabilities: [list]` — capabilities the core has, turned OFF for this use (never
     capabilities ADDED that the core lacks — that is a fork, not a configured instance, and routes back to
     enhancing the CORE per D1/D4 so every future instance benefits); (c) carries its OWN name, tag (VOC-00001),
     and status (VOC-00002) — an instance is a fully governed node in its own right, not a silent copy.
   - **Configuration over forking:** this is the §3.2c core-vs-instance check made concrete for templates —
     defaults to INSTANCE until a capability genuinely cannot be modeled as core-minus-disabled, in which case the
     PROPOSAL is to enhance the CORE (so every future instance inherits it), never to fork a sibling template.
2. **State the hardwire directive**: CISEM is hardwired to PUSH BACK if a divergent template forms outside this
   pattern (a new template-shaped artifact with no `core_template:` line) — Phase 2's `[TEMPLATE]` check is the
   MECHANICAL form of this pushback (WARN-only at introduction, per the established CAL posture; promotable to
   BLOCK later under ARCH-00270, same graduation path as every other WARN check).
3. **Spec the `[TEMPLATE]` WARN check** (built in Phase 2, reusing the exact structural pattern of `[SEED]`/
   `[NAMING]` in `dna/checks/plan-audit.sh`): for every file/section self-identifying as a template (heuristic:
   filename or header contains `TEMPLATE`, or a governed node's Type/tags include `template`), flag it if it lacks
   BOTH a `core_template:` line pointing to a resolvable ID AND a `disabled_capabilities:` line — UNLESS it IS
   itself the core (a core template is exempt from requiring its own `core_template:` parent; exemption marker:
   `core_template: none (this IS the core)`). WARN-only; NOT in the `[ZF]` formula at introduction (same posture
   as every prior WARN check's first commit).
4. **Cross-reference §3.2c** (Core-vs-Instance gate, CLAUDE.md) explicitly from the new §4, so the two rules read
   as one coherent check rather than two similar-sounding but separately-discoverable rules (A8 — one home, this
   plan's enhancement IS that home for templates specifically; §3.2c stays the general node-level rule).

## Tags + Statuses on EVERY node this plan creates
This plan creates **ZERO new governed nodes**. It enhances one EXISTING node (CISEM-TEMPLATE-PROTOCOL-001, Status
stays DRAFT — this plan does not stamp it RATIFIED) and one EXISTING script (`dna/checks/plan-audit.sh`, no
Status field — a governed script, not a node). The plan's own header carries its tag/status (see above).

## Per-File Alignment Table
| File | ID / Number | Schema Placement (SCHEMA-00001) | Tag (VOC-00001) | Status (VOC-00002) |
|---|---|---|---|---|
| `dna/planning/CISEM-ARCH-00408-core-template-principle-plan.md` (this file) | CISEM-ARCH-00408 (Sonnet-allocated via naming-registry.yaml, next_seq 408→409) | T-SYS, planning-governance layer | planning-domain, template, core-vs-instance | Status: PROVISIONAL-ACTIVE / Planning Status: AWAITING-BUILDER-REVIEW |
| `dna/protocols/CISEM-TEMPLATE-PROTOCOL-001.md` (target of Phase 1 enhancement — NOT modified by this drafting task) | CISEM-TEMPLATE-PROTOCOL-001 (existing, unchanged number; `TEMPLATE-PROTOCOL` type prefix already flagged in naming-manifest.yaml `_anomaly_unregistered_type_prefix` — pre-existing, out of this plan's scope) | T-SYS, protocol layer | (existing header, unchanged by this plan) | Status: DRAFT (unchanged; implementation is post-ratification) |
| `dna/checks/plan-audit.sh` (target of Phase 2 — new `[TEMPLATE]` check, NOT built by this drafting task) | no CISEM-{TYPE}-{SEQ} ID — governed script, per ARCH-00320 §6 | T-SYS, enforcement/CAL layer | gate, audit, mandatory | unchanged by this drafting task; new check is the disclosed Phase 2 follow-on |
| `dna/naming-registry.yaml` (already modified by Sonnet — ARCH next_seq 408→409, comment pre-registers this title) | REG type, self-exempt | T-SYS, naming-allocation layer | naming, numbering, mandatory | present, unchanged status (no lifecycle Status field on the registry itself) |

## What DOES change (upon ratification — implementation is a LATER, separate step; nothing here executes now)
- `dna/protocols/CISEM-TEMPLATE-PROTOCOL-001.md` — new §4 (core-template + duplicate-and-disable rule) per The
  Rule step 1–2 above.
- `dna/checks/plan-audit.sh` — new `[TEMPLATE]` WARN check per The Rule step 3 (Phase 2, low-blast, buildable
  immediately on ratification — no second plan needed for this specific check, per Governor's "up and running").

## What does NOT change
- No new template/protocol/corespine node is created (Core Seed 1) — CISEM-TEMPLATE-PROTOCOL-001 keeps its
  existing ID, Type, and DRAFT status; this plan does not stamp it RATIFIED.
- CLAUDE.md §3.2c (Core-vs-Instance) is REFERENCED, not rewritten — this plan is the template-specific concretion
  of that existing gate, not a competing rule.
- No retroactive enforcement: any pre-existing template-shaped artifact is only FLAGGED (WARN) by the new check
  on its first run, never silently rewritten or blocked.

## Definition-of-Done reference
Verified at implementation against `dna/checks/definition-of-done.md` (cited, not re-derived): PRODUCED (protocol
text + check exist) → WIRED (the `[TEMPLATE]` check runs in `plan-audit.sh`, or an honest `NOT-YET-WIRED` tag) →
PROPAGATED (CLAUDE.md §3.2c cross-reference added so both homes point to each other, A8) → HOOKED (pre-commit
already runs `plan-audit.sh`; no new hook needed) → COMMITTED+PUSHED → VERIFIED (a planted-test proof, same
pattern as `[SEED]`/`[NAMING]`'s introduction stress tests).

## Propagation Declaration
This plan changes a TEMPLATE-GOVERNANCE rule. On implementation it propagates BY-REFERENCE, never by copy: (1)
CLAUDE.md §3.2b already says "A template/corespine exists → use it (this subsumes the old Template-First; see
TEMPLATE-PROTOCOL-001)" — no edit needed there, the pointer already resolves to the enhanced content; (2)
CLAUDE.md §3.2c (Core-vs-Instance) gains a one-line cross-reference to the new §4 (pointer only, A8); (3)
`plan-audit.sh`'s own header comment log gains a `[TEMPLATE]` entry in the existing v-numbered refinement-log
convention (same pattern as every prior check addition); (4) no generated frontend view currently renders
template-instance relationships — a future `frontend/pages/templates.html` enhancement to show `core_template:`
links is named as a DISCLOSED, NOT-YET-SCOPED follow-on (out of this plan; CS-FRONTEND-001's domain).

## Dependencies (blocks-on / unblocks-for)
- **Blocks-on:** nothing — CISEM-TEMPLATE-PROTOCOL-001 is DRAFT and free to amend via a ratified plan (A4/I25
  satisfied by this plan itself once ratified).
- **Unblocks-for:** any future corespine/agent/skill build that wants to declare itself a template instance
  (e.g. the CS-AI-PROFILING-001 agent roster, which already has 3 near-identical agent files that could become
  core-template + instance duplicates — named here as a FUTURE candidate, not this plan's scope, per Anti-Scatter).
- **Follow-on (explicitly NOT built here, disclosed per I2/I22):** retrofitting any pre-existing template-shaped
  artifact once the `[TEMPLATE]` check's first run surfaces real findings; a `frontend/pages/templates.html`
  rendering of `core_template:` relationships (CS-FRONTEND-001 domain).

## Ratification Path
Stage 0 (iterative Haiku→Sonnet→Opus draft-review loop per ARCH-00190 §3 as it exists today, TWO orthogonal
lenses per Enhancement 7 — protocol-compliance × content-correctness) → Stage 1 (Opus soundness, cold
default-refute, `cisem-opus-pe`) → Stage 1.5 (fable mentor — not invoked; no Governor activation requested for
this plan) → Stage 2 (Governor decree). Planning Status transitions per ARCH-00190 §1 unchanged.

## Self-Compliance (against ARCH-00230 checklist + ARCH-00190 §2)
✓ Header (ID/Type/Status/Planning-Status/depth_level/tags/goal/corespine/pocket) ✓ Tier-Routing Declaration
✓ Anti-Scatter Ordering ✓ Why-standalone (Executive Summary, self-contained) ✓ Rule-as-procedure (4 numbered
steps) ✓ Tags+Statuses section (zero new nodes, stated explicitly) ✓ Per-File Alignment Table ✓ What-DOES /
What-does-NOT change ✓ DoD reference ✓ Propagation Declaration ✓ Dependencies ✓ Ratification Path ✓ Path
Rejection Declaration (below) ✓ CAL reference ✓ Change log ✓ Independent Verifier named (`cisem-opus-pe`)
✓ Existing-First stated (4 sources).

## Path Rejection Declaration (CLAUDE.md §2.8)
- ❌ Rejected: creating a NEW template-governance node instead of enhancing CISEM-TEMPLATE-PROTOCOL-001 — I19/A8
  forbids a fork; the existing DRAFT node is the exact governing home.
- ❌ Rejected: building the `[TEMPLATE]` check now, ahead of ratification — A4/I25 requires the plan RATIFIED
  before implementation, even for a low-blast WARN check.
- ❌ Rejected: requiring an instance to add capabilities beyond the core — that is a fork, not a configured
  duplicate; the rule routes "core lacks a capability" back to enhancing the CORE (D1/D4), never to a sibling fork.
- ❌ Rejected: promoting a template to "core" status from a single build — Principle 15 (divergent-iteration to
  flawless) governs core-template promotion; this plan states but does not weaken that gate.

## CAL reference (CISEM-ARCH-00390)
Pre-commit `[ZF]`+`[DOD]`+`[ROUTING]`/`[ALIGN]`/`[TAG-STATUS]`+`[POCKET]` run on this plan file at commit time.
The `[TEMPLATE]` check (Phase 2, post-ratification) becomes new `[ZF]`-adjacent WARN surface for every future
template-type creation — that wiring is the disclosed Phase 2 follow-on above, not retroactive to this file.

## Change log
- v0.1 — 2026-07-20 (Sonnet, STRUCTURING tier, dispatched by Opus per Governor-approved instruction): initial
  draft. Existing-First search, 2-phase Rule, Per-File Alignment Table, Propagation Declaration, Path Rejection
  populated per Core Seeds 1–3.
