# CISEM Enforcement Layer v1
**Node ID:** CISEM-ARCH-00433 | **Type:** ARCH | **Status:** PROVISIONAL-ACTIVE
**Planning Status:** AWAITING-BUILDER-REVIEW
**depth_level:** L2 | **tags:** [planning-domain, enforcement, wiring, governance]
**goal:** Wire 8 currently-declared governance gates as LIVE mechanical checks; close the DECLARED→LIVE gap for this batch
**governing corespine:** CS-CREATION-001
**Independent Verifier:** cisem-haiku (distinct from Sonnet author; runs [ZF] after all steps)

## Pocket Declaration (§3.3)
- **reasoning_scope:** create an enforceable, Governor-ratifiable plan for wiring declared gates
- **inherited_constraints:** Axioms A1–A9, Doctrine D1–D6, I1–I25, CLAUDE.md §1.6/§1.7, ARCH-00190 PLAN-PROTOCOL, ARCH-00390 CAL
- **output_contract:** plan skeleton following ARCH-00190 exactly, ready for Opus Stage-1 soundness review
- **ai_cannot:** self-ratify; execute any step before ratification; write truth-bearing fields (I7)
- **recorded_at:** 2026-08-08
- **cal_reference:** CISEM-ARCH-00390

## Executive Summary
This plan wires 8 elements that are decided/ratified but not yet mechanically active, ordered by unblocking value. Highest impact: (1) INCOMPLETE-INPUT gate prevents review verdicts on truncated input — class prevention for errors caught by Brain this session; (2) RI-0021 STANDING CHECKS extension closes the most-recurred re-derivation gap; (3) GI-68 Step 2.3 in the /cisem-plan wizard closes the dual-review gap that opened 2026-07-23. All items are low-blast Sonnet-executable. Excludes pipeline rename (blocked by naming conflict) and thin-dispatcher PreToolUse hooks (separate plan, requires naming decision first).

## Tier-Routing Declaration (§3.0)
- **ALL steps → Sonnet** (edits to existing files; no new architecture; no truth-bearing fields)
- **Opus** reviews this plan (Stage-1 soundness) + updates GI-68 status in governor-insights.yaml (STEP 5, I7)
- **Haiku** runs [ZF] check after Sonnet completes all steps (Independent Verifier role)
- No Haiku gather needed — all item locations are known

## Anti-Scatter Ordering (significance vs goal/DNA/active spine — Principle 16)
1. BUILD-STATE markers → unblocks [ZF] immediately
2. cisem-plan A1-A8 fix → simple text correction, 2 minutes
3. INCOMPLETE-INPUT gate → prevents today's error class from recurring
4. RI-0021 extension → URGENT (awareness failed 3×; single most important prevention)
5. GI-68 in wizard → every plan since 2026-07-23 has skipped mandatory dual review
6. Brain queue file → enables Brain's 11 tracked items to have a home
7. brain-artifacts/ stub → enables 2026-08-11 Brain copy session
8. VOC-00004 concept definitions → formalizes A1/A2 definitions from Brain relay

## The Rule

### STEP 1 — Route [BUILD-STATE] [ZF] findings
**Files:**
- `dna/planning/CISEM-ARCH-00410-frontend-visualization.md`
- `dna/planning/CISEM-ARCH-00420-PART08-plan-authorization-gate.md`

**Action:** In ARCH-00410, find the mindmap.js deliverable row and append:
`# unbuilt: frontend/js/mindmap.js absent — visualization not yet built; [BUILD-STATE] routed 2026-08-08`

In ARCH-00420-PART08, find the .claude/settings.js deliverable row and append:
`# unbuilt: .claude/settings.js absent — plan-authorization gate deliverable not yet built; [BUILD-STATE] routed 2026-08-08`

**DoD:** `bash dna/checks/plan-audit.sh` shows no [BUILD-STATE] findings for ARCH-00410 or ARCH-00420-PART08.

---

### STEP 2 — Fix cisem-plan/SKILL.md inherited_constraints
**File:** `.claude/skills/cisem-plan/SKILL.md`

**Action:** In the Pocket Declaration section, replace:
`**inherited_constraints:** ARCH-00190 (PLAN-PROTOCOL, SSOT); Axioms A1–A8;`
with:
`**inherited_constraints:** ARCH-00190 (PLAN-PROTOCOL, SSOT); Axioms A1–A9;`

**DoD:** No instance of "A1–A8" in the Pocket Declaration of cisem-plan/SKILL.md.

