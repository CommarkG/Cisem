# Enforcement Depth — Graduated BLOCK-Mode Flip (v2 — supersedes the v1 "two independent mechanisms" scope)
**Node ID:** CISEM-ARCH-00270 | **Type:** ARCH | **Status:** PROPOSED
**Planning Status:** COMMENTS-RECEIVED | **depth_level:** L1 | **Position in schema:** T-SYS
**tags:** [planning-domain, hardcode, enforcement, block-mode, graduated-flip, defense-in-depth, mandatory]
**Goal:** Move `plan-audit.sh` from WARN-only toward BLOCK — GRADUATED per-check maturity, never big-bang — so a
commit carrying a genuine ZF-core violation is mechanically refused, while immature/buggy checks stay WARN until
each individually earns BLOCK via a planted-test finish line. Measurable as: (1) a planted ZF-core violation (e.g.
a dangling I1 reference) on a clean tree is REFUSED at commit; (2) a clean tree commits normally; (3) every newer
check's graduation status is stated, with `[TAG-STATUS]` explicitly held on its known bug.
**Governing corespine:** CS-CREATION-001
**Planning Domain:** dna/planning/, per CISEM-ARCH-00190
**Independent Verifier:** `cisem-haiku` (cold, mechanical-check lens; distinct from `cisem-sonnet`, this revision's
author — P5). *Closes the v1 debt: the header previously read "[pre-P5 legacy — grandfathered 2026-07-18; assign
on next revision]" — this IS that revision.*

**Size-gate (§3.6, documented exception, honesty per Principle 17):** this revision carries 4 Core Seeds + the
mandatory ARCH-00401 sections (Tier-Routing Declaration, Anti-Scatter Ordering, the mandatory per-file alignment
listing, DoD reference, Propagation Declaration) + a per-check graduation table — the same structural tension
RI-0026 already names (ARCH-00190/00401/00417/00418 all hit this wall). Kept whole rather than mini-tree-split (4
deliverables do not warrant fragmentation); exceeds 200 lines — disclosed, not silently claimed clean.

## Core Seeds (from Opus dispatch, 2026-07-24 — immutable, executed verbatim, I13; quoted per Principle 14)
```
[[CORE-SEED A | MUST: GRADUATED flip, never big-bang — only the PROVEN [ZF]-core checks (I1/I9/I6-SIZE/I16/I19/I23/I24/P3/P5) graduate to BLOCK now; newer checks stay WARN until each individually earns it | WHY: a big-bang flip would BLOCK good commits on immature/buggy checks | APPLIES_TO: the flip deliverable]]
[[CORE-SEED B | MUST: the GRADUATION RULE — a check earns BLOCK ONLY by passing a planted-test (flags a real injected violation AND zero false positives on a clean tree); this is ARCH-00418's mechanical finish-line applied to checks | WHY: BLOCK-readiness must be mechanically proven, never assumed by age | APPLIES_TO: the graduation-rule deliverable]]
[[CORE-SEED C | MUST: [TAG-STATUS] does NOT graduate until its bare-substring extractor bug (hit twice this session) is fixed + planted-tested | WHY: BLOCKing a known-false-positive check stops good commits | APPLIES_TO: the WARN-stays list]]
[[CORE-SEED D | MUST: reuse the EXISTING pre-commit hook (already runs plan-audit.sh + [I13] BLOCK) — extend it to exit non-zero on ZF-core failure; do NOT build a new enforcement mechanism; CI (GitHub Actions) is a disclosed defense-in-depth FOLLOW-ON, not the minimal deliverable | WHY: A8 reuse; the enforcement layer partly exists | APPLIES_TO: the enforcement deliverable]]
[[CORE-SEED E | MUST: this REVISES the existing ARCH-00270 (no new number); PLAN skeleton only, build NO mechanism, no self-ratify; DOGFOOD the finish-line discipline — declare each deliverable's pre-declared finish line + closure-grade | WHY: A8/A4/A11 + ARCH-00418 | APPLIES_TO: this drafting task]]
```

## Pocket Declaration
- **reasoning_scope:** revise CISEM-ARCH-00270 from its v1 "two independent mechanisms" scope to the ratified
  graduated per-check BLOCK-flip design; produce the plan artifact only, build no mechanism
