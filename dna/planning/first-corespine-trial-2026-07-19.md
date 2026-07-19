# First Corespine Trial — Green-Gate Setup (test-drive of ARCH-00400) 2026-07-19
**Status:** DRAFT — awaiting Governor sign-off on the acceptance criteria BEFORE the build (per R5/CDS: define flawless domain-agnostic, in advance). Governs the test-drive of [[CISEM-ARCH-00400-governed-creation-pipeline-and-wizard-draft]] (PROVISIONAL-ACTIVE-FOR-TRIAL). Nothing seals until this green-gates.
**Independent Verifier:** cisem-opus-pe (cold, default-refute) — verifies the trial against criteria 1–7 (A1 verify-seam); distinct from the builder.
**EXISTING-FIRST (§3.2b):** searched ARCH-00394 (wizard, RATIFIED), ARCH-00400 (pipeline Part 3 — the green-gate + wizard flow this trial exercises), IBD-0017 P2 (Inheritance corespine-candidate), consolidation-conclusions §A6/§B (the "flawless=green-gate" + diverse-instance conclusions this derives from). No existing trial-setup exists; this is the first. ENHANCES ARCH-00400 (its Part-3 test-drive), does not fork.

## INSTANCE-1 SELECTION
- **Chosen:** the **Inheritance corespine** (IBD-0017 P2). Rationale (R5): pick a MODERATELY-COMPLEX domain, not the easiest — Inheritance is high-reach + testable + it exercises the exact mechanism under debate (WHAT-as-mechanical-invariant + cumulative inheritance). It touches Part-3 of the pipeline (wizard + WHAT-as-invariant + inheritance), NOT the kernel/control-plane — so the logged debts N3/N4 are not in scope.
- Instances 2 + 3 (later, adversarially DIVERSE): (2) a cross-cutting OVERLAY candidate (e.g. security → should classify as overlay, not trunk); (3) a candidate that SHOULD BE REJECTED (proves the wizard refuses). Diversity > count; N≈3, with a divergence rule.

## GREEN-GATE ACCEPTANCE CRITERIA (domain-agnostic — apply equally to clean + messy domains)
A corespine trial is "fit for governed promotion" (our operational "flawless") ONLY when ALL hold:
1. **Mechanical-invariant WHAT** — every inherited WHAT is a TESTABLE ASSERTION (not prose), and a descendant provably passes/fails it (A2/DEC-0005). No prose WHAT survives.
2. **Cannot-mean present + checked** — explicit exclusions declared AND checked against descendant behavior (guards upward WHAT-widening).
3. **Irreducibility + orthogonality** — its WHAT cannot be derived from a combination of existing corespines; low mutual-conflict with siblings (A5).
4. **Refusal proven** — the wizard REFUSES a non-corespine candidate (the instance-3 rejected-candidate test passes).
5. **Coverage + disposition honest** — constraint_coverage stated; every status/disposition truthful on disk (no premature "done").
6. **Convergence (the stop rule)** — the cold independent verifier returns **ZERO new findings on a clean re-run, twice consecutively** (R4/R6). Count is a measurement, never a target.
7. **Rollback available** — a forward-applied inverse exists before activation (R4).
8. **Governor ratifies** — the final seal is the Governor's, not any AI's (A1/I7).

## METHOD (build-one; Principle 15 + green-gate)
Run Inheritance through the wizard 0–9 flow (ARCH-00400 Part 3) → cold-verify against criteria 1–7 → fix → re-verify until criterion 6 (twice-clean) → present to Governor for criterion 8. Only then generalize the PATTERN to instances 2–3.

## OPEN — Governor sign-off needed BEFORE build
Confirm/adjust criteria 1–8 (this is the definition of "flawless" for every future corespine — worth your eyes now). On sign-off, I build instance-1.
