---
Node_ID: CISEM-ARCH-00397
tags: [corespine, manifest, creation-apex, governance, t-sys]
Type: MANIFEST
Status: RATIFIED
Corespine: CS-CREATION-001
Schema_anchor: CISEM-ARCH-00008
Core_spine: CS-MASTER-VALIDATION-001
Last_verified: 2026-07-19
---

# CS-CREATION-001 — CISEM Creation Apex Corespine Manifest

**CISEM-ARCH-00397** | MANIFEST | **Status: RATIFIED** (Governor foundational decree ARCH-00396 Gate C 2026-07-18; Opus Gate-C verified run 26 — the CREATION apex; validation-root = CS-MASTER-VALIDATION-001; two-root model)
**Governs:** Every creation event in CISEM — the apex "corespine-of-corespines"; PARENT of every other
corespine (vocabulary, templates, protocols, plans, wizards, and child corespines such as CS-FRONTEND-001).

---

## §I Gate Trace

**§3.0 Tier:** Sonnet (STRUCTURING) builds this manifest under Opus-authored Core Seeds, executing the
ARCH-00396 Phase C plan exactly; Opus ratifies the apex declaration + truth-fields (I7).
**§3.1 Goal:** Formalize CS-CREATION-001's existing DECLARED role as the apex "corespine-of-corespines" —
give it a canonical manifest file instead of leaving its content as `distributed_in` pointers with no home
of its own (ARCH-00396 Phase C deliverable).
**§3.2b Existing-First:** Searched (per ARCH-00394 STEP 1): `dna/corespines/corespine-registry.yaml:21-28`
(CS-CREATION-001 — status DECLARED, `carries_doctrine: true`, depth_level L1, `distributed_in: [CLAUDE.md,
ARCH-00230, ARCH-00340, ARCH-00190]`, no `canonical_file`); `dna/audits/creation-layer-overlap-map-2026-07-18.md`
("CS-CREATION-001 = the implicit apex" section — confirms no manifest file exists, no "apex"/"corespine-of-corespines"
string exists yet in the repo); repo-wide grep `CS-CREATION-001` (29 files cite it as `Governing corespine:` —
none claim to BE its manifest). RESULT: DECLARED, no canonical file — this manifest fills that gap; it is NOT
a new corespine, it is the FIRST content-home for an existing one (A8/I19).
**§3.2c Core-vs-Instance:** CORE by definition — it is the apex; every other corespine is an instance beneath
it (14 corespines already reference it as governing/parent in corespine-registry.yaml).
**§3.3 Pocket:** `reasoning_scope: formalize the apex corespine's manifest via ARCH-00394` |
`inherited_constraints: A2, A8 (pointers not forks), I7, I10, I19, I25 (ARCH-00396 ratified plan)` |
`output_contract: manifest file + registry canonical_file pointer, pointers only` |
`ai_cannot: ratify own declaration; copy doctrine text out of its SSOTs` |
`recorded_at: 2026-07-19` | `cal_reference: ARCH-00390`
**§3.4 Standalone:** All 4 pointer targets (CLAUDE.md §2.5, ARCH-00230, ARCH-00340, ARCH-00190) resolve on
disk — verified in §VI below.
**§3.5 Naming:** CISEM-ARCH-00397 (seq 397, ARCH type; naming-registry.yaml next_seq advanced to 398).
**§3.6 Size:** 121 lines — within the 200-line gate.
**§3.7 Creation Triad:** Hardcoding (this §I trace + ARCH-00396 Phase C pass criteria) check | AI Pocket
(§3.3 declared) check | AI Oversight (quality-ledger.yaml run 25 logged this run — Opus judges) check

---

## §II Corespine Declaration

| Field | Value |
|---|---|
| **Name** | CS-CREATION-001 |
| **Domain** | Creation Governance (apex) |
| **Scope** | Every creation event in CISEM: Corespine-First, Goal-First, Template-First, Core-vs-Instance checks all fire here; ENFORCES the Creation Doctrine D1–D6 |
| **Goal** | Be the single apex "corespine-of-corespines" — the PARENT every vocabulary term, template, protocol, plan, wizard, and child corespine ultimately governs under |
| **Depth** | L1 (apex) |
| **Status** | RATIFIED (Governor foundational decree ARCH-00396 Gate C 2026-07-18; Opus run 26) |
| **Root authority** | CS-MASTER-VALIDATION-001 (validates all corespines, including this apex) |
| **Parent** | none — this IS the apex; every other corespine's Parent/Governing-corespine field resolves here (directly or via its own parent chain) |

