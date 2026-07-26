# Consensus Package for Brain — 2026-07-26
**tags:** [consensus, brain, consultation, package]
**Status:** DRAFT-FOR-CONSULTATION

> Nothing in this document is ratified. It is a reviewable snapshot for the Governor to read, then relay to Brain
> to reach consensus (CLAUDE.md §1.8 process: goal → Opus↔Brain consensus → present plain → Governor ratifies).
> Every link is `https://github.com/CommarkG/Cisem/blob/main/<path>`. Files not yet pushed to `origin/main` are
> explicitly marked **(uncommitted — will 404 until committed)**; files with local uncommitted EDITS on top of a
> committed version are marked **(modified — the newest content is not yet visible at this link)**.

---

## 0. How to use this + priority order
Purpose: one scannable reference the Governor reads once, then relays to Brain for CONCUR/REFINE/DISAGREE per
section. Brain's proposed priority (accept unless a section below flags otherwise): **Loop-stopper +
Consensus-gate (TIER 0) → WEE ratification (TIER 1) → resolve edit-gating explicitly (TIER 1.5) → Governor's 2
personal decisions (tracker build, CoreSpiral) → N1/N3 confirmation → rest of TIER 3-5.**

---

## 1. TIER 0 — protect everything first

**Loop-stopper (RI-0042).** STATUS = PROPOSED design, not built.
WHAT EXISTS = the design in root-insights.yaml RI-0042:
[dna/learning-registry/root-insights.yaml](https://github.com/CommarkG/Cisem/blob/main/dna/learning-registry/root-insights.yaml)
**(modified — RI-0042/0043/0044 are local uncommitted additions; not yet visible at this link until committed)**.
Brain's refine ACCEPTED + folded: (a) no-progress is the AUTHORITATIVE tiebreaker (overrides similarity in both
directions); (b) exemption tied to a REAL background-task handle, never agent self-claim; (c) 3 profiles, a 4th
only from trial data; (d) per-profile no-progress window; (e) + rate-limited polling-interval as a 4th signal.
QUESTION FOR BRAIN: anything still open before this earns its own plan?

**Consensus-gate (RI-0043).** STATUS = PROPOSED. Brain graded it PROCEDURAL-not-mechanical; the real backstop =
the Governor's on-disk-consensus-artifact rule. Proposed form = a `[CONSENSUS-GATE]` self-check + a candidate
output-scanner (shared mechanism family with the loop-stopper — same root-insights.yaml link above). QUESTION: is
self-check + output-scanner enough, or does this need a git-enforceable trace?

---

## 2. TIER 1 — ratification-ready

