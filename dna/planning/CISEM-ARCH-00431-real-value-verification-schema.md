# Real-Value Verification — Checklist Schema (SSOT) + Weekly Bottom-Line Review
**Node ID:** CISEM-ARCH-00431 | **Type:** ARCH | **Status:** RATIFIED — Governor informed decree 2026-07-27 ("I RATIFY to build the schema-SSOT + tag + weekly-review, do NOT create a third agent"; Opus Stage-1 SOUND) | **GI-68 dual-review:** verification fast-follow (post-build)
**Planning Status:** COMPLETE (Opus Stage-1 SOUND + Governor informed Stage-2 ratification 2026-07-27) | **depth_level:** L2 | **Position in schema:** T-SYS, verification-schema layer
**tags:** [schema, verification, real-value, wiring-state, bottom-line, weekly-review]
**wisdom_considered:** [ARCH-00011 §4 (wiring-states SSOT — REFERENCED not forked), I23 EXISTS≠ACTIVE, I24 DIOS-ladder, I22 unverified-done, DoD, Principle 18C, Principle 22, RI-0063 (weekly deep-pattern session), ARCH-00430 (CIC-auditor C4 — the per-flow arm), RI-0064 (compound-cite/precision)]
**goal:** stabilize ONE SSOT schema for verifying REAL VALUE (not existence): per element, its wiring-state (ref ARCH-00011 §4) AND whether it delivers its initial intent's value, with evidence + independent verification; tag-driven; reviewed WEEKLY as a bottom-line. Measurable as: the schema exists as SSOT + a `wiring-value-report.sh` produces a per-element + aggregate board from tags + the weekly session consumes it.
**governing corespine:** CS-CREATION-001

## Pocket Declaration (§3.3)
- **reasoning_scope:** author the real-value-verification SSOT schema + its weekly bottom-line mechanism
- **inherited_constraints:** A4/A11/I25 (this plan gates the schema + check) · A8/I10 (REFERENCE the wiring-states SSOT ARCH-00011 §4, never redefine) · RI-0058 (a new check ships a both-directions fixture) · Principle 22 (no overclaim)
- **output_contract:** CISEM-SCHEMA-00002 (SSOT) + dna/checks/wiring-value-report.sh (+fixture) + ssot-registry entry, each citing this plan
- **ai_cannot:** redefine the wiring-states (reference ARCH-00011 §4 only); claim a value "delivered" without shown evidence + independent verifier (I23/I24); coin a second wiring-state ladder
- **recorded_at:** 2026-07-27
- **cal_reference:** CISEM-ARCH-00390 — run `bash dna/checks/plan-audit.sh`; [ZF] is the done-gate.
- **Independent Verifier:** cisem-haiku (protocol) + cisem-sonnet (implementability) — GI-68, distinct from author (Opus)

