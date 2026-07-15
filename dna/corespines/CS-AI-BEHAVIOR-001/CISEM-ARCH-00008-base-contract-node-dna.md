# CISEM Universal Node DNA — Complete Field Schema
**Proposed content for: a future CISEM-BASE-CONTRACT-001 node — not yet
TYPE-registered.** `BASE-CONTRACT` does not appear in the ARCH-00011 §1
TYPE registry (FOUND, DNA, GOV, ARCH, PARK, SES, WITNESS, VOC, LOAD, REG).
Registering it is a prerequisite for that node ID to become real; until
then this reference is explicitly a forward pointer, not a resolved node.

**Node ID:** CISEM-ARCH-00008
**Type:** ARCH
**Short description (human):** Defines the mandatory field schema every
CISEM node must carry from its first draft.
**Short description (AI):** Schema contract node — Sections I–X enumerate
required node fields for creation-time compliance checks; DRAFT, not yet
enforced by tooling.
**Status:** RATIFIED — Governor ratification 2026-07-16
**Version:** v1.0 (ratified 2026-07-16; prior: v0.1 draft)
**Change protocol:** Edits are proposals, not silent updates — any change
bumps the version, is logged in §X Change log, and does not become binding
until CS-MASTER-VALIDATION-001 ratifies it. Builder may not apply a change
to this file and treat it as authoritative without flagging the change per
the Path Rejection Declaration principle (CLAUDE.md §2.8).
**Role:** Schema definition — specifies the field contract every other CISEM
node must satisfy at creation.
**Who I'm serving:** The Governor (ratification authority) and Builder
(execution-time compliance checks against this contract).
**Position in schema:** T-SYS — governance/schema layer; PLACEHOLDER resolved
at ratification 2026-07-16 (per CISEM-SCHEMA-00001).
**Position in corespine:** Filed under CS-AI-BEHAVIOR-001 pending a
dedicated schema corespine; not a declared child in corespine-registry.yaml
yet — flagged, not assumed.
**Position in pipeline(s):** None — not wired into any creation pipeline.
CLAUDE.md §5 states "All gate scripts DECLARED, none WIRED"; this schema is
the same: referenced by the Behavior Principles but not enforced by tooling.
**Connection to Threshold:** None declared. CS-THRESHOLD-001 (RATIFIED)
governs Layer 1 mechanical input validation; this schema governs node
*structure*, not input. They are adjacent gate layers with no explicit
handoff between them yet — flagged as an open design question, not assumed.
**depth_level:** L1
**tags:** [schema, node-dna, base-contract, governance]
**Governing corespine:** CS-MASTER-VALIDATION-001 (governs all corespines, itself
still DRAFT/BLOCKING — this content cannot be validly ratified until that closes)
**Goal:** Define the complete, non-negotiable set of fields every CISEM node/creation
must carry from its first draft, so nothing is ever created "floating."
**Measurable outcome:** 100% of newly created CISEM nodes carry every
Section I–X field below (or an explicit PLACEHOLDER / flagged-absent
marker in its place) before being called done — mirrors the completion
standard already stated in CLAUDE.md's own Goal field. Not yet measured
in practice: no automated check exists, so this is currently verified
manually, per file, the way this document itself was (§X).
**Prepared by:** Brain, in direct response to Governor's field list

## Pocket Declaration
- **reasoning_scope:** define universal node schema
- **inherited_constraints:** must not conflict with CS-MASTER-VALIDATION-001 once ratified
- **output_contract:** field list + rationale
- **ai_cannot:** self-ratify — Governor only

---

The sections below are the proposed schema itself — the field categories
every CISEM node must carry. Each keeps its original definition line
(the actual deliverable, unchanged) and adds an **Applied to this node**
note showing how CISEM-ARCH-00008 satisfies — or explicitly fails to
satisfy — its own requirement, per the self-compliance check requested
this session.

## I. IDENTITY
Node ID, Node type/TYPE prefix, Short description (human + AI), Status,
Version + Change protocol

**Applied to this node:** All five present in the header above.

## II. GOAL & PURPOSE
Goal incl. measurable outcomes, Role, Who I am serving

**Applied to this node:** All three present in the header above (`Goal`,
`Measurable outcome`, `Role`, `Who I'm serving`).

## III. POSITION IN THE ARCHITECTURE
Position in schema (T-SYS/T-DOM), Position in corespine, Position in pipeline(s),
Connection to Threshold

**Applied to this node:** All four present in the header above. Position in
schema resolved to T-SYS at ratification (2026-07-16); position in corespine
is CS-AI-BEHAVIOR-001 (declared in header). No remaining PLACEHOLDER positions.

## IV. RELATIONSHIPS
Who I inherit from/obligated by, Who inherits from me/I deliver to, Dependencies,
Propagation membership

**Applied to this node:**
- *Inherit from/obligated by:* CS-MASTER-VALIDATION-001 (governing
  corespine — see header). Structurally depends on CISEM-SCHEMA-00001 (for
  the PLACEHOLDER mechanism used above) and CISEM-ARCH-00011 (for the
  depth_level/tags/status mechanics Section V requires).
- *Who inherits from me / I deliver to:* No node currently inherits from
  this schema — that's the point of a base contract once ratified, but
  today it's aspirational. Zero nodes are checked against it.
