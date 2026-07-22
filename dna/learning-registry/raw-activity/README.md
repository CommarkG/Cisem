# Raw Activity — 2-Tier Session Preservation

**tags:** [raw-activity, learning-registry, readme]
**Status:** DRAFT
**last_verified:** 2026-07-22
**Mechanism:** `dna/checks/save-raw-activity.sh`, wired into `.claude/hooks/pre-compact.sh` (CAL, ARCH-00390)
**Governing decree:** Governor 2026-07-21 (RI-0011 counter) + 2026-07-22 (2-tier platform-level enhancement)

## Why two tiers

A single session transcript (`.jsonl`) mixes durable SIGNAL (user intent, assistant reasoning/answers)
with mechanical NOISE (tool_use/tool_result blocks, Bash IN/OUT, file dumps — CLAUDE.md §2 Principle 19).
Keeping only the clean layer risks losing perfect fidelity (audits, replay, dispute resolution); keeping
only the raw layer pollutes the accessible tree with noise nobody reads turn-to-turn. So the mechanism
produces BOTH, each in its proper place:

## Tier 1 — CLEAN (accessible): `raw-activity-<session-id>.md`

- **What:** dialogue-only text — USER messages + ASSISTANT text (reasoning/answers). Tool_use, tool_result,
  Bash IN/OUT, Read/Edit records, and other mechanical noise are stripped.
- **Where:** `dna/learning-registry/raw-activity/*.md` (this directory, top level).
- **Purpose:** THE layer to READ — human-accessible verbatim dialogue, kept out of the noise, for review,
  harvest, and audit.
- **Produced every pre-compact run**; overwrites/refreshes the current session's snapshot (tail of the
  most recent `CISEM_RAW_ACTIVITY_LINES`, default 4000 lines of dialogue).

## Tier 2 — RAW (preserved): `archive/raw-<session-id>.jsonl.gz`

- **What:** the FULL VERBATIM transcript, gzip-compressed. Perfect fidelity — every tool call, every byte,
  nothing dropped or filtered.
- **Where:** `dna/learning-registry/raw-activity/archive/*.jsonl.gz` — deliberately OUT OF THE WAY of the
  accessible tree (a subdirectory, compressed, not meant for routine reading).
- **Purpose:** the "keep the raw version saved" guarantee — if the clean-tier filter ever needs
  re-deriving, or a dispute/audit needs the exact original record, the archive is the perfect-fidelity
  source. Round-trip verified: `gzip -c -d archive/raw-<sid>.jsonl.gz` reproduces the original `.jsonl`
  byte-for-byte (planted-proven at build time, 2026-07-22).
- **Rarely read** — this is cold storage, not a working file.

## Honest gap — no retroactive archive for the 2 existing pre-2026-07-22 snapshots

Two clean-tier `.md` files predate this 2-tier enhancement:
- `raw-activity-4ba9c382-da4a-4215-b20d-db79b3fb2a8a.md` (session 4ba9c382, 2026-07-21)
- `raw-activity-c249d411-23b2-46c5-9695-ddbaf884b7de.md` (session c249d411, 2026-07-21, pre-enhancement runs)

Their original `.jsonl` transcripts were **not retained in-repo** at the time they were produced — only the
filtered clean-tier `.md` was committed. **No `.gz` archive exists for these two sessions retroactively**;
this is disclosed honestly rather than fabricated. The FIRST raw archive under this mechanism is
`archive/raw-c249d411-23b2-46c5-9695-ddbaf884b7de.jsonl.gz`, produced by the enhanced script on 2026-07-22
from that session's transcript as it existed at that time (i.e., it captures the session UP TO that point,
not retroactively earlier turns that were never snapshotted raw).

## Pocket declaration

- **reasoning_scope:** enhance an existing hardwired mechanism (save-raw-activity.sh) to a 2-tier output; document it.
- **inherited_constraints:** CLAUDE.md §1.7 (git-SSOT, stage-specific-files), Principle 18 (no collateral deletion,
  revert-not-repair), Principle 19 (noise-vs-signal), I19 (Existing-First — this IS the existing mechanism, enhanced not duplicated).
- **output_contract:** clean tier behaviorally unchanged; raw tier additive; this README as the 2-tier explanation.
- **ai_cannot:** cannot retroactively manufacture raw archives for sessions whose `.jsonl` was not retained.
- **recorded_at:** 2026-07-22.
