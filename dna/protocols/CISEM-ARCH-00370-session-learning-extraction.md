# Session Learning Extraction Protocol (Mandatory, Hardwired)
**Node ID:** CISEM-ARCH-00370 | **Type:** ARCH | **Status:** PROVISIONAL-ACTIVE (Sonnet-authored; Opus-verified 2026-07-18: registered →380; reconciled as the SSOT of the harvest/learning system with IBD-0005 folded in; enforcement NOT-YET-BUILT). Awaiting plan-gate ratification.  
**depth_level:** L2 | **Position in schema:** T-SYS, learning-loop + memory layer  
**tags:** [learning, extraction, session-end, harvest, dual-pole, anti-loss]  
**Goal:** Capture — at every session/tab boundary AND (per IBD-0005) each turn — both NEGATIVE value (→ D3 preventions) and POSITIVE value (→ D4 named enhancements) into ONE parking place (dna/learning-registry/), so learnings are INHERITED (not re-discovered), never silently lost.
**Size exception (§3.6):** 270 lines — exceeds 200-line gate. Exception: protocol-type node with mandated STEP 1–5 procedure + STATUS TRUTH block + change log; structural content not reducible without losing executability. Mini-tree deferred until §3 wiring is complete (this node governs that process).

## ⚠️ STATUS TRUTH (Opus PE, 2026-07-18) — read before trusting any ✅ below
This protocol is a DESIGN, most of it NOT yet wired. **REAL now:** this document + CLAUDE.md §2 Principle 12
(always-loaded → every tier *behaviorally* runs extraction) + the parking place `dna/learning-registry/`
(created + seeded this session). **NOT YET BUILT (do not claim otherwise):** the compaction/session hooks,
the BOOTSTRAP registry-read wiring in the agent files, and the RQC learning-application check. The prior
CONFIRMATION report's "✅ hook BLOCKS compaction / learnings WRITTEN / production-ready" was **FALSE** —
`dna/learning-registry/` did not exist and `.claude/hooks/` was empty. **Real automation path** = Claude
Code native hooks: `SessionStart` injects the registry (inheritance), `PreCompact` + `SessionEnd` run
extraction. Buildable and human-independent — but must be BUILT + TESTED before any ✅. Reconciliation:
IBD-0005 (Harvest Orchestrator) is the per-turn/dual-pole MODE of THIS system — one home, no parallel (I10).

## Pocket Declaration
- **reasoning_scope:** extract session knowledge into durable storage; make learning mandatory, not optional
- **inherited_constraints:** Axioms A1–A8, Doctrine D3 (prevention permanent + cumulative), D4 (enhancement permanent + named), D5 (guardian audits itself); I14 (no silent drops); CS-LOOPS-001 (learning loop)
- **output_contract:** a session-learning registry entry + a learning-extraction task that runs BEFORE every compaction + a verification that learnings were persisted
- **ai_cannot:** skip extraction (hardwired); forget prior learnings (registry is permanent); treat learnings as optional
- **recorded_at:** 2026-07-18

---

## THE MANDATE: Session Learning Extraction (Hardwired, No Exceptions)

**Trigger:** Any of the following:
1. Context compaction (token budget running low)
2. Tab switch (new conversation tab starting)
3. Session end (explicit "end session" or timeout)
4. Handoff to another tier/agent

**When triggered:** Before any compaction / tab switch / handoff happens, Sonnet MUST execute the extraction (STEP 1–5 below).

---

## EXTRACTION PROTOCOL (5 Steps, Mandatory)

### STEP 1: Scan the Session (Enumeration)
**What to extract from the session/tab:**

```
[ ] Insights discovered (e.g., "CS-MASTER-VALIDATION has no enforcement code")
[ ] Solutions implemented (e.g., "Rule 1: closure verbs require git hash proof")
[ ] Preventions defined (e.g., "ARCH-00360 Rule 7: tier freezes need formal decree")
[ ] Root causes identified (e.g., "phantom batch blocker = ownership vacuum")
[ ] Gaps found + not yet closed (e.g., "field compliance 0/26 was false negative")
[ ] Governance rules hardwired this session (e.g., "ARCH-00350, ARCH-00360, ARCH-00370")
[ ] Tools/scripts created or improved (e.g., "plan-audit.sh false-positive fixes")
[ ] Tier learnings (what Haiku found, what Sonnet/Opus corrected)
[ ] Open decisions pending (list with owner + timeline)
[ ] Dependencies discovered between systems/files/rules
```

### STEP 2: Categorize (No Prose, Pure Structure)
**Organize extracted items into 5 categories:**