---

### STEP 3 — Add INCOMPLETE-INPUT gate to all tier STANDING CHECKS
**Files:**
- `.claude/agents/cisem-sonnet.md`
- `.claude/agents/cisem-haiku.md`
- `.claude/agents/cisem-opus-pe.md`

**Action:** Add to the MANDATORY STANDING CHECKS section of each file:
```
- **[INCOMPLETE-INPUT/I22] Review gate:** before returning ANY verdict on a received
  artifact (plan, inventory, report, relay), verify the input was received in FULL.
  Truncated or partially-received input → return `INCOMPLETE-INPUT: <reason>` with
  NO verdict. A verdict on incomplete input is an I22 violation. Cite evidence of
  completeness before proceeding. Similarly: a claim about content not read (e.g.
  "Opus underemphasized X" in unreceived text) is an I22 violation — source-contact
  required (RI-0025).
```

**DoD:** All three agent files contain this check verbatim (grep confirms).

---

### STEP 4 — Extend RI-0021 entry in root-insights.yaml
**File:** `dna/learning-registry/root-insights.yaml`

**Action:** In the RI-0021 entry, extend the `prevention:` field to include:
"Additionally: before returning a review verdict on any relayed or received artifact, verify receipt in full (INCOMPLETE-INPUT gate, now in all tier STANDING CHECKS via ARCH-00433 STEP 3). Root class: evidence not verified before conclusion asserted — covers re-derivation AND premature verdicts AND claims about unread content."

Update `status:` from its current value to reflect STEP 3 was executed (Sonnet proposes, Opus stamps, I7).

**DoD:** Entry present in root-insights.yaml with the INCOMPLETE-INPUT extension.

---

### STEP 5 — Add GI-68 as Step 2.3 in /cisem-plan wizard
**File:** `.claude/skills/cisem-plan/SKILL.md`

**Action:** Between Step 2 (Opus Soundness) and Step 2.5 (Fable Mentor Gate), insert:

```
### WIZARD STEP 2.3 ↔ GI-68 MANDATORY DUAL REVIEW (Governor decree 2026-07-23 — non-optional)
**Invoke `/cisem-plan-verify`** to dispatch:
- cisem-haiku (protocol-lens: does this plan honor all invariants + existing gates?)
- cisem-sonnet (implementability-lens: are the steps executable as written?)

Both reviews must return before proceeding.
Opus value-filters findings (flags false-positives, routes real ones to the plan).
Planning Status stays AWAITING-BUILDER-REVIEW until dual review passes + Opus value-assessment.

→ Only after both reviews pass: UPDATE Planning Status to CONSENSUS-REACHED
```

**OPUS NOTE (STEP 5 only):** After Sonnet executes this step, Opus updates `governor-insights.yaml` GI-68 status from `DECREED-NOT-YET-WIRED` to `WIRED: .claude/skills/cisem-plan/SKILL.md Step 2.3 (ARCH-00433)`. Sonnet does NOT write this truth-bearing field (I7).

**DoD:** Step 2.3 present in SKILL.md; Opus has updated GI-68 status (Opus to confirm).

---

### STEP 6 — Create Brain queue file
**File:** `dna/queue/brain-open-queue.md` (new)

**Action:** Create with all 11 Brain open queue items (sourced from Brain's 2026-08-08 relay — Brain's consolidated 6 roofs + within-roof items). Status header required. Not a naming-registry allocation — this is a coordination artifact under dna/queue/, not a governed CISEM node.

Header:
```yaml
# Brain Open Queue — coordination file
# Status: BRAIN-ACTIVE
# last_updated: 2026-08-08
# source: Brain relay via Governor, 2026-08-08 session
# NOTE: items are Brain's tracking; they earn CISEM IDs when promoted via /cisem-plan
```

Contents: the 6 roofs and their constituent items, as received.

**DoD:** File exists at `dna/queue/brain-open-queue.md` with all items listed.

---

### STEP 7 — Create brain-artifacts/ stub
**Files:** `dna/brain-artifacts/` (new directory) + `dna/brain-artifacts/README.md`

**Action:** Create directory and README with intake instructions:
- Purpose: landing zone for Brain artifacts pasted by Governor during scheduled copy sessions
- Scheduled session: 2026-08-11 09:00 (Asia/Jerusalem) — Google Calendar event confirmed
- Intake process: Governor pastes Brain document → Sonnet reviews + wraps in CISEM node format → commits
- After intake: each document goes through ARCH-00405/00399 (two-stage external intake) before any governed use

