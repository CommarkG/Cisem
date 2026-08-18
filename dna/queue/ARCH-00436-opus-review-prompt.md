# Opus Expert Review Prompt — ARCH-00436
**For:** cisem-opus-pe | **From:** Opus (orchestrator) | **Date:** 2026-08-18
**tags:** [review-prompt, arch-00436, naming, wisdom-architecture]
**Status:** READY-TO-DISPATCH

---

## ROLE
You are cisem-opus-pe — adversarial, cruel honesty, default-refute. Your job is to find what's wrong with this plan, not to validate it.

## BOOTSTRAP (mandatory, in order)
1. `CLAUDE.md` (constitution)
2. `dna/CISEM-WITNESS-00003-session-continuity.md` → COMPACT STATE v16
3. `dna/planning/CISEM-ARCH-00436-governance-consolidation-naming-wisdom-disposition.md` (the plan under review)
4. `dna/planning/CISEM-ARCH-00435-evidence-discipline-plan-audit-checks.md` (the plan being withdrawn)
5. `dna/checks/plan-audit.sh` lines 520–560 (the [DOD] item b you're told ARCH-00435 STEP 1 duplicates)
6. `dna/checks/plan-audit.sh` lines 660–710 (the [RATIFY-GATE] you're told ARCH-00435 STEP 2 duplicates)
7. `dna/learning-registry/CISEM-NAMING-NUMBERING-REPORT-2026-08-17.md` (source of the 10 naming points)
8. `dna/learning-registry/root-insights.yaml` (to assess the wisdom architecture workstream)

State the inherited preventions you apply before judging.

---

## YOUR ADVERSARIAL QUESTIONS (answer each, default-refute)

### On ARCH-00435 Withdrawal
1. **Verify the duplicate claim at source** — read [DOD] item (b) at plan-audit.sh:536 and [RATIFY-GATE] at plan-audit.sh:668. Are they genuinely what ARCH-00435 STEP 1 and STEP 2 proposed? Or is there a residual gap that ARCH-00435 would have closed that neither existing check covers? Be specific — cite the exact lines.
2. **Is the withdrawal recommendation honest or convenience?** "The class is already enforced" is a claim. Does the existing [DOD](b) cover diff-scoped added-lines-only OR is it whole-file? Does [RATIFY-GATE] cover both haiku AND sonnet GI-68 verdicts, or only the Opus Stage-1 verdict?
3. **Is DEC-0015 the correct next archive entry?** Verify archive-ledger.yaml's current state and the DEC next_seq.

### On Naming Workstream (10 Points)
4. **Tier A sequencing** — is wiring a pre-commit ID-registration check (BP-0005) genuinely the right first move, or does the stale-counter problem have a simpler mechanical fix (e.g., a pre-commit script that reads `max(ARCH IDs on disk)` and errors if > `next_seq`)? Could Tier A be done in one small hook rather than a full plan?
5. **Scope of ARCH-00437** — as written, it absorbs BP-0005 entirely. BP-0005 has been open 4+ weeks. Is there something blocking it that this plan doesn't address? Will ARCH-00437 actually get built, or is this another "plan to plan"?
6. **Tier B and C sequencing** — Governor decisions are needed for Point 5, 9, 10. Are they actually deferred, or should they be explicit PCRs presented now so the Governor can decide?
7. **Missing from the 10 points**: the report says the [NAMING] consistency check is "PROPOSED in the policy, not yet built." Should this be in Tier A (it's a mechanical check) or Tier B? The plan puts it in Tier B — is that right?

### On Wisdom Architecture Workstream
8. **Applicability audit** — "take 10 RIs at random" sounds like a sample. Brain said the ones with no actionable answer are commentary, not wisdom. But with 75 RIs, 10 is only 13%. Should the audit be ALL 75, or is 10 genuinely representative enough to decide whether to halve the corpus?
9. **Violation-weighted digest vs ANCHOR-weighted** — Brain's correction was that the digest should be violation-weighted (most recently violated), not ANCHOR-weighted (most stable). Is this actually implementable? How do you know which RIs were "recently violated" if the harvest doesn't record violation events? Does the session-learning-index.yaml carry this data, or would a new `last_violated:` field be needed on each RI first?
10. **The replay measurement step** — "test whether loading the digest changes agent behavior on known-bad turns from harvest history." How? The harvest records learnings but not the turns where a documented insight was violated. Is this measurement actually implementable given what's on disk, or is it speculative?
11. **A11 compliance** — ARCH-00436 claims the Brain review IS the A11 consult for Workstream 3. Does Brain's input (relayed via Governor, summarized in session-close-2026-08-18.md) constitute a full A11 consult per ARCH-00011's definition, or should Workstream 3 require a fresh Brain consultation before ARCH-00439 is drafted?

### On the Plan Structure Itself
12. **Size gate** — is this plan under 200 lines? Count it. If over, it should split.
13. **I7 compliance** — the plan says "Mark ARCH-00435 Status: SUPERSEDED (on Governor disposition)." Who does that write? Opus only (I7). Is that explicit in the plan's Tier-Routing Declaration? The plan has no Tier-Routing Declaration section. Flag this.
14. **Is this a roadmap or a plan?** A roadmap that creates stubs for other plans is unusual in CISEM's A4/ARCH-00190 structure. Is ARCH-00436 itself governed? Can it be ratified as a roadmap-plan under the existing ARCH-00190 protocol, or does it need a new sub-type?

---

## RETURN CONTRACT
One findings file only: `dna/learning-registry/agent-findings/arch-00436-opus-review-2026-08-18.md`
- `tags:` line + `Status: DRAFT-FINDINGS` (creation-gate minimum)
- Per question: CONFIRMED / PARTLY / REFUTED + evidence (file:line for any code citation)
- Full honest board: counts, no subset-pass
- Zero governed files modified
- HARVEST-BEFORE-RETURN
