---
Node_ID: CISEM-ARCH-00415
Type: ARCH
Status: SUPERSEDED
Planning_Status: SUPERSEDED — RETRACTED 2026-07-23: built on a stale premise (the wizard ARCH-00394 I25 debt was ALREADY closed by ARCH-00395, RATIFIED 2026-07-18, which explicitly covered ARCH-00393 + ARCH-00394). Not for ratification. Retained as audit trail of the dispatch-premise-staleness episode (RI-0023). The process-comparison insight (wizard execution vs ARCH-00190) survives here as a finding only, not as a governed plan.
depth_level: L2
tags: [planning-domain, retro-plan, i25, learning-comparison, arch-00190, arch-00394, corespine-wizard]
---

# Corespine Wizard (ARCH-00394) I25 Retro-Plan — Learning Comparison to ARCH-00190
**CISEM-ARCH-00415** | ARCH | **Status: DRAFT** | **Planning Status: AWAITING-BUILDER-REVIEW**

**Goal:** Retroactively plan-back the Corespine Creation Wizard (CISEM-ARCH-00394, `dna/protocols/CISEM-ARCH-00394-corespine-creation-wizard.md`) by producing a structured LEARNING COMPARISON between what the wizard actually did (its real STEP 0–6 execution trace across the sessions that built and ran it) and what the ratified plan-protocol (CISEM-ARCH-00190) prescribes for "how a DRAFT becomes a PLAN" — extracting where the two aligned, where they diverged, and what that divergence teaches CISEM about its own creation discipline. This closes the I25 process-learning gap that the prior formal ratification (ARCH-00395) did not address.

**Governing corespine:** CS-CREATION-001 (creation apex; ARCH-00394 and ARCH-00190 both flow through it)
**CAL reference (CISEM-ARCH-00390):** pre-commit `[ZF]` + `[I19]` + `[TAG-STATUS]` fire on this plan file at commit time; no other CAL trigger is invoked by drafting alone (this plan does not touch code, hooks, or registries beyond its own naming-registry allocation).
**Independent Verifier:** `cisem-opus-pe` (cold default-refute pass, author≠verifier per P5 — ARCH-00401 Enh.4). This plan is authored by Sonnet (STRUCTURING tier, dispatched by Opus); Opus performs Stage 1 soundness as the named independent reviewer.

---

## Tier-Routing Declaration (CLAUDE.md §3.0 / ARCH-00401 Enh.1)
- **DRAFTING this plan → Sonnet** (STRUCTURING tier). Opus dispatched this task with explicit Core Seeds; Sonnet executes the agreed shape, does not redesign it.
- **Stage 1 soundness review → Opus** (`cisem-opus-pe`, JUDGE tier). Sonnet may not self-verify soundness (I7/CORE-SEED, no truth-bearing verdict written here).
- **Stage 2 ratification → Governor** (Yariv Fink, sole ratification authority).
- **If implementation is later authorized:** the comparison-table population (Step 2 of The Rule, below) is GATHER-class work suited to Haiku (enumerate the wizard's actual STEP 0–6 run evidence from the repo's own history — commits, quality-ledger runs, WITNESS entries) with Sonnet structuring the findings into the table; Opus judges the conclusions. This routing is declared now so implementation (if ratified) does not silently default to Opus doing gather-work (§3.0 delegation rubric).

---

## Pocket Declaration
- **reasoning_scope:** retroactive process-comparison plan for the Corespine Creation Wizard (ARCH-00394) against the ratified plan-protocol (ARCH-00190) and the meta-protocol (ARCH-00340)
- **inherited_constraints:** A1–A10; D1–D6; I7 (no truth-fields written by Sonnet); I10 (reference ARCH-00190/ARCH-00340/ARCH-00395, never re-derive or copy their content); I19 (Existing-First, stated below); I25 (this plan itself satisfies A4 for the analysis work it authorizes — no code/registry change beyond this file + the naming-registry allocation already made)
- **output_contract:** a DRAFT plan, `Status: DRAFT`, `Planning Status: AWAITING-BUILDER-REVIEW` — no ratification, no implementation
- **ai_cannot:** self-ratify; stamp SOUND/RATIFIED; alter ARCH-00394, ARCH-00395, or ARCH-00190 content; treat this plan as re-opening the already-CLOSED I25 debt for CS-FRONTEND-001/ARCH-00393/00394 (that debt is closed — see Existing-First below)
- **recorded_at:** 2026-07-22 | **cal_reference:** ARCH-00390

