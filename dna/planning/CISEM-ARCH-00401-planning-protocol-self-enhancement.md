# Planning Protocol Self-Enhancement — DOGFOOD TRIAL Plan
**Node ID:** CISEM-ARCH-00401 | **Type:** ARCH | **Status:** PROVISIONAL-ACTIVE
**Planning Status:** COMPLETE (Governor **RATIFIED 2026-07-20** — Stage 2 decree; implementation authorized) | **depth_level:** L1
**tags:** [planning-domain, protocol, mandatory, gate, propagation, orchestration, review-required, checklist]
**MISSING-TERM FLAG (§4):** no VOC-00001 tag exists yet for "self-enhancement" or "tier-routing-declaration" —
flagging rather than inventing (CLAUDE.md §4). Candidate additions for Governor: `self-enhancement`, `tier-routing`.
**Goal:** Enhance CISEM-ARCH-00190 (the plan protocol) with 12 ordered improvements — Tier-Routing Declaration,
mandatory tags+statuses on every created node, a Per-File Alignment Table, a filled Independent Verifier, DoD
integration, Propagation Declaration, two-model Stage-0 verify, fable Stage-1.5, Synergetic Decision hook,
anti-scatter ordering, A9/context-carrier soundness criteria, and its own header/changelog contradiction fixed —
measurable as: every future plan created after ratification contains all 12 items where applicable, verified by
a `plan-audit.sh` extension (routed as a follow-on, not built in this plan — see §Dependencies).
**Governing corespine:** CS-CREATION-001 | **CAL reference (ARCH-00390):** pre-commit `[ZF]` + `[DOD]` on this
plan's own files; the 12 enhancements themselves become future `[ZF]`/`[EDGE]` surface once ARCH-00190 is edited.
**Independent Verifier:** `cisem-opus-pe`, cold default-refute pass — differs from implementer (this plan is
Sonnet-authored per Opus's dispatched instructions; Opus is both the dispatcher AND the verifying tier, but the
VERIFY PASS runs as a fresh cold read, not a rubber-stamp of its own dispatch — satisfies P5's author≠verifier intent).

**Existing-First (§3.2b, done):** Searched `dna/ssot-registry.yaml` (`concepts.` has no `plan_creation` entry
besides pointing to ARCH-00190 implicitly via `validation_protocol`/other rows — no parallel plan-protocol home
found) → `dna/naming-manifest.yaml` + `dna/corespines/corespine-registry.yaml` (CS-CREATION-001 RATIFIED, governs
this; no competing plan-protocol corespine) → `dna/archive/archive-ledger.yaml` (DEC-0001..0006 — none rule out a
plan-protocol enhancement) → grepped repo for `ARCH-00401`/`planning-protocol-self-enhancement` (0 hits, confirmed
via naming-registry.yaml comment which already pre-reserves 00401 for this exact title). **VERDICT: ARCH-00190 IS
the existing home. This plan ENHANCES it by-reference (12 insertion points, no fork) — no new protocol node.**

## Pocket Declaration
- **reasoning_scope:** sequence 12 Opus-specified enhancements to ARCH-00190, each with insertion §, ordered
  infrastructure-first; produce this plan artifact only (implementation is a LATER, separately-tracked step)
- **inherited_constraints:** A1–A9; D1–D6; I7 (no truth-fields); I10/I19 (enhance, never fork); I25 (a plan
  authorizes, does not itself implement); §1.7 git-race discipline (stage specific files only)
- **output_contract:** this plan document only — ARCH-00190 itself is NOT edited by this drafting task
- **ai_cannot:** self-ratify; stamp ARCH-00190's Status/changelog; write CS-CREATION-001 truth fields
- **recorded_at:** 2026-07-20

## Executive Summary
CISEM is dogfooding its own plan pipeline: the FIRST trial plan through the process enhances the plan PROCESS
itself (ARCH-00190), so every future creation inherits the improvements, and the trial surfaces friction in
PLANNING itself (dual purpose, Governor-decreed). This plan enhances ARCH-00190 in 12 ordered steps — Tier 1
infrastructure first (routing, tags/statuses, alignment table, verifier) so Tiers 2–3 and every downstream plan
inherit them; nothing is implemented yet — ratification (Stage 0→1→1.5→2) authorizes a LATER edit pass on ARCH-00190.

## Tier-Routing Declaration (per CLAUDE.md §3.0 — mandatory, Enhancement 1 dogfooded on itself)
- **Drafting this plan → Sonnet** (STRUCTURING tier, this session) — executing Opus's fully-specified 12-step
  order verbatim; no design judgment exercised, Opus already made every architectural call.
- **Judging soundness (Stage 1) → Opus (cisem-opus-pe)** — cold default-refute verify pass, differs from drafter's
  context (fresh read, not the same turn that dispatched the task).
- **Fable Stage 1.5 mentor pass → NOT triggered by this plan** — Enhancement 8 requires human ratification to
  activate + a token-estimate; this plan only PROPOSES the gate, does not invoke it for itself.
- **Governor Stage 2 → ratification authority**, per ARCH-00190 §3 unchanged.
- Why this routing: mechanical/structural work (drafting a spec'd plan) = Sonnet's lane; judgment/soundness/truth
  = Opus's; this is the §3.0 rubric applied to the plan's OWN creation, not just its content.

## The Rule — 12 ordered enhancements (infrastructure-first, VERBATIM Opus order; each: improvement / insertion / kind)
**TIER 1 — INFRASTRUCTURE (inherited by every downstream step + all future plans):**
1. **Tier-Routing Declaration mandatory in every plan** (which steps → Haiku/Sonnet/Opus/fable + why).
   Insertion: ARCH-00190 §2 (plan-contents checklist) + §4 (implementation protocol). **[NEW-CLAUSE]**
2. **Tags + statuses on EVERY node a plan creates** (not just the plan header) — undebatable per VOC-00001/00002.
   Insertion: ARCH-00190 §2. **[STRENGTHENED]** (§2 already lists a header checklist; extends it to every child node)
3. **Per-File Alignment Table** — for EVERY file created/modified: name · number (via the ONE naming-registry
   gate) · schema placement (SCHEMA-00001) · tag (VOC-00001) + status (VOC-00002). The only mechanical guarantee
   of schema+vocab+naming alignment. Insertion: ARCH-00190 §2. **[NEW-CLAUSE]**
4. **Independent Verifier field mandatory + filled** (cold verify-seam, default-refute — fixes ARCH-00190's OWN
   currently-empty grandfathered field, line 17: "pre-P5 legacy — assign on next revision"). Insertion: ARCH-00190
   header + §3 Stage 1. **[STRENGTHENED]**

**TIER 2 — builds on Tier 1:**
5. **Definition-of-Done integration** (reference `dna/checks/definition-of-done.md`; verified at §4 implementation
   gate, not re-derived). Insertion: ARCH-00190 §2 + §4. **[NEW-CLAUSE]**
6. **Propagation Declaration** — any nuance/rule change states how it reaches ALL surfaces BY-REFERENCE (never
   copy) + which generated views regenerate. Insertion: ARCH-00190 §2. **[NEW-CLAUSE]**
7. **Two-model verify + NEW-DRIFT-vs-ALREADY-RESOLVED classifier** folded into the Stage-0 iterative loop (per
   persona-collaborator.md `## DEVELOPMENT DISCIPLINE` two-orthogonal-lenses rule). Insertion: ARCH-00190 §3
   Stage 0. **[STRENGTHENED]**

**TIER 3 — refinement:**
8. **Fable Stage 1.5 mentor gate** — AFTER Opus has prepared with Haiku+Sonnet+best insights, a final
   root-principle/permanence pass. REQUIRES human ratification to activate + a token-consumption estimate stated
   in the request; never solo. Insertion: ARCH-00190 §3, new Stage 1.5 (between current Stage 1 and Stage 2).
   **[NEW-CLAUSE]**
9. **Synergetic Decision Protocol hook** for any polarity/conflict decision inside a plan (assess → polarities →
   edge-options → synergy-question; threshold-gated per CS-THRESHOLD-001). Insertion: ARCH-00190 §3 Stage 0.
   **[NEW-CLAUSE]**
10. **Anti-scatter significance-ranking + explicit completion/infrastructure-first ORDERING requirement** for a
    plan's OWN steps (CLAUDE.md §2 Principle 16, dogfooded by this very plan's Tier 1→2→3 structure). Insertion:
    ARCH-00190 §2. **[NEW-CLAUSE]**
11. **Node-as-context-carrier + A9 optimal-synergy** added to §3 Stage 1 soundness criteria (a plan must be
    readable cold + hold complementary facets crisply, not mush them). Insertion: ARCH-00190 §3 Stage 1.
    **[STRENGTHENED]**
12. **Fix ARCH-00190's header/changelog status contradiction** (header line 2 says `Status: LIVE`; changelog v1.0
    line 191 says `Status: PROVISIONAL-ACTIVE (draft-in-use, audit-flagged until ratified)` — same document,
    two truth claims) + assign its Independent Verifier (closes item 4 concretely: line 17's placeholder).
    Insertion: ARCH-00190 header + changelog. **[STRENGTHENED]**

## Per-File Alignment Table (Enhancement 3, dogfooded on this plan's own files)
| File | ID / Number | Schema Placement (SCHEMA-00001) | Tag (VOC-00001) | Status (VOC-00002) |
|---|---|---|---|---|
| `dna/planning/CISEM-ARCH-00401-planning-protocol-self-enhancement.md` (this file) | CISEM-ARCH-00401 (via naming-registry.yaml, Opus-allocated, next_seq 401→402, VERIFIED not re-bumped) | T-SYS, planning-governance layer (same trunk as ARCH-00190) | planning-domain, protocol, mandatory | Status: PROVISIONAL-ACTIVE / Planning Status: AWAITING-BUILDER-REVIEW |
| `dna/planning/CISEM-ARCH-00190-planning-domain-protocol.md` (target of 12 edits — NOT modified by this drafting task; edits apply post-ratification) | CISEM-ARCH-00190 (existing, unchanged number) | T-SYS, planning-governance layer | planning-domain, protocol, plan-creation, double-ratification, ssot (existing, unchanged) | Status: LIVE (header) vs PROVISIONAL-ACTIVE (changelog v1.0) — **CONTRADICTION** this plan's item 12 fixes; unresolved until Planning Status=COMPLETE |
| `.claude/skills/cisem-plan/SKILL.md` (mirror, target of pointer-updates once ARCH-00190 changes) | no CISEM-{TYPE}-{SEQ} ID — skill artifact, governed by ARCH-00340 meta-protocol; mirrors ARCH-00190 per I10 (line 1: "mirrors ARCH-00190") | T-SYS, AI-Team/skills layer (CS-AI-PROFILING-001) | protocol, mandatory (inherited from mirrored source) | unchanged by this plan; edits deferred to implementation phase |
| `dna/checks/plan-audit.sh` (target of a NEW check for items 1–3, not built here — see Dependencies) | no CISEM-{TYPE}-{SEQ} ID — executable script, governed by ARCH-00320 §6 | T-SYS, enforcement/CAL layer | gate, audit, mandatory | unchanged by this plan; new check is a follow-on build, out of THIS plan's scope (disclosed below) |
| `dna/naming-registry.yaml` (already modified by Opus — ARCH next_seq 401→402, comment pre-registers this title) | REG type, self-exempt (next_seq: 1, unassigned per file header) | T-SYS, naming-allocation layer | naming, numbering, mandatory | present, unchanged status (registry has no lifecycle Status field; VERIFIED via read, not re-bumped) |

## What DOES change (upon ratification — implementation is a LATER, separate step; NOTHING here executes now)
- `dna/planning/CISEM-ARCH-00190-planning-domain-protocol.md` — 12 insertion points listed above.
- `.claude/skills/cisem-plan/SKILL.md` — mirror update reflecting the new §2/§3 structure (I10, no divergence).
- `dna/checks/plan-audit.sh` — a follow-on build (new plan, NOT this one) to check items 1–3 mechanically.

## What does NOT change
- ARCH-00190's double-ratification GATE STRUCTURE (Stage 0→1→2) — only gains Stage 1.5 as an OPTIONAL,
  human-ratification-gated insertion; the mandatory path stays Stage 0→1→2.
- No new protocol/wizard/corespine node is created (Core Seed 1). CS-CREATION-001 apex/CS-MASTER-VALIDATION-001
  root_authority relationship is untouched. No truth-bearing field on any existing node is touched by this plan.

## Propagation Declaration (Enhancement 6, dogfooded on this plan)
This plan changes a PROCESS rule (ARCH-00190). On implementation it propagates to ALL surfaces BY-REFERENCE, never by copy: (1) `.claude/skills/cisem-plan/SKILL.md` mirrors ARCH-00190 (I10) — updated as a pointer-mirror, not a fork; (2) `plan-audit.sh` gains the `[ROUTING]`/`[TAG-STATUS]`/`[ALIGN]` checks (follow-on) so every future plan is CHECKED, not merely documented; (3) the agent files reference ARCH-00190 by-path already — reference-not-copy holds, no edit needed; (4) generated views (HTML plan pages, Sonnet/Haiku tab-bootstrap blocks) regenerate from the registries. No nuance is copied inline into a second home (the §2.4/§1.6 drift class is avoided by construction).

## Dependencies (blocks-on / unblocks-for)
- **Blocks-on:** nothing — ARCH-00190 is LIVE/RATIFIED, free to amend via a ratified plan (A4/I25 satisfied by
  this plan itself once ratified).
- **Unblocks-for:** the pending agent-layer plan (queued, not yet drafted) and the Questions corespine candidate
  (IBD-0009 registered candidate) — both were waiting for a settled plan-contents checklist before they could
  cite it; this plan's Tier-1 items (routing declaration, alignment table) are exactly what those two need.
- **Follow-on (explicitly NOT built here, disclosed per I2/I22):** the `plan-audit.sh` mechanical check for items
  1–3 (Tier-Routing Declaration presence, per-node tags/statuses, Per-File Alignment Table completeness) is a
  SEPARATE build — this plan only specifies WHAT the checklist requires; wiring the check is future work.

## Ratification Path
Stage 0 (iterative Haiku→Sonnet→Opus draft-review loop, per ARCH-00190 §3 as it exists TODAY — this plan cannot
invoke its OWN not-yet-ratified Stage 1.5) → Stage 1 (Opus soundness, cold default-refute, cisem-opus-pe) →
Stage 1.5 (fable mentor pass — SKIPPED for this plan; not yet ratified into ARCH-00190, and even once ratified
requires separate human activation + token estimate per Enhancement 8's own text) → Stage 2 (Governor decree).
Planning Status transitions per ARCH-00190 §1 unchanged.

## Self-Compliance (against ARCH-00230 checklist)
✓ Header (ID/Type/Status/Planning-Status/depth_level/tags/goal/corespine/pocket) ✓ Why-standalone (dogfood trial,
enhances the SSOT process document, self-contained) ✓ Rule-as-procedure (12 numbered steps, insertion+kind each)
✓ Does-NOT-cover (stated above) ✓ Independent Verifier named (cisem-opus-pe, cold pass) ✓ Existing-First stated
✓ Per-File Alignment Table present (Enhancement 3 dogfooded on itself, per Core Seed 3).

## Path Rejection Declaration (CLAUDE.md §2.8)
- ❌ Rejected: editing ARCH-00190 directly in this same task — A4/I25 requires ratification BEFORE implementation;
  this artifact is the PLAN, not the edit.
- ❌ Rejected: building the plan-audit.sh mechanical check for items 1–3 inside this plan — scope-creep past the
  12 specified steps; routed as an explicit follow-on (Dependencies).
- ❌ Rejected: creating a new protocol/wizard node instead of enhancing ARCH-00190 — I19/A8 forbids a fork; Core
  Seed 1 required by-reference enhancement only.
- ❌ Rejected: inventing new VOC-00001 tags ("self-enhancement", "tier-routing") to fit the header cleanly —
  flagged instead per CLAUDE.md §4 ("no invented vocabulary").

## CAL reference (CISEM-ARCH-00390)
Pre-commit `[ZF]` + `[DOD]` run on this plan file itself at commit time (I6-SIZE, I9 unregistered-ID, P5
independent-verifier-named checks apply now). The 12 enhancements, once ARCH-00190 is edited, become new
`[ZF]`/`[EDGE]` surface for FUTURE plans — that wiring is the disclosed follow-on above, not retroactive to this file.

## TRIAL-OBSERVATION — frictions/gaps the PLANNING PROCESS itself surfaced (dual purpose, feeds ARCH-00190 v2)
1. **The protocol's own Independent Verifier field was empty** (`[pre-P5 legacy — grandfathered 2026-07-18;
   assign on next revision]`) — ARCH-00190 did not obey its own P5 rule for 2+ days. This is exactly the kind of
   drift Enhancement 4 exists to close; observing it while drafting THIS plan is the trial's dual-purpose payoff.
2. **The header/changelog status contradiction (item 12)** was only caught by reading the WHOLE file for this
   plan, not by any automated check — `plan-audit.sh` I16 (status contradictions) apparently did not flag it,
   suggesting I16's field-vs-field pattern may not yet cover header-line-2 vs changelog-prose-line contradictions.
   Flagged as a candidate I16 refinement (not fixed here — out of this plan's scope).
3. **Sizing pressure was real**: fitting 12 enhancements + a Per-File Alignment Table + Trial-Observation under
   the 200-line §3.6 gate required terse per-item prose (1–4 lines each) rather than the fuller treatment each
   deserves — a genuine tension between §3.6 (size discipline) and I2/completeness (each item's full "why").
   Resolved by keeping insertion-point + kind crisp here and trusting Stage-0 iteration to expand any item Opus
   flags as under-specified, rather than pre-bloating all 12 defensively.
4. **The Existing-First search for "does a plan-protocol already exist" required cross-referencing FOUR sources**
   (ssot-registry, naming-manifest, corespine-registry, archive) plus a live grep — none alone was sufficient to
   confirm "no fork." This validates why Core Seed 3 demands the search be STATED, not assumed: a single-source
   check would have missed that naming-registry.yaml's OWN comment already pre-confirmed the non-duplication.
5. **Cold-independent verify vs inline-Opus-judge has no stated threshold** (Opus, Stage 1). Stage 1 here ran as INLINE Opus judgment — author=Sonnet ≠ verifier=Opus, so P5's author≠verifier minimum is met — NOT a separate cold `cisem-opus-pe` agent. HIGH-BLAST changes warrant a separate cold agent; this draft (Governor Stage 2 is the real gate) is cost-appropriate inline. ARCH-00190 should THRESHOLD-GATE the cold-agent verify (CS-THRESHOLD), not mandate it unconditionally — else every trivial plan burns an Opus agent. Feeds v2.
6. **Enforcement-deferral is a documentation-as-progress risk** (Opus, Stage 1). Items 1–3 add REQUIREMENTS to ARCH-00190 but defer their mechanical check to a follow-on — until it ships they are DOCUMENTED, not WIRED (the exact bias CISEM guards against). RESOLUTION: the `plan-audit.sh` check MUST be the NEXT plan after this ratifies, not "someday". Logged so it cannot silently slip.
7. **ZF-convergence (loop-until-dry) is missing everywhere except the plan-review loop** (Opus, from Governor's live challenge 2026-07-20). ZF-as-a-GATE runs at commit (`plan-audit [ZF]`) and is referenced in agents/skills; the Stage-0 loop DOES iterate to CONVERGED. BUT extraction/harvesting (ARCH-00370) and general agent/skill enumeration do ONE pass — the principle "passes are almost always partial, so continue until all is found" is NOT wired there. ROUTE (companion, near-term): a **ZF-CONVERGENCE standing rule** into every agent/skill (loop until a full pass finds nothing new, OR cap K + disclose residuals) via the propagation mechanism (existing + future), and into ARCH-00370 harvest. The trial surfacing a UNIVERSAL principle is the dogfood working.

## Change log
- v0.1 — 2026-07-20 (Sonnet, STRUCTURING tier, dispatched by Opus): initial draft. 12-step enhancement plan
  drafted verbatim to Opus's specified order/insertion-points; Per-File Alignment Table + TRIAL-OBSERVATION
  populated per Core Seeds 2–4. NOT committed by Sonnet (Opus commits after judging, per dispatch instructions).
- v0.2 — 2026-07-20 (Opus cisem-opus-pe, JUDGE tier): Stage-1 soundness verdict = **SOUND-FOR-TRIAL**. Folded 2
  refinements — titled Propagation Declaration (closes Seed 2 partial) + trial-observations 5–6 (cold-verify
  threshold, enforcement-deferral risk). Planning Status → CONSENSUS-REACHED. Awaiting Governor Stage 2 decree.
