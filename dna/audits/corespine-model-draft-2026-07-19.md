# Corespine Model — Draft for Governor Consensus (STEP 0 of ARCH-00396's successor foundation)
**Type:** AUDIT ARTIFACT / DRAFT-FOR-CONSENSUS (NOT a plan, NOT a ratified model — GATHER+DRAFT only) | **Tier:** cisem-sonnet (STRUCTURING), executing Opus's exact task under 5 Opus-authored Core Seeds
**Status:** DRAFT — no truth-field stamped. Opus refines this; the Governor ratifies later (CORE-SEED 2).
**Governing corespine:** none yet — this artifact drafts a MODEL for how corespines themselves connect; it is
explicitly NOT a corespine and creates none (CORE-SEED 2). Filed in `dna/audits/` per the existing audit-artifact
convention (see `dna/audits/creation-layer-overlap-map-2026-07-18.md`, same genre: evidence for a future gate).
**Goal:** Give Opus + Governor a rigorous, disk-grounded draft of the corespine model (what a corespine IS, how
it forks, how it inherits, how A1 "nothing stands alone" gets mechanically enforced) so CISEM's axioms A1/A2 stop
being implicit and become checkable — BEFORE anything else is built through this layer.

## Pocket Declaration
- **reasoning_scope:** gather the current corespine state from disk + draft a model, ENHANCING existing homes
  (ARCH-00008, ARCH-00394, corespine-registry.yaml) — never fork them
- **inherited_constraints:** CORE-SEED 1-5 (verbatim below); I7 (no truth-fields); I19 (Existing-First, stated);
  I25 (no governed creation without a ratified plan — this is explicitly NOT a creation)
- **output_contract:** one audit-artifact file (this one) + one mirror-sync (FOUND-00001 A8 row, done above)
- **ai_cannot:** create a new corespine; stamp RATIFIED/DECREE/CONNECTED on anything; decide the two-root
  question, the single-vs-two-apex question, or any OPEN QUESTION below — those are Governor's
- **recorded_at:** 2026-07-19
- **cal_reference:** ARCH-00390

## §3.2b Existing-First (stated, per I19)
Searched, in order: `dna/ssot-registry.yaml` (no `corespine_model` entry exists — confirms this is a genuine
gap, not a duplication); `dna/corespines/corespine-registry.yaml` (read in full — 14 top-level entries + 2
CS-UNIVERSAL children + 1 SIMULATION-ONLY child, see §1 below); `dna/naming-manifest.yaml` + `naming-registry.yaml`
(no prior CORESPINE-MODEL / GRAPH artifact registered); the archive/ledger (`quality-ledger.yaml` runs 1-28,
`session-learning-index.yaml`) for RULED-OUT or prior attempts — found ARCH-00382 (unified-graph plan,
SUPERSEDED/DEFERRED, resurrectable, NOT ruled out) which is the direct A1-connection precursor to this task, mined
throughout §2c below; grepped the repo for `corespine model`, `fork mechanics`, `inheritance mechanics` — no hits
before this file. RESULT: no existing home for "the corespine model" as a rigorous definition — this is new
GATHER+DRAFT content, filed as an audit artifact (not a corespine, not a protocol) pending Opus refinement.

---

# §1. CURRENT-STATE MAP

Read directly from `dna/corespines/corespine-registry.yaml` (full file) + every manifest found on disk (2 exist:
ARCH-00393 for CS-FRONTEND-001, ARCH-00397 for CS-CREATION-001) + `dna/corespines/CS-MASTER-VALIDATION-001.md`
(has its own file, NOT declared as `canonical_file` in the registry — flagged below) + ARCH-00008's own header
(self-reports a registry mismatch) + `pocket-mechanism.md`.

