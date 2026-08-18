# CISEM Governance Consolidation — Naming System + Wisdom Architecture + ARCH-00435 Disposition
**Node ID:** CISEM-ARCH-00436 | **Type:** ARCH | **Sub_type:** PLAN
**Status:** PROVISIONAL-ACTIVE
**Planning Status:** AWAITING-BUILDER-REVIEW (Opus Stage-1 soundness + GI-68 dual-review + Governor ratification pending — NOT self-ratified, GI-63)
**depth_level:** L2 | **tags:** [planning-domain, naming, wisdom-architecture, consolidation, disposition]
**goal:** Consolidate and sequence three open governance workstreams into a clear roadmap with individual plan gates per sub-workstream: (1) naming system gaps (10 points); (2) wisdom inheritance architecture (Brain-corrected sequence); (3) ARCH-00435 disposition + RI routing. Each workstream scoped, sequenced, and ready for individual /cisem-plan calls.
**governing corespine:** CS-CREATION-001
**Independent Verifier:** cisem-opus-pe (adversarial review) — see review prompt at dna/queue/ARCH-00436-opus-review-prompt.md

---

## Pocket Declaration (§3.3)
- **reasoning_scope:** roadmap three workstreams; do not implement; sequence and scope only
- **inherited_constraints:** A4/I25 (plan-gate mandatory); A8 (no duplication); GI-63 (no solo ratification of deep-core); Brain corrections: item 53 (restatement ≠ corroboration), item 55 (in-prompt token ≠ control gate)
- **output_contract:** three sequenced workstream scopes + individual plan stubs; one immediate action (ARCH-00435 withdrawal)
- **ai_cannot:** self-ratify; implement without ratified per-workstream plan; override Governor decisions on sequencing
- **recorded_at:** 2026-08-18
- **cal_reference:** CISEM-ARCH-00390 — `bash dna/checks/plan-audit.sh`; [ZF] board reported honestly before any done claim

---

## Existing-First Search (§3.2b — STATED)
- `dna/ssot-registry.yaml` — no existing home for this consolidation
- `dna/naming-registry.yaml` — ARCH-00435 (source of disposition workstream); no ARCH for naming-gap plan or wisdom plan
- Archive — no ruled-out approach for naming automation or wisdom architecture
- Grep — no existing consolidation plan covering these three workstreams together
→ Creating new. ARCH-00435 withdrawal is an ACTION within this plan, not a plan-gate (it reverses a prior plan; archive-ledger entry is the record).

---

## Anti-Scatter Ordering (Principle 16)

