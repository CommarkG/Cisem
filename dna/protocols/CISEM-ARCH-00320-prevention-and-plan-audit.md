# Prevention & Plan-Audit Protocol
**Node ID:** CISEM-ARCH-00320
**Type:** ARCH | **Status:** DECLARED — Governor "hardwire" instruction (this
session). Not RATIFIED (Governor decree pending). Opus did not self-ratify.
**Version:** v1.0 (2026-07-16)
**depth_level:** L2 | **Position in schema:** T-SYS, protocol layer
**tags:** [prevention, plan-audit, invariants, recurring-check, mandatory]
**Goal:** Convert every failure class found in the tri-model audit into a
*permanent structural invariant* + a *recurring plan-audit*, so the same
failures cannot silently recur — measurable as: every plan/registry commit is
preceded by a passing (or explicitly-flagged) audit against the checklist below.
**Governing corespine:** CS-CREATION-001 (governs creation + planning)
**Role:** Reusable prevention protocol — the CORE that plans (INSTANCE) invoke.
**Who I'm serving:** The Governor (assurance the system stops lying to itself)
and every AI instance authoring or auditing a plan/registry.

## Pocket Declaration
- **reasoning_scope:** define permanent prevention invariants + recurring audit
- **inherited_constraints:** must not weaken CLAUDE.md §2/§3; obeys CISEM-ARCH-00300 Hard Line
- **output_contract:** invariants + planning-template improvements + audit checklist + first-audit stamp
- **ai_cannot:** self-ratify; assert an audit "passed" below Opus
- **recorded_at:** 2026-07-16

---

## Why this exists (standalone)
The tri-model audit found failures that are *classes*, not one-offs (phantom
references, disclosed-labeled-as-resolved, uncommitted truth-bumps, a
non-reconcilable registry, dangling children, a phantom "committed" batch).
Fixing instances is whack-a-mole. This node makes each class either
structurally impossible or immediately caught, and bakes the check into the
planning template so prevention is the default, not a thing someone remembers.

## 1. Failure class → permanent invariant (each traces to a real 2026-07-16 incident)
| # | Failure class | Incident | INVARIANT (permanent) |
|---|---|---|---|
| I1 | Phantom reference | DNA-00001, ARCH-00012/13 cited, no file | Every referenced ID/path resolves on disk OR carries an explicit `NOT-YET-A-NODE` / `example-only` tag inline |
| I2 | Disclosed-as-Resolved | commits "close §3.4 gaps" over disclosure-only work | `DISCLOSED` ≠ `RESOLVED`. Closure verbs (close/resolve/complete/fix) in a commit or status require a `last_verified` line + a reproducible check |
| I3 | Uncommitted truth-bump | ARCH-00008 `RATIFIED` sat in the working tree | Truth-field changes (Status/RATIFIED/last_verified) commit atomically with a decree reference; never left dangling in the working tree at handoff |
| I4 | Non-reconcilable registry | naming-registry tracks next_seq only | Every registry maintains an assigned-ID→file manifest, diffable against the filesystem. The manifest is **DERIVED** (ground truth = registry + filesystem), regenerated and diffed each audit — never hand-authored, or it becomes a second source of truth that drifts |
| I5 | Dangling child | `ai-oversight-layer3.md` declared, absent | Every registry `child`/dependency reference resolves on disk or is `PLACEHOLDER`-tagged |
| I6 | Phantom commit batch | ARCH-00170 "created this session" ≠ git | Any "committed/created" claim is verified against `git log` before the claim is written |
| I7 | Truth asserted below Opus | (prevented) | No truth-bearing field authored below Opus — CISEM-ARCH-00300 Hard Line |
| I8 | Off-repo "authoritative" source | Founding Node, DNA-00001, GOV-00018, constraint-set.yaml cited as binding but Drive-only | No off-repo artifact may be cited as authoritative. It must be migrated into git OR flagged `NOT-IN-REPO` inline **with a named migration step** in the active plan. A referenced governing source with no file and no migration step is a violation |
| I9 | Unregistered TYPE prefix | CISEM-SCHEMA-00001, CISEM-TEMPLATE-PROTOCOL-001 use prefixes absent from ARCH-00011 §1 | Every node's TYPE prefix MUST exist in the ARCH-00011 §1 TYPE registry, OR the same change updates that registry to add it. A node whose prefix is unregistered is a naming violation |
| I10 | Vocabulary drift between sources | VOC-00002 carried `STAGED`; ARCH-00011 §4 did not — two governing files disagreed on the status enum | Every controlled vocabulary (status enum, TYPE registry, tag set) has exactly ONE authoritative source. All other files *mirror* it and may not add or remove values. On conflict the authoritative source wins |
| I11 | root_authority sprawl | `root_authority` is a skip-validation switch that could spread | `root_authority: true` is confined to the closed set in ARCH-00011 §7 (Founding, ARCH-00011, CS-MASTER-VALIDATION). Any other node carrying it — or adding to the set without a foundational decree — is a violation |
| I12 | Silent tier-routing | IBD was built by Opus with no routing decision — the Governor caught it | Every creation/execution DECLARES its tier owner + why before starting (CLAUDE.md §3.0). Opus doing mechanical work needs a stated exception. Silent routing is a violation |
| I13 | Core-seed integrity | needed so Opus intent survives lower-tier execution | Every `[[CORE-SEED]]` is Opus-authored and immutable by lower tiers; it must be PRESENT and HONORED in the executed output. A missing, altered, or unhonored seed is a violation (ARCH-00300 Core Seeds) |
| I14 | Silent thread-drop / drift | recurring: items presented → Governor pivots → threads silently dropped, completion abandoned (compounding waste) | Every presented decision-item stays OPEN until explicitly resolved / rejected / parked; SILENCE ≠ resolution. On a pivot the reply handles the new AND resurfaces open items. A silently dropped thread is a violation (CLAUDE.md §2 principle 9) |