| Corespine | Status (registry) | depth_level | Declared PARENT (where, if anywhere) | Manifest on disk? | Children / forks declared | Resolves on disk? | A1/A2 flag |
|---|---|---|---|---|---|---|---|
| **CS-MASTER-VALIDATION-001** | RATIFIED (foundational decree) | L1 | none — self-governs: "Governing corespine: itself (root_authority)" | YES — `dna/corespines/CS-MASTER-VALIDATION-001.md` (own file) | none | RESOLVES (own content file exists) but **registry entry only lists `distributed_in`, not `canonical_file`** even though a dedicated file exists — registry under-represents its own root | Root, correctly self-terminating (no A2 breach) — but registry-level inconsistency (see §3 flag R-1) |
| **CS-CREATION-001** | RATIFIED (Gate C, foundational decree) | L1 | Frontmatter `Core_spine: CS-MASTER-VALIDATION-001` (validates, does NOT parent — Opus's two-root ruling, run 26); manifest §II states "**Parent: none — this IS the apex**" | YES — ARCH-00397 (canonical_file registered) | 14 corespines cite it as governing/parent (registry-level, per manifest §III) | RESOLVES — explicit, disclosed apex declaration | **OPEN QUESTION Q1 below** (two-root vs single-apex) — not a breach, a disclosed unresolved ruling |
| **CS-FRONTEND-001** | RATIFIED (retro-plan ARCH-00395) | L2 | Manifest §II: "**Parent: CS-CREATION-001**" — explicit | YES — ARCH-00393 (canonical_file registered) | none | RESOLVES — full chain CS-FRONTEND-001 → CS-CREATION-001 → CS-MASTER-VALIDATION-001 | Clean — the ONLY corespine with both a manifest AND an explicit Parent field. **BUT: manifest §II itself still says `Status: DECLARED (Opus ratification pending)` while the header/§I/§VII all say RATIFIED — an internal I16 status contradiction inside its own manifest, undetected by plan-audit's field-vs-field check** (flag R-2) |
| **CS-THRESHOLD-001** | RATIFIED | L2 | none declared anywhere | **NO** — `distributed_in: [ARCH-00320, CLAUDE.md]` only; confirmed BODILESS by quality-ledger run 17 ("find returns no manifest") | none | **DOES NOT RESOLVE** — RATIFIED status cites no manifest, no parent, content lives scattered inside two OTHER nodes' bodies | **A1 + A2 BREACH** — a RATIFIED corespine with no content home and no parent; already disclosed in ledger run 17 as "honesty gap," still open |
| **CS-AI-BEHAVIOR-001** | DECLARED | L1 | **none declared anywhere** — no registry parent field, no manifest Parent field (no manifest exists) | NO — `distributed_in: [CLAUDE.md, ARCH-00008, pocket-mechanism.md]`, no canonical_file | `children: [pocket-mechanism.md]`; `pending_children: {ai-oversight-layer3.md: PLACEHOLDER}` | **PARTIALLY DOES NOT RESOLVE** — registry claims ARCH-00008 as distributed content, but **ARCH-00008's own header contradicts this**: "Governing corespine: CS-MASTER-VALIDATION-001" (not CS-AI-BEHAVIOR-001) and explicitly self-discloses "**not a declared child in corespine-registry.yaml yet — flagged, not assumed**" (ARCH-00008:28-30) | **A1 + A2 BREACH, self-disclosed on both sides** — a genuine two-way connection mismatch: the registry claims the edge, the node itself says the edge isn't real yet |
| **CS-AI-PROFILING-001** | DECLARED | L1 | none declared anywhere (no registry parent field) | YES — canonical_file = ARCH-00240 (persona node; confirmed on disk, consistent — ARCH-00240 header: "Governing corespine: CS-AI-PROFILING-001") | `team: {agents: 3, skills: 5}` | Content resolves ONE direction (ARCH-00240 → CS-AI-PROFILING-001) but **no field states what governs CS-AI-PROFILING-001 itself** | **A2 BREACH** — has a manifest, but the manifest is a "content" node not a corespine-declaration node (no §II Parent table like ARCH-00393/00397 have); no parent chain upward |
| **CS-ACCOUNTABILITY-001** | DRAFT | L1 | none declared anywhere | NO — `parked_draft: dna/ibd/IBD-0002-accountability-4-routes.md` only (an IBD, not a corespine manifest) | `branches: {core, development, internal, external}` — the clearest FORK example in the registry | **DOES NOT RESOLVE** — branches declared but none has content; parked in an IBD, not promoted | **A2 BREACH** (no parent) — but honestly DRAFT-status, not over-claimed |
| **CS-CONTROLPLANE-001** | PROPOSED | L1 | none | NO | none | Registry stub only — goal text, no content | **A1+A2, but PROPOSED = aspirational, low severity** |
| **CS-SOLUTIONS-001** | PROPOSED | L1 | none | NO | `children: [SOL-GIFTPRO-001]` — edge explicitly RETAINED per registry note (good A1 discipline: an edge was NOT silently severed even though the child is SIMULATION-ONLY) | Registry stub; child edge is the one clean thing here | A2 breach for itself (no parent), but its OWN child-edge is a positive example (see §2b) |
| **CS-AI-INTEGRATION-001** | PROPOSED | L1 | none | NO | none | Registry stub only | A1+A2, PROPOSED, low severity |
| **CS-UNIVERSAL-001** | PROPOSED | L1 | none | NO | `children: {CS-DATA-PATTERNS-001, CS-DOCGEN-001}` — both PROPOSED, both `depth_level: L1` (same as parent — likely should be L2, flagged not fixed) | Registry stub; children stubs too | A1+A2 for the root; children carry a depth_level bug (same level as parent, no depth-step) — flagged, not fixed (out of scope for a draft) |
| **CS-LOOPS-001** | PROPOSED | L1 | none | NO | `branches: {improvement-loop, learning-loop, qc-findings-loop, violation-review-loop}` — 2/4 marked `unwired: true` | Registry stub; branches partially wired in PROSE only (learning-loop = RQC §6 LEARN stage; qc-findings-loop = RQC MEASURE stage) but no file/edge on disk ties them | A1+A2; 2 branches self-disclose `unwired` honestly |
| **CS-PRIORITY-001** | PROPOSED | L1 | none | NO | none | Registry stub | A1+A2, low severity |
| **CS-CORECOUNCIL-001** | PLACEHOLDER | L1 | none | NO | none | Registry stub, explicitly PARKED | A1+A2, but honestly PLACEHOLDER |
| **SOL-GIFTPRO-001** | SIMULATION-ONLY | L1 | `children` of CS-SOLUTIONS-001 (registry-level) | NO (SIMULATION-ONLY block, isolated deliberately) | none | Edge to parent resolves; content is intentionally not real | Correctly tagged, not a genuine breach — the retained-edge pattern is the model to imitate (§2c) |

**Registry-wide structural finding (the root cause under most rows above):** `corespine-registry.yaml` has **no
formal `parent:` key in its schema at all**. The only two corespines with an actual declared Parent are the two
that went through the ARCH-00394 wizard and got a manifest with a `§II Corespine Declaration` table (CS-FRONTEND-001,
CS-CREATION-001) — Parent lives in **prose, inside the manifest**, not in the registry. Every other corespine
(12 of 14+ entries) has ZERO parent declaration anywhere on disk. This is the single biggest, most repeatable A1/A2
gap — not 12 separate mistakes, but ONE missing registry field. (This is also the exact "Full Parent-field retrofit"
item COMPACT STATE v5 already named as DEFERRED — this draft is the mining pass that specifies what that retrofit
must do, per Governor's STEP 0 framing.)

**A2's own enforcement mechanism is itself under-specified.** CLAUDE.md §2.4 A2 cites "`Schema_anchor` &
`Core_spine`" as the enforcement fields. Grep of `dna/protocols/CISEM-ARCH-00011-naming-numbering-policy.md`
(the naming/schema SSOT) finds **no definition of `Schema_anchor` or `Core_spine`** — these two fields exist
ONLY as frontmatter keys inside the two ARCH-00394-wizard-produced manifests (ARCH-00393, ARCH-00397), invented
ad-hoc by the wizard's §IV template, never formally specified in ARCH-00008 (node schema) or ARCH-00011 (naming
policy). A1's own citation ("§3.2a; Schema_anchor & Core_spine") in CLAUDE.md points at a mechanism that has no
SSOT definition — this is itself an A8/A2 gap the model draft below must close.

---

# §2. DRAFT CORESPINE MODEL

Grounded entirely in what's already ratified/on-disk (CS-MASTER-VALIDATION-001 §3 V1-V5, ARCH-00394's wizard,
ARCH-00397's apex manifest, ARCH-00382's inheritance-graph plan) — **enhancing these existing homes, not forking
them** (CORE-SEED 3). This section proposes definitions ONLY; it does not create or ratify anything.

