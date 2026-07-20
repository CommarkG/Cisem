# Naming & Numbering Policy
**Node ID:** CISEM-ARCH-00011
**Type:** ARCH | **Status:** RATIFIED — Governor decree 2026-07-16 (confirmed via parallel Brain session, relayed to Builder). `root_authority: true` — ratified by foundational decree (§7): it defines naming that the validator chain itself depends on, so it does not wait for an upstream validator.
**Goal:** One unambiguous scheme for every node's name, sequence, split-children,
and retrieval index — closes the root cause of the -L1 collision incident.
**Governing corespine:** CS-MASTER-VALIDATION-001 (PRIO-BLOCKING, still open)
**Position in schema:** T-SYS, protocol layer (sibling to Template Protocol)

## Pocket Declaration (§3.3) — added 2026-07-20 (the new [POCKET] check surfaced this root_authority node had none)
- **reasoning_scope:** the naming + numbering + consistent-naming policy for every CISEM id, file, and concept
- **inherited_constraints:** A5 (hardcoded protocol), A8 (one source), I10/I19 (no fork/duplication); must not conflict with CS-MASTER-VALIDATION-001 once ratified
- **output_contract:** the ONE-GATE naming rules + schema (TYPE registry · ID format · consistent-naming §2.5 · RAW↔PURIFIED §3.5)
- **ai_cannot:** allocate a number outside naming-registry.yaml; coin a second name for an existing concept; self-ratify
- **recorded_at:** 2026-07-20

## 1. TYPE registry (extensible, not closed — extension requires this node's own update)
FOUND, DNA, GOV, ARCH, PARK, SES, WITNESS, VOC, LOAD, REG, SCHEMA, TEMPLATE-PROTOCOL
(`SCHEMA`, `TEMPLATE-PROTOCOL` registered 2026-07-16 — I9 resolution for
CISEM-SCHEMA-00001 and CISEM-TEMPLATE-PROTOCOL-001.) **Rule:** a node's `Type`
field MUST equal its ID prefix — no `Type: ARCH` on a `CISEM-SCHEMA-*` node.
Mismatch is an I9 violation.

## 2. ID format
**ONE-GATE RULE (2026-07-18):** `naming-registry.yaml` is the SINGLE naming/numbering gate for
EVERY id in CISEM — `CISEM-{TYPE}-{SEQ}` nodes AND pre-node namespaces (BP, IBD, HANDOFF). No file
allocates a number outside it; per-directory indexes only mirror. An id not registered there is a
violation (wired by BP-0005). This ends the parallel-authority drift (was: registry + queue/ + ibd/).

`CISEM-{TYPE}-{SEQ5}-{slug}.md` — sequence per TYPE, tracked in `naming-registry.yaml`.
Any creation MUST read next_seq before assigning, then increment.

**SPACING + TREE-ALIGNMENT rule (2026-07-18, Governor):** numbering LEAVES GAPS by design (the
10-spacing convention: …300, 310, 320…) so a new node can be inserted in its LOGICAL place later,
not appended to the end. In the Node-as-Hub schema, numbers should follow the tree — trunk →
branch → sub-branch → … → leaf — so position is readable from the number and there is room to grow
at every level. An **ALIGNMENT GATE** (wired in BP-0005) checks: (a) gaps are preserved, (b) a
node's number is consistent with its schema position (SCHEMA-00001), (c) no two nodes collide.
Re-numbering existing nodes to full tree-alignment is a PHASED plan, never big-bang. Concurrent-write
risk (Brain + Builder both writing) remains open — flagged, not solved by this policy alone.

**Declared naming exceptions (D6):** `CLAUDE.md` IS node `CISEM-LOAD-00001`, but the
harness mandates the literal filename `CLAUDE.md`, so it is a permanent, named
exception to the `{TYPE}-{SEQ5}-{slug}` format — not a violation. Audits (I1/I9)
must treat it as compliant-by-exception. Any future harness-mandated filename is
added here explicitly; an undeclared off-format filename remains a violation.

## 2.5 CONSISTENT NAMING — one term, everywhere (Governor decree 2026-07-20)
A concept has ONE canonical name, used IDENTICALLY across **every surface**: file names, vocabulary,
instructions, wizards, protocols, skills, and agents. When a concept is (re)named, the name propagates to
ALL its homes — no surface keeps a variant. This is the naming arm of A8 (one source) + reuse-before-coin
(GI-15): a second spelling of the same concept is a drift trap exactly like a second SSOT.
- **Canonical example (this decree's trigger):** the concept is **"AI Pocket"** → file `ai-pocket-mechanism.md`,
  term "AI Pocket" in vocab (ssot-registry `concepts`), and identical wording in CLAUDE.md §3.3 / the registry /
  every agent that declares one. The old `pocket-mechanism.md` / bare "Pocket" variants are retired.
- **Rule:** before creating or renaming, check the concept's existing canonical name (ssot-registry `concepts`
  + naming-manifest); reuse it verbatim. A rename is not done until every live surface carries the new name.
