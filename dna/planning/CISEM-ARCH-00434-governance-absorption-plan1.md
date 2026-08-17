---
**Node ID:** CISEM-ARCH-00434 | **Type:** ARCH | **Status:** PROVISIONAL-ACTIVE
**Planning Status:** COMPLETE
**depth_level:** L2
**tags:** [planning, governance, validation, threshold, absorption]
**goal:** Wire 5 governance patterns from cross-platform absorption into CISEM
**governing corespine:** CS-CREATION-001
**date:** 2026-08-17
**Independent Verifier:** cisem-haiku (protocol-lens) + cisem-sonnet (implementability-lens) — GI-68 dual review
**wisdom_considered:** GI-10 (Existing-First stated below), GI-11 (plan mandatory), GI-65 (operating protocol)
---

# Plan 1 — Governance Absorption (5 Patterns)
**Node ID:** CISEM-ARCH-00434

## Pocket Declaration (§3.3)
- **reasoning_scope:** draft the 5-item absorption plan; no implementation authorized until Governor ratifies
- **inherited_constraints:** ARCH-00190 (PLAN-PROTOCOL); Axioms A1–A12; Doctrine D1–D6; I7 no truth-fields
- **output_contract:** a ratifiable plan skeleton covering all ARCH-00190 sections; ready for Opus Stage-1 soundness review
- **ai_cannot:** implement any step; ratify; write new statuses on governed nodes
- **recorded_at:** 2026-08-17
- **cal_reference:** CISEM-ARCH-00390 (CAL); run `bash dna/checks/plan-audit.sh` before any done claim

## Existing-First Search (§3.2b — I19)
Searched: ssot-registry.yaml, naming-registry.yaml, planning/ dir, root-insights.yaml, governor-insights sealed list.
- tri-state: NO existing I27 — new invariant candidate
- five-business test: NOT in FOUND-00001, NOT in CLAUDE.md §2.4 — new addition
- four-label taxonomy: NOT wired anywhere (Governor instruction exists only in conversation — this plan wires it)
- upgrade-path rule: NOT in plan-audit.sh — new check
- crash-reports: RI-0074 exists in root-insights.yaml (PARKED) — this plan PROMOTES it, not creates
- Fable g1 guard: NOT in any DoD — new DoD line

## Tier-Routing Declaration (§3.0)
- **Haiku:** S1 (protocol-lens dual review); enumerate which plan-audit.sh lines change
- **Sonnet:** S2 (implementability-lens dual review); S3–S7 execution after ratification (plan-audit.sh edits, root-insights.yaml entry, agent file MODE header additions, WITNESS template labels, CLAUDE.md addition)
- **Opus:** S0 (soundness review, this document); S8 (post-build verification + Core Seeds on any Sonnet handoff)
- **Exception noted:** Opus drafts this skeleton because the goal + scope are fully pre-agreed (3 sessions of Opus↔Brain consensus); routing overhead > the work for a skeleton draft

## Executive Summary
Plan 1 absorbs five governance findings that surfaced during cross-platform work into CISEM's permanent enforcement layer. Item 1 (tri-state I27) closes the binary-presence failure class. Item 2 (five-business test) gives CISEM a concrete falsification test for universal-vs-domain-specific. Item 3 (four-label taxonomy) wires an existing Governor instruction into WITNESS/handoff protocol so it stops living only in conversation. Item 4 (upgrade-path-before-gate) prevents any self-verifying mechanism from being built without a ratified upgrade path. Item 5 (crash-reports principle) promotes RI-0074 from PARKED to wired root insight with named status. All five are wiring or minor additions — no architectural changes.

