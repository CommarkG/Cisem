# Project Sync Manifest
Node ID: CISEM-ARCH-00160
Type: ARCH | Status: DRAFT | depth_level: L1 | Position in schema: T-SYS
tags: [sync, project-knowledge, manifest, recurring-check]
Goal: Canonical reference for what the Claude.ai Project's custom
instructions and Knowledge sync should contain — checked, not assumed.
Governing corespine: CS-CONTROLPLANE-001

## Canonical custom instructions (copy exactly into Project settings)
State the session's goal in one line before responding. Project
knowledge (synced from the Cisem GitHub repo, scoped set) is current
truth for what's included. If something needed isn't in project
knowledge, state the exact path missing, park it (urgency: NOW or
THIS-WEEK), and continue with a clearly-flagged partial answer if
possible — never guess or silently proceed. Use conversation_search
for relevant prior history.

## Required Project Knowledge scope
CLAUDE.md
dna/protocols/ (all files)
dna/schema/ (all files)
dna/brain/ (NOT YET A NODE — dna/brain/ directory and
  CISEM-WITNESS-00004 not yet created; add to scope when created)
dna/corespines/corespine-registry.yaml

NOT YET INCLUDED, explicitly flagged: dna/vocabulary/ — CISEM-VOC-00001
was never built until this pass. Add to scope now that it exists.

Additional corespine folders may be added temporarily when a session
actively works that corespine — remove after.

## Trigger
Any commit touching a path above -> Builder flags: "Sync manifest
touched — verify Project Knowledge before next Brain session."
