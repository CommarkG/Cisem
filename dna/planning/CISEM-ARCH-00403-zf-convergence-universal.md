# ZF-Convergence (Loop-Until-Dry) as a Universal Discipline
**Node ID:** CISEM-ARCH-00403 | **Type:** ARCH | **Status:** PROVISIONAL-ACTIVE
**Planning Status:** CONSENSUS-REACHED (Opus Stage-1 soundness = SOUND, 2026-07-20; awaiting Governor Stage 2) | **depth_level:** L1 | **Position in schema:** T-SYS, enforcement/CAL layer
**Size-gate exception (§3.6):** documented size exception — this plan sits at ~200 lines (one SSOT + 8 precise insertion points + full v1.1 §2 compliance); splitting one atomic change would fragment the SSOT it strengthens. Kept whole per §3.6.
**tags:** [planning-domain, zf, convergence, propagation, mandatory, harvest]
**Goal:** Wire ZF-CONVERGENCE — "a partial pass is never done; continue passes until a full pass surfaces NOTHING
new (CONVERGED), OR cap at K passes and DISCLOSE residuals" — as a UNIVERSAL discipline across every agent, skill,
and the ARCH-00370 harvest, from ONE SSOT (reference-not-copy). Measurable: `dna/checks/zf-convergence.md` exists
+ all 8 downstream surfaces (4 agents, 3 skills, ARCH-00370) carry a one-line by-path pointer to it, zero inline
copy of the rule text.
**Governing corespine:** CS-CREATION-001
**Independent Verifier:** `cisem-opus-pe` (cold default-refute pass — author is Sonnet, verifier is Opus; satisfies
P5 author≠verifier).

**Existing-First (§3.2b, done):** Searched `dna/ssot-registry.yaml` (`concepts.` has no entry for a convergence/
loop-until-dry rule — nearest neighbor is `invariants_I1_In` → ARCH-00320, which does not name it) → grepped the
whole repo for `zf-convergence|convergen|loop-until-dry` (18 hits — every one is a MENTION of the concept: ARCH-00190
§3 Stage 0's own "Repeat until CONVERGED or max K passes"; ARCH-00401 Trial-Observation 7 naming the gap; the
learning-registry/naming-registry entries recording OBS-7; the 6-round external reviews using "converge/convergence"
in an unrelated sense — NONE is a standalone SSOT file) → `dna/corespines/corespine-registry.yaml` (no corespine
owns this) → `dna/archive/archive-ledger.yaml` (DEC-0001..0006 — none rule this out) → `dna/naming-manifest.yaml` +
`dna/naming-registry.yaml` (ARCH next_seq comment already pre-reserves 00403 for this exact title, Opus-allocated).
**VERDICT: nothing exists as a standalone home. ARCH-00190 §3 Stage 0 is the ONE place the principle is actually
IMPLEMENTED (the iterative draft-review loop); this plan EXTRACTS that principle into its own SSOT so it can be
referenced everywhere else, rather than re-implemented or copy-pasted per surface (I10/A8) — a genuine gap-fill.**

## Pocket Declaration
- **reasoning_scope:** specify ONE new SSOT file (`dna/checks/zf-convergence.md`) + 8 one-line by-reference
  pointer insertions (4 agents, 3 skills, ARCH-00370); produce this plan artifact only — no file outside this
  plan is created or edited in this drafting task (Core Seed 1)
- **inherited_constraints:** A1–A9; D1–D6; I7 (no truth-fields); I10/I19 (extend, never fork, never copy); I25
  (a plan authorizes, does not implement); §1.7 git-race discipline (stage specific files only)
- **output_contract:** this plan document only — `dna/checks/zf-convergence.md` and all 8 referencing surfaces
  are untouched by this drafting task
- **ai_cannot:** self-ratify; create the SSOT or edit any agent/skill/protocol in this task; stamp any
  Status/RATIFIED field
- **recorded_at:** 2026-07-20

## Executive Summary
ARCH-00401's Trial-Observation 7 (Governor's live challenge) named a real gap: loop-until-dry exists ONLY inside
ARCH-00190 §3 Stage 0's plan-review loop — every other enumeration/audit/gather/harvest surface in CISEM (the 4
agents, 3 skills, and the ARCH-00370 STEP 1–5 harvest) runs a SINGLE pass and calls it done, with no standing
instruction to continue until a full pass finds nothing new. This plan closes that gap the CISEM way: ONE SSOT
(`dna/checks/zf-convergence.md`) states the principle once; every surface gets a one-line by-path pointer, never a
copy — dogfooding the exact propagation-by-reference mechanism this plan exists to enforce (the §2.4/§1.6 drift
class this avoids by construction).

