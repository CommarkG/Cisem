# Node-DNA Drafts / Pending-Ideas Extension — Per-Node Tagged+Statused Scratch Space
**Node ID:** CISEM-ARCH-00409 | **Type:** ARCH | **Status:** PROVISIONAL-ACTIVE
**Planning Status:** AWAITING-BUILDER-REVIEW | **depth_level:** L1 | **Position in schema:** T-SYS, planning-governance layer
**tags:** [planning-domain, node-dna, drafts, tag-status, schema-extension, gate, mandatory]
**Goal:** Extend the Node DNA contract (CISEM-ARCH-00008, Sections I–X) with an OPTIONAL "§XI Drafts /
Pending-Ideas" section — each draft a TAGGED + STATUSED sub-item (`DRAFT-RAW` → `PARKED` → `PROMOTED`),
placeholders populated gradually, queryable by tag+status, rendered by the schema/back-office frontend page.
Measurable as: (1) ARCH-00008 §XI states the field shape as an executable procedure, not prose; (2) the promotion
path is explicit and routes through the SAME full §3 gates as any other creation (A4/I25 — no shortcut); (3) the
field shape is machine-queryable (tag+status keys, not free prose) so a future scan/render can enumerate it.
**Governing corespine:** CS-CREATION-001 | **CAL reference (CISEM-ARCH-00390):** disclosed as a follow-on — no
new pre-commit check is built by THIS plan (see Dependencies); the field-shape itself becomes future `[ZF]`/
`[EDGE]` surface once a `[DRAFTS]` check is separately built.
**Independent Verifier:** `cisem-opus-pe`, cold default-refute pass (author = Sonnet, dispatched by Opus; verifier
= Opus fresh read — satisfies P5 author≠verifier).
**Size-gate exception (§3.6, documented):** exceeds 200 lines (field-shape spec + 6-source Existing-First +
Per-File Alignment Table + full ARCH-00190/00401 mandatory-section set). Kept whole per the ARCH-00190/
ARCH-00401/ARCH-00404/ARCH-00407 documented-exception precedent — a mini-tree split would fragment one coherent
schema-extension proposal across files for no structural gain.

**Existing-First (§3.2b, done) — searched, in order:**
1. `dna/ssot-registry.yaml` `concepts:` — no `node_drafts`/`pending_ideas` entry; the closest neighbor is
   `intake_routing` (`dna/queue/README.md`, includes IBD as "the PARK route") — a DIFFERENT concept (repo-wide,
   standalone raw capture), disambiguated below.
2. `dna/corespines/CS-AI-BEHAVIOR-001/CISEM-ARCH-00008-base-contract-node-dna.md` — **THE existing home**:
   Sections I–X already enumerate the mandatory node-DNA field categories; this plan adds ONE new OPTIONAL
   section (§XI), not a competing schema.
3. `CLAUDE.md §2.6` (IBD — Internal Brain Dump) — an EXISTING raw-capture mechanism, but scoped differently:
   IBD files (`dna/ibd/IBD-*.md`) are STANDALONE, repo-wide, not attached to any specific node — "the Governor
   may drop a raw thought/issue at any time." This plan's Drafts section is OWNED BY and embedded IN a specific
   node — ideas about extending/refining THAT node, read in-place by that node's own future readers
   (node-as-context-carrier, COMPACT STATE v7). Both funnel into the SAME §3 gates at promotion (see The Rule
   step 3) — reusing IBD's own "promotion is a separate step that runs the full gates" pattern (CLAUDE.md §2.6),
   not forking a second promotion path (I19/A8).
4. `dna/vocabulary/CISEM-VOC-00002-status-library.md` — the global Node Status enum (`DRAFT | PROPOSED |
   DECLARED | RATIFIED | PLACEHOLDER | SCHEDULED | SPLIT | PROVISIONAL-ACTIVE`) does **NOT** contain
   `DRAFT-RAW`/`PARKED`/`PROMOTED` — confirmed by reading the file. These three are a NEW, LOCAL, per-draft-item
   lifecycle enum, distinct from and non-conflicting with the global Node Status enum (ARCH-00008 §V already
   names "Statuses (incl. internal)" as a legitimate sub-category; VOC-00002 itself distinguishes Node Status
   from Planning Status as "independent axes" — this is a THIRD, narrower axis at the sub-item level, same
   pattern, not a fork). **Flagged, not silently invented (CLAUDE.md §4)** — see The Rule step 2 and Path
   Rejection.
