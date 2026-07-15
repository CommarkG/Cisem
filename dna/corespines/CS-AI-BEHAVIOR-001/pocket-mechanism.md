# Pocket Mechanism — Full Spec
**Parent corespine:** CS-AI-BEHAVIOR-001 (status: DECLARED — "Governs every
AI instance — pocket mechanism, path-rejection, oversight")
**Status:** DRAFT
**Goal:** Give every AI (Builder) action a bounded, declared reasoning
envelope at creation time, so no action runs "floating" — resolves the
dependency CLAUDE.md §3.3 and corespine-registry.yaml's children list
have pointed to since before this file existed.
**depth_level:** L1
**tags:** [pocket, ai-behavior, governance, corespine-child]

## 0. Naming note
This file is a corespine child, not a top-level CISEM node — it has no
`CISEM-{TYPE}-{SEQ5}` ID because `CS` is not in the ARCH-00011 §1 TYPE
registry; corespines and their children are governed by CS-CREATION-001 /
the corespine registry, not the node-numbering scheme. It's referenced
by the exact filename `pocket-mechanism.md` in both CLAUDE.md §3.3 and
`corespine-registry.yaml` — that filename is preserved here rather than
renamed, so both existing references resolve without edits elsewhere.
Template-First check: no template exists for a corespine mechanism-spec
file (CS-AI-BEHAVIOR-001 is DECLARED, not RATIFIED, so CISEM-TEMPLATE-
PROTOCOL-001 §2 doesn't yet require one) — gap named, not silently
skipped.

## 1. What the Pocket is
A Pocket is the declared reasoning boundary for a single AI creation
action. CLAUDE.md §3.3 requires it "inline at every creation" — it is not
optional metadata, it is the mechanism that makes "Transparency of Action"
and "No Scope Expansion Without Flagging" (CLAUDE.md §2.1, §2.3) checkable
rather than aspirational.

## 2. The five fields (per CLAUDE.md §3.3)
- **reasoning_scope** — the bounded problem this action is allowed to
  reason about. Anything outside this scope is out of pocket and must be
  flagged, not silently absorbed into the action.
- **inherited_constraints** — constraints this action inherits from its
  governing corespine(s) or parent node(s) and cannot override. Example
  (CISEM-ARCH-00008's own pocket): "must not conflict with
  CS-MASTER-VALIDATION-001 once ratified."
- **output_contract** — the shape the output must take. Not a description
  of content, a contract on form (e.g. "field list + rationale," "session
  log entry," "registry diff").
- **ai_cannot** — the explicit boundary of what this action is not
  authorized to do, regardless of how reasonable it might seem mid-task.
  Ties directly to CLAUDE.md §1: "Governor... holds sole ratification
  authority" — e.g. "self-ratify — Governor only."
- **recorded_at** — when the declaration was made. Required by CLAUDE.md
  §3.3 but not yet present in every existing Pocket Declaration in this
  repo (see §4 below) — the gap is named here rather than backfilled
  silently on files this spec didn't write.

## 3. Relationship to Path Rejection Declaration
Pocket Declaration and Path Rejection Declaration (CLAUDE.md §2.8) are
distinct, both governed by CS-AI-BEHAVIOR-001, and not interchangeable:
- **Pocket Declaration** states the boundary *before* acting — what this
  action is scoped to do.
- **Path Rejection Declaration** states, *after* considering alternatives,
  which path was rejected and why.
A single creation event needs both, not one standing in for the other.
Path Rejection Declaration's own full spec is not part of this file — it
is not yet written anywhere in this repo, which is itself a gap distinct
from this one (out of this file's reasoning_scope; not fixed here).

## 4. Known non-compliance this spec surfaces
Now that this file exists, it surfaces rather than resolves one thing:
`CISEM-ARCH-00008`'s existing Pocket Declaration block has
`reasoning_scope`, `inherited_constraints`, `output_contract`, and
`ai_cannot`, but no `recorded_at` — meaning it doesn't fully match §2 of
this spec, even though it was the reason this spec's dependency was
flagged in the first place. Not corrected here — that edit belongs to
CISEM-ARCH-00008, not to this file, and should be flagged to the Governor
rather than silently patched as a side effect of writing this spec.

## 5. What this document is NOT
Not ratified. Not enforced by tooling — no gate currently checks a Pocket
Declaration against this spec at creation time (CLAUDE.md §5: gates
DECLARED, none WIRED). Not a template — see §0.
