---
Node_ID: CISEM-ARCH-00424
authorizing_plan: CISEM-ARCH-00423
tags: [corespine, manifest, threshold, pointer, self-audit-fill, backlog-N5]
Type: ARCH | Sub_type: MANIFEST
Status: PROVISIONAL-ACTIVE / AWAITING-BUILDER-REVIEW
Corespine: CS-THRESHOLD-001
Schema_anchor: CISEM-ARCH-00008
Core_spine: CS-MASTER-VALIDATION-001
Last_verified: 2026-07-25
---

# CS-THRESHOLD-001 — Canonical Pointer Manifest

**CISEM-ARCH-00424** | MANIFEST | **Status: PROVISIONAL-ACTIVE / AWAITING-BUILDER-REVIEW** (Sonnet-built per
Opus Core Seeds, CISEM-ARCH-00423 D2 — NOT self-stamped RATIFIED, I7). Fills the `canonical_file` field the
[CORESPINE-BODILESS] self-audit (ARCH-00423 D1) flagged missing. **The underlying corespine's own RATIFIED
status is UNCHANGED and pre-existing** — this manifest supplies its first content-home; it does not
re-ratify it.
**Governs:** the same scope CS-THRESHOLD-001 already governs (Layer-1 mechanical input validation — Gate 0
goal-connection, park-by-demand routing, SWIFT, invariants I1–I21). This file is a POINTER, not a new
content fork (A8/I10) — the ARCH-00397 precedent for CS-CREATION-001.

## Gate Trace (abbreviated pointer-manifest — ARCH-00397 precedent)
- **§3.1 Goal:** give CS-THRESHOLD-001 a `canonical_file` so [CORESPINE-BODILESS] passes clean, without
  copying any invariant text out of its SSOTs.
- **§3.2b Existing-First:** searched `corespine-registry.yaml` (CS-THRESHOLD-001 = RATIFIED,
  `distributed_in: [ARCH-00320, CLAUDE.md]`, no `canonical_file`); `dna/corespines/` directory listing (no
  existing CS-THRESHOLD-001 body file anywhere in the repo — confirmed via `find`, unlike CS-MASTER-VALIDATION-001
  which DID have one, see ARCH-00423 D2 build note); ARCH-00397 (identical pointer-manifest pattern, already
  RATIFIED for CS-CREATION-001) — reused, not reinvented.
- **§3.3 Pocket:** `reasoning_scope: fill the missing canonical_file per ARCH-00423 D2` | `inherited_constraints:
  A8/I10 (pointer only, zero copied content), I7 (Sonnet may not self-stamp RATIFIED)` | `output_contract: this
  manifest + a registry canonical_file pointer` | `ai_cannot: ratify this manifest; restate ARCH-00320's
  invariant text` | `recorded_at: 2026-07-25`
- **§3.5 Naming:** CISEM-ARCH-00424 (naming-registry.yaml ARCH next_seq 424→425, the ONE gate).
- **§3.6 Size:** well under 200 lines.

## Pointer Map (zero copied content, CORE-SEED-1-consistent with ARCH-00397 §VI)
| Source (SSOT) | What lives there | This manifest's role |
|---|---|---|
| `dna/protocols/CISEM-ARCH-00320-prevention-and-plan-audit.md` §1/§4 | Invariants I1–I21 (the SSOT text) | POINTS to it |
| CLAUDE.md §2.7 (Gate 0 goal-connection, park-by-demand, SWIFT) | Routing/parking prose | POINTS to it |
| CLAUDE.md §3 (Hard Gates) | The mechanical gate sequence Threshold enforces | POINTS to it |
| `dna/checks/threshold-coverage-map.sh` (ARCH-00423 D4) | Per-part honest WIRED/PROSE-BY-DESIGN/NOT-YET-WIRED map | The mechanical self-audit companion to this manifest |

## Change Log
| Date | Change | Author |
|---|---|---|
| 2026-07-25 | Created — fills CS-THRESHOLD-001's `canonical_file` per ARCH-00423 D2 | Sonnet (STRUCTURING, Opus Core Seeds) |
