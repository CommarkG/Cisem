# Creation Process — Merged Design (in progress, consensus-pending)
**tags:** [creation-process, design, merge, step-0, depth-levels, orchestrator, fork, corespine-gate, boundary-survival]
**Status:** DRAFT (Governor + Opus reaching consensus 2026-07-21; NOT formalized/coded — awaits draft→test-run→formalize)
**Sources merged:** this session's design (Step 0, depth levels, orchestrator) + [[IBD-0027-creation-core-spine-brain-PURIFIED]] (Claude-Brain draft: Step-1 Verified-Understanding/Reflect-Until-Match, Fork A-E, corespine-gate-at-D, Validating-as-sibling). Governor: "we don't have to be loyal to previous decisions if a better path aligns with CISEM."
**Existing-First (§3.2b):** searched — this MERGES existing work (this session's design + IBD-0027 + the already-built creation-gate/depth-orchestrator concepts), enhancing the pending ARCH-00400 governed-creation-pipeline; no new fork. **Independent Verifier:** cisem-opus-pe (cold pass, pre-formalization). **NOTE (Haiku audit 2026-07-21):** this is a DESIGN working-doc, NOT a ratifiable plan — it carries no ARCH-ID and does not run the plan gates until it becomes a plan post-test-run (per the agreed discuss→draft→test-run→formalize path). Size-exempt as a consensus-in-progress design.

## SHAPE (Governor-confirmed): MUTUAL MANDATORY STEPS → then FORKS
Every input runs the mandatory steps in order; then forks by what it resolves to. Depth/blast scales the RIGOR of each, but the SEQUENCE is universal.

### MANDATORY STEPS (every input, in order)
- **STEP 0 — UNDERSTANDING-VERIFICATION** (the true first act; prior even to the goal). The listener RESTATES the source's *meaning in its own words* + NAMES its assumptions; source confirms/corrects; loop until CONFIRMED (Reflect-Until-Match form, adopted from IBD-0027 as a CONCEPT — the Brain IDs CS-COMM-* are not-in-repo, external). AVOID list: no fabrication, no false-assumptions-as-fact, no premature satisfaction points, no silent conflict-reconciliation, drop nothing. DO: separate confirmed/inferred/assumed/missing; name gaps aloud; allow confrontation. WHY it's non-trivial: felt-understanding ≠ actual-understanding (RI: the plausibility trap at the level of MEANING) — the single most-repeated root cause of drift; cheapest fix here, most expensive later. Must appear in all 3 layers (Protocol/Wizard/Pipeline) as ONE referenced gate, not duplicated.
- **STEP 1 — GOAL-SETTING** (was GATE 0; goal is prior, shared root of CoreSpine + CoreSpiral). Mentor-stage: ASK the human directly (frictionless-without-skipping); checklist (surface request → underlying friction → what "solved" looks like → independent-or-symptom → unstated constraints → human confirms in own words → Early Corespine Hypothesis COREGUESS = bounded/zero-authority guess). Output: one confirmed goal (DO/DON'T target). Input stamped `goal-connected`.
- **STEP 2 — EXISTING LANDSCAPE MAPPING + RESEARCH** (evidence, not conclusion). Map all relevant CISEM elements. Research is NOT a standalone step — a capability invoked at 3 points (Step-1 checklist, this step, Fork-D import). Pre-Finalization Research Prompt runs once at draft stage; no-findings is logged (auditable).
- **DEPTH ORCHESTRATOR** (the missing piece, confirmed gap). Reads Blast Risk / significance → classifies **D1 KERNEL / D2 DOMAIN / D3 INSTANCE** → dispatches the matching rigor AND tier (one orchestrator, two decisions: depth then tier; D1→Opus-led+council+Governor-ratify, D2→§3 gates+plan+Opus, D3→swift creation-gate-minimum). This IS the triviality "fast-lane" the Brain flagged as missing (their Open Item #9). Blast Risk = the metric; D1/D2/D3 = the bands (gives Blast Risk the scale it lacked).

### FORK (after the mandatory steps; NON-EXCLUSIVE conditions A-E; B/C/D combinable)
- **A — Already-Exists-Operational** → terminal; output = DISCLOSURE (surface the existing element; the gap was AWARENESS, not capability). No build.
- **B — Enhancement** → modify an existing element (Modification Surface); most gated by blast.
- **C — Wiring/Bundling** → new relationships only, NO content mutation (distinguishes from B).
- **D — New Element Required** → Import-vs-Create sub-fork + Schema-Slot-Assignment (never floating).
- **E — Out-of-Scope** → terminal; action = reject | park | escalate (maps to threshold REJECT/PARK).

### CORESPINE DETERMINATION (Governor's question, answered)
= "does this input relate to an EXISTING corespine, or is it a CANDIDATE for a NEW one?" Asked ONCE, at the right moment:
- At **Fork D** (something new enters the graph): run the 5-criteria test (criterion 3 = independent goal, the discriminator, first). PASS → corespine-specific creation path replaces normal slot-assignment (royalty: Governor sign-off, elevated blast floor, no shortcut). FAIL → regular new element.
- At **Fork B/C** (touching an existing element): **reach-back** — if that element already IS a corespine, inherit its status + rigor automatically (check at start of B/C). Don't re-test.

### OUTPUT → INHERITANCE → AUDIT
Output element DECLARES/USES its corespine (A2 inheritance) → born governed (creation-gate: tag+status) → ZF.

## HIERARCHY (Creation as parent)
- **Planning = confirmed child** (ARCH-00190 already declares CS-CREATION-001 as its corespine). Creation→Planning is a HANDOFF (Creation produces a Draft Plan → Planning Domain intake), NOT a merge (second-actor independence / Zero-Findings — the drafter can't also declare consensus-reached).
- **Implementing = likely redundant with the existing Build step** — must pass the 5-criteria test before being promoted (don't manufacture a corespine by symmetry).
- **Validating = independent SIBLING, not a child** — a checker must not derive authority from what it checks (conflict of interest). Invoked AFTER Creation/Planning/Build; reports above Creation / to Governor. Also fixes CS-MASTER-VALIDATION-001's recurrence defect (one instance per cycle).

## STATUS ARCHITECTURE (from IBD-0027, to reconcile with our tags/status)
2 coordinates: MACRO status (RAW→IN-PROCESS→VERIFIED→GOAL-DEFINED→MAPPED→FORKED→ACTIVE-BUILD/PARKED/REJECTED) + per-step SUB-status. Open: make macro DERIVED from sub-status (one source) vs maintained separately.

## OPEN ITEMS (carried, for consensus)
1. **CS-CREATION-001 naming** — the Brain's "Creation Core Spine ROOT" vs our ratified apex CS-CREATION-001 (ARCH-00397): is the Brain draft the CONTENT of CS-CREATION-001, or a new node? (→ handled by the permanent external-input PCR, see [[creation-external-input-default-and-pcr-2026-07-21]].)
2. Blast Risk scale = define as the D1/D2/D3 banding.
3. COREGUESS calibration metric (log early-guess vs Fork-D result divergence?).
4. Fork-A disclosure format; Fork-E terminal action.
5. Status macro-derived-vs-maintained.
6. Where Validating-sibling reports.

## NEXT (the agreed workflow): discuss → consensus → draft → TEST-RUN (walk it) → consolidate chat+files+test → formalize (only then code).
