# File / Node Creation Checklist
**SSOT:** This is the ONE authoritative source for what every created file/node must contain (the creation checklist). Referenced by CLAUDE.md §3 and cisem-create SKILL.md. Does NOT cover plans (ARCH-00190) or node-DNA schema (ARCH-00008) — see "Does NOT cover" below.
Node ID: CISEM-ARCH-00230
Type: ARCH | Status: RATIFIED (Governor decree ARCH-00396 Phase B 2026-07-18; Opus Gate-B verified run 24 — now the registered `creation_checklist` SSOT)
depth_level: L1 | Position in schema: T-SYS
tags: [checklist, file-creation, node-creation, mandatory, ssot]
Goal: The canonical checklist every file/node must match at creation —
mandatory for any protocol, plan, node, or governed artifact.
Governing corespine: CS-CREATION-001
Note (2026-07-18 ARCH-00396 Phase B): header corrected — prior "Governing corespine" line
wrongly carried "(Template Protocol, CISEM-TEMPLATE-PROTOCOL-001)"; this node's corespine
is CS-CREATION-001 (its actual governing corespine). CISEM-TEMPLATE-PROTOCOL-001 is a
separate node covering corespine content templates, not this checklist.
Renamed 2026-07-15: was "Protocol File Template" / mis-titled
"CISEM-PROTOCOL-TEMPLATE-001" — real naming violation, corrected per
Governor's direct catch, not treated as sacred.

## Mandatory checklist — every protocol file must have ALL of:
- **CLOSED + VERIFIED NOW (Principle 21, Governor decree 2026-07-21):** the creation is FINISHED and its "done" PROVEN this turn — wired + verified with shown evidence (DoD; I22/I23), not "will be done later". Any genuine deferral is a REGISTERED park (IBD/BP/RI/queue id + status), never a vague "later". Backstopped mechanically by `[DEFER-SCAN]`.
- **INHERITED GUARDS (every creation, non-negotiable — Governor decree 2026-07-21 "hardwire it, inherited by each new creation"):** every governed creation AUTOMATICALLY inherits, and is audited against, the always-loaded + always-run guard set — do NOT re-derive, they apply by construction: CLAUDE.md **Principles 1–21** (loaded every session — incl. P17 prevention-first, P18 no-collateral/global-view, P19 noise-vs-signal, P20 terse-approval≠bypass, P21 immediacy+verify-done) · the **plan-audit checks** run at every commit ([ZF] core + [CREATION-GATE] tag+status + [TYPE-MATCH]/[NAMING-FORMAT]/[CS-NAMES] naming + [DEFER-SCAN] + [AGENT-PASS] + [RATIFY-GATE] + [INJECTION-SCAN] + [DOD]) · the **pre-commit hard BLOCKs** (I13 seed-strip · plan-fields · persona-inheritance · **no-delete-without-ratification**). A new creation is not compliant until it passes this whole set. Reference (A8/I10), never copy.
[ ] Node ID, Type, Status, depth_level, tags — header complete
[ ] authorizing_plan — the ratified plan (CISEM-ARCH-NNNNN, Planning Status RATIFIED/COMPLETE) that
    authorizes this governed creation (A4/A11/I25). Required on every STRICT-governed new file; the
    dir-exempt locations (planning / ibd / parking / templates) do not carry it. Mechanically enforced
    write-time (PreToolUse plan-gate, exit-2) + commit (pre-commit-blocks BLOCK 5). Reference, do not re-derive.
[ ] Goal — stated, one sentence, what this protocol governs
[ ] Governing corespine — named, or explicit "none yet" with reason
[ ] "Why this exists" — full reasoning, standalone, no assumed context
[ ] The rule itself — stated as an executable procedure, not prose
[ ] Explicit "does NOT cover" section — scope boundary named
[ ] Self-compliance note if applicable
[ ] Role, Who-serving, Pocket Declaration — present OR explicitly
    marked N/A, never silently absent
[ ] INHERITANCE (Governor-directed enhancement 2026-07-20) — every created element DECLARES its parent
    (corespine/element) and INHERITS its parent's WHAT (as testable assertions where applicable), and carries
    the DNA it is born into: the persona SSOT (`dna/corespines/CS-AI-PROFILING-001/persona-collaborator.md`,
    reference not copy), the governing corespine, and this checklist. Nothing is created "bare." Mechanically
    enforced today for agents/skills (pre-commit persona-inheritance BLOCK, `dna/checks/pre-commit-blocks.sh`);
    comprehensive element-scope enforcement (inheritance covering EVERY checklist item across all element types)
    is a PARKED build — IBD-0017 P2 (Inheritance = a kernel mechanic, to place when the kernel is defined).

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
