# IBD-0031 — Governor's two mechanism-inventory questions (2026-07-25)
tags: [ibd, raw-capture, mechanism-inventory, handoff-protocol, cadence, bound-to-item]
Status: PARKED-RAW — BOUND to the handoff-manifest fix (acceptance criteria), NOT a rot-park

## VERBATIM (Governor, 2026-07-25)
1. what is hardwired to be executed every turn?
2. what is registered for weekly sessions?

## WHY THIS IS BOUND, NOT ROT-PARKED (Opus note)
These two questions ARE the acceptance criteria of the handoff-protocol enhancement the
Governor requested in the same message ("enhance the handoff protocol of pre-compacting and
new-tab preparation... instead of following a predefined path that covers all bases you spend
huge amounts of tokens searching for clues"). The Threshold audit (2026-07-25) found CISEM has
NO single always-current manifest of "what fires when + current wiring state" — which is the
same root. So these questions get ANSWERED-AND-WIRED as fields of that manifest, not left to
sit in the park-to-rot pile the audit just flagged. If the manifest fix is ratified, this IBD's
"done" = both questions are answered as generated/maintained fields the fresh tab inherits.

## RELATED
- Threshold/Routing/Parking audit: dna/queue/NEWTAB-THRESHOLD-ROUTING-PARKING-AUDIT-2026-07-25.md
- Existing handoff mechanisms to ENHANCE (Existing-First): .claude/hooks/pre-compact.sh,
  .claude/hooks/session-start.sh, CLAUDE.md Principles 12/13, ARCH-00370, the WITNESS COMPACT
  STATE + NEWTAB-COMPREHENSIVE-HANDOFF pattern.
- Naming-registry IBD counter drift found while parking this (says 28, disk at 0030) — separate finding.
