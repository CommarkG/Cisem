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
**Prevention invariants touched:** I1, I2, I3, I4, I5, I6 (per CISEM-ARCH-00320 — this plan invokes that protocol).
**Plan-audit last run:** 2026-07-16 (Opus first audit — see CISEM-ARCH-00320 §5). Verdict: disclosed gaps tracked below; working tree clean except held-back ARCH-00008 bump.

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
  for it to be *ratified*. Escape = **governance bootstrapping**: the Governor
  self-ratifies CS-MASTER-VALIDATION-001 by decree (root authorities self-sign);
  ARCH-00008's status today is **provisional** until that closes, then confirmed.
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
| 1 | Write + Governor-self-ratify **CS-MASTER-VALIDATION-001** (meta-governance declaration: what it governs, corespine validation protocol, self-ratify clause). Unblocks everything. | Brain drafts → **Governor** ratifies | nothing (P0) | disclosed |
| 2 | Ratify **ARCH-00011** naming policy (DRAFT → RATIFIED) so gate scripts encode stable field names | **Governor** review | Governor only | disclosed |
| 3 | Define **TIER-0 / TIER-1 boundary** explicitly (what TIER-1 is, what exactly freezes). Closes the implicit-freeze ambiguity | **Governor** decision | nothing | disclosed |
| 4 | Validate current file batch against **ARCH-00008 §I–X** (full 10-section, not just §3.4). First real proof-of-use; converts schema aspirational→operational | Builder (**Opus** verify) | Steps 1–2 | not started |
| 5 | Wire **ARCH-00180** scripts: naming-check (WARN-ONLY first) → size-check → field-check → compute-registry; then ARCH-00270 pre-commit hook → CI | Builder (**Sonnet** exec, **Opus** verify) | Steps 1–2 (field-check); naming/size after Step 2 alone | not started |
| 6 | Remediation pass: fix WITNESS-00001 §3.4; **create the absent CISEM-DNA-00001 living index**; migrate or formally close dna/harvest/from-csp/; purge phantom batch from ARCH-00170; **decide the held-back ARCH-00008 RATIFIED bump** (Governor decree → then Opus commits, or revert) | Builder (**Haiku** enumerate, **Sonnet** apply, **Opus/Governor** rule) | parallel with Step 5 | not started |
| 7 | SOL-GIFTPRO-001 isolation: move to a visually separated `# SIMULATION-ONLY — NOT REAL BUILD TRACKS` block in the registry + note on CS-SOLUTIONS-001 | Builder (**Sonnet**) | none | not started |

## 2. The honest bottleneck
Steps 1–3 are **all Governor decisions**. Nothing in Steps 4–7 moves until those
three are given. This is a Governor-gated plan, not a Builder-blocked one.

## 3. On Haiku's three options
Not Option C (hard freeze) — TIER-0 governance work should continue; freezing all
creation is overcorrection. **A then B**, sequenced above: Option A (unblock
CS-MASTER-VALIDATION-001) = Steps 1–4; Option B (wire gates) = Step 5. Sequential,
not competing.

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
