# PART08 — Plan-Authorization Gate (no governed creation without a ratified plan — MECHANICALLY)
**Parent:** CISEM-ARCH-00420 (Wiring Consolidation minitree root) | **Node ID:** CISEM-ARCH-00420-PART08
**Type:** ARCH | **Status:** ACTIVE | **Planning Status:** COMPLETE — Governor-RATIFIED 2026-07-25 + BUILT + Opus-VERIFIED (both layers built; commit-backstop verified NATIVELY incl. real-plan ARCH-00395 Status-fallback; write-time hook logic verified via a correct jq shim — refuse/pass/exempt/fail-open all correct. CAVEAT: `jq` absent on this dev machine → the write-time hook fails-OPEN/inert until jq is provisioned; the jq-free commit backstop enforces the goal meanwhile — RI-0033 routed.)
**depth_level:** L1 | **Position in schema:** T-SYS, CAL enforcement layer
**Priority:** high (the most-named gap — A4/A11/I25 has zero mechanical enforcement) | **tags:** [plan-authorization, plan-gate, pretooluse-hook, cal, a4-a11-i25, write-time-gate, commit-backstop]
**Goal:** Make it mechanically stop — at the WRITE, backstopped at COMMIT — for a governed artifact (a NEW ARCH/protocol/check/agent/skill/corespine file) to be created without a ratified plan authorizing it, while exempting IBD raw-capture, SWIFT zero-blast, and self-governed plans. Measurable: a should-refuse creation is refused; a should-pass (cited ratified plan, or exempt) passes; both shown, both layers.
**Governing corespine:** CS-CREATION-001 (doctrine stays in axioms A4/A11/I25 — NOT forked into a corespine)
**Independent Verifier:** `cisem-sonnet` (design/implementability) + `cisem-haiku` (protocol/evidence) — GI-68 mandatory dual review; both distinct from author (Opus).

## Pocket Declaration (§3.3)
- **reasoning_scope:** design the two-layer plan-authorization enforcement + its citation field; not the plan protocol itself.
- **inherited_constraints:** A4/A11/I25 (the doctrine); ARCH-00390 CAL (mechanism home); ARCH-00270 (WARN→BLOCK graduation); §2.6 IBD exemption; §2.7 SWIFT; Principle 18 (universal-by-default, class-coverage); RI-0025 (source not paraphrase); RI-0034 (check-design-spec precision, formerly RI-0029).
- **output_contract:** a PreToolUse hook + a BLOCK 5 in pre-commit-blocks.sh + an `authorizing_plan` field in ARCH-00230, with a two-direction planted test.
- **ai_cannot:** self-ratify; mark COMPLETE before the deliverables are on disk + tested; weaken I13/existing BLOCKs.
- **recorded_at:** 2026-07-25
- **cal_reference:** ARCH-00390 — both layers ARE CAL (write-time hook + commit BLOCK); the mechanism's home.

## Tier-Routing Declaration (§3.0)
- **GATHER/VERIFY → claude-code-guide + Opus source-read:** the exact PreToolUse contract (deny mechanism, stdin shape, config) — verified before spec, not assumed (RI-0025).
- **JUDGE/DESIGN → Opus:** this plan, the govern-vs-exempt test, the two-layer design, Core Seeds — here.
- **BUILD → Sonnet:** author the hook + BLOCK 5 + the ARCH-00230 edit + the planted test, per "The Rule", AFTER Governor ratification.