---

## Anti-Scatter Ordering (CLAUDE.md §2 Principle 16 / ARCH-00401 Enh.10)
Ranked by significance against the compasses (goal · DNA · active spine):
1. **CENTRAL** — state plainly, up front, that ARCH-00395 ALREADY closed the formal I25/A4 debt for ARCH-00393 + ARCH-00394 (RATIFIED, Planning Status COMPLETE, quality-ledger run 18). This plan does NOT reopen or duplicate that ratification.
2. **CENTRAL** — the distinct, NEW deliverable: a structured comparison table (wizard's actual execution vs. ARCH-00190's prescribed stages), producing named alignment points + named divergences.
3. **CENTRAL** — each divergence is routed as a RIPL/root-insight candidate (CLAUDE.md Principle 17 prevention-first), not left as observation-only.
4. **PERIPHERAL (parked, not chased)** — whether ARCH-00394's §IV manifest template needs a formal amendment for the no-parent-apex `Core_spine` convention (already flagged as an open follow-up in ARCH-00394's own change log, 2026-07-18 entry) is OUT of this plan's scope; noted, not solved here.
5. **PERIPHERAL (parked)** — any broader "should ARCH-00190 itself gain a wizard-specific fast-path" architectural question is out of scope; this plan only compares, it does not amend ARCH-00190.

---

## Executive Summary
CS-FRONTEND-001 (ARCH-00393) and the Corespine Creation Wizard (ARCH-00394) were built on 2026-07-18 under a direct Governor order, without a wizard-produced PLAN artifact preceding them (an I25/A4 violation, since A4/I25 require a ratified plan before governed creation). The Governor ruled "ratify-with-retro-plan," and ARCH-00395 (`dna/planning/CISEM-ARCH-00395-frontend-corespine-retro-plan.md`) already executed that ruling: it is RATIFIED, its Planning Status is COMPLETE, and it formally closed the I25/A4 debt (quality-ledger run 18, Governor decree "accept-all-recommendations"). That formal debt is CLOSED — this plan does not reopen it.

What ARCH-00395 did NOT do is compare the wizard's actual behavior against the very plan-protocol (ARCH-00190) whose absence it was excused from. ARCH-00394 has since RUN twice on real work (STEP 0–6 dogfood run building the CS-CREATION-001 apex manifest, ARCH-00396 Phase C, run 25/26) and carries a documented STEP-by-STEP procedure of its own. ARCH-00190 independently defines a two-stage, multi-gate process for "how a DRAFT becomes a PLAN." The two documents were never held side by side. This plan performs that comparison as a LEARNING artifact: where did the wizard's actual discipline (Existing-First, naming-gate use, pocket declarations, self-audit via plan-audit.sh) align with what ARCH-00190 would have required of a plan going through Stage 0/1/2, and where did it structurally diverge (e.g., no iterative Haiku/Sonnet/Opus draft-review loop; no named Independent Verifier at plan-creation time, because there was no plan; no Governor Stage-2 gate distinct from the single retroactive decree)? The comparison is the deliverable; its output is routed as prevention/enhancement candidates (D3/D4), not as a re-litigation of the already-closed ratification.

---

