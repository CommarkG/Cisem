# Creation-Layer Overlap Map — 2026-07-18 (Haiku gather, Opus-judged)
**Type:** AUDIT ARTIFACT (evidence for ARCH-00396 Phase B gate) | **Tier:** cisem-haiku enumerated · cisem-opus-pe judged
**Purpose:** On-disk record of the CISEM "creation layer" so ARCH-00396 Phase B's numeric gate ("0 unresolved
SSOT-ambiguities from the 4 flagged concerns") is independently checkable (State-on-Disk, Principle 13). Evidence only.

## Creation protocols (goal = "how to create X")
| Node | File | Creates | Status | Corespine |
|---|---|---|---|---|
| ARCH-00340 | dna/protocols/CISEM-ARCH-00340-meta-protocol.md | any protocol (ROOT) | LIVE, root_authority | CS-CREATION-001 |
| ARCH-00230 | dna/protocols/CISEM-ARCH-00230-file-creation-template.md | creation checklist | **DRAFT** (self-titled under TEMPLATE-PROTOCOL-001, :8) | CS-CREATION-001 |
| ARCH-00190 | dna/planning/CISEM-ARCH-00190-planning-domain-protocol.md | plan (DRAFT→PLAN) | LIVE | CS-CREATION-001 |
| ARCH-00394 | dna/protocols/CISEM-ARCH-00394-corespine-creation-wizard.md | corespine (embeds its protocol STEP 1-6) | CONNECTED | CS-CREATION-001 |
| ARCH-00350 | dna/protocols/CISEM-ARCH-00350-sonnet-opus-handoff-protocol.md | Sonnet→Opus handoff | PROVISIONAL-ACTIVE (out-of-plan origin) | CS-AI-PROFILING-001 |
| ARCH-00330 | dna/protocols/CISEM-ARCH-00330-mini-tree-protocol.md | oversize-node split | DRAFT | CS-CREATION-001 |
| TEMPLATE-PROTOCOL-001 | dna/protocols/CISEM-TEMPLATE-PROTOCOL-001.md | per-corespine template | DRAFT | (referenced by ARCH-00230) |

## Wizards / skills + mirror status
| Name | Mirrors | Mirror-verified? |
|---|---|---|
| cisem-plan | ARCH-00190 §2-5 (1:1, SKILL:148) | YES |
| cisem-meta | ARCH-00340 §1 (1:1, SKILL:208) | claimed; **Opus self-generation test PASS 2026-07-18** (ARCH-00396 renders it) |
| cisem-create | "§3 gates" (distributed) | **NO single SSOT** — unanchored |
| ARCH-00394 | (embeds own protocol) | **NO separate protocol SSOT** |

## THE 4 FLAGGED CONCERNS (ARCH-00396 Phase B must resolve each → 0 unresolved)

1. **Creation-checklist SSOT unclear** — "what every creation contains" is covered in ARCH-00230:13-22 AND CLAUDE.md §3 AND cisem-create STEPs 2-9. No single SSOT; ssot-registry.yaml has NO `creation_structure` entry (closest: `creation_doctrine → CLAUDE.md §2.5`, :9). → Phase B fix: name ONE SSOT + register it.
   **STATUS: RESOLVED (ARCH-00396 Phase B, 2026-07-18)**
   Fix locations:
   - `dna/ssot-registry.yaml` — new `creation_checklist` entry pointing to ARCH-00230 as ONE SSOT
   - `dna/protocols/CISEM-ARCH-00230-file-creation-template.md` — header corrected: title changed to "File / Node Creation Checklist", explicit SSOT declaration added, Governing corespine fixed (CS-CREATION-001 — not TEMPLATE-PROTOCOL-001), scope tightened in opening block
   - `CLAUDE.md §3` — pointer line added: "Creation-checklist SSOT: dna/protocols/CISEM-ARCH-00230-file-creation-template.md"
   - `.claude/skills/cisem-create/SKILL.md STEP 4` — pointer added: ARCH-00230 marked "(SSOT)" and explicit reference note added

2. **ARCH-00394 embeds protocol-in-wizard** (STEP 1-6, :68-118) — no separate corespine-creation protocol as SSOT (I10 tension). → Phase B fix: annotate as declared combined node OR split.
   **STATUS: RESOLVED (ARCH-00396 Phase B, 2026-07-18)**
   Fix location: `dna/protocols/CISEM-ARCH-00394-corespine-creation-wizard.md` — explicit "Architecture note" annotation added after the Purpose line, declaring this a DECLARED COMBINED protocol+wizard node (I10 exception, documented not silent), naming ARCH-00340 as parent meta-root. Opus reviews the exception at Gate B.

3. **ARCH-00350 born out-of-plan**, no wizard, sits beside CLAUDE.md §3.0 tier-routing. → Phase A/B fix: absorb as the referenced comms protocol under the operating-model.
   **STATUS: RESOLVED (ARCH-00396 Phase A + B, 2026-07-18)**
   Fix locations:
   - CLAUDE.md §1.7 OPERATING MODEL (Phase A) already references ARCH-00350 explicitly: "Cross-tier communication is git + Core Seeds + ARCH-00350"
   - `dna/protocols/CISEM-ARCH-00350-sonnet-opus-handoff-protocol.md` — "Operating-Model reference" back-reference note added to header, citing §1.7 and the absorption (not fork) relationship

4. **Protocol-structure triple-overlap** — ARCH-00340 §1 (7-item) vs ARCH-00230 (file checklist) vs cisem-meta STEP 1-7 all cover "what a valid protocol contains." → Phase B fix: ARCH-00340 §1 is SSOT; others reference.
   **STATUS: RESOLVED (ARCH-00396 Phase B, 2026-07-18)**
   Fix location and boundary clarification:
   - ARCH-00340 §1 = SSOT for "what a valid PROTOCOL must contain" (7-item checklist: identity, goal, rule, does-not-cover, SSOT, pocket, wizard-ref). Unchanged — stays SSOT.
   - ARCH-00230 = SSOT for "what every created FILE/NODE must contain" (creation checklist). Scope is distinct from ARCH-00340 — these are complementary, not overlapping. ARCH-00230 now explicitly scoped in its header.
   - cisem-meta STEP 1-7 = the RUNNABLE FORM of ARCH-00340 §1 (mirrors 1:1 per I10). It does not duplicate — it executes. Mirror relationship confirmed; parent pointer ARCH-00340 added to cisem-meta header.
   - Boundary: ARCH-00340 governs protocol structure; ARCH-00230 governs file/node structure at creation time. Different scopes, not competing SSOTs.

## CS-CREATION-001 = the implicit apex (Step-C target)
corespine-registry.yaml:21-28 — status DECLARED, depth_level L1, `carries_doctrine: true`,
`distributed_in: [CLAUDE.md, ARCH-00230, ARCH-00340, ARCH-00190]`, no manifest file. Explicit parent of every
corespine (e.g. CS-FRONTEND-001 manifest:43 "Parent: CS-CREATION-001"). No "corespine-of-corespines"/"apex" string
exists yet in the repo → ARCH-00396 Phase C formalizes it (consolidate POINTERS, never migrate doctrine text out of its SSOTs).
