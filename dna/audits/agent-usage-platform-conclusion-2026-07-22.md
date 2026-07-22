---
tags: [audit, agent-usage, platform-conclusion, tier-routing, opus-synthesis]
Type: ARCH | Sub_type: AUDIT
Status: DRAFT — Opus half; Brain's half + Governor ratify pending
last_verified: 2026-07-22 | freshness: FRESH
Inputs: dna/audits/session-review-2026-07-22-haiku.md + the session's actual agent dispatches (Opus-corrected — Haiku undercounted them)
---

# Platform-level conclusion — using agents across planning / implementing / consulting

## The record (Opus-corrected: agents carried real load this session)
Haiku's review wrote "no explicit Haiku/Sonnet dispatch" — that is WRONG (it read recent commits, not task history). Actual
dispatches this session: **Sonnet** — page-tagging (28-page registry), the [I1]+FE-I11 fixes, the raw-activity 2-tier build,
the ssot-registry alias-enrich (running); **Haiku** — corespine-maturity evidence, this session-review. Each ran in its OWN
context window (zero drain on Opus's budget) and mostly succeeded with planted-tests + honest [ZF].

## What WORKED
1. **The tier split held** — Haiku GATHERS (evidence/enumeration, no judgment), Sonnet BUILDS (fixes/registries under Core
   Seeds), Opus JUDGES + writes truth. Haiku's gather found the 2 dangling registry pointers + the "3/15 sealed" corespine
   picture; Sonnet's builds were planted-tested + revert-not-repair.
2. **Own-context parallelism** — agents did substantial implementation while Opus's context was spent on judgment/consult.
3. **Core Seeds + SEED-HONOR + INFRASTRUCTURE-USE-PROOF** kept agent output verifiable — Opus could check honor against the report.

## What FAILED (the lessons)
1. **Same-engine agents did NOT catch Opus's re-derivations — only Brain (external, RAG) did.** Internal agents share Opus's
   discretionary/lossy retrieval, so they are NOT a substitute for the external Existing-First backstop. (This is why A11
   makes Brain-consult mandatory on D1/D2, not "ask an internal agent".)
2. **Opus under-used agents early (RI-0018) + kept doing Sonnet-lane work (GI-58).** Fix: dispatch by default for gather+build.
3. **git-race, twice** — concurrent agent commits + an Opus commit = staging collisions (Haiku's file swept into cdd80d4).
   Fix: agents commit their OWN specific files; Opus path-limits (`git commit <paths>`) or waits — NEVER sweep a co-worker's stage.
4. **Agent enumeration can be incomplete/wrong** (Haiku undercounted its own class). Fix: Opus VERIFIES agent findings, never relays at face value (same rule Brain applies to Opus).

## PLATFORM CONCLUSIONS (Opus — for Brain + Governor)
- **PLANNING:** consult is Brain's lane (external check), NOT an internal agent — A11/I26 route D1/D2 to Brain.
- **IMPLEMENTING:** Sonnet by default (own context), with the NEW align-before-producing bootstrap (born-awareness +
  alias-Existing-First + Reflect-Until-Match) now wired — so agents don't re-derive either.
- **CONSULTING/REVIEW:** Haiku for gather/enumerate; Brain-via-git for the Existing-First backstop internal same-engine
  agents structurally cannot be. Opus verifies both.
- **DISCIPLINE:** agents stage/commit their own specific files; Opus never sweeps; the tier boundaries (GI-58) are enforced.

## Open
Brain's half of this conclusion (post-sync). Governor ratify. Then fold the "align-before-producing" bootstrap into
cisem-haiku + cisem-opus-pe too (it's only in cisem-sonnet so far — Sonnet-only is incomplete; NOT-YET-WIRED for the other tiers).
