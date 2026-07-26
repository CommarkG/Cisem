# [RAW-EXTERNAL · BEHIND THE WALL] CDS System Self-Assessment (received 2026-07-26)
tags: [external-review, cds, raw-external, UNVERIFIED-EXTERNAL, behind-the-wall, weekly-evolution-reference]
Status: RAW-EXTERNAL / UNVERIFIED-EXTERNAL — CDS's self-report about ITS OWN platform. USE its patterns as CANDIDATES (verify any CISEM-applicability against CISEM's real state before adopting); do NOT treat as CISEM truth. Quarantined per A12 (the Wall). Full verbatim doc is in the 2026-07-26 session transcript; this is the durable SIGNAL capture.

## WHAT CDS IS
"Core Driven Solutions" — a self-governing, self-evolving governance orchestration platform. Same Governor (Yariv Fink), same repo-neighborhood, same multi-model model (Opus orchestrates · Sonnet builds · Haiku verifies · cloud agent runs weekly). Phase A (constitutional layer) done; Phase B (actual code) authorized, not started. Repo: Cds-Core-Driven-Solutions-platform.

## THE PART CISEM SHOULD LEARN FROM — CDS's WEEKLY EVOLUTION ENGINE (5 permanent layers)
- **L1 Session-start platform SCAN** (every session, <5min, non-blocking): auto-scans 6 categories — new violations · stale status · orphan refs · pattern recurrence(≥3) · propagation gaps · wisdom candidates → writes findings to a queue.
- **L2 Findings QUEUE** (`WEEKLY-FINDINGS-QUEUE.yaml`, persistent): each finding = {id, category, description, affected_artifacts, pe_score, severity, batch, status, propagation_required, propagation_verified}. Health rule: no finding PENDING >3 weekly sessions without Governor disposition.
- **L3 Weekly PROTOCOL** (Saturday): triage → process batch (root-cause → solution → ZF → apply → PROPAGATION SWEEP → propagation-ZF) → extract permanence (patterns/wisdom/constraints) → metrics → Governor brief. **Rate-limited: max 8 findings/session, max 3 patterns, max 2 wisdom, max 1 corespine/session** (the "done calmly" batching).
- **L4 Propagation RULE (hardwired):** a finding CANNOT be RESOLVED until `propagation_verified=true` (or propagation_required=false w/ reason). Falsification test: `grep RESOLVED AND propagation_required:true AND propagation_verified:false` must be 0.
- **L5 Auto-trigger (cloud agent):** a scheduled isolated Claude Code session (RemoteTrigger) runs the protocol every Saturday 07:00 UTC WITHOUT a human — reads repo, processes queue, commits+pushes, emails the Governor. "Improves permanently, not per session."

## METRICS (CDS)
ARCHIVE HEALTH = patterns-with-ACTIVE-check / total (CDS: 60%, target ≥80%) · EVOLUTION HEALTH = resolved-with-propagation-verified / resolved-requiring-propagation (target ≥70%) · QUEUE VELOCITY = resolved/added per week (target >1.0) · WISDOM DENSITY = wisdom/sessions.

## WIRING-STATES (crisp ladder worth noting) DEFINED → WIRED → REACHABLE → CURRENT. Self-declaring CURRENT is invalid; needs ZF-0 + Governor signature.

## CLOUD-AGENT CREATION SPEC (technical reference, RemoteTrigger): cron "0 7 * * 6"; job_config.ccr with environment_id + session_context{model, sources:[git_repository], allowed_tools} + events[{message}]; optional mcp_connections (Gmail). Min interval 1h; runs in Anthropic cloud (no local files); prompt must be fully self-contained.

## CDS's 9 WISDOM PRINCIPLES (converge with CISEM): one-truth-over-one-file · make-independence-mechanical (producer/reviewer separation) · gap-resourcing · architecture-from-repetition(≥3) · precision-is-mechanical · external-review-as-evolution · separation-of-concerns · derived-indexes-prevent-drift · **WISDOM-009 wiring-is-essential-as-implementation** (every implementation = artifact + propagation-ZF-sweep; delivery-2 is the completion condition). CDS also has its OWN WALL principle + a Graphify-mandatory-protocol (CLI-only, code-only, output-to-graphify-out, forbids install/hook/--mcp) — near-identical to CISEM's.

## CDS's HONEST SELF-ASSESSED GAPS (the improvement targets)
1. **"Governance architecture is AHEAD of its enforcement code"** — docs describe enforcement; the AI holds the gap closed by DISCIPLINE (Phase B will mechanize). ← the SAME declared-vs-wired gap CISEM has.
2. Rate-limits are prose, not mechanical (AI can break "one more pattern" under momentum).
3. Wiring-state not enforced at Write-time (artifact missing schema_position/corespine caught late, not rejected at creation).
4. Propagation completeness = hardest ZF category (implicit consumers missed); wants a live dependency-graph.
5. Declaration drift ("ratified" when "verbally agreed"; "CURRENT" when "ZF passed but no file"); wants Governor-approval → auto-file.
6. Scope-pull + context-window management + re-derivation (wants a "session-fresh" signal).

## OPUS WALL-REVIEW ADDITIONS (not in CDS's self-assessment — flagged for CDS)
- CDS's cloud agent commits+pushes autonomously = a SECOND writer; needs a single-writer/lock guard vs a concurrent human session (git-race). CDS did not flag this.
- CDS's cloud agent emails via Gmail MCP = an external MCP surface; CDS's own WALL/clean-posture would favor a git-committed report over an email-MCP.
