# CS-MASTER-VALIDATION-001 — Root Validation Corespine
**Node ID:** CS-MASTER-VALIDATION-001
**Type:** corespine (root) | **Status:** RATIFIED — Governor **foundational decree**
2026-07-18 (ARCH-00011 §7, root_authority). This CONFIRMS CISEM-ARCH-00008 and
chain-confirms ARCH-00320; the corespine ratification freeze is LIFTED.
**Version:** v0.1 (2026-07-16, first draft)
**root_authority:** true — validated by Governor decree without an upstream
validator, because it defines the validation that all others depend on.
**depth_level:** L1 | **Position in schema:** T-SYS, root governance layer
**tags:** [root, validation, corespine, master, prio-blocking-resolver]
**Short description (human):** The corespine that says how every other corespine
becomes valid and ratified.
**Short description (AI):** Root validator — defines the corespine validation
protocol + the foundational-decree escape; unblocks the ratification layer.
**Goal:** Define, in one place, what makes a corespine valid and how it gets
ratified — so "PRIO-BLOCKING until CS-MASTER-VALIDATION-001 closes" resolves.
Measurable: 100% of corespines have a stated validation state (valid / invalid /
pending) traceable to the protocol in §3, once this is decreed.
**Role:** Root ratification authority for the corespine layer.
**Who I'm serving:** The Governor (sole ratifier) and every corespine that must
know how it becomes binding.
**Governing corespine:** itself (root_authority) — the recursion terminates here
by foundational decree, not by an infinite chain.

## Pocket Declaration
- **reasoning_scope:** define corespine validity + ratification protocol only
- **inherited_constraints:** must not contradict ARCH-00011 (naming/authority) or ARCH-00320 (audit invariants)
- **output_contract:** validity criteria + ratification protocol + cycle escape
- **ai_cannot:** self-ratify; validate a corespine on the Governor's behalf; declare itself RATIFIED
- **recorded_at:** 2026-07-16

---

## 1. Why this exists (standalone)
Every corespine cited "CS-MASTER-VALIDATION-001 governs all corespines," but no
such document existed — so nothing could be validly ratified, and the layer sat
in an unintended hard freeze. ARCH-00008 (node schema) even named this file as
its ratification gate. This node ends the freeze by writing the gate down.

## 2. The ratification cycle, and its escape
ARCH-00008 could not ratify until this corespine closed; this corespine governs
ARCH-00008. That circularity is **soft, not infinite.** The escape is the
**foundational decree** (ARCH-00011 §7): a `root_authority: true` node is
ratified by Governor decree *without* an upstream validator, because it defines
the validation itself. This corespine is exactly such a root. Once the Governor
decrees it, ARCH-00008's provisional ratification is confirmed automatically.

## 3. The corespine validation protocol (the rule)
A corespine is **VALID** when all hold; else **INVALID** (state it, don't hide it):
```
[ ] V1  Has a content file (not a registry stub alone) — status past DRAFT
[ ] V2  Carries the mandatory node fields (ARCH-00008 §I–X: identity, goal,
        position, pocket) or explicit flagged-absent markers
[ ] V3  Passes the plan-audit invariants I1–I10 (ARCH-00320) — refs resolve,
        no disclosed-as-resolved, TYPE registered, one-source vocabulary
[ ] V4  Its goal + position do not contradict a higher corespine's
[ ] V5  Naming/numbering compliant (ARCH-00011)
```
**Ratification path:**
- *Normal corespine:* VALID (V1–V5) → Governor ratifies → RATIFIED. It then
  governs its own children/templates per TEMPLATE-PROTOCOL-001.
- *Root corespine* (`root_authority: true`): VALID → **Governor foundational
  decree** → RATIFIED, no upstream validator. Only the Governor may do this,
  recorded in the node's change log as a dated "foundational decree."
A corespine that fails any V-check is INVALID and may not be cited as governing
until it passes — disclosed, never silently treated as binding.

## 4. What I govern
Every corespine in `corespine-registry.yaml`. I do not govern individual non-
corespine nodes directly — ARCH-00008 governs node *structure*; I govern
corespine *validity*. Adjacent layers, distinct scopes.

## 5. Self-validation (this node, against §3)
V1 has-content ✓ (this file). V2 ARCH-00008 fields ✓ (header + pocket). V3
invariants: refs all resolve (ARCH-00008/00011/00320, TEMPLATE-PROTOCOL-001 all
exist) ✓; TYPE "corespine" is the CS-* namespace, not a CISEM-{TYPE} prefix, so
I9 n/a. V4 no higher corespine exists (I am root) ✓. V5 naming CS-*-001 ✓.
**Verdict: VALID → RATIFIED by Governor foundational decree 2026-07-18.**

## Does NOT cover
- Node-level structure (ARCH-00008). Input validation (CS-THRESHOLD-001).
- The *mechanical* enforcement of V1–V5 — that is ARCH-00180's wiring job; this
  defines the criteria, not the script. Until wired, validation is manual.
- Corespine templates (TEMPLATE-PROTOCOL-001, ARCH-00280 Q4 still open).

## Path Rejection Declaration (CLAUDE.md §2.8)
- **Rejected: self-ratifying to "close the P0 blocker" faster.** Tempting, and
  exactly what I3/I7 forbid. Status was PROPOSED until the Governor's foundational
  decree flipped it to RATIFIED (2026-07-18) — the correct path was honored.
- **Rejected: building this against a corespine template.** None exists yet
  (ARCH-00290: zero validated corespine templates) — §3.2b gap named, not
  silently skipped. This node is authored directly, flagged as template-less.

## Change log
- v0.1 — 2026-07-16: Opus first draft on Governor "proceed" instruction. First
  node authored deliberately against the now-ratified ARCH-00008 §I–X (plan
  Step 4 proof-of-use). Was awaiting foundational decree.
- v1.0 — 2026-07-18: RATIFIED by Governor foundational decree. Body updated for
  status currency (I16) — the outdated pre-decree status language was caught by the
  audit (via cisem-sonnet's Seed-Honor Report, which corrected an Opus mis-verdict)
  and corrected here. A residual WARN on this file is a known I16 check limitation
  (it matches legitimate ratification PROSE, e.g. "could not ratify until…") — the
  real fix is a field-vs-field contradiction check, queued.