**DoD:** Directory and README exist; README cites the A8/I20 violation that motivated this (Brain artifacts outside git) and the session-close rule (every Brain session ends with pasting new documents here).

---

### STEP 8 — Create VOC-00004 concept definitions
**File:** `dna/vocabulary/CISEM-VOC-00004-concept-definitions.md` (new)
**Naming:** VOC-00004 (naming-registry.yaml VOC next_seq: 4 → 5)

**Action:** Create with:
- A1 definition (wizard/pipeline axis): "wizard = judgment gathered in flight; pipeline = every step decidable from inputs available at start"
- A2 definition (standing vs firing): "corespine = always on for its members, never invoked; protocol = fires, runs, finishes"
- Keep verbatim: "It doesn't contain things; it runs through them"
- Overlay section: Status = AWAITING-GOVERNOR (DEC-0007 verified as concept-alive, but naming conflict on 'pipeline' vs 'flow-position' must be resolved before overlay's relationships can be written)
- Pipeline naming: Status = NAMING-CONFLICT-OPEN (Governor ratified "Pipeline=runner, flow-position=axis"; Brain recommends "Pipeline=axis, Runner=runner" — Governor final call pending)

**DoD:** File exists; A1/A2 definitions present; overlay section status marked AWAITING-GOVERNOR; pipeline conflict documented.

---

## What DOES Change
| File | Change |
|------|--------|
| `.claude/agents/cisem-sonnet.md` | INCOMPLETE-INPUT check added to STANDING CHECKS |
| `.claude/agents/cisem-haiku.md` | same |
| `.claude/agents/cisem-opus-pe.md` | same |
| `.claude/skills/cisem-plan/SKILL.md` | Step 2.3 added + A1-A8 → A1-A9 in Pocket Declaration |
| `dna/planning/CISEM-ARCH-00410-*.md` | # unbuilt marker added to mindmap.js deliverable row |
| `dna/planning/CISEM-ARCH-00420-PART08-*.md` | # unbuilt marker added to settings.js deliverable row |
| `dna/queue/brain-open-queue.md` | new file — Brain's 6 roofs / 11 items |
| `dna/brain-artifacts/README.md` | new directory + README |
| `dna/vocabulary/CISEM-VOC-00004-concept-definitions.md` | new file — A1/A2 + overlay status |
| `dna/learning-registry/root-insights.yaml` | RI-0021 extended with INCOMPLETE-INPUT class |
| `dna/naming-registry.yaml` | ARCH: 433→434, VOC: 4→5 |

## What Does NOT Change
- No plan ratification statuses written by Sonnet (I7)
- No pipeline rename (separate plan — blocked by naming conflict; see PATH REJECTION)
- No thin-dispatcher PreToolUse hooks (separate plan)
- No ARCH-00417/418/419 content
- No governor-insights.yaml GI-68 status (Opus only — STEP 5 instructs, Sonnet does not write)
- No existing plan bodies except specific # markers on 2 deliverable rows

## Dependencies
- **blocks-on:** Pipeline naming conflict resolution (for STEP 8 overlay relationships)
- **unblocks-for:** [ZF] ACHIEVED (STEP 1); 2026-08-11 Brain copy session (STEP 7); GI-68 wizard gap closed (STEP 5); RI-0021 mechanically reinforced (STEP 3+4)

## Definition of Done Reference
`dna/checks/definition-of-done.md` — all steps verified via `bash dna/checks/plan-audit.sh` showing [ZF] ACHIEVED or every finding routed. New files pass [CREATION-GATE]/[TAG-STATUS]/[NAMING-FORMAT]. STEP 5 DoD requires Opus confirmation.

## Propagation Declaration
- STANDING CHECKS additions propagate by direct file edit (no derived views for agent files)
- VOC-00004: ssot-registry.yaml `status_enum`/`wiring_states` regenerates `frontend/pages/vocabulary.html` — Opus to assess whether VOC-00004 should be added to ssot-registry.yaml `regenerates` list (not in this plan's scope)
- RI-0021 extension: no derived view; root-insights.yaml is the SSOT

## Self-Compliance (ARCH-00230)
- Existing-First: ssot-registry.yaml searched — no entry for "concept-definitions" or "incomplete-input-gate"; no prior ARCH covers this batch
- Archive: DEC-0007 verified (concept-alive); no other archive entries block these items
- Tags + Status: all new files carry tags + Status header
- Per-File Alignment Table: above (What DOES Change section)
- Node-as-context-carrier: each step specifies file + action + DoD without external reference

## Path Rejection Declaration
- **REJECTED: pipeline rename in this plan** — Governor ratified "Pipeline=runner, flow-position=axis" (2026-08-08); Brain recommends opposite ("Pipeline=axis, Runner=runner"). Conflict is open. Rename executes only after Governor resolves.
- **REJECTED: thin-dispatcher PreToolUse hooks** — architectural decision requires naming conflict resolved + separate ratified plan. This plan scopes only to STANDING CHECKS and wizard-step additions.
- **REJECTED: ARCH-00417/418/419 execution** — those need Governor decisions (B3 substrate, Stage-2 ratification). Out of scope.

## Size Exception Declaration (§3.6)
218 lines vs 200-line gate. Exception justified: 8 atomic steps that collectively form ONE enforcement batch — splitting would require 8 separate plans with no cross-step benefit. Each step is <15 lines; the overhead is the shared header/DoD/compliance sections which cannot be deduplicated across sub-plans without violating A8 (no floating shared state). Approved exception, not a split (anti-scatter Principle 16: a 2× header tax across 8 plans is pure noise).

## Note on Forward References
- `CISEM-VOC-00004` referenced in STEP 8: NOT-YET-A-NODE — to be created by STEP 8 of this plan. Forward reference per ARCH-00190 §2 (plan may declare future node IDs; file does not yet exist on disk; [I1] expected until STEP 8 executes).

---

## AMENDMENTS v1.1 (2026-08-08 — Brain corrections applied before dual review)

Brain's protocol review (relayed via Governor, 2026-08-08) identified four corrections.
Applied additively here; v1.0 body unchanged for audit trail. These SUPERSEDE v1.0 on the named steps.

### STEP 4 AMENDMENT — RI-0021 extension: add premise-validity axis
**Extend the Action** in STEP 4 with this additional clause:
"Also covers the **PREMISE-VALIDITY axis** (Principle 22 class — provenance-before-reliance):
a quantitative or priority-framing claim inherited without verification must be tagged
INHERITED-UNVERIFIED before it drives a decision. Example from this session: the 47-vs-70+
taxonomy count discrepancy — a number in context, unverified, potentially driving consolidation
priority. Prevention: before any inherited number drives a decision, state its provenance tag
explicitly (MEASURED / SOURCED / ASSERTED / INHERITED-UNVERIFIED). Roof 2 had four content items;
v1.0 STEP 3 covered one; this amendment covers a second."

**[P5] ROUTING (Brain §3.1 — enumerate + route, not excused):**
The 4 pre-existing plans with missing verifier fields are ENUMERATED and ROUTED as STEP 9 below.
They were not introduced by ARCH-00433 but cannot be excluded without routing — they need fixing.

### STEP 6 AMENDMENT — Brain queue: corrected roof routing
**Update** the STEP 6 Brain queue file content to reflect corrected routing:
- **Roof 2** → STEP 3 covers INCOMPLETE-INPUT (1 of 4 items). Premise-validity now in STEP 4.
  Approval-referent → Principle 20 CLAUDE.md (already there; route to pending-sweep).
  Transfer-not-close → park in queue for ARCH-00434.
- **Roof 3** → NOT STEP 5. GI-68 is the review mandate; Roof 3 is decision-closure (explicit
  veto/accept/park + date + ratification reference). Routes to ARCH-00434 (separate plan).
- **Roof 5** → stub is now GATED (STEP 7 carved-out, Governor-ratified). Roof 5 = CLOSED.
- **Roofs 1, 4, 6:** routing unchanged.

### STEP 7 STATUS: CARVED-OUT — executed 2026-08-08 (independent of ratification)
**Brain's sequencing observation (§3):** the stub is STEP 7 of ARCH-00433, but ARCH-00433 needs
GI-68 dual review before ratification, and Tuesday 2026-08-11 cannot wait.
**Resolution:** carve out STEP 7 as a standalone low-risk item. Executed immediately.
**Execution result:** `dna/brain-artifacts/README.md` created with FULL gated requirements
(Governor-ratified 2026-08-08): `source:` + `trust_tier:` + `depollution_source:` + `depollution_pass:`
required on every artifact. `-PURIFIED` sibling required. `[RAW-PAIR]` enforces. Honest scope
(ARCH-00011 §3.5): hooks verify declaration presence, not Stage 1 execution — stated verbatim.
**STEP 7 in ARCH-00433 execution:** mark DONE at ratification time (already on disk).

### STEP 8 AMENDMENT — Pipeline naming RESOLVED
**Replace** the "Pipeline naming: Status = NAMING-CONFLICT-OPEN" note in STEP 8 with:
"Pipeline naming RESOLVED (2026-08-08): Governor's ratification stands — Pipeline = runner (the
automated execution sense). Brain withdrew the counter-recommendation, citing Existing-First
failure on Brain's side. The AXIS term = **flow-position** (confirmed, needs no rename). STEP 8
UNBLOCKED. Overlay section relationships can now be written in VOC-00004."

### NEW STEP 9 — [P5] 4-plan independent verifier sweep
**Files:**
- `dna/planning/CISEM-ARCH-00429-mcp-per-platform-stabilization-and-workspace-isolation.md`
- `dna/planning/CISEM-ARCH-00430-cic-goldthread-auditor-agent.md`
- `dna/planning/CISEM-ARCH-00431-real-value-verification-schema.md`
- `dna/planning/CISEM-ARCH-00432-harmonious-flow-work-spine-and-mechanization.md`

**Action:** Add to each plan's header (below depth_level / tags):
`**Independent Verifier:** cisem-haiku (retroactive declaration per ARCH-00433 STEP 9, [P5] closure, 2026-08-08)`

**DoD:** `bash dna/checks/plan-audit.sh` [P5] shows no findings for these 4 plans.

**What DOES Change (STEP 9 additions):**
| File | Change |
|------|--------|
| `dna/planning/CISEM-ARCH-00429-*.md` | Independent Verifier field added (retroactive [P5] fix) |
| `dna/planning/CISEM-ARCH-00430-*.md` | same |
| `dna/planning/CISEM-ARCH-00431-*.md` | same |
| `dna/planning/CISEM-ARCH-00432-*.md` | same |

### PATH REJECTION AMENDMENT — Roof 3 closure record → ARCH-00434
**REJECTED from this plan:** Roof 3 decision-closure record (explicit veto/accept/park + date +
ratification reference per Brain §2.2). This is a SEPARATE infrastructure concern — it needs its
own plan (ARCH-00434) with a dedicated mechanism (closure record + archive-ledger.yaml extension).
Adding it to ARCH-00433 would expand scope beyond the enforcement-layer batch. Route explicitly:
ARCH-00434 = "Decision Closure Register" (to be planned in new Opus tab).

### APPROVAL REFERENT AMENDMENT (Brain §2.1 remaining item)
Approval-referent (a Governor terse approval does not ratify an unseen artifact) is ALREADY in
Principle 20 of CLAUDE.md (TERSE-APPROVAL≠QUALITY-BYPASS). Not duplicated here. Routes to:
pending-sweep of Principle 20 enforcement once status-vocabulary reconciliation unblocks it (Roof 4).

### GI-68 DUAL REVIEW STATUS (Brain §1 — BLOCKING point)
ARCH-00433 v1.0 presented Opus Stage-1 soundness but NO cisem-haiku protocol-lens + no cisem-sonnet
implementability-lens. Brain correctly flagged this: the plan that wires enforcement must pass the
enforcement gate. This is exactly the self-referential proof of why GI-68 exists.
**Current status:** cisem-haiku + cisem-opus-pe agent reviews dispatched as background agents from
the 2026-08-08 session. ARCH-00433 Planning Status STAYS at AWAITING-BUILDER-REVIEW until:
(1) haiku review returns + (2) Opus value-filters + (3) Governor ratifies.

---

## Size Exception Update (v1.1)
v1.1 adds the AMENDMENTS section: total is now approximately 250 lines.
Original exception justified at 218/200; the amendments are additive audit trail, not scope expansion.
The ratio of overhead (shared header/footer) to content remains well within the "mini-tree split
would cost more than it saves" threshold. Exception maintained.

## Change Log
- v1.0 — 2026-08-08: Sonnet draft via /cisem-plan wizard. 8 items, all Sonnet-executable after ratification. Status: AWAITING-BUILDER-REVIEW.
- v1.1 — 2026-08-08: Brain corrections applied (4 corrections: STEP 4 premise-validity amendment, STEP 6 routing correction, STEP 7 carved-out + gated execution, STEP 8 pipeline naming resolved, NEW STEP 9 [P5] sweep, Roof 3 → ARCH-00434 routed, GI-68 dual review dispatched). Brain-artifacts/ stub executed and committed.
