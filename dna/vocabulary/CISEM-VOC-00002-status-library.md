# Status Library (Draft) — renamed from ARCH pseudo-ID, corrected 2026-07-15
Node ID: CISEM-VOC-00002
Type: VOC | Status: DRAFT | depth_level: L1 | Position in schema: T-SYS
tags: [status-library, vocabulary, draft]
Goal: One place listing every registered status enum — node Status
and Planning Status are separate lifecycles, kept distinct here too.
Governing corespine: CS-CREATION-001

## Node Status (per CISEM-ARCH-00011 §4)
DRAFT | PROPOSED | DECLARED | RATIFIED | PLACEHOLDER | SCHEDULED |
SPLIT | STAGED

## Planning Status (per CISEM-ARCH-00190 — separate lifecycle)
AWAITING-BUILDER-REVIEW | COMMENTS-RECEIVED | CONSENSUS-REACHED |
IN-PROGRESS | COMPLETE | SUPERSEDED

## Why two enums, not one
A node's Status tracks the node's own maturity. Planning Status tracks
a plan's review lifecycle — independent, since a plan can be
SUPERSEDED while the node it produced stays RATIFIED. Conflating them
forces choosing which lifecycle wins; kept separate deliberately.