## Anti-Scatter Ordering (Principle 16 — ranked by significance vs goal/DNA)
1. **CENTRAL:** S1–S2 (dual review) — must clear GI-68 gate before any build
2. **CENTRAL:** S3 (I27 tri-state into plan-audit.sh + agent prompts) — closes highest-impact gap (Roof 6 class; 3 prior fabrications)
3. **CENTRAL:** S4 (upgrade-path check into plan-audit.sh) — prevents build-without-upgrade-path recurrence
4. **CENTRAL:** S5 (RI-0074 promote + crash-reports naming) — small, immediate, RI-0074 already parked
5. **SUPPORTING:** S6 (four-label wiring into WITNESS + handoff) — wires conversation-only instruction
6. **SUPPORTING:** S7 (five-business test into CLAUDE.md) — Governor decides exact placement
7. **PERIPHERAL (parked, not in this plan):** FOUND-00001 axiom expansion, CS-DATA-PATTERNS-001, A-1/3/4/5 — see What DOES NOT Change

## The Rule
**S0 (Opus — pre-ratification):** Opus runs Stage-1 soundness review on this plan. Dual review (S1+S2) dispatched only after S0 verdict = SOUND.

**S1 (Haiku — dual review, protocol-lens):**
- Confirm no I1 dangling references; confirm every new node cited has a registry entry or is explicitly tagged NOT-YET-A-NODE
- Confirm I27 candidate follows invariant-registration protocol (dna/protocols or ARCH-00320 §4)
- Confirm all DoD lines align with dna/checks/definition-of-done.md
- Confirm Fable g1 guard is captured in DoD and cited correctly

**S2 (Sonnet — dual review, implementability-lens):**
- Confirm steps S3–S7 are executable as written (no ambiguity, no missing file paths)
- Confirm plan-audit.sh edit scope is bounded (which function/line range; no collateral deletion risk)
- Confirm agent file edits scope: MODE header only, no seed alterations (I13)

**S3 (Sonnet — post-ratification, builds):** Add tri-state check to plan-audit.sh:
- New `[I27]` check: scan `dna/checks/*.sh` for binary-presence patterns (`-f $`, `!= ''`, `grep -c`, `[ -e `) that do NOT have ABSENT|PLACEHOLDER|REAL_BOUND within ±10 lines. WARN per hit: "binary-presence assertion — use tri-state". Scans check scripts only (not plan markdown — semantic plan scanning is not machine-reliable).
- Add `[I27]` to cisem-haiku.md MODE header (one line): "when checking artifact/credential presence in a check script, use ABSENT/PLACEHOLDER/REAL_BOUND — never binary pass/fail"
- Add `[I27]` to cisem-sonnet.md MODE header (one line): same
- Planted test (Fable g1): in plan-audit.sh [I27] section, add string `PLANTED_I27_BINARY="true"  # planted-fail: triggers [I27] binary-presence detector` and assert WARN fires on it