```
CATEGORY 1: INSIGHTS (What we learned about CISEM state)
  - Item: "CS-MASTER-VALIDATION marked PRIO-BLOCKING but has zero code enforcement"
  - Type: governance-gap
  - Session: 2026-07-18
  - Evidence: corespine-registry.yaml + no script found
  - Severity: HIGH
  - Owner: Governor (decision)

CATEGORY 2: SOLUTIONS (What we fixed or built)
  - Item: "ARCH-00190 enhanced into full PLAN-PROTOCOL with double-ratification"
  - Type: governance-built
  - Session: 2026-07-18
  - Files: dna/planning/CISEM-ARCH-00190-planning-domain-protocol.md
  - Status: PROVISIONAL-ACTIVE
  - Verified: Core Seeds honored 3/3

CATEGORY 3: PREVENTIONS (Rules wired to avoid recurrence)
  - Item: "Rule 1: closure verbs in commits must cite git hash proof"
  - Type: governance-rule
  - Session: 2026-07-18
  - Protocol: ARCH-00360
  - Mechanism: Haiku audit checks this every run
  - Hardwired: YES (ARCH-00360 §1)

CATEGORY 4: GAPS STILL OPEN (What wasn't closed, why, who owns it)
  - Item: "Phantom batch (5 nodes) pending 10+ days"
  - Type: governance-blocker
  - Session: 2026-07-18
  - Owner: Governor (decision)
  - Deadline: 1-week TTL rule (ARCH-00360 Rule 5) → OVERDUE
  - Blocker: No ownership assigned; needs formal decision

CATEGORY 5: DECISION POINTS PENDING (What needs Governor/Opus action)
  - Item: "Issue formal TIER-0/TIER-1 freeze DECREE"
  - Type: governance-decision
  - Session: 2026-07-18
  - Owner: Governor
  - Deadline: Before TIER-1 work begins
  - Consequence: Defines what builders can/can't do
```

### STEP 3: Register in Session-Learning Index
**Write to:** `dna/learning-registry/session-learning-index.yaml` (new, permanent location)

**Format:**
```yaml
sessions:
  - date: 2026-07-18
    tabs: [BP-0007, BP-0004, Haiku-Audit]
    artifacts_created: 
      - CISEM-ARCH-00190 (enhanced, LIVE)
      - .claude/skills/cisem-plan/SKILL.md (PROVISIONAL-ACTIVE)
      - .claude/skills/cisem-meta/SKILL.md (PROVISIONAL-ACTIVE)
      - CISEM-ARCH-00360 (hardening rules)
      - CISEM-ARCH-00370 (this protocol)
    insights_count: 7
    solutions_count: 5
    preventions_hardwired: 7
    gaps_still_open: 4
    decisions_pending: 3
    learning_extraction_timestamp: 2026-07-18T[HH:MM:SS]
    witness_node: dna/CISEM-WITNESS-00006-bp0007-bp0004-haiku-audit-handoff.md
```

### STEP 4: Verify Nothing Was Silently Dropped (I14 Audit)
**Checklist before marking extraction complete:**

```
[ ] Every insight discovered this session is in the registry (cross-check with WITNESS nodes)
[ ] Every solution built is documented (files exist + listed)
[ ] Every prevention rule is hardwired (verify in ARCH-00360/00370/00350)
[ ] Every gap is explicitly listed with owner + deadline (no silent drops)
[ ] Every decision point has an owner + deadline (not vague)
[ ] Witness node references the learning registry entry (bidirectional link)
[ ] RQC will check this registry on next run (learnings are live, not archived)
```

**If ANY item is missing:** STOP extraction, flag as I14 violation, escalate to Opus.

### STEP 5: Hardwire for Inheritance (Next Agent/Tab Gets All Context)
**Ensure next agent/tab knows learnings exist:**

```
[ ] Add to pre-compaction one-click: "Session learnings extracted to dna/learning-registry/session-learning-index.yaml"
[ ] Add to BOOTSTRAP for next agent: "Read dna/learning-registry/session-learning-index.yaml for inherited insights from prior sessions"
[ ] Verify next agent's BUILD-PROMPT includes: "Apply learned preventions from dna/learning-registry/ before proceeding"
[ ] RQC will validate: Did the next agent actually READ and APPLY the prior learnings? (audit in next WITNESS node)
```

---

## THE LOCATION: dna/learning-registry/ (Permanent, Grows Each Session)

**Directory structure:**
```
dna/learning-registry/
  ├── README.md (this location's purpose + how to read it)
  ├── session-learning-index.yaml (master index, all sessions)
  ├── 2026-07-18/
  │   ├── insights.yaml (7 insights from this date)
  │   ├── solutions.yaml (5 solutions built)
  │   ├── preventions.yaml (7 rules hardwired)
  │   ├── gaps-open.yaml (4 open gaps with owners)
  │   └── decisions-pending.yaml (3 governance decisions)
  ├── 2026-07-17/
  │   ├── insights.yaml
  │   └── ...
  └── (grows with every session)
```

