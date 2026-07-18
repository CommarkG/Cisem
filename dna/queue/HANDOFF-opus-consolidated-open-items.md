# HANDOFF — Opus: Consolidated Open Items (2026-07-18)
**Type:** TAB-HANDOFF (Sonnet → Opus) | Cross-Boundary Zero-Context
**Prepared:** 2026-07-18 post A8-sweep | **Status:** CURRENT

Cross-tab comms: tabs communicate ONLY via the Governor. Paste this file as the Opus tab opener.

---

## BOOTSTRAP (read in order — full context, zero conversation dependency)
1. `CLAUDE.md` — constitution: Axioms A1–A8 (§2.4 — A8 added this session), Doctrine D1–D6, gates §3, Creation Triad §3.7, tier routing, Core Seeds, SWIFT/PARK.
2. `dna/CISEM-WITNESS-00003-session-continuity.md` — COMPACT STATE v3 (latest, committed).
3. `dna/quality-ledger.yaml` — full QC history.
4. `dna/learning-registry/session-learning-index.yaml` — both compact windows (2026-07-18).
5. `dna/corespines/corespine-registry.yaml` — current corespine statuses.
6. `dna/naming-registry.yaml` — ARCH next_seq: 395.

State your inherited preventions before acting on anything.

---

## OPUS PE RULING SUMMARY (already returned — for record)

Ruling date: 2026-07-18. Verdict: **NOT RATIFIED** (ARCH-00393 + ARCH-00394 remain DECLARED).

**What IS sound:** Existing-First verified, all governed files exist on disk, FE-I1–I10 are good bright-line invariants, naming correct. No revert needed on merit.

**Three blockers:**
1. **I3/I7:** Opus cannot self-ratify the Governor's verbal order — only a Governor decree resolves I25/A4.
2. **Four defects (D-1..D-4)** must be fixed before a RATIFIED stamp:
   - D-1: Wrong line counts in §3.6 (ARCH-00393 says ~190 → actual 107; ARCH-00394 says 215 → actual 233)
   - D-2: ARCH-00393 §V wizard row says ARCH-00393 (itself) — must say ARCH-00394
   - D-3: `corespine-registry.yaml` line 4 header comment says "ARCH-00393 (Universal Corespine Creation Wizard)" — should be ARCH-00394
   - D-4: ARCH-00394 wizard template §IV emits `Doc-Status:` while live artifacts use `Status:` — factory drift
3. **I24:** ARCH-00394 wizard never exercised end-to-end → earns CONNECTED, not RATIFIED, until one clean run.

---

## OPEN ITEMS — TIERED

### P0 — Governor word required (these BLOCK downstream work)

| # | Item | Status | What Governor must say |
|---|---|---|---|
| **P0-1** | CS-FRONTEND-001 + ARCH-00394 I25/A4 ruling | GOVERNOR-PENDING | "ratify-with-retro-plan (fixes first)" OR "revert" |
| **P0-2** | Founding axioms: TSA / CoreSpiral / Pocket definitions + Sovereign Phrase for FOUND-00001 | GOVERNOR-ONLY KEYSTONE | Upload the founding axiom content; see HANDOFF-opus-axioms.md for task |
| **P0-3** | ARCH-00282 ratification (unified graph architecture plan, Opus-authored) | AWAITING-GOVERNOR | Opus soundness review returned SOUND (v2); Governor ratification pending |
| **P0-4** | ARCH-00392 (Context-Envelope + Governance-Spine plan, promotes IBD-0007) | AWAITING-GOVERNOR | Opus soundness review needed FIRST (see P1-1), then Governor ratification |
| **P0-5** | CS-MASTER-VALIDATION-001 foundational decree | DRAFTED-AWAITING-DECREE | Content drafted; needs Governor foundational decree to move from DRAFTED → RATIFIED |
| **P0-6** | ai-oversight-layer3: build OR drop | GOVERNOR-DESIGN-INTENT | CS-AI-BEHAVIOR-001 pending_children entry — Governor must decide before any build |