## Existing-First (§3.2b, MANDATORY — files read, cited)
Searched, in order, before drafting:
1. `dna/ssot-registry.yaml` — no entry for "corespine-wizard-retro-comparison" or equivalent concept; the `creation_checklist` entry (ARCH-00230) and plan-protocol are the adjacent SSOTs, both referenced not duplicated.
2. `dna/naming-manifest.yaml` + `dna/corespines/corespine-registry.yaml` — CS-CREATION-001 confirmed RATIFIED (governs both ARCH-00394 and ARCH-00190 via `distributed_in`/`carries_doctrine`); no existing "wizard-vs-protocol comparison" node.
3. `dna/archive/archive-ledger.yaml` — grepped, no RULED-OUT entry for this concept.
4. Direct file reads (grep + full read, this session): `dna/protocols/CISEM-ARCH-00394-corespine-creation-wizard.md` (full text — STEP 0–6, YAML schema, §VI change log including the "RATIFIED — I24 satisfied: first clean end-to-end run" entry and the "STEP 0 — GOAL-SETTING added" entry); `dna/planning/CISEM-ARCH-00395-frontend-corespine-retro-plan.md` (full text — confirms RATIFIED / Planning_Status COMPLETE, D-1..D-4 defect-fix table, Governor decree citation); `dna/planning/CISEM-ARCH-00190-planning-domain-protocol.md` (full text — Planning Status Enum §1, plan structure §2, double-ratification path §3 Stage 0/1/1.5/2, implementation gate §4, wizard-mirror rule §6); `dna/protocols/CISEM-ARCH-00340-meta-protocol.md` (full text — the meta-protocol every protocol, including ARCH-00394 and ARCH-00190 themselves, must satisfy); `dna/quality-ledger.yaml` (runs 18, 25, 26 — the ratification-pass finding + the two dogfood-run findings for ARCH-00394); `dna/CISEM-WITNESS-00003-session-continuity.md` (COMPACT STATE v3/v4 — I25 debt narrative).
5. `.claude/skills/` enumerated (`find`) — confirmed there is NO skill file named "corespine wizard"; the wizard is the DECLARED-COMBINED protocol+wizard node ARCH-00394 itself (`dna/protocols/`), not a `.claude/skills/*/SKILL.md` file. The four skills present are `cisem-create`, `cisem-frontend`, `cisem-meta`, `cisem-plan` — none of which duplicate this comparison.

**Finding (stated plainly, per CORE-SEED 2):** ARCH-00395 is NOT a duplicate target for this plan — it already closed the RATIFICATION debt. This plan is additive: a process-LEARNING comparison ARCH-00395 explicitly did not perform (its scope was Governor-authorization + defect-fix verification, not a protocol-fidelity comparison). Nothing existing covers this comparison; creating it is justified.

---

## The Rule (executable procedure)

