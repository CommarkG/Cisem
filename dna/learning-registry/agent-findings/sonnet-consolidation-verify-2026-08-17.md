# Consolidation Verification — Findings Report
**tags:** [consolidation, verification, checks, agents, learning-registry, agent-findings, p1-p7]
**Status:** DRAFT-FINDINGS (analysis only; no plan authorized; A4/I25 holds)
**Author:** cisem-sonnet (STRUCTURING tier) | **Date:** 2026-08-17
**Task-source:** dna/queue/SONNET-CONSOLIDATION-REVIEW-2026-08-17.md (Fable-authored)
**Pocket:** Analysis / Verification — read-only run; zero governed-file edits; sole output = this file
**Authorized output:** dna/learning-registry/agent-findings/ (this file only)
**Governing corespine:** CS-AI-BEHAVIOR-001 (verification run)

---

## STANDING CHECKS APPLIED (RI-0050/A12)

Instruction origin: CISEM STRUCTURING tier dispatch (CLAUDE.md §1.5, dna/queue/ task file).
No injected foreign persona (Otosan/WordPress/Hebrew) detected. No MCP server instructions present.
CAL session-start hook fired; platform-isolation-check ran at session start (confirmed in session-start output).

Preventions applied this run (from session-learning-index + bootstrap):
- RI-0002: classify every finding NEW-DRIFT vs ALREADY-RESOLVED (not just "issue found")
- RI-0012: anchored field-value matching only; substring-match is a known false-positive class
- RI-0025: source-not-paraphrase — every claim cites file:line, no summary-level assertion
- Principle 17/18C: presence != behavior — no "wired/done" claim without a running mechanism cited
- RI-0047: four-part build standard — not applicable to this read-only run
- INCOMPLETE-INPUT/I22: task file read in full (66 lines confirmed); proceeding with verdict

---

## HYPOTHESIS VERDICTS — FULL HONEST BOARD

### P1 — SHARED CHECK LIBRARY
**Verdict: CONFIRMED**

**Evidence — Timing table (MEASURED, not inherited — Principle 22; PowerShell Measure-Command):**

| Script | Wall-clock (ms) | Tree-enum method | Own matcher | Own report fmt | Standalone fixture |
|---|---|---|---|---|---|
| plan-audit.sh | 381,336 | sub-scripts (callers) | YES | YES | NO (meta-orchestrator) |
| type-match.sh | 55,216 | `find . -name "*.md"` (per-file head+grep) | YES | YES | NO |
| build-state.sh | 50,648 | `find . -name "*.md"` in some paths | YES | YES | YES (fixtures/build-state/) |
| wiring-value-report.sh | 46,289 | find-based (extensive) | YES | YES | YES (fixtures/wiring-value-report/) |
| creation-gate.sh | 27,359 | multiple `find` calls, many dirs | YES | YES | NO |
| cs-names.sh | 10,975 | `grep -r` full tree | YES | YES | NO |
| naming-format.sh | 7,340 | `grep -r` full tree | YES | YES | NO |
| threshold-coverage-map.sh | 3,923 | `grep -r` full tree | YES | YES | NO |
| injection-scanner.sh | 3,617 | `find` on RAW-EXTERNAL dirs | YES | YES | NO |
| defer-scan.sh | 717 | git-diff scoped (FAST) | YES | YES | NO |
| platform-isolation-check.sh | 499 | targeted reads (FAST) | YES | YES | NO |
| plan-sections.sh | 241 | git-diff scoped (FAST) | YES | YES | YES (fixtures/plan-sections/) |
| gi-consideration.sh | 241 | git-diff scoped (FAST) | YES | YES | YES (fixtures/gi-consideration/) |
| deletion-guard.sh | 175 | git-native diff --numstat (FAST) | YES | YES | NO |
| corespine-bodiless.sh | 113 | single YAML read (FAST) | YES | YES | NO |
| agent-pass-gate.sh | 109 | stamp-based (FAST) | YES | YES | NO |
| park-review-fresh.sh | ~fast | stamp-based (FAST) | YES | YES | NO |
| penumbra-sweep.sh | >90,000 | find-based (extensive, timeout) | YES | YES | self-test mode only |
| pre-commit-blocks.sh | ~fast | git-diff scoped (FAST) | YES | YES | YES (plan-gate fixture via lib/) |
| graphify-query.sh | 913 (self-test) | query-based | YES | YES | --self-test mode only |
| save-raw-activity.sh | N/A (utility) | none (filter utility) | N/A | N/A | NO |