## 2. Planning improvements (baked into the plan template — prevention by default)
Every plan node MUST now carry:
- **Prevention invariants touched:** `[I1..I7]` — which this plan can regress.
- **Plan-audit last run:** date + verdict, appended to change log.
- **Per-step state** ∈ `{disclosed | in-progress | resolved-verified}` — never a bare "done."
- Every in-text reference is treated as a live link that MUST resolve at audit time.

## 3. Plan-audit protocol (the recurring check)
- **Cadence:** before every commit touching a plan/registry, and on Governor request.
- **Tier ownership (per CISEM-ARCH-00300):** Haiku enumerates (ref-scan, registry↔fs
  diff, commit-verb scan, working-tree truth-scan) → emits `{claim,file,line,evidence}`;
  Sonnet maps each finding to the invariant it violates against §4; Opus rules
  `resolved` vs `disclosed` and writes the verdict. Only Opus writes the verdict (I7).
- **Output:** a dated audit stamp appended to the audited node's change log.

## 4. Audit checklist (executable)
```
[ ] I1  Every referenced ID/path resolves OR is tagged NOT-YET-A-NODE / example-only
[ ] I2  No closure verb without last_verified + reproducible check
[ ] I3  No truth-field change left uncommitted in the working tree
[ ] I4  Registry has a current ID->file manifest; fs-diff is clean
[ ] I5  Every registry child/dependency resolves on disk or is PLACEHOLDER
[ ] I6  Every "committed/created" claim verified against git log
[ ] I7  No truth-bearing field authored below Opus
[ ] I8  No off-repo source cited as authoritative without a NOT-IN-REPO flag + migration step
[ ] I9  Every node's TYPE prefix is registered in ARCH-00011 §1 (or registered in the same change)
[ ] I10 Every controlled vocabulary has ONE authoritative source; other files mirror, never extend
[ ] I11 root_authority confined to the ARCH-00011 §7 closed set; adding to it needs a foundational decree
[ ] I12 tier-routing declared before creating/executing (CLAUDE.md §3.0); Opus mechanical work has a stated exception
[ ] I13 every [[CORE-SEED]] is Opus-authored, immutable, and present+honored in the executed output
[ ] I14 no presented item silently dropped; open items resurfaced on every pivot; silence ≠ resolution
```

## 5. FIRST AUDIT — run by Opus, 2026-07-16 (proof-of-use, not aspirational)
Enumeration run manually by Opus this session (ongoing runs delegate enumeration
to Haiku per §3):
- **I1 — true phantoms (unresolved, non-example):** CISEM-DNA-00001, CISEM-GOV-00018
  (Drive-only), CISEM-ARCH-00012, CISEM-ARCH-00013, CISEM-LOAD-00002,
  CISEM-WITNESS-00003, CISEM-WITNESS-00004 (phantom batch). **VERDICT: disclosed,**
  tracked in ARCH-00310 Steps 6; must be created or formally closed.
- **I1 — illustrative-only refs (acceptable, need tagging):** CS-DESIGN-001,
  CS-UXUI-001, CS-TEMPLATE-001 (examples in TEMPLATE-PROTOCOL-001), CS-WEB-DESIGN-001,
  CS-PHYSICAL-DESIGN-001 (named-slot examples in SCHEMA-00001), CS-REJECTED-IDEAS-001
  (open question in ARCH-00280). **VERDICT: acceptable;** flag inline as example-only
  to satisfy I1 permanently.
- **I1 — naming inconsistency:** CISEM-LOAD-00001 resolves to `CLAUDE.md`, whose
  filename does not encode its Node ID (ARCH-00011 §2 format). **VERDICT: disclosed.**
- **I2 — closure-verb commits flagged:** 71b15fd, 22a01a9, 30ccf45 — none carry a
  `last_verified` + check. **VERDICT: disclosed;** back-fill or reword going forward.