- **Enforcement:** a `[NAMING]` consistency check in `plan-audit.sh` (PROPOSED here, built as the follow-on
  bundle) flags a governed concept whose name appears in >1 spelling across surfaces. WARN first, BLOCK later
  (ARCH-00270). Historical dated snapshots (audits/diagnostics) are exempt — they record the name as it was then.

## 3. Mini-tree split (index-extension rule — Governor-corrected, not corespine-style reference)
A split child is not a new entity — it is a literal extension of its root's index,
mirroring corespine inheritance at the naming layer.
```
Parent (post-split): {ROOT-ID}-index.md  — stub, status SPLIT, lists children
Children: {ROOT-ID}-PART{NN}-{slug}.md — each carries `Parent: {ROOT-ID}` INLINE,
never inferred from filename alone.
```
"PART" is reserved exclusively for governed mini-tree splits — never reused as
general versioning (this is the direct fix for the original -L1 misuse).

## 3.5 RAW ↔ PURIFIED pair (imported/external content — Governor decree 2026-07-19, MANDATORY + mechanically enforced)
Any external/imported content captured into the vault is a **mandatory PAIR** sharing one ID stem — the raw
input is kept as its OWN file, and a SEPARATE purified version is created; purified content NEVER lives inside
the raw file. This protects native source vocabulary (D2, IBD capture-first) while producing a de-branded,
CISEM-aligned essence to actually work from.
```
{ID}-{slug}-RAW.md       — verbatim quarantine. APPEND-ONLY. Never de-branded, never edited into with
                            analysis. Header carries the RAW-EXTERNAL tag. Links forward to its PURIFIED sibling.
{ID}-{slug}-PURIFIED.md  — the de-branded, CISEM-aligned essence. A SEPARATE file. Links back to RAW via [[…]].
```
**Rule:** purified/analysis content MUST NOT be written into a `-RAW` file (raw stays raw). Once purification
runs, a `-RAW` file tagged `RAW-EXTERNAL` MUST have a `-PURIFIED` sibling. **MECHANICAL (plan-audit.sh, wired
2026-07-19):** the audit flags (a) any `*-RAW.md` tagged `RAW-EXTERNAL` with no matching `*-PURIFIED.md` sibling,
and (b) any `*-RAW.md` whose body contains a `PURIFIED` section header (contamination — purified content leaking
into the raw file). Both are WARN-level findings (I19-class: source-fidelity). First instance: [[IBD-0010-external-wizard-inputs-RAW]] ↔ [[IBD-0010-external-wizard-inputs-PURIFIED]].

**INTAKE SCHEMA (Governor decree 2026-07-19 — "verify a hardwired protocol for saving inputs, tagging + statusing, automatically"):**
every `RAW-EXTERNAL` file MUST declare two governance fields in its header, so the platform's *gathered wisdom* is
queryable, not lost: **`source:`** (who/what it came from) and **`trust_tier:`** — one of `EXTERNAL-UNTRUSTED` (default
for ALL external AI / MCP / web / imported content — a CLAIM to verify, never the Governor's voice; IBD-0008 security
core seed), `GOVERNOR` (the trusted voice), or `REPO` (resident CISEM truth). **MECHANICAL:** `[RAW-PAIR]` flags any
`RAW-EXTERNAL` file missing `source:` or `trust_tier:`. (Honest scope: this governs+verifies the *tagging/statusing* of
captured inputs; fully-automatic *capture* is BP-0006, still a planned remainder — DECLARED, not yet wired.)

**DE-POLLUTION PROVENANCE (Governor decree 2026-07-20, ARCH-00405 Phase 1 — the two-stage external-input intake
gate):** every `RAW-EXTERNAL` file additionally declares **`depollution_source:`** (which external project/model
performed Stage 1 branding/scaffolding strip — e.g. "claude.ai project X", "Gemini project Y") and
**`depollution_pass:`** (`yes` + a date, or absent if Stage 1 has not yet run). This is the SAME schema section as
`source:`/`trust_tier:` above, not a parallel one — the two new fields are sibling fields on the same
`RAW-EXTERNAL` header. Stage 1 (external de-pollution, done OUTSIDE CISEM per the fixed prompt at
`dna/checks/external-depollution-prompt.md`) strips branding BEFORE intake; Stage 2 (PAE, `CISEM-ARCH-00399`,
INSIDE CISEM) conflict-checks the de-polluted content against CISEM's own axioms/rulings WITH full internal
context. **HONEST LIMIT:** CISEM hooks run inside this repo; they CANNOT verify a Stage-1 pass actually happened
inside an external claude.ai/Gemini project — only that the provenance FIELD is present on intake. **MECHANICAL:**
`[RAW-PAIR]` flags any `RAW-EXTERNAL` file missing `depollution_source:` or `depollution_pass:` (WARN-only, same
posture as the `source:`/`trust_tier:` checks it sits beside).

## 4. Depth / Tag / Status — mandatory retrieval index (not optional metadata)
Every node MUST declare, at creation:
- **depth_level:** L1 (exists/summary) | L2 (operational) | L3 (full architectural)
- **tags:** free-form, cross-cutting (populated once Tag Library exists; until then, inline list)
- **status:** DRAFT | PROPOSED | DECLARED | RATIFIED | PLACEHOLDER | SCHEDULED | SPLIT | PROVISIONAL-ACTIVE