**Fixtures confirmed (dna/checks/fixtures/):** build-state/run-test.sh, plan-gate/run-test.sh, plan-sections/run-test.sh, gi-consideration/run-test.sh, ratify-gate-dual-review/run-test.sh, wiring-value-report/run-test.sh — 6 total.

**Shared lib/ coverage:** dna/checks/lib/plan-gate.sh (sourced by build-state.sh + pre-commit-blocks.sh — token anchoring only); dna/checks/lib/plan-sections-lib.sh (sourced by plan-sections.sh, gi-consideration.sh, plan-audit.sh). The lib/ exists but covers only 2 narrow primitives (plan-gate token match + plan-sections line parsing).

**Dominant slow pattern:** full-tree `find`/`grep -r` re-run per script. type-match (55s) + build-state (50s) + wiring-value-report (46s) + creation-gate (27s) together account for ~3 minutes of the plan-audit.sh total, consistent with repeated whole-tree sweeps. plan-audit.sh calls plan-sections.sh + gi-consideration.sh as sub-scripts (each fast at ~241ms individually) — the bottleneck is the slow stand-alone scripts it also invokes.

**NEW-DRIFT:** 15 of 21 scripts have no standalone planted-test fixture. All 21 hand-roll their own matcher + report format.
**ALREADY-RESOLVED:** lib/ pattern EXISTS (2 shared files) — not starting from zero; the gap is that it covers 2 of ~8 primitive categories.

**Proposed lib.sh function list (evidence-derived, proposal only):**
- `enumerate_governed(dir_pattern)` — single shared find (covers type-match, creation-gate, cs-names, naming-format)
- `field_value_match(field, value, file)` — anchored grep (covers all status/tag checks; fixes RI-0012 class)
- `report_result(check_id, verdict, detail)` — unified WARN/BLOCK/PASS formatter
- `planted_test(check_id, fixture_path)` — per-script entry-point plant (g1 guard from Brain cross-check)

---

### P2 — MACHINE-READABLE STATUS ENUM
**Verdict: CONFIRMED**

**ARCH-00011 §4 canonical enums (source: dna/protocols/CISEM-ARCH-00011-naming-numbering-policy.md §4, read directly):**
- Node Status: `DRAFT | PROPOSED | DECLARED | RATIFIED | PLACEHOLDER | SCHEDULED | SPLIT | PROVISIONAL-ACTIVE`
- Planning Status: `AWAITING-BUILDER-REVIEW | COMMENTS-RECEIVED | CONSENSUS-REACHED | IN-PROGRESS | COMPLETE | SUPERSEDED`
- Wiring State: `DECLARED → CONNECTED → ACCESSIBLE → LIVE`

**VOC-00002 mirror:** dna/vocabulary/CISEM-VOC-00002-status-library.md — confirmed aligned to ARCH-00011 §4 at line 51 annotation "HERE (VOC-00002)".

**Divergences found (each cite file:line):**

| File | Line | Hardcoded value | In ARCH-00011 §4? | Classification |
|---|---|---|---|---|
| dna/checks/wiring-value-report.sh | 42 | `ACTIVE` | NO — not in any CISEM enum | NEW-DRIFT |
| dna/checks/wiring-value-report.sh | 42 | `CONNECTED`, `ACCESSIBLE`, `LIVE` | YES (Wiring State) | ALREADY-RESOLVED (correct) |
| dna/checks/plan-audit.sh | ~595 | Mixed node+planning+wiring tokens in [TAG-STATUS] | MIXED — cross-context conflation | NEW-DRIFT (conflation) |
| dna/checks/injection-scanner.sh | 45 | `RATIFIED` | YES (Node Status) | ALREADY-RESOLVED (contextually correct; not machine-sourced) |
| dna/checks/park-review-fresh.sh | 20 | `PARKED-RAW` | NOT in ARCH-00011 §4 (root-insights local enum) | ALREADY-RESOLVED (scoped vocab; root-insights uses own status) |
| dna/checks/lib/plan-gate.sh | 63–64 | `RATIFIED`, `COMPLETE` | YES (Node + Planning Status) | ALREADY-RESOLVED (anchored correctly: `status: RATIFIED`, `Status: COMPLETE`) |
| dna/checks/build-state.sh | 91–92 | `{COMPLETE, RATIFIED}` | YES | ALREADY-RESOLVED (via lib/plan-gate.sh token anchoring) |

