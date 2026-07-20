# Check / Gate Template (PLACEHOLDER)
**tags:** [template, check, gate, placeholder, governance, enforcement, cal]
**Status:** PLACEHOLDER
**Aligned to:** ARCH-00008 Node DNA + ARCH-00230 + ARCH-00320 (Prevention & Plan-Audit, the invariant/RQC home) + ARCH-00390 (CISEM Autonomic Layer, the mechanical-enforcement home) + `dna/checks/invariant-registry.yaml` (per-invariant envelope pattern)

## Sections to populate
- Header comment block — what this check enforces (one sentence), which invariant(s)/concept(s) it implements, governed-by corespine
- Legal kind — RULE / STANDARD / PRINCIPLE (per the invariant-registry / concept-envelope three-state model, ARCH-00392)
- `core[]` — the cases this check MUST catch (non-empty; an empty core is a red flag per the penumbra-sweep discipline)
- `penumbra[]` — the edge/out-of-scope cases this check must route to UNKNOWN, not silently PASS or FAIL (non-empty; empty penumbra = false certainty)
- `test_cadence:` — how often a planted-test sweep re-verifies this check (per `penumbra-sweep.sh` pattern)
- Wiring state (VOC-00002) — DECLARED → CONNECTED → ACCESSIBLE → LIVE; state this check's CURRENT wiring state honestly (EXISTS ≠ ACTIVE, I23)
- Introduction posture — WARN-only at first commit (never BLOCK on introduction, per the `[SEED]`/`[TEMPLATE]`/`[RAW-PAIR]` precedent), with a named graduation path to BLOCK (ARCH-00270)
- Planted-violation test — a concrete case proving the check actually fires (not just exists), plus a concrete case proving it does NOT false-positive on a legitimate exempt case
- Where it's wired — which script (`plan-audit.sh`, `pre-commit-blocks.sh`, a new script) and which hook (`.git/hooks/pre-commit`, `.claude/hooks/session-start.sh`, `.claude/hooks/pre-compact.sh`) runs it
- Logging — how a run is recorded to `dna/quality-ledger.yaml` (D5, the RQC learning-memory)
- Change log

## Notes
A new check is a duplicate of this template declaring `core_template: check-gate-template` + `disabled_capabilities:` (e.g. a check with no penumbra cases yet, explicitly disclosed as incomplete rather than fabricated) + its own name/tag/status (ARCH-00408) — never a bare shell snippet added without the envelope fields.
