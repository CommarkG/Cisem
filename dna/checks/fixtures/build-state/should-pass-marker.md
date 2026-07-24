# FIXTURE — build-state.sh should-PASS case, unbuilt-marker present (synthetic, never real; test-only)
**Node ID:** none (synthetic test fixture) | **Type:** FIXTURE | **Status:** DRAFT | **Planning Status:** COMPLETE
**depth_level:** none | **Position in schema:** test fixture, not a governed node
**tags:** [fixture, test, build-state, synthetic]
**Goal:** exercise build-state.sh's PASS path — a COMPLETE plan naming an absent deliverable whose OWN row carries NOT-YET-BUILT.
**Governing corespine:** none (test fixture, gate-exempt by design — outside `find dna/planning`)

## Per-File Alignment Table
| File | status |
|---|---|
| `dna/checks/__nonexistent_should_pass_marker__.sh` | NOT-YET-BUILT |

## What DOES change
- NOT-YET-BUILT (phased): `dna/checks/__nonexistent_should_pass_marker__.sh`