---

## §III Governed Artifacts

| Artifact class | Where the gate lives | Role |
|---|---|---|
| Every file/node creation | CLAUDE.md §3 (Hard Gates) | The gate sequence this corespine enforces |
| The Creation Doctrine D1–D6 | CLAUDE.md §2.5 | What the gates are FOR (`carries_doctrine: true`) |
| File/node creation checklist | ARCH-00230 | SSOT for what every created file/node must contain |
| Protocol structure | ARCH-00340 | SSOT for what every protocol must contain (meta-root) |
| Plan structure + ratification path | ARCH-00190 | SSOT for how a DRAFT becomes a ratified PLAN |
| Corespine creation | ARCH-00394 | The wizard that created THIS manifest (dogfood, I24) |
| Every other corespine | corespine-registry.yaml | 14 corespines cite CS-CREATION-001 as governing/parent |

---

## §IV Invariants
**AI-default guard (Governor decree 2026-07-21, parked [[IBD-0028-wide-view-ask-scope-ai-default]]):** creation PERCEIVES wide (the class an input belongs to, the objective standard) but ASKS the human about action scope before expanding — *see the whole, act on the agreed part.* First-cut pointer; deep integration pending.


**CR-I1** Every creation event MUST pass CLAUDE.md §3 gates in order (Tier-Routing, Goal-First,
Corespine-First, Existing-First, Core-vs-Instance, Pocket, Standalone, Naming, Size, Creation Triad)
before being called done.
**CR-I2** The Creation Doctrine D1–D6 (CLAUDE.md §2.5) governs HOW creation happens — hardcode boundaries
not paths, prevention is cumulative, enhancement is named, the guardian audits itself.
**CR-I3** No child corespine may fork content out of this apex's SSOTs (CLAUDE.md §2.5 Doctrine, ARCH-00230
checklist, ARCH-00340 meta-protocol, ARCH-00190 plan-protocol) — it may only POINT to them (A8/I10).
**CR-I4** A ratified plan is mandatory before any governed creation (I25/A4) — the ONLY exemptions are IBD
raw-capture and SWIFT-safe zero-blast (ARCH-00190 §7).

---

## §V Content File Index

| File | ARCH# | Purpose |
|---|---|---|
| This manifest | ARCH-00397 | Apex corespine declaration — first canonical content-home for CS-CREATION-001 |
| Creation Doctrine (pointer target) | CLAUDE.md §2.5 | D1–D6 SSOT — not copied here |
| File/node creation checklist (pointer target) | ARCH-00230 | SSOT — not copied here |
| Meta-protocol / protocol structure (pointer target) | ARCH-00340 | SSOT — not copied here |
| Plan-protocol (pointer target) | ARCH-00190 | SSOT — not copied here |
| Corespine creation wizard | ARCH-00394 | The wizard that generated this manifest (STEP 1–6) |

---

## §VI Mirrors + SSOT Map (pointers only — zero copied doctrine, CORE-SEED 1)

| Source (SSOT) | What lives there | This manifest's role |
|---|---|---|
| CLAUDE.md §2.5 | The Creation Doctrine D1–D6, full text | POINTS to it (`carries_doctrine: true`); does not restate D1–D6 |
| dna/protocols/CISEM-ARCH-00230-file-creation-template.md | File/node creation checklist (SSOT, ARCH-00396 Phase B) | POINTS to it; does not restate the checklist |
| dna/protocols/CISEM-ARCH-00340-meta-protocol.md | Protocol-structure SSOT (7-item checklist, root_authority) | POINTS to it; does not restate §1 |
| dna/planning/CISEM-ARCH-00190-planning-domain-protocol.md | Plan-protocol + ratification path SSOT | POINTS to it; does not restate its stages |
| corespine-registry.yaml `distributed_in` (unchanged) | Existing historical pointer list | Kept as-is; this manifest becomes the new `canonical_file` alongside it — both are pointers, neither forks content |

---

## §VII Change Log

| Date | Change | Author |
|---|---|---|
| 2026-07-19 | DECLARED — apex manifest created via ARCH-00394 wizard STEP 1–6 (ARCH-00396 Phase C, first clean dogfood run) | Sonnet (STRUCTURING, Opus-approved ARCH-00396 plan) |