- **I3 — working-tree truth-fields:** only the known ARCH-00008 `RATIFIED` bump,
  deliberately held back. **VERDICT: clean.**
- **I5 — dangling children:** none in corespine-registry after this session
  (only `pocket-mechanism.md`, resolves). **VERDICT: pass.** (`ai-oversight-layer3.md`
  is listed in a prior registry entry — recheck at next audit.)
- **I4 — manifest:** built this session — `dna/naming-manifest.yaml` (Sonnet,
  Opus-verified: 15 ARCH present + 2 absent, all TYPEs mapped, off-repo IDs marked
  ABSENT). **VERDICT: in-progress;** manifest exists, ongoing reconciliation is now
  a diffable check, not a blind spot.
- **I8 — off-repo authoritative sources:** Founding Node (TSA/CoreSpiral/Pocket),
  CISEM-DNA-00001, CISEM-GOV-00018, constraint-set.yaml — all cited as governing
  but Drive-only / never created. **VERDICT: fail (was un-flagged);** now each has a
  named migration step in ARCH-00310 §4 coverage map. Founding Node is P0.
- **I9 — unregistered TYPE prefix:** CISEM-SCHEMA-00001 (prefix SCHEMA),
  CISEM-TEMPLATE-PROTOCOL-001 (prefix TEMPLATE-PROTOCOL) — neither in ARCH-00011
  §1. **VERDICT: fail;** register both TYPEs in ARCH-00011 §1 or rename — ARCH-00310
  Step 8. (Surfaced by Sonnet in naming-manifest.yaml, ruled by Opus.)

## 6. The Recurring Quality Cycle (RQC) — bundled from existing pieces, no new node
Formalizes this session's deep-dive audit into a STANDING, self-improving loop.
It bundles what already exists; it adds no governance doc.

**Stages (PDCA + adversarial + learning):**
1. **TRIGGER** (regular, NOT on-request): every commit/PR touching a plan,
   registry, or corespine, plus a scheduled full sweep. Now: the WARN-ONLY hook
   `dna/checks/plan-audit.sh` + the standing ARCH-00300 one-click prompts. After
   ARCH-00180/00270: pre-commit + CI in BLOCK-mode.
2. **RUN** (tiers, ARCH-00300): Haiku enumerate → Sonnet map → Opus rule
   (adversarial, default-refute) → Governor decree on any truth-field.
3. **CHECK** (§4): invariants I1..In.
4. **SELF-CHECK**: every 5th run, a meta-audit of prior runs for MISSED findings
   (completeness critic) — the cycle audits its own auditor.
5. **LEARN & GROW** (CS-LOOPS-001/learning + qc-findings, now `unwired:false`): a
   novel finding mapping to NO existing invariant becomes a CANDIDATE invariant;
   Opus rules, Governor ratifies, the checklist GROWS. Resolved findings are
   re-checked each run (regression memory). Proof it already works: **I8, I9, I10
   were each born this session from real findings — the loop has learned 3×.**
6. **MEASURE**: each run appends to `dna/quality-ledger.yaml` (findings/invariant,
   disclosed→resolved time, recurrence rate, invariants-added). A flat or
   worsening trend is itself a finding.
7. **GOVERN** (bounded self-improvement): the cycle may ADD invariants but may
   NEVER weaken a foundational rule (Hard Line I7, foundational decree,
   disclosed≠resolved) without Governor decree. It is subject to its own invariants.

**Honest maturity:** MANUAL tier-run + WARN-ONLY script now; BLOCK-mode only after
this node is RATIFIED (approved sequence) and ARCH-00180 wires the rest. §6 is the
SPECIFICATION of the control; it becomes the control when wired — stated so it is
never mistaken for already-enforced.

## Does NOT cover
Full automation of every invariant — only the first check is wired so far
(`dna/checks/plan-audit.sh`, WARN-ONLY: I1/I3/I6). The rest stay manual until
ARCH-00180 scripts them and ARCH-00270 moves the hook to BLOCK-mode.

## Self-compliance (against ARCH-00230 checklist)
Header, measurable Goal, Governing corespine, Why-standalone, Rule-as-procedure
(§3-4), Does-NOT-cover, Role/Who-serving/Pocket all present. Naming per ARCH-00011
(ARCH-00320, 10-spacing). References in §5 all resolved or verdict-tagged (I1).

## Path Rejection Declaration (CLAUDE.md §2.8)
- **Rejected: marking the first audit "passed."** It is a mix of pass / disclosed /
  fail verdicts, stated per-item — not a blanket green. Blanket-pass would be the
  exact I2 sin this node prevents.
- **Rejected: folding this into ARCH-00310.** Prevention is CORE-reusable (every
  plan invokes it); the remediation plan is one INSTANCE. Kept separate per §3.2c.

## Change log
- v1.0 — 2026-07-16: created (Opus) on Governor "enhance permanent prevention +
  plan audits + hardwire" instruction; first audit run and embedded (§5).