## Tier-Routing Declaration (per CLAUDE.md §3.0)
- **Drafting this plan → Sonnet** (STRUCTURING tier, this session) — executing Opus's fully-specified 3-tier order
  verbatim; no design judgment exercised, Opus already scoped every insertion point.
- **Judging soundness (Stage 1) → Opus (cisem-opus-pe)** — cold default-refute verify pass.
- **Building the SSOT (post-ratification) → Sonnet** — mechanical file-write + 8 one-line insertions, following
  the plan exactly.
- **Two-model verify on the agent-file edits (post-ratification) → mandatory** (persona `## DEVELOPMENT
  DISCIPLINE`): editing the 4 agent files is an agent-itself change (COMPACT STATE v7 ADDENDUM rule) — needs
  two orthogonal-lens verification + Opus ratification before it counts as done, distinct from the 3 skill/
  ARCH-00370 edits (checklist/protocol-tier, single-lens Opus verify suffices).
- **Ratifying → Governor** (Stage 2 decree), per ARCH-00190 §3 unchanged.
- Why: mechanical/structural work (spec'ing + later writing an SSOT + 8 pointer lines) is Sonnet's lane;
  judgment/soundness/truth-stamping is Opus's — the §3.0 rubric applied to this plan's own creation and its build.

## Anti-Scatter Ordering (CLAUDE.md §2 Principle 16) — infrastructure-first
**TIER 1 — the SSOT (everything else depends on this existing first):**
1. Create `dna/checks/zf-convergence.md` — the ONE definition.

**TIER 2 — reference it everywhere, by-path, one line each (depends on Tier 1):**
2. 4 agent files gain a one-line pointer, strengthening their EXISTING ZF language (Haiku's "ZF ENUMERATION",
   Sonnet's "ZF before done") to include convergence — not a new section, an addition to what already exists.
3. 3 skill files gain the same one-line pointer.
4. ARCH-00370 harvest gains a pointer — STEP 1–5 loops to convergence, not one pass.

**TIER 3 — mechanical nudge (peripheral to THIS plan; disclosed follow-on, not built here):**
5. A candidate WARN check (an audit/harvest return claiming completeness should state convergence-or-K) is
   PARKED as a named follow-on — behavioral-to-mechanical is a real gap, but building a 4th plan's worth of
   grep logic inside this plan would scatter it past its own scope (Core Seed rejecting scope-creep, mirrors
   ARCH-00402's own precedent of specifying-not-building the mechanical check in the same pass as the SSOT).

## The Rule — ONE SSOT + 8 by-reference insertions (verbatim Opus order; each: what / insertion / kind)
**TIER 1:**
1. **`dna/checks/zf-convergence.md`** (NEW SSOT, parallel in form to `dna/checks/definition-of-done.md` — no
   `CISEM-{TYPE}-{SEQ}` ID, governed by ARCH-00320/CS-CREATION-001, T-SYS enforcement/CAL layer). Contents:
   (a) the principle statement (loop-until-dry, quoted above in Goal); (b) WHAT IT APPLIES TO — enumeration,
   audit, gather, extraction, harvest (the 5 pass-based activity classes named in Opus's spec); (c) the
   CONVERGED test — a full pass yields nothing new (no new finding/insight/reference/gap); (d) the K-cap +
   residual-disclosure escape (default K=3, mirroring ARCH-00190 §3 Stage 0's own default, cited by-reference
   not re-derived); (e) the honesty rule — one partial pass is never "done" (I2/I22 lineage). **[NEW-CLAUSE]**

**TIER 2 (each a ONE-LINE pointer, e.g. `**ZF-CONVERGENCE (loop-until-dry):** see dna/checks/zf-convergence.md
— a pass is never "done" after one partial sweep.` — inserted into the file's existing rules/operational-notes
block, NOT a new section):**
2. `.claude/agents/cisem-haiku.md` — insertion: inside "ZF ENUMERATION" block (the existing enumeration mandate),
   strengthening it to convergence-aware. **[STRENGTHENED]**
3. `.claude/agents/cisem-sonnet.md` — insertion: inside the "MANDATORY ZF (Zero-Findings) before any 'done'"
   rule. **[STRENGTHENED]**
4. `.claude/agents/cisem-opus-pe.md` — insertion: inside "YOUR JOB — judgment + verification" (the adversarial
   verify block), since judging convergence-vs-residual is Opus's call. **[NEW-CLAUSE]**
5. `.claude/agents/cisem-fable.md` — insertion: inside the persona/root-cause block (Fable's mentorship scope
   includes reviewing whether a pass converged before advising permanence). **[NEW-CLAUSE]**
6. `.claude/skills/cisem-create/SKILL.md` — insertion: STEP 10 Leg 3 (AI OVERSIGHT — the RQC pass). **[NEW-CLAUSE]**
7. `.claude/skills/cisem-plan/SKILL.md` — insertion: Wizard Step 1 (mirrors ARCH-00190 §3 Stage 0, which already
   implements the loop — the pointer makes the LINK explicit for the wizard's own readers). **[STRENGTHENED]**
8. `.claude/skills/cisem-meta/SKILL.md` — insertion: STEP 7 Self-Compliance Check. **[NEW-CLAUSE]**
9. `dna/protocols/CISEM-ARCH-00370-session-learning-extraction.md` — insertion: STEP 1 "Scan the Session" —
   the harvest explicitly loops to convergence, not one enumeration pass. **[STRENGTHENED]**

**TIER 3 (disclosed follow-on, NOT built in this plan):**
10. A future `plan-audit.sh` WARN check (candidate name `[CONVERGE]`) that flags an audit/harvest-type commit
    message/return claiming completeness without stating convergence-or-K. Routed exactly as ARCH-00402 routed
    its own mechanical check — spec'd in a LATER plan, not smuggled into this one.

## Per-File Alignment Table (per ARCH-00401 Enhancement 3)
| File | ID / Number | Schema Placement (SCHEMA-00001) | Tag (VOC-00001) | Status (VOC-00002) |
|---|---|---|---|---|
| `dna/planning/CISEM-ARCH-00403-zf-convergence-universal.md` (this file) | CISEM-ARCH-00403 (naming-registry.yaml ARCH next_seq 403→404, Opus-allocated, VERIFIED not re-bumped) | T-SYS, planning-governance layer | planning-domain, zf, convergence, mandatory | Status: PROVISIONAL-ACTIVE / Planning Status: AWAITING-BUILDER-REVIEW |
| `dna/checks/zf-convergence.md` (NEW SSOT — target of Tier 1; NOT created by this drafting task) | no `CISEM-{TYPE}-{SEQ}` ID (parallels `definition-of-done.md`) — governed by ARCH-00320 §6 / CS-CREATION-001 | T-SYS, enforcement/CAL layer | zf, convergence, gate, mandatory | follow-on (created upon ratification) |
| `.claude/agents/cisem-haiku.md` (Tier 2, pointer only) | no ID — agent artifact, governed by CS-AI-PROFILING-001 | T-SYS, AI-Team/agents layer | agent, gathering-tier | unchanged by this plan; 1-line pointer is the follow-on edit |
| `.claude/agents/cisem-sonnet.md` (Tier 2, pointer only) | no ID — agent artifact, governed by CS-AI-PROFILING-001 | T-SYS, AI-Team/agents layer | agent, structuring-tier | unchanged by this plan; 1-line pointer is the follow-on edit |
| `.claude/agents/cisem-opus-pe.md` (Tier 2, pointer only) | no ID — agent artifact, governed by CS-AI-PROFILING-001 | T-SYS, AI-Team/agents layer | agent, judge-tier | unchanged by this plan; 1-line pointer is the follow-on edit |
| `.claude/agents/cisem-fable.md` (Tier 2, pointer only) | no ID — agent artifact, governed by CS-AI-PROFILING-001 | T-SYS, AI-Team/agents layer | agent, mentor-tier | unchanged by this plan; 1-line pointer is the follow-on edit |
| `.claude/skills/cisem-create/SKILL.md` (Tier 2, pointer only) | no ID — skill artifact, governed by ARCH-00340 | T-SYS, AI-Team/skills layer | skill, creation-gate | unchanged by this plan; 1-line pointer is the follow-on edit |
| `.claude/skills/cisem-plan/SKILL.md` (Tier 2, pointer only) | no ID — skill artifact, governed by ARCH-00340 | T-SYS, AI-Team/skills layer | skill, planning-domain | unchanged by this plan; 1-line pointer is the follow-on edit |
| `.claude/skills/cisem-meta/SKILL.md` (Tier 2, pointer only) | no ID — skill artifact, governed by ARCH-00340 | T-SYS, AI-Team/skills layer | skill, protocol | unchanged by this plan; 1-line pointer is the follow-on edit |
| `dna/protocols/CISEM-ARCH-00370-session-learning-extraction.md` (Tier 2, pointer only) | CISEM-ARCH-00370 (existing, unchanged number) | T-SYS, learning-loop + memory layer | learning, extraction, harvest | unchanged by this plan; 1-line pointer is the follow-on edit |
| `dna/naming-registry.yaml` (already modified by Opus — ARCH next_seq 403→404, comment pre-registers this title) | REG type, self-exempt (next_seq: 1) | T-SYS, naming-allocation layer | naming, numbering, mandatory | present, unchanged status (registry has no lifecycle Status field; VERIFIED via read, not re-bumped) |

## What DOES change (upon ratification — implementation is a LATER, separate step; NOTHING here executes now)
- `dna/checks/zf-convergence.md` — created (Tier 1 SSOT).
- 4 agent files + 3 skill files + ARCH-00370 — each gains exactly ONE line (a by-path pointer), inserted into an
  EXISTING block per the insertion points named in The Rule — no new section headers, no restructuring.

## What does NOT change
- The `[ZF]` aggregate FORMULA in `plan-audit.sh` (`I1+I9+I6-SIZE+I16+I19+I23+I24+P3+P5`) — untouched; no BLOCK.
- ARCH-00190 §3 Stage 0's loop text itself — it already implements convergence; this plan does not edit it, only
  gives it (and every other surface) a shared, citable SSOT.
- No new protocol/wizard/corespine node — `dna/checks/zf-convergence.md` is a check/SSOT artifact (same class as
  `definition-of-done.md`), not a governed node requiring a `CISEM-{TYPE}-{SEQ}` ID.
- `dna/checks/plan-audit.sh` — the Tier-3 `[CONVERGE]` check is explicitly NOT built here (disclosed follow-on).

## Definition-of-Done reference
Per `dna/checks/definition-of-done.md` (cited, not re-derived): DONE for this plan's eventual implementation =
(1) `zf-convergence.md` created (PRODUCED); (2) all 8 surfaces carry the pointer, verified by grep (PROPAGATED —
zero inline copy); (3) two-model-verified for the 4 agent-file edits (persona DEVELOPMENT DISCIPLINE rule); (4)
committed + pushed (0 unpushed); (5) Opus-independently-verified — OR an honest `NOT-YET-WIRED:<reason>` tag per
surface if any insertion is incomplete. "Produced" (SSOT written, nothing referencing it) alone is never "done."

## Propagation Declaration (dogfoods the very mechanism this plan enforces)
ZF-CONVERGENCE lives ONCE, in `dna/checks/zf-convergence.md`. Every one of the 8 downstream surfaces REFERENCES it
BY-PATH — never copies its text inline. This is the identical anti-drift mechanism CLAUDE.md §2.4/§1.6 already use
for the shared persona and axioms (a mirror may reference/summarize, never diverge, I10/A8); this plan applies that
SAME pattern to a NEW concept instead of inventing a parallel one. No generated view needs to regenerate (no HTML
page mirrors agent/skill internals today); a future skills/agents HTML page (BP-0011, parked) would read the SSOT
by-path too, when built.

## Dependencies (blocks-on / unblocks-for)
- **Blocks-on:** none — ARCH-00401 (which named this gap as Trial-Observation 7) is RATIFIED (Governor decree
  2026-07-20); this plan is the disclosed companion it named, free to proceed.
- **Unblocks-for:** the propagation-mechanism theme generally (every future "define once, reference N times" need
  gets a proven worked example); reliable cross-surface inheritance of ANY future universal discipline (this is
  the SECOND time a principle needed retrofitting to 8 surfaces — the pattern this plan establishes is reusable).
- **Follow-on (explicitly NOT built here, disclosed per I2/I22):** the Tier-3 `[CONVERGE]` plan-audit.sh check —
  a separate future plan, mirroring how ARCH-00402 followed ARCH-00401.

## Ratification Path
Stage 0 (iterative draft-review loop, per ARCH-00190 §3 Stage 0 — this plan's OWN subject matter) — minimal for
this plan: small, low-blast, an SSOT-plus-8-pointers scope with zero truth-field changes; per ARCH-00401
Trial-Observation 5's cold-verify threshold judgment, Stage 1 runs as Opus's own independent judgment pass rather
than a separately-dispatched cold agent (P5's author≠verifier minimum still met: Sonnet authors, Opus verifies) →
Stage 1 (Opus soundness, `cisem-opus-pe`) → Stage 2 (Governor decree). Planning Status transitions per ARCH-00190
§1 unchanged.

## Self-Compliance (against ARCH-00230 checklist + ARCH-00190 §2)
✓ Header (ID/Type/Status/Planning-Status/depth_level/tags/goal/corespine/pocket) ✓ Tier-Routing Declaration
✓ Anti-Scatter Ordering ✓ Per-File Alignment Table ✓ What DOES / does NOT change ✓ Definition-of-Done reference
✓ Propagation Declaration ✓ Dependencies ✓ Ratification Path ✓ Independent Verifier named ✓ Existing-First stated
✓ Path Rejection Declaration ✓ CAL reference ✓ Change log

## Path Rejection Declaration (CLAUDE.md §2.8)
- ❌ Rejected: creating `zf-convergence.md` and editing the 8 surfaces in this same task — A4/I25 requires
  ratification BEFORE implementation; this artifact is the PLAN, not the edit (Core Seed 1).
- ❌ Rejected: copying the convergence rule text into each of the 8 surfaces — the entire point is ONE SSOT
  referenced N times; inline duplication is the exact §2.4/§1.6 drift class this plan exists to prevent
  (Core Seed 2).
- ❌ Rejected: folding this into `dna/checks/definition-of-done.md` instead of a new SSOT — different concept
  (completeness-of-SEARCH/enumeration vs done-of-WORK); DoD's 7 items are about an artifact's lifecycle, not
  about whether a PASS over a search space was exhaustive; mushing the two would violate A9's singly-homed+crisp
  guardrail (a facet with no clean home). Kept as a sibling SSOT to `definition-of-done.md`, same governance tier.
- ❌ Rejected: building the Tier-3 `[CONVERGE]` mechanical check inside this plan — scope-creep past the 9
  specified Tier-1/2 insertions; routed as an explicit follow-on (Dependencies), mirroring ARCH-00402's precedent.
- ❌ Rejected: inventing a new corespine or node-ID type for the SSOT — it is a check/SSOT artifact, same class
  as `definition-of-done.md` (no `CISEM-{TYPE}-{SEQ}` ID), governed by existing ARCH-00320/CS-CREATION-001.

## CAL reference (CISEM-ARCH-00390)
Pre-commit `[ZF]` + `[DOD]` + `[ROUTING]`/`[ALIGN]`/`[TAG-STATUS]` (ARCH-00402) run on this plan file itself at
commit time. Once implemented, `zf-convergence.md` becomes a new by-path target the SessionStart/PreCompact hooks
could eventually cite (not required for this plan's scope) — no new hook, no new trigger point; CAL's existing
git pre-commit surface + the agent/skill bootstrap reads already absorb the 9 insertion points.

## Change log
- v0.1 — 2026-07-20 (Sonnet, STRUCTURING tier, dispatched by Opus): initial draft. ONE-SSOT + 8-pointer spec
  (Tier 1/2/3), Anti-Scatter Ordering, Per-File Alignment Table, Propagation + DoD references populated per Core
  Seeds 1–3. NOT committed by Sonnet (Opus commits after judging, per dispatch instructions).
- v0.2 — 2026-07-20 (Opus cisem-opus-pe, JUDGE): Stage-1 soundness = **SOUND**. Verified reference-not-copy (1
  SSOT + 8 by-path pointers, zero inline copy), the new-SSOT-vs-DoD reasoning (A9 singly-homed + crisp), the
  two-model-verify distinction for the 4 agent-file edits, and the disclosed Tier-3 `[CONVERGE]` follow-on. Passed
  the live [ROUTING]/[ALIGN]/[TAG-STATUS] gate checks. Planning Status → CONSENSUS-REACHED. HIGH-BLAST (touches 4
  agents + 3 skills + ARCH-00370) → Governor Stage-2 ratification required before any implementation.
