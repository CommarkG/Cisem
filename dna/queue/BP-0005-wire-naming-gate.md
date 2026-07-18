# BUILD-PROMPT BP-0005 — Wire the ONE naming/numbering gate
**FOR:** cisem-sonnet drafts; cisem-opus-pe verifies. **status:** QUEUED | **priority:** HIGH | **essential:** y | **depends-on:** BP-0001
**Prior art to ALIGN (not copy):** Csps `.claude/hooks/depth-marker-creation-gate.sh` is a WIRED
creation gate — study its pattern for the naming check.

## BOOTSTRAP
Read: CLAUDE.md, dna/naming-registry.yaml (the ONE gate, now incl. BP/IBD/HANDOFF namespaces),
dna/protocols/CISEM-ARCH-00011-naming-numbering-policy.md §2 (one-gate rule), dna/checks/plan-audit.sh.

## GOAL (measurable)
Wire the single naming gate so naming stops being EXISTS≠ACTIVE. DONE = plan-audit.sh has a WARN
check that lists every `CISEM-*` / `BP-*` / `IBD-*` / `HANDOFF-*` id on disk and flags any whose
namespace/number is not consistent with naming-registry.yaml; and a fake unregistered id IS flagged
while all current ids pass.

## CONTEXT
Naming was 3 parallel authorities (registry + queue/README + ibd/README) — I10 violation, now
consolidated: naming-registry.yaml is the single allocator; READMEs only mirror.

## CORE SEEDS (immutable)
[[CORE-SEED 1 | MUST: add a WARN check to plan-audit.sh that enumerates every CISEM-*/BP-*/IBD-*/HANDOFF- id on disk and flags any inconsistent with naming-registry.yaml namespaces | WHY: one-gate enforcement (I10) | VERIFY: a planted unregistered id is flagged; all current ids pass | APPLIES_TO: the Sonnet tier executing BP-0005 (naming gate wiring in plan-audit.sh)]]
[[CORE-SEED 2 | MUST: WARN-ONLY (exit 0); do NOT rename any existing file | WHY: zero blast risk (SWIFT) | VERIFY: exit 0, no renames | APPLIES_TO: the Sonnet tier executing BP-0005 (naming gate wiring)]]
[[CORE-SEED 3 | MUST: treat per-README indexes (queue/ibd) as MIRRORS — if a README index disagrees with naming-registry, flag it; the README never allocates | WHY: single source I10 | VERIFY: check compares README vs registry | APPLIES_TO: the Sonnet tier executing BP-0005 (naming gate wiring in plan-audit.sh)]]

## PLAN
1. Enumerate ids on disk (grep filenames + headers).
2. Compare each to naming-registry namespaces + next_seq bounds.
3. Add the WARN check block to plan-audit.sh (align to the Csps depth-marker-gate pattern).
4. Emit diff + SEED-HONOR REPORT for cisem-opus-pe.

## OUTPUT
Diff + SEED-HONOR REPORT for Opus verification BEFORE done.
