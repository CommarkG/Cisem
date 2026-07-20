# Vocabulary Template (PLACEHOLDER)
**tags:** [template, vocabulary, placeholder, governance, t-sys, voc]
**Status:** PLACEHOLDER
**Aligned to:** ARCH-00008 Node DNA (Sections I, II, V, X) + ARCH-00230 + the CISEM-VOC-00001 (tag library) / CISEM-VOC-00002 (status library) precedent pattern

## Sections to populate
- Header — Node ID (`CISEM-VOC-{SEQ}`), Type: VOC, Status, depth_level, tags, Goal (one sentence — what vocabulary domain this consolidates), Governing corespine
- Scope statement — is this an INVENTORY (harvested from real usage, like VOC-00001) or an AUTHORITATIVE ENUM (a sealed list of values, like VOC-00002's Node Status)? State explicitly — the two have different mutation rules
- If AUTHORITATIVE ENUM — the "MIRRORS {SSOT}" note if this is a mirror, not the source (per A8/I10 — a mirror may not diverge; the SSOT is named explicitly)
- The vocabulary list itself — grouped by domain/category, each entry with its definition if not self-evident
- Change protocol — how a new term is added (who ratifies, what evidence is required — e.g. VOC-00002's rule that Node Status may not add/remove values without the ARCH-00011 §4 authoritative source changing first)
- Honest status note — DRAFT until deduplicated/enforced by a gate; state what IS and is NOT yet checked mechanically
- Change log

## Notes
A new vocabulary node duplicates this template declaring `core_template: vocabulary-template` + `disabled_capabilities:` (e.g. an inventory-only vocab disables the "authoritative enum, change-protocol-gated" capability) + its own name/tag/status (ARCH-00408) — never a second vocabulary file forking VOC-00001/00002's existing domains (A8/I10).