5. `dna/archive/archive-ledger.yaml` — grepped `draft|pending-ideas|node-dna` across DEC-0001..0010: no entry
   rules this out.
6. Repo grep for `Drafts|Pending-Ideas|DRAFT-RAW|drafts_section` — only one incidental match
   (`CISEM-DORMANCY-AUDIT.md`, an unrelated audit-report use of the word "drafts" in prose, not this concept).
**VERDICT: CISEM-ARCH-00008 IS the existing home for node-DNA fields. This plan adds §XI by-extension (no new
schema node, no fork of IBD's raw-capture mechanism) — Core Seed 1.**

## Pocket Declaration
- **reasoning_scope:** author the ratifiable plan that extends CISEM-ARCH-00008 with an optional per-node Drafts
  section, spec its field shape + attachment + promotion path; produce the plan artifact only
- **inherited_constraints:** A1–A9; D1–D6; A3 (nothing exists without a schema place — §XI gives drafts a place
  WITHOUT promoting them to full nodes prematurely); I10/I19 (extend ARCH-00008, never fork a second schema or a
  second raw-capture mechanism); I25 (plan authorizes, does not itself implement); CLAUDE.md §4 (no invented
  vocabulary without flagging — the DRAFT-RAW/PARKED/PROMOTED enum is flagged, not silently added)
- **output_contract:** this plan document only — CISEM-ARCH-00008 and VOC-00002 are NOT edited by this drafting task
- **ai_cannot:** self-ratify; stamp CISEM-ARCH-00008's Version/Change-log; write any node's actual §XI content
- **recorded_at:** 2026-07-20

## Executive Summary
Ideas about how to extend or refine a SPECIFIC node currently have nowhere to live except a separate, repo-wide
IBD file (disconnected from the node they concern) or the model's own context (lost at compaction). This plan
extends the Node DNA contract (ARCH-00008) with an OPTIONAL §XI "Drafts / Pending-Ideas" section: a per-node,
in-place scratch space where each idea is a small, tagged, statused sub-item (`DRAFT-RAW` → `PARKED` →
`PROMOTED`) that can be populated gradually (never forced complete) and later queried by tag+status or rendered
by the schema/back-office frontend page. Promotion out of a draft is NOT a shortcut — a promoted draft becomes a
new governed creation event and runs the FULL §3 hard gates exactly like any other node, same as IBD's own
promotion discipline.

## Tier-Routing Declaration (per CLAUDE.md §3.0)
- **Drafting this plan → Sonnet** (STRUCTURING tier, this dispatch) — executing Opus's fully-specified field
  shape (`DRAFT-RAW`/`PARKED`/`PROMOTED`, tag+status per item, gradual population, promotion-through-normal-gates)
  verbatim; no design judgment beyond structuring per ARCH-00190/00401.
- **Judging soundness (Stage 1) → Opus (cisem-opus-pe)** — cold default-refute verify pass, including a ruling
  on the flagged `DRAFT-RAW`/`PARKED`/`PROMOTED` sub-enum (Existing-First item 4) and whether it should register
  into VOC-00002 as a named internal axis.
- **Governor Stage 2 → ratification authority**, per ARCH-00190 §3 unchanged.
- **Implementation (post-ratification) → Sonnet** for the ARCH-00008 §XI text edit (mechanical schema addition,
  no further judgment). The frontend rendering piece is EXPLICITLY a separate, later, CS-FRONTEND-001-governed
  follow-on (see Dependencies) — not routed here.
- Why: drafting a spec'd schema extension is Sonnet's structuring lane; ruling on a new sub-enum's placement in
  the vocabulary system and any cross-cutting frontend-rendering decision are Opus's/a later plan's judgment calls.

## Anti-Scatter Ordering (CLAUDE.md §2 Principle 16)
- **Phase 1 (CENTRAL — this plan's actual scope):** the ARCH-00008 §XI field shape + attachment + promotion
  protocol. This is the whole ask; nothing else is required to make the mechanism usable by hand (a Builder can
  add a §XI block to any node today, by hand, once the schema text exists).
- **PARKED (peripheral, explicitly out of this plan, per Anti-Scatter + Governor's own instruction scope):**
  (a) a mechanical `[DRAFTS]` plan-audit check enforcing the field shape — named as a disclosed follow-on, not
  built here (this plan's ask was the DATA MODEL, not its enforcement); (b) the frontend schema/back-office
  rendering + query UI — CS-FRONTEND-001's domain, a separate build; (c) registering `DRAFT-RAW`/`PARKED`/
  `PROMOTED` into VOC-00002 as a formal internal-axis entry — deferred to Opus's Stage-1 ruling (Existing-First
  item 4), not pre-decided by Sonnet.

## The Rule — executable procedure
1. **Add ARCH-00008 §XI "Drafts / Pending-Ideas (OPTIONAL)"** immediately after existing §X (Audit), before "What
   this document is NOT." Marked OPTIONAL at the section level — a node with no drafts omits §XI entirely (A3 is
   satisfied by the section's EXISTENCE-when-used, not by mandatory presence on every node; contrast with §I–X
   which are mandatory).
2. **Field shape per draft item** (a YAML-like block, machine-parseable, embedded in the node's own Markdown file
   — not a separate registry, so the node stays a self-contained context-carrier):
   ```
   - draft_id: {ParentNodeID}.DRAFT-{NN}   # locally sequenced WITHIN the node; NOT a naming-registry.yaml
                                             # allocation (this is a sub-item, not a new CISEM-{TYPE}-{SEQ}
                                             # node) — flagged for Opus confirmation, see Path Rejection
     title: "<short idea title>"
     tag: [<VOC-00001 tags, or 'MISSING-TERM-FLAG' per CLAUDE.md §4 if none fit>]
     status: DRAFT-RAW | PARKED | PROMOTED      # LOCAL enum (Existing-First item 4) — distinct from the
                                                  # node's own global Status field
     content: "<free text; placeholders populated gradually — a draft may sit with only a title for a long time>"
     created_date: "YYYY-MM-DD"
     promoted_to: "<CISEM-{TYPE}-{SEQ}, populated ONLY when status: PROMOTED>"
   ```
3. **Promotion protocol (no shortcut, A4/I25 upheld):** a draft item reaching `status: PROMOTED` MUST first pass
   through the FULL §3 hard gates (Goal-First, Corespine-First, Existing-First, Core-vs-Instance, Pocket
   Declaration, False Assumption, Naming & Index-Extension via the ONE naming-registry.yaml gate, Size Gate) —
   identical treatment to any other new creation event. The draft's `content:` is a STARTING POINT for the new
   node's Goal/Rule, never auto-copied as final. This mirrors CLAUDE.md §2.6's own rule for IBD promotion
   ("Promotion to a governed node is a SEPARATE, later step that runs the full gates") — ONE promotion discipline,
   reused, not duplicated (I19/A8).
4. **Lifecycle transitions:** `DRAFT-RAW` (just captured, unrefined) → `PARKED` (registered, intentionally set
   aside — Governor/Opus judgment, per §2.7 park-by-demand) → `PROMOTED` (graduated through step 3). A draft may
   also simply remain `DRAFT-RAW` or `PARKED` indefinitely — no forced completion (D6 context-focus, not rigidity).
5. **Queryability:** because §XI is a structured block (not prose) inside every node file that has one, a future
   scan (grep or a Haiku-gather pass) can enumerate all drafts repo-wide by `tag:`/`status:` without a separate
   index file — the node itself IS the record (A1 nothing stands alone; node-as-context-carrier).

## Tags + Statuses on EVERY node this plan creates
This plan creates **ZERO new governed nodes**. It extends ONE EXISTING node (CISEM-ARCH-00008, Version does NOT
bump by this drafting task — that happens on implementation per ARCH-00008's own "Edits are proposals... any
change bumps the version" rule, §Change protocol). No new CISEM-{TYPE}-{SEQ} node is minted by adding §XI itself;
individual DRAFT items are explicitly NOT nodes until promoted (step 3 above). The plan's own header carries its
tag/status (see above).

## Per-File Alignment Table
| File | ID / Number | Schema Placement (SCHEMA-00001) | Tag (VOC-00001) | Status (VOC-00002) |
|---|---|---|---|---|
| `dna/planning/CISEM-ARCH-00409-node-drafts-pending-ideas-plan.md` (this file) | CISEM-ARCH-00409 (Sonnet-allocated via naming-registry.yaml, next_seq 409→410) | T-SYS, planning-governance layer | planning-domain, node-dna, drafts | Status: PROVISIONAL-ACTIVE / Planning Status: AWAITING-BUILDER-REVIEW |
| `dna/corespines/CS-AI-BEHAVIOR-001/CISEM-ARCH-00008-base-contract-node-dna.md` (target of §XI addition — NOT modified by this drafting task) | CISEM-ARCH-00008 (existing, unchanged number; RATIFIED 2026-07-16) | T-SYS, governance/schema layer | schema, node-dna, base-contract, governance (existing, unchanged) | Status: RATIFIED (unchanged; §XI addition is a proposal per ARCH-00008's own Change-protocol, bumps Version on implementation only) |
| `dna/vocabulary/CISEM-VOC-00002-status-library.md` (candidate target for registering `DRAFT-RAW/PARKED/PROMOTED` as a named internal axis — NOT modified by this drafting task; Opus Stage-1 rules whether to register) | CISEM-VOC-00002 (existing, unchanged number) | T-SYS, vocabulary layer | status-library, vocabulary, draft (existing, unchanged) | Status: DRAFT (unchanged by this plan) |
| `dna/naming-registry.yaml` (already modified by Sonnet — ARCH next_seq 409→410, comment pre-registers this title) | REG type, self-exempt | T-SYS, naming-allocation layer | naming, numbering, mandatory | present, unchanged status |

## What DOES change (upon ratification — implementation is a LATER, separate step; nothing here executes now)
- `dna/corespines/CS-AI-BEHAVIOR-001/CISEM-ARCH-00008-base-contract-node-dna.md` — new §XI "Drafts /
  Pending-Ideas (OPTIONAL)" per The Rule steps 1–4; Version bump + Change-log entry per ARCH-00008's own protocol.
- (Conditional on Opus's Stage-1 ruling, Existing-First item 4) `dna/vocabulary/CISEM-VOC-00002-status-library.md`
  — a new "## Draft Lifecycle Status (per-item, internal to §XI blocks)" section listing `DRAFT-RAW | PARKED |
  PROMOTED`, explicitly marked as a THIRD axis distinct from Node Status and Planning Status.

## What does NOT change
- No new schema/protocol/corespine node is created (Core Seed 1) — ARCH-00008 keeps its ID, Type, and RATIFIED
  status; this plan does not re-stamp it.
- CLAUDE.md §2.6 (IBD) is UNCHANGED — the repo-wide raw-capture mechanism remains the home for ideas NOT yet
  attached to a specific existing node; §XI is the home for ideas that already ARE about a specific node.
- No frontend page is built or edited by this plan (explicit follow-on, Dependencies below).
- No mechanical `[DRAFTS]` plan-audit check is built by this plan (explicit follow-on, Dependencies below).
- The mandatory Sections I–X of ARCH-00008 are untouched — §XI is strictly additive and OPTIONAL.

## Definition-of-Done reference
Verified at implementation against `dna/checks/definition-of-done.md` (cited, not re-derived): PRODUCED (§XI
text exists in ARCH-00008) → WIRED (an honest `NOT-YET-WIRED` tag on the enforcement side is acceptable at this
phase — no `[DRAFTS]` check is claimed) → PROPAGATED (VOC-00002 gains the sub-enum IF Opus rules to register it,
A8 — one place, cross-referenced) → HOOKED (N/A — no new CAL hook required for a schema-text addition) →
COMMITTED+PUSHED → VERIFIED (a worked example: this plan's own implementation step SHOULD add one real §XI block
to a live node as a proof-of-shape, disclosed as a stress-test, not claimed as the check).

## Propagation Declaration
This plan changes the NODE-DNA SCHEMA (a T-SYS structural rule). On implementation it propagates BY-REFERENCE,
never by copy: (1) ARCH-00230 (the creation checklist SSOT) is NOT edited — §XI is OPTIONAL, so it does not
become a new mandatory checklist item; a one-line pointer note MAY be added to ARCH-00230 noting §XI's existence
for AI awareness, disclosed as an optional companion edit, not required by this plan's Core Seed 1 scope; (2) any
future `[DRAFTS]` check reads the §XI block SHAPE by-pattern (same posture as `[SEED]` reading `[[CORE-SEED]]`
blocks) — not built here; (3) the frontend schema/back-office page (`frontend/pages/schema.html`,
`frontend/pages/nodes.html` — both already exist under CS-FRONTEND-001) is the NAMED future rendering surface —
no new page is proposed; an enhancement to the EXISTING pages is the disclosed follow-on, not a new artifact
(A8/I19 — reuse, don't proliferate frontend pages).

## Dependencies (blocks-on / unblocks-for)
- **Blocks-on:** nothing — CISEM-ARCH-00008 is RATIFIED and free to amend via its own Change-protocol + a
  ratified plan (A4/I25 satisfied by this plan itself once ratified).
- **Unblocks-for:** any future session wanting to park a node-specific idea in-place instead of a disconnected
  IBD file; the eventual frontend back-office edit+export flow the Governor described (this plan is explicitly
  named as "the git-side data model the frontend back-office edits+exports into").
- **Follow-on (explicitly NOT built here, disclosed per I2/I22):** (a) a mechanical `[DRAFTS]` plan-audit WARN
  check validating the §XI field shape; (b) frontend rendering/query UI on `schema.html`/`nodes.html` (or a new
  page, if Opus judges the existing two insufficient) filtering drafts by tag+status across all nodes; (c) the
  VOC-00002 sub-enum registration, conditional on Opus's Stage-1 ruling.

## Ratification Path
Stage 0 (iterative Haiku→Sonnet→Opus draft-review loop per ARCH-00190 §3, two orthogonal lenses per Enhancement
7) → Stage 1 (Opus soundness, cold default-refute, `cisem-opus-pe` — includes the VOC-00002 sub-enum ruling) →
Stage 1.5 (fable mentor — not invoked; no Governor activation requested) → Stage 2 (Governor decree). Planning
Status transitions per ARCH-00190 §1 unchanged.

## Self-Compliance (against ARCH-00230 checklist + ARCH-00190 §2)
✓ Header (ID/Type/Status/Planning-Status/depth_level/tags/goal/corespine/pocket) ✓ Tier-Routing Declaration
✓ Anti-Scatter Ordering ✓ Why-standalone (Executive Summary, self-contained) ✓ Rule-as-procedure (5 numbered
steps) ✓ Tags+Statuses section (zero new nodes, stated explicitly) ✓ Per-File Alignment Table ✓ What-DOES /
What-does-NOT change ✓ DoD reference ✓ Propagation Declaration ✓ Dependencies ✓ Ratification Path ✓ Path
Rejection Declaration (below) ✓ CAL reference ✓ Change log ✓ Independent Verifier named (`cisem-opus-pe`)
✓ Existing-First stated (6 sources).

## Path Rejection Declaration (CLAUDE.md §2.8)
- ❌ Rejected: creating a NEW schema/corespine node for drafts instead of extending ARCH-00008 §XI — I19/A8
  forbids a fork; the existing RATIFIED node is the exact governing home for node-DNA fields.
- ❌ Rejected: routing draft-item ideas through IBD instead — IBD is repo-wide/standalone; this plan's ask is
  explicitly PER-NODE, in-place scratch space (disambiguated in Existing-First item 3).
- ❌ Rejected: silently merging `DRAFT-RAW`/`PARKED`/`PROMOTED` into the global Node Status enum (VOC-00002) —
  CLAUDE.md §4 forbids invented vocabulary without flagging; this plan FLAGS it as a proposed THIRD, LOCAL axis
  and leaves the registration decision to Opus's Stage-1 ruling.
- ❌ Rejected: allocating a naming-registry.yaml ID to individual draft items — a draft is a sub-item of an
  existing node, not a new CISEM-{TYPE}-{SEQ} node; only PROMOTION triggers the real naming-gate allocation
  (flagged explicitly in The Rule step 2 for Opus confirmation, not silently assumed).
- ❌ Rejected: building the frontend rendering or the `[DRAFTS]` check inside this plan — scope-creep past the
  schema-extension ask; both routed as explicit, disclosed follow-ons (Dependencies).

## CAL reference (CISEM-ARCH-00390)
Pre-commit `[ZF]`+`[DOD]`+`[ROUTING]`/`[ALIGN]`/`[TAG-STATUS]`+`[POCKET]` run on this plan file at commit time.
No new CAL surface is claimed for the schema addition itself (honest NOT-YET-WIRED per DoD item 2) — the future
`[DRAFTS]` check is the disclosed follow-on that would become new `[ZF]`/`[EDGE]` surface.

## Change log
- v0.1 — 2026-07-20 (Sonnet, STRUCTURING tier, dispatched by Opus per Governor-approved instruction): initial
  draft. Existing-First search (6 sources, incl. disambiguation from IBD), field-shape spec, promotion protocol
  reusing IBD's own discipline, flagged local status-enum, Per-File Alignment Table, Path Rejection populated
  per Core Seeds 1–3.
