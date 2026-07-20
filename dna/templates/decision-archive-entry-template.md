# Decision Archive Entry Template (PLACEHOLDER)
**tags:** [template, archive, decision, placeholder, governance, ruled-out]
**Status:** PLACEHOLDER
**Aligned to:** ARCH-00008 Node DNA (partial — this is a ledger-entry, not a full node) + `dna/archive/archive-ledger.yaml` (the governing home, BP-0008-extended) + the `[ARCHIVE]` plan-audit check

## Sections to populate
- `id:` — `DEC-NNNN` (sequential, append-only ledger; never renumbered)
- `title:` — short human-readable name of the decision
- `what:` — the concrete proposal/option that was considered
- `disposition:` — one of: RULED-OUT-PERMANENT | RULED-OUT-TEMPORARY | SUPERSEDED | VAULTED-CONFLICT | REOPENED (ledger-scoped vocabulary; not yet part of the sealed ARCH-00011 §4 enum — disclosed)
- `why:` — the full reasoning, IMMUTABLE once written (a later status change is recorded via `disposition_history`, never by rewriting `why` — append-only, BP-0008 CORE-SEED 1)
- `tags:` — real tags describing the decision's topic/domain
- `date:` — when ruled
- `ruled_by:` — who ruled (Governor / Opus PE / etc.)
- `reopen_conditions:` — REQUIRED if disposition is RULED-OUT-TEMPORARY or VAULTED-CONFLICT
- `replaced_by:` — REQUIRED if disposition is SUPERSEDED (points to the artifact/decision that replaced it)
- `disposition_history:` — append-only log of any later disposition changes (never overwrites the original)

## Notes
A new archive entry duplicates this template's field set (not full Node DNA — archive entries are ledger rows, not standalone nodes) and is appended to `dna/archive/archive-ledger.yaml`'s `entries:` list; per ARCH-00408 the field SET is the reusable "core," each entry is a governed instance with its own id/tags/disposition, never a silent copy of another entry's reasoning.
