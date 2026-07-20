# IBD-0026 — Corespine Precedence: PARKED-FOR-DEEP-UNDERSTANDING
**ID:** IBD-0026 | **Status:** PARKED | **tags:** [precedence, corespine, deep-dive, verify-before-activate, parked]
**Parked by:** Governor decree 2026-07-20 ("Precedence... must be parked for deep understanding; it must not be a floating hidden priority without verifying it works fine — hardwire it now")

## What is parked
ARCH-00404 **Phase 3 — PRECEDENCE**: "when two corespines conflict, which one wins." The plan surfaced two paths
(Path A = reopen DEC-0006 for a total-order; Path B = a within-tier tie-breaker inside the ratified typed
sequence — Opus recommended B). The Governor RATIFIED ARCH-00404 but explicitly **carved Phase 3 out** to be
understood deeply before any implementation.

## Why parked (the Governor's concern, verbatim intent)
Precedence must **not become a floating, hidden priority** — a silent rule that quietly decides conflicts without
anyone having verified it behaves correctly. A conflict-order that "exists" but was never run on a real conflict is
exactly the EXISTS≠ACTIVE (I23) trap.

## Release conditions (what must be true before Phase 3 leaves PARK)
1. The Governor explicitly opens the precedence deep-dive.
2. The chosen mechanism (Path A or B) is defined AND **run on ≥1 real corespine conflict** — verified to resolve it
   correctly, not just declared.
3. Only then does it activate; until then it is inert and MUST NOT be referenced as an active priority.

## Hardwiring (so it can't drift back silently)
- ARCH-00404 Phase 3 header carries the ⛔ PARKED-FOR-DEEP-UNDERSTANDING banner + verify-before-activate rule.
- ARCH-00404 Planning Status names Phase 3 as parked (Phases 1/2/4 proceed).
- GI-48 (PARKED) indexes it.
- DEC-0006 (archive) stays RULED-OUT-TEMPORARY — this park does not reopen it.
