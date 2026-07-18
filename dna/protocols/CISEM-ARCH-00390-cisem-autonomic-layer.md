# CISEM Autonomic Layer (CAL) — mechanical enforcement that fires with ZERO instruction
**Node ID:** CISEM-ARCH-00390 | **Type:** ARCH | **Status:** PROVISIONAL-ACTIVE (hooks built + tested 2026-07-18; awaiting foundational decree)
**depth_level:** L1 | **Position in schema:** T-SYS, enforcement/automation layer
**tags:** [autonomic, hooks, mechanical-enforcement, permanence, hardwiring, session-boundary]
**Goal:** Turn CISEM's enforcement + learning from BEHAVIORAL (works only when an agent is told) into
AUTONOMIC (fires automatically, no instruction) — using Claude Code's own native **hooks**. This is what
"hardwired" actually means: mechanical, not a documented intention.
**Existing-First:** searched ssot-registry + ARCH-00320 (checks) + ARCH-00370 (learning-extraction) + .claude/ —
no hook layer existed; ARCH-00370's claimed hooks were never built (the EXISTS≠ACTIVE gap). CAL is that missing mechanism.
**Governs:** `.claude/hooks/` + `.claude/settings.json` + `.git/hooks/pre-commit`.

## Why this exists (the honest lesson)
CISEM repeatedly *named* hooks as "the missing piece" but deferred them — treating a NATIVE tool as risky
(app-builder reflex) and mistaking documents-about-enforcement for enforcement (plausibility-completion bias).
A platform engineer wires the platform's automation primitives by default. CAL is that correction, made permanent.

## The three autonomic triggers (mechanical, no instruction)
| Trigger | Mechanism | Fires | Wiring state |
|---|---|---|---|
| **Commit** | `.git/hooks/pre-commit` → `plan-audit.sh` (8 checks + [ZF] + I13 BLOCK) | every commit | **LIVE** |
| **SessionStart** | `.claude/hooks/session-start.sh` (registered in `settings.json`) — injects inherited preventions + resume path | every session start / resume / post-compact | **LIVE next session** (built+tested) |
| **PreCompact** | `.claude/hooks/pre-compact.sh` — save-all reminder (I20) + runs the [ZF] gate | before every compaction | **LIVE next session** (built+tested) |

Behavioral instructions (Core Seeds, agent BOOTSTRAP) still add value, but CAL makes the floor MECHANICAL:
the inheritance + save-all + ZF gate now fire even if no agent is told.

## MANDATE — CAL must be referenced everywhere (Governor 2026-07-18)
CAL is named + linked in: **CLAUDE.md** (always-loaded), **every plan** (ARCH-00190 plan contents),
**every agent** (`.claude/agents/*`), **every skill** (`.claude/skills/*`), and any QC element. A creation that
touches enforcement/learning without referencing CAL is incomplete. "Hardwired" = wired into CAL, not documented.

## Roadmap (honest — not yet done)
- SessionEnd hook (append a session marker); a hook that VERIFIES the inherited registry was read (RQC learning-application check).
- BLOCK-mode graduation for the pre-commit gate (after ARCH-00320 foundational decree).

## Change log
- v1.0 — 2026-07-18: CAL created + hooks BUILT + TESTED (session-start.sh, pre-compact.sh, settings.json). Turns behavioral enforcement autonomic. Governor: "it is your own tool — build it, name it, reference it everywhere."
