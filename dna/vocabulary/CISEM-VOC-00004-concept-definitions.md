# CISEM Concept Definitions
**Node ID:** CISEM-VOC-00004 | **Type:** VOC | **Status:** PROVISIONAL-ACTIVE
**depth_level:** L2 | **tags:** [vocabulary, concept-definitions, amendments, governance]
**governing corespine:** CS-CREATION-001
authorizing_plan: CISEM-ARCH-00433
**goal:** Formalize the three ratified vocabulary clarifications (wizard/pipeline axis; corespine/protocol distinction; overlay candidate) so they have a single governed SSOT home

## Pocket Declaration (§3.3)
- **reasoning_scope:** create vocabulary definitions from Governor-ratified amendments
- **inherited_constraints:** A8 (one source per concept); Axioms — see FOUND-00001
- **output_contract:** three definition sections with correct statuses
- **ai_cannot:** self-ratify definitions; change statuses above PROVISIONAL-ACTIVE; write overlay relationships (AWAITING-RATIFICATION)
- **recorded_at:** 2026-08-08

---

## Definition 1 — Wizard vs Pipeline Axis (Amendment 1)
**Ratification status:** RATIFIED (Governor decree 2026-08-08; Brain concurred, Brain cross-check 2026-08-08)

**Operative test (Brain C1 — the primary discriminator):**
> "The boundary is whether the judgment-gathering IS the process."

**Definitions:**
- **wizard** = a process where judgment is gathered IN FLIGHT — the process requires context that only emerges during the conversation (e.g. what the plan is about, what Brain found, what the Governor's actual words were). The wizard cannot be fully specified from inputs available at the start; its steps are the act of gathering the judgment itself.
- **pipeline (runner sense)** = a process where every step is decidable from inputs available at the START — no new context needs to emerge during execution. Given the inputs, the full sequence can be specified in advance and runs to completion deterministically.

**Threshold qualification (Brain C1):**
A process can START decidable and hit an undecidable case mid-run. The boundary is a threshold, not a hard partition: when judgment-gathering becomes the process (not just an edge case), the artifact is a wizard, not a pipeline.

**Naming note:** "pipeline" in CISEM means the RUNNER sense (the execution mechanism). The ordering/sequencing AXIS is "flow-position" (confirmed, ARCH-00433 v1.1 STEP 8 AMENDMENT — Governor ratification stands; Brain withdrew counter-recommendation 2026-08-08).

---

## Definition 2 — Corespine vs Protocol (Amendment 2)
**Ratification status:** RATIFYING-AS-PAIR — definition SOUND (Brain concurred 2026-08-08); reclassification list identified (Haiku sweep 2026-08-08); Governor pair-ratification PENDING (GI-63 deep-core; needs Governor + Brain consensus)

**Definitions:**
- **corespine** = always on for its members; never invoked. An inheritance thread that members carry. It doesn't fire — it is always present.
- **protocol** = fires, runs, finishes. A gate-sequence that activates on a trigger, runs to completion, then ends.
  > "It doesn't contain things; it runs through them." (Brain, ratified formulation)

**Reclassification candidates (Haiku sweep 2026-08-08):**
Nodes currently classified as corespines that exhibit fires-runs-finishes behavior:
- **CS-CREATION-001** (RATIFIED) — the §3 gate sequence fires before creation, validates, finishes. 45 governed nodes cite it as `governing corespine`. Reclassification = large cascade (separate plan required).
- **CS-THRESHOLD-001** (RATIFIED) — Gate-0 goal-connection + SWIFT + park-by-demand fires on input validation, finishes with routing decision.
- **CS-MASTER-VALIDATION-001** (RATIFIED) — V1–V5 validation protocol fires when validating a corespine, finishes with VALID/INVALID verdict.

Ambiguous (Opus ruling needed):
- CS-ACCOUNTABILITY-001 (DRAFT — structural fork vs persistent governance unclear)
- CS-CONTROLPLANE-001 (PROPOSED — routing = gate or domain governance?)
- CS-CORECOUNCIL-001 (PLACEHOLDER — too undefined)

**NOTE:** Ratifying this definition pair does NOT immediately rename or restructure the 45 dependent nodes. Reclassification happens via a SEPARATE PLAN (the 45-node sweep). The candidates are NAMED here as the pair's reclassification scope; the physical reclassification is a subsequent work item.

---

## Definition 3 — Overlay Concept (Amendment 3)
**Ratification status:** CANDIDATE FRAMING PENDING CONSENSUS (DEC-0007 verified content: voided inheritance-as-overlay trial implementation, NOT the overlay concept; 2 OVERLAY-CANDIDATE entries in corespine-registry.yaml active; Governor + Brain consensus on formalization path PENDING)

**Candidate identity (CANDIDATE — not a settled definition):**
An overlay modulates an element's behavior from a specialized context without changing its core standing definition.

**Relationship schema:** AWAITING-RATIFICATION
The relationships between overlay and other concepts (corespine, pipeline, flow-position) are not written here — the relationship topology is deferred to post-ARCH-00434 consensus.

**Lineage:** DEC-0007 voided the "Inheritance-as-overlay" trial implementation as UNSOUND (Inheritance is a KERNEL mechanic, not an overlay). The overlay CONCEPT is alive (2 OVERLAY-CANDIDATE entries in corespine-registry.yaml). Amendment 3 formalizes the existing candidate, not a new concept.

---

## Path Rejection Declaration
- **REJECTED: overlay relationships in this file** — pipeline sense is settled but the relationship topology (overlay↔corespine, overlay↔flow-position) requires further Brain↔Opus↔Governor consensus. AWAITING-RATIFICATION.
- **REJECTED: corespine reclassification in this file** — reclassifying CS-CREATION-001/THRESHOLD/MASTER-VALIDATION requires a separate plan (45-node cascade for CS-CREATION-001 alone). Named here as candidates only.

## Change log
- v1.0 — 2026-08-08 (Sonnet, STRUCTURING tier, ARCH-00433 STEP 8): created per Governor ratification 2026-08-08. Amendment 1 RATIFIED; Amendment 2 RATIFYING-AS-PAIR (list identified); Amendment 3 CANDIDATE FRAMING PENDING CONSENSUS.
