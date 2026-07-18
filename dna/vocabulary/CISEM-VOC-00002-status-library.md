# Status Library (Draft) — renamed from ARCH pseudo-ID, corrected 2026-07-15
Node ID: CISEM-VOC-00002
Type: VOC | Status: DRAFT | depth_level: L1 | Position in schema: T-SYS
tags: [status-library, vocabulary, draft]
Goal: One place listing every registered status enum — node Status
and Planning Status are separate lifecycles, kept distinct here too.
Governing corespine: CS-CREATION-001

## Node Status (MIRRORS CISEM-ARCH-00011 §4 — authoritative source; this file may not add/remove values, per invariant I10)
DRAFT | PROPOSED | DECLARED | RATIFIED | PLACEHOLDER | SCHEDULED | SPLIT | PROVISIONAL-ACTIVE

`PROVISIONAL-ACTIVE` (added 2026-07-18) = a high-quality DRAFT in USE to bootstrap; audit-flagged
until ratified+LIVE; see ARCH-00011 §4 for the guardrails.

`STAGED` removed 2026-07-16 (D2): it appeared only here, never in the ARCH-00011
authoritative enum, and had no definition or use — vocabulary drift, corrected.

**DECLARED** = formally entered into governance (binding intent established), but
not yet enforced/wired (corespine) or formally ratified (node). One definition,
both uses. See ARCH-00011 §4.

## Wiring State (MIRRORS CISEM-ARCH-00011 §4 — deployment maturity, a separate dimension)
DECLARED (1) → CONNECTED (2) → ACCESSIBLE (3) → LIVE (4). Lifecycle status = "is it
agreed?"; wiring state = "does it actually run?" (EXISTS ≠ ACTIVE). All state is DYNAMIC:
tag + status + wiring-state must reflect CURRENT reality and update on change (I16).

## Planning Status (per CISEM-ARCH-00190 — separate lifecycle)
AWAITING-BUILDER-REVIEW | COMMENTS-RECEIVED | CONSENSUS-REACHED |
IN-PROGRESS | COMPLETE | SUPERSEDED

## Why two enums, not one
A node's Status tracks the node's own maturity. Planning Status tracks
a plan's review lifecycle — independent, since a plan can be
SUPERSEDED while the node it produced stays RATIFIED. Conflating them
forces choosing which lifecycle wins; kept separate deliberately.
