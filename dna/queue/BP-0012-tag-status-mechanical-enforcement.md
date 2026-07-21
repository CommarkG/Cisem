# BUILD-PROMPT BP-0012 — Mechanical tag+status enforcement (undebatable) + granular + naming/numbering + weekly agent-enrichment
**FOR:** the tier-cycle (Haiku-gather → Sonnet-build → Opus-consolidate) | **status:** QUEUED — post-compact | **priority:** HIGH | **essential:** y
**tags:** [build-prompt, tag-status-enforcement, mechanical-gate, naming]
**Goal (Governor 2026-07-20):** make TAGS + STATUSES — the main governance surface — MECHANICALLY + DYNAMICALLY enforced everywhere, as an UNDEBATABLE stage of creation/identification, so the bundling engines + PE engine run smoothly and nothing is created untagged/unstatused.

## SCOPE
1. **Undebatable tag+status gate.** A mechanical check (plan-audit + a pre-commit BLOCK, like the plan-fields/persona-inheritance blocks) that FLAGS any created node/file lacking a TAG and a STATUS. Identification stage: scan the repo for nodes/files missing tag/status → report + (for new commits) block. DYNAMIC not local: it fires on EVERY creation, everywhere (propagation, not a one-off).
2. **Mandatory in every plan / checklist / creation protocol.** Add an explicit tag+status-mandatory clause to ARCH-00190 (plans) — it is already in ARCH-00230 (checklist item 1) + ARCH-00011 §4 (retrieval index); make it explicit + enforced across all three.
3. **Granular part-of-file tagging** (promotes IBD-0013 #5). Tag/status at the SECTION/PART level for high-value governed blocks (status/decision/seed/core), not just the file header — so bundling can pull "load L2 of X" precisely. Heavy exhaustive sweep = a batch job (cheap tier / overnight).
4. **Naming + numbering deep-dive (consistency to govern).** Deep-dive that every element's naming + numbering is consistent + has a schema place (A3); ENHANCE the ARCH-00011 alignment gate (BP-0005/BP-0011). Coherence is the aim.
5. **Weekly agent-enrichment loop.** Accumulate — each turn — raw contents + ideas that should be added to agents; a WEEKLY batch enriches each agent's living profile/checklist (AI-profiling §5, monotonic + on-disk). Cross-enrich: what one model missed becomes a standing item for all.

## EXISTING-FIRST (§3.2b — ENHANCE, do not fork)
ARCH-00230 (tags/status already mandatory in the checklist) · ARCH-00011 §4 (tags/status = the retrieval index; §3.5 intake schema) · IBD-0013 #5 (granular tagging + overnight batch, parked) · BP-0011 (schema-SSOT + alignment gate) · pre-commit-blocks.sh (the BLOCK pattern to reuse) · AI-profiling §5 (living per-agent profile) · the propagation-network (BP-0009 — the DYNAMIC-not-local mechanism).

## ROUTE
Governed creation → needs a plan (A4). The gate + naming deep-dive parts may be SWIFT-safe WARN checks first, BLOCK later (ARCH-00270). Independent-verify the gate (planted test). CORE-SEED: DYNAMIC — the enforcement must propagate to all creation paths (not a local patch), via the propagation-network. NOT-YET-WIRED until built.
