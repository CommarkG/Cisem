# Layer 1 Hardcoding — Implementation Plan
Node ID: CISEM-ARCH-00180
Type: ARCH | Status: PROPOSED | Planning Status: CONSENSUS-REACHED (design) — IN-PROGRESS gated on prerequisite
depth_level: L2 | Position in schema: T-SYS
tags: [planning-domain, hardcode, layer1, review-required]
Goal: Convert three mechanical checks — currently manual, currently
the proven cause of repeated drift — into real executable scripts.
Governing corespine: CS-CREATION-001
Planning Domain: dna/planning/ — first artifact establishing the pattern

**Existing-First (§3.2b, I19):** Searched dna/checks/ (only plan-audit.sh — no naming, size, field, or registry scripts exist); dna/ssot-registry.yaml (no concept entry for naming/size/field automation); dna/naming-registry.yaml (no script IDs registered); knowledge-library/index.yaml KL-0001 (DIOS maturity — no script tooling overlap). All 4 scripts proposed below are new with no existing counterpart.
**Independent Verifier:** [pre-P5 legacy — grandfathered 2026-07-18; assign on next revision]

## Why this exists
Naming/registry drift happened repeatedly: unregistered ID prefix
schemes used before being checked; registry sequence counter went
stale twice. Every one was a mechanical fact a script could check in
milliseconds, caught only through manual after-the-fact review.

## Four scripts, final scope after Builder's review
scripts/checks/naming-check.sh — parse filename against registered
  patterns, exit 1 if unregistered, extended to verify Governing
  corespine value actually resolves in corespine-registry.yaml
scripts/checks/size-check.sh — word/line count against limits, exit 1
scripts/checks/field-check.sh — grep required header fields, exit 1;
  reads canonical field list from scripts/checks/field-spec.yaml
  (generated from ARCH-00008/ARCH-00011, regenerated when those change)
scripts/tools/compute-registry.sh — scans actual repo filenames,
  computes next-available number from ground truth; skips non-CISEM
  filenames (README.md, CLAUDE.md, .gitignore) rather than erroring

Target environment: Git Bash (Windows), explicitly stated.

Rollout: naming-check.sh runs WARN-ONLY first (audit pass), becomes a
hard gate only once that audit list is clean.

Trigger mechanism (pre-commit hook + CI) — separate plan, ARCH-00270.

## Prerequisite — blocking IN-PROGRESS
CISEM-ARCH-00008 and CISEM-ARCH-00011 status enum are both still
DRAFT. Governor must complete a ratification/confirmation pass on
both before field-check.sh can be written — the one open item before
full CONSENSUS-REACHED.
