# Real-Value Verification Checklist — SSOT
**Node ID:** CISEM-SCHEMA-00002 | **Type:** SCHEMA | **Status:** PROVISIONAL-ACTIVE (created 2026-07-27, Governor-ratified via ARCH-00431)
authorizing_plan: CISEM-ARCH-00431 (RATIFIED 2026-07-27 — Real-Value Verification schema)
**tags:** [schema, verification, real-value, wiring-state, bottom-line, weekly-review] | **Position in schema:** T-SYS, verification-schema layer | **governing corespine:** CS-CREATION-001

## Purpose (the bottom line)
The ONE source of truth for verifying that a governed element delivers **REAL VALUE** — not that it merely EXISTS or is DECLARED. It answers the Governor's question: *"are all the efforts really providing value?"* It does this on **two axes**, and REAL VALUE requires BOTH. This schema **references** the wiring-states SSOT for axis-1; it defines axis-2. It coins NO new wiring-state ladder (A8/I10).

## AXIS-1 — WAS IT ACTIVE? (wiring_state — REFERENCE, do not redefine)
The wiring-state ladder is defined at its SSOT: **`CISEM-ARCH-00011 §4`** (mirror `CISEM-VOC-00002`), enforced by **I23 (EXISTS≠ACTIVE)**:
`DECLARED → CONNECTED → ACCESSIBLE → LIVE` — **only LIVE counts.**
This schema uses those states verbatim by reference. Do not restate their definitions here (I10 — read the SSOT). A claimed state above the proven one is I24 (premature promotion) — self-declaring the top state is invalid.

## AXIS-2 — DID IT DELIVER THE INTENT? (value_delivered — the new axis)
LIVE proves the mechanism *runs*; it does NOT prove the mechanism achieves the **initial intent** it was created for. An element can be LIVE and deliver no real value (runs, but useless / serves nothing). Axis-2 closes that gap:
- **`value_delivered:`** `yes | partial | no | untested`
- **`intent:`** the ORIGINAL goal this element was created to serve (one line — trace to its plan/goal).
- **`evidence:`** a SHOWN run/outcome demonstrating the intent is achieved — a command output, a before/after, a metric (Principle 18C: a citation that "the mechanism exists" is NOT evidence of value).
- **`verified_by:`** an INDEPENDENT verifier — NOT the asserter (I23/I24). Self-declared value is invalid.

## THE VERIFICATION RECORD (the per-element checklist)
Every element under review carries:
```
element:        <id / path>
intent:         <the original goal it serves>
wiring_state:   <DECLARED|CONNECTED|ACCESSIBLE|LIVE>   # axis-1, ref ARCH-00011 §4
value_delivered:<yes|partial|no|untested>              # axis-2
evidence:       <shown run/outcome, not a doc citation> # required if value_delivered=yes
verified_by:    <independent verifier, != asserter>     # required if value_delivered=yes
```
**REAL VALUE (the bottom line) = `wiring_state == LIVE` AND `value_delivered == yes` (with evidence + independent verifier).**
Anything less is **effort-without-proven-value** — surfaced honestly, never hidden. The two failure shapes this catches:
- **`DECLARED/CONNECTED/ACCESSIBLE` + anything** → *built but not live* (the ~85%-declared/~5%-live gap, quality-ledger).
- **`LIVE` + `value_delivered != yes`** → *runs but delivers nothing* (documentation-as-progress that even passed I23).

## TAG CONVENTION
Elements carry `wiring_state:` (from the existing status/wiring surface — [TAG-STATUS] already reads Status) + the axis-2 fields above. This EXTENDS the existing tag surface; it is NOT a second enum.

## WEEKLY BOTTOM-LINE REVIEW
`dna/checks/wiring-value-report.sh` reads these tags across governed elements and emits, on the weekly cue (the WEE / deep-pattern session, RI-0063): a **per-element board** + the **AGGREGATE bottom line** (% LIVE, % value-delivered, what stalled at DECLARED, which LIVE elements deliver no value). This is *"review weekly what happened, if it happened."* The report is a RUNNING mechanism (with a both-directions fixture, RI-0058) — never a documented intention (Principle 18C, or this SSOT would be the failure it audits).

## RELATIONSHIP TO THE CIC-AUDITOR (no duplication)
The CIC-auditor's **C4** (mechanical-enforcement-of-intent, ARCH-00430) is the **per-FLOW** arm of axis-2; this schema is the **per-ELEMENT / portfolio** arm. C4 cites this schema's record; they share the concept, singly-homed here (A9/I10).

## Change log
- v1.0 — 2026-07-27 (Opus, ARCH-00431): SSOT authored. Axis-1 references ARCH-00011 §4 (Principle-22-corrected, no fork); axis-2 (value-delivery) defined. GI-68 dual-review post-build.