- *Dependencies:* CISEM-SCHEMA-00001, CISEM-ARCH-00011, and — for the
  Pocket Declaration fields specifically — `pocket-mechanism.md`, which
  CLAUDE.md §3.3 and corespine-registry.yaml both cite as living at
  `dna/corespines/CS-AI-BEHAVIOR-001/pocket-mechanism.md`. **Resolved:
  file committed in 71b15fd (2026-07-15).** Pocket Declaration vocabulary
  (reasoning_scope, inherited_constraints, output_contract, ai_cannot)
  is now grounded.
- *Propagation membership:* None yet. Not a propagation source until
  ratified and at least one dependent node exists.

## V. GOVERNANCE / VOCABULARY / NAMING
Vocabulary alignment, Naming/numbering compliance, Tags, Statuses (incl. internal)

**Applied to this node:**
- *Vocabulary alignment:* Uses terms already established in CLAUDE.md
  (Behavior Principles, Pocket Declaration fields), CISEM-ARCH-00011
  (depth_level, tags, status enum), and CISEM-SCHEMA-00001 (T-SYS/T-DOM,
  PLACEHOLDER). Introduces no new vocabulary of its own — see the
  `pocket-mechanism.md` gap under §IV.
- *Naming/numbering compliance:* ID format matches ARCH-00011 §2.
  Sequence 00008 is recorded in `naming-registry.yaml` (migrated this
  session, no longer `pending_migration`).
- *Tags:* see header (`schema, node-dna, base-contract, governance`).
- *Statuses (incl. internal):* Single external `Status: RATIFIED`
  (2026-07-16, Governor decree). No internal sub-statuses defined — not
  applicable at depth_level L1.

## VI. AI BEHAVIOR / POCKET
Pocket declaration (reasoning_scope, inherited_constraints, output_contract,
ai_cannot), Path Rejection Declaration

**Applied to this node:** Pocket declaration present above (see `##
Pocket Declaration`). **Path Rejection Declaration is missing** — this
document names what it does *not* yet resolve throughout (PLACEHOLDER
positions, the missing `pocket-mechanism.md`, no dependents), but never
states it in the explicit "name what was rejected and why" form CLAUDE.md
§2.8 requires. Flagged here rather than fabricated.

## VII. STRUCTURE / SIZE GOVERNANCE
Length/complexity compliance, Mini-tree split protocol, Mandatory depth levels

**Applied to this node:** `depth_level: L1` declared in header (mandatory
depth level ✓). Length: well under the 3,500-word / 200-line size gate
(ARCH-00011 §5) — no measurement was previously stated, so stating it now:
comfortably compliant, no split triggered. Mini-tree split protocol: not
applicable — this node has never been split.

## VIII. NOTIFICATION / MONITORING
What I notify, How I stay updated

**Applied to this node:**
- *What I notify:* Nothing — no notification mechanism is wired for any
  CISEM node yet (CLAUDE.md §5: "All gate scripts DECLARED, none WIRED").
  This node is no exception.
- *How I stay updated:* Manual only. Brain/Builder re-read this file each
  session; no automated diffing or propagation to dependents exists
  (moot today — §IV notes no dependents exist).

## IX. IMPROVEMENT / EVOLUTION
Improvement loop membership, Wisdom-entry hook, Verification scenario +
last_verified + owner

**Applied to this node:**
- *Improvement loop membership:* Eligible for CS-LOOPS-001 /
  improvement-loop once that corespine is ratified and wired (currently
  `status: DEFINED, unwired: true` in corespine-registry.yaml). No
  automatic membership today.
- *Wisdom-entry hook:* None exists in this repo yet.
- *Verification scenario + last_verified + owner:* Verification scenario
  is re-running the §3.4 Standalone Test against this node and confirming
  every Section I–X field resolves or is explicitly flagged absent.
  last_verified: 2026-07-16 (ratification pass). owner: Builder (Claude Code),
  pending Governor assignment of a permanent owner.

## X. AUDIT
Applicable checklist reference, Change log / visible-change record

**Applied to this node:**
- *Applicable checklist reference:* CLAUDE.md §3 Hard Gates (Goal-First,
  Corespine-First, Template-First, Core-vs-Instance, Pocket Declaration,
  False Assumption Gate, Naming & Index-Extension, Size Gate).
- *Change log:*
  - v0.1 — 2026-07-14: initial Drive-sourced draft (schema definition
    only, no self-applied fields).
  - v0.1 (migrated) — 2026-07-15: committed to this repo; added Type,
    Role, Who I'm serving, Position fields, depth_level, tags, Pocket
    Declaration to the header.
  - v0.1 (follow-up) — 2026-07-15: added Short description, Version +
    Change protocol, measurable outcome to the header; added "Applied to
    this node" notes under all ten sections without altering their
    original definition text; flagged the missing Path Rejection
    Declaration (§VI) and the missing `pocket-mechanism.md` dependency
    (§IV) instead of fabricating either.
  - v1.0 — 2026-07-16: Governor ratification. Status DRAFT → RATIFIED.
    Position in schema PLACEHOLDER → T-SYS (CISEM-SCHEMA-00001 now
    committed). §IV pocket-mechanism.md gap resolved (committed 71b15fd).
    §III Applied note updated to reflect resolved positions.

## What this document is NOT
Ratified (2026-07-16, Governor decree) but **NOT yet enforced** by tooling,
and NOT exhaustive. Zero nodes are currently checked against it (§IV) — no
automated check exists yet (plan Step 5 wires it). One disclosed gap remains
open even post-ratification: §VI's missing Path Rejection Declaration — kept
as an honest disclosure, not fabricated retroactively into a ratified node;
tracked for a proposed edit under the §Change-protocol, not silently added.
