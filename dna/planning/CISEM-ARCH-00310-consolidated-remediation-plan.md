# Consolidated Remediation Plan — Opus + Sonnet + Haiku
**Node ID:** CISEM-ARCH-00310
**Type:** ARCH | **Status:** PROPOSED — a plan awaiting Governor scope+sequence
confirmation, not an authorization to execute. (Opus did not self-approve execution.)
**Version:** v1.0 (2026-07-16)
**depth_level:** L2 | **Position in schema:** T-SYS, planning layer
**tags:** [remediation, gap-registry, dependency-order, review-required, tri-model]
**Goal:** One dependency-ordered execution sequence that closes CISEM's real
gaps, consolidating three model tiers' findings into a single index —
measurable as: every gap below has an owner, a blocker, and a
disclosed-vs-resolved state, reviewed before execution.
**Governing corespine:** CS-MASTER-VALIDATION-001 (PRIO-BLOCKING — this plan's
Step 1 is to unblock it)
**Role:** Execution index; supersedes the "Required next step" of
CISEM-ARCH-00170 (gap registry) as the actionable sequence.
**Who I'm serving:** The Governor (scope+sequence decisions) and the Builder
(execution after confirmation).
**Prepared by:** Opus (consolidation + verification), Sonnet (sequencing),
Haiku (enumeration). Tri-model authorship per CISEM-ARCH-00300.
**Prevention invariants touched:** I1, I2, I3, I4, I5, I6, I8, I9 (per CISEM-ARCH-00320 — this plan invokes that protocol; I7 is Opus-authorship, structurally enforced).
**Plan-audit last run:** 2026-07-16 (2nd pass — Haiku enumerated, Sonnet remediated, Opus verified; see CISEM-ARCH-00320 §5). Artifacts: `dna/naming-manifest.yaml` built (I4 in-progress). Working tree clean except the held-back ARCH-00008 bump.

**Existing-First (§3.2b, I19):** Searched dna/corespines/corespine-registry.yaml (all corespines listed — gaps in content identified; drove Steps 1 + 8); dna/naming-registry.yaml (sequences confirmed); dna/naming-manifest.yaml (ID→file map reviewed — drove I4 step); CISEM-ARCH-00170 (master-plan-gap-registry — existing gap list found and reviewed; this plan explicitly supersedes ARCH-00170 §"next step", accounting for all 9 gaps in §1b); knowledge-library/index.yaml KL-0001 (DIOS maturity anti-patterns — confirmed alignment). No duplication: this plan supersedes rather than parallels.

## Pocket Declaration
- **reasoning_scope:** consolidate + order all remediation, assign tier owners
- **inherited_constraints:** no execution before Governor scope+sequence confirmation (CLAUDE.md §4)
- **output_contract:** ordered steps with owner/blocker/state
- **ai_cannot:** self-authorize execution, self-ratify any step
- **recorded_at:** 2026-07-16

---

## 0. How the three tiers agreed (and where they didn't)
- **Agreed (all three):** gates are declared-not-wired; CS-MASTER-VALIDATION-001
  is a singleton content-less blocker; ARCH-00008 is ratified-but-unenforced;
  the TIER-0/TIER-1 freeze is implicit; CISEM-DNA-00001 living index is absent;
  WITNESS-00001 §3.4 is a documented-unfixed failure.
- **Haiku's best catch:** the ratification **cycle** (ARCH-00008 needs
  CS-MASTER-VALIDATION-001 ratified; that corespine governs ARCH-00008).
- **Corrected by Opus/Sonnet:** Haiku said "ratify ARCH-00008 only after a node
  passes it" — that **inverts** the order. A schema must be ratified *before*
  nodes are built to it; what is premature is *claiming nodes are checked against
  it*. The cycle is **soft**: a node only needs to *satisfy* the schema, not wait
  for it to be *ratified*. Escape = **foundational decree** (ARCH-00011 §7): the
  Governor ratifies the root node CS-MASTER-VALIDATION-001 *without* an upstream
  validator, because it defines the validation itself. This is distinct from the
  forbidden AI "self-ratify" — same neither-word, opposite acts. ARCH-00008's
  status today is **provisional** until that closes, then confirmed.
- **Opus-only findings the lower tiers missed:** ARCH-00008 had an **uncommitted
  working-tree bump** to `Status: RATIFIED` that contradicts its own committed
  body ("Not ratified") and its own precondition. This session **deliberately did
  NOT commit that bump** (CISEM-ARCH-00300 Hard Line — only the Governor ratifies);
  ARCH-00008 therefore remains `DRAFT` in git, which is internally consistent, and
  the RATIFIED proposal is held locally for Governor decree. Also missed by lower
  tiers: the phantom commit batch in ARCH-00170 (WITNESS-00003, LOAD-00002,
  ARCH-00012/13, WITNESS-00004 — none exist); dangling child `ai-oversight-layer3.md`;
  gcp-oauth.keys.json in repo root (now gitignored, low severity).
- **Opus self-correction:** the "ARCH 00291–00299 void" earlier flagged is NOT a
  gap — it is the repo's 10-number spacing convention for planning nodes. The
  registry *reconciliation* problem (no ID→file manifest) remains real.

