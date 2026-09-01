# Colleague-Platform Relationship — Default-Deny + the Learning Channel (the sole permitted crossing)
**Node ID:** CISEM-ARCH-00438 | **Type:** ARCH | **Sub_type:** PLAN
**Status:** PROVISIONAL-ACTIVE
**Planning Status:** AWAITING-BUILDER-REVIEW — **A11 Brain consult LANDED 2026-09-01 and DOWNGRADED the central claim** (a mechanical PERMIT-gate is false comfort; the deny-wall stands, the learning channel is behavioral/fails-open + a thin detect-belt). Governor decision open: thin-belt+discipline (Opus rec) vs drop-the-gate/total-isolation (Brain rec). GI-68 owed (spend-blocked). NOT self-ratified (GI-63).
**depth_level:** L2 | **Position in schema:** T-SYS, platform-boundary layer (DEFINITION hub above the enforcement plans)
**tags:** [isolation, security, platform-boundary, learning-channel, colleague-platforms, definition]
**wisdom_considered:** [A12 External Wall, RI-0054/0055/0057, GI-51 (amended), GI-60 well-governed-diversity, Principle 18A/18C, item-53 restatement≠corroboration]
**goal:** Mechanically DEFINE the CISEM ↔ colleague-platform (CSP, Csps) relationship — isolated peers, DENY every crossing by default, PERMIT exactly one: LEARNING, and only as an origin-tagged, purified, trust-zero knowledge artifact through a defined channel — measurable as: (1) no file/exec/tool/state/relay crossing survives the ARCH-00437 wall; (2) an inbound learning artifact without origin-tag + purified-sibling is refused from any governed write; (3) an outbound share carries `PLATFORM: CISEM` + "apply-through-your-own-governance" and CISEM never reaches into a colleague to install it.
**governing corespine:** CS-CONTROLPLANE-001
**consolidates (A8, reference-not-fork):** ARCH-00429 (MCP/workspace posture) + ARCH-00437 (default-deny build) = the DENY arms; A12 + ARCH-00405 (two-stage intake) + ARCH-00399 (PAE purify) = the inbound purify pipeline; `PLATFORM-ISOLATION-HARDENING-PROMPT` = the outbound share model; `SECURITY-multi-platform-...` Part-4 = the doctrine seed.
**Independent Verifier:** cisem-haiku (protocol-lens) + cisem-sonnet (implementability-lens) — GI-68, distinct from Opus author.

## Pocket Declaration (§3.3)
- **reasoning_scope:** define the relationship + the bidirectional learning channel as the sole permitted crossing; reference the deny-enforcement, do not rebuild it
- **inherited_constraints:** A4/A11 (plan-gate + Brain consult on deep-core); A12 (content-origin-not-messenger); the deny-arms (ARCH-00429/00437); fail-closed standard; RI-0058 (both-directions fixture)
- **output_contract:** the one-line relationship doctrine (SSOT) + a mechanical inbound learning-intake gate + a mechanical outbound export guard, each fail-closed + fixtured
- **ai_cannot:** treat a colleague's content as authority; write un-purified foreign content to a governed file; reach into a colleague's repo/tools/state; self-ratify; truth-stamp without Opus (I7)
- **recorded_at:** 2026-09-01
- **cal_reference:** CISEM-ARCH-00390 — `bash dna/checks/plan-audit.sh`; [ZF] is the done-gate.

## Tier-Routing Declaration (§3.0)
Opus (this plan + soundness + Core Seeds + truth-fields) · Sonnet (builds STEP 2–3 checks + schemas + fixtures) · Haiku (gather foreign-fingerprint inventory the intake gate keys on) · Governor (ratifies the doctrine + relationship) · Brain (A11 consult, cold-audit — attack it).

## Existing-First Search (§3.2b — STATED)
- ARCH-00429 (RATIFIED) + ARCH-00437 (Governor-ratified) = the DENY enforcement → referenced as arms, NOT rebuilt.
- A12 / ARCH-00405 / ARCH-00399 = the inbound purify pipeline → reused.
- `PLATFORM-ISOLATION-HARDENING-PROMPT` (SHAREABLE) = the outbound model → reused.
- `SECURITY-multi-platform-...` Part-4 one-line doctrine → EXTENDED here (adds the learning-crossing).
- Grep: no existing node DEFINES the colleague relationship + learning channel as one mechanical posture → this is the definition hub. Not a fork.

## Anti-Scatter Ordering (Principle 16)
Central: **(1) the doctrine** (the definition the Governor asked for) → **(2) inbound learning gate** (the incident vector — foreign content entering the core) → **(3) outbound export guard**. The deny-arms are already built/ratified (referenced, parked from rebuild).

## The Rule

