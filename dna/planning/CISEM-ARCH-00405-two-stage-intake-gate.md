# Two-Stage External-Input Intake Gate — De-Pollution (outside) + Conflict-Check (inside)
**Node ID:** CISEM-ARCH-00405 | **Type:** ARCH | **Status:** PROVISIONAL-ACTIVE
**Planning Status:** COMPLETE (Opus Stage-1 SOUND + Governor accepted the design 2026-07-20; implementation authorized — Phase 2 prompt shipped, Phase 1 mechanical gate is the next build) | **depth_level:** L1 | **Position in schema:** T-SYS, intake/purification layer (sibling to ARCH-00399)
**tags:** [intake, purification, provenance, de-pollution, two-stage, external-input, mandatory]
**Goal:** Formalize a TWO-STAGE external-input intake gate — Stage 1 (branding/scaffolding de-pollution, done OUTSIDE
CISEM by an external AI, provenance-stamped on the way in) and Stage 2 (conflict-with-CISEM alignment, done INSIDE
CISEM by PAE, ARCH-00399) — so external content is de-branded BEFORE it enters and axiom/ruling-conflict-checked
WITH full internal context, with NO external content admitted without proof it passed Stage 1. Measurable: the
RAW-EXTERNAL intake schema (ARCH-00011 §3.5) carries a `depollution_source:`/`depollution_pass:` stamp, the
`[RAW-PAIR]` check is SPEC'D to require it (built as a follow-on), a fixed reusable Stage-1 prompt is specified
verbatim, and ARCH-00399 (PAE) is reframed to explicitly name itself as Stage 2 only.
**Governing corespine:** CS-THRESHOLD-001 (intake layer — mirrors ARCH-00399's own Governing corespine; this plan
enhances the SAME intake arm, not a new one)
**CAL reference (CISEM-ARCH-00390):** pre-commit `[ZF]`+`[DOD]`+`[ROUTING]`/`[ALIGN]`/`[TAG-STATUS]`+`[RAW-PAIR]`
run on this plan file at commit time; the extended `[RAW-PAIR]` check (Phase 1, follow-on) becomes new `[ZF]`
surface once built — no new hook, no new trigger point.
**Independent Verifier:** `cisem-opus-pe` (cold default-refute pass, author≠verifier per P5) — this plan is
Sonnet-drafted per Opus's fully-specified dispatch; Opus verifies as a fresh read, not a rubber-stamp of its own brief.
**Size-gate exception (§3.6, documented, mirrors ARCH-00403/00404's precedent):** this file exceeds 200 lines —
it must carry ALL of ARCH-00401's mandatory §2 sections PLUS 3 phases (kernel/artifact/reframe) PLUS the verbatim
Stage-1 prompt text Opus required inline. Splitting one atomic 3-phase design mid-definition would fragment the
SSOT it strengthens — kept whole, exception disclosed here rather than silently exceeding.

**Existing-First (§3.2b, done before drafting anything):**
1. `dna/protocols/CISEM-ARCH-00399-purification-alignment-engine.md` (PAE) — the existing 6-lens external-input
   absorber (PROVISIONAL-ACTIVE). It already runs ALL SIX lenses (UX/UI/Architecture/Security/Vocabulary/Axiom)
   as ONE undifferentiated pass. **Gap found:** it does not name that branding-strip and conflict-check are two
   DIFFERENT kinds of work needing two different fixers (external vs internal) — this plan is the enhancement
   that names that split explicitly; PAE stays the SSOT for Stage 2, not forked.
2. `dna/protocols/CISEM-ARCH-00011-naming-numbering-policy.md` §3.5 — the existing RAW↔PURIFIED intake schema
   (mandatory PAIR + `source:`/`trust_tier:` fields, Governor decree 2026-07-19). **Gap found:** no field records
   WHETHER/WHERE external de-pollution (Stage 1) already happened before intake — this plan adds that field to
   the SAME schema, not a parallel one.
3. `dna/checks/plan-audit.sh` `[RAW-PAIR]` check (read in full, lines 285-307) — already mechanically enforces
   `source:`+`trust_tier:` presence on every `RAW-EXTERNAL` file. **Gap found:** it does not check for a
   de-pollution provenance stamp — this plan PROPOSES extending the SAME check (not a new check), built as a
   follow-on (Core Seed 1: no check is built in this drafting task).
4. `dna/archive/archive-ledger.yaml` — grepped for any prior ruling on intake/purification staging: none found;
   DEC-0006 (total-order precedence, RULED-OUT-TEMPORARY) is unrelated to intake, not implicated here.
5. `dna/ibd/IBD-0008` (import-saturation buffer, untrusted-input core seed) — already an inherited_constraint of
   PAE; this plan does not touch IBD-0008, only cites it by reference (same as PAE does).
6. `dna/ssot-registry.yaml` — no `concepts.` entry for "intake staging" or "de-pollution provenance"; nearest
   neighbor is `intake_routing` (`dna/queue/README.md`, a DIFFERENT concern — build-prompt/park routing, not
   external-content purification). Genuine gap, not a duplication.
**VERDICT:** nothing new needs a home. This plan is a PROPOSED ENHANCEMENT of two existing SSOTs (ARCH-00011 §3.5
schema, ARCH-00399 doctrine) plus a proposed extension of one existing mechanical check (`[RAW-PAIR]`) — no new
corespine, no new check, no new protocol file. The only new artifact from THIS drafting task is this plan document.

## Pocket Declaration
- **reasoning_scope:** specify the two-stage design (provenance schema field + a reusable Stage-1 prompt spec +
  PAE reframed as explicitly-Stage-2) as a PLAN ONLY — produce this document, nothing else
- **inherited_constraints:** A1–A9; D1–D6; I19/I10 (enhance ARCH-00399/ARCH-00011, never fork); I25 (a plan
  authorizes, does not implement); §1.7 git-race discipline; the 3 Core Seeds below (Opus-authored, immutable)
- **output_contract:** this plan document only — `dna/checks/plan-audit.sh`, `CISEM-ARCH-00399`, `CISEM-ARCH-00011`
  are read but NOT edited by this drafting task; no `external-depollution-prompt.md` file is created
- **ai_cannot:** self-ratify; build the `[RAW-PAIR]` extension; edit PAE/ARCH-00011; create the prompt file as a
  separate artifact; stamp any Status/RATIFIED field
- **recorded_at:** 2026-07-20

## Executive Summary
External content carries TWO distinct kinds of pollution needing two different fixers: (1) **branding pollution**
— external IDs/codes/coinages/scaffolding, VISIBLE in the content, strippable by any outside AI (and stripping it
OUTSIDE also removes same-agent bias); (2) **conflict-with-CISEM** — contradicting CISEM's own axioms/rulings
(e.g. total-order precedence vs the RULED-OUT-TEMPORARY DEC-0006), NOT visible in the content itself, catchable
ONLY inside CISEM with full context. This session's DEC-0006 catch was the INTERNAL alignment gate working
correctly, not a purification failure — conflating the two kinds would have tried to fix an internal-only problem
externally, which cannot work. This plan formalizes the split into TWO STAGES, each doing only what it can: Stage 1
(external, provenance-stamped) strips branding BEFORE intake; Stage 2 (PAE, inside CISEM) conflict-checks WITH
context. The one HONEST mechanical limit: CISEM hooks cannot enforce a step that runs outside CISEM — only the
intake PROVENANCE STAMP is CISEM-enforceable; that stamp, not the external act itself, is the real gate.

## Tier-Routing Declaration (per CLAUDE.md §3.0)
- **Drafting this plan → Sonnet** (STRUCTURING tier, this session) — executing Opus's fully-specified 3-phase
  order verbatim; no design judgment exercised (the two-kinds distinction, the phase order, and the verbatim
  Stage-1 prompt text were all supplied by Opus in the dispatch).
- **Judging soundness (Stage 1) → Opus** (`cisem-opus-pe`) — cold default-refute verify pass.
- **Building the schema field + `[RAW-PAIR]` extension (post-ratification) → Sonnet** — mechanical field-add +
  check-logic extension, following this plan exactly.
- **Saving `dna/checks/external-depollution-prompt.md` (post-ratification) → Sonnet** — mechanical file-write of
  the verbatim text specified in Phase 2 below.
- **Reframing ARCH-00399's doctrine text (post-ratification) → Sonnet** — mechanical edit (add explicit
  Stage-1/Stage-2 labels to existing sections), NOT a rewrite of the 6 lenses.
