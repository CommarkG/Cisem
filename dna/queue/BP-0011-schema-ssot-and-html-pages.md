# BUILD-PROMPT BP-0011 — Schema as SSOT + skills/agents HTML pages (auto-updated)
**FOR:** the tier-cycle (Haiku-gather → Sonnet-build → Opus-consolidate) | **status:** QUEUED — post-compact | **priority:** MEDIUM-HIGH | **essential:** y
**Goal (Governor 2026-07-20, PARKED):** make the SCHEMA the ONE SOURCE OF TRUTH for placement + naming + numbering — every created element is aligned and HAS a schema place (A3) — and update/complete the HTML pages for skills + agents so they reflect the schema, kept current AUTOMATICALLY.

## SCOPE
1. **Schema-as-SSOT + alignment gate.** Make `dna/schema/CISEM-SCHEMA-00001-placement-engine.md` the authoritative placement/naming/numbering source; every created node aligns to it (A3, "nothing without a schema place") and to the ONE naming gate (`dna/naming-registry.yaml`, ARCH-00011). Wire the ALIGNMENT GATE (ARCH-00011 §2 says "wired in BP-0005": gaps preserved · number consistent with schema position · no collisions) — mechanical check in plan-audit.
2. **HTML pages for skills + agents, aligned to the schema.** Like the persona artifact (2b872d03), publish/update pages that list the skills (cisem-create/plan/meta) + agents (cisem-haiku/sonnet/opus-pe) with their schema position, status, and relationships — aligned to SCHEMA-00001.
3. **Populate + complete the SCHEMA PAGE.** A full HTML page rendering the schema (T-SYS tree · positions · corespines/overlays/kernel · naming ranges).
4. **AUTO-UPDATE (the real ask).** The pages must regenerate MECHANICALLY from the registries (naming-registry / corespine-registry / schema), not by hand — a generator + a hook/scheduler, so they never drift. (Ties to the front-end index BP-0004 + CS-FRONTEND-001.)

## EXISTING-FIRST (§3.2b — ENHANCE, do not fork)
SCHEMA-00001 (placement engine) · naming-registry + naming-manifest (derived view) · ARCH-00011 alignment gate (BP-0005, unbuilt) · CS-FRONTEND-001 (frontend corespine) · BP-0004 (basic front-end index) · the persona artifact pattern · A3.

## ROUTE
Needs a plan for the auto-update mechanism (governed creation, A4) — the schema-SSOT + alignment-gate parts may be SWIFT-safe checks. Run via the tier-cycle; independent-verify the alignment gate (planted test). CORE-SEED: the pages are GENERATED from registries (SSOT), never hand-authored (else they drift — the exact A8/I10 failure). NOT-YET-WIRED until built.