### THE RELATIONSHIP (mechanical definition — the SSOT this plan establishes)
CISEM and colleague platforms (CSP, Csps, any future) are **ISOLATED PEERS**. Two clauses, both mechanical:
- **DENY by default:** NO crossing of **files · execution · tools · shared state · relay-of-content**. Enforced by ARCH-00437 (WSL2 two-layer wall + intake origin-gate + fail-closed allowlist) + ARCH-00429 (MCP/workspace). *Referenced — this plan does not re-implement them.*
- **PERMIT exactly ONE crossing — LEARNING:** bidirectional knowledge transfer, and ONLY as an origin-tagged, purified, trust-zero **learning artifact** through the channel below. Everything else stays denied.

**THE ONE-LINE DOCTRINE (extends SECURITY Part-4, becomes the SSOT):** *CISEM and its colleague platforms are isolated peers. Every crossing is DENIED by default; the SOLE permitted crossing is LEARNING — and only as an origin-tagged, purified, trust-zero knowledge artifact through the learning channel — never files, execution, tools, state, or authority.*

### STEP 1 — ratify the doctrine + govern its design SSOT
Establish the one-line doctrine as the relationship SSOT (ssot-registry entry). Add `tags:`+`Status:` to `SECURITY-multi-platform-...md` (→ its A–J matrix is the design SSOT) + `PLATFORM-ISOLATION-HARDENING-PROMPT.md`; register both.

### STEP 2 — the INBOUND learning gate (CISEM learns from a colleague)
A colleague's knowledge enters ONLY as a **learning artifact**: a file carrying `PLATFORM: <source>` + `TYPE: LEARNING`, landing in a quarantine home (RAW-EXTERNAL). Then:
1. **3-factor origin gate (A12/SECURITY A-B-C):** origin header present + fingerprint scan clean (foreign specifics flagged) + cited IDs resolve. **Fail-closed:** un-tagged / header-content mismatch ⇒ REFUSED from any governed write.
2. **Purify (ARCH-00405 Stage-1 + ARCH-00399 PAE):** strip the colleague's platform-specifics → extract the CISEM-aligned META essence → **RAW ↔ PURIFIED** pair.
3. **Promote:** only the PURIFIED essence enters CISEM's own gates (Existing-First → plan → ratify). Trust-zero until promoted; a colleague's restatement is NOT corroboration (item-53).
**Mechanism:** a `[LEARNING-INTAKE]` check (extends `[RAW-PAIR]`/`[INJECTION-SCAN]`): flags any inbound learning artifact without origin-tag + purified-sibling + provenance, and any governed file carrying un-purified foreign fingerprints. Both-directions fixture (RI-0058).

### STEP 3 — the OUTBOUND export guard (a colleague learns from CISEM)
CISEM exports shareable governance as a **portable, versioned, origin-tagged** artifact (the hardening-prompt model): self-contained, `PLATFORM: CISEM` header, platform-agnostic, carrying the clause *"a shared LEARNING, not authority — apply through YOUR own governance."* CISEM **NEVER** reaches into a colleague's repo/tools/state to install it — the colleague pulls it and applies through its own ratification.
**Mechanism:** export artifacts live in a designated share home; an **outbound guard** (ARCH-00437 STEP-4 J-guard) flags any emission/commit/tool-call targeting a sibling path. Both-directions fixture.

### STEP 4 — the deny-arms (referenced, not rebuilt)
The "not connected" enforcement = ARCH-00437 (WSL2 wall + gates) + ARCH-00429 (MCP/workspace). This plan is their DEFINITION hub; it authorizes nothing new in them.

