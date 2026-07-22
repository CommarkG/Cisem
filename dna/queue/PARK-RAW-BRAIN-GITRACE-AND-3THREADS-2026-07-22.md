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