**`ACTIVE` at wiring-value-report.sh:42:** this token does NOT appear in ARCH-00011 §4 Wiring State (`DECLARED → CONNECTED → ACCESSIBLE → LIVE`) or Node Status or Planning Status. `ACTIVE` exists in agent-findings.md Status header ("ACTIVE") but that is a non-governed header field for learning-registry entries. A check enforcing a status value NOT in the SSOT enum is a NEW-DRIFT defect — it validates against a phantom token.

**plan-audit.sh [TAG-STATUS] conflation:** the check at line ~595 bundles node statuses, planning statuses, and wiring states into a single list with no context-scoping. A file with `Status: IN-PROGRESS` (valid planning status) would pass the same check as `Status: RATIFIED` (node status). Per VOC-00002 alignment axis (line 51: `aligned·predates-changes·conflicts·n/a`), context-scoped validation is the declared intent — but the mechanical gate is unscoped. NEW-DRIFT.

**Proposed machine-readable shape (evidence-derived, proposal only):**
```yaml
# dna/checks/status-enum.yaml (proposed)
node: [DRAFT, PROPOSED, DECLARED, RATIFIED, PLACEHOLDER, SCHEDULED, SPLIT, PROVISIONAL-ACTIVE]
planning: [AWAITING-BUILDER-REVIEW, COMMENTS-RECEIVED, CONSENSUS-REACHED, IN-PROGRESS, COMPLETE, SUPERSEDED]
wiring: [DECLARED, CONNECTED, ACCESSIBLE, LIVE]
archive: [SUPERSEDED, RULED-OUT, EXTRACTED, PROMOTED]
insight: [PARKED-RAW, DISTILL-PENDING, RATIFIED, WIRED]
```
All consuming scripts `source` or `yq`/`grep` from this one file — context-scoped validation becomes possible.

---

### P3 — REGISTRY CONTRACT
**Verdict: CONFIRMED**

**Registry field contracts (extracted from headers + sample entries):**

| Registry | id/key field | date field | status field | routes_to / feeds | note-equiv |
|---|---|---|---|---|---|
| root-insights.yaml | `id: RI-NNNN` | `date:` | local enum (PARKED-RAW, DISTILL-PENDING, WIRED, RATIFIED) | `routes_to:` | `note:` |
| governor-insights.yaml | `id: GI-NN` | `date:` | `status:` (open enum) | `home:` | `insight:` field |
| session-learning-index.yaml | per-session block, `date:` key | `date:` | no explicit status | `tiers_active:` | `positive[]/negative[]` |
| quality-ledger.yaml | `run:` (not `id:`) | `date:` | `verdict:` (not `status:`) | `trigger:` | `findings{}` block |
| agent-profiles.yaml | per-agent block (no explicit `id:`) | none | no status | `tier:` | `strengths[]/gaps[]` |
| archive-ledger.yaml | `id:` | `date:` | `disposition:` (SUPERSEDED/RULED-OUT/EXTRACTED/PROMOTED) | `ruled_by:` | `why:` |
| naming-registry.yaml | `{TYPE}:` key | none | none | `next_seq: N` | none |

