---
tags: [park, raw-capture, brain, git-race, worktree, corespiral, scope-sizing, batching, TRIGGER-AFTER-COMPACT]
Type: QUEUE | Sub_type: RAW-EXTERNAL
Status: RAW-CAPTURE (Brain content, verbatim-signal) — ACTIVATE AFTER COMPACT
source_trust: EXTERNAL-REVIEWED | alignment: predates-this-commit (Brain flagged sync-lag on efb1e0b)
last_verified: 2026-07-22 | freshness: FRESH
TRIGGER: on resume, read this + PARK-BATCHING-CORESPIRAL-CYCLE-SCOPING; the git-race fix (A/B) is buildable NEXT session.
---

# RAW — Brain: git-race fix + the 3-thread split (ACTIVATE AFTER COMPACT)

## GIT-RACE FIX (Brain — two failure modes, one root)
Two distinct symptoms, same root (multiple agents sharing ONE working dir + ONE branch ref, no coordination):
1. **Index contamination** — one agent's `git add -A`/`git add .` sweeps another's uncommitted changes (the file-sweep collisions).
2. **Ref contention** — two processes move `refs/heads/main` at the same instant; git's lock rejects the 2nd (the ref-lock fail).

**Options (engineering cost order):**
- **A — Lockfile mutex (cheapest, wire TODAY):** any agent about to add/commit/push first `flock`s a dedicated lockfile
  (e.g. `dna/checks/.commit.lock`), releases after push. Serializes only the write moment; narrows but doesn't fully close
  the index-contamination window.
- **B — Git worktrees per agent + one serialized merge (RECOMMENDED, build next session):** each concurrent agent works in
  its own `git worktree` (separate dir + index, same object store, own branch `agent/<tier>-session-N`). Eliminates BOTH
  symptoms (separate indexes = no staging contamination; separate refs = no ref contention). Opus does ONE serialized merge
  step, one branch at a time, fixed order, with a completeness check after each merge before the next. = CISEM's "strict
  sequencing" relocated to the integration point (where it's needed), not the whole workflow (which was the slowness).
- **C — Commit-broker/queue (only if 5+ agents):** agents write output to a staging area; one process drains + commits
  sequentially. Most robust, most cost. Overkill at 2-3 agents.
- **Recommendation: A now + B next.** Don't skip A — the merge step still writes a shared ref and needs the same lock (a floor even inside worktrees).

**Post-window COMPLETENESS CHECK (Brain — Principle 17):** "no data lost but that was luck" = asserted, not verified. After
any multi-agent commit window, DIFF the expected output set (files each agent was to produce) vs what's in the resulting
commit; FAIL LOUD if anything missing. Turns "we got lucky" into "we verified nothing dropped" (I23-shape).

**PLAN-AUDIT PERF FIX (Brain — the timeout as raw-activity grows):** don't re-scan the raw archive every run — EXCLUDE
archived/raw paths from plan-audit's live scan entirely (frozen, already-checked) + scan only new/changed since last run. Cheap, no design debate.

## THE 3-THREAD SPLIT (Brain — one instinct, three separable; don't let the hardest dilute the sharpest)
- **Thread 1 — git-commit-as-reset-point → concurrent-agent SEQUENCING.** Batch→complete→commit→next = strict sequencing;
  a commit is a natural reset point (committed=durable / uncommitted=contested); sequencing so only one agent holds
  uncommitted state removes the race STRUCTURALLY. **Near-solved** (the A/B design above); mostly implementation now.
- **Thread 2 — CoreSpiral: cycle-closes-on-verified-commit.** A hardwiring candidate: a CoreSpiral cycle (Cc1, Cc2...)
  closes ONLY on a clean, verified commit — mirrors the corespine seal-check's "evidenced trial before sealing", applied to
  cycle boundaries. NOT yet designed → dedicated CoreSpiral design pass (FOUND-00001 CoreSpiral slot, alongside Cc1/Cc2 work).
- **Thread 3 — SCOPE-SIZING heuristic (length × complexity × reviewer-bandwidth).** THE genuinely open one, hardest: how big
  a batch before a stop-and-commit. NOT one formula (length + complexity don't collapse to a number; "knowing my limits" =
  GOVERNOR-side review-bandwidth, not model-computable). Brain's honest read: **may NOT fully mechanize** — treat as an
  operating discipline to develop EMPIRICALLY (try a scope → was it reviewable-in-one-sitting? → adjust), not a formula to
  derive up front. Its own future consult once T1/T2 mature; don't let it block them.

## OPUS NOTE
Brain split my one park into 3 — correctly (T3 is the hard one hiding inside T1/T2). Fold this into
PARK-BATCHING-CORESPIRAL-CYCLE-SCOPING after compact. The git-race fix (A now / B next) is the first concrete build.
More raw Governor content INCOMING — this file is the pattern (raw-capture + TRIGGER-AFTER-COMPACT).

## ADDENDUM (Brain) — Thread 1 generalized: THE PRINCIPLE + 10 applications
**THE GENERAL PRINCIPLE (state ONCE, at principle level — NOT 10 separate hardwirings, which would fork; = 1 principle +
10 applications, a smaller maintainable surface):** **"SINGLE-UNIT-IN-FLIGHT PER PROCESS LANE"** — in any process where
multiple parts can run before any is verified, CAP it: do NOT open unit N+1 until unit N is VERIFIED (not just started).
Reset point = a clean/verified commit.

**The 10 candidate lanes (each: the overload it prevents → its reset point) — targeted, not a blanket slowdown:**
1. **Planning** — phase N's SOUNDNESS review completes before phase N+1 is DRAFTED (not just built) → no compounding on an unverified assumption.
2. **Implementing** — one component builds → passes functional-check → commits, before the next starts (the git-race case; already converged).
3. **External review rounds** — round N fully purified + folded into SSOT before round N+1's raw input is requested → no purification backlog.
4. **Session learning harvest** — harvest write VERIFIED before the next session/tab starts new work → upgrades the existing PreCompact WARN toward a hard gate.
5. **Corespine sealing** — one corespine's full seal-check (incl. evidenced trial) completes before the next opens → no rushed/skipped trials.
6. **Class-wide frontend rollout** — verify an invariant on one page-group (incl. behavioral test) before extending → DEFECT→CLASS-AUDIT applied PROACTIVELY at creation, not reactively at fix.
7. **Naming/numbering allocation** — single-writer lock per session: one actor allocates + commits naming-registry before any other allocates (the confirmed Brain/Builder collision).
8. **Drive/GitHub sync** — one sync direction completes + verified before the next cycle triggers → no overlapping runs.
9. **Governor ratification queue** — CAP open-awaiting-Governor items to what the Governor can genuinely review in ONE sitting → this is where Thread 3's "knowing my limits" becomes ACTIONABLE (counters the terse-proceed trap, Principle 20).
10. **Axiom/constitutional propagation** (A11's own rollout) — one axiom's FULL propagation (through ARCH-00406) completes + verified before the next axiom is opened for consult → no half-wired axioms (the declared-vs-wired gap).

**Opus note:** #9 is the concrete handle on Thread 3 (Governor review-bandwidth) + directly relevant to THIS session (many open-awaiting-Governor items stacked). #2/#7 are the git-race. Fold the PRINCIPLE ("single-unit-in-flight per process lane") into the batching/CoreSpiral deep-dive as the PARENT; the 10 are its applications. Not self-ratified — scope/priority is Thread-3's open question applied recursively.
