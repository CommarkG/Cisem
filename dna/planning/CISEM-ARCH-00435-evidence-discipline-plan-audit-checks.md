# CISEM Evidence-Discipline Plan-Audit Checks (batch v1)
**Node ID:** CISEM-ARCH-00435 | **Type:** ARCH | **Status:** PROVISIONAL-ACTIVE
**Planning Status:** AWAITING-BUILDER-REVIEW (drafted 2026-08-18 via /cisem-plan; awaits Opus Stage-1 soundness → GI-68 dual-review → Governor ratification — NOT self-ratified, GI-63)
**depth_level:** L2 | **tags:** [planning-domain, enforcement, evidence-discipline, plan-audit, wiring]
**goal:** wire the keystone "claims must carry recorded evidence" prevention as two new WARN-tier plan-audit checks — `[EVIDENCE-CLAIM]` (a control claim needs adjacent evidence) + `[DUAL-REVIEW]` (a RATIFIED plan needs two recorded GI-68 verdicts) — measurable as: both checks flag their known-bad fixture, pass their known-good fixture, and are invoked by a named line in plan-audit.sh.
**governing corespine:** CS-CREATION-001
**Independent Verifier:** cisem-haiku (protocol-lens) + cisem-sonnet (implementability-lens) — GI-68, distinct from Opus author

