# Agent-Findings Capture — the verified on-ramp for sub-agent learnings (append-only)
**tags:** [learning-registry, agent-findings, harvest-on-ramp, ripl-feed, accumulative]
**Status:** ACTIVE (Governor decree 2026-07-21 — "have all agents harvest their findings and save")
**Why this exists:** sub-agent findings (defects found, class-fixes, preventions discovered mid-task) previously lived
only in an agent's one-shot report + its transcript — NO mechanical on-ramp into the learning pipeline, so they could
be lost. This file IS that on-ramp: every dispatched agent APPENDS its findings here before returning (now mandated in
the persona DEVELOPMENT DISCIPLINE + the agent files). Opus/RIPL then DISTILLS entries into root-insights.yaml RI-NNNN
(the class-level prevention) and ARCH-00406 propagates them. **Append-only** (accumulative); **distilled** (optimized) —
that is the verified+optimized+accumulative pipeline the Governor asked for. Raw here → distilled RI → wired guard.

Entry format (append, newest at bottom):
`- [DATE · agent · task] FINDING (defect/class-fix/prevention) → distilled to RI-NNNN | or DISTILL-PENDING`

## Entries

- [2026-07-21 · cisem-sonnet · UX/UI build] **DOM-position fragility:** `initPageViewToggle()` assumed `.sh` is a
  DIRECT child of `<main>` (`insertBefore(bar, firstSh)`) → threw `NotFoundError` on the tabbed uxui.html where `.sh`
  nests inside `.uxui-panel`. Root fix: anchor via `pgDesc.parentNode` (a known-stable ancestor present on every page),
  not a positional assumption. CLASS: code that assumes a fixed DOM position breaks on nested/tabbed layouts — anchor on
  a stable ancestor/element, never a positional index. → distilled to RI-0016.
- [2026-07-21 · cisem-sonnet · UX/UI build] **Theme-shared literal colors fail AA:** 3 badge classes reused literal hex
  (`#d29922`/`#3fb950`/`#f85149`) across themes → passed on dark, FAILED WCAG-AA on light (2.28/2.33/2.90:1). Root fix:
  promote to per-theme tokens (`--warn/--success/--danger`) measured against AA. CLASS: a color reused across themes must
  be a per-theme TOKEN measured against the objective standard (AA), never a shared hex or a taste-exemption. → RI-0016 (+ ties IBD-0028 measure-don't-proxy).
- [2026-07-21 · cisem-sonnet · mindmap build] **Reuse existing control containers:** `initMindmap()` built its own
  sibling `.view-bar` → stacked toolbars. Fix: reuse the SAME `.view-bar`. CLASS: inject into the existing shared
  container, don't spawn a parallel one (frontend A8). → captured (minor); folds into FE-I12 one-line gate.
- [2026-07-21 · cisem-sonnet · 408/409 fold] **Seed-folds can cross the size gate:** adding fold-content pushed
  ARCH-00408 past 200 lines; [I6-SIZE] caught it at commit. CLASS: a content-adding fold must re-check the size gate as
  part of the fold. → captured; I6-SIZE already mechanical (RI-0013 P3).
- [2026-07-21 · cisem-haiku · last-day audit] minitree CLEAN; one real finding (creation-process design-doc tripped
  I19/P5 in dna/planning) → resolved by relocation. CLASS: a design working-doc in dna/planning/ is treated as a plan.
  → captured; ties RI-0012 (surfaced the [RATIFY-GATE] family).