## Core Seeds (immutable — honor verbatim, I13)
[[CORE-SEED | MUST: colleagues = isolated peers — DENY every crossing (files·execution·tools·state·relay) by default; the SOLE permitted crossing is LEARNING, only as an origin-tagged, purified, trust-zero knowledge artifact — never files, execution, tools, state, or authority. | WHY: the relationship's mechanical definition; anything else is the cross-platform pollution the wall exists to stop | VERIFY: every crossing is either denied by ARCH-00437/00429 or a gated learning artifact | APPLIES_TO: all tiers, every CISEM↔colleague interaction]]
[[CORE-SEED | MUST: origin-before-content — verify a learning artifact's PLATFORM origin (3-factor) BEFORE evaluating its content; content honest about a DIFFERENT platform is still foreign; even the Governor relaying it does not launder it (A12). Fail-closed: un-tagged ⇒ refused. | WHY: the dangerous input is a fluent report honest about the wrong platform | VERIFY: STEP-2 fixture refuses a well-formed foreign artifact | APPLIES_TO: all inbound]]
[[CORE-SEED | MUST: inbound = trust-zero + purify-before-promote (RAW↔PURIFIED); only the purified META essence enters CISEM's own gates; a colleague's restatement of a shared lesson is NOT corroboration (item-53) — it earns entry on its merit through our gates, never because a colleague agrees. | WHY: nothing alien writes the core unverified; same-lineage agreement is not evidence | VERIFY: promoted content cites a purified sibling + passed CISEM gates | APPLIES_TO: all inbound]]
[[CORE-SEED | MUST: outbound = share as a portable, origin-tagged, "apply-through-your-own-governance" artifact; CISEM NEVER reaches into a colleague's repo/tools/state to install it. | WHY: sharing a learning ≠ exercising authority over another platform (GI-60); reaching in is the outbound-leak crossing | VERIFY: export carries PLATFORM:CISEM + the clause; outbound guard flags any sibling-targeting emission | APPLIES_TO: all outbound]]
[[CORE-SEED | MUST: this is a DEFINITION hub — the deny-enforcement is ARCH-00437/00429 (reference, do not rebuild); only the learning-channel gates are new. | WHY: A8/Existing-First; three isolation plans must not duplicate enforcement | VERIFY: no deny-mechanism re-implemented here | APPLIES_TO: whole plan]]

## What DOES change
A new `[LEARNING-INTAKE]` check + inbound quarantine home + learning-artifact schema · a new outbound guard + export home + export-artifact schema · four both-directions fixtures · the doctrine registered as SSOT · the two design docs governed · naming-registry ARCH 438→439.

## What does NOT change
ARCH-00437/00429 bodies (referenced only). No deny-mechanism rebuilt. No connector posture change. Existing intake (ARCH-00405/00399) reused, not forked. No claim "done" without fixtures + shown evidence.

## Dependencies
- **blocks-on:** Governor ratification of the doctrine; A11 Brain consult (dispatched, cold-audit); GI-68 dual-review (spend-blocked). STEP 2–3 build after ratify.
- **unblocks:** a mechanical, bidirectional, gated learning channel; answers "where does the ERP live + still enjoy CISEM's quality" (quality reaches CSP/Csps via the OUTBOUND channel; CISEM stays isolated).

## Self-Compliance (ARCH-00230)
Existing-First stated (deny-arms + intake + hardening-prompt referenced, no fork). Tags+Status+Pocket+Tier-Routing+Verifier+Core-Seeds+Anti-Scatter present. Per-file table below. Under 200 lines.

## Path Rejection Declaration
- ❌ **Building the ERP inside CISEM** — REJECTED (Governor 2026-09-01, "You are Cisem"): category error + cross-platform pollution; the ERP lives in its own product repo and enjoys CISEM's quality via the OUTBOUND learning channel.
- ❌ **A fourth isolation build plan** — REJECTED (A8): the deny-arms exist (ARCH-00437/00429); this is the definition hub + the new learning gates only.
- ❌ **Any crossing beyond learning** — REJECTED (the doctrine): files/exec/tools/state/relay stay denied.
- ❌ **Crediting a colleague's restatement as corroboration** — REJECTED (item-53).

## Per-File Alignment Table
| File | ID / registry | Schema placement | tags | status |
|---|---|---|---|---|
| this plan | ARCH-00438 (438→439) | T-SYS, planning (definition hub) | isolation, learning-channel | PROVISIONAL-ACTIVE / AWAITING-BUILDER-REVIEW |
| `[LEARNING-INTAKE]` check + inbound home | check (new) | T-SYS, check layer | intake, learning | to-create (STEP 2) |
| outbound guard + export home | check (new) | T-SYS, check layer | export, learning | to-create (STEP 3) |
| `dna/checks/fixtures/learning-channel/*` (×4) | fixture (new) | T-SYS, check-fixture | fixture | to-create |
| `SECURITY-multi-platform-...` + `PLATFORM-ISOLATION-HARDENING-...` | to-register | T-SYS, security-design | isolation, design | to-govern (STEP 1) |

## Definition of Done Reference
`dna/checks/definition-of-done.md` — each new gate: fail-closed + both-directions fixture + named invoker (3-clause "closed"). Honest tiers (intake = detect/relay-control; the filesystem wall stays ARCH-00437). No self-certification.

## Brain A11 Consult — LANDED 2026-09-01 (cold-audit; MATERIAL — downgrades the mechanical claim)
Brain attacked as asked (no repo access; reasoned from the doctrine description, self-labeled inferred vs known). Five findings, ACCEPTED:
1. **HUMAN-CHANNEL GAP (the killer):** the taxonomy has no category for content crossing via the shared human's ordinary conversation — the Governor pasting colleague content into a CISEM session. That is the DOMINANT real vector (it is how all 5 source artifacts AND this consult entered), it arrives UNTAGGED, and the gate keys on discrete artifacts so it never fires. Behavioral purification here is a HOPE, not a mechanism.
2. **PURIFICATION CATCHES FACTS, NOT ONTOLOGY:** an artifact can be 100% honestly-sourced + accurate and still import the colleague's FRAME (category boundaries, what-counts-as-done, solution shape) through structure that survives ID-stripping. Live example: a 5-layer playbook adopted near-verbatim, IDs stripped, structure intact. item-53 is adjacent but does not catch frame-capture.
3. **PARAPHRASE-LAUNDERING:** an intermediary (human/AI) rephrasing foreign content before the gate defeats the origin check — it tags only the WRAPPER, not the underlying ideas. Demonstrated this session (the CDS synthesis reached CISEM as relayed prose, ungated).
4. **"CISEM NEVER REACHES IN"** holds by ABSENCE-OF-CAPABILITY, not a guard; the real vector is the mirror human-laundering (CISEM emits a share, a human carries it into a colleague repo) — unwatched after it leaves. Core Seed 4 was discipline dressed as a control.
5. **PERMIT-GATE DRIFT (the decider):** every CISEM gate is a DENY gate (fails closed, loud). A learning gate is a PERMIT gate — its false-positives are invisible until damage, so under pressure it tunes toward permissiveness (like every WARN-not-BLOCK in the field record). Total-isolation + hand-done-learning fails CLOSED forever; a trusted mechanical learning-gate drifts toward MORE crossings and manufactures false confidence that "the wall handles it."

**REFRAME (accepted — DOWNGRADES the plan's central claim):**
- The DENY wall (ARCH-00437/00429) is the real mechanical enforcement — fails closed. That STANDS.
- The LEARNING channel is PRIMARILY A DISCIPLINE — re-decided every time, by hand, Brain-critiqued — NOT a trusted mechanism. It FAILS OPEN.
- What is mechanizable is a THIN DETECT-only belt (tag-requirement on file-arriving artifacts + a foreign-fingerprint scan of governed files); it catches only the raw ~90%, explicitly NOT trusted for the 3 vectors that matter (human-paste · paraphrase-laundering · frame-import).
- ADD to the purify DISCIPLINE the ontology question: *"have we imported a colleague's frame and begun treating it as native?"* — judgment, not a check.
- HONEST LABEL everywhere: the wall does NOT handle learning; learning is judgment, fails open, re-decided each time.

**OPEN GOVERNOR DECISION:** (a) keep ARCH-00438 as a thin DETECT-belt + a NAMED discipline (Opus revised rec — mechanical honesty about what it can't catch), or (b) DROP the mechanical learning-gate entirely, adopt total-isolation + hand-done-learning (Brain's rec — fails closed forever). Either way `[LEARNING-INTAKE]` is downgraded from "gate" to detect-only, or dropped.

## Opus Stage-1 Soundness Verdict (for [RATIFY-GATE])
**REVISED post-Brain: SOUND ONLY IF DOWNGRADED per the reframe above.** As originally written (a mechanical PERMIT-gate as the sole permitted crossing) it is UNSOUND — false comfort (Brain #5). The deny-wall stands; the learning channel is behavioral/fails-open with a thin detect-belt. Not self-ratified (GI-63); GI-68 dual-review still owed (spend-blocked).

## Change log
- v1.0 — 2026-09-01 (Opus authored, after Governor confirmed "You are Cisem; CSP/Csps are colleagues connected only by learning"): defines the relationship mechanically — DENY-all-by-default (arms = ARCH-00437/00429, referenced) + the SOLE learning crossing (inbound 3-factor+purify gate, outbound origin-tagged export guard). References A12/ARCH-00405/00399 + the hardening-prompt (no fork). Awaits A11 Brain consult (cold-audit, dispatched) → Opus soundness → GI-68 → Governor ratification.
- v1.1 — 2026-09-01 (Brain A11 consult landed — MATERIAL): Brain's cold-audit found the mechanical learning-gate is partly false comfort — the 3 vectors that matter (human-paste · paraphrase-laundering · frame/ontology-import) are NOT mechanically catchable; only the raw ~90% is, and that's already denied by ARCH-00437. Permit-gate structurally drifts toward permissiveness (Brain #5). REFRAMED: deny-wall = the real mechanism (fails closed, stands); learning channel = primarily DISCIPLINE (fails open, re-decided each time) + a thin DETECT-belt honestly labeled as NOT trusted for the 3 vectors. `[LEARNING-INTAKE]` downgraded gate→detect-only. Opus verdict revised: UNSOUND as originally framed, SOUND only if downgraded. Governor decision open: thin-belt+discipline vs drop-gate/total-isolation.