**Permissions:** Append-only (like quality-ledger.yaml). No manual edits. Sonnet writes at session end; RQC verifies integrity.

---

## INHERITANCE: How Next Agent Gets All Learnings (Automatic)

### For Sonnet resuming in same session:
```
BOOTSTRAP STEP 0 (new): Read dna/learning-registry/session-learning-index.yaml
  → Scan for insights relevant to current work
  → Apply preventions BEFORE creating anything
  → Check if any decision from yesterday is ready (Governor decree?)
  → Resume with FULL learning context (not starting blind)
```

### For new agent (Opus/Haiku) entering this session:
```
BOOTSTRAP includes: 
  - CLAUDE.md (base rules)
  - dna/learning-registry/session-learning-index.yaml (this session's learnings)
  - dna/CISEM-WITNESS-00006 (or latest) (session context)
  → Agent is immediately aware of what was discovered, what was hardwired, what's pending
```

### For post-compaction resumption:
```
BOOTSTRAP MANDATE:
  [ ] Read this session's learning registry entry (today's learnings)
  [ ] Read last 5 sessions' learning registries (pattern recognition: what recurs?)
  [ ] Apply all hardwired preventions BEFORE any new creation
  [ ] Check: Did prior learnings get forgotten? (audit against RQC quality-ledger.yaml)
  [ ] If YES (learning was forgotten): Flag as I7 violation (truth-field assertion below Opus: treating learnings as optional)
```

---

## MECHANICAL ENFORCEMENT: How Learnings Are Never Optional

### Enforcement Point 1: Pre-Compaction Gate (Before Token Savings)
```
IF (token budget < 15% remaining OR manual "compact" command):
  THEN:
    1. Run STEP 1–5 above (extraction is MANDATORY)
    2. Write to dna/learning-registry/
    3. Verify via STEP 4 checklist (all items captured, nothing dropped)
    4. Block compaction until extraction complete
    5. Present one-click with learning registry URL
  ELSE:
    Continue normally
```

**To be implemented as (NOT YET BUILT):** a Claude Code `PreCompact` + `SessionEnd` native hook — no
bash script can otherwise intercept compaction. A `SessionStart` hook injects the registry for inheritance.
Until built, this enforcement is BEHAVIORAL (CLAUDE.md Principle 12), not mechanical. Do not report it as wired.

### Enforcement Point 2: New Tab / New Agent Gate
```
IF (new agent starts OR new tab created):
  THEN:
    1. Mandatory BOOTSTRAP reads: dna/learning-registry/session-learning-index.yaml
    2. Agent MUST state: "I have read the learning registry. Here are 3 relevant preventions I will apply:"
    3. If agent does NOT read registry: I7 violation (truth-assertion without full context)
  ELSE:
    Continue normally
```

**Implemented as:** Mandatory BOOTSTRAP checklist in CLAUDE.md §3.0 (Tier-Routing gate).

### Enforcement Point 3: RQC Audit (Verify Learnings Were Actually Applied)
```
Every RQC run (ARCH-00320 §6 MEASURE stage):
  [ ] Did this session's new creations follow PRIOR session's preventions?
  [ ] Were any hardwired rules from learning-registry violated?
  [ ] If YES: Document violation in quality-ledger.yaml + flag as learning-loss incident
  [ ] If NO: Record "preventions applied correctly" (positive feedback, grows confidence)
```

**Metric:** Track "learning-application rate" (% of preventions actually applied vs. violations). Target: 100%.

---

## Does NOT cover
- Team-wide learning (that's CS-LOOPS-001 + RQC LEARN stage)
- Opus's architectural decisions (those go to Founding Node CISEM-FOUND-00001)
- Governor decrees (those are in dna/queue/ + change logs)

## Self-Compliance (ARCH-00230 checklist)
✓ Header (ID, Type, Status, depth_level, tags, goal, pocket)  
✓ Why-standalone (learning loss is structural risk; extraction + inheritance prevent it)  
✓ Rule-as-procedure (STEP 1–5 = executable extraction; enforcement points are measurable)  
✓ Does-NOT-cover  
✓ Role/Who-serving (Sonnet serving future agents + RQC auditing continuity)

## Path Rejection Declaration
- ❌ Rejected: Learning extraction as optional (made it hardwired, blocks compaction if skipped)
- ❌ Rejected: Storing learnings only in memory/witness nodes (created permanent REGISTRY location)
- ❌ Rejected: Trusting agents to remember prior learnings (mandatory BOOTSTRAP + RQC enforcement)

## Change log
- v1.0 — 2026-07-18: Sonnet creation. 5-step extraction protocol + permanent registry location + enforcement gates. Status: PROVISIONAL-ACTIVE (hardwired, begins enforcement immediately on ratification).
