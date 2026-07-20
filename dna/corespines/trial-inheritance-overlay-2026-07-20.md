# Inheritance Overlay — FIRST CORESPINE TRIAL (candidate)
**Status:** DRAFT-UNSOUND (cold verifier 6/6 criteria FAIL, 2026-07-20; NOT active — rollback absent per F6). Parked pending rethink (Inheritance → kernel mechanic; pick a clean domain as instance-1). See GREEN-GATE STATUS below.
**Governed by:** CS-CREATION-001 (built via the ARCH-00400 wizard flow) | **Kind:** cross-cutting OVERLAY (applies across ALL corespines; not a domain trunk)
**Independent Verifier:** cisem-opus-pe (cold, default-refute) — green-gate criteria 1–7 (first-corespine-trial-2026-07-20.md)
**EXISTING-FIRST (§3.2b):** searched corespine-registry (no inheritance corespine), axiom A2 (cumulative binding inheritance — its doctrine home), ARCH-00230 (checklist), IBD-0013 #2 (inheritance-evident candidate), IBD-0017 P2. ENHANCES A2 into an enforceable overlay; does not fork. STEP-0 refusal check: reclassified from "domain" to OVERLAY (see below).

## STEP 0/1 — Classification (wizard refusal-first)
Inheritance is NOT a new domain corespine: (a) it is CROSS-CUTTING — every corespine inherits, so it applies across the tree (overlay signature); (b) it is not irreducible-as-a-domain — it derives from CREATION (propagation down) + VALIDATION (descendants must honor). It IS a governed OVERLAY: the cross-cutting rule-set that makes "adapt the HOW, never the inherited WHAT" mechanically true. Orthogonality: distinct from creation (which CREATES a node) and validation (which validates ONE node) — this overlay governs PROPAGATION + INVARIANCE ACROSS descendants.

## STEP 2 — Primary concern + jurisdiction
**Primary concern:** what must propagate down the corespine tree and stay invariant, and how "HOW may change, WHAT may not" is ENFORCED (not merely stated). **Jurisdiction:** every corespine and every created artifact that has a parent (universal overlay).

## STEP 2 — The inherited WHAT = MECHANICAL INVARIANTS (testable assertions, not prose — reviewers' #1 fix, Governor-approved)
- **INV-1 (asserted-not-prose):** every corespine's inherited WHAT is expressed as a TESTABLE ASSERTION — a descendant provably PASSES or FAILS it. *Test:* does each WHAT carry a pass/fail check? A prose-only WHAT fails INV-1.
- **INV-2 (HOW-free, WHAT-bound):** a descendant may change its HOW, but its behavior must still PASS every inherited WHAT-assertion. *Test:* run the inherited assertions against the descendant's behavior → all pass.
- **INV-3 (no silent reclassification):** a descendant cannot weaken or reclassify an inherited WHAT into a HOW without a RATIFIED waiver (typed inheritance = mandatory_unless_waived). *Test:* any WHAT→HOW reclassification has a waiver record; else violation. (Directly closes R4/CSPS's #1 drift vector.)
- **INV-4 (cannot-mean guard):** each inherited WHAT declares a cannot-mean, checked against descendant behavior. *Test:* descendant behavior does not enter the cannot-mean set.

## STEP 2 — Cannot-mean (this overlay does NOT mean)
- NOT "copy the parent's content into the child" (that is duplication — violates SSOT/A8; inheritance is by-reference + assertion, not copy).
- NOT "the child re-implements the WHAT freely" (that is INV-2/INV-3 violation).
- NOT "decide WHICH corespine owns a concept" (that is the wizard's classifier, not this overlay).

## STEP 3 — Irreducibility / orthogonality
As an OVERLAY, not claimed irreducible-as-domain (correct — it's cross-cutting). Orthogonal to creation + validation: neither creates nor validates a single node; it governs the RELATION between a node and its descendants. No overlap war expected with domain trunks (overlays rank by rule_class in the control-plane, per ARCH-00400 M3).

## GREEN-GATE STATUS — COLD VERIFIER VERDICT: UNSOUND (2026-07-20; not fit to seal)
Honest per-criterion (all self-✓ marks were premature — plausibility-completion, F4): 1 FAIL · 2 FAIL · 3 FAIL · 4 FAIL · 5 FAIL · 7 FAIL. Findings:
- **F1 (CRITICAL):** overlay reclassification is self-contradictory (STEP 0/1 "reducible" vs STEP 3 "orthogonal/irreducible") — and reducibility is the WRONG axis (overlays ALSO need irreducibility). Either reducible → not top-level at all (overlay hollow), or irreducible → the demotion rationale is false.
- **F2 (CRITICAL):** INV-1..4 are prose ABOUT testability, not instantiated runnable tests; "run assertions against descendant behavior" is undefined for governance docs (no executable behavior). No concrete inherited WHAT is exhibited.
- **F3–F9:** refusal conflated with an ACCEPT (F3); false ✓ on disk (F4); no constraint_coverage / no registration (F5); rollback absent while "ACTIVE" (F6); KERNEL-placement never considered (F7); reclassifying instance-1→overlay collapses trial diversity (F8, instance-1 was meant to be a DOMAIN); A2-mapping overstated (F9).
**Revised read (Opus, owning the corrected call):** Inheritance is most likely a **KERNEL mechanic** (the propagation-invariance rule of the constitutional kernel) — neither a policy overlay nor a standalone domain — and it sits on the UNRESOLVED kernel/creation-apex seam (ARCH-00400 debt N4). It is therefore a POOR instance-1 (entangled with an undefined layer + collapses trial diversity). RECOMMENDATION: park this candidate; pick a clean DOMAIN corespine as instance-1; treat Inheritance as a kernel mechanic to place when the kernel is defined. Full verdict: agent a30f65436035e4601.
**Status of this candidate: DRAFT-UNSOUND · NOT active · superseded-by-rethink (see recommendation).**