## 1. Ordered remediation (owner tier per CISEM-ARCH-00300)
| # | Step | Owner | Blocked by | State |
|---|------|-------|-----------|-------|
| 0 | **Migrate the Founding Node** (TSA / CoreSpiral / Pocket philosophy) from Drive into git, OR flag `NOT-IN-REPO` and reconstruct as a new node if lost. It is cited on nearly every page with no source file (I8). The entire DNA rests on it. **True P0 — precedes even Step 1.** | Brain/**Governor** (source) → Builder migrates | nothing (P0) | disclosed |
| 1 | Write + **foundational-decree** ratify **CS-MASTER-VALIDATION-001** (meta-governance declaration: what it governs, corespine validation protocol, `root_authority: true` clause per ARCH-00011 §7). Unblocks everything. | Brain drafts → **Governor** decree | Step 0 (philosophy grounding) | disclosed |
| 2 | Ratify **ARCH-00011** naming policy (DRAFT → RATIFIED) so gate scripts encode stable field names | **Governor** review | Governor only | disclosed |
| 3 | Define **TIER-0 / TIER-1 boundary** explicitly (what TIER-1 is, what exactly freezes). Closes the implicit-freeze ambiguity | **Governor** decision | nothing | disclosed |
| 4 | Validate current file batch against **ARCH-00008 §I–X** (full 10-section, not just §3.4). First real proof-of-use; converts schema aspirational→operational | Builder (**Opus** verify) | Steps 1–2 | not started |
| 5 | Wire **ARCH-00180** scripts: naming-check (WARN-ONLY first) → size-check → field-check → compute-registry; then ARCH-00270 pre-commit hook → CI | Builder (**Sonnet** exec, **Opus** verify) | Steps 1–2 (field-check); naming/size after Step 2 alone | not started |
| 6 | Remediation pass: fix WITNESS-00001 §3.4; **create the absent CISEM-DNA-00001 living index**; migrate **CISEM-GOV-00018** or flag NOT-IN-REPO (I8); create/formally-close **constraint-set.yaml** (I8); migrate or formally close dna/harvest/from-csp/; build the **ID→file manifest** (I4); purge phantom batch from ARCH-00170 (I6); **decide the held-back ARCH-00008 RATIFIED bump** (Governor decree → then Opus commits, or revert) | Builder (**Haiku** enumerate, **Sonnet** apply, **Opus/Governor** rule) | parallel with Step 5 | not started |
| 7 | SOL-GIFTPRO-001 isolation: move to a visually separated `# SIMULATION-ONLY — NOT REAL BUILD TRACKS` block in the registry + note on CS-SOLUTIONS-001 | Builder (**Sonnet**) | none | not started |
| 8 | **CS-THRESHOLD-001 body (true violation)** — it is `RATIFIED` yet bodiless, breaking the registry's own "content-once-past-DRAFT" rule (I1). The DRAFT/DECLARED/PROPOSED corespines are legitimately deferred, NOT violations. **Plus register/rename the unregistered TYPE prefixes** SCHEMA + TEMPLATE-PROTOCOL in ARCH-00011 §1 (I9). | Brain drafts → Builder (**Sonnet**) → **Opus** verify | Step 1 (CS-THRESHOLD body); none (I9 registration) | disclosed |

## 1b. Coverage map — every ARCH-00170 gap has a written destination
This plan supersedes ARCH-00170's "next step"; per I1/I8 a supersession must
account for **every** superseded gap or explicitly defer it. All 9:
| ARCH-00170 gap | Destination | Permanent prevention |
|---|---|---|
| 1. Founding Node never migrated | **Step 0 (P0)** | I8 |
| 2. Corespines registered w/ no content | Step 1 (CS-MASTER-VALIDATION) + **Step 8** (CS-CREATION, CS-ACCOUNTABILITY, CS-THRESHOLD body) | I1 |
| 3. dna/harvest/from-csp/ empty | Step 6 | I1 |
| 4. GiftPro code never migrated | **Deferred by design** — SOL-GIFTPRO-001 is SIMULATION-ONLY; isolation only (Step 7), not migration | I1 (tagged example-only) |
| 5. constraint-set.yaml never created | Step 6 | I8 |
| 6. DNA-00001 + GOV-00018 Drive-only | Step 6 | I8 |
| 7. 9 PRIO-BLOCKING ratifications | Steps 1–2 (root) + Step 8 (branches) | I1 |
| 8. Vocabulary | **Closed** — VOC-00001/00002 committed (60192bf); no action | n/a |
| 9. DNA self-compliance on existing files | Step 4 (full §I–X pass) | I2 (disclosed≠resolved) |

## 2. The honest bottleneck
Steps 0–3 are **all Governor / Brain-sourced decisions**. Nothing in Steps 4–8
moves until those are given. This is a Governor-gated plan, not a Builder-blocked one.

## 3. On Haiku's three options
Not Option C (hard freeze) — TIER-0 governance work should continue; freezing all
creation is overcorrection. **A then B**, sequenced above: Option A (ground +
unblock: Founding Node + CS-MASTER-VALIDATION-001) = Steps 0–4; Option B (wire
gates) = Step 5. Steps 6–8 run parallel. Sequential, not competing.

## Does NOT cover
Execution of any step (blocked on Governor confirmation). The 5 pending file
pastes Sonnet references for the "current commit batch" — still outstanding,
tracked here so they are not lost.

## Self-compliance (against ARCH-00230 checklist)
Header, Goal (measurable), Governing corespine, Why (§0), Rule-as-procedure
(§1 table), Does-NOT-cover, Role/Who-serving/Pocket all present. Naming per
ARCH-00011 (ARCH-00310, 10-spacing after 00300).

## Path Rejection Declaration (CLAUDE.md §2.8)
- **Rejected: creating yet another parallel meta-doc.** This plan explicitly
  *supersedes* ARCH-00170's "next step" rather than adding a competing index, to
  avoid growing the meta-to-governed-node ratio Opus flagged.
- **Rejected: marking any step done or any status RATIFIED.** Plan is PROPOSED;
  every step's state is disclosed, per the CISEM-ARCH-00300 Hard Line.

## Change log
- v1.0 — 2026-07-16: consolidated from Haiku review + Sonnet resolution plan +
  Opus verification, on Governor "consolidate a plan and push to git" instruction.