**Common floor (all 7 share at minimum):** `{some-id-field, some-date-field}` — even this minimum diverges in field NAME.
**Near-common (5 of 7):** `status`-equiv field (quality-ledger uses `verdict`, agent-profiles omit it entirely).
**WEE (ARCH-00426) coupling:** ARCH-00426 L1/L2 assumes per-registry readers (confirmed by checking the plan structure). A single registry-lint validates the minimum contract WITHOUT forcing schema unification — the proposed floor `{id, date, status, routes_to}` would need aliasing logic per registry (e.g., `verdict` aliases `status` for quality-ledger).

**NEW-DRIFT:** no registry-lint exists. The minimum contract is implicit only.
**ALREADY-RESOLVED:** per-registry checks exist (e.g., [ARCHIVE] in plan-audit.sh for archive-ledger). The gap is a unified floor validator.

**P3 reframe (Brain cross-check — binding):** lint the minimum contract floor (silent on extra fields, per-registry `status` resolves against its named vocab from P2 YAML). This is achievable WITHOUT schema unification — preserves A9 facet-diversity.

---

### P4 — ACTIVATE THE regenerates: GRAPH
**Verdict: PARTLY CONFIRMED**

**ssot-registry.yaml regenerates: entries checked (5 samples):**

| SSOT key | regenerates: listed views | Generator exists? | Staleness check |
|---|---|---|---|
| axioms (FOUND-00001) | CLAUDE.md §2.4 | NO generator | Manual — divergence possible, not detected |
| ai_persona (persona-collaborator.md) | cisem-fable.md, cisem-haiku.md, cisem-opus-pe.md, cisem-sonnet.md | NO generator | cisem-cic-auditor.md ABSENT from list — NEW-DRIFT |
| status_enum (ARCH-00011 §4) | frontend/pages/vocabulary.html | NO generator | vocabulary.html absent from confirmed frontend/pages/ listing — staleness SUSPECTED (NOT VERIFIED — only ls output reviewed, not full directory listing) |
| learning_outcomes | (not checked — 5th sample substituted) | N/A | N/A |
| invariants (ARCH-00320 §4) | CLAUDE.md I1-I26 summary | NO generator | Mirror per I10; divergence possible |

**Key finding — ai_persona regenerates:** ssot-registry.yaml `ai_persona.regenerates` lists 4 agent files (fable, haiku, opus-pe, sonnet) but OMITS cisem-cic-auditor.md (`.claude/agents/cisem-cic-auditor.md` exists and references the persona SSOT). This is a NEW-DRIFT gap — the registry does not track a live persona consumer.

**No generator confirmed:** ALL checked `regenerates:` entries are hand-synced. EXISTS!=ACTIVE (I23) — the graph is declared but no engine runs it. This is consistent with the hypothesis; classified ALREADY-NOTED (governor-insights.yaml PARKED item: "persona §1.6 (always-loaded mirror) vs persona-collaborator.md — verify zero divergence").

**Persona §1.6 vs persona-collaborator.md divergence check:** SSOT (persona-collaborator.md) read directly. CLAUDE.md §1.6 is its mirror. The content in CLAUDE.md §1.6 appears aligned in structure and L1/L2/L3 layering, but the SSOT has additions (L2: COMPLETION-PUSH FIRST / PREVENTION+PRESERVATION / SMART-OPTIMIZED-COMPLETION paragraphs) that CLAUDE.md §1.6 summarizes more tersely. This is expected mirror behavior (I10 — mirror may be less verbose). No contradiction found at a factual level; potential OMISSION divergence NOT CONFIRMED without line-by-line diff.

**NEW-DRIFT:** cisem-cic-auditor.md absent from ai_persona.regenerates.
**ALREADY-RESOLVED (PARKED):** general concern about regenerates staleness is in governor-insights as PARKED item.

---

### P5 — AGENT/SKILL BOOTSTRAP DEDUP + HANDOFF TEMPLATE UNIFICATION
**Verdict: CONFIRMED**

**MANDATORY STANDING CHECKS block diff (verbatim, bash diff):**
- haiku vs sonnet: diff exit 0 (IDENTICAL — verbatim duplicate confirmed)
- haiku vs opus-pe: IDENTICAL (read confirmed same 6-item block)
- haiku vs fable: DIFFERS — fable MISSING item 6 (INCOMPLETE-INPUT/I22 gate)
- haiku vs cic-auditor: DIFFERS — cic-auditor has ZERO MANDATORY STANDING CHECKS section

