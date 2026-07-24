# Scheduling-capability finding — verified 2026-07-24 (Brain-raised, Opus-verified)
**Provenance:** Brain flagged Claude Code's scheduling primitives (/loop, cron, cloud Routines); Opus verified the
actual environment. **Verified against the tool's own contract + env, not assumed (RI-0025).**

## The finding (definitive)
The cron capability EXISTS here (`CronCreate`/`CronList` load; `CLAUDE_CODE_DISABLE_CRON` unset) **but is SESSION-ONLY:**
its own contract states *"jobs live only in this Claude session — nothing is written to disk, gone when Claude exits…
durable persistence is not available… jobs only fire while the REPL is idle."* Env confirms: `CLAUDE_CODE_ENABLE_TASKS=0`
+ `CLAUDE_CODE_ENTRYPOINT=claude-vscode` (local VS Code, not cloud) → **cloud-hosted Routines (session-independent) are
NOT available in this setup.**

## Conclusion — it does NOT replace a durable scheduler, but the items don't need one
The "declared-not-wired due to no scheduler" items (weekly-evolve drain, RIPL weekly batch, freshness cadence) need to
fire INDEPENDENT of an open session — which the session-ephemeral cron cannot do. BUT they never needed a *clock*; they
need a *mechanical trigger*, and CISEM already has it: **git hooks (CAL), event-triggered, session-independent by
construction.**
- **freshness-check.sh** → a COMMIT-triggered check (compare each governed file's `last_verified` to today, WARN if
  stale). No cron. Fires on every commit. (This is ARCH-00417 S1's mechanism + VOC-00002's declared freshness-check.)
- **weekly-evolve drain / RIPL weekly batch** → an EVENT-triggered "if >N days since last run, fire" check at commit or
  boundary (pre-compact / session-start) — exactly like the ARCH-00370 harvest gate already works.
- This tracks ACTIVITY, not wall-clock (correct: don't drain a backlog nobody is adding to), and is more robust than a
  session-ephemeral cron.

## Routing (for next session)
- Removes the "no mechanical trigger exists → must stay manual" premise from: **ARCH-00417 S1** (freshness), the
  **freshness-check.sh** build, the **RIPL weekly-batch** (ARCH-00406 Phase 1), the **weekly-evolve drain**.
- Design note for those builds: use a COMMIT/BOUNDARY event-trigger (CAL hook), NOT the session-only cron. Reserve the
  cron/`ScheduleWakeup` tool for IN-SESSION reminders only.
- If a TRUE wall-clock cadence (fires with zero repo activity) is ever needed: that requires cloud Routines (unavailable
  here) or an OS scheduler (Windows Task Scheduler) — a separate, Governor-decided path, not assumed.