## Pocket Declaration (§3.3)
- **reasoning_scope:** design two new plan-audit checks that mechanize the self-certification / claims-outran-evidence class; consolidate with ARCH-00433's named-but-unbuilt `[DUAL-REVIEW]` sibling
- **inherited_constraints:** Axioms — see FOUND-00001; Invariants — see ARCH-00320; ARCH-00190 PLAN-PROTOCOL; ARCH-00390 CAL; RI-0058 (both-directions fixture); A8 (consolidate, don't fork)
- **output_contract:** a batch of two WARN-tier checks in plan-audit.sh, each with a both-directions fixture and a named invoker line; honest tier labels
- **ai_cannot:** self-ratify; describe a WARN/detect-tier check as "enforced/prevents"; let a check self-certify; mint an ID outside the naming gate
- **recorded_at:** 2026-08-18
- **cal_reference:** CISEM-ARCH-00390 — `bash dna/checks/plan-audit.sh`; [ZF] board reported honestly

## HONEST BASIS (Brain item 53 correction — non-negotiable framing)
These preventions are **one source: CISEM's own distilled failure record.** They are **NOT** externally validated. The portable "Governing an AI-Built Codebase" doc is a *restatement* of CISEM's own failures, not independent corroboration — **restatement is not corroboration.** This plan is adopted on the merit of the failures it prevents, not because "two sources agree."

## Tier-Routing Declaration (§3.0)
- **Opus:** this plan + Stage-1 soundness + Core Seeds + the truth-stamp on any wiring-status field (I7)
- **Sonnet:** builds STEP 1 + STEP 2 exactly to spec (bash checks + fixtures + invoker wiring)
- **Haiku:** GI-68 protocol-lens (Independent Verifier); no gather needed — all locations known

## Anti-Scatter Ordering (Principle 16)
1. **STEP 1 `[EVIDENCE-CLAIM]`** — the keystone; the class every self-certification failure belongs to (incl. this session's item-53 restatement error). Build first.
2. **STEP 2 `[DUAL-REVIEW]`** — fulfils ARCH-00433 FINDING 4's earmark; complements the existing `[RATIFY-GATE]`. Same batch (A8), same class.
Peripheral / parked (named, not built here): `[CANONICAL-APPEND]` (WITNESS replace-not-append) → its own follow-on; tri-state config lint → already in ARCH-00434; turn-contract → behavioral, needs Brain consult (A11) + item-55 correction (ratification held OUTSIDE the prompt).

## The Rule

### STEP 1 — `[EVIDENCE-CLAIM]` check (WARN / detect-after tier — stated honestly)
**File:** `dna/checks/plan-audit.sh` (a function, or a sourced `dna/checks/evidence-claim.sh` it calls — match the existing pattern).
**Action:** on **ADDED lines** (`git diff`) in **changed `dna/**.md`** only (diff-scoped — never a whole-repo sweep), flag a line containing a **control-claim word** (case-insensitive, whole-word): `enforced|sealed|locked|hardwired|wired|is live|is active|guaranteed|done` **UNLESS** the same or an immediately-adjacent line carries an **evidence marker**: a backtick `` `command` ``, a `file:line` ref, a 7+ hex commit hash, or a tag `[VERIFIED]/[FILE-EVIDENCE]/[MEASURED]/[SOURCED]`. Output **WARN** only (`[EVIDENCE-CLAIM] control claim without adjacent evidence: <file:line>`); not in the `[ZF]` formula.
**Fixture (RI-0058, both directions):** `dna/checks/fixtures/evidence-claim/should-flag.md` (a control claim, no marker) + `should-pass.md` (same claim WITH a marker). Check FLAGS the first, PASSES the second.
**Honest tier:** this SURFACES unsupported claims; it does **not** prove a claim false. It is *detect-after* (the weak tier), never "enforcement."
**DoD:** the fixture run FLAGS should-flag + PASSES should-pass (output shown); the invoker line named in plan-audit.sh.

### STEP 2 — `[DUAL-REVIEW]` check (WARN / detect-after tier) — fulfils ARCH-00433 FINDING 4
**File:** `dna/checks/plan-audit.sh` (sibling of the existing `[RATIFY-GATE]`).
**Action:** for each `dna/planning/*.md` whose Status/Planning-Status is `RATIFIED`/`COMPLETE`, flag it if it does **not** cite **two** recorded GI-68 review verdicts — one from **cisem-haiku** and one from **cisem-sonnet** (e.g. a `## GI-68 Dual Review` section or explicit haiku+sonnet verdict citations). Output **WARN**. This EXTENDS `[RATIFY-GATE]` (which checks the Opus Stage-1 verdict citation); together they cover the full GI-68 evidence set.
**Honest limit (verbatim, mirrors `[RATIFY-GATE]`):** this verifies the **citation exists**, not that the review was substantive — substance is Opus's value-assessment, never a mechanical check.
**Fixture (both directions):** `dna/checks/fixtures/dual-review/should-flag.md` (RATIFIED, no dual-review citation) + `should-pass.md` (RATIFIED, both verdicts cited). Pre-GI-68 plans carry an explicit exempt tag (as `[RATIFY-GATE]` already does).
**DoD:** fixture FLAGS should-flag + PASSES should-pass (output shown); invoker line named.

## CORE SEEDS (immutable — honor verbatim)
[[CORE-SEED | MUST: both checks are DETECT-tier (weak). Never describe them as "enforced/prevents" — they SURFACE unsupported claims/citations, they do not prove falsity. Neither may self-certify: no "done/enforced" claim about a check without quoting its fixture output. | WHY: describing a detect-check as enforcement is the exact self-certification class this plan targets | VERIFY: each check's docstring states its tier + cites its fixture]]
[[CORE-SEED | MUST: diff-scoped for [EVIDENCE-CLAIM] (changed/added lines only), never a whole-repo sweep. | WHY: a whole-repo grep of "hardwired/enforced" false-positives on all of CLAUDE.md — the P5/[CHECK-LINT] false-positive class | VERIFY: the check reads git diff, not find-all]]
[[CORE-SEED | MUST: "closed" = blocks-known-bad + passes-known-good + is-invoked. Ship a both-directions fixture (RI-0058) for EACH check AND name the invoker line in plan-audit.sh. | WHY: a check with no invoker is a file; one that rejects everything breaks the board | VERIFY: both fixtures pass both directions; grep shows both call sites]]
[[CORE-SEED | MUST: report the REAL commit hash; never claim [ZF] green if it isn't; the evidence-marker / verdict-citation sets are data — EXTEND them, never weaken them to auto-pass. | WHY: weakening the marker set silently defeats the check | VERIFY: honest board reported; marker set only grew]]

## Per-File Alignment Table
| File | ID / registry | Schema placement | tags | status |
|---|---|---|---|---|
| `dna/planning/CISEM-ARCH-00435-...md` (this) | ARCH-00435 (naming 435→436) | T-SYS, planning layer | planning, evidence-discipline | PROVISIONAL-ACTIVE / AWAITING-BUILDER-REVIEW |
| `dna/checks/plan-audit.sh` (+`evidence-claim.sh` if split) | check | T-SYS, check layer | evidence-claim, dual-review | to-modify at build |
| `dna/checks/fixtures/evidence-claim/{should-flag,should-pass}.md` | fixture | T-SYS, check-fixture | fixture | to-create at build |
| `dna/checks/fixtures/dual-review/{should-flag,should-pass}.md` | fixture | T-SYS, check-fixture | fixture | to-create at build |

## What DOES change
`plan-audit.sh` gains two WARN checks + their invoker lines; four fixture files created; ARCH next_seq 435→436 (registry).

## What does NOT change
No BLOCK-mode (both WARN). Not added to `[ZF]` formula. No existing check altered except additive wiring. No `[RATIFY-GATE]` change (extended by, not modified). No tri-state work (ARCH-00434). No turn-contract (needs A11 Brain consult).

## Definition of Done Reference
`dna/checks/definition-of-done.md` — each check meets the 3-clause "closed" definition (blocks-known-bad + passes-known-good + invoked), evidence shown (fixture output + named invoker); [CREATION-GATE]/[TAG-STATUS] pass on new fixtures. Honest: WARN-tier, not "enforced."

## Propagation Declaration
The two checks join the plan-audit check-set; their existence is cited in the check-registry (if present) by reference (I10). No derived view.

## Dependencies
- **fulfils:** ARCH-00433 FINDING 4 ([DUAL-REVIEW] earmark) — this plan is its home.
- **complements:** the existing `[RATIFY-GATE]` (Opus-verdict citation) — [DUAL-REVIEW] adds the two GI-68 verdicts.
- **unblocks:** honest "GI-68 mechanically backstopped" claim; a mechanical brake on self-certification in governed docs.
- **not-blocked-by:** anything — both are additive WARN checks.

## Self-Compliance (ARCH-00230)
Existing-First (§3.2b) STATED: searched `dna/checks/` — no existing `[EVIDENCE-CLAIM]`/`[DUAL-REVIEW]` check; `[RATIFY-GATE]`/`[CHECK-LINT]`/`[DEFER-SCAN]` are the siblings; ARCH-00433 FINDING 4 named `[DUAL-REVIEW]` for exactly this plan; ARCH-00434 already owns tri-state (excluded here). Parent laws: RI-0058, Principle 18C, I22/I23. Tags+Status+Pocket+Verifier+Core-Seeds+Anti-Scatter present. Under 200 lines.

## Path Rejection Declaration
- ❌ **A fresh unrelated plan for [EVIDENCE-CLAIM] alone** — REJECTED (A8): [DUAL-REVIEW] is a named sibling of the same class; forking would re-scatter. Batched.
- ❌ **Tri-state config lint here** — REJECTED: already in ARCH-00434 (I19 — enhance there, don't duplicate).
- ❌ **BLOCK-mode now** — REJECTED: unproven checks graduate WARN→BLOCK only after false-positive-free trials (ARCH-00270 discipline).
- ❌ **Describing these as "enforcement"** — REJECTED: they are detect-tier; calling them enforcement is the very class they catch.

## Opus Stage-1 Soundness Verdict (for [RATIFY-GATE])
DEFERRED — at AWAITING-BUILDER-REVIEW; Opus soundness + GI-68 dual-review are the next gates before Governor ratification (§1.8). Not self-ratified (GI-63).

## Change log
- v1.0 — 2026-08-18 (Opus via /cisem-plan, after Existing-First surfaced ARCH-00433's [DUAL-REVIEW] earmark + ARCH-00434's tri-state coverage): batched [EVIDENCE-CLAIM] + [DUAL-REVIEW] as ARCH-00435; honest one-source basis stated (Brain item 53); both WARN/detect-tier; both-directions fixtures + named invokers required. Awaits Opus soundness → GI-68 → Governor ratification.
