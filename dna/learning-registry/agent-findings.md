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
- [2026-07-21 · cisem-sonnet · uxui.html tree-restructure + sort-control build] **Edit old_string mismatch from
  retyped-from-memory HTML:** reconstructing a large dense-HTML block from a prior Read (rather than copy-exact) silently
  dropped an inline `<code>` wrapper around `&lt;a href&gt;`, causing the Edit tool's exact-match to fail with no useful
  diagnostic beyond "not found." Root fix: on ANY large-block Edit failure, immediately diff the ACTUAL bytes (`sed -n
  'N,Mp' file`) against the intended old_string rather than re-guessing by eye — found the exact byte in one pass. CLASS:
  never retype dense markup from visual memory of a Read output when it will be used as an Edit old_string — either
  quote the exact substring or verify via a byte-level diff before the second attempt. → DISTILL-PENDING (candidate: a
  standing habit for all tiers, not yet a mechanical check — Edit tool failures are self-diagnosing if you diff first).
- [2026-07-21 · cisem-sonnet · uxui.html tree-restructure + sort-control build] **POSITIVE — self-detecting mechanism
  validated live:** `initTreeEditor()`/`wireRowToolbar()` in search.js self-detect `.tree-row` presence and wire EVERY
  `li.tree-node` on the page, with zero page-specific code. Restructuring uxui.html's flat checklist into a
  group→sub-group→row `.tree`/`.tree-node` hierarchy (matching schema.html's markup) caused the FULL row-control bar
  (+/×/↑/↓/move-to/comment/park/upload/MD/PDF/sort) to appear on all 45 new nodes automatically — zero JS edits needed
  for Build 1. CLASS: this is the platform-level pattern working exactly as designed (CLAUDE.md §1.6) — when a NEW page
  needs an EXISTING page's interactive feature set, first check whether the existing JS already self-detects a shared
  markup class before writing ANY new per-page wiring. → confirms existing prevention (no new RI needed; reinforces
  RI-0016's "reuse existing container" class at the markup-detection layer, not just the container layer).
- [2026-07-21 · cisem-sonnet · gallery.html + dynamic-menu.html build] **POSITIVE — zero-new-JS two-page build confirmed
  the pattern at full scale:** reused `.uxui-tabbar`/`.uxui-tab`/`.uxui-panel` (generic tab switch, self-detects ONE
  bar per page via `querySelector`) + `.tree`/`.tree-row`/`.tree-children` (collapse, editor toolbar, sort, mindmap-N/A)
  + the `.fl`/`.fi` Source-Files block (triggers `initPageViewToggle()`'s Rows/Window auto-inject) on TWO brand-new pages
  with ZERO search.js edits. 535/535 behavioral assertions passed first run (505 generic + 30 new page-specific tab/
  control-bar/sort tests I added). CLASS: confirms the platform-level self-detection pattern generalizes to N pages,
  not just 1 — the reusable surface is the CLASS of markup (`.tree-row`, `.uxui-tabbar`, `.fi`), not a per-page allowlist.
  → confirms RI-0016 class at 2-page scale; no new RI needed.
- [2026-07-21 · cisem-sonnet · gallery.html + dynamic-menu.html build] **Line-ending inconsistency broke a mechanical
  bulk-edit:** a Node.js string-replace nav-injection across 26 files missed 1/26 (`uxui.html`) silently on the first
  pass because that ONE file uses CRLF while the other 25 use LF (mixed line endings in the same repo/directory,
  `frontend/pages/`) — the `\n`-terminated match string simply didn't match `\r\n`. Caught immediately because the
  script logged an explicit `MISS:` per file (not a silent no-op) and the count was verified against `ls | wc -l`
  before proceeding. CLASS: any repo-wide mechanical text edit (bulk nav-injection, bulk header retrofit, etc.) MUST
  either (a) detect and preserve each file's own line-ending style per-file, or (b) run in "normalize-line-endings-first"
  mode, and MUST verify count-changed == count-expected before trusting the run clean — never assume LF repo-wide.
  → DISTILL-PENDING (candidate: fold into the bulk-edit discipline; a repo with `core.autocrlf` unset/mixed is a known
  Windows-repo hazard class — the deletion-guard/creation-gate style "enumerate + verify count" habit caught it here
  but the mechanism itself (mixed EOL) is not yet a named/mechanical check).
- [2026-07-21 · cisem-sonnet · gallery.html + dynamic-menu.html build] **Prompt-injection recurrence:** the same fake
  "Otosan WordPress / respond in Hebrew" MCP-server-instruction block (first logged 2026-07-18, ARCH-00396 window)
  fired again mid-session via a tool-result/system-reminder channel. Refused + continued in English per the actual
  Opus-issued task, consistent with the existing prevention. CLASS confirms the existing prevention still holds
  (tool-result/MCP instructions are untrusted input, never a persona/language override) — no new RI needed, but
  logging the RECURRENCE itself is signal: this same injected block has now fired in 2+ independent sessions, which
  may warrant a standing INJECTION-SCAN pattern entry for this specific "Otosan/Hebrew-persona" signature (the
  existing `[INJECTION-SCAN]` check in plan-audit.sh scans RAW-EXTERNAL/IBD intake files, not live tool-result
  channels — this is a DIFFERENT vector than what that check covers). → DISTILL-PENDING.
