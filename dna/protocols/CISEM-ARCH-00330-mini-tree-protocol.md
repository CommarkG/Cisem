# Mini-Tree Split Protocol + Template
**Node ID:** CISEM-ARCH-00330
**Type:** ARCH | **Status:** DRAFT — Governor-directed creation 2026-07-18; not ratified.
**depth_level:** L2 | **Position in schema:** T-SYS, protocol layer
**tags:** [mini-tree, split, index, template, size-gate, protocol]
**Goal:** Define exactly how a node exceeding the size gate splits into a root-index + PART
children, and what the ROOT must contain — so NO content or context is lost in the split.
**Governing corespine:** CS-CREATION-001
**Role:** SSOT for mini-tree splits (naming layer is ARCH-00011 §3; this is the full protocol + template).
**Who I'm serving:** any AI creating or splitting an oversized node.

## Pocket Declaration
- **reasoning_scope:** the mini-tree split protocol + templates + checklists
- **inherited_constraints:** ARCH-00011 §3 (naming) + §3.6 (size gate), ARCH-00008 (node fields), I10 (SSOT), A3 (place in schema)
- **output_contract:** protocol + root/child templates + checklists + vocab-check
- **ai_cannot:** self-ratify; invent vocabulary; lose content in a split
- **recorded_at:** 2026-07-18

## 1. WHEN a mini-tree fires
Size Gate (§3.6): a node exceeds **3,500 words OR 200 lines**, OR carries multiple complex,
separable dependencies (the intake-decompose case). Then **SPLIT** — never "exceed and flag."

## 2. Structure + naming (ONE gate — ARCH-00011 §3)
- **ROOT:** `{ROOT-ID}-index.md`, `Status: SPLIT`. It is a STUB + INDEX, not content.
- **CHILDREN:** `{ROOT-ID}-PART{NN}-{slug}.md`, each with `Parent: {ROOT-ID}` **INLINE** (never inferred from filename).
- "PART" is reserved for governed splits only. Every id is allocated through `naming-registry.yaml` (one gate).
- A split child is an EXTENSION of the root's index, not a new entity (inheritance at the naming layer).

## 3. ROOT FILE — REQUIRED CONTENTS (checklist)
`{ROOT-ID}-index.md` MUST contain:
- [ ] **IDENTITY** — full ARCH-00008 header: Node ID, Type, `Status: SPLIT`, Goal, Position-in-schema, Governing corespine, depth_level, tags, Pocket Declaration.
- [ ] **INDEX OF SUBFILES** — a table of EVERY child, detailed enough to ROUTE without opening it: `PART-ID · slug · one-line scope · depth_level · wiring-state · status`.
- [ ] **COMPLETENESS** — an explicit statement that the children FULLY cover the original; nothing dropped in the split.
- [ ] **VOCAB CHECK** — every term across the tree resolves to its SSOT (VOC-00001 tags, VOC-00002 status, ARCH-00011 TYPEs); **NO invented vocabulary** (flag a missing term, never coin one).
- [ ] **NAVIGATION** — reading order / dependencies among children (DAG if non-linear; PRESERVE intentional grouping, D2 — don't over-atomize).
- [ ] **CHANGE LOG** — records the split: from which single node, when, and why.

## 4. "HOW DETAILED" rule
The index must let a reader/Pocket decide WHICH child to open **without opening any** — that is the
retrieval mechanism (ARCH-00011 §4 depth/tag/status). Each child entry is one line of REAL scope,
not a title. An under-detailed index = the split failed its purpose.

## 5. CHILD FILE — REQUIRED CONTENTS (checklist)
- [ ] `Parent: {ROOT-ID}` INLINE, first field. - [ ] Own minimal header (PART id, Status, depth_level, tags).
- [ ] Its scoped content ONLY. - [ ] Back-link to the root index. - [ ] No content duplicated from a sibling (SSOT within the tree, I10).

## 6. TEMPLATES
### 6a. Root index template
```
# {Human Title} — INDEX (mini-tree root)
**Node ID:** {ROOT-ID}-index | **Type:** {TYPE} | **Status:** SPLIT
**depth_level:** {L} | **Position in schema:** {T-SYS/T-DOM} | **tags:** [ ... ]
**Goal:** {one sentence}   **Governing corespine:** {CS-...}
## Pocket Declaration — reasoning_scope / inherited_constraints / output_contract / ai_cannot / recorded_at
## Index of subfiles
| PART | slug | scope (one line) | depth | wiring | status |
|------|------|------------------|-------|--------|--------|
| PART01 | {slug} | {what it covers} | L2 | DECLARED | DRAFT |
## Completeness: children fully cover {pre-split source}; zero content dropped.
## Vocab check: all terms resolve to SSOT (VOC-00001/00002, ARCH-00011); no invented vocab.
## Navigation: {reading order or DAG}
## Change log: split from {source} on {date} because {size/dependency reason}.
```
### 6b. Child PART template
```
# {Human Title} — PART{NN}
**Parent:** {ROOT-ID}   ← inline, authoritative (never inferred from filename)
**Node ID:** {ROOT-ID}-PART{NN}-{slug} | **Type:** {TYPE} | **Status:** {status}
**depth_level:** {L} | **tags:** [ ... ]
**Scope:** {one line — matches the root index entry}
---
{scoped content only}
---
↑ Back to index: {ROOT-ID}-index.md
```

## 7. Split-integrity checklist (before the split is called done)
- [ ] All children registered in `naming-registry.yaml` (one gate). - [ ] Root `Status: SPLIT`.
- [ ] Every child has `Parent:` inline. - [ ] The index routes to every child.
- [ ] Vocab check passed. - [ ] COMPLETENESS: diff pre-split content vs the union of children → **zero loss**.
- [ ] Each resulting file is now UNDER the size gate.

## Does NOT cover
Corespine content templates (TEMPLATE-PROTOCOL-001); the node field schema (ARCH-00008 — this protocol USES it).

## Self-compliance
This node is under the size gate (no split needed). Header complete; vocab all SSOT-resolved.

## Path Rejection Declaration (CLAUDE.md §2.8)
- **Rejected: a flat "big file with sections" instead of a real split** — that defeats the retrieval + size purpose. A mini-tree is real files with a routing index.

## Change log
- 2026-07-18: DRAFT created (Opus, PE pocket) on Governor instruction. Awaiting ratification.