**WEE plan (ARCH-00426).** STATUS = DRAFT, Opus Stage-1 SOUND-cited-not-yet-independently-verified-here.
[dna/planning/CISEM-ARCH-00426-weekly-evolution-engine.md](https://github.com/CommarkG/Cisem/blob/main/dna/planning/CISEM-ARCH-00426-weekly-evolution-engine.md)
**(uncommitted — will 404 until committed)**. Both design calls resolved (fixed constants now; scoped/persistent
WARN, not full block). Ready for the Governor's one plain page after Brain's final concur.
5 layers in brief: **L1 SCAN** (enhances the already-LIVE `session-start.sh` injection) → **L2 QUEUE** (adds
`pe_score`/`propagation_required`/`propagation_verified` to the RIPL vault + a new dedup check) → **L3 BATCH**
(rate-limited weekly drain, 3-5 findings/session, escalates after 2 un-processed sessions) → **L4 GATE**
(a finding is only "resolved" once it propagated to all 4 Principle-17 surfaces, tier-separated verification) →
**L5 AUTO-TRIGGER** (scheduled scan+queue only, git-report-only, NEVER writes governance root — honestly labeled
NOT-YET-WIRED pending confirmation the platform's scheduled-trigger primitive exists).

---

## 3. TIER 1.5 — the edit-gating answer (Brain flagged it dropped)

**Edit-gating (RI-0036).** Honest answer — NOT folded, NOT lost: it lives in ARCH-00420 MASTER as item **A3 →
"DESIGNED, awaiting build" → ranked #2**:
[dna/planning/CISEM-ARCH-00420-MASTER-consolidated-backlog-program.md](https://github.com/CommarkG/Cisem/blob/main/dna/planning/CISEM-ARCH-00420-MASTER-consolidated-backlog-program.md)
(committed). It was dropped from a prior turn's pending LIST (an Opus omission), now corrected here. Approach = a
structured `modified_by_plans:` field (append-only, extends the existing `authorizing_plan`/lineage precedent —
NOT commit-message parsing, which is the RI-0012 anti-pattern that already recurred 3×) + a commit-time scope
check reusing creation-gate's governed-set, extending PART08. QUESTION: confirm it re-enters the active queue at
its P2 slot.

---

## 4. TIER 2 — Governor's personal decisions

**Approve-gated Stage Tracker (Brain's proposal):** the Consensus Digest Protocol + a tracker card that cannot
show "Ratified" without the Governor's explicit click. Awaiting his go-ahead.

**N9 / GI-19 CoreSpiral:** P0 founding keystone, the Governor's authorship only —
[dna/CISEM-FOUND-00001-founding-node.md](https://github.com/CommarkG/Cisem/blob/main/dna/CISEM-FOUND-00001-founding-node.md)
(committed) — a standing wait on him, not a backlog item to schedule.

---

## 5. THE RESEARCH CORESPINE (CS-RESEARCH-001) — the big new proposal

Two placeholder files (both **uncommitted — will 404 until committed**):
[research-corespine-PLACEHOLDER.md](https://github.com/CommarkG/Cisem/blob/main/dna/corespines/CS-RESEARCH-001/research-corespine-PLACEHOLDER.md)
+ [research-hierarchy-tree-PLACEHOLDER.md](https://github.com/CommarkG/Cisem/blob/main/dna/corespines/CS-RESEARCH-001/research-hierarchy-tree-PLACEHOLDER.md).

- **Goal:** turn research from ad-hoc AI freestyling into governed CISEM infrastructure — ONE inheritance chain
  every research act obeys.
- **10-item Universal Core** (every research act inherits, L1 always): 1 tier-routing (Haiku/Sonnet gather, Opus
  gap-fills only, RI-0044) + gradual sets/loops with cross-model comparison; 2 The Wall (A12, used-max/trusted-zero);
  3 source-not-paraphrase + verify-pinned-artifact (RI-0025/0038); 4 evidence-not-conclusion (no verdicts from
  research, only Opus verdicts); 5 cited+dated+confidence-tagged; 6 gap-driven + Gate-0 goal-first; 7
  self-improving + cross-improving (a caught miss hardcodes into the researcher's own prompt AND propagates to
  sibling research agents); 8 harvest-to-durable-home (signal-not-noise); 9 version everything (never overwrite);
  10 predefined periodic analysis (pattern-recognition across all versions, updates the hierarchy tree).
- **B1-B4 branches:** B1 External-Tool/Dependency research; B2 Method/Design research; B3 Internal/Repo research
  (Existing-First); B4 Domain/Knowledge research (two-stage intake + PAE purify).
- **PE-supported Research Orchestrator** (`/cisem-research`-shaped, mirrors `/cisem-plan`): take a
  question/gap → decompose into gather-lanes → dispatch Haiku/Sonnet in parallel (carrying the RI-0042 loop-guard)
  → collect+dedup → hand Opus/PE the coverage map → Opus judges coverage, names gaps, gap-fills or re-dispatches →
  synthesize → route to consumer (plan / knowledge-library) + fire self/cross-improvement.
- **SETS/LOOPS + CROSS-MODEL blind-spot mechanism (CR-3):** research runs in gradual iterate-compare-refine
  loops; the SAME question run by different models/passes — divergence reveals blind spots, which get hardcoded
  as prompt enhancements and propagated to sibling researchers.
- **VERSION-EVERYTHING + PERIODIC PATTERN-ANALYSIS + hierarchy tree (CR-4):** every research output versioned,
  never overwritten; a scheduled analysis pattern-recognizes across all versions and grows the tree from evidence
  (root → branch → instance), never hand-designed ahead of use.
- **Cross-improvement upgrade:** the single-agent self-improve loop already present in `cisem-haiku.md` (a miss
  appended to that agent's own prompt) but NEVER fired and NOT cross-agent — upgraded here to cross-agent
  hardcoded propagation (a miss any researcher catches improves ALL sibling researchers' prompts).

**OPEN DESIGN GAP (flagged, not resolved):** the corespine-registry's `content_location.canonical_file` field is
SINGULAR, but this corespine has 2 files (corespine + hierarchy tree). Registry entry:
[dna/corespines/corespine-registry.yaml](https://github.com/CommarkG/Cisem/blob/main/dna/corespines/corespine-registry.yaml)
**(modified — the CS-RESEARCH-001 entry is a local uncommitted addition; not yet visible at this link)**. Options:
add a `companion_files:` field at ARCH-00394 promotion, or fold the two into one file. Not decided here.

QUESTIONS FOR BRAIN: (1) is the 10-item core complete, or over-built? (2) the cross-agent prompt-hardcoding —
bloat/drift risk over time, and what guard (size cap? periodic prune?) should bound it? (3) does the orchestrator
shape hold, or does it need its own dedicated agent rather than a skill mirroring `/cisem-plan`?

---

## 6. "NO RUSH" → PARK → WEEKLY ANALYSIS (the patience engine) — enhancement proposal

Recorded VERBATIM as PROPOSED (not yet a plan):
1. **No Rush = default posture** — non-essential / in-flight-incomplete / under-load → PARK; SWIFT only for
   safe-high-value-now (existing CLAUDE.md §2.7).
2. **Park = accumulator** — priority · essential(y/n) · timeframe · depends-on (existing `dna/queue/` shape).
3. **The Weekly Engine (ARCH-00426) = processor of ALL accumulated things** — parks/RIs/GIs/research/decisions,
   not only findings.
4. **A DEFINED SWIFT trigger:** act now iff `{zero-blast AND high-value AND essential/time-critical}`, else park —
   the trigger itself is reviewed weekly, not fixed forever.
5. **THREE analysis scopes:** per-topic (is this park ripe?) · per-group (shared-root items a single fix ripples
   across — core-first) · all-together (holistic pattern recognition across the whole accumulator).
6. **Output = PRESERVE the good + PREVENT (class-level guards) + ripe-park → plan.**

Note: the research corespine's item-10 periodic analysis (§5 above) is a SPECIALIZATION of this same engine (A9
synergy — one mechanism, two applications). QUESTION FOR BRAIN: is this the right structure, and what specific
analyses belong in each of the 3 scopes?

---

## 7. TURN-OPTIMIZATION — make the most of each turn, permanent

Recorded as PROPOSED: every Opus↔Brain↔Governor turn maximizes value via (1) BATCH topics per packet (Brain's
Consensus Digest); (2) ONE-CLICK Brain block every time (already hardwired, presentation-preferences); (3) DIGEST
format (issue/resolved/open/one-rec); (4) ANTI-SCATTER significance-ranking (CLAUDE.md Principle 16); (5)
HARVEST-each-turn (CLAUDE.md Principle 21); (6) CONSENSUS-GATE before any ratification ask (RI-0043, §1 above).
QUESTION: refine the per-turn standard, or is this list complete?

---

## 8. SHARING ELEMENT (Opus↔Brain) — enhancement

**STATUS:** 100% manual relay today — CLAUDE.md §1.8:
[CLAUDE.md](https://github.com/CommarkG/Cisem/blob/main/CLAUDE.md) (committed) — "the Governor RELAYS one-click
packets between Opus and Brain"; no automation exists.
**PROPOSAL:** a git exchange-file bus (OUT packets + IN replies as versioned repo files, A12-quarantined as
external content) — the first wall-safe brick; a Drive mirror would be a LATER step needing the Governor's
explicit MCP exception (blocked by the standing no-MCP decree, GI-51). Brain's own reply confirmed it cannot
remove the Governor as relay but CAN cut frequency + reading-load via the Consensus Digest + the tracker-as-
review-surface (§4 above). QUESTION: is a git exchange-file bus worth building over pure manual relay, and what
is the A12 risk of a file-bus (does it stay behind the wall, or does Brain's content need a promotion checklist
before Opus reads it as trusted)?

---

## 9. TIER 3-5 — carried backlog (one line + link each)

- **N1 · WALL axiom** — A12 RATIFIED (CLAUDE.md §2.4) but the FOUND-00001 SSOT entry is still PLACEHOLDER, needs
  filling: [dna/CISEM-FOUND-00001-founding-node.md](https://github.com/CommarkG/Cisem/blob/main/dna/CISEM-FOUND-00001-founding-node.md).
- **N3 · Graphify** — BUILT+WIRED, ARCH-00425 RATIFIED, `graphify-query.sh` live — CONFIRM:
  [dna/planning/CISEM-ARCH-00425-graphify-max-isolation-adoption.md](https://github.com/CommarkG/Cisem/blob/main/dna/planning/CISEM-ARCH-00425-graphify-max-isolation-adoption.md) ·
  [dna/checks/graphify-query.sh](https://github.com/CommarkG/Cisem/blob/main/dna/checks/graphify-query.sh) ·
  original adoption plan (RATIFIED, build-halt superseded by 00425):
  [dna/planning/CISEM-ARCH-00422-graphify-adoption.md](https://github.com/CommarkG/Cisem/blob/main/dna/planning/CISEM-ARCH-00422-graphify-adoption.md).
- **N2 · Self-describing manifest** — concept only, RI-0037:
  [dna/learning-registry/root-insights.yaml](https://github.com/CommarkG/Cisem/blob/main/dna/learning-registry/root-insights.yaml)
  (modified — see §1 note; RI-0037 itself predates this session's uncommitted edits, but the file as a whole
  carries local changes right now).
- **N6 · Pre-Goal Triage** — open, needs the hard carve-out; tracked in ARCH-00420-MASTER (link in §3).
- **N7 · ID-collision/naming-drift** — housekeeping; tracked in ARCH-00420-MASTER (link in §3) +
  [dna/naming-registry.yaml](https://github.com/CommarkG/Cisem/blob/main/dna/naming-registry.yaml)
  **(modified — local uncommitted allocation edits)**.
- **Follow-ons:** ARCH-00422 regex (named, see N3 link above) · plan-audit O(n²) perf, RI-0041b (identified, not
  fixed — same root-insights.yaml link) · 2 uncommitted raw-activity files, safe to commit:
  [raw-activity-80182537-....md](https://github.com/CommarkG/Cisem/blob/main/dna/learning-registry/raw-activity/raw-activity-80182537-698e-4637-8659-1d387ed983f1.md)
  **(uncommitted)** +
  [archive/raw-80182537-....jsonl.gz](https://github.com/CommarkG/Cisem/blob/main/dna/learning-registry/raw-activity/archive/raw-80182537-698e-4637-8659-1d387ed983f1.jsonl.gz)
  **(uncommitted)**.
- **Tier-5:** GI-51 durable-wiring (no-MCP decree, still chat/IBD-only, not in the always-loaded layer):
  [dna/governor-insights.yaml](https://github.com/CommarkG/Cisem/blob/main/dna/governor-insights.yaml) ·
  `corespine-bodiless.sh` (BUILT, WARN-only):
  [dna/checks/corespine-bodiless.sh](https://github.com/CommarkG/Cisem/blob/main/dna/checks/corespine-bodiless.sh) ·
  CS-THRESHOLD / CS-MASTER-VALIDATION pointer-manifests (RATIFIED):
  [dna/corespines/CS-THRESHOLD-001/CISEM-ARCH-00424-threshold-corespine-manifest.md](https://github.com/CommarkG/Cisem/blob/main/dna/corespines/CS-THRESHOLD-001/CISEM-ARCH-00424-threshold-corespine-manifest.md) ·
  [dna/corespines/CS-MASTER-VALIDATION-001.md](https://github.com/CommarkG/Cisem/blob/main/dna/corespines/CS-MASTER-VALIDATION-001.md) ·
  GI-30 mis-cite (same governor-insights.yaml link above) ·
  PART14 `[CHECK-LINT]` — NOT YET A FILE, tracked as ARCH-00420-MASTER item #3 (link in §3) ·
  ARCH-00330 minitree (DRAFT):
  [dna/protocols/CISEM-ARCH-00330-mini-tree-protocol.md](https://github.com/CommarkG/Cisem/blob/main/dna/protocols/CISEM-ARCH-00330-mini-tree-protocol.md) ·
  GI-68 review of 00270v2/00418/00419:
  [dna/planning/CISEM-ARCH-00270-enforcement-depth-plan.md](https://github.com/CommarkG/Cisem/blob/main/dna/planning/CISEM-ARCH-00270-enforcement-depth-plan.md) ·
  [dna/planning/CISEM-ARCH-00418-finish-line-dod-upgrade.md](https://github.com/CommarkG/Cisem/blob/main/dna/planning/CISEM-ARCH-00418-finish-line-dod-upgrade.md) ·
  [dna/planning/CISEM-ARCH-00419-planning-marker-pipeline-view.md](https://github.com/CommarkG/Cisem/blob/main/dna/planning/CISEM-ARCH-00419-planning-marker-pipeline-view.md) ·
  `freshness-check.sh` (not built, no file yet) ·
  F-RECON / educational-template / turn-cadence — all tracked in ARCH-00420-MASTER (link in §3) ·
  GI-15 / GI-18 (decreed-not-wired, same governor-insights.yaml link above).
- Stale queue index for context: [dna/queue/README.md](https://github.com/CommarkG/Cisem/blob/main/dna/queue/README.md) (committed, flagged stale — stops at BP-0008).

---

## 10. What Brain should return

CONCUR / REFINE / DISAGREE per section (1-9) + a confirmed priority order. Nothing here is ratified; the complete
PLAN for each item is drafted THROUGH consensus (not before it), then the Governor ratifies.
