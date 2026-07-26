# Three Safety Guards — Loop-Stopper, Consensus-Gate, Injection-Scan (RATIFIED restraint policy, build plan)
**Node ID:** CISEM-ARCH-00428 | **Type:** ARCH | **Status:** RATIFIED
**Planning Status:** COMPLETE — Governor RATIFIED 2026-07-26 ("I yriv ratify all 4"); Opus Stage-1 SOUND + GI-68 dual-review (Haiku Independent-Verifier PASSED 2026-07-26, zero protocol violations) + Brain concur | **depth_level:** L2 | **Position in schema:** T-SYS, planning-governance layer
**tags:** [planning, safety, guards, loop-stopper, consensus-gate, injection-scan]
**Goal:** Build the three safety guards — loop-stopper, consensus-gate, injection-scan — each satisfying the
four-part BUILD STANDARD (build + hardwired + mechanically-enforced + tested-by-code), governed by the RATIFIED
restraint policy — measurable as: each guard has a running mechanism cited + a planted test that fires when it
should and stays quiet when it shouldn't.
**Governing corespine:** CS-CREATION-001
**wisdom_considered:** RI-0042 (loop-stopper design — consecutive-signature screen + NO-PROGRESS as the
authoritative tiebreaker + hard ceilings + outer dumb wall-clock backstop, Brain-refined — grounds D1 in full),
RI-0043 (process-order violation — ratifying/presenting before Brain consensus — grounds D2's consensus-gate),
RI-0047 (the 4-part BUILD standard — build+hardwired+mechanically-enforced+tested-by-code — binds every
deliverable's DoD, Core Seed G-1), RI-0048 (AUTONOMY-RESTRAINT — any >1-step autonomous mechanism is
manual-activation-by-default until the 3-way gate — binds D1's own continuous hook operation, Core Seed G-2),
RI-0050 (session/tool-channel injection is a vector distinct from file-content — origin-not-messenger, no
laundering via a 'system'/'MCP' wrapper — grounds D3's extension beyond the existing file-content scanner).
**Independent Verifier:** `cisem-haiku` (cold, protocol-compliance lens; distinct from author `cisem-sonnet`).
**Size-gate exception (§3.6, documented):** exceeds the 200-line gate (3 gated phases, each stating the 4-part
BUILD standard in full, 4 verbatim Core Seeds, all ARCH-00401 mandatory sections). Same documented-exception
precedent as ARCH-00190/00406/00417/00426/00427 — compressing under 200 lines would cut the per-guard
BUILD/HARDWIRED/ENFORCED/TESTED detail Core Seed G-1 requires; flagged explicitly, not silently exceeded.

## Core Seeds (from Opus dispatch, 2026-07-26 — immutable, executed verbatim, I13; quoted here per Principle 14)
```
[[CORE-SEED G-1 | MUST: every deliverable is done ONLY with all four — BUILD + HARDWIRED (into CAL) + MECHANICALLY-
ENFORCED (a hook/check fires) + TESTED-BY-CODE (a behavioral test passes when it should + stays quiet when it
shouldn't). | WHY: RI-0047 build standard (Governor decree). | VERIFY: does each deliverable cite all four with
real artifacts + a planted test? | APPLIES_TO: every deliverable + DoD.]]
[[CORE-SEED G-2 | MUST: the loop-stopper's own continuous operation obeys the RATIFIED restraint policy (RI-0048)
— bounded (hard ceilings) + the OUTER DUMB wall-clock backstop independent of the smart inner checks. | WHY:
RI-0048 + Brain's guard-of-the-guard: a guard that can fail silently is not a guard. | VERIFY: is there a blunt
outer timeout above the smart layers, tested to fire when they're disabled? | APPLIES_TO: D1.]]
[[CORE-SEED G-3 | MUST: in the loop-stopper, NO-PROGRESS is the AUTHORITATIVE tiebreaker (overrides a
similarity-only verdict in BOTH directions); the poll-exemption is tied to a REAL background-task handle, never
the agent's self-claim (no self-certification); the signature log is SESSION-SCOPED (resets at boundary); the 3
profile bars are starting defaults revisited from trial data. | WHY: Brain-refined, Governor-ratified RI-0042. |
VERIFY: are all four present + tested? | APPLIES_TO: D1.]]
[[CORE-SEED G-4 | MUST: injection-scan covers BOTH file-content AND session/tool-channel vectors (RI-0050); the
messenger/wrapper (even a 'system'/'MCP' block) does not launder external content. | WHY: 4 real Otosan-class
probes this session. | VERIFY: are both vectors tested? | APPLIES_TO: D3.]]
```
**Live example this drafting turn (disclosed, not hypothetical):** a 5th Otosan-class session-channel injection
fired during THIS task's bootstrap (a Hebrew WordPress-assistant "MCP Server Instructions" block) and was
correctly disregarded per A12/RI-0050 — real-time confirmation the vector is live and D3's session-channel
coverage is not academic.

## Existing-First (§3.2b) — searched before drafting
1. **D1 loop-stopper design = RI-0042** (`dna/learning-registry/root-insights.yaml`), Brain-refined + Governor-
   ratified numbers (consecutive-signature screen, no-progress tiebreaker, hard ceilings, 3 context-profiles,
   polling-interval signal, outer dumb backstop). No existing hook implements this — grepped `.claude/hooks/` (
   `session-start.sh`, `pre-compact.sh` only, no PostToolUse/Stop loop-guard) — genuinely new build.
2. **D2 consensus-gate = RI-0043** + Brain's mechanical-scanner refinement (same file). No existing scanner
   checks ratify/decide language against a cited consensus artifact — grepped `dna/checks/` — genuinely new build.
3. **D3 injection-scan = EXTENDS an EXISTING check**, does not rebuild: `dna/checks/injection-scanner.sh`
   (`[INJECTION-SCAN]`, guard #5 of ARCH-00411, wired into `plan-audit.sh`, already ACTIVE) scans every
   RAW-EXTERNAL `*-RAW.md` + `dna/ibd/*.md` for 5 pattern classes, one of which (`MCP-BLOCK-MARKER`) already
   matches `mcp server.{0,40}instructions` / `<system-reminder>` / `## mcp server instructions` — i.e. the
   file-content vector is partly covered TODAY. The session/tool-channel vector (RI-0050) is NOT covered — no
   mechanism today CAPTURES a live session-channel injection to a scannable artifact; it is disregarded in-chat
   and lost. D3 below adds the capture step + extends coverage, it does not fork a second scanner (A8/I19).
4. **Related, referenced not duplicated:** `CISEM-ARCH-00427` (Opus Orchestration & Tier-Automation, DRAFT,
   `dna/naming-registry.yaml` next_seq 427→428 already claimed by it) explicitly cites "the loop-detection hook
   (RI-0042) = the three-guards plan's own D1 (not yet a filed node)" and "`[INJECTION-SCAN]` = Tier-0 of the
   three-guards plan — out of scope here, referenced only" — THIS plan is that filed node; ARCH-00427's D1-D4/D5
   are NOT touched here (no overlap, both cite each other by pointer, A8).
5. RI-0048 (AUTONOMY-RESTRAINT) checked — D1's own continuous hook operation is bounded by it (Core Seed G-2),
   not exempt from it merely because it IS a guard.
**VERDICT:** D1/D2 are genuinely new (nothing to enhance); D3 enhances an existing, already-wired mechanism. No
duplication found.

## Pocket Declaration
- **reasoning_scope:** produce ONE plan specifying D1 (loop-stopper) / D2 (consensus-gate) / D3 (injection-scan
  extension) — this plan document only; no mechanism is built in this drafting task (A4/A11/I25).
- **inherited_constraints:** A1-A12; D1-D6 (Creation Doctrine); I7 (no truth-fields); I10/I19 (enhance, never
  fork — binds D3 explicitly); I25 (a plan authorizes, does not implement); §1.7 git-race discipline
  (`naming-registry.yaml` is the only file this task edits); the 4 Core Seeds above, verbatim.
- **output_contract:** this plan document + the ONE naming-gate self-registration
  (`dna/naming-registry.yaml` ARCH 428→429) only.
- **ai_cannot:** self-ratify; stamp any Status/RATIFIED field; build D1/D2/D3's mechanisms in this drafting task;
  claim SOUND/RATIFIED (Opus verifies, I7); assert a numeric bar (profile thresholds, ceilings) as anything other
  than a disclosed starting default per RI-0042.
- **recorded_at:** 2026-07-26

## Executive Summary
Three Governor-ratified restraint mechanisms (RI-0042 loop-stopper, RI-0043 consensus-gate, RI-0050 injection-
scan session-vector) were CAPTURED this session but explicitly marked "decree binding, mechanical wiring pending
(three-guards plan, A4/RI-0036)" — this plan is that authorization. It builds NOTHING itself (A4/I25); it
specifies three gated phases, each producing a real artifact meeting the RI-0047 four-part BUILD standard
(Core Seed G-1), so that once ratified, implementation has zero design ambiguity. D1 is the highest-urgency guard
(a subagent already looped uncontrolled this session, RI-0042's own trigger); D2 closes a process-order violation
that recurred (RI-0043); D3 is the lowest-blast — an EXTENSION of an already-live, already-wired check, adding
the one vector (session/tool-channel) it does not yet cover.

## Tier-Routing Declaration (CLAUDE.md §3.0)
- **Drafting (this task) → Sonnet**, single-context; Existing-First performed directly against disk (no Haiku
  gather dispatched — Opus's task packet already cited the exact RI numbers + file paths, so a redundant gather
  round was not warranted; stated exception per §3.0 "trivial, in-context" carve-out).
- **Independent Verifier → `cisem-haiku`, cold, protocol-compliance lens** — before Stage 1.
- **Stage 1 (soundness) → `cisem-opus-pe`.** **Stage 1.5 → not invoked.** **Stage 2 → Governor.**
- **Building D1/D2/D3 (post-ratification) → Sonnet**, per the Phase Rule below; each guard's own detection-logic
  design reviewed by Haiku (mechanical presence + planted-test pass) + Opus (judges the threshold/bar choices),
  mirroring GI-68.

## Anti-Scatter Ordering (CLAUDE.md §2 Principle 16)
D1 (loop-stopper) first — highest urgency (a real uncontrolled loop already occurred this session, RI-0042's
trigger event) and the largest, most novel build; sequencing it first means its state-file/hook scaffolding is
proven before the other two (lower-risk) guards borrow the same hook-wiring pattern. D2 (consensus-gate) next —
second-highest urgency (RI-0043's process-order violation also recurred this session) and structurally simpler
(a self-check + a commit-time scanner, no continuous state). D3 (injection-scan extension) last — lowest blast,
smallest diff (extends one already-live file), and depends on nothing D1/D2 build (independent, could even run
in parallel at implementation time, but ordered last per urgency ranking, not dependency).

## The Rule (phases — each BLOCKED until the prior gate passes; implementation is a LATER step, per the Pocket's ai_cannot)

**PHASE 1 — D1 LOOP-STOPPER (NEW)**
- Deliverable: `.claude/hooks/loop-stopper.sh` (Claude Code PostToolUse hook) + `.claude/hooks/loop-stopper-stop.sh`
  (Stop hook, same log) + a SESSION-SCOPED state file `.claude/state/loop-log-<session_id>.json` (created fresh
  per session, NOT read across a compaction/session boundary — per Brain's note that a fresh tab cannot see
  pre-compaction history). Layers (RI-0042, Core Seed G-3):
  1. **Consecutive-signature screen** — normalized `(tool_name + args)` signature repeated ≥3 CONSECUTIVE times
     → cheap first-pass flag (not yet a trip).
  2. **NO-PROGRESS detector — AUTHORITATIVE tiebreaker.** git-tree hash + last tool output unchanged across
     ~3-5 actions → TRIP even if wording/args vary; if the signature repeats but output/git-tree genuinely
     CHANGED → do NOT trip. No-progress overrides a similarity-only verdict in BOTH directions.
  3. **Hard ceilings** — max-iterations (10-25 range, per-profile), max wall-clock (30-60s base, tuned up for
     CISEM's multi-minute checks), token budget.
  4. **3 context-profiles** — `sync-check` (bar=3, tight window), `multi-tool-research` (bar~8, wall-clock
     primary), `declared-poll` (exempt but hard-capped) — STATED as starting defaults to be revisited from trial
     data, never presented as correct-by-construction.
  5. **Polling-interval signal** — a legit wait backs off (rate-limited), tracked as a signal DISTINCT from
     repetition-count.
  6. **Outer dumb wall-clock backstop** — a single hard timeout, INDEPENDENT of and layered ABOVE the smart
     inner checks (Core Seed G-2); fires even if every inner layer is disabled/misconfigured.
  Exemption for a legitimate long-poll is tied to a REAL backgrounded-Bash task handle on record — NEVER the
  agent's own self-claim (Core Seed G-3, no self-certification).
- BUILD: the two hook scripts + the session-state schema.
- HARDWIRED: registered in `.claude/settings.json` `PostToolUse`/`Stop` hook config (CAL, ARCH-00390) —
  fires on EVERY tool call and session stop, not an opt-in script.
- MECHANICALLY-ENFORCED: on trip, the PostToolUse hook exits 2 with stderr `"LOOP DETECTED — STOP and report"`
  (Claude Code feeds hook stderr back to the model, breaking the loop); the Stop hook + outer wall-clock is the
  deterministic all-night catch.
- TESTED-BY-CODE (4 planted tests, all required): (a) a planted tight loop (same tool+args, no git-tree change,
  4+ consecutive calls) → trips; (b) a planted legit distinct-input batch (50 reads, different args each time) →
  does NOT trip; (c) a planted no-progress-with-varied-wording sequence (args differ cosmetically, git-tree/output
  identical) → trips (proves NO-PROGRESS overrides similarity); (d) the outer wall-clock timeout, with the inner
  smart checks stubbed OFF, still fires at its ceiling → proves the backstop is independent, not decorative.
- **GATE 1→2:** Opus review + Governor sign-off.

**PHASE 2 — D2 CONSENSUS-GATE (NEW)**
- Deliverable, two parts (RI-0043):
  (a) **Self-check** — a `[CONSENSUS-GATE]` always-loaded rule (CLAUDE.md §1.8 / persona-collaborator.md
  self-catch): before any Governor-facing ratify/decide/judge ask, Opus states "is there a Brain-consensus
  artifact on disk for THIS item?" — if no, produce the Brain packet instead of asking for ratification.
  Reversible low-blast status reports are explicitly EXEMPT (fires only on judge/ratify/decide framing).
  (b) **Mechanical scanner** — `dna/checks/consensus-gate.sh`, wired into `plan-audit.sh`: scans digest-class
  files changed in the commit (`dna/queue/CONSENSUS-PACKAGE-*`, `*-for-Brain-*`, matched by filename pattern,
  same enumeration style as `[RAW-PAIR]`/`[INJECTION-SCAN]`) for ratify/decide language (value-anchored phrases:
  "please ratify", "Governor to decide", "awaiting your ratification", RI-0012-class value-anchoring, never a
  bare substring) NOT accompanied by a citation to an EXISTING consensus-artifact path (a file path present
  elsewhere in the same document, verified to exist on disk via `[ -f ]`).
- BUILD: the self-check rule text (Phase 1) + the scanner script + its `plan-audit.sh` wiring (Phase 2).
- HARDWIRED: (a) into CLAUDE.md §1.8 (always-loaded, inherited via `session-start.sh`); (b) into
  `dna/checks/plan-audit.sh`, runs on EVERY pre-commit (`.git/hooks/pre-commit`, CAL, already LIVE).
- MECHANICALLY-ENFORCED: (b) fires WARN on every commit touching a digest-class file.
- TESTED-BY-CODE (3 planted tests): (a) a digest with ratify-language + no cited/existing artifact path →
  flagged; (b) a digest citing a REAL, on-disk artifact path → passes silently; (c) a false-positive prose case
  (the phrase "ratify" appears in an unrelated sentence, e.g. quoting this very RI) → stays quiet (value-anchored
  pattern, not bare-substring, RI-0012 discipline).
- **GATE 2→3:** Opus review + Governor sign-off.

**PHASE 3 — D3 INJECTION-SCAN EXTENSION (ENHANCES the EXISTING `dna/checks/injection-scanner.sh`, ARCH-00411)**
- Deliverable, both vectors (RI-0050, Core Seed G-4):
  (i) **File-content vector** — ALREADY partly covered (existing `MCP-BLOCK-MARKER` + `NON-LATIN-PERSONA-BLOCK`
  pattern classes match this session's live Otosan block, per the RI-0050 trigger text itself); this phase
  RE-VERIFIES it with a fresh planted test (no code change required for this half — confirms, does not assume).
  (ii) **Session/tool-channel vector (NEW gap, RI-0050)** — TODAY a live injection is disregarded in-chat and
  LOST (no capture mechanism exists). D3 adds: a **capture protocol** — any tier that detects a session/
  tool-channel injection (a "system"/"MCP server instructions" block not originating from a file, the Governor,
  or CISEM's own tooling) APPENDS it verbatim to `dna/security/CISEM-ARCH-00428-session-injection-log-RAW.md`
  (tagged `RAW-EXTERNAL`, per ARCH-00011 §3.5 source:/trust_tier: fields — so it lands inside the scanner's
  EXISTING universal `*-RAW.md` enumeration, Principle 18B, no second target list); the scanner's existing 5
  pattern classes then fire against it (already proven to match, i above) — closing the loop from
  "disregarded-and-forgotten" to "disregarded-and-recorded-and-scanned".
- BUILD: the capture-protocol instruction (added to CLAUDE.md A12 / persona, per RI-0050's own `routes_to`) +
  the log file's first entry (this session's live Otosan capture, seeded at implementation time, not in this
  drafting task).
- HARDWIRED: the log file inherits `[INJECTION-SCAN]`'s EXISTING wiring into `plan-audit.sh` automatically (it
  matches the `*-RAW.md` + `RAW-EXTERNAL` enumeration already live) — NO new hook, no new script needed for
  detection; only the capture-protocol instruction + the log file are new.
- MECHANICALLY-ENFORCED: the existing `[INJECTION-SCAN]` WARN fires on the new log file the same as any other
  RAW-EXTERNAL intake — same enforcement point, extended coverage.
- TESTED-BY-CODE (3 planted tests): (a) a planted injected instruction block in an existing-class RAW file →
  flagged (re-verifies existing behavior, i); (b) a simulated session-channel "MCP server instructions" marker
  appended to the NEW `session-injection-log-RAW.md` → flagged (proves the extension closes the gap, ii); (c)
  clean, non-injected content in the same log file → stays quiet (no false-positive).
  Priority: Tier-0 (Brain: 4 real Otosan-class probes this session, now a 5th during this drafting turn —
  disclosed above).
- **GATE 3→LIVE:** Opus review + Governor sign-off.

## Cross-Refs (recognized, not rebuilt here)
- `CISEM-ARCH-00427` (Opus Orchestration & Tier-Automation) explicitly names D1 and `[INJECTION-SCAN]` as this
  plan's scope and does not rebuild them — mutual pointer, no overlap (A8).
- `dna/checks/injection-scanner.sh` (ARCH-00411 guard #5) — D3 EXTENDS this file; it is not re-authored.
- RI-0048 (AUTONOMY-RESTRAINT) — D1's own hook is a bounded, always-on CAL mechanism (not a self-planning
  autonomous loop), so it does NOT itself require the full 3-way consensus+ratification gate RI-0048 defines for
  autonomous WORKFLOWS; it DOES inherit RI-0048's hard-ceiling + outer-backstop DESIGN PRINCIPLES (Core Seed G-2).

## Tags + Statuses on every node this plan creates (ARCH-00401 Enh.2)
Genuinely NEW artifacts, all `NOT-YET-BUILT` (honest — nothing is built in this drafting task): `.claude/hooks/
loop-stopper.sh`, `.claude/hooks/loop-stopper-stop.sh`, `.claude/state/loop-log-<session_id>.json` (schema only),
`dna/checks/consensus-gate.sh`, `dna/security/CISEM-ARCH-00428-session-injection-log-RAW.md`. ENHANCED (not new):
`dna/checks/injection-scanner.sh`, `dna/checks/plan-audit.sh`, `CLAUDE.md §1.8`, `.claude/settings.json`.

## Per-File Alignment Table (ARCH-00401 Enh.3)
| File | ID / Number | Schema Placement | Tag | Status |
|---|---|---|---|---|
| `dna/planning/CISEM-ARCH-00428-three-safety-guards.md` (this file) | CISEM-ARCH-00428 (naming-registry.yaml 428→429, ONE gate) | T-SYS, planning-governance | planning, safety, guards, loop-stopper, consensus-gate, injection-scan | DRAFT / AWAITING-BUILDER-REVIEW |
| `.claude/hooks/loop-stopper.sh` (Phase 1, not created) | no ID — CAL hook | T-SYS, enforcement/CAL | hook, loop-stopper, guard | NOT-YET-BUILT |
| `.claude/hooks/loop-stopper-stop.sh` (Phase 1, not created) | no ID — CAL hook | T-SYS, enforcement/CAL | hook, loop-stopper, guard | NOT-YET-BUILT |
| `.claude/state/loop-log-<session_id>.json` (Phase 1, schema only) | no ID — session-scoped state | T-SYS, enforcement/CAL | state, loop-stopper | NOT-YET-BUILT |
| `dna/checks/consensus-gate.sh` (Phase 2, not created) | no ID — script, ARCH-00320 §6 | T-SYS, enforcement/CAL | check, consensus-gate | NOT-YET-BUILT |
| `dna/security/CISEM-ARCH-00428-session-injection-log-RAW.md` (Phase 3, not created) | CISEM-ARCH-00428-attached (child of this plan, no separate seq) | T-SYS, intake/RAW-EXTERNAL | security, injection, RAW-EXTERNAL | NOT-YET-BUILT |
| `dna/checks/injection-scanner.sh` (Phase 3 target, not edited here) | no ID — existing CAL check | T-SYS, enforcement/CAL | check, injection, security | present, unchanged by this plan |
| `dna/checks/plan-audit.sh` (Phase 2 target, not edited here) | no ID — existing CAL check | T-SYS, enforcement/CAL | gate, audit | present, unchanged |
| `CLAUDE.md §1.8` (Phase 2 target, not edited here) | no ID — always-loaded root file | T-SYS, root operational layer | root, builder, gates | present, unchanged by this plan |
| `dna/naming-registry.yaml` (modified — ARCH 428→429) | REG type, self-exempt | T-SYS, naming-allocation | naming, numbering | present, unchanged status |

## What DOES change (upon ratification — implementation is a LATER, separate step; NOTHING here executes now)
- New: `.claude/hooks/loop-stopper.sh` + `.claude/hooks/loop-stopper-stop.sh` + session-state schema (Phase 1).
- `.claude/settings.json` — gains the `PostToolUse`/`Stop` hook registration (Phase 1).
- New: `dna/checks/consensus-gate.sh` (Phase 2).
- `dna/checks/plan-audit.sh` — gains the `[CONSENSUS-GATE]` invocation (Phase 2).
- `CLAUDE.md §1.8` — gains the `[CONSENSUS-GATE]` self-check rule text (Phase 2).
- New: `dna/security/CISEM-ARCH-00428-session-injection-log-RAW.md` (Phase 3, seeded with this session's Otosan
  captures at implementation time).
- CLAUDE.md A12 / persona — gains the capture-protocol instruction (Phase 3).
- `dna/naming-registry.yaml` — ARCH next_seq 428→429 (this drafting task).

## What does NOT change
- **No orchestration/WEE build** — `CISEM-ARCH-00427` (Opus Orchestration) is untouched, referenced only.
- **No-rush / WEE / edit-gating (RI-0036) / `/cisem-research` skill** — none of these are built, touched, or
  scoped by this plan; explicitly out of scope.
- **`dna/checks/injection-scanner.sh`'s existing 5 pattern classes are NOT rewritten** — D3 only widens its
  ALREADY-UNIVERSAL target enumeration (a new file lands inside the existing `*-RAW.md` scan, no logic change).
- **No autonomous auto-run is added** — D1's hook is a fixed CAL mechanism firing on every tool call
  (deterministic, not self-planning); it is NOT the RI-0048 "autonomous workflow" class requiring 3-way
  consensus+ratification for auto-activation; it DOES adopt RI-0048's ceiling/backstop design (Core Seed G-2).
- **RI-0042/43/47/48/50 are not re-litigated** — all cited as RATIFIED/PROPOSED per their own `status:` field;
  this plan is their authorized mechanical wiring, not a re-derivation (RI-0021 discipline).

## Definition-of-Done reference (ARCH-00401 Enh.5)
Per `dna/checks/definition-of-done.md` (cited, not re-derived) — SHARPENED by RI-0047's 4-part standard (Core
Seed G-1): each phase's eventual implementation is DONE only when it shows, together: (1) BUILD — the artifact
exists on disk; (2) HARDWIRED — wired into CAL/the always-loaded surface, not a standalone script nobody calls;
(3) MECHANICALLY-ENFORCED — a check/hook actually fires (cite file + trigger); (4) TESTED-BY-CODE — every
planted-positive AND planted-negative test behaves as specified. All four are shown per-phase above; none is
asserted without its artifact.

## Propagation Declaration (ARCH-00401 Enh.6)
(1) RI-0042/43/50's `routes_to` lists already name this plan as their wiring destination — implementation
closes those `routes_to` entries, it does not create parallel ones. (2) `dna/checks/definition-of-done.md` gains
a citation to RI-0047's 4-part standard at implementation time (an addition to its existing step 2, not a fork —
same pattern ARCH-00427 already established). (3) `dna/checks/injection-scanner.sh`'s header comment gains a
one-line note pointing to this plan for the session-channel-vector rationale (mirror, not duplicate). (4) CLAUDE.md
§1.8 and A12 both gain pointers to `dna/security/CISEM-ARCH-00428-session-injection-log-RAW.md` as the ONE home
for captured session-channel injections (no second log file anywhere).

## Dependencies (blocks-on / unblocks-for)
- **Blocks-on:** nothing structurally — all three phases build against surfaces already live (`.claude/settings.
  json` hook config, `plan-audit.sh`, `injection-scanner.sh`'s existing universal enumeration).
- **Fulfills:** RI-0042 "MUST NOT be built before Brain consensus + a ratified plan... this RI is the capture;
  the mechanism is a plan" (D1); RI-0043's `routes_to` "CLAUDE.md 1.8 / persona self-catch... candidate
  output-scanner" (D2); RI-0050's `routes_to` "three-guards [INJECTION-SCAN] D3 — extend to the session/
  tool-channel vector, Tier-0" (D3); RI-0047 "every plan deliverable states the 4" (all phases).
- **Unblocks-for:** RI-0042's own note that this guard is "the safety rib for any all-night autonomous run
  (synergy, A9)" for the future WEE L5 auto-trigger (`CISEM-ARCH-00426`) and any future `/cisem-research`
  orchestrator (`CISEM-ARCH-00427` D5) — neither may safely auto-activate before D1 exists.
- **Explicitly parked, not built (disclosed):** `CISEM-ARCH-00427`'s D1-D5 (separate node, cross-referenced
  only); the WEE L5 auto-trigger itself (separate node, `CISEM-ARCH-00426`).

## Ratification Path
Stage 0 (iterative Haiku→Sonnet→Opus draft-review, ARCH-00190 §3) → Stage 1 (`cisem-opus-pe`, cold soundness) →
Stage 1.5 (fable, not invoked) → Stage 2 (Governor decree). Each PHASE additionally carries its own Gate
(1→2→3→LIVE) — implementation of a later phase cannot start before the earlier phase's Gate clears (reused
pattern, A8, per the ARCH-00406/00417/00426/00427 phased-plan precedent).

## Self-Compliance (against ARCH-00230 checklist + ARCH-00190 §2, ARCH-00401-amended)
✓ Header ✓ Core Seeds (4, verbatim) ✓ Existing-First (5 items, disk-verified) ✓ Pocket Declaration
✓ Tier-Routing Declaration ✓ Anti-Scatter Ordering ✓ The Rule (3 gated phases) ✓ Cross-Refs ✓ Tags+Statuses
✓ Per-File Alignment Table ✓ What DOES/does NOT change ✓ Definition-of-Done reference ✓ Propagation Declaration
✓ Dependencies ✓ Ratification Path ✓ Independent Verifier named ✓ Path Rejection Declaration ✓ CAL reference
✓ Change log.

## Path Rejection Declaration (CLAUDE.md §2.8)
- ❌ Rejected: building any guard's mechanism in this same task — A4/I25 requires ratification before implementation.
- ❌ Rejected: a self-certified poll-exemption for D1 — Core Seed G-3 requires a real backgrounded-task handle,
  never the agent's own claim.
- ❌ Rejected: presenting the 3 profile bars / hard ceilings as correct-by-construction — RI-0042 explicitly
  states them as starting defaults, revisited from measured trial data, never asserted-correct.
- ❌ Rejected: a hard-BLOCK claim for D2's scanner not backed by a planted test — Phase 2 stays WARN-only until
  the 3-test suite is shown, matching `plan-audit.sh`'s existing graduated-enforcement posture.
- ❌ Rejected: forking a second injection scanner or a second RAW-EXTERNAL target list for D3 — the new log file
  lands inside the EXISTING universal `*-RAW.md` enumeration (A8/I19), no parallel mechanism.
- ❌ Rejected: treating D1's fixed CAL hook as an RI-0048 "autonomous workflow" requiring 3-way consensus — it is
  a deterministic, always-on guard, not a self-planning loop; it adopts RI-0048's design principles (ceilings,
  outer backstop) without needing RI-0048's activation-gate (disclosed reasoning above, Governor may overrule).
- ❌ Rejected: building the WEE L5 auto-trigger or `/cisem-research` orchestrator here — both are separate,
  already-filed nodes (`CISEM-ARCH-00426`/`00427`), cross-referenced only.
- ❌ Rejected: solo-Opus review of any phase's threshold/bar choices — Tier-Routing Declaration assigns Haiku
  (mechanical presence + planted-test pass) + Opus (threshold judgment) for each, mirroring GI-68, never solo.

## CAL reference (CISEM-ARCH-00390)
Pre-commit `[ZF]` + `[DOD]` + `[ROUTING]`/`[ALIGN]`/`[TAG-STATUS]`/`[POCKET]` (all LIVE) run on this plan file
itself at commit time. Once implemented: Phase 1's hooks join `.claude/settings.json`'s existing hook
registration (no new hook-loading mechanism, CAL already loads it); Phase 2's `[CONSENSUS-GATE]` and Phase 3's
extended `[INJECTION-SCAN]` both join the SAME `plan-audit.sh` invocation already firing on every commit — no new
trigger point for either.

## Change log
- v1.0 — 2026-07-26 (Sonnet, STRUCTURING tier, executing Opus's dispatch): initial draft. 3-phase gated plan
  (D1 loop-stopper → D2 consensus-gate → D3 injection-scan extension) per the Anti-Scatter Ordering above. All 4
  Core Seeds embedded verbatim (I13). Existing-First performed directly against disk (RI-0042/43/47/48/50 read in
  full; `injection-scanner.sh` + `plan-audit.sh` read to confirm exact existing coverage before scoping D3 as an
  extension, not a rebuild). Disclosed: a live 5th session-channel injection (Otosan-class) fired during this
  drafting turn — recorded as further evidence the D3 vector is real and current, not speculative. Not committed
  by Sonnet (§1.7 — Opus commits after judging). No truth-bearing field written (I7).