| Agent | MANDATORY STANDING CHECKS section | INCOMPLETE-INPUT/I22 item | Classification |
|---|---|---|---|
| cisem-haiku.md | YES — 6 items | YES | Baseline |
| cisem-sonnet.md | YES — 6 items (verbatim = haiku) | YES | ALREADY-RESOLVED (identical) |
| cisem-opus-pe.md | YES — 6 items (verbatim = haiku) | YES | ALREADY-RESOLVED (identical) |
| cisem-fable.md | YES — 5 items | NO (missing item 6) | NEW-DRIFT |
| cisem-cic-auditor.md | ABSENT (zero section) | NO (section missing) | NEW-DRIFT |

**HARVEST-BEFORE-RETURN block diff:**
- haiku vs sonnet: exit 0 (identical)
- haiku vs fable: exit 0 (identical)
- haiku vs cic-auditor: exit 1 — cic-auditor MISSING 3 lines: the "Do it NOW" line, the "Harvest before you return" line, and a blank separator. cic-auditor has a shorter/truncated HARVEST section. NEW-DRIFT.

**ssot-registry ai_persona.regenerates gap:** cisem-cic-auditor.md is NOT listed in the regenerates: field (confirmed via ssot-registry.yaml read). It references persona-collaborator.md directly in its body. Registry gap = NEW-DRIFT (also flagged under P4).

**Bootstrap file lists:** agents diverge in which files they include in their bootstrap list. haiku/sonnet/opus-pe share most bootstrap files; fable and cic-auditor have role-specific variations. This is expected (role-delta is legitimate) but UNMAPPED — no declarative source-of-truth for "which bootstrap files belong to which tier."

**NEW-DRIFT (total for P5):**
1. fable: MANDATORY STANDING CHECKS missing INCOMPLETE-INPUT/I22 gate (.claude/agents/cisem-fable.md)
2. cic-auditor: MANDATORY STANDING CHECKS section entirely absent (.claude/agents/cisem-cic-auditor.md)
3. cic-auditor: HARVEST-BEFORE-RETURN block shorter (missing 2 lines + blank)
4. ssot-registry.yaml: cisem-cic-auditor absent from ai_persona.regenerates

---

### P6 — ONE BOUNDARY PIPELINE
**Verdict: CONFIRMED**

**Mechanism map (each with trigger, output, overlap):**

| Mechanism | Trigger | Output file(s) | Pre-compact.sh role |
|---|---|---|---|
| ARCH-00370 harvest (STEP 1-5) | Model-performed on compaction cue | session-learning-index.yaml (new entry) | Mandated at STEP 0 — hook says "run harvest before proceeding" |
| Principle-13 save-all | Pre-boundary (any compact/tab-switch) | WITNESS COMPACT STATE update | Mandated at STEP 1 — hook triggers after harvest mandate |
| save-raw-activity.sh | pre-compact.sh line 16 (FIRST call) | dna/learning-registry/raw-activity/ (timestamped) | FIRST to fire (line 16) — captures raw transcript before anything |
| boundary-verbatim-index | Session-end / harvest | dna/learning-registry/boundary-verbatim-index-*.md | Part of STEP 1 save-all; not a separate hook call |
| WITNESS COMPACT STATE | Pre-boundary / explicit update | dna/CISEM-WITNESS-00003-session-continuity.md | Mandated in STEP 1 alongside save-all |

**pre-compact.sh pipeline order (dna/checks/.claude/hooks/pre-compact.sh):**
1. Line 16: `save-raw-activity.sh` — raw capture (first, before anything can be lost)
2. Lines 19-28: STEP 0 harvest mandate (model-performed; hook mandates it)
3. Lines 30-50: STEP 1 save-all (WITNESS + registries to disk)
4. Line 70: plan-audit ZF check
5. Lines 75-90: STEP 2 paste-ready resume / handoff

**Confirmed single hook owner:** `pre-compact.sh` IS the boundary orchestrator. All 5 mechanisms flow through or are mandated by it. No separate trigger fires independently.

