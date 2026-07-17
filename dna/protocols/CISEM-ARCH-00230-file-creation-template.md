# File Creation Template
Node ID: CISEM-ARCH-00230
Type: ARCH | Status: DRAFT
depth_level: L1 | Position in schema: T-SYS
tags: [template, file-creation, checklist, mandatory]
Goal: The canonical checklist every file must match at creation —
mandatory whenever a protocol is being created, applicable broadly.
Governing corespine: CS-CREATION-001 (Template Protocol, CISEM-TEMPLATE-PROTOCOL-001)
Renamed 2026-07-15: was "Protocol File Template" / mis-titled
"CISEM-PROTOCOL-TEMPLATE-001" — real naming violation, corrected per
Governor's direct catch, not treated as sacred.

## Mandatory checklist — every protocol file must have ALL of:
[ ] Node ID, Type, Status, depth_level, tags — header complete
[ ] Goal — stated, one sentence, what this protocol governs
[ ] Governing corespine — named, or explicit "none yet" with reason
[ ] "Why this exists" — full reasoning, standalone, no assumed context
[ ] The rule itself — stated as an executable procedure, not prose
[ ] Explicit "does NOT cover" section — scope boundary named
[ ] Self-compliance note if applicable
[ ] Role, Who-serving, Pocket Declaration — present OR explicitly
    marked N/A, never silently absent

## Self-compliance check, applied to this template itself
Node ID/Type/Status/depth_level/tags present. Goal present. Governing
corespine present. Rule = the checklist itself. Self-compliance = this
note.

## Creation Doctrine reminders — D4 "enhancement, named at creation" (CLAUDE.md §2.5)
Every creation ACTIVELY APPLIES these (not just avoids violations):
[ ] Reuse / bundle before creating new — enhance existing over proliferating (guards the meta-ratio)
[ ] Disclosed ≠ Resolved — never label a gap closed without `last_verified` + a real check (I2)
[ ] Hardcode the INVARIANT, not the path (D2) — fix what must stay true, leave the method free
[ ] After creating, run the RQC check (`dna/checks/plan-audit.sh`) and log the run to `dna/quality-ledger.yaml` (D5)
[ ] Prevention is permanent: if this creation reveals a NEW unwanted class, propose it as an invariant (D3)
Full doctrine: CLAUDE.md §2.5 (D1–D6). This gate is where D4 becomes active, not aspirational.

## Does NOT cover
Corespine content templates (CISEM-TEMPLATE-PROTOCOL-001), node DNA
fields (CISEM-ARCH-00008), planning documents (CISEM-ARCH-00190).