## Tier-Routing Declaration
Opus (this plan + the schema's methodology + soundness) · Opus/Sonnet (the report script per an Opus checklist) · the weekly session (WEE, ratified-unbuilt) consumes the schema+tags; no new agent (Governor decree).

## Executive Summary
CISEM measures effort by EXISTENCE/DECLARATION, not delivered value. The wiring-states axis (DECLARED→LIVE) exists (ARCH-00011 §4) and I23 enforces "prove activation," but nothing OPERATIONALIZES it into a per-element checklist with a SECOND axis — does the LIVE element deliver its INITIAL INTENT'S value — reviewed weekly. This schema is that operationalization: it REFERENCES the wiring-states SSOT (axis-1) and ADDS the value-delivery axis (axis-2), as a tag-driven checklist with a weekly bottom-line report. It coins no new wiring-state ladder (A8).

## Anti-Scatter Ordering (Principle 16)
Central: (1) the SSOT schema (2 axes + evidence-per-state + independent-verifier); (2) the tag convention; (3) the weekly bottom-line report mechanism (wire-don't-document — Principle 18C). Peripheral, parked (routed): aligning the drifted wiring-state MENTIONS (IBD-0003, CDS playbook, corespine-model draft) to the ARCH-00011 §4 SSOT (a separate consolidation sweep); the self-running weekly automation (folds into WEE); a mechanical `[VALUE]` gate.

## The Rule
1. Create `dna/schema/CISEM-SCHEMA-00002-real-value-verification-checklist.md` (SSOT) with `authorizing_plan` citation, tags, Status. It defines the per-element **verification record**:
   - **AXIS-1 wiring_state** — REFERENCE ARCH-00011 §4 (DECLARED→CONNECTED→ACCESSIBLE→LIVE; only LIVE counts, I23). Do NOT redefine; cite the SSOT.
   - **AXIS-2 value_delivered** — does the LIVE element achieve its INITIAL INTENT (the goal it was created for)? {yes/no/partial} + REQUIRED EVIDENCE (a shown run/outcome, not a doc — Principle 18C) + `verified_by` (INDEPENDENT, not the asserter — I23/I24; self-declaring the top state is invalid).
   - The **bottom line**: real value = LIVE (axis-1) AND value_delivered=yes (axis-2), evidence shown, independently verified. Anything less is "effort without proven value" — surfaced, not hidden.
2. Tag convention: elements carry `wiring_state:` (from the existing status/wiring enum) + a `value_delivered:` field (+ `evidence:`/`verified_by:` when yes) per the schema. The existing [TAG-STATUS] check already reads Status; this extends the surface, not a second enum.
3. Create `dna/checks/wiring-value-report.sh` (+ `dna/checks/fixtures/wiring-value-report/run-test.sh`, RI-0058 both-directions) — reads governed elements' wiring_state/value tags → emits a PER-ELEMENT board + the AGGREGATE bottom-line (% LIVE, % value-delivered, what stalled at DECLARED). WARN-only, on-demand + weekly cue. This is the "review weekly what happened, if it happened."
4. Register: naming-registry (SCHEMA 00002), ssot-registry (real_value_verification concept → this schema).

## Per-File Alignment Table
| File | ID / registry | Schema placement | tags | status |
|---|---|---|---|---|
| `dna/planning/CISEM-ARCH-00431-...md` (this) | CISEM-ARCH-00431 (naming 431→432) | T-SYS, planning-governance | schema, verification | RATIFIED / COMPLETE |
| `dna/schema/CISEM-SCHEMA-00002-...md` (NEW) | CISEM-SCHEMA-00002 (naming SCHEMA 2→3) | T-SYS, verification-schema | schema, real-value, wiring | to be created — PROVISIONAL-ACTIVE at build |
| `dna/checks/wiring-value-report.sh` (NEW) | check | T-SYS, check layer | check, verification, bottom-line | to be created — WARN-only |
| `dna/ssot-registry.yaml` | registry (existing) | T-SYS | registry | MODIFIED (add real_value_verification) |

## What DOES change
One new SSOT schema + one WARN report check (+fixture) + a value tag convention + registry entries.

## What does NOT change
The wiring-states ladder (ARCH-00011 §4 stays the SSOT — REFERENCED, not touched); the status enum; no new agent; no BLOCK-mode gate.

## Definition of Done
Per `dna/checks/definition-of-done.md`: schema on disk (authorizing_plan + tags/Status) referencing ARCH-00011 §4 (not redefining) + the report script RUNS and produces a board (shown output, Principle 18C — not a doc-only claim) + its fixture passes both directions + registered + GI-68 folded. Honest: the schema's VALUE is proven when the first weekly bottom-line runs on real elements (a follow-on).

## Propagation Declaration
ssot-registry gains `real_value_verification`. The schema REFERENCES ARCH-00011 §4 by-pointer (I10) — if the wiring ladder changes, this inherits, no regeneration. The CIC-auditor's C4 and this schema share the value-delivery concept (C4 per-flow; this per-element/portfolio) — cross-referenced, not duplicated.

## Dependencies
blocks-on: none (all referenced invariants exist). unblocks: the weekly bottom-line review; the CIC-auditor's C4 gains a per-element checklist to cite; auto-feeds WEE (RI-0063).

## Self-compliance (vs ARCH-00230)
Existing-First: full §3.2b — ssot-registry (found `wiring_states` SSOT = ARCH-00011 §4 → REFERENCE it, the Principle-22 catch that prevented a fork) + naming-registry (SCHEMA next_seq 2) + no existing value-verification schema/check + grep. Tags+Status present. Pocket + Verifier + Core Seeds + soundness present. Under 200 lines.

## Path Rejection Declaration
- ❌ **A new wiring-state ladder / SSOT** — REJECTED (Principle 22 catch): ARCH-00011 §4 already IS the SSOT (ssot-registry `wiring_states`). Redefining = the A8 fork this schema exists to catch. REFERENCE only.
- ❌ **A third agent (a "value verificator" agent)** — REJECTED by Governor 2026-07-27: the CIC-auditor's C4 + the weekly session are the experts; a 3rd agent forks them.
- ❌ **value_delivered self-declared** — REJECTED: axis-2 requires shown evidence + an INDEPENDENT verifier (I23/I24), never the asserter's own say-so.

## CORE SEEDS (immutable)
[[CORE-SEED | MUST: AXIS-1 (wiring_state) REFERENCES the SSOT at ARCH-00011 §4 (DECLARED→CONNECTED→ACCESSIBLE→LIVE) — this schema NEVER redefines or forks the ladder | WHY: A8/I10 — one source; a second ladder is the exact drift this schema audits (ssot-registry confirms ARCH-00011 §4 is the home) | VERIFY: the schema cites ARCH-00011 §4 and defines no new state names | APPLIES_TO: CISEM-SCHEMA-00002 axis-1, permanently]]
[[CORE-SEED | MUST: AXIS-2 (value_delivered) passes ONLY on shown EVIDENCE of the initial intent being achieved (a run/outcome, Principle 18C) + an INDEPENDENT verifier (not the asserter — I23/I24) | WHY: 'LIVE' proves the mechanism runs, NOT that it delivers value; self-declaration is the DIOS anti-pattern | VERIFY: every value_delivered=yes cites evidence + a distinct verifier | APPLIES_TO: axis-2, permanently]]
[[CORE-SEED | MUST: the weekly report is a RUNNING mechanism (wiring-value-report.sh with a both-directions fixture, RI-0058) that SHOWS a board — never a documented intention | WHY: a value-verifier that is itself only documented is the failure it audits (Principle 18C/22) | VERIFY: the script runs + emits a board + its fixture passes | APPLIES_TO: the weekly bottom-line mechanism]]

## Opus Stage-1 Soundness Verdict (for [RATIFY-GATE])
**SOUND.** References the wiring-states SSOT rather than forking it (Principle-22-corrected mid-design), adds a genuinely-new value-delivery axis, is WARN-only (no blast), and its report is a running mechanism not a doc (Principle 18C). The one honest limit — the schema's value is proven on the first real weekly run — is disclosed. No collateral change. Governor ratified informed (saw the design + the no-third-agent constraint). Build warranted.

## Change log
- v1.0 — 2026-07-27 (Opus authored + Governor informed ratification): authorizes CISEM-SCHEMA-00002 + wiring-value-report.sh. Principle-22 correction folded (reference ARCH-00011 §4, do not fork). GI-68 dispatched post-build.