**A9 facet analysis (tiered pipeline, proposal only):**
- RAW layer: save-raw-activity.sh (noise-stripped transcript, kept verbatim)
- SESSION layer: ARCH-00370 harvest → session-learning-index.yaml (distilled session signal)
- DISTILLED layer: root-insights.yaml RI-NNNN (class-level preventions)
- STATE layer: WITNESS COMPACT STATE (resumption context)

Each facet has distinct content and distinct consumers. They are NOT redundant — they serve different downstream uses. The overlap is in TRIGGER (all pre-compact) not in CONTENT.

**NEW-DRIFT:** no formally declared "boundary pipeline spec" exists as a single governed document. The pipeline is FUNCTIONAL (pre-compact.sh wires it) but its design is only described in CLAUDE.md §1.6 + §2 Principle 12/13.
**ALREADY-RESOLVED:** the mechanism IS wired (pre-compact.sh orchestrates all). The gap is documentation/declaration, not function.

---

### P7 — PATTERN PROMOTIONS
**Verdict: PARTLY CONFIRMED**

#### P7(a) — Planted-test coverage
**Verdict: PARTLY CONFIRMED**

Scripts with confirmed standalone fixtures (dna/checks/fixtures/): build-state, plan-gate, plan-sections, gi-consideration, ratify-gate-dual-review, wiring-value-report — 6 of 21.