Priority by centrality and blast risk:
1. **ARCH-00435 withdrawal** — immediate, no blast, unblocks FINDING 4 clarity
2. **Naming: mechanical gaps** (Points 1, 3, 4 — stale counters + concurrent-write + BP-0005) — foundational; all other naming points depend on the registry being reliable
3. **Naming: registry hygiene** (Points 2, 6, 7, 8 — TYPE registration + naming consistency + 10-spacing + workflow clarity) — medium priority, low blast
4. **Naming: resolution decisions** (Points 5, 9, 10 — RAW↔PURIFIED deeper validation + FOUND/DNA resolution + manifest CI/CD) — lower priority, some involve Governor calls
5. **Wisdom architecture** (Brain's corrected sequence) — longer arc, non-blocking, starts with applicability audit

---

## Workstream 1 — ARCH-00435 Disposition (IMMEDIATE ACTION, no new plan needed)

**Decision needed from Governor:** withdraw vs re-scope.

**Evidence (Opus verified at source):**
- `[EVIDENCE-CLAIM]` STEP 1 ≈ `[DOD]` item (b) at plan-audit.sh:536 — same enforce-word list + diff-scoped + evidence-gate + WARN
- `[DUAL-REVIEW]` STEP 2 ≈ `[RATIFY-GATE]` at plan-audit.sh:668 — already extended by ARCH-00420-PART01 to require GI-68 dual-review citation; the "haiku+sonnet substring" match STEP 2 proposed was **deliberately rejected** as RI-0012 false-pass (comment at ~plan-audit.sh:690)
- ARCH-00433 FINDING 4 was already closed by `[RATIFY-GATE]` before ARCH-00435 was drafted

**Opus recommendation:** WITHDRAW. The class is enforced by [DOD](b) + [RATIFY-GATE]; keeping the plan is the duplication anti-pattern it exists to prevent.

**On Governor ratification of withdrawal:**
- Mark ARCH-00435 Status: SUPERSEDED
- Add archive-ledger entry: DEC-0015 (next_seq 15) — "ARCH-00435 withdrawn; [EVIDENCE-CLAIM] ≈ [DOD](b):536; [DUAL-REVIEW] ≈ [RATIFY-GATE]:668; FINDING 4 already closed; withdrawn 2026-08-18"
- Route RI: "Existing-First for new plan-audit check must read sibling-check BODIES + match fixtures by purpose, not grep bracket-name — functional-duplication-under-different-name is a distinct failure class" → root-insights.yaml as RI-0075

---

## Workstream 2 — Naming System Gaps (10 Points, ARCH-00437 to follow)

**Source:** `dna/learning-registry/CISEM-NAMING-NUMBERING-REPORT-2026-08-17.md` (10 Points for Consideration)

**Scoping decision (Opus):** not one plan — two tiers, because Points 1/3/4 are foundational blockers for everything else.

### Tier A — Foundational (must go first, single plan ARCH-00437)
| Point | What | Why first |
|---|---|---|
| 1 | Stale sequence counter — mechanical backstop | Recurring 3× already; everything else assumes the registry is accurate |
| 3 | Concurrent-write risk — mechanical guard | Same root as Point 1; the ONE-GATE rule isn't enforced if two writers can collide |
| 4 | BP-0005 automation — ID validation + alignment gate | Has been open 4+ weeks; this is the mechanical completion of the one-gate promise |

**Scope of ARCH-00437:** wire a pre-commit check that reads all `CISEM-*` IDs on disk, confirms each is registered in naming-registry.yaml, and flags if `next_seq` is below any found ID. Absorbs BP-0005. Both-directions fixture (RI-0058).

### Tier B — Registry hygiene (ARCH-00438, after Tier A ships)
| Point | What |
|---|---|
| 2 | Add SCHEMA + TEMPLATE-PROTOCOL to official TYPE registry in ARCH-00011 §1 |
| 6 | Build `[NAMING]` consistency check (concept-name drift) |
| 7 | 10-spacing alignment verification — flag if node's sequence doesn't match its declared tree position |
| 8 | Write explicit ID-allocation workflow (when/who reads/increments, audit trail on increment commits) |

### Tier C — Governor decisions + lower priority (deferred, no plan until decided)
| Point | What | Governor decision needed |
|---|---|---|
| 5 | RAW↔PURIFIED deeper validation (de-pollution content check) | Is presence+metadata check sufficient, or build content linter? |
| 9 | FOUND-00001 + DNA-00001 — resolve or leave registered-absent | Is FOUND-00001 ready to create? Should DNA-00001 stay Drive-only? |
| 10 | Manifest auto-generation in CI/CD | Is this a priority given current manual discipline? |

---

## Workstream 3 — Wisdom Architecture (Brain-corrected sequence, ARCH-00439 to follow)

**Context:** CISEM harvests session wisdom every compact but agents only inherit CLAUDE.md (68 KB). 75 RIs, 54 GIs, 4 sessions (663 lines) sit unread. The deep-research workflow + Brain review produced a corrected design.

**Brain's corrections to the original proposal (all accepted):**
- Violation-weighted digest, NOT ANCHOR-weighted — tier says what to trust; violation history says what to say (different questions)
- Tiering needs: source per corroboration (distinctness gate, or you measure repetition), demotion path (`contradicted_by` + demote-on-one-credible-contradiction), consistent units (distinct occasions of application, not sessions)
- Distillation trigger: context budget exceeded OR contradiction observed — NOT quarterly or count threshold
- Applicability audit FIRST: take 10 RIs at random, ask "what action would this have changed on the last turn it applied?" — ones with no answer are commentary, not wisdom. Do this before building any machinery.
- The +13.7%/95-96% token reduction figure does NOT transfer to a 75-entry YAML corpus — decoration; drop it from any design rationale

**Brain-corrected sequence (the plan for ARCH-00439):**
1. **Applicability audit** — 10-RI sample; surface what's commentary vs actionable wisdom; costs an hour, may halve the corpus
2. **Deduplication** — find what percentage of 938 lines is actually distinct before building compression machinery
3. **Source + contradiction fields + demotion rule** — add `corroboration_sources: []` + `contradicted_by: []` + demotion rule (one credible contradiction → CONFIRMED; 3+ distinct sources → ANCHOR)
4. **Violation-weighted digest** — Opus-run: select the most-recently-violated patterns, not the most-stable; 80-line cap; CAL session-start injects it
5. **Replay measurement** — test the digest: does loading it change agent behavior on the known-bad turns from harvest history? This is the only evidence that distinguishes a working system from a well-formatted one
6. **Domain + symptom tags** — tag RIs by both domain AND symptom (so an insight loads on the turn where its symptom fires, not just the session type)
7. **Graph navigation (Graphify)** — defer until flat inventory proves a graph is needed; may be never

**Blocker on Workstream 3:** A11 (Brain consult mandatory before production for architectural decisions). The Brain review IS the A11 consult for the design. ARCH-00439 plan can proceed.

---

## What DOES Change
- `dna/planning/CISEM-ARCH-00435-*.md` → Status: SUPERSEDED (on Governor disposition)
- `dna/archive/archive-ledger.yaml` → DEC-0015 entry
- `dna/learning-registry/root-insights.yaml` → RI-0075 (Existing-First-by-function)
- `dna/naming-registry.yaml` → next_seq ARCH 436→437 (this plan); DEC 15→16
- Three follow-on plans queued: ARCH-00437 (naming Tier A) + ARCH-00438 (naming Tier B) + ARCH-00439 (wisdom)

## What Does NOT Change
- plan-audit.sh — no edits in this roadmap plan
- ARCH-00434 (Plan 1 build) — unchanged, still COMPLETE/awaiting build
- ARCH-00435 body — not edited, only Status field (I7: Opus only)
- Brain's corrections to items 53/55 — already accepted, already in session-close-2026-08-18.md

## Dependencies
- **blocks-on:** Governor disposition of ARCH-00435 (all three workstreams can proceed independently, but withdrawal must be ruled first)
- **unblocks:** ARCH-00437 (naming Tier A) · ARCH-00438 (naming Tier B) · ARCH-00439 (wisdom) — each is a separate /cisem-plan call

## Self-Compliance (ARCH-00230)
Existing-First stated. Tags + Status present. Pocket Declaration present. Independent Verifier named. Under 200 lines.

## Path Rejection Declaration
- ❌ **One omnibus implementation plan** — REJECTED (A4/size gate): scope is too large; roadmap creates the stubs, individual plans implement
- ❌ **Including wisdom + naming in one plan** — REJECTED (§3.6): different risk profiles, different timelines
- ❌ **Re-scoping ARCH-00435 to adjacent-line tightening** — REJECTED (marginal; 74% of dna/**.md already use the vocabulary; noise risk > gain)

## Per-File Alignment Table
| File | ID | Schema | tags | status |
|---|---|---|---|---|
| This plan | ARCH-00436 (436→437) | T-SYS, planning | planning, consolidation | PROVISIONAL-ACTIVE |
| ARCH-00435 | (existing) | — | — | → SUPERSEDED on decree |
| archive-ledger.yaml | DEC-0015 (15→16) | T-SYS, archive | archive | to-add |
| root-insights.yaml | RI-0075 | T-SYS, learning | root-insight | to-add |

## Change log
- v1.0 — 2026-08-18 (Opus): initial roadmap consolidating naming 10 points + wisdom architecture (Brain-corrected) + ARCH-00435 disposition. Three follow-on plans scoped (ARCH-00437/438/439). Awaits Opus adversarial review → GI-68 → Governor ratification.
