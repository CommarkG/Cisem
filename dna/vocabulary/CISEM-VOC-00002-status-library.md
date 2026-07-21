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

---

## UNIFIED AXIS INDEX (Governor decree 2026-07-21) — the ONE place the whole platform reads statuses from
This library is the SSOT-of-SSOTs for status/axis vocabulary. Some axes are AUTHORED here; others POINT to their
authoritative home (A8 — a pointer, never a fork). Every governed artifact carries the axes relevant to its kind.

| Axis | Values | Authoritative home | Applies to |
|---|---|---|---|
| **Node Status** | DRAFT·PROPOSED·DECLARED·RATIFIED·PLACEHOLDER·SCHEDULED·SPLIT·PROVISIONAL-ACTIVE | ARCH-00011 §4 (mirrored above) | every node |
| **Planning Status** | AWAITING-BUILDER-REVIEW·COMMENTS-RECEIVED·CONSENSUS-REACHED·IN-PROGRESS·COMPLETE·SUPERSEDED | ARCH-00190 | plans |
| **Wiring State** | DECLARED→CONNECTED→ACCESSIBLE→LIVE | ARCH-00011 §4 | anything claiming to "run" |
| **Maturity (DIOS)** | Signal→Observation→Hypothesis→Pattern→Insight→Principle-Candidate→Validated→Constitutional | VOC-00003 | knowledge/inputs |
| **Disposition** | permanent·temporary·superseded·vaulted·reopened·raw·cataloged·extracted·converged·parked | archive-ledger + ARCH-00399 | inputs, archived decisions |
| **Source-Trust** | internal-verified·external-reviewed·external-unverified·external-rejected | ARCH-00399 (RAW/PURIFIED) | any input |
| **Alignment** ⟵ NEW | `aligned`·`predates-changes`·`conflicts`·`n/a` | **HERE (VOC-00002)** | external inputs + any artifact that may lag current CISEM state |
| **Freshness** ⟵ NEW | `FRESH`·`AGING`·`STALE`·`UNKNOWN` | **HERE (VOC-00002)** | every artifact carrying `last_verified:` |

### Alignment axis (NEW — Governor decree 2026-07-21)
Does the artifact's content match the CURRENT CISEM state, or does it predate/contradict a change?
- `aligned` — reflects current CISEM as of its last_verified date.
- `predates-changes` — trustworthy content but written BEFORE a relevant change; re-check before acting (e.g. all Brain artifacts, KL-0002/0003).
- `conflicts` — actively contradicts current state (e.g. an old file using superseded tokens); must reconcile before use.
- `n/a` — timeless (an axiom's own statement).

### Freshness axis (NEW — Governor decree 2026-07-21, "updated X days ago")
Derived from `last_verified: YYYY-MM-DD` vs today. Display form = "updated N days ago."
- `FRESH` ≤ 7 days · `AGING` 8–30 days · `STALE` > 30 days · `UNKNOWN` (no last_verified).
- *Mechanism (NOT-YET-WIRED):* a `freshness-check.sh` comparing each governed file's `last_verified:` to today is buildable and belongs in plan-audit (WARN) — flagged honestly, not claimed done (Principle 18-C).

**Every governed artifact SHOULD now carry:** `Status:` (lifecycle) + `last_verified:` (→ freshness) + `alignment:` where it can lag. External inputs additionally carry source-trust + disposition + maturity.
