# BUILD-PROMPT BP-0001 — Harden plan-audit.sh (kill false positives)
**FOR:** cisem-sonnet (execute exactly; honor Core Seeds verbatim; never write truth-fields — Hard Line I7)
**status:** QUEUED | **priority:** HIGH | **essential:** y | **timeframe:** pivot step 1 | **depends-on:** none

## BOOTSTRAP (mandatory first)
Read: CLAUDE.md, dna/checks/plan-audit.sh, dna/quality-ledger.yaml, dna/protocols/CISEM-ARCH-00320-prevention-and-plan-audit.md.

## GOAL (measurable)
Eliminate the two known false-positive classes in plan-audit.sh so more invariants can
safely graduate to BLOCK-mode. DONE = a re-run shows the I16 and I3 false positives gone,
while a genuinely stale/violating file would still be flagged.

## CONTEXT
The gate runs on every commit (WARN + I13 seed-strip BLOCK). Two false positives block
graduation: (a) I16 flags ARCH-00310 (PROPOSED) because it matches "Status…RATIFIED" in
PROSE, not the header field; (b) I3 flags the check script's own `status:` lines and the ledger.
Do NOT change the routing, the invariants, or add BLOCK conditions — hardening only.

## CORE SEEDS (immutable Opus intent)
[[CORE-SEED 1 | MUST: I16 parses ONLY the header Status field (first ~15 lines of a file), never a "Status…RATIFIED" substring in body prose | WHY: silent-fail + status-currency I16 | VERIFY: ARCH-00310 no longer flagged; a file that is RATIFIED in header + "not ratified" in body IS still flagged]]
[[CORE-SEED 2 | MUST: I3 excludes dna/checks/ and dna/quality-ledger.yaml from its diff scan | WHY: self-reference noise | VERIFY: editing the check script does not self-flag I3]]
[[CORE-SEED 3 | MUST: keep plan-audit.sh WARN-ONLY (exit 0); the ONLY BLOCK stays in the pre-commit hook (I13 seed-strip) | WHY: safety, no accidental hard-block | VERIFY: script exits 0]]

## PLAN
1. Restrict the I16 loop to the file's header region (e.g. `head -15`) for the RATIFIED match.
2. Add `':(exclude)dna/checks/' ':(exclude)dna/quality-ledger.yaml'` pathspecs to the I3 git diff.
3. Re-run `bash dna/checks/plan-audit.sh`; confirm both false positives gone.
4. Emit a diff summary for Opus verification.

## CONSTRAINTS
Axioms A1–A7, Doctrine, §3 gates, disclosed ≠ resolved, status currency.

## OUTPUT
Diff summary for Opus verification BEFORE done. Opus then decides which checks graduate to BLOCK.
