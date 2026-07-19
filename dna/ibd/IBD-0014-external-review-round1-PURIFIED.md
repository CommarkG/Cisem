# IBD-0014 — External Review Round 1 (PURIFIED ESSENCE) 2026-07-19
**Type:** IBD (analysis layer) | **Status:** PURIFIED · UN-RATIFIED — critiques are CLAIMS to verify; most are clearly correct and are folded as design gaps to close. NOTHING here ratified.
**Source (raw):** [[IBD-0014-external-review-round1-RAW]] (external reviewer R1, EXTERNAL-UNTRUSTED). De-branded: model identity stripped; kept as "R1".
**Verdict (Opus):** high-signal. 8 critiques; 7 clearly land, 1 already-known. Notably, R1 INDEPENDENTLY flagged the exact concern I parked ~1hr earlier in IBD-0013 (#6 queue-drain, #7 completion, meta-governance) — convergence = strong validation, not coincidence.

## CRITIQUE → WHAT IT PATCHES (each is a gap to close in the design)
- **C1 Triage-regress (Layer 2).** The triage function (rigid-default | provisional | vault) is ITSELF a
  classification decision — if it needs judgment, the hard problem just moved up a level (infinite regress).
  → PATCH: triage criteria MUST be more mechanical/checklist-driven than anything they route (a decision TABLE,
  not judgment). This is the load-bearing fix for the whole conflict model. Folds into the conflict-protocol plan.
- **C2 Vault has no drain discipline.** No staleness SLA / escalation / priority → it rots or gets bypassed.
  → PATCH: explicit review cadence + auto-escalation. CONVERGES with IBD-0013 #6 (RQC parks assignments + overnight
  drain) + P3 (TTL). The vault IS a queue and must be instrumented + drained.
- **C3 "Provisional" ossifies (temp-fix-becomes-permanent).** "Never final until ratified" is a claim, not a
  guarantee. → PATCH: provisional states need a HARD EXPIRY or a BLOCKING dependency that forces the ratification
  conversation before more is built on top. (Strong — this closes the PROVISIONAL-ACTIVE permanent-draft trap mechanically.)
- **C4 "Argument-weight" is undefined** (the re-grounding / defeasibility criterion). → PATCH: NAME it honestly as a
  human (Governor) judgment call, NOT a structural guarantee. Same class as the CS-MASTER-VALIDATION-001 root
  self-reference: single-point Governor dependency — breaks under governor turnover / unavailability / multi-governor
  scale. Declare the dependency explicitly. (Honesty over false-formalism — very CISEM.)
- **C5 Significance=reach is necessary, NOT sufficient.** Reach is gameable (an abstract corespine "claims" to govern
  all without constraining anything = unfalsifiable authority). → PATCH: pair reach with (a) DEMONSTRATED BREAKAGE —
  removing it breaks NAMED existing instances, not hypotheticals — and (b) CONSTRAINT STABILITY over time (rules that
  churn weekly = noise, not governance). Directly sharpens the top-level-significance test (IBD-0012 §3).
- **C6 Build-to-flawless has no stopping criterion** (the real risk — overfit to a sample of one; encode idiosyncrasy
  as law). → PATCH (pick one): (a) define "flawless" OPERATIONALLY (passes N adversarial reviews, zero open findings
  vs a fixed checklist) before generalizing; OR (b) require ≥2 BUILT instances before abstracting (triangulate, don't
  polish). → Refines Principle 15 (ZF-Development) — it currently says "until flawless" without defining flawless. CLOSE THIS.
- **C7 No meta-governance / self-health layer.** Queue depth, staleness, vault drift aren't monitored. → PATCH:
  instrument the QUEUE, not just conflicts. CONVERGES with IBD-0013 #6/#7 (RQC-upgrade + completion-hardwiring). Permanent solution: a health-metrics sweep.
- **C8 Self-hosting independence gap.** Referee = player = same base model; an internal adversarial persona shares the
  base model's blind spots — NOT truly independent. External review is more valuable but a single data point. → PATCH:
  make external review RECURRING, not one-off (feeds the graft machine, IBD-0013 #8, Circle 3 cadence). Known-but-underweighted; now explicit.
- **C9 Undefined downstream halt behavior.** When vault-and-halt fires, do deployed apps freeze / degrade / error?
  → PATCH: specify the operational contract for downstream solutions (graceful-degrade default). This is the
  design-vs-operational line — must be defined for the "external apps" dimension (ties to inheritance-evident, IBD-0013 #2).

## HOW THIS RESHAPES SEQUENCING (Opus note)
C1/C2/C3 reshape the CONFLICT-PROTOCOL before it's worth writing → do NOT author that plan on pre-feedback foundations.
C5 reshapes the corespine significance test. C6 reshapes Principle 15. So the feedback touches BOTH the corespine
protocol AND the conflict protocol — fold it in FIRST, then build the corespine protocol+wizard (the core), conflict-protocol last.

## OPEN (route)
- Fold C1–C9 into the relevant plans when authored (conflict-protocol: C1/C2/C3/C9; corespine significance: C5; Principle 15: C6).
- C6 (define "flawless") + C4 (name the Governor dependency) are the two CHEAPEST high-value closures — candidates for the next deliberate pass.
- Invite R1 to go deeper AFTER we've folded these (they offered).