- **inherited_constraints:** A4/A8/A11 (revise, don't fork); I13 (seed integrity); RI-0012/RI-0025 (substring-vs-
  field / source-verification — applied to my own prose below); §1.7 git-race (Sonnet does not commit)
- **output_contract:** this plan document only (no naming-registry bump — same ID, a revision)
- **ai_cannot:** self-ratify; build the plan-audit.sh exit-code change or the pre-commit hook edit; write any truth field
- **recorded_at:** 2026-07-24

## Tier-Routing Declaration (CLAUDE.md §3.0)
- **Revising this plan → Sonnet** (STRUCTURING tier) — executing the Opus-dispatched, Governor-ratified graduated-
  flip DIRECTION verbatim (4 Core Seeds); no design judgment exercised.
- **Judging soundness (Stage 1) → Opus (cisem-opus-pe)** — cold default-refute, fresh read; NOT run in this
  drafting pass (see Opus Stage-1 Soundness Verdict below — pending).
- **Fable Stage 1.5 → NOT triggered.**
- **Governor Stage 2 → ratification authority** for THIS revised artifact (distinct from the DIRECTION-level
  ratification already given for the graduated-flip approach — see Ratification Path).
- Why: mechanical restructuring of an already-consensus'd direction into a plan artifact = Sonnet's lane;
  judgment/soundness/truth = Opus's (§3.0 rubric).

## Executive Summary
v1 (2026-07-16) proposed a big-bang two-mechanism design (local pre-commit hook + GitHub CI) for a `plan-audit.sh`
that did not yet exist in WARN-mode maturity, and its precondition ("after ARCH-00320 is RATIFIED") is now MET —
ARCH-00320 was Governor-ratified 2026-07-18. The world has moved since v1: `plan-audit.sh` now runs ~20 checks
WARN-only, of which 9 form the proven, stable **[ZF] formula** (I1+I9+I6-SIZE+I16+I19+I23+I24+P3+P5) that has been
the de-facto done-gate all session with zero false-positive incidents; the pre-commit hook already runs it every
commit and already hard-BLOCKs one thing ([I13] seed-strip). This revision REPLACES v1's big-bang scope with a
**GRADUATED per-check flip**: the proven ZF-core graduates to BLOCK now (D2); every newer/WARN-at-introduction
check stays WARN until it individually earns BLOCK via a planted-test finish line (D1's Graduation Rule); `[TAG-
STATUS]` is explicitly named as NOT graduating (its bare-substring extractor bug hit twice this session — D3); and
CI (GitHub Actions) is kept as a disclosed defense-in-depth follow-on, not the minimal deliverable (D4) — the
enforcement layer for D2 REUSES the existing pre-commit hook, it does not build a new one.

## Existing-First (§3.2b, done)
Searched **`dna/checks/plan-audit.sh`** (read in full — the `zf_open` formula at line 664 is EXACTLY I1+I9+I16+
I19+I23+I24+P3+P5+I6-SIZE; the file always `exit 0` at line 673 — WARN-only by construction); **`.git/hooks/pre-
commit`** (read in full — already runs `plan-audit.sh` every commit, already hard-BLOCKs `[I13]` seed-strip
independently of `plan-audit.sh`'s own exit code, and already sources `dna/checks/pre-commit-blocks.sh` for a
SEPARATE graduated-BLOCK track — BLOCK 1-4, covering plan-fields/persona-inheritance/no-delete/tag+status); **the
v1 body of this file** (read in full — its "Mechanism 1/2" two-independent-mechanisms design predates `plan-
audit.sh`'s current ~20-check maturity and predates `pre-commit-blocks.sh` entirely); **`dna/checks/pre-commit-
blocks.sh`** (read in full — BLOCK 3 no-delete-without-ratification and BLOCK 4 tag+status-hard-BLOCK are ALREADY
graduated, under SEPARATE decrees: RI-0010 2026-07-21 and ARCH-00407 Phase 0 respectively — NOT this plan's doing,
excluded from this plan's WARN-stays list to avoid double-claiming); **`dna/learning-registry/agent-findings.md`**
(the two `[TAG-STATUS]` bare-substring-extractor incidents, 2026-07-23 line 342 and 2026-07-24 line 458 — both
read in full, both hit the identical un-anchored `awk` alignment-section-locator pattern, see D3 below); **`dna/
learning-registry/root-insights.yaml` RI-0012** (the substring-vs-field CLASS this bug belongs to) and **RI-0026**
(the size-gate/mandatory-sections tension this revision also carries). **PATH REJECTION:** reject re-proposing a
NEW enforcement node (Seed D — reuse `.git/hooks/pre-commit`); reject claiming `[CREATION-GATE]`/`[DELETION-
GUARD]`'s hard forms as THIS plan's graduation (they already graduated under ARCH-00407 Phase 0 / RI-0010 — a
different track, named above so it is not double-counted).

## Anti-Scatter Ordering (CLAUDE.md §2 Principle 16)
Infrastructure-first: **D1** (the Graduation Rule clause — the concept D2/D3 both depend on) → **D2** (flip the
proven ZF-core to BLOCK by extending the existing hook) → **D3** (the WARN-stays list, naming `[TAG-STATUS]`'s
block explicitly) → **D4** (CI second layer, disclosed follow-on, smaller and independent, sequenced last).

## The Rule — 4 deliverables (each: insertion · kind · DOGFOODED finish-line · closure-grade, Seed E)

**D1 — The Graduation Rule clause.** Insertion: new `## Graduation Rule` section in THIS document, stating: *a
check earns BLOCK only by passing a planted-test proving (a) it flags a real injected violation, AND (b) it
produces zero false positives on a clean tree* — ARCH-00418's mechanical finish-line discipline applied to checks
(Core Seed B). **[NEW-CLAUSE]**. *Finish line:* the section header `Graduation Rule` is present with both (a)/(b)
conditions stated (grep-verifiable). *Closure-grade:* **MECHANICAL** (grep evidence of the clause's presence — the
RULE it states is a criterion for FUTURE checks, not itself a running mechanism yet).