## 2a. What a corespine IS

Synthesizing CS-MASTER-VALIDATION-001 §3 (validity criteria V1-V5) + ARCH-00397 §II (the apex's own self-declared
schema) + the two real manifests (ARCH-00393/ARCH-00397) as the only worked examples on disk:

A corespine is a **governance node with four mandatory properties**, none of which is currently enforced as a
single checkable unit (they are scattered across CS-MASTER-VALIDATION-001 §3, ARCH-00394 §IV, and convention):
1. **Identity** — a `CS-{NAME}-{SEQ}` id, a `status` from the wiring-state enum (DECLARED → PROPOSED/PLACEHOLDER →
   RATIFIED), a `depth_level`.
2. **Content home** — a `canonical_file` (a manifest, ARCH-00394 §IV shaped) OR an honestly-declared
   `distributed_in` list. CS-THRESHOLD-001 proves `distributed_in`-only is a real failure mode when nothing in
   that list is itself the corespine's own content — this model proposes `distributed_in` may NEVER be the sole
   content home for a RATIFIED corespine (only for DECLARED/PROPOSED, disclosed as pre-manifest).
3. **A declared PARENT** (or explicit apex/root self-declaration) — currently the single largest gap (§1 above).
4. **Governed artifacts + invariants** — what it governs, and the bright-line rules (FE-I1-I10 / CR-I1-I4 pattern)
   that make "governs" checkable rather than aspirational.

