---
Node_ID: CISEM-ARCH-00416
Type: ARCH
Status: DRAFT
Planning_Status: AWAITING-BUILDER-REVIEW
depth_level: L1
tags: [planning-domain, cs-comms-001, corespine-formalization, communication, a2-dependency]
---

# CS-COMMS-001 Formalization Plan
**CISEM-ARCH-00416** | ARCH | **Status: DRAFT** | **Planning Status: AWAITING-BUILDER-REVIEW**

**Goal:** Formalize CS-COMMS-001 — the already CONSENSUS'D 8-fork communication design captured in `dna/queue/HANDOFF-opus-comms.md` — as a governed corespine node: a registry entry in `dna/corespines/corespine-registry.yaml`, a canonical manifest file, and reconciliation of the existing forward-references that already point to it (ARCH-00350, `naming-registry.yaml` CS-names allowlist `pending: true`, `dna/audits/cs-comms-existing-map-2026-07-19.md`). This plan does NOT re-design the 8 forks — it formalizes the EXISTING consensus'd shape into a real node.

**Governing corespine:** DEFERRED — see "A2 Dependency" section below (CORE-SEED, this plan does not pre-decide the binding).
**CAL reference (CISEM-ARCH-00390):** pre-commit `[ZF]` + `[I19]` + `[TAG-STATUS]` + `[CS-NAMES]` fire on this plan's commit. `[CS-NAMES]` is directly relevant: `naming-registry.yaml` already reserves the `COMMS` name with `pending: true` — this plan is the mechanism that would resolve that pending flag, at implementation time, not now.
**Independent Verifier:** `cisem-opus-pe` (cold default-refute pass, author≠verifier per P5 — ARCH-00401 Enh.4).

---