**D2 — Flip the proven ZF-core to BLOCK (reuse the existing hook).** Insertion, at implementation (NOT built here,
Seed E): (a) `dna/checks/plan-audit.sh` — the `zf_open` aggregate (line 664, already computed, no new logic) drives
the script's own exit code: `exit 1` when `zf_open > 0`, `exit 0` otherwise, in place of the current unconditional
`exit 0`; (b) `.git/hooks/pre-commit` — the call site currently reads `bash "$root/dna/checks/plan-audit.sh" ||
true` (the `|| true` SILENTLY SWALLOWS any non-zero exit — this is the ONE line that must change); replace with a
form that propagates a non-zero `plan-audit.sh` exit as a commit BLOCK. WARN-only checks are UNAFFECTED — none of
them sets a `found_*` variable that feeds `zf_open`, so a `[SEED]`/`[RAW-PAIR]`/etc. finding cannot cause a BLOCK
(verified by reading the formula, not assumed). **[STRENGTHENED]**. *Finish line (TIGHTENED — Opus Stage-1 + Brain concur 2026-07-24; graduate BY D1's rule, not by stability):*
PLANTED-TEST EACH of the 9 ZF-core checks INDIVIDUALLY, both directions — an injected violation of that specific
check is REFUSED, and a clean tree passes. **[I6-SIZE] contingency:** it is phrasing-brittle (its documented-
exception detector needs a magic phrase; a compliant-but-differently-worded plan could false-positive-BLOCK) — vet
it explicitly; if it can cry wolf, it stays WARN alongside [TAG-STATUS] and only the remaining 8 graduate now.
**BUILD-CLOSURE VERIFICATION (Governor standing requirement, attached to THIS plan):** the build is "done" only when
ONE report shows, together — (a) the real commit hash, (b) Brain reading the actual changed source directly (not a
paraphrase), and (c) the planted-test evidence (a commit that SHOULD be blocked, confirmed blocked + a clean commit,
confirmed still passing). *Closure-grade:* **MECHANICAL** (the per-check hook behavior + the 3-part report is the evidence).

**D3 — The WARN-stays list, per-check graduation status.** Insertion: new `## WARN-Stays List` section in THIS
document enumerating every non-ZF-core check currently live in `plan-audit.sh` (`[SEED]`, `[RAW-PAIR]`, `[ARCHIVE]`,
`[NAMING]`, `[DOD]`, `[ROUTING]`, `[ALIGN]`, `[TAG-STATUS]`, `[POCKET]`, `[CHECK-LINT]`, `[RATIFY-GATE]`,
`[INJECTION-SCAN]`, `[NAMING-FORMAT]`, `[TYPE-MATCH]`, `[CS-NAMES]`, `[PROPAGATE]`, `[DEFER-SCAN]`, `[AGENT-PASS]`,
`[DELETION-GUARD]`-in-`plan-audit.sh`'s WARN copy — its SEPARATE hard form is BLOCK 3 in `pre-commit-blocks.sh`
already, a different track, noted not re-claimed) — each held WARN until it individually passes D1's planted-test
finish line. **`[TAG-STATUS]` is explicitly named BLOCKED-ON-BUG (Core Seed C):** its `awk` block-extractor
(`plan-audit.sh` ~line 504) anchors on the bare substring of the alignment section's own heading text ANYWHERE in
the file rather than the real heading line itself — confirmed TWICE this session (`agent-findings.md` 2026-07-23
line 342, ARCH-00417; and 2026-07-24 line 458, ARCH-00418 — the identical mechanism both times: a plan's own §3.6
prose mentioning the section's name before the real heading captures the wrong block and false-flags a present,
correctly-formed table as `MISSING` — this very document hit a third live instance while drafting D3, worked
around the same way, see change log). Per RI-0012's own class rule ("anchor on the field VALUE, never a bare
substring") and the Governor's stated bar ("two instances = class confirmed, no longer novel"), `[TAG-STATUS]`
CANNOT graduate to BLOCK until the `awk` pattern is anchored on the heading line itself (`^## ` + exact title,
heading-start only) AND planted-tested clean. **[NEW-CLAUSE]**. *Finish line:* the section lists all ~19 non-ZF-core checks with a
graduation status word each (`WARN-HELD` or the planted-test date it earned `BLOCK`), and `[TAG-STATUS]` names its
bug + the two incident citations (grep-verifiable). *Closure-grade:* **MECHANICAL** for the list's presence (grep);
the underlying "0 false positives" claim per listed check remains **DISCLOSED, not asserted** until each is
individually planted-tested — this deliverable does not claim that testing has happened.

**D4 — CI second layer (disclosed follow-on, NOT built here).** Insertion: new `## Follow-On — CI Second Layer`
section stating v1's original GitHub Actions branch-protection design remains a valid DEFENSE-IN-DEPTH idea (a
remote, server-side check that `--no-verify` cannot bypass) but is explicitly NOT the minimal deliverable (Core
Seed D) — the repo has no `.github/` directory today, and building it is a SEPARATE follow-on plan, not folded into
this revision's scope. **[FOLLOW-ON, HONEST NOT-YET-BUILT]**. *Finish line:* the section states, in words matching
I23's honesty markers, that CI is NOT-YET-BUILT and names the follow-on condition (a future plan, when local BLOCK-
mode graduation has matured past D2). *Closure-grade:* **DISCLOSED** (no mechanism claimed — an honest NOT-YET-
BUILT tag satisfies I23; there is nothing to grade MECHANICAL or BEHAVIORAL because nothing is asserted active).