**S4 (Sonnet — post-ratification, builds):** Add upgrade-path check to plan-audit.sh:
- Definition: "self-verifying mechanism" = any file matching `dna/checks/*.sh` or `.git/hooks/*`. Concrete and grep-detectable.
- New `[UPGRADE-PATH]` check: scan staged dna/planning/*.md for plans whose `what_changes:` mentions `dna/checks/` or `.git/hooks/` AND whose header does NOT contain `upgrade_path:` field. WARN: "plan adds to check/hook layer without upgrade_path:".
- Planted test (Fable g1): planted-fail fixture header with `what_changes: dna/checks/` but no `upgrade_path:` — assert WARN fires

**S4b (Opus writes Core Seed; Sonnet inserts — post-ratification):** Add upgrade-path prose to CLAUDE.md:
- Placement: sub-rule under Principle 18 (WIRE-DON'T-DOCUMENT), after existing sub-rules
- Core Seed to insert: [[CORE-SEED | MUST: any plan whose what_changes includes a file in dna/checks/ or .git/hooks/ MUST declare upgrade_path: in its header — a check or hook built without a ratified upgrade path becomes an unmaintainable gate | WHY: prevents build-and-freeze; a self-verifying mechanism with no upgrade path is locked until emergency surgery | VERIFY: does the plan's header contain upgrade_path: if it touches any file in dna/checks/ or .git/hooks/? | APPLIES_TO: all tiers — any plan that adds or modifies a check script or git hook]]

**S5 (Opus — post-ratification, builds):** Promote RI-0074 in root-insights.yaml:
- Routing: `status:` is truth-bearing (I7 Hard Line) → Opus only (NOT Sonnet — corrected from v0.1)
- Actual current status (verified by Sonnet dual review): "NAMED 2026-08-15 — principle stated; wiring via Plan 1 (pending ratification)."
- Transition: NAMED → WIRED-INTO-BEHAVIOR (after ratification + all build steps complete)
- Opus adds named label: "crash-reports pattern" with cross-reference to Principle 17 honest-reporting sub-rule

**S6 (Sonnet — post-ratification, builds):** Wire four-label taxonomy into CLAUDE.md §1.8:
- File: CLAUDE.md only (WITNESS-00003 is a session-state document, not a template; no separate template file exists — "or" in v0.1 resolved to CLAUDE.md §1.8)
- Target: CLAUDE.md §1.8 THE RELAY paragraph — add one sentence: "Claim annotation: use VERIFIED (disk evidence) / FILE-EVIDENCE (file reference) / INFERRED (derived) / UNKNOWN (unverified) on every factual claim in relay packets and COMPACT STATE entries."

**S7 (Sonnet — post-ratification, builds):** Add five-business test to CLAUDE.md:
- BLOCKED on Governor placement decision (see Dependencies — blocks-on added)
- Governor decides EXACT section (§2.4 extension, §1.6 shared-persona, or new §2.10) BEFORE S7 executes
- Core Seed ready (verbatim, Sonnet inserts at decided location): [[CORE-SEED | MUST: before admitting any concept to shared CISEM core, fill it for law firm / supermarket / manufacturer / education business / B2B platform — if any of the five can't be filled, it's domain-specific, not universal core | WHY: prevents domain-specific content from being promoted to CISEM invariants without falsification testing | VERIFY: can all five business types fill this concept without forcing a fit? | APPLIES_TO: all tiers — any proposal to add a new universal-scope concept to CISEM DNA]]

**S8 (Opus — post-build):** Verify all five items complete + DoD gate:
- plan-audit.sh [I27] planted-fail fires (behavioral proof — run plan-audit.sh, grep output for [I27] WARN)
- plan-audit.sh [UPGRADE-PATH] planted-fail fires (behavioral proof — same run)
- RI-0074 status = WIRED-INTO-BEHAVIOR (Opus grep confirms root-insights.yaml)
- CLAUDE.md §1.8 four-label sentence present (grep confirm)
- CLAUDE.md five-business test Core Seed at Governor-decided location (grep confirm)
- CLAUDE.md Principle 18 upgrade-path Core Seed present (grep confirm)
- cisem-haiku.md + cisem-sonnet.md MODE headers have [I27] line (grep confirm)
- Commit: Sonnet-staged files, specific only (no `git add -A`); Opus reviews diff before staging

## Tags + Statuses on Every Node This Plan Creates/Modifies

| Node | Action | Tags | Status |
|---|---|---|---|
| plan-audit.sh | MODIFY (new [I27] + [UPGRADE-PATH] checks + planted tests) | [check, enforcement, plan-audit] | LIVE |
| dna/learning-registry/root-insights.yaml | MODIFY (RI-0074 status update) | [root-insights, prevention] | (existing, status change only) |
| .claude/agents/cisem-haiku.md | MODIFY (MODE header [I27]) | [agent, haiku, invariant] | PROVISIONAL-ACTIVE |
| .claude/agents/cisem-sonnet.md | MODIFY (MODE header [I27]) | [agent, sonnet, invariant] | PROVISIONAL-ACTIVE |
| CLAUDE.md §1.8 relay section | MODIFY (four-label sentence) | [protocol, relay, four-label] | (existing — same CLAUDE.md row below) |
| CLAUDE.md | MODIFY (five-business test seed + upgrade-path principle) | [always-loaded, governance] | (existing) |

*No new nodes are created; this plan is wiring-only.*

## Per-File Alignment Table

| File | ARCH# | Schema (SCHEMA-00001) | Tag | Status |
|---|---|---|---|---|
| dna/checks/plan-audit.sh | ARCH-00320 (owner) | Check-layer | [check] | LIVE (ARCH-00320 manages) |
| dna/learning-registry/root-insights.yaml | ARCH-00406 (RIPL owner) | Learning registry | [root-insights] | LIVE |
| .claude/agents/cisem-haiku.md | ARCH-00300 (agent pool) | Agent definition | [agent] | PROVISIONAL-ACTIVE |
| .claude/agents/cisem-sonnet.md | ARCH-00300 (agent pool) | Agent definition | [agent] | PROVISIONAL-ACTIVE |
| CLAUDE.md | CISEM-LOAD-00001 (SSOT) | Always-loaded | [constitution] | LIVE |

## What DOES Change
1. `plan-audit.sh`: new `[I27]` check (tri-state presence assertion) + `[UPGRADE-PATH]` check + 2 planted-fail tests
2. `root-insights.yaml`: RI-0074 status NAMED → WIRED-INTO-BEHAVIOR (Opus-only, I7); name "crash-reports pattern" added
3. `cisem-haiku.md` + `cisem-sonnet.md`: MODE header — one line each: "[I27] presence checks use ABSENT/PLACEHOLDER/REAL_BOUND"
4. CLAUDE.md: five-business test `[[CORE-SEED]]` (Governor decides exact section, S7 blocked until decided); upgrade-path Core Seed (sub-rule under Principle 18, S4b); four-label sentence in §1.8 relay section (S6)

## What DOES NOT Change
- FOUND-00001: no axiom additions (GI-63 process required; not in scope)
- CS-DATA-PATTERNS-001: pending Governor decision; not touched
- A-1/3/4/5 axioms: wait for CS-THRESHOLD-001 body plan
- plan-audit.sh exit semantics: still exits 0 (ARCH-00270 v2 addresses [ZF] graduation; this plan does NOT change exit behavior)
- Any schema/entity patterns (22 items): not in scope
- ARCH-00435 (enforcement tier): separate plan; this plan DOES NOT change enforcement_tier architecture

## Definition-of-Done (reference: dna/checks/definition-of-done.md)
- ✓ wired: each change is in a committed file on main
- ✓ propagated: CLAUDE.md + agent headers reflect new invariants
- ✓ hooked: plan-audit.sh [I27] + [UPGRADE-PATH] run on pre-commit
- ✓ planted-tested: `[I27]` and `[UPGRADE-PATH]` each have a planted-fail test at their entry point (Fable g1 guard)
- ✓ pushed: branch main updated on remote
- ✓ verified: Opus S8 confirms all five items and behavioral proof shown
- NOT-YET-WIRED: I27 as a formal invariant in ARCH-00320 §4 (requires its own node + Governor ratification of the invariant text — separate follow-on; this plan wires the CHECK, not the invariant registration)

## Propagation Declaration
- five-business test `[[CORE-SEED]]`: embedded inline in CLAUDE.md — it IS the propagation mechanism (always-loaded)
- upgrade-path rule: embedded in CLAUDE.md (always-loaded) + checked by [UPGRADE-PATH] in plan-audit.sh
- [I27] tri-state: propagates via plan-audit.sh (pre-commit fires it) + agent MODE headers (referenced, not duplicated)
- four-label taxonomy: propagates via CLAUDE.md §1.8 reference + WITNESS template field names
- RI-0074: propagates via root-insights.yaml (RIPL weekly batch ARCH-00406 picks it up)
- Which views regenerate: ssot-registry.yaml `learning_outcomes.regenerates` entry for root-insights — no auto-engine (hand-sync, P4 scope)

## Dependencies
- **blocks-on:** GI-68 dual review (S1+S2) must pass before any build step
- **blocks-on:** ARCH-00270 v2 ratification (I27's planned graduation to BLOCK mode waits for [ZF] graduation; but S3 can add [I27] as WARN-only independently)
- **blocks-on:** Governor placement decision for five-business test in CLAUDE.md (S7 cannot execute until section is named; this is NOT listed as a build-time dependency — it is a pre-ratification decision the Governor makes alongside ratification)
- **unblocks-for:** ARCH-00435 (enforcement tier plan, NOT-YET-WIRED — future plan, not yet on disk) — [I27] is the first new check ARCH-00435 would classify with enforcement_tier; having it built gives ARCH-00435 a real example
- **unblocks-for:** Consolidation Plan C1 (P2 machine-readable enum) — ABSENT/PLACEHOLDER/REAL_BOUND and the four labels become new enum entries C1 must absorb

## Self-Compliance (this plan follows its own rules)
- [x] Existing-First search stated (I19)
- [x] Tier-Routing Declaration present
- [x] Anti-Scatter Ordering applied to plan steps
- [x] Tags + Statuses on every created/modified node
- [x] Per-File Alignment Table complete
- [x] DoD referenced (dna/checks/definition-of-done.md)
- [x] Propagation Declaration present
- [x] Dependencies explicit (blocks-on, unblocks-for)
- [x] What DOES change: specific (files + fields)
- [x] What DOES NOT change: explicit boundary
- [x] Independent Verifier named (Haiku + Sonnet, GI-68)
- [x] Path Rejection Declaration present (below)
- [x] Size gate: ~175 lines (within 200-line limit)
- [x] Planted-test DoD: explicitly included (Fable g1 guard folded in)

## Path Rejection Declaration
- **Rejected: Fold P2 (machine-readable enum) into this plan** — P2 is a larger structural refactor that could conflict with adding new checks here; best done AFTER Plan 1 so P2 absorbs the new values cleanly. Keeps Plan 1 focused on wiring, not restructuring.
- **Rejected: I27 as a BLOCK-mode check immediately** — ARCH-00270 v2 graduation not yet ratified; adding a new BLOCK-mode check without that graduation would bypass the [ZF] graduation process. Starting as WARN-only is correct.
- **Rejected: CS-DATA-PATTERNS-001 resolution in this plan** — Brain resolved it (move home + keep test in DNA), but the Governor hasn't confirmed; parked as a pending decision, not in scope here.
- **Rejected: all five items folded into CLAUDE.md only** — behavioral wiring without a mechanical check (plan-audit) is documentation-as-progress (Principle 18C). The check layer is required.

## Change Log
- v0.1 — 2026-08-17: Opus skeleton draft (CISEM-ARCH-00434). Wizard STEP 1 complete. Planning Status: AWAITING-BUILDER-REVIEW.
- v1.0 — 2026-08-17: RATIFIED (Governor decree "PROCEED" 2026-08-17). Planning Status: COMPLETE. Build starts next session.
- v0.2 — 2026-08-17: Opus value-filtered GI-68 dual-review findings (Haiku protocol-lens + Sonnet implementability-lens). Fixed: S3 trigger → grep pattern on dna/checks/*.sh; S4 trigger → self-verifying = dna/checks/*.sh or .git/hooks/*; added S4b (CLAUDE.md upgrade-path Core Seed step); S5 rerouted to Opus (I7 Hard Line) + corrected status (NAMED not PARKED); S6 "or" resolved to CLAUDE.md §1.8 only; S7 dependency added (Governor placement decision blocks-on); S8 updated (6 behavioral greps listed); ARCH-00435 flagged NOT-YET-WIRED in Dependencies; "What Changes" item 5 removed (merged into item 4). Planning Status remains AWAITING-BUILDER-REVIEW — awaiting Opus Stage-1 SOUND verdict.
