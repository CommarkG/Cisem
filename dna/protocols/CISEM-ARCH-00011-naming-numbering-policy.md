# Naming & Numbering Policy
**Node ID:** CISEM-ARCH-00011
**Type:** ARCH | **Status:** DRAFT — Governor-approved this session, pending final ratify
**Goal:** One unambiguous scheme for every node's name, sequence, split-children,
and retrieval index — closes the root cause of the -L1 collision incident.
**Governing corespine:** CS-MASTER-VALIDATION-001 (PRIO-BLOCKING, still open)
**Position in schema:** T-SYS, protocol layer (sibling to Template Protocol)

## 1. TYPE registry (extensible, not closed — extension requires this node's own update)
FOUND, DNA, GOV, ARCH, PARK, SES, WITNESS, VOC, LOAD, REG

## 2. ID format
`CISEM-{TYPE}-{SEQ5}-{slug}.md` — sequence per TYPE, tracked in `naming-registry.yaml`.
Any creation MUST read next_seq before assigning, then increment. Concurrent-write
risk (Brain + Builder both writing) remains open — flagged, not solved by this policy alone.

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

## 4. Depth / Tag / Status — mandatory retrieval index (not optional metadata)
Every node MUST declare, at creation:
- **depth_level:** L1 (exists/summary) | L2 (operational) | L3 (full architectural)
- **tags:** free-form, cross-cutting (populated once Tag Library exists; until then, inline list)
- **status:** DRAFT | PROPOSED | DECLARED | RATIFIED | PLACEHOLDER | SCHEDULED | SPLIT

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