## Graduation Rule
*(D1, dogfooded inline — same section the finish-line above verifies exists)* A check in `dna/checks/plan-audit.sh`
graduates from WARN to BLOCK **only** when it passes a planted-test proving BOTH: **(a)** it correctly FLAGS a real,
deliberately-injected violation of the invariant it checks, AND **(b)** it produces **zero false positives** on the
current clean repo tree. Age, session-count, or "it seems stable" are NOT graduation evidence — only the planted-
test pair is. This mirrors ARCH-00418's Pre-Declared Finish Line discipline (D1/D2 there) applied to the checks
THEMSELVES, not just to plan deliverables.

## WARN-Stays List (D3)
The proven **ZF-core** (already graduating under D2): `[I1]` `[I9]` `[I6-SIZE]` `[I16]` `[I19]` `[I23]` `[I24]`
`[P3]` `[P5]`. Everything else in `plan-audit.sh` stays **WARN-HELD** pending its own planted-test:
`[SEED]` `[RAW-PAIR]` `[ARCHIVE]` `[NAMING]` `[DOD]` `[ROUTING]` `[ALIGN]` `[POCKET]` `[CHECK-LINT]`
`[RATIFY-GATE]` `[INJECTION-SCAN]` `[NAMING-FORMAT]` `[TYPE-MATCH]` `[CS-NAMES]` `[PROPAGATE]` `[DEFER-SCAN]`
`[AGENT-PASS]` — and **`[TAG-STATUS]` — WARN-HELD, BLOCKED-ON-BUG** (bare-substring extractor, 2 confirmed
incidents; see D3 above; must NOT graduate before its heading-anchor fix is built + planted-tested). Already graduated under OTHER decrees, not this plan (named to avoid double-claim): `[CREATION-
GATE]`'s hard form (`pre-commit-blocks.sh` BLOCK 4, ARCH-00407 Phase 0) and `[DELETION-GUARD]`'s hard form
(`pre-commit-blocks.sh` BLOCK 3, RI-0010/Governor decree 2026-07-21).