## 2b. FORK mechanics — when/how a corespine forks

Two real fork patterns already exist on disk; the model should NAME both rather than invent a third:

- **BRANCH-fork (same corespine, multiple routes)** — `CS-ACCOUNTABILITY-001.branches: {core, development,
  internal, external}` (the Governor's 4-route structure, parked in IBD-0002). One corespine identity, multiple
  sub-scopes that will each mature independently but share the parent's identity and ratification.
- **CHILD-fork (new corespine, distinct identity, same parent)** — `CS-UNIVERSAL-001.children: {CS-DATA-PATTERNS-001,
  CS-DOCGEN-001}` and `CS-SOLUTIONS-001.children: [SOL-GIFTPRO-001]`. Each child is its OWN corespine/node with
  its own id, but its `Parent`/`Governing corespine` field points up. This is the CORE-SEED-3-relevant pattern:
  ARCH-00397 CR-I3 already states the rule for this ("no child corespine may fork content out of this apex's
  SSOTs... it may only POINT to them") — the model should generalize CR-I3 from "apex-specific" to a UNIVERSAL
  fork rule for every parent/child pair, not just the apex.
- **Retained-edge-on-simulation** (SOL-GIFTPRO-001) is the cleanest positive example: a child can be tagged
  SIMULATION-ONLY / non-real WITHOUT severing the governance edge — the registry explicitly kept the edge and
  named why. This is the pattern to copy whenever a corespine is deferred/parked, not the CS-THRESHOLD-001 pattern
  of silently having no edge at all.

**Proposed FORK rule (draft, for Opus refinement):** a fork is EITHER a `branches:` split (same identity) or a
`children:` new-identity split (per above); either way the child/branch MUST declare its parent inline (not just
be listed in the parent's registry entry) — a ONE-WAY registry listing (as CS-AI-BEHAVIOR-001/ARCH-00008 shows,
§1 table) is not a resolved connection; it must be bidirectional to count as connected.

## 2c. INHERITANCE mechanics — what a child inherits from its parent

Mined directly from ARCH-00382 (unified-graph plan, DEFERRED but not ruled out) since it is the only place CISEM
has actually specified inheritance mechanics in numeric, testable form:

- **What inherits (ARCH-00382 Phase 0):** `inherits_from[]` — explicitly MULTI-VALUED from the start (a corespine
  can have more than one governing ancestor — this maps directly onto the CS-CREATION-001/CS-MASTER-VALIDATION-001
  two-root reality this draft's §1 table surfaced: CREATE inherits doctrine, MASTER-VALIDATION inherits validity
  criteria — TWO DIFFERENT inheritance types from TWO DIFFERENT parents, which the current single-`Governing
  corespine` field cannot express).
- **What is inherited, concretely (already named in ARCH-00397 CR-I2/CR-I3, generalized here):** (a) the Creation
  Doctrine D1-D6 — HOW creation happens; (b) the invariant set applicable at that depth (I1-I25); (c) the gate
  sequence (§3.0-3.7); NOT the SSOT content itself — children POINT to parent SSOTs, never copy them (A8, CR-I3).
- **Precedence / conflict resolution (ARCH-00382 Phase 1, not yet built):** "foundational/root cores win;
  deterministic diamond resolution" for the case a corespine has two ancestors with conflicting rules — directly
  relevant to the CS-CREATION-001 (creation apex) vs CS-MASTER-VALIDATION-001 (validation root) two-root case:
  ARCH-00382's own un-built precedence mechanism is exactly what would formally resolve Open Question Q1 below,
  once built.
- **Mutation propagation (ARCH-00382 Phase 3):** "a verified pattern must reach ALL children" — currently there
  is no mechanism for this; a change to CS-CREATION-001's doctrine does not automatically re-verify its 14
  children.

## 2d. CONNECTION mechanics for A1 ("nothing stands alone") — how it gets MECHANICALLY enforced

This is the part ARCH-00382 was explicitly built to solve and is currently DEFERRED. Mining it for the connection
mechanism (not proposing to resurrect the whole plan — that is Opus/Governor's call, flagged as Open Question Q2):

- **Existing partial mechanism (LIVE today):** `plan-audit.sh` I1 + I5 (dangling-reference scan) — catches
  BROKEN references (a citation to something that doesn't exist) but does **NOT** catch a MISSING reference (a
  corespine that exists but declares no parent at all, e.g. every row in §1's table above with "none declared
  anywhere"). I1/I5 is a "does this pointer resolve" check, not a "does this node have the mandatory pointer at
  all" check — different failure classes.
- **ARCH-00382's proposed fix (Phase 0, NOT yet built):** header contract fields `schema_position, depth_level,
  inherits_from[], core_ref, summary` — OPTIONAL at Phase 0 (validated WHERE PRESENT), mandatory only at a
  versioned Phase 4 migration. `plan-audit.sh` gains a validator that DERIVES the map from headers alone and
  flags orphans (a node with `inherits_from: []` when depth_level > root).
- **What this draft adds (new mining, not in ARCH-00382 v1.2):** the §1 table above shows the orphan problem is
  not evenly distributed — it is concentrated in exactly the corespines that have NO manifest at all (12 of 14+).
  A cheaper, lower-blast interim step than the full ARCH-00382 graph MVP: require the `parent:` key to exist as
  a **registry-level field** (not manifest-only) for every corespine, checkable by a single grep-based
  plan-audit rule, BEFORE the full typed-inheritance-graph (ARCH-00382 Phase 0+) is resurrected. This is flagged
  as a candidate SEQUENCING recommendation, not decided here (Open Question Q3).

---

# §3. RESTRUCTURE FLAGS (A8-EXTENDED — where existing corespines need restructuring, not just enhancement)

Per CORE-SEED 3 and the Governor's explicit "do NOT over-preserve" instruction (A8-EXTENDED, CLAUDE.md §2.4/§1.6),
naming candidates honestly rather than defaulting to preservation:

- **R-1 — CS-MASTER-VALIDATION-001 registry entry is stale relative to its own content.** The corespine HAS a
  real content file (`dna/corespines/CS-MASTER-VALIDATION-001.md`) but the registry only lists `distributed_in`,
  never promoting it to `canonical_file` the way CS-FRONTEND-001/CS-CREATION-001 were. This is a one-line registry
  fix, not a rebuild — flagged as the smallest, safest restructure candidate (A8-EXTENDED: "COMPLETING low-blast/
  low-risk pending items" — this qualifies).
- **R-2 — CS-FRONTEND-001's own manifest (ARCH-00393) has an internal status contradiction** (§II table says
  `Status: DECLARED (Opus ratification pending)` while the header/§I/§VII all say RATIFIED, per §1 table above).
  This is a genuine field-vs-field I16 gap `plan-audit.sh` did not catch (its I16 check is header-vs-body, not
  table-cell-vs-header) — small, disclosed, needs a routed fix, not a rebuild.
- **R-3 — CS-AI-BEHAVIOR-001 vs ARCH-00008's mutual disclosure mismatch** is the sharpest candidate for actual
  restructuring rather than a one-line fix: ARCH-00008 (RATIFIED, foundational) explicitly says it is filed under
  CS-AI-BEHAVIOR-001 (DECLARED, unratified) as its schema-carrying content, yet ARCH-00008's OWN "Governing
  corespine" field names CS-MASTER-VALIDATION-001 instead, and self-discloses the registry-child claim is not
  real. Resolving this needs a DECISION (does CS-AI-BEHAVIOR-001 formally adopt ARCH-00008 as a declared child,
  with CS-AI-BEHAVIOR-001 itself then needing a real parent up to CS-CREATION-001?) — not a mechanical patch.
  Flagged as a genuine restructure candidate, NOT decided here.
- **R-4 — the `Schema_anchor`/`Core_spine` frontmatter pair (A2's own cited enforcement mechanism) has no SSOT.**
  It should either be formally added to ARCH-00008 (node schema, the natural home) or explicitly declared as an
  ARCH-00394-wizard-only convention (scoped down, honestly, rather than left as an implicit universal claim in
  CLAUDE.md A2 that only 2/14+ corespines actually carry). This is a genuine A8/A2 restructuring need, not a
  preservation call — CLAUDE.md's own axiom text currently over-claims what's actually wired.
- **What was NOT flagged for restructure (deliberately preserved):** CS-CREATION-001/CS-MASTER-VALIDATION-001
  two-root structure — this is Open Question Q1, explicitly NOT decided by Sonnet (Governor's call); the
  CS-ACCOUNTABILITY-001 branches / CS-UNIVERSAL-001 children fork patterns — these are sound examples of the
  model, not restructure candidates; the 8 PROPOSED/PLACEHOLDER stub corespines (CONTROLPLANE, SOLUTIONS,
  AI-INTEGRATION, LOOPS, PRIORITY, CORECOUNCIL) — genuinely aspirational, not yet mature enough to need
  restructuring, just need the parent-field retrofit once a model is ratified.

---

# §4. PERSONA-AS-SUB-CORESPINE ASSESSMENT (structure/placement only — NOT built)

The Governor asked how the AI persona (CLAUDE.md §1.6 SHARED PERSONA) could become a formal sub-corespine within
CS-AI-BEHAVIOR-001. Assessment only, per CORE-SEED 2 (no build):

**Current state:** §1.6 lives directly in CLAUDE.md (the LOAD file, root operational layer) as prose — it is
NOT currently a corespine, sub-corespine, or child of anything in `corespine-registry.yaml`. The closest existing
governed analog is CS-AI-PROFILING-001 (canonical_file = ARCH-00240, "Persona: Pro Colleague" — a DIFFERENT,
narrower, review/consultation-role persona spec, explicitly scoped to "review/consultation roles," not the
all-tier §1.6 shared persona). These are two DISTINCT persona artifacts today (§1.6 = universal shared floor for
Opus/Sonnet/Haiku; ARCH-00240 = a specific PE-pocket review persona) — **not currently in conflict, but also not
consolidated under one home**, which is itself an A8 question worth Opus's attention separately from this draft.

**Placement assessment (structure only):**
- §1.6 is currently distributed inside CLAUDE.md, which is itself un-corespine'd (LOAD type, root operational
  layer, no `Governing corespine` field of its own — CLAUDE.md sits ABOVE the corespine layer by design, per
  §1 WHO YOU ARE).
- CS-AI-BEHAVIOR-001 (per corespine-registry.yaml) already governs "every AI instance — pocket mechanism,
  path-rejection, oversight" — this is the semantically correct PARENT for a persona sub-corespine (it already
  has ONE real child, `pocket-mechanism.md`, following the exact structural pattern a persona sub-corespine
  would need: a `.md` file under `dna/corespines/CS-AI-BEHAVIOR-001/`, no separate CISEM-{TYPE}-{SEQ} id needed
  per `pocket-mechanism.md`'s own precedent — §0 "Naming note" there explicitly explains why corespine children
  don't need the top-level numbering scheme).
- **If formalized**, the natural shape (mirroring `pocket-mechanism.md`'s pattern, not forking a new one) would
  be: `dna/corespines/CS-AI-BEHAVIOR-001/persona-mechanism.md` as a NEW sibling child alongside
  `pocket-mechanism.md`, with CLAUDE.md §1.6 remaining the authoritative TEXT (A8, ssot-registry.yaml already
  names `behavior_principles: {ssot: "CLAUDE.md §2"}` as the pattern — a persona sub-corespine file would be a
  POINTER + governance wrapper, not a copy, exactly like `pocket-mechanism.md` wraps CLAUDE.md §3.3 rather than
  restating it).
- **This is NOT decided here** — it is a genuine placement candidate worth Opus/Governor considering as part of
  the model's first real application, but building it now would be exactly the "small/safe" I25 trap CORE-SEED 2
  forbids.

---

# §5. OPEN QUESTIONS for Governor consensus (do not decide — routed, not resolved)

1. **Q1 — Two-root vs single-apex.** Is CS-MASTER-VALIDATION-001 (validation root) + CS-CREATION-001 (creation
   apex) a genuine TWO-ROOT model (Opus's disclosed run-26 ruling, still in the Governor veto window per COMPACT
   STATE v5), or should the model collapse to a SINGLE apex? This draft's §2c inheritance section shows the
   two-root reality is at least partially GROUNDED in real multi-valued inheritance need (doctrine vs validity
   are genuinely different inheritance types) — but the final call is the Governor's, not mined further here.
2. **Q2 — Resurrect ARCH-00382 now, or sequence this draft's lighter registry-field fix first?** §2d proposes a
   cheaper interim step (registry-level `parent:` field, single grep-checkable) ahead of the full typed-inheritance
   graph MVP (ARCH-00382 Phase 0+, still gated on ARCH-00392 landing per its own Resurrection trigger). Sequencing
   decision needed: does STEP 0's model get its own lightweight plan, or does it fold into ARCH-00382's eventual
   resurrection?
3. **Q3 — Does `Schema_anchor`/`Core_spine` get formally added to ARCH-00008, or scoped down to a wizard-only
   convention?** (R-4 above) — A2's own citation currently over-claims a mechanism only 2/14+ corespines carry.
4. **Q4 — CS-AI-BEHAVIOR-001 / ARCH-00008 mutual mismatch (R-3):** does CS-AI-BEHAVIOR-001 formally adopt
   ARCH-00008 as a declared child (requiring CS-AI-BEHAVIOR-001 itself to then get a real parent up to
   CS-CREATION-001, completing the chain), or does ARCH-00008 stay governed directly by CS-MASTER-VALIDATION-001
   as its header already states (meaning the CS-AI-BEHAVIOR-001 registry `distributed_in` listing is simply wrong
   and should be removed)? Two different restructures with different blast radii — Governor's call.
5. **Q5 — Persona-as-sub-corespine (§4):** worth building as a NEXT step once this model is ratified, or should
   §1.6 stay CLAUDE.md-resident prose indefinitely (A6 context-focus — not every governed concept needs a
   corespine wrapper)? Flagged, not decided.

---

## Path Rejection Declaration (CLAUDE.md §2.8)
- **Rejected: creating a `CS-CORESPINE-MODEL-001` corespine (example-only — NOT-YET-A-NODE) to hold this content.** CORE-SEED 2 explicitly
  forbids creating any new corespine this run — this content stays in `dna/audits/` as a draft-for-consensus
  until Opus/Governor decide whether it graduates into a plan (I25) and, if so, where it lives (possibly folding
  into ARCH-00008/ARCH-00394/corespine-registry.yaml directly, per CORE-SEED 3's enhance-not-fork instruction).
- **Rejected: stamping any Status/RATIFIED/CONNECTED field on any existing node while gathering this material**
  (e.g. R-1/R-2/R-3/R-4 above are all findings, not fixes applied) — I7/CORE-SEED 2. The ONLY edit made outside
  this new file is the FOUND-00001 A8 mirror-sync CORE-SEED 4 explicitly required, which is a text-parity fix
  (SSOT catching up to its own already-Governor-decreed mirror), not a new ruling.
- **Rejected: resurrecting or modifying ARCH-00382** to fold this draft's findings in directly — that plan is
  Governor-DEFERRED with an explicit resurrection trigger (after ARCH-00392 lands); this draft mines it as
  evidence (§2c/§2d) but does not touch the file itself.

## Change log
| Date | Change | Author |
|---|---|---|
| 2026-07-19 | DRAFTED — GATHER+DRAFT for Governor consensus (STEP 0 of ARCH-00396's successor foundation); current-state map (14+ corespines), draft model (IS/FORK/INHERIT/CONNECT), 4 restructure flags, persona-sub-corespine placement assessment, 5 open questions. No corespine created, no truth-field stamped. | Sonnet (STRUCTURING, cisem-sonnet), executing Opus's task under 5 Core Seeds |
