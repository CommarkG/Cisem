# Brain-CISEM Alignment Plan — Full Consolidation
Node ID: CISEM-ARCH-00150 (sparse numbering, first allocation)
Type: ARCH | Status: DRAFT | depth_level: L2 | Position in schema: T-SYS
tags: [alignment, brain, project-sync, learning-loop, consolidated-plan]
Goal: Single authoritative plan for how Brain, Builder, and the GitHub
repo stay coherent — replacing every prior partial proposal.
Governing corespine: CS-CONTROLPLANE-001

## 1. Problem Definition
Five recurring failures: dual/unclear source of truth (Drive vs
GitHub); naming/numbering drift (CS-/SOL-/SCHEMA-/TEMPLATE-PROTOCOL
used unregistered); context loss across long conversations; mobile/
async progress needs; human-dependency in edge cases.

## 2. Solutions Surfaced and Rejected — hardwired, not silently dropped
Every rejected idea is a Learning Loop input (CS-LOOPS-001 ->
learning-loop branch, status: PENDING-SORT — branch is registry-only,
no content yet, flagged not assumed), tagged [rejected-idea,
learning-input], status REJECTED-LOGGED, saved to git only.

- Drive mirror of registry files: solved a problem GitHub Project
  Knowledge integration already solves better
- GitHub Action syncing repo to Drive: unnecessary once native sync confirmed
- Raw GitHub URL fetch via web_fetch: technically broken, private
  repo requires auth headers web_fetch cannot supply
- Claude Code Remote Control as primary mobile mechanism: requires
  live reachable local machine, wrong fit for async use
- Custom Cloudflare Worker + mobile web page: superseded by Telegram-
  MCP pattern, parked not built
- Repomix-style full-codebase packing: rejected on principle, recreates
  the monolithic-vocabulary anti-pattern already fixed once
- Full unscoped repo sync into Project Knowledge: rejected, "Lost in
  the Middle" retrieval-degradation risk as repo grows
- "Rehost Brain in a hardcoded shell": not possible, Brain has no
  runtime to wrap; corrected to a script calling the API directly
  with mechanical validation
- Brain directly controlling a fleet of agents: not possible, no
  mechanism exists for this; Builder owns any subagent fleet
- "AI Profiling exists but forgot which files were reviewed":
  corrected via direct re-audit

## 3. Approved Design
SOURCE OF TRUTH: GitHub (CommarkG/Cisem), unconditionally, for everything.
BRAIN: Project Knowledge, SCOPED sync only (CLAUDE.md, dna/protocols/*,
dna/schema/*, dna/corespines/corespine-registry.yaml). Custom
instructions short, goal-first. Manual "Sync now" after commits.
BUILDER: Full repo, real git access. Maintains the Sync Manifest.

## 4. Roles
Governor — ratifies, holds credentials, sole merge authority.
Brain — architecture, brainstorming, review; never self-certifies.
Builder — executes, commits, runs mechanical gates, maintains Sync
Manifest, participates in Learning Loop.

## 5. Sync Manifest
Builder has no API access to inspect Claude.ai Project settings
directly — this is a canonical-reference-and-reminder mechanism, not
a live audit. CISEM-ARCH-00160 contains the canonical instructions
text and required Knowledge scope. Trigger: any commit touching a
scoped path flags "verify Project Knowledge before next Brain session."

## 6. Edge Cases
6.0 Handoff Verification Gate (hardwired, permanent): a batch from
Brain is NEVER considered committed until Builder runs git log/git
status, reports the commit hash, and that confirmation is actually
SEEN before any further content is built on top. Brain-side rule
(CISEM-LOAD-00002 NOT YET A NODE — pending creation, Principle #7):
"presented for download" is never evidence of "committed."

6.1 Missing context, no human present: Park+Escalation per
CISEM-ARCH-00013 (NOT YET A NODE — pending creation), extended with
urgency-window escalation.

6.2 Naming drift recurrence: naming-registry.yaml catalogues every
known pattern; new unregistered prefix is a Park-triggering event.

6.3 Multi-session conflict: resolved this session by Governor
decision; going forward, conflicting content on the same node
triggers Look-back Audit automatically.

6.4 Context window degradation: addressed by keeping Brain's sync
scoped, not by hoping retrieval stays accurate at scale.

## 7. Claude Code's Role in the Learning Loop
Builder is not just an executor — per CS-AI-PROFILING-001, every real
behavior incident (self-correction, scope-restraint, dependency
resolution) is a profiling data point, ongoing not one-time. Feeds
Weekly/Deep-Dive Loop for pattern recognition once scheduled. Builder
is explicitly encouraged to flag new failure classes as it finds them.

## 8. What Would Be Useful for Claude Code Specifically
A real constraint-set.yaml (permanent growing ai_cannot list, not yet
built). The Sync Manifest as a concrete file to maintain. Explicit
permission to flag Brain's own drift when Brain's instructions
conflict with the registry.