1. **Cite, do not re-derive.** This plan references ARCH-00394 (wizard, by section) and ARCH-00190 (protocol, by section) throughout — no content is copied verbatim beyond short quoted phrases needed for the comparison table (I10).
2. **Build the comparison table** (if this plan is ratified for the gather/structure work described in Tier-Routing above) with columns: `ARCH-00190 stage/requirement` | `What ARCH-00394's actual STEP 0–6 run did` | `Aligned / Diverged / N/A` | `Why (one line)`. Rows to populate at minimum:
   - ARCH-00190 §1 Planning Status Enum (AWAITING-BUILDER-REVIEW → … → COMPLETE) vs. ARCH-00394 having no Planning Status at all (it is a protocol/wizard node, not a plan — carries node `Status` only: DECLARED → CONNECTED → RATIFIED).
   - ARCH-00190 §3 Stage 0 iterative Haiku/Sonnet/Opus draft-review loop vs. ARCH-00394's STEP 0–6 having no equivalent iterative-review loop before its first real run.
   - ARCH-00190 §3 Stage 1 named Independent Verifier (P5, author≠verifier) at plan-creation time vs. ARCH-00394's actual verification occurring only AFTER the fact, retroactively, via ARCH-00395 + Opus PE run 26.
   - ARCH-00190 §3 Stage 2 Governor authority ratification (a distinct, second gate) vs. the single Governor order ("I order you to establish a corespine…") that ARCH-00395 treated as both the trigger AND (combined with "ratify with retro plan") the retroactive Stage-2 decree.
   - ARCH-00394 STEP 0 (goal-setting, added 2026-07-20) vs. ARCH-00190 — does ARCH-00190 itself have an equivalent mandatory goal-setting step prior to Stage 0? (Open finding — ARCH-00190 §2's plan-contents checklist does not list a goal-setting DIALOGUE step distinct from "Goal-First §3.1"; note this as a candidate enhancement, not an amendment made here.)
   - ARCH-00394's own STEP 6 (`bash dna/checks/plan-audit.sh` + resolve every finding) vs. ARCH-00190 §4's Definition-of-Done gate reference — these two mechanisms independently arrived at the same discipline (self-audit before "done"); note as a POSITIVE convergence, not a divergence.
3. **Extract lessons.** Each named divergence becomes a routed candidate: either (a) a root-insight (`dna/learning-registry/root-insights.yaml`) if it is a class-level prevention (e.g., "protocol+wizard combined nodes need an explicit lightweight Stage-0/Stage-1 equivalent even when the meta-protocol's full plan-gate did not exist yet at their creation time"), or (b) an explicit note that the gap is now moot because ARCH-00392/I25 mechanical gating (built after ARCH-00394) already prevents recurrence.
4. **No amendment made here.** This plan produces the comparison + routes lessons; it does NOT itself amend ARCH-00190, ARCH-00394, or ARCH-00395. Any amendment those lessons justify is a SEPARATE future plan (I25 — no ad-hoc amendment riding on this plan's ratification).

---

## Tags + Statuses on every node this plan touches (VOC-00001/VOC-00002; ARCH-00401 Enh.2)
- **This plan (CISEM-ARCH-00415):** tags `[planning-domain, retro-plan, i25, learning-comparison, arch-00190, arch-00394, corespine-wizard]`; Status `DRAFT`; Planning Status `AWAITING-BUILDER-REVIEW`.
- **No other node's tag/status is modified by this plan.** ARCH-00394 remains `Status: RATIFIED`. ARCH-00395 remains `Status: RATIFIED` / `Planning_Status: COMPLETE`. ARCH-00190 remains `Status: LIVE`.

## Per-File Alignment Table (ARCH-00401 Enh.3)
| File | Number (via ONE gate) | Schema placement | Tag | Status |
|---|---|---|---|---|
| `dna/planning/CISEM-ARCH-00415-corespine-wizard-i25-retro-plan.md` | CISEM-ARCH-00415 (naming-registry.yaml, allocated this session) | T-SYS, planning-governance layer (SCHEMA-00001, same class as ARCH-00190/00395) | `[planning-domain, retro-plan, i25, learning-comparison]` | `DRAFT` |

---

## Definition-of-Done reference (ARCH-00401 Enh.5)
Per `dna/checks/definition-of-done.md` (cited, not re-derived): this plan's OWN "done" = drafted, tagged+statused correctly, committed with a specific-file `git add` (never `-A`), passes `[ZF]`/`[I19]`/`[TAG-STATUS]` at commit. It explicitly does NOT claim "done" for the comparison-table content itself — that is IMPLEMENTATION, gated behind Stage 1/Stage 2 ratification of THIS plan (§4 of ARCH-00190: no implementation before Planning Status COMPLETE).

## Propagation Declaration (ARCH-00401 Enh.6)
If ratified and later implemented, the comparison table + routed lessons propagate to: `dna/learning-registry/root-insights.yaml` (class-level preventions, by reference — RIPL), and (if a lesson recommends it) a future amendment PROPOSAL to ARCH-00190 or ARCH-00394 filed as its own plan (never inlined here). No generated/derived view needs to regenerate as a result of drafting this plan alone.

---

## What DOES change (by ratifying + later implementing this plan)
- A new comparison artifact is produced (location TBD at implementation — likely appended to this plan file's own body, or a sibling analysis file, decided at implementation time per Anti-Scatter — not pre-decided here to avoid scope-creep).
- Zero or more root-insight entries added to `dna/learning-registry/root-insights.yaml`.

## What DOES NOT change
- ARCH-00393, ARCH-00394, ARCH-00395 content or Status fields — untouched.
- The already-CLOSED I25/A4 debt for CS-FRONTEND-001/ARCH-00394 — stays closed; this plan does not reopen or re-litigate it.
- ARCH-00190 itself — no amendment made by this plan; any amendment is a future, separate, ratified plan.
- No code, hook, or check is built or modified by drafting this plan.

---

## Dependencies
- **Blocks on:** nothing — this is a self-contained analysis plan.
- **Unblocks for:** a possible future ARCH-00190 or ARCH-00394 amendment plan, IF the comparison surfaces a class-level gap worth hardening (not assumed here).
- **Related, not blocking:** ARCH-00395 (RATIFIED, prior formal closure — cited, not touched); ARCH-00392 (Context-Envelope plan — the mechanical I25 gate that makes this exact class of gap harder to recur; referenced as the forward-looking fix, not amended here).

---

## Ratification Path (ARCH-00190 §3)
- **Stage 0:** not run in this dispatch (single-pass Sonnet draft per Opus's direct dispatch; Opus may run Stage 0 iteration before Stage 1 if it judges the draft needs it).
- **Stage 1 (Opus soundness):** PENDING — `cisem-opus-pe` reviews this plan cold (author≠verifier, P5).
- **Stage 2 (Governor authority):** PENDING — after Stage 1 SOUND verdict.
- **Current Planning Status:** `AWAITING-BUILDER-REVIEW` (this is the correct starting value per ARCH-00190 §1 — no stage has run yet).

---

## Self-Compliance (ARCH-00230 checklist)
✓ Header (Node ID, Type, Status, Planning Status, depth_level, tags, goal, corespine, pocket)
✓ Why-standalone (closes an I25 process-learning gap ARCH-00395 did not address; readable cold)
✓ Rule-as-procedure (§ The Rule, 4 numbered steps)
✓ Does-NOT-cover (see "What DOES NOT change")
✓ Role/Who-serving (Sonnet drafts, Opus judges, Governor ratifies)
✓ Self-compliance (this section)
✓ INHERITANCE — declares parent corespine CS-CREATION-001; inherits CLAUDE.md Principles 1–21, the persona SSOT (by reference), and this ARCH-00230 checklist (by reference, not copied)

## Path Rejection Declaration (CLAUDE.md §2.8)
- ❌ **Rejected: re-opening or re-ratifying ARCH-00393/00394 as if I25 were still unresolved.** It is resolved (ARCH-00395, RATIFIED, COMPLETE); doing so would be a false-premise duplication (I19) and would contradict a Governor decree already on record.
- ❌ **Rejected: amending ARCH-00190 or ARCH-00394 inline as part of this plan.** Any amendment belongs in its own ratified plan (I25); bundling it here would let a comparison-analysis plan smuggle in an unreviewed protocol change.
- ❌ **Rejected: treating "small learning artifact" as an implementation exemption.** Per A4/I25, even this analysis work requires this ratified plan before the comparison-table population is executed — "small/safe" is explicitly not an exemption (CLAUDE.md A4 note).

## CAL reference (CISEM-ARCH-00390)
Enforcement at commit time: `.git/hooks/pre-commit` runs `plan-audit.sh` → `[ZF]` (must show findings routed or ACHIEVED), `[I19]` (Existing-First stated — satisfied above), `[TAG-STATUS]`/`[CREATION-GATE]` (tags+Status present — satisfied in header), `[NAMING-FORMAT]`/`[TYPE-MATCH]` (CISEM-ARCH-00415, Type ARCH — matches prefix). No SessionStart/PreCompact trigger is specific to drafting a single plan file beyond the standing inherited-preventions injection.

---

## Change log
| Date | Change | Author |
|---|---|---|
| 2026-07-22 | DRAFT — plan authored per Opus dispatch (Governor "go" 2026-07-22); framed as a learning-comparison to ARCH-00190, not a re-ratification of the already-closed ARCH-00395 debt. Planning Status: AWAITING-BUILDER-REVIEW. | Sonnet (STRUCTURING tier, cisem-sonnet) |