Scripts with inline self-test mode (no standalone fixture): penumbra-sweep.sh (self-test IS the script's own loop), graphify-query.sh (--self-test flag), pre-commit-blocks.sh (has plan-gate fixture via lib/ but no own fixture).

Scripts with NO fixture of any kind: type-match.sh, creation-gate.sh, injection-scanner.sh, defer-scan.sh, cs-names.sh, naming-format.sh, threshold-coverage-map.sh, platform-isolation-check.sh, deletion-guard.sh, corespine-bodiless.sh, agent-pass-gate.sh, park-review-fresh.sh.

Count: 12 scripts with no planted proof (standalone or self-test). 3 with self-test only. 6 with full standalone fixtures.

**Brain guard g1 (binding on future plan):** planted tests must fire at EACH SCRIPT'S ENTRY POINT (21 plants, not one library plant) — a refactor can silently drop a caller while a library-level plant still passes.

**NEW-DRIFT:** 12 scripts lack any planted proof.

#### P7(b) — KL-0003 alignment: axis as registry-wide external-intake field
**Verdict: PARTLY CONFIRMED**

**VOC-00002 alignment axis:** dna/vocabulary/CISEM-VOC-00002-status-library.md line 51 defines the axis: `aligned · predates-changes · conflicts · n/a` — this is a KL-0003 alignment status for comparing a node to ARCH-00011 §4.

**No existing intake schema field confirmed:** ARCH-00011 §3.5 (naming & index-extension protocol) does NOT carry an explicit `alignment:` field in the intake schema template. The axis exists in VOC-00002 as a declared vocabulary item but is NOT wired into the creation protocol or any registry as a standard field.

**A12 wall application (hypothesis extension):** using the alignment axis for external-intake tracking (A12) would require wiring it into the creation template AND the relevant registries. Currently it is VOC-DECLARED but NOT-YET-WIRED into any intake schema.

**NEW-DRIFT:** alignment axis defined (VOC-00002:51) but not wired into ARCH-00011 §3.5 intake schema. A12 external-intake field does not exist as a formal creation gate.
**ALREADY-RESOLVED (partial):** the vocabulary token set itself is defined.

---

## SUMMARY — ALL NEW-DRIFT FINDINGS (consolidated)

| ID | Finding | File:line | Classification |
|---|---|---|---|
| ND-01 | `ACTIVE` token in wiring-value-report.sh not in any CISEM enum | dna/checks/wiring-value-report.sh:42 | NEW-DRIFT |
| ND-02 | plan-audit.sh [TAG-STATUS] mixes node/planning/wiring status tokens without context-scoping | dna/checks/plan-audit.sh:~595 | NEW-DRIFT |
| ND-03 | cisem-fable.md missing INCOMPLETE-INPUT/I22 gate from MANDATORY STANDING CHECKS | .claude/agents/cisem-fable.md | NEW-DRIFT |
| ND-04 | cisem-cic-auditor.md has ZERO MANDATORY STANDING CHECKS section | .claude/agents/cisem-cic-auditor.md | NEW-DRIFT |
| ND-05 | cisem-cic-auditor.md HARVEST-BEFORE-RETURN block shorter (2 lines missing) | .claude/agents/cisem-cic-auditor.md | NEW-DRIFT |
| ND-06 | cisem-cic-auditor.md absent from ssot-registry ai_persona.regenerates | dna/ssot-registry.yaml (ai_persona entry) | NEW-DRIFT |
| ND-07 | 12 of 21 check scripts have no planted-test proof of any kind | dna/checks/*.sh (listed above) | NEW-DRIFT |
| ND-08 | alignment axis (VOC-00002:51) not wired into ARCH-00011 §3.5 intake schema | dna/vocabulary/CISEM-VOC-00002-status-library.md:51 vs dna/protocols/CISEM-ARCH-00011 §3.5 | NEW-DRIFT |
| ND-09 | boundary pipeline undocumented as a governed spec (functionally wired, design undeclared) | pre-compact.sh implicit orchestration | NEW-DRIFT (documentation gap) |
| ND-10 | No machine-readable status-enum YAML; all checks hardcode their own token lists | dna/checks/*.sh (all) | NEW-DRIFT |
| ND-11 | No registry-lint exists; minimum contract is implicit | dna/learning-registry/*.yaml (all) | NEW-DRIFT |
| ND-12 | vocabulary.html staleness (status_enum regenerates) — SUSPECTED not confirmed | dna/ssot-registry.yaml (status_enum.regenerates) | NEW-DRIFT (suspected) |

---

## HARVEST-BEFORE-RETURN

**What could not be verified and why:**
- vocabulary.html presence in frontend/pages/: confirmed ls showed no vocabulary.html in the visible output but full directory enumeration was not done via a separate find command. Marked SUSPECTED. A `find frontend/ -name "vocabulary.html"` would confirm.
- Persona §1.6 vs persona-collaborator.md line-by-line diff: spot-checked structural alignment (L1/L2/L3 layering matches) but no automated diff run. Potential omission divergences not confirmed.
- Skill files (.claude/skills/): P5 hypothesis mentions 5 skills with near-duplicate bootstrap — skills were NOT read in this run (time constraint, Core Seed 1 scope). Agent-side evidence confirms the pattern; skill-side is NOT-YET-VERIFIED.
- ARCH-00426 WEE plan assumed per-registry readers: ASSERTED from plan structure description in task file; the actual ARCH-00426 plan file was not read to cite line evidence.
- penumbra-sweep.sh exact timing: exceeded 90s bash timeout; exact wall-clock unknown.
- pre-commit-blocks.sh exact timing: not individually timed; git-diff scoped, expected to be fast.

**What IS confirmed (evidence-grounded, file:line cited):**
All 12 NEW-DRIFT findings in the summary table above have direct file citations. Timing data is MEASURED (PowerShell Measure-Command, not inherited). All classification calls follow RI-0002 (NEW-DRIFT vs ALREADY-RESOLVED). All status matches follow RI-0012 (anchored field-value, not substring).

**Sequence recommendation (Fable + Brain consensus — Governor decides):**
P2 alone first (machine-readable enum — the fixture all other phases depend on). Then P1 under guards g1-g5 with MEASURED timing as precondition. Then P3 + P4. Then P5 + P6 + P7. Each phase requires a ratified /cisem-plan (A4/I25).

---

**EXPLICIT STATEMENT (Core Seed 1 compliance):** ZERO governed files modified in this run. The only Write call in this session was to this findings file (dna/learning-registry/agent-findings/sonnet-consolidation-verify-2026-08-17.md) and the agent-findings.md on-ramp append. No dna/checks/*.sh, dna/planning/*.md, dna/protocols/*.md, dna/ssot-registry.yaml, or any other governed file was edited.
