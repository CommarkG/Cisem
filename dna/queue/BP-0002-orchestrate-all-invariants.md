# BUILD-PROMPT BP-0002 — Orchestrate ALL invariants into the one engine (creation-learning loop)
**FOR:** cisem-sonnet (execute exactly; honor Core Seeds verbatim; never write truth-fields — I7)
**status:** QUEUED | **priority:** HIGH | **essential:** y | **timeframe:** pivot step 3 | **depends-on:** BP-0001

## BOOTSTRAP (mandatory first)
Read: CLAUDE.md, dna/checks/plan-audit.sh, dna/protocols/CISEM-ARCH-00320-prevention-and-plan-audit.md (invariant table I1–I17), dna/ssot-registry.yaml.

## GOAL (measurable)
Automate every MECHANICALLY-CHECKABLE invariant so learnings are EXECUTED on every
creation/commit — not forgotten. DONE = plan-audit.sh runs checks for all mechanically-
checkable invariants (today only I1/I3/I6/I16), and lists which invariants remain
judgment-only. This is the creation-learning loop: what we learned is applied every time.

## CONTEXT
Only 4/17 invariants are automated → 13 learnings rely on manual discipline and get
forgotten under pressure (the exact failure this fixes). Some invariants are judgment-only
(e.g. I17 pocket-declared, I6 verification-behind-commit) and stay manual — that's honest.

## CORE SEEDS (immutable Opus intent)
[[CORE-SEED 1 | MUST: every newly-automated check is WARN-ONLY first; graduation to BLOCK is a SEPARATE Opus decision after false-positive review | WHY: rigidity/safety (guardian not cage) | VERIFY: script exits 0]]
[[CORE-SEED 2 | MUST: do NOT invent new invariants; only automate existing I1–I17 that are mechanically checkable; explicitly LIST which remain judgment-only | WHY: consolidation not accumulation | VERIFY: the list maps 1:1 to ARCH-00320's table]]
[[CORE-SEED 3 | MUST: candidates to automate = I5 (dangling children), I9 (unregistered TYPE prefix), I15 (category §3 coverage) — the clearly-mechanical ones | WHY: highest-value, lowest-false-positive | VERIFY: each has a check block]]

## PLAN
1. Read the I1–I17 table; tag each mechanical vs judgment-only.
2. Add WARN checks for I5, I9, I15 (and any other clearly-mechanical one).
3. Re-run; confirm no new false positives (BP-0001 must land first).
4. Emit a diff summary + the mechanical/judgment split for Opus verification.

## CONSTRAINTS
Axioms A1–A7, Doctrine, §3 gates, disclosed ≠ resolved, SSOT (I10).

## OUTPUT
Diff summary + invariant coverage table for Opus verification BEFORE done.