---

### P1 — Opus action (no Governor word needed to start, OR unlocked by P0 decision)

| # | Item | Trigger | Opus task |
|---|---|---|---|
| **P1-1** | ARCH-00392 soundness review | Can start now | Run the PE soundness review against ARCH-00392 (`dna/planning/CISEM-ARCH-00392-*.md` — Opus-authored, AWAITING-BUILDER-REVIEW). Produce SOUND/UNSOUND + specific findings. Route result to Governor (P0-4). |
| **P1-2** | D-1..D-4 defect fix + retro-plan stub | After P0-1 decree | After Governor "ratify-with-retro-plan": (a) Core-Seed Sonnet to fix D-1..D-4 (mechanical ~10 min); (b) file retro-plan stub via /cisem-plan; (c) Opus stamps ARCH-00393 → RATIFIED + ARCH-00394 → CONNECTED + logs to quality-ledger.yaml. |
| **P1-3** | Process founding axioms | After P0-2 upload | See HANDOFF-opus-axioms.md — align to CISEM vocab, integrate into FOUND-00001 (TSA/CoreSpiral/Pocket + Sovereign Phrase), run Creation Triad. |
| **P1-4** | A8-sweep verification | Can start now | Sonnet ran the sweep (committed 2026-07-18, 18 files). Opus: verify sweep was complete (I19 / I22 — any missed files?). Specifically check: `dna/CISEM-FOUND-00001-founding-node.md` body text + ARCH-00320 + ARCH-00392 (was A1–A7 used in inherited_constraints?). |

---

### P2 — Sonnet executable (after Opus/Governor gates open)

| # | Item | Gate | Sonnet task |
|---|---|---|---|
| **P2-1** | D-1..D-4 fix pass | P0-1 decree + Opus Core Seeds | Fix 4 defects in ARCH-00393 + ARCH-00394 + corespine-registry.yaml (see D-1..D-4 above). ZF gate. |
| **P2-2** | Frontend pages update | P0-1 ratification | Add ARCH-00393 + ARCH-00394 entries to `frontend/pages/front-page-types.html` once status = RATIFIED. |
| **P2-3** | rebuild.sh auto-trigger | CAL wiring session | Wire `frontend/rebuild.sh` into `.claude/hooks/session-start.sh` to catch dead links on SessionStart. |
| **P2-4** | CS-COMMS-001 corespine build | HANDOFF-opus-comms.md | See existing HANDOFF-opus-comms.md for full cross-tab package. |
| **P2-5** | A8-sweep in FOUND-00001 body | P1-4 Opus check | If Opus finds missed instances inside the body text of FOUND-00001, Sonnet applies targeted fix. |

---

### DONE this session (for record)

| # | Item | Completed |
|---|---|---|
| ✓ | A8-sweep — all A1–A7 → A1–A8 across 18 files | 2026-07-18 |
| ✓ | Pre-compact save-all: WITNESS COMPACT STATE v3 + learning extraction | 2026-07-18 |
| ✓ | CS-FRONTEND-001 (ARCH-00393) + ARCH-00394 wizard DECLARED | 2026-07-18 |
| ✓ | FE-I1–I10 frontend invariants established | 2026-07-18 |
| ✓ | Opus PE ratification review returned (verdict above) | 2026-07-18 |

---

## THE ONE DECISION THAT UNLOCKS MOST OF THE ABOVE

**P0-1 is the critical path.** If you say "ratify-with-retro-plan (fixes first)":
- P1-2 opens → Sonnet fixes D-1..D-4 + files retro-plan stub → Opus stamps RATIFIED/CONNECTED
- P2-1, P2-2 open automatically

Everything else (P0-2 through P0-6) is independent and can proceed in parallel.

---

## Seed-Honor note
This HANDOFF was prepared by Sonnet (reference-update + consolidation task).
No governed nodes were created (Core Seed 1 honored). No truth-fields written (Core Seed 3 honored).
ZF ACHIEVED on commit.