## Follow-On — CI Second Layer
NOT-YET-BUILT. v1's GitHub Actions branch-protection design (remote, server-side, `--no-verify`-resistant) remains
a sound defense-in-depth idea and is preserved here as a NAMED follow-on, not dropped (no collateral deletion,
Principle 18A) — but it is explicitly OUT of this revision's minimal deliverable (Core Seed D). Condition to
resume: once D2's local BLOCK-mode has run for a maturity period with zero recurrence, a SEPARATE plan may propose
the `.github/workflows/` mirror.

## Tags + Statuses on every node this plan creates (ARCH-00401 Enh.2)
This plan creates ZERO new CISEM-ID nodes — it REVISES the existing CISEM-ARCH-00270 (A8, no fork, no naming-
registry bump). It proposes (at implementation, not built here) edits to two existing non-ID governed files:
`dna/checks/plan-audit.sh` and `.git/hooks/pre-commit` — both carry status in the table below.

## Per-File Alignment Table (ARCH-00401 Enh.3 — the mandatory per-file alignment listing)
| File | ID / Number | Schema Placement | Tag (VOC-00001) | Status (VOC-00002) |
|---|---|---|---|---|
| `dna/planning/CISEM-ARCH-00270-enforcement-depth-plan.md` (this file, REVISED) | CISEM-ARCH-00270 (existing ID, no bump — A8 revision) | T-SYS, planning-governance layer | block-mode, graduated-flip, mandatory | Status: PROPOSED / Planning Status: COMMENTS-RECEIVED (unchanged — Opus/Governor stamp per I7) |
| `dna/checks/plan-audit.sh` (target of D2 — NOT edited by this drafting task, Seed E) | no CISEM-ID — executable script, governed by ARCH-00320 §6 | T-SYS, enforcement/CAL layer | gate, audit, mandatory | unchanged by this plan; exit-code change is implementation-phase |
| `.git/hooks/pre-commit` (target of D2 — NOT edited by this drafting task, Seed E) | no CISEM-ID — CAL mechanism, governed by ARCH-00390 | T-SYS, enforcement/CAL layer | hook, block-mode, mandatory | unchanged by this plan; `\|\| true` removal is implementation-phase |

## What DOES change (upon ratification — implementation is a LATER, separate step; nothing here executes now)
- `dna/checks/plan-audit.sh` — exit code driven by the already-computed `zf_open` aggregate (D2).
- `.git/hooks/pre-commit` — the `|| true` swallow on the `plan-audit.sh` call site is removed/replaced (D2).
- This document — Graduation Rule (D1) + WARN-Stays List (D3) + CI follow-on disclosure (D4) sections, all present
  NOW (dogfooded inline, Seed E) as the plan artifact itself, not deferred to implementation.

## What does NOT change
- No new enforcement mechanism is built (Seed D) — the existing pre-commit hook is extended, not replaced.
- No WARN check other than the 9 ZF-core members graduates to BLOCK in this plan (Seed A).
- `[TAG-STATUS]` does not graduate (Seed C) until its bug is fixed + planted-tested (a SEPARATE small build, not this plan).
- CI/GitHub Actions is not built (Seed D/D4) — remains a named, disclosed follow-on.
- v1's original two-mechanism narrative is superseded, not deleted — its content lives in git history (§1.7 git-
  SSOT); this revision's change log records the supersession honestly (below).