## Tier-Routing Declaration (CLAUDE.md §3.0 / ARCH-00401 Enh.1)
- **DRAFTING this plan → Sonnet** (STRUCTURING tier), executing Opus's exact dispatch; not redesigning the 8-fork shape.
- **Stage 1 soundness review → Opus** (`cisem-opus-pe`). Sonnet writes no truth-bearing verdict (I7/CORE-SEED).
- **Stage 2 ratification → Governor.**
- **If implementation is later authorized:** Manifest population (running ARCH-00394's own STEP 0–6 wizard procedure against the CS-COMMS-001 YAML input) is BUILD-class work suited to Sonnet, per ARCH-00394's own §I Gate Trace ("Sonnet DRAFTS wizard [output], Opus ratifies on first use"). The A2-dependent `Core_spine:`/corespine-binding field specifically is judgment work reserved for Opus (per this plan's CORE-SEED below) — it may not be filled by Sonnet as a guess.

---

## Pocket Declaration
- **reasoning_scope:** formalize an already-consensus'd design (CS-COMMS-001) into a governed node, without re-opening its content
- **inherited_constraints:** A1–A10; D1–D6; I7; I10 (reference ARCH-00350/ARCH-00394/HANDOFF-opus-comms.md, never re-derive their content); I19; I25; the A9 axiom's Corespine-as-infrastructure reframe (CLAUDE.md §2.4 A9, "full A2/ARCH-00400 rework parked, IBD-0017") — explicitly NOT resolved by this plan
- **output_contract:** a DRAFT plan, `Status: DRAFT`, `Planning Status: AWAITING-BUILDER-REVIEW` — no ratification, no implementation, no corespine-binding decision made
- **ai_cannot:** self-ratify; stamp SOUND/RATIFIED; re-design the 8 forks; decide the A2 uses-vs-contains question on the Governor's/Opus's behalf
- **recorded_at:** 2026-07-22 | **cal_reference:** ARCH-00390

---

## Anti-Scatter Ordering (CLAUDE.md §2 Principle 16 / ARCH-00401 Enh.10)
1. **CENTRAL** — formalize the registry entry + manifest skeleton for the 8-fork shape exactly as consensus'd (no new fork content).
2. **CENTRAL** — reconcile the 3 existing forward-references (ARCH-00350's `Reconcile-with` note; `naming-registry.yaml` `COMMS: {pending: true}`; the existing-map audit's `GAP` finding) so they point at a real node instead of a placeholder.
3. **CENTRAL** — explicitly FLAG, not resolve, the A2 corespine-binding dependency (see below) — this is the plan's one deliberately incomplete facet, by design.
4. **PERIPHERAL (parked, not chased)** — Branch B2/B3 (external-dev/external-user permission Rings) and Branch A3 (AI Council) remain PLACEHOLDER per the existing design (HANDOFF-opus-comms.md itself defers them "until a real second use-case"); this plan does not build them.
5. **PERIPHERAL (parked)** — CS-ACCOUNTABILITY-001's Ring structure (IBD-0002) that Branch B references is a separate DRAFT corespine; this plan references it, does not complete it.

---

## Executive Summary
`dna/queue/HANDOFF-opus-comms.md` already captures a CONSENSUS'D 8-fork communication design (Branch A AI↔AI, Branch B AI↔Human by permission Ring, Branch C cross-platform) — the design work is done, not in dispute. What is missing is the governance formalization: CS-COMMS-001 has NO entry in `corespine-registry.yaml`, no manifest file, and is only referenced as a forward-pointer from three other artifacts (ARCH-00350's `Reconcile-with` note, the `naming-registry.yaml` CS-names allowlist's `pending: true` COMMS reservation, and the 2026-07-19 existing-map audit's explicit `GAP: CS-COMMS-001 governed node — no manifest, no registry entry`). This plan turns the existing design into a real, governed node by running it through the ratified Universal Corespine Creation Wizard (ARCH-00394) at implementation time — it authorizes that wizard run, it does not perform it here. Critically, the plan does NOT decide how CS-COMMS-001's `Core_spine`/corespine-binding field should be filled, because that question directly touches the still-unresolved A2 reframe (whether a corespine is a container everything "belongs to" versus reusable inheritance infrastructure elements "use") — CLAUDE.md's own axiom text discloses this is "PARKED (IBD-0017 P7)," "full A2/ARCH-00400 rework parked." Pre-deciding it here would fork that unresolved decision (CORE-SEED 3, below).

---

## Existing-First (§3.2b, MANDATORY — files read, cited)
1. `dna/queue/HANDOFF-opus-comms.md` (full text, read this session) — the 8-fork design, its Existing-First section (already lists ARCH-00350, CS-CONTROLPLANE-001, CS-CORECOUNCIL-001, CS-ACCOUNTABILITY-001 as adjacent/not-to-duplicate), the priority forks (A2, A3), and the explicit TASK instruction "Turn this design into a governed corespine THROUGH the plan-gate ... needs a PLAN via /cisem-plan."
2. `dna/audits/cs-comms-existing-map-2026-07-19.md` (full text, read this session) — the worked existing-search simulation; verdict "most of CS-COMMS is LIVE (reuse) or ENHANCE ... the NEW is narrow and specific (the permission-Rings + cross-platform bus + the governed node itself)"; explicit `GAP` line: "CS-COMMS-001 governed node — no manifest, no registry entry (confirmed: not in corespine-registry)."
3. `dna/corespines/corespine-registry.yaml` (full text, read this session) — confirmed NO `CS-COMMS-001` top-level entry exists (gap independently re-confirmed, not assumed from the audit alone).
4. `dna/naming-registry.yaml` (full text, read this session) — confirmed the `CS:` allowlist block already carries `COMMS: { registered: true, source: "reserved — forward-ref, no manifest/registry entry yet ...", pending: true }` — the ONE naming gate already anticipates this exact plan.
5. `dna/protocols/CISEM-ARCH-00350-sonnet-opus-handoff-protocol.md` (full text, read this session) — confirmed its `Reconcile-with` note: the comms-integrity RULES (Zero-Context, "I am…you are…" frame, permission-scoping) are "owned by CS-COMMS-001 when built; this node must REFERENCE them, not redefine them (I10). Align on CS-COMMS-001 ratification." This plan is what that note has been waiting on.
6. `dna/archive/archive-ledger.yaml` — grepped for "COMMS", no RULED-OUT entry found.
7. `dna/ssot-registry.yaml` — grepped for "comms"/"COMMS", no existing SSOT home found; confirms genuine gap, not a missed existing home.
8. CLAUDE.md §1.7 OPERATING MODEL (re-read this session) — confirmed cross-tier comms is currently "git + Core Seeds + ARCH-00350 (referenced) — never human relay"; CS-COMMS-001, when formalized, must sit consistently WITH §1.7, not compete with it (per the existing-map audit's own finding #2: "§1.7 already IS the comms spec ... we'd be consolidating a home, not inventing comms").
9. `dna/protocols/CISEM-ARCH-00394-corespine-creation-wizard.md` (full text, read for Plan A above, same session) — this is the wizard this plan authorizes to be RUN (not re-described) at implementation time.

**Finding (stated plainly, CORE-SEED 2):** the 8-fork design is NOT re-designed here — it is REFERENCED and formalized. Nothing new is invented. Genuine gap = the governance artifacts (registry entry + manifest), confirmed independently across 3 sources (HANDOFF, audit, naming-registry `pending:` flag) — not a single-source claim.

---

## A2 Dependency — explicitly FLAGGED, not resolved (CORE-SEED, per dispatch)
CLAUDE.md §2.4 Axiom A2 states corespines are containers ("Everything is part of a corespine"). The SAME file's A9 section discloses a live reframe-in-progress: *"Corespine-as-infrastructure (A2 reframe, same decree): a corespine is the reusable INHERITANCE INFRASTRUCTURE elements USE, not a container everything belongs to — full A2/ARCH-00400 rework parked (IBD-0017)."* This is UNRATIFIED and STILL IN STRESS-TEST (per the dispatch instruction; consistent with `dna/corespines/corespine-registry.yaml`'s own CANDIDATES block showing `Inheritance: { status: PARKED-AS-KERNEL-MECHANIC ... }` and `Kernel: { status: CANDIDATE-KERNEL ... N4 (CREATION-apex vs kernel) unresolved }`).

CS-COMMS-001's own manifest (per ARCH-00394 §IV's template) requires a `Core_spine: {parent}` field. **This plan does NOT fill that field now and does NOT decide which A2 model it should follow.** Instead:
- **IF CS-COMMS-001 is formalized under the current (container) A2:** its `Core_spine` parent would likely be CS-CREATION-001 (the creation apex, per the same convention ARCH-00394's own dogfood run used for itself — "no parent apex" precedent) or CS-AI-PROFILING-001 (since ARCH-00350, its closest sibling, is parented there).
- **IF CS-COMMS-001 is formalized under the reframed (infrastructure-used-by) A2:** it may not need a single `Core_spine` parent field at all — it might instead be infrastructure multiple domains USE (Branch A is used by every AI-tier interaction; Branch B is used by every human-facing surface), which is closer to a cross-cutting OVERLAY than a domain trunk (the same pattern already named for the Security/Privacy/Observability/Accessibility CANDIDATES in `corespine-registry.yaml`'s CANDIDATES block).
- **This plan's binding instruction (CORE-SEED, verbatim from dispatch):** "CS-COMMS-001's corespine-binding FLAGS the A2 reframe as an open dependency ... inherit whatever A2 resolves to, do NOT pre-decide it." At implementation time, the `Core_spine` field is filled ONLY after A2 resolves (or, if the Governor/Opus judge CS-COMMS-001 urgent enough to formalize before A2 resolves, the field is explicitly marked `Core_spine: AWAITING-A2-RESOLUTION` rather than guessed — never a silent default).

---

## The Rule (executable procedure — for IMPLEMENTATION, gated behind this plan's ratification)
1. **Do not touch A2.** No step in this plan resolves, argues for, or defaults the A2 uses-vs-contains question.
2. **Run ARCH-00394 STEP 0–6** for CS-COMMS-001, using `HANDOFF-opus-comms.md`'s existing content as the YAML input source (translate the 8-fork tree + goal + governed_artifacts into ARCH-00394 §II's YAML schema — a transcription of what already exists, not new invention):
   - STEP 0 (goal-setting): the goal is ALREADY stated in HANDOFF-opus-comms.md's Existing-First section header — "The Communication corespine governs how CISEM communicates ... through git as the bus, so no message loses context, drifts, or exceeds its permission" — confirm it still serves the north star (FOUND-00001 apex) and re-save it verbatim into the manifest, not redrafted.
   - STEP 1 (Existing-First): already satisfied above; re-run the wizard's own grep commands at implementation time as a final confirmation (`grep "name:" dna/corespines/corespine-registry.yaml`, `grep -r "CS-COMMS" dna/`) per ARCH-00394 §III STEP 1.
   - STEP 2 (naming): read `dna/naming-registry.yaml` ARCH `next_seq` at implementation time (do not reuse this plan's own allocated 415/416 — those are consumed).
   - STEP 3 (manifest): create `dna/corespines/CS-COMMS-001/CISEM-ARCH-{SEQ}-comms-corespine-manifest.md`, populating §III Governed Artifacts from the 8-fork tree (each fork = one row, carrying its LIVE/PARTIAL/PLACEHOLDER status from HANDOFF-opus-comms.md verbatim), §IV Invariants from the design's stated baselines (Zero-Context Rule, permission-scoped Ring isolation + TEASER/HIDDEN, Governor-is-the-bus). **§II's `Core_spine` field: per the A2 Dependency section above — filled only per that section's rule, never guessed.**
   - STEP 4 (register): append the `corespine-registry.yaml` entry with `status: DECLARED` (not RATIFIED — matches ARCH-00394's own I24 discipline: a corespine earns RATIFIED only on first clean independently-verified run, never at creation).
   - STEP 5 (naming-registry update): flip the `COMMS: { pending: true }` allowlist entry to `pending: false` / `registered: true, source: corespine-registry.yaml` — closing the exact forward-reference the naming-registry has carried since 2026-07-19.
   - STEP 6 (`plan-audit.sh`): resolve every finding before declaring the implementation done.
3. **Reconcile the 3 forward-references** (not new work — closing existing open notes):
   - ARCH-00350's `Reconcile-with` note: update its comms RULES (Zero-Context, "I am…you are…" frame, permission-scoping) to REFERENCE the new CS-COMMS-001 manifest instead of stating them locally (I10 — one home). Do NOT delete ARCH-00350's content wholesale; point, don't duplicate.
   - `dna/audits/cs-comms-existing-map-2026-07-19.md`'s `GAP` line: append a closure note pointing to the new manifest (the audit file itself stays PARKED/worked-example per its own header — not promoted to a governed node).
   - `dna/queue/HANDOFF-opus-comms.md`'s own `Status: PARKED` header: update to note it has been formalized, pointing to the new manifest, per its own §TASK item 2 instruction.

---

## Tags + Statuses on every node this plan touches (VOC-00001/VOC-00002; ARCH-00401 Enh.2)
- **This plan (CISEM-ARCH-00416):** tags `[planning-domain, cs-comms-001, corespine-formalization, communication, a2-dependency]`; Status `DRAFT`; Planning Status `AWAITING-BUILDER-REVIEW`.
- **No other node's tag/status is modified by this plan.** `HANDOFF-opus-comms.md`, the existing-map audit, ARCH-00350, and `corespine-registry.yaml` are all read-only references here — any edit to them is IMPLEMENTATION, gated behind ratification (§4 of ARCH-00190).

## Per-File Alignment Table (ARCH-00401 Enh.3)
| File | Number (via ONE gate) | Schema placement | Tag | Status |
|---|---|---|---|---|
| `dna/planning/CISEM-ARCH-00416-cs-comms-001-formalization-plan.md` | CISEM-ARCH-00416 (naming-registry.yaml, allocated this session) | T-SYS, planning-governance layer | `[planning-domain, cs-comms-001, corespine-formalization]` | `DRAFT` |
| *(at implementation only)* `dna/corespines/CS-COMMS-001/CISEM-ARCH-{next-seq}-comms-corespine-manifest.md` | TBD — read at implementation time, not pre-assigned here | T-SYS or T-AI-BEHAVIOR (depends on A2 resolution — see Dependency) | `[communication, corespine, ai-behavior]` (indicative; finalized at implementation) | `DECLARED` (never RATIFIED at creation, per I24) |

---

## Definition-of-Done reference (ARCH-00401 Enh.5)
Per `dna/checks/definition-of-done.md` (cited, not re-derived): this PLAN's own "done" = drafted, tagged+statused, committed with a specific-file `git add`, passes `[ZF]`/`[I19]`/`[TAG-STATUS]`/`[CS-NAMES]` at commit. The CS-COMMS-001 NODE's "done" is separate, future, implementation-gated work — not claimed here.

## Propagation Declaration (ARCH-00401 Enh.6)
If ratified and implemented: `corespine-registry.yaml` gains a new top-level entry (by reference, generated view unaffected — the registry is hand-maintained, not auto-generated); `naming-registry.yaml`'s `COMMS` allowlist entry flips `pending: false`; ARCH-00350 gains a pointer-only reference (its content shrinks toward pointing, never duplicates CS-COMMS-001's rules — I10). No other generated/derived view is affected.

---

## What DOES change (by ratifying + later implementing this plan)
- A new `CS-COMMS-001` entry appears in `corespine-registry.yaml` (status `DECLARED`).
- A new manifest file is created under `dna/corespines/CS-COMMS-001/`.
- `naming-registry.yaml`'s `COMMS` allowlist entry flips from `pending: true` to `pending: false`.
- ARCH-00350's `Reconcile-with` note becomes a real pointer instead of a forward-reference to a non-existent node.
- The 2026-07-19 existing-map audit and the HANDOFF file both gain a closure pointer.

## What DOES NOT change
- The 8-fork design content itself (Branch A/B/C, their sub-forks, their LIVE/PARTIAL/PLACEHOLDER statuses) — REFERENCED, not redesigned.
- The A2 axiom, the A2 reframe, or the IBD-0017 park status — untouched; this plan explicitly defers to whatever A2 resolves to (see A2 Dependency).
- CLAUDE.md §1.7 OPERATING MODEL — CS-COMMS-001 formalizes WITHIN it, per the existing-map audit's own finding; §1.7 is not amended.
- CS-ACCOUNTABILITY-001, CS-CONTROLPLANE-001, CS-CORECOUNCIL-001 — referenced as adjacent, not built or modified.
- No code, hook, or check is built or modified by drafting this plan.

---

## Dependencies
- **Blocks on:** the A2 reframe resolution (for the `Core_spine` field specifically — see A2 Dependency section; the REST of implementation does not block on A2).
- **Unblocks for:** ARCH-00350's pending `Reconcile-with` closure; the naming-registry's `COMMS: pending: true` closure; a real home for Branch B's permission-Ring work (currently blocked on CS-ACCOUNTABILITY-001, itself DRAFT — noted, not solved here).
- **Related, not blocking:** ARCH-00394 (the wizard this plan authorizes running); ARCH-00350 (the sibling protocol this plan's implementation will make into a pure reference).

---

## Ratification Path (ARCH-00190 §3)
- **Stage 0:** not run in this dispatch (single-pass Sonnet draft per Opus's direct dispatch).
- **Stage 1 (Opus soundness):** PENDING — `cisem-opus-pe` reviews cold (author≠verifier, P5). Opus should specifically verify: (a) the A2 dependency is genuinely deferred, not smuggled-resolved anywhere in this plan; (b) the 8-fork content is referenced, not reproduced/altered.
- **Stage 2 (Governor authority):** PENDING.
- **Current Planning Status:** `AWAITING-BUILDER-REVIEW`.

---

## Self-Compliance (ARCH-00230 checklist)
✓ Header (Node ID, Type, Status, Planning Status, depth_level, tags, goal, corespine [deferred, explicitly], pocket)
✓ Why-standalone (closes a 2026-07-19-documented GAP; readable cold — HANDOFF file + audit file both cited in full)
✓ Rule-as-procedure (§ The Rule, STEP 0–6 wizard run + 3 reconciliations)
✓ Does-NOT-cover (see "What DOES NOT change")
✓ Role/Who-serving (Sonnet drafts + implements the mechanical parts, Opus judges + fills the A2-dependent field, Governor ratifies)
✓ Self-compliance (this section)
✓ INHERITANCE — governing corespine intentionally DEFERRED (A2-dependent); inherits CLAUDE.md Principles 1–21, the persona SSOT (by reference), and this ARCH-00230 checklist (by reference)

## Path Rejection Declaration (CLAUDE.md §2.8)
- ❌ **Rejected: re-designing the 8 forks.** They are already consensus'd (HANDOFF-opus-comms.md); re-opening the design would contradict the dispatch instruction and waste already-settled work.
- ❌ **Rejected: defaulting `Core_spine` to CS-CREATION-001 (or any parent) now.** Doing so would silently pre-decide the A2 uses-vs-contains question the Governor has explicitly left in stress-test — a false-premise resolution (I22/I23) this plan is instructed not to make.
- ❌ **Rejected: building Branch B2/B3 or Branch A3 now.** The source design itself defers them "until a real second use-case" (Core-vs-Instance, §3.2c) — building them here would violate that already-made call.
- ❌ **Rejected: treating "the design already exists" as license to skip the plan-gate.** A4/I25 require this plan regardless of how settled the design content is — formalizing a node is still a governed creation.

## CAL reference (CISEM-ARCH-00390)
Enforcement at commit time: `.git/hooks/pre-commit` runs `plan-audit.sh` → `[ZF]`, `[I19]` (Existing-First — satisfied above, 9 sources cited), `[TAG-STATUS]`/`[CREATION-GATE]`, `[NAMING-FORMAT]`/`[TYPE-MATCH]` (CISEM-ARCH-00416, Type ARCH), and `[CS-NAMES]` (relevant at IMPLEMENTATION time, when the `COMMS` allowlist flag changes — not triggered by drafting this plan alone, since no `CS-COMMS-001` reference is newly introduced by this plan; it was already reserved).

---

## Change log
| Date | Change | Author |
|---|---|---|
| 2026-07-22 | DRAFT — plan authored per Opus dispatch (Governor "go" 2026-07-22); formalizes the existing consensus'd 8-fork design from HANDOFF-opus-comms.md; A2 corespine-binding dependency explicitly flagged and deferred, not pre-decided. Planning Status: AWAITING-BUILDER-REVIEW. | Sonnet (STRUCTURING tier, cisem-sonnet) |