## Executive Summary
A4/A11/I25 ("no governed creation without a ratified plan") is written law with no mechanical enforcement (verified: the pre-commit hook's `|| true` is on the WARN-only audit; the real BLOCKs enforce plan-FIELDS and tag/status, never "is a ratified plan behind this creation"). This plan closes it in two layers (one design, defense-in-depth): a **write-time PreToolUse hook** that refuses a governed NEW-file Write lacking a cited ratified plan, and a **commit-time BLOCK 5** that guarantees no governed file lands in git without one — catching anything that bypassed the hook (raw shell, external editor, write-blank-then-edit-grow). "Governed creation" reuses `creation-gate.sh`'s existing enumeration (A8 — not a second definition). The citation is an on-disk `authorizing_plan:` header field, verified ratified by reusing `build-state.sh`'s `extract_token` (A8).

## Existing-First (§3.2b — searched, stated, source-verified this cycle)
- `.git/hooks/pre-commit` — `|| true` is real but on the WARN-only audit; real BLOCKs = I13 seed-strip + `pre-commit-blocks.sh` BLOCK 1-4 (plan-fields, persona-ref, no-delete, tag+status). **None enforce plan-authorization of a creation.** Genuine gap.
- `.claude/settings.json` — only SessionStart + PreCompact hooks; **no PreToolUse** exists (the primitive is available + unbuilt).
- `dna/checks/creation-gate.sh` — already defines "governed file" (the enumeration + exemptions). **REUSED**, not forked.
- `dna/checks/build-state.sh` — `extract_token()` token-anchors a plan's status. **REUSED** for the ratified-check.
- `dna/protocols/CISEM-ARCH-00230-file-creation-template.md` — the mandatory-minimums SSOT; **no `authorizing_plan` field exists** → this plan adds it.
- Home: doctrine already in A4/A11/I25 (axioms) — routing it into CS-AI-BEHAVIOR-001 would FORK the axiom (A8); mechanism → CAL. Settled, not split.

## Anti-Scatter Ordering (Principle 16 — significance rank of this plan's own deliverables)
Central, build in this order: **shared lib `plan-gate.sh` (Deliverable 0)** first (all layers source it) → **BLOCK 5 commit backstop (D2)** next (the fail-CLOSED guarantee — everything else's safety net) → **write-time hook (D1)** (the early-catch, licensed to fail-open only once the backstop exists) → **ARCH-00230 field (D3)** + **planted test (both layers)**. Peripheral, parked (named, not chased here): F-RECON (unify the governed-set with creation-gate), edit-in-place coverage, ARCH-ID-ref citations, BLOCK-mode graduation — each routed, none built in this PART (core-first, GI-04).

## The Rule (executable — what Sonnet builds after ratification)
### Deliverable 0 — shared lib `dna/checks/lib/plan-gate.sh` (CP-A8 + BLOCKER-2/MAJOR-1/MAJOR-2 — ONE definition of every reused primitive; the hook, BLOCK 5, and build-state.sh all source it)
- `extract_token <file> <label>` — moved verbatim from build-state.sh; build-state.sh refactored to `source` this lib (behavior identical — no top-level side effects sourced, only the function).
- `is_plan_ratified <file>` — **(BLOCKER-2 fix)** ORs `extract_token <file> "Status"` AND `extract_token <file> "Planning Status"`; true iff EITHER token ∈ {RATIFIED, COMPLETE}. Real plans carry one field OR the other (verified: ARCH-00395 has `Status: RATIFIED` and NO Planning-Status field; build-state.sh already ORs both). Sharing the WHOLE predicate (not just the extractor) closes this by construction.
- `is_strict_governed <path>` — **(MAJOR-2 normalize + BLOCKER-1 fixtures-exempt + MAJOR-1 one-definition)**: FIRST normalize — strip `$CLAUDE_PROJECT_DIR`/repo-root prefix, `\`→`/`, drop leading `./` — THEN true iff the repo-relative path is under a STRICT dir and under NO exempt subtree. STRICT: `dna/corespines|protocols|checks|schema|vocabulary/`, `.claude/agents|skills|hooks/`. EXEMPT (false): `*/fixtures/*` **(BLOCKER-1 — synthetic test data is gate-exempt by established convention; else the gate refuses fixtures, including this plan's OWN Deliverable-1 fixtures at build)** · `dna/templates/`, `*-template.md`, `*-index.md`, `README.md`. (planning/ibd/parking are simply not STRICT → false, no special case.)
- `authorization_gaps <file>...` — **(MAJOR-4 testability)** takes an explicit file-list, returns the violations (governed + absent-citation, or governed + cited-plan-not-ratified); BLOCK 5 calls it with the staged file-list, the planted test calls it with SYNTHETIC paths — zero touch of the real git index.

### Deliverable 1 — write-time PreToolUse hook `.claude/hooks/pretooluse-plan-gate.sh`
**Verified contract (claude-code-guide):** deny = **exit 2 + message on stderr** (model-visible; the exit-0 JSON reason is not reliably model-visible). Config: `"PreToolUse":[{"matcher":"Write","hooks":[{"type":"command","command":"${CLAUDE_PROJECT_DIR}/.claude/hooks/pretooluse-plan-gate.sh","timeout":10}]}]` (match `Write` — Edit can't create a non-existent file; raw-shell + write-blank-then-grow are the backstop's job).
**MAJOR-3 (SUBAGENT FIRING) — VERIFIED CONFIRMED (claude-code-guide, code.claude.com/docs/en/hooks.md "Subagent Nesting"):** PreToolUse **fires for tool calls in BOTH the main session AND within subagents** — so the write-time layer works where most CISEM creation actually happens (Sonnet/Haiku subagent Writes). Bonus: the stdin JSON carries `agent_id` + `agent_type` only in subagent context, so the hook CAN distinguish subagent- from main-session writes if ever needed. No degradation to backstop-only; the primary layer is valid across the whole tier stack.
1. `source dna/checks/lib/plan-gate.sh`; `INPUT=$(cat)`; `tool=$(printf '%s' "$INPUT"|jq -r '.tool_name')`; `path=$(printf '%s' "$INPUT"|jq -r '.tool_input.file_path // empty')`; `content=$(printf '%s' "$INPUT"|jq -r '.tool_input.content // empty')`. **BUILD STEP 1 (before relying on fields): a one-time stdin-echo captures the REAL `tool_input` field names AND the REAL path shape (absolute? slashes?) — `is_strict_governed`'s normalization is set from what's observed (MAJOR-2), not assumed.**
2. FIRE iff `tool` = `Write` AND `! test -e "$path"` (new) AND `is_strict_governed "$path"`.
3. If firing AND `content` lacks an `authorizing_plan: CISEM-ARCH-NNNNN` line → **DENY: exit 2 + Deliverable-4 message on stderr**. No self-declared exemption tag (CP2).
4. **Fail-OPEN (exit 0) on any parse error / missing jq (CP3)** — safe only because BLOCK 5 fails-CLOSED; a hook bug must never brick all writes.

### Deliverable 2 — commit-time backstop: BLOCK 5 in `dna/checks/pre-commit-blocks.sh`
5. BLOCK 5 sources the lib and calls `authorization_gaps "$(git diff --cached --name-only --diff-filter=A)"` (forward-looking; reuse BLOCK 4's parking-exempt + not-retro precedent). Any violation → **BLOCK (exit 1)** naming file + reason + the `--no-verify`+log escape (BLOCK 1-4 idiom). No EXEMPT branch (CP2).
6. **DISCLOSED PARK (MINOR-2):** a `git mv` INTO a strict dir can evade `--diff-filter=A` without rename-detection — a PRE-EXISTING class gap shared by BLOCKs 1/3/4, parked to F-RECON, not introduced here.

### Deliverable 3 — the `authorizing_plan` field in `dna/protocols/CISEM-ARCH-00230-file-creation-template.md`
8. ACTUAL EDIT (shown, not described) — add to the Mandatory checklist (after the `Node ID, Type, Status…` line 21):
   ```
   [ ] authorizing_plan — the ratified plan (CISEM-ARCH-NNNNN, Planning Status RATIFIED/COMPLETE) that
       authorizes this governed creation (A4/A11/I25). Required on every STRICT-governed new file; the
       dir-exempt locations (planning / ibd / parking / templates) do not carry it. Mechanically enforced
       write-time (PreToolUse plan-gate, exit-2) + commit (pre-commit-blocks BLOCK 5). Reference, do not re-derive.
   ```

### Deliverable 4 — the refusal message (Governor asked: what the refused write shows + what "route through the wizard" does)
9. On DENY the model sees (stderr, exit 2): *"BLOCKED (plan-authorization, A4/A11/I25): creating a governed artifact (<path>) requires a ratified plan. Add a header field `authorizing_plan: CISEM-ARCH-NNNNN` naming the RATIFIED plan (Planning Status RATIFIED/COMPLETE) that authorizes this file, then retry. No ratified plan yet? Run /cisem-plan to create one (goal→approach→plan→Opus-soundness→GI-68 dual-review→Governor ratify), then cite it here. This creation is genuinely raw/parked, not governed? Write it under dna/ibd/ (raw-capture) instead."* — "route through the wizard" = invoke `/cisem-plan` (the ARCH-00190 mirror), producing a ratifiable plan; once Governor-ratified, its id is the citation.

## Planted test (both directions, both layers — DoD, MECHANICAL grade)
**Method:** pipe synthetic JSON to the hook — `echo '{"tool_name":"Write","tool_input":{"file_path":"…","content":"…"}}' | bash .claude/hooks/pretooluse-plan-gate.sh; echo $?` (mirrors build-state's `run-test.sh`; no live session needed). BLOCK 5 tested via `authorization_gaps <synthetic-paths>` (no real git index touched — MAJOR-4). Fixtures under `dna/checks/fixtures/plan-gate/`:
- **write-time should-REFUSE:** new `dna/checks/x.sh`, content lacks `authorizing_plan:` → exit 2.
- **write-time should-PASS (cited):** same + `authorizing_plan: CISEM-ARCH-00420-PART08` → exit 0.
- **write-time should-PASS (exempt subtree):** new `dna/checks/fixtures/plan-gate/y.md` with NO citation → exit 0 (**BLOCKER-1 regression proof** — fixtures never self-block).
- **write-time fail-OPEN:** garbage / non-JSON stdin → exit 0, no hang (**MINOR-1 / CP3** safety property proven).
- **commit should-BLOCK:** synthetic governed path, no citation → violation; cite an UNRATIFIED plan → violation.
- **commit should-PASS (Status-fallback):** cite **ARCH-00395** (`Status: RATIFIED`, NO Planning-Status field) → CLEAN (**BLOCKER-2 regression proof** — `is_plan_ratified` ORs both fields).
- Both directions, both layers, actual output shown. Closure-grade: **MECHANICAL**.

## What DOES change
- NEW: `.claude/hooks/pretooluse-plan-gate.sh`; `dna/checks/lib/plan-gate.sh` (shared lib: extract_token + is_plan_ratified + is_strict_governed + authorization_gaps); `dna/checks/fixtures/plan-gate/` (fixtures + harness).
- MODIFIED: `.claude/settings.json` (register PreToolUse on `Write`); `dna/checks/pre-commit-blocks.sh` (BLOCK 5, sources lib); `dna/checks/build-state.sh` (source the shared lib's `extract_token` — behavior identical); `dna/protocols/CISEM-ARCH-00230-file-creation-template.md` (authorizing_plan field).

## What does NOT change
- The `[ZF]` formula; the WARN-only plan-audit; existing BLOCKs 1-4 + I13 (extended, never weakened).
- EDITS to existing governed files (this gates CREATION only — disclosed boundary, like PART02's new-file-only).
- The backlog of already-ungoverned files (forward-looking only — BLOCK 4 precedent).
- The doctrine's home (stays in axioms A4/A11/I25 — no corespine fork).

## Per-File Alignment Table
| File | naming-registry | schema placement | tag | status |
|---|---|---|---|---|
| `.claude/hooks/pretooluse-plan-gate.sh` | non-node hook (CAL) | T-SYS, CAL write-time | hook, cal | NEW → PROVISIONAL-ACTIVE on build |
| `.claude/settings.json` | config (existing) | T-SYS, CAL config | config | MODIFIED (add PreToolUse) |
| `dna/checks/pre-commit-blocks.sh` | existing check | T-SYS, CAL commit | check | MODIFIED (BLOCK 5 + source lib) |
| `dna/checks/lib/plan-gate.sh` | non-node lib (CP-A8) | T-SYS, check-lib | check, lib | NEW → PROVISIONAL-ACTIVE on build |
| `dna/checks/build-state.sh` | existing check | T-SYS, plan-audit | check | MODIFIED (source shared lib — behavior identical) |
| `dna/protocols/CISEM-ARCH-00230-file-creation-template.md` | existing node | T-SYS, creation SSOT | protocol | MODIFIED (field) |
| `dna/checks/fixtures/plan-gate/*` | non-node fixtures | T-SYS, check-fixture | fixture, test | NEW → PROVISIONAL-ACTIVE |

## Definition-of-Done (ref — dna/checks/definition-of-done.md)
All 4 deliverables on disk + registered PreToolUse fires + BLOCK 5 fires + planted test passes both directions both layers + `[ZF]` still ACHIEVED + commit-backstop's `extract_token` reuse verified. Any leg unmet → honest NOT-YET-WIRED.

## Propagation Declaration
The `authorizing_plan` requirement propagates to: ARCH-00230 (SSOT, edited) → cisem-create SKILL + cisem-plan wizard (reference it) → CLAUDE.md §3 (creation gates, by reference). The two mechanisms self-propagate (fire on all governed creations by construction). RI-0031 (if a new class surfaces at build) routed.

## Dependencies
- **Blocks-on:** the verified PreToolUse contract (in flight); Governor ratification (A4/A11); GI-68 dual review.
- **Unblocks-for:** the A4/A11/I25 enforcement the whole platform rests on; retires the "hardcoding-dominance" top-priority thread.
- **Reuses (A8):** creation-gate's governed-set, build-state's extract_token, pre-commit-blocks' BLOCK idiom + forward-looking precedent.

## Self-compliance (against ARCH-00230)
Goal measurable (both directions, both layers) · corespine declared · Existing-First stated + source-verified · core-vs-instance: a reusable enforcement mechanism (core), justified by the platform-wide A4/A11 need · pocket declared · dogfoods its own rule (this very plan, once ratified, is the `authorizing_plan` its own build cites).

## Path Rejection Declaration
- **REJECTED: commit-time-only** — too late (file already written; worse UX; can't refuse pre-write). Kept as the BACKSTOP, not the primary.
- **REJECTED: write-time-only** — bypassable (raw shell / external editor). Kept as primary, backstopped at commit.
- **REJECTED: a new "governance corespine" home** — forks A4/A11 (A8). Doctrine stays in axioms, mechanism in CAL.
- **REJECTED: a fresh "governed file" definition** — creation-gate already has one; forking would drift the two. Reuse.
- **REJECTED: session-state citation** (env var / active-plan file) — not git-SSOT; a citation must live on disk in the file.

## Clarifying pass (mandatory, run against THIS draft before presentation — Governor requirement, not skipped)
Real questions generated against my own draft, each answered by source-check at that granularity:
- **CP1 — "reuse creation-gate's governed set" — is that set complete?** NO. creation-gate.sh enumerates corespines/protocols/planning/schema/vocabulary/agents/skills + parking, but OMITS `dna/checks/` + `.claude/hooks/` — yet the goal names "check" as governed. Verbatim reuse would leave checks + hooks ungoverned by this gate. FIX: strict set = the goal's artifact dirs (incl. checks + hooks); creation-gate's gap flagged → follow-on F-RECON (unify to one shared set).
- **CP2 — is the self-declared `authorizing_plan: EXEMPT-*` tag safe?** NO — it is a bypass loophole (anything self-tags EXEMPT) AND unnecessary (SWIFT = edits to existing work, never a new strict-governed file; IBD is dir-exempt). FIX: dropped the content-tag entirely; exemptions are STRUCTURAL (dir + new-file-scope).
- **CP3 — fail-open or fail-closed on a hook parse error?** Unstated. FIX: fail-OPEN (a hook bug must never brick all writes), safe ONLY because BLOCK 5 fails-CLOSED at commit — the two layers are what license the fail-open.
- **CP-A8 — "reuse extract_token" — sourced or copied?** Copying forks the definition (A8). FIX: factor into `dna/checks/lib/extract-token.sh`; build-state.sh + BLOCK 5 both source it. One definition, named precisely (Governor's ask).
- **CP-recursion — does a plan need a plan?** NO — dna/planning/ is exempt; plans are self-governed by ARCH-00190 + the existing plan-fields BLOCK. Verified against pre-commit-blocks BLOCK 1.

## Change log
- v0.1 2026-07-25 (Opus) — drafted from the three-way-agreed goal + approach; deliverables 2-4 fully specified from source (creation-gate, build-state extract_token, ARCH-00230 checklist).
- v0.2 2026-07-25 (Opus, PreToolUse contract folded) — deliverable-1 deny-mechanism finalized: exit-2+stderr, matcher `Write`, jq parse, fail-open + build-time stdin-echo confirm.
- v0.3 2026-07-25 (Opus, clarifying pass folded) — CP1 strict-governed-set corrected (incl. checks+hooks; creation-gate gap → F-RECON); CP2 EXEMPT loophole dropped (structural exemptions only); CP3 fail-open stated; CP-A8 shared extract-token lib.
- v0.4 2026-07-25 (Opus, GI-68 dual-review folded — Sonnet 2 BLOCKER/4 MAJOR/2 MINOR + Haiku 2 gaps, ALL accepted, source-proven) — BLOCKER-1 `*/fixtures/*` exemption (self-block avoided); BLOCKER-2 `is_plan_ratified` ORs Status+Planning-Status (ARCH-00395 regression); MAJOR-1/2 consolidated into shared `plan-gate.sh` (governed-set + path-normalization + all primitives, ONE definition); MAJOR-3 subagent-firing CONFIRMED (fires in subagents — write-time layer valid); MAJOR-4 `authorization_gaps` file-list param (testable without git index); MINOR-1 fail-open test case; MINOR-2 git-mv rename gap disclosed+parked. Haiku: Anti-Scatter Ordering added, change-log dedup. Class-preventions → RI-0031 (reuse must be behavior-complete not signature-complete; a governed-set widening must audit exempt subtrees) + RI-0032 (mechanical plan-section-completeness — a mandatory ARCH-00401 section dropped, review-caught twice). Ready for Governor ratification.
- v1.0 2026-07-25 (Governor-RATIFIED → Sonnet-BUILT → Opus-VERIFIED) — all deliverables on disk: lib `plan-gate.sh` (extract_token + extract_citation + is_plan_ratified + is_strict_governed + authorization_gaps), hook, BLOCK 5, build-state refactor, ARCH-00230 field, settings.json PreToolUse, 5 fixtures + run-test.sh. VERIFIED (Opus-run, RI-0004): commit backstop native — Test E (no-citation)→BLOCK, F (unratified)→BLOCK, G (real ARCH-00395 `Status:RATIFIED`)→CLEAN (BLOCKER-2 regression); write-time hook via correct jq shim — A(no-cite)→exit2, B(cited)→exit0, C(fixtures)→exit0, D(garbage)→fail-open, E(Edit)→exit0; build-state regression 3/3. DOGFOOD proven: BLOCK 5 blocked the hook+lib until PART08 flipped to COMPLETE (this edit). CAVEAT (honest, RI-0033): jq absent → write-time layer inert here until provisioned; backstop (jq-free) enforces meanwhile. Sonnet's own catch: extract_token cuts at hyphen (wrong for ID-shaped citations) → separate extract_citation built (RI-0031 class, self-applied).