**`PROVISIONAL-ACTIVE` (added 2026-07-18, Governor-approved) — the bootstrap-escape status.**
A high-quality DRAFT that is IN USE to make progress (breaks chicken-and-egg), but NOT ratified.
Guardrails (or it becomes the permanent-draft trap): (1) the audit FLAGS every `PROVISIONAL-ACTIVE`
node each run until it is ratified+LIVE — the completion obligation lives in the audit, not a tag;
(2) anything CREATED THROUGH a provisional wizard/protocol is itself `PROVISIONAL-ACTIVE` and must be
RE-VERIFIED when the parent ratifies; (3) it applies ONLY to the bounded, named exception it was
granted for (e.g. the plan meta-layer bootstrap) — it closes on ratification. Track completion via
the 4 Wiring States (DECLARED→CONNECTED→ACCESSIBLE→LIVE).

**This is the SINGLE authoritative status enum (D2).** VOC-00002 (Status Library)
*mirrors* this list — it may not add or remove a value. On any conflict, ARCH-00011
wins. (`STAGED`, which had appeared only in VOC-00002, is NOT a valid status and is
removed there.) This single-source rule is invariant **I10** (CISEM-ARCH-00320).

**`DECLARED`, defined once (D2):** a node/corespine formally entered into governance
— binding *intent* established, by Governor instruction or registry entry — but **not
yet enforced/wired (corespine) or formally ratified (node).** This one definition
covers both prior uses: a "DECLARED corespine" (registered, not-enforceable) and a
"DECLARED node" (Governor-instructed, pre-ratification) are the same semantic state
— entered, not final. Distinct from `PROPOSED` (not yet entered) and `RATIFIED`
(enforced/binding-final).

**WIRING STATE — deployment maturity (a SEPARATE dimension from lifecycle status;
adopted from the Gemini stack 2026-07-18):** every wired element also tracks
`DECLARED (1) → CONNECTED (2) → ACCESSIBLE (3) → LIVE (4)`. Lifecycle status answers
"is it agreed?"; wiring state answers "does it actually run?" — this is the
EXISTS ≠ ACTIVE axiom made measurable.

**STATUS CURRENCY — the dynamic updating system (invariant I16):** all CISEM state is
DYNAMIC. Every artifact's `tag` + `status` + `wiring-state` + `owner` is ACTIVE
governance/accountability metadata (never optional), and MUST reflect CURRENT reality —
updated the MOMENT reality changes (a gate wired, a node ratified, a dependency
resolved, a plan superseded). A status that contradicts reality (stale) is a violation.
The plan-audit scans for stale/contradictory statuses each run.

**Why mandatory, not optional:** bounded/scoped vocabulary (Option B, ratified) only
works if a Pocket can filter "load L1 of corespine X" instead of opening every file
to find out what's in it. Depth/tag/status ARE the retrieval mechanism for scoped
context loading — without them, Option B degrades back into "open everything."

## 5. Size gate (unchanged, restated for completeness)
3,500 words / 200-line code blocks. Violation triggers §3 (mini-tree split), never
"exceed and flag for later."

## 6. Placeholder nodes (Schema Placement Engine cross-reference)
Auto-generated ancestor stubs use status `PLACEHOLDER`, depth_level `L1`, and a
`SCHEDULED` follow-up tag — see `dna/schema/CISEM-SCHEMA-00001-placement-engine.md`.

## 7. Ratification authority — "foundational decree" vs "self-ratify" (D1)
Two distinct acts that must never be conflated by sharing the word "self-ratify":
- **self-ratify (FORBIDDEN):** an AI marking its own output RATIFIED. Prohibited
  for every AI instance — "ai_cannot: self-ratify" (CLAUDE.md §2, ARCH-00300 Hard
  Line I7). No exceptions.
- **foundational decree (PERMITTED, Governor only):** the Governor ratifying a
  **root** governance node — one that has no upstream validator because it defines
  the validation itself (e.g. `CS-MASTER-VALIDATION-001`). A root node is ratified
  by Governor decree *without* requiring another validator to sign it. This is the
  escape from the ratification cycle (a validator that governs all corespines
  cannot itself wait for a validator).
**Rule:** foundational decree applies ONLY to nodes explicitly tagged
`root_authority: true` and is exercised ONLY by the Governor, recorded in the
node's change log as a "foundational decree" with date. It is a named, bounded
exception — not a general licence to skip validation. Every non-root node still
ratifies through the normal validator chain once that chain exists.

**Closed set (bounded 2026-07-16; extended 2026-07-18):** `root_authority: true` is restricted to
exactly four nodes — **CISEM-FOUND-00001** (Founding), **CISEM-ARCH-00011** (this
policy), **CS-MASTER-VALIDATION-001** (root validator), **CISEM-ARCH-00340** (meta-protocol /
plan-creation root — added by Governor foundational decree 2026-07-18). Adding a fifth is ITSELF a
foundational decree, logged here. Any other node carrying `root_authority` is an
invariant violation (candidate I11). This keeps the skip-validation switch from
ever spreading.
