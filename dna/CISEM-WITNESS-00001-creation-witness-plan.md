# CISEM Creation Witness — Minimal Temporary Spec (Option B)

**Node ID:** CISEM-WITNESS-00001 (proposed — unratified)
**Type:** WITNESS
**Status:** DRAFT
**Position in schema:** PLACEHOLDER — T-SYS/T-DOM ancestor chain not yet
resolved; per CISEM-SCHEMA-00001 this reserves the slot without blocking
creation. Retrofit trigger (below) is also when placement should resolve.
**depth_level:** L1
**tags:** [witness, continuity, session-log]
**Governing corespine:** none yet — explicit exception to the Corespine-First
Mandate, justified because de-risking session-loss supersedes waiting for
Phase 1 completion.
**Goal (per Goal-First Mandate):** Prevent further loss of session context and
decision history during the Phase 0–3 build-out, without waiting for the full
governance layer that would normally be required to create a node.
**Prepared by:** Brain (Claude.ai), Governor approval: Option B, this session
**Date:** 2026-07-14

## 0. Status note
This node is temporary and pre-governance by design — it exists to stop
session-loss now rather than wait for the full governance layer. That is a
deliberate, disclosed exception (see §2), not a claim of completeness. The
`TEMPORARY / PRE-GOVERNANCE` qualifier that previously lived in the Status
field belongs here, in the body, not in a field that must resolve against
the controlled status vocabulary (DRAFT | PROPOSED | DECLARED | RATIFIED |
PLACEHOLDER | SCHEDULED | SPLIT).

## 1. Why this exists
This session recovered from a previously stuck chat via manual Drive file reading.
Session reasoning lived only in chat history, which is exactly what broke last time.

## 2. Explicit non-compliance flags
This node does NOT yet have: a ratified naming/numbering policy (CISEM-ARCH-00011
exists as DRAFT, Governor-approved, pending final ratify — not yet ratified), a tag
library (tags above are inline/free-form per ARCH-00011 §4 until one exists), a
status library, a node system definition, word-count gate enforcement.

## 3. What the Witness records
Per session: session_date, what_was_decided[], what_was_parked[], what_was_built,
open_questions[], next_session_start_point.

## 4. Retrofit trigger
Upgrades from temporary log to governed node once CS-CREATION-001 is complete
and Tag/Status libraries exist. Position in schema should resolve out of
PLACEHOLDER at the same time.
