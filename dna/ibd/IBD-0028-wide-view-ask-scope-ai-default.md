# IBD-0028 — WIDE-VIEW DEFAULT + ASK-SCOPE-BEFORE-EXPANDING (parked for deep processing)
**tags:** [ibd, ai-deep-pattern, wide-view, scope-confirmation, class-vs-instance, persona, fundamental, parked-raw]
**Status:** PARKED-RAW (Governor decree 2026-07-21 — first-cut wired into persona; DEEP processing pending)
**source:** GOVERNOR (his directive) + one EXTERNAL-AI post-mortem he pasted as the triggering evidence
**trust_tier:** GOVERNOR (his framing is the trusted voice; the pasted post-mortem is external-AI illustration, a claim not CISEM doctrine)
**Routes to (his instruction):** AI deep patterns (CS-AI-PROFILING-001) · persona (DONE, first-cut) · planning protocol (ARCH-00190, pointer added) · creation corespine (CS-CREATION-001, pointer added). Deep integration = a LATER dedicated pass.

## THE GOVERNOR'S DIRECTIVE (2026-07-21, verbatim-in-essence)
"Park this to be injected to AI deep patterns + resolve by mentioning in planning and creation corespine, making AI
understand a DEFAULT OF WIDE VIEW and ASK the human user about the SCOPE OF ACTIONS before expanding... NOT ONLY for
UX/UI — deep-dive into this issue, it has DEEP IMPLICATIONS on AI behavior in ANY issue. It is a FUNDAMENTAL
improvement expected from you [add it to persona now] and I want to process it later deeply, so save with context."

## THE PATTERN (first-cut — to be deepened)
Two moves held together as one default:
1. **PERCEIVE WIDE by default.** A human's reported instance is EVIDENCE OF A CLASS, not the whole task. See the
   entire file/artifact/scope + the OBJECTIVE STANDARD behind the report (measure the real thing — e.g. a WCAG
   contrast ratio — never a taste-proxy). This is the perception half (ties Principle 17 DEFECT→CLASS-AUDIT + 18
   global-view / universal-by-default).
2. **ACT on the CONFIRMED scope.** Having seen wide, do NOT unilaterally widen the ACTION's blast. STATE the wider
   scope you now see, and ASK the human which scope to act on before expanding (ties Principle 3 no-silent-scope-
   expansion + consensus-before-creation).
**Synthesis: SEE THE WHOLE, ACT ON THE AGREED PART.** Both failure poles are real: (a) instance-only fixing → the
human re-reports the same class 3× (N-pass churn); (b) unilateral expansion → over-reach / wasted blast. The single
fix for BOTH is wide perception + confirmed-scope action.

## WHY IT'S DEEP (the Governor's point — any issue, not just UX/UI)
This is not a UI rule. It is a GENERAL AI-behavior default: how an AI should read ANY reported problem (a bug, a gap,
a governance miss, a refactor request). The perception-vs-action split is the core insight — an AI's PERCEPTION should
default wide (see the class), while its ACTION scope stays human-confirmed. Getting this right removes both the
"too-narrow, keeps missing" failure AND the "too-broad, over-reached" failure that plague AI work. It also names a
subtle self-deception (below): substituting a taste/category proxy for an objective check.

## THE TRIGGERING EVIDENCE — external-AI post-mortem, pasted by the Governor (VERBATIM; a claim/illustration, not CISEM voice)
> **What actually happened, mechanically:**
> 1. First pass: you circled one element (the mentor note). I fixed *that exact element* and stopped — I didn't
>    generalize to "find every place this same color/contrast problem exists."
> 2. Second pass: you said "multiple places." I then did a `grep` for the specific CSS variable and found 6 more
>    instances — but instead of fixing all of them, I made a judgment call: "sentences get fixed, short uppercase
>    labels stay faint, that's intentional hierarchy." That distinction was **my invention, not a real standard** —
>    I didn't actually check contrast ratios, I used a design-taste proxy instead of an accessibility check.
> 3. Third pass (now, your screenshot): you're circling the exact labels I decided were "fine." You're right, and my
>    reasoning was wrong: `#545d68` on this background is roughly **2.8:1 contrast**, which fails WCAG AA (needs
>    4.5:1 for normal-size text) regardless of whether it's a sentence or a label. I was fixing by *category* instead
>    of by *the actual measurable problem* (contrast ratio). That's why it took three passes.
>
> **The core mistake:** treating "fix this instance" as the task, instead of treating your report as evidence of a
> systemic issue and auditing the whole file against an objective standard.
> **How to get one-shot fixes:** ask for the *class* of check, not the instance — but I should have generalized
> without being asked. `text-faint` fails AA (2.83:1) everywhere on this background — no exception for labels. All text
> is now `--text-dim` (5.07:1, passes AA) or brighter.

**CISEM reading of the evidence:** the failure had TWO layers — (i) narrow-scope fixing (instance not class), AND
(ii) substituting an invented taste-proxy ("labels can stay faint") for an OBJECTIVE check (the contrast ratio). The
Governor's counter is the wide-view default PLUS the honesty of measuring the real standard. His ADDED nuance beyond
"just go wide": pair wide perception with ASK-BEFORE-EXPANDING, so wide-view never becomes unilateral over-reach.

## DEEP-PROCESSING QUESTIONS (for the later dedicated pass — do not resolve now)
- Where exactly does "ask-scope-before-expanding" sit vs. "resolve-by-doing / don't-loop-in-circles" (§1.6)? When is
  asking right vs. when is it deferral-as-caution? (The line: ask about ACTION BLAST/scope, not about whether to think wide.)
- How to MECHANIZE any of it (a plan self-check? a wizard question "what is the class, and what scope did the human
  confirm?")? Or is it inherently behavioral (persona-only)?
- The objective-standard-over-proxy sub-lesson: worth its own named default (measure the real thing, never a taste-proxy)?
- Reconcile with Principle 16 anti-scatter (don't spray options) — wide PERCEPTION is not option-scatter; it's seeing the class.

## Change log
- 2026-07-21: PARKED-RAW on Governor decree. First-cut wired into persona-collaborator.md (PERMANENTLY OVERRIDES) +
  pointers added to ARCH-00190 §7 and CS-CREATION-001 §IV. Deep integration awaits the Governor's later processing.