- **Ratifying → Governor** (Stage 2 decree), per ARCH-00190 §3 unchanged.
- Why: mechanical/structural work (spec'ing, then later a schema field + a check extension + a doctrine label)
  is Sonnet's lane; judgment on whether the two-kinds distinction is sound is Opus's — the §3.0 rubric applied.

## Anti-Scatter Ordering (CLAUDE.md §2 Principle 16) — CoreSpiral kernel-first
**PHASE 1 — the KERNEL (the mechanical gate; everything else depends on this existing first):**
add the provenance stamp fields to the ONE schema home (ARCH-00011 §3.5) + spec the `[RAW-PAIR]` extension.
**PHASE 2 — the STAGE-1 ARTIFACT (depends on Phase 1 naming what the stamp certifies):**
spec the fixed, reusable external de-pollution prompt the stamp's `depollution_source:` field points to.
**PHASE 3 — STAGE-2 REFRAME (depends on Phase 1+2 existing to reference; lowest urgency — doctrine labeling, not
new mechanism):** reframe ARCH-00399 (PAE) to explicitly name itself Stage 2 and cite Stage 1 by reference.
No peripheral items are parked — this plan's scope is exactly these 3 phases, per Opus's dispatch (Core Seed 1).

## The Rule — 3 phases, each verified before the next (verbatim Opus design)

### PHASE 1 (KERNEL — the mechanical gate)
Add a de-pollution PROVENANCE stamp to the RAW-EXTERNAL intake schema (ARCH-00011 §3.5, the ONE existing home):
- **`depollution_source:`** — which external project/model performed Stage 1 (e.g. "claude.ai project X",
  "Gemini project Y").
- **`depollution_pass:`** — `yes` + a date, or absent if Stage 1 has not yet run.
EXTEND the `plan-audit.sh` `[RAW-PAIR]` check (which already requires `source:`+`trust_tier:` on every
`RAW-EXTERNAL` file, lines 285-307) to ALSO require `depollution_source:`+`depollution_pass:` — **PROPOSED here,
built as a follow-on** (same disclosed-deferral pattern as ARCH-00402's checks: spec'd in the plan that ratifies
it, built in the implementation step that follows, never smuggled into the drafting task itself).
**HONEST LIMIT (Core Seed 3):** CISEM hooks run inside this repo; they CANNOT reach into a claude.ai/Gemini
project and verify Stage 1 actually happened there. The mechanical gate is, and can only ever be, the STAMP on
intake — `[RAW-PAIR]` verifies the FIELD is present, never that the external pass was faithful. This plan does
NOT claim the external de-pollution itself is mechanically enforced — only that its declared provenance is.

### PHASE 2 (STAGE-1 ARTIFACT — the external de-pollution prompt)
Save a FIXED, reusable prompt at `dna/checks/external-depollution-prompt.md` (a follow-on file, NOT created by
this drafting task — Core Seed 1) that the Governor pastes into a claude.ai/Gemini project. Its job: strip
external IDs/codes/coinages/scaffolding, flag coined terms + give plain-industry equivalents, preserve each
principle's meaning, output neutral essence + a "stripped" list; do NOT judge/recommend/reference any other
framework — neutralize only. **Verbatim text (the artifact to save, unchanged, when built):**
> "You are a neutral content de-brander. You will receive a document from an external platform. Your ONLY job:
> strip everything platform-specific and return the transferable essence as generic principles. Specifically:
> (1) remove all internal IDs/codes (doc-numbers, PI-/CC-/SK-/session-IDs, version tags); (2) replace platform
> product/feature names with plain descriptions; (3) flag every coined term and give its plain-industry
> equivalent; (4) preserve each underlying principle's meaning exactly; (5) output a clean bulleted essence + a
> 'stripped' list of what you removed. Do NOT judge quality, do NOT recommend adoption, do NOT reference any
> other framework, do NOT add anything. Neutralize only."
This prompt's OUTPUT is what gets captured as the `-RAW.md` file's content going forward (already de-branded);
its role is recorded via `depollution_source:` on that same `-RAW.md` file (Phase 1's field).

### PHASE 3 (STAGE-2 — internal alignment, reframe PAE)
Reframe `CISEM-ARCH-00399` (PAE) — a follow-on doctrine-text edit, NOT built by this drafting task (Core Seed 1)
— to explicitly state it is TWO-STAGE:
- **Stage 1 = external de-pollution** (now OUTSIDE CISEM, per Phase 2 above, provenance-stamped per Phase 1).
- **Stage 2 = internal alignment** (PAE's existing 6 lenses + Existing-First + a CONFLICT-CHECK against CISEM's
  own axioms + the DEC-archive — the step that catches DEC-0006-type conflicts, which by definition are
  INVISIBLE to any outside reviewer since they depend on CISEM's own prior rulings, not on the content itself).
PAE stays the SSOT for Stage 2 (reference-not-copy, I10) — this plan enhances it with an explicit stage-label,
it does not fork or duplicate its 6-lens procedure.

## Per-File Alignment Table (per ARCH-00401 Enhancement 3)
| File | ID / Number | Schema Placement (SCHEMA-00001) | Tag (VOC-00001) | Status (VOC-00002) |
|---|---|---|---|---|
| `dna/planning/CISEM-ARCH-00405-two-stage-intake-gate.md` (this file) | CISEM-ARCH-00405 (naming-registry.yaml ARCH next_seq already at 406 with a pre-registered comment naming this exact title — VERIFIED, NOT re-bumped) | T-SYS, intake/purification layer | intake, purification, provenance, two-stage | Status: DRAFT / Planning Status: AWAITING-BUILDER-REVIEW |
| `dna/protocols/CISEM-ARCH-00399-purification-alignment-engine.md` (Phase 3 target — reframe, follow-on, NOT edited now) | CISEM-ARCH-00399 (existing, unchanged number) | T-SYS, protocol layer, intake/import-saturation arm | intake, purification, alignment, security | unchanged by this plan; Stage-1/Stage-2 labeling is the follow-on edit |
| `dna/protocols/CISEM-ARCH-00011-naming-numbering-policy.md` §3.5 (Phase 1 target — schema field add, follow-on, NOT edited now) | CISEM-ARCH-00011 (existing, unchanged number; root_authority node) | T-SYS, protocol layer | naming, numbering, protocol, mandatory | unchanged by this plan; `depollution_source:`/`depollution_pass:` fields are the follow-on edit |
| `dna/checks/plan-audit.sh` (Phase 1 target — `[RAW-PAIR]` extension, follow-on, NOT edited now) | no ID — check artifact, governed by ARCH-00320 §6 | T-SYS, enforcement/CAL layer | check, gate, mandatory, raw-pair | unchanged by this plan; the extended require-check is the follow-on edit |
| `dna/checks/external-depollution-prompt.md` (Phase 2 target — NEW artifact, follow-on, NOT created now) | no ID — check/prompt artifact, parallels `definition-of-done.md`, governed by CS-THRESHOLD-001/CS-CREATION-001 | T-SYS, intake/purification layer | intake, prompt, external, stage-1 | follow-on (created upon ratification, verbatim text supplied in Phase 2 above) |

## What DOES change (upon ratification — implementation is a LATER, separate step; NOTHING here executes now)
- `dna/protocols/CISEM-ARCH-00011-naming-numbering-policy.md` §3.5 — gains 2 new fields (`depollution_source:`,
  `depollution_pass:`) on the RAW-EXTERNAL intake schema.
- `dna/checks/plan-audit.sh` `[RAW-PAIR]` — gains 2 new required-field checks (WARN-only, mirroring the existing
  `source:`/`trust_tier:` checks in the same block).
- `dna/checks/external-depollution-prompt.md` — created, containing the verbatim Phase 2 prompt text.
- `dna/protocols/CISEM-ARCH-00399-purification-alignment-engine.md` — gains explicit Stage-1/Stage-2 labels on
  its existing Procedure/Pocket-Declaration sections; the 6 lenses and Mutual-Titles schema are UNCHANGED.

## What does NOT change
- PAE's 6 lenses (UX/UI/Architecture/Security/Vocabulary/Axiom) and Mutual-Titles schema — untouched content,
  only a stage-label wrapper.
- The `[ZF]` aggregate FORMULA in `plan-audit.sh` (`I1+I9+I6-SIZE+I16+I19+I23+I24+P3+P5`) — the `[RAW-PAIR]`
  extension stays WARN-only, same posture as today; no BLOCK-mode change.
- No new corespine, no new node TYPE, no new governed protocol file — this plan enhances 2 existing SSOTs
  (ARCH-00011, ARCH-00399) plus 1 existing check (`[RAW-PAIR]`) and specifies 1 new non-governed artifact
  (the prompt file, same class as `definition-of-done.md` — no `CISEM-{TYPE}-{SEQ}` ID).
- Nothing about WHO performs Stage 1 changes — it remains the Governor's action (pasting the prompt into an
  external project); this plan does not automate or claim to automate that human act.

## Definition-of-Done reference
Per `dna/checks/definition-of-done.md` (cited, not re-derived): DONE for this plan's eventual implementation =
(1) both schema fields PRODUCED in ARCH-00011 §3.5; (2) `[RAW-PAIR]` extension WIRED + verified by a planted test
(a `RAW-EXTERNAL` file missing the new fields → flagged; one carrying them → clean); (3) the prompt file
PROPAGATED (created, verbatim text matches Phase 2 exactly); (4) ARCH-00399 PROPAGATED (Stage-1/Stage-2 labels
added, 6-lens content unchanged, verified by diff); (5) committed + pushed (0 unpushed); (6) Opus-independently-
verified — OR an honest `NOT-YET-WIRED:<reason>` tag per surface if any piece is incomplete. "Produced" (fields
added, nothing enforcing them) alone is never "done."

## Propagation Declaration
The provenance schema lives ONCE, in `CISEM-ARCH-00011 §3.5` (the SSOT, same file that already holds the
RAW↔PURIFIED pair rule + the `source:`/`trust_tier:` fields — this plan adds 2 sibling fields to the SAME
section, not a new section elsewhere). The `[RAW-PAIR]` check in `plan-audit.sh` READS that field convention (by
matching the exact field names `depollution_source:`/`depollution_pass:` in RAW file headers, same mechanism it
already uses for `source:`/`trust_tier:`) — it does not copy the schema's documentation text, only enforces
conformance to it (A8, one definition, one enforcer). ARCH-00399 (PAE) references the stamp BY FIELD NAME when
citing Stage 1 — it does not re-define what the fields mean. No generated view needs to regenerate (no HTML page
mirrors intake-schema internals today).

## Dependencies (blocks-on / unblocks-for)
- **Blocks-on:** none — ARCH-00011 §3.5 (RATIFIED, root_authority), ARCH-00399 (PROVISIONAL-ACTIVE), and the
  `[RAW-PAIR]` check (live, WARN-only) all already exist and are stable; this plan is purely additive to them.
- **Unblocks-for:** every future external-review intake round (the R1–R6 IBD-00xx pattern already in use) gains
  a formal, provenance-stamped Stage-1 step instead of an ad-hoc one; strengthens the Vocabulary/Axiom lenses'
  anti-virus posture (CLAUDE.md A8/I19) by making "was this de-branded before intake?" a queryable field, not an
  assumed fact.
- **Follow-on (explicitly NOT built here, disclosed per I2/I22):** the schema-field edit, the `[RAW-PAIR]`
  extension, the prompt file, and the PAE reframe — all four are Phase 1/2/3 IMPLEMENTATION steps, deferred to
  after Governor Stage-2 ratification (Core Seed 1).

## Ratification Path
Stage 0 (iterative draft-review loop, per ARCH-00190 §3 Stage 0) — this drafting task delivers v0.1 directly to
Stage 1 per Opus's dispatch (the two-kinds-of-pollution distinction and the verbatim prompt were fully specified
by Opus, minimizing Stage-0 material-finding risk; P5's author≠verifier minimum is still met: Sonnet drafts,
Opus verifies) → Stage 1 (Opus soundness, `cisem-opus-pe`) → Stage 2 (Governor decree). Planning Status
transitions per ARCH-00190 §1 unchanged.

## Self-Compliance (against ARCH-00230 checklist + ARCH-00190 §2)
✓ Header (ID/Type/Status/Planning-Status/depth_level/tags/goal/corespine/pocket) ✓ Tier-Routing Declaration
✓ Anti-Scatter Ordering ✓ Per-File Alignment Table ✓ What DOES / does NOT change ✓ Definition-of-Done reference
✓ Propagation Declaration ✓ Dependencies ✓ Ratification Path ✓ Independent Verifier named ✓ Existing-First stated
✓ Path Rejection Declaration ✓ CAL reference ✓ Change log

## Path Rejection Declaration (CLAUDE.md §2.8)
- ❌ Rejected: building the schema field, the `[RAW-PAIR]` extension, the prompt file, or editing PAE in this
  same drafting task — A4/I25 requires ratification BEFORE implementation; this artifact is the PLAN, not the
  edit (Core Seed 1).
- ❌ Rejected: claiming the external de-pollution ACT itself is mechanically enforced — CISEM hooks cannot run
  inside an external claude.ai/Gemini project; only the intake provenance STAMP is CISEM-enforceable, and that
  honest limit is stated explicitly rather than implied away (Core Seed 3 / I23 EXISTS≠ACTIVE).
- ❌ Rejected: merging Stage 1 and Stage 2 into one undifferentiated pass — the whole point is that branding
  pollution is external-strippable while conflict-with-CISEM is internal-only-catchable; collapsing them back
  into PAE's current single-pass form would re-lose the distinction this plan exists to formalize (Core Seed 2).
- ❌ Rejected: creating a new corespine, protocol, or check for this — it enhances 2 existing SSOTs
  (ARCH-00011 §3.5, ARCH-00399) and 1 existing check (`[RAW-PAIR]`), per Existing-First; no fork (I10/I19).
- ❌ Rejected: treating this session's DEC-0006 catch as evidence Stage-1 purification failed — it is evidence
  Stage-2 internal alignment WORKED; conflating the two would misdiagnose which stage needs strengthening.

## Change log
- v0.1 — 2026-07-20 (Sonnet, STRUCTURING tier, dispatched by Opus): initial draft. 3-phase kernel-first design
  (provenance stamp → Stage-1 prompt spec → PAE reframe), the two-kinds-of-pollution distinction carried
  verbatim from Opus's dispatch, the verbatim Stage-1 prompt text embedded in Phase 2, the honest mechanical
  limit (Core Seed 3) stated in Phase 1 and the Path Rejection. Existing-First, Tier-Routing, Anti-Scatter
  Ordering, Per-File Alignment Table, DoD + Propagation references populated per Core Seeds 1–3. NOT committed
  by Sonnet (Opus commits after judging, per dispatch instructions).
