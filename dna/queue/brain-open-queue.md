# Brain Open Queue — coordination file
**Status:** BRAIN-ACTIVE | **tags:** [queue, brain-channel, coordination]
# last_updated: 2026-08-08
# source: Brain relay via Governor, 2026-08-08 session (Brain Part F + corrections from newer relay)
# NOTE: items are Brain's tracking; they earn CISEM IDs when promoted via /cisem-plan

## Roof 1 — Enforcement gate actually fires
**Route:** ARCH-00433 (enforcement-layer plan)
**Roof-status:** PARTIALLY-CLOSED (all 3 ARCH-00433 addressed items FIXED/DONE at execution time; 8 named-but-unwired follow-on mechanisms remain OPEN → route to ARCH-00435)
Items:
- [P5] regex false-negative on bullet-list bold → FIXED 2026-08-08 (regex extended in plan-audit.sh, v1.2)
- INCOMPLETE-INPUT gate for all 3 tier agents → DONE (ARCH-00433 STEP 3, 2026-08-08)
- [BUILD-STATE] three-dot false-positive bug → FIXED 2026-08-08 (build-state.sh v1.3)
- 8 named-but-unwired mechanisms (findings-lifecycle drain; strengthen ratify check; verifier-pattern; build-state fixture; supersession markers at step level; [DUAL-REVIEW] check for plan-audit.sh) → OPEN (route to ARCH-00435 plan)

## Roof 2 — Claims outran evidence
**Route:** ARCH-00433 STEP 3+4 (partial); ARCH-00434 (transfer-not-close)
**Roof-status:** IN-PROGRESS
Items:
- INCOMPLETE-INPUT / verdict on truncated input → DONE (STEP 3 tier agents + STEP 4 RI-0021 routes_to, 2026-08-08)
- Premise-validity (INHERITED-UNVERIFIED claims driving decisions, Principle 22) → RI-0062 cross-reference added to RI-0021 routes_to (STEP 4, 2026-08-08); wired check NOT-YET-BUILT
- Approval-referent (terse approval ≠ unseen-artifact ratification) → Principle 20 CLAUDE.md (already wired); pending-sweep when status-vocabulary (Roof 4) unblocks
- Transfer-not-close (routing a decision ≠ resolving it) → ARCH-00434 (decision-closure register)

## Roof 3 — Decision memory
**Route:** ARCH-00433 STEP 5 + ARCH-00434
**Roof-status:** SPLIT-ROUTED
Items:
- GI-68 mandatory dual-review wired into /cisem-plan wizard → DONE (STEP 5, WIRED-INTO-WIZARD-PROSE behavioral; mechanical [DUAL-REVIEW] check NOT-YET-WIRED, named as ARCH-00435 follow-on)
- Decision-closure record (explicit veto/accept/park + date + ratification reference) → ARCH-00434 (new Opus tab)
- ARCH-00434 register entries identified: pipeline-naming-reopening (first entry, 2026-08-08); Amendment 2 corespine-pair reclassification candidates

## Roof 4 — Status vocabulary (8 official, 15+ active variants)
**Route:** VOC-00002 enum reconciliation (future plan)
**Roof-status:** BLOCKING
Cost of parking: blocks BP-0012 (8-value enum enforcement) + split-scope status states
Deferred: until VOC-00002 enum reconciliation is prioritized

## Roof 5 — External content intake (Brain channel)
**Route:** dna/brain-artifacts/ (ARCH-00433 STEP 7, carved-out)
**Roof-status:** CLOSED (Governor-ratified 2026-08-08)
Mechanism: ARCH-00405 Stage 1 → ARCH-00399 Stage 2; [RAW-PAIR] enforces pairing
Intake classes: Class A (foreign-platform) = Stage 1 required; Class B (CISEM-native Brain drafts) = Stage 1 N/A, Stage 2 required; depollution_pass: N/A recorded
Note: Brain delivers RAW only; Opus authors PURIFIED sibling

## Roof 6 — Antigravity permission event (security incident)
**Route:** CsAg workspace (separate repo) → I27 plan via /cisem-plan
**Roof-status:** OPEN (Governor handling directly with Brain; no CISEM action pending relay)
I27 candidate (Brain-tightened wording 2026-08-08):
  "Agent may not widen its own execution or filesystem permissions,
  AND may not record a permission change as a deliverable"
Action needed: Governor relays outcome; I27 plan via /cisem-plan once outcome known