## Definition-of-Done reference (ARCH-00401 Enh.5)
Cites `dna/checks/definition-of-done.md` — SSOT, not re-derived here. Verified at the §4 implementation gate
against the SAME 7 items PLUS this plan's own D1–D4 finish lines (dogfooded above), applying ARCH-00418's
MECHANICAL/BEHAVIORAL closure-grade lexicon (once ARCH-00418 itself is implemented) or, until then, the same
grading logic stated inline per deliverable above.

## Propagation Declaration (ARCH-00401 Enh.6)
No SSOT-registry entry exists for "enforcement depth" by name (confirmed — Existing-First search above); ARCH-00270
itself IS the SSOT for this concern (A2, distributed-in nothing else). On implementation: (1) `plan-audit.sh`'s own
header comment log gains a new `v16` entry documenting the exit-code change (matching its existing refinement-log
convention, lines 15-68); (2) `.git/hooks/pre-commit`'s inline comment ("graduated BLOCK-mode — tracked/recoverable
prevention (ARCH-00270 targeted)") is updated to note D2 is now LIVE, not aspirational; (3) `dna/quality-
ledger.yaml` logs the graduation as an RQC run per §6 of ARCH-00320.

## Dependencies (blocks-on / unblocks-for)
- **Blocks-on:** nothing — ARCH-00320 (the stated precondition) is already RATIFIED (Governor decree 2026-07-18,
  source-verified: `dna/protocols/CISEM-ARCH-00320-prevention-and-plan-audit.md` header line 3).
- **Unblocks-for:** every future check's individual graduation (each cites D1's Graduation Rule as its finish-line
  criterion); a future `[TAG-STATUS]` bug-fix plan (cites D3's BLOCKED-ON-BUG status as its trigger); a future CI
  plan (cites D4 as its named follow-on condition).
- **Follow-on (explicitly NOT built here, disclosed per I2/I22):** the `[TAG-STATUS]` extractor fix; the CI second
  layer; any subsequent WARN→BLOCK graduation beyond the 9 ZF-core checks.

## Ratification Path
The APPROACH behind this revision (graduated per-check flip, not big-bang) was Governor-ratified 2026-07-24
(Opus+Brain consensus, source-verified against `plan-audit.sh`'s live `[ZF]` formula and `.git/hooks/pre-commit`'s
live `|| true` swallow) — that ratification authorized DRAFTING this revision, it did NOT ratify this artifact
itself. THIS plan artifact still runs its own double-gate: Stage 0 (iterative Haiku→Sonnet→Opus draft-review loop,
per ARCH-00190 §3) → Stage 1 (Opus soundness, `cisem-opus-pe`, cold default-refute — NOT yet run, see below) →
Stage 1.5 (skipped, not activated) → Stage 2 (Governor decree).

## Opus Stage-1 Soundness Verdict (ARCH-00190 §3 Stage 1; [RATIFY-GATE])
**Verdict: SOUND — with ONE required tightening before Stage-2** (cisem-opus-pe, 2026-07-24; cold default-refute).
Basis: mirrors ARCH-00190; honors Seeds A–E verbatim; Existing-First source-verified (author read plan-audit.sh's
`zf_open` formula + the hook's `|| true` swallow directly — and correctly found the SEPARATE already-graduated
BLOCK track in `pre-commit-blocks.sh`, avoiding a double-claim). D2's key safety property is verified, not assumed:
WARN checks don't feed `zf_open`, so a WARN finding cannot cause a BLOCK. Graduated-not-big-bang, [TAG-STATUS]
correctly held on its (now thrice-confirmed) bug.
**REQUIRED TIGHTENING (caught by default-refute — the plan violates its own D1 rule on the checks it graduates
first):** D1's Graduation Rule says "age / it-seems-stable is NOT evidence — only a planted-test is," yet D2
graduates the 9 ZF-core as a BATCH on "stable all session" evidence, and D2's finish-line only planted-tests the
aggregate wiring + one example. FIX before Stage-2: **D2's finish-line becomes a PER-CHECK planted-test (all 9
individually, both directions), so the ZF-core graduates BY D1's rule, not by stability.** Specifically vet
**`[I6-SIZE]`** — it showed phrasing-brittleness this session (its documented-exception detector requires a magic
phrase; a compliant-but-differently-phrased plan could false-positive-BLOCK); if it can cry wolf, it stays WARN
alongside `[TAG-STATUS]` until its detector is anchored, and only the remaining 8 graduate now.
**NEXT: fold the tightening → Brain-iteration (standing process) + GI-68 dual review → Governor Stage-2.**
(Ambiguity Sonnet flagged — the stale `COMMENTS-RECEIVED` header — resolved: it stays COMMENTS-RECEIVED honestly,
since the required tightening means this is not yet CONSENSUS-REACHED.)

## Self-Compliance (ARCH-00230 checklist)
✓ Header (ID/Type/Status/Planning-Status/depth_level/tags/goal/corespine/Independent-Verifier) ✓ Why-standalone
(revises the existing ARCH-00270, self-contained artifact) ✓ Rule-as-procedure (4 numbered deliverables, insertion+
kind+finish-line+grade each) ✓ Does-NOT-cover / What-does-NOT-change (stated above) ✓ Independent Verifier named
(`cisem-haiku`, cold, differs from author `cisem-sonnet` — P5, closes the v1 grandfathered debt) ✓ Existing-First
stated with sources named ✓ Per-File Alignment Table present ✓ Tier-Routing Declaration present ✓ Anti-Scatter
Ordering present ✓ Propagation Declaration present ✓ DoD reference present ✓ CAL reference present (below) ✓ Own
finish-line + closure-grade dogfooded per deliverable (Seed E).

## Path Rejection Declaration (CLAUDE.md §2.8)
- ❌ Rejected: big-bang WARN→BLOCK flip of every check — Seed A; graduated, per-check only.
- ❌ Rejected: graduating `[TAG-STATUS]` alongside the ZF-core — Seed C; its bug is confirmed twice, unfixed.
- ❌ Rejected: building a new enforcement mechanism (separate hook, new script) — Seed D; the existing pre-commit
  hook (already running `plan-audit.sh` + `[I13]` BLOCK) is extended, not replaced.
- ❌ Rejected: building the CI/GitHub Actions layer now — Seed D; disclosed follow-on only (D4).
- ❌ Rejected: silently deleting v1's two-mechanism content — Principle 18A; superseded and recorded in the change
  log instead, full text remains in git history (§1.7 git-SSOT).
- ❌ Rejected: self-stamping a new Planning Status or a Stage-1 verdict — I7/CORE-SEED E; left for Opus.

## CAL reference (CISEM-ARCH-00390)
Pre-commit `[ZF]` + `[DOD]` + `[I6-SIZE]` (size exception documented above) + `[P5]` (independent-verifier-named)
fire on this plan file itself at commit time. Once D2 is implemented, the SAME `.git/hooks/pre-commit` becomes the
permanent CAL surface enforcing the ZF-core as a hard BLOCK on every future commit — the mechanism this plan exists
to activate, reusing CAL rather than adding a parallel one (ARCH-00390 principle: "hardwired" = wired into CAL).

## Change log
- v1.0 — 2026-07-16: created (Opus/Builder) — two-mechanism design (local pre-commit hook + GitHub CI), Independent
  Verifier grandfathered pre-P5. Builder comment 2026-07-16: "ready for Governor design ratification." Never
  ratified; superseded by v2 below (full v1 text preserved in git history, not deleted, Principle 18A).
- v2.0 — 2026-07-24 (Sonnet, STRUCTURING tier, dispatched by Opus per Governor-ratified graduated-flip direction):
  REVISED from the stale big-bang two-mechanism scope to the ratified GRADUATED per-check BLOCK-flip. Precondition
  (ARCH-00320 RATIFIED) confirmed already met. 4 deliverables sequenced infrastructure-first (D1→D2→D3→D4); Core
  Seeds A–E quoted verbatim (I13); dogfooded a pre-declared finish-line + closure-grade for each deliverable (Seed
  E — this is a first build of the graduation-rule pattern, not yet flawless-proven by divergent iteration, per
  Principle 15). `[TAG-STATUS]`'s confirmed twice-hit bug named explicitly (Seed C). Independent Verifier assigned
  (`cisem-haiku`, closing the v1 grandfathered debt). Header Status/Planning Status left UNCHANGED (I7 — Opus's
  call). NOT committed by Sonnet — Opus commits after review (§1.7 git-race discipline).
