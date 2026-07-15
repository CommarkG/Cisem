# Enforcement Depth — Two Additional Mechanisms
Node ID: CISEM-ARCH-00270
Type: ARCH | Status: PROPOSED | Planning Status: COMMENTS-RECEIVED
depth_level: L1 | Position in schema: T-SYS
tags: [planning-domain, hardcode, enforcement, defense-in-depth]
Goal: The scripts in CISEM-ARCH-00180 only prevent drift if
something actually forces them to run. These two mechanisms close that
gap with two independent, redundant layers.
Governing corespine: CS-CREATION-001
Planning Domain: dna/planning/, per CISEM-ARCH-00190

## Why two, not one
A single enforcement point can be bypassed. Two independent
mechanisms — one local, one remote — mean bypassing one still leaves
the other standing.

## Mechanism 1: Local pre-commit git hook
.git/hooks/pre-commit runs scripts/checks/*.sh against every staged
file before a commit completes. Any non-zero exit blocks the commit.
Bypassable via git commit --no-verify — named honestly, which is
exactly why Mechanism 2 exists.

## Mechanism 2: GitHub branch protection + CI required check
A GitHub Actions workflow runs the same scripts on every push/PR to
main. Branch protection requires this check to pass before merge —
enforced server-side, cannot be bypassed locally.

## Explicitly not proposing yet
Automatic Opus cross-review on every PR — real idea, correctly
deferred: Core-vs-Instance not yet passed, only used once manually.

## Builder comment (2026-07-16) — Planning Status: COMMENTS-RECEIVED
Two-mechanism design is correct. Pre-commit + CI as independent layers
with different bypass resistance addresses the bypassability problem
precisely. The --no-verify disclosure is honest and the CI layer closes
that gap. No changes requested. Ready for Governor design ratification.
