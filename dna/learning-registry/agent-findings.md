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

- [2026-07-21 · cisem-sonnet · frontend-page-registry.yaml build (Opus dispatch — companion tag/status catalog)]
  **FE-I11's ALL_PAGES enumeration is NOT truly universal — it is scoped to one subdirectory, not the whole class.**
  `frontend/tests/functional-check.mjs` builds its `ALL_PAGES` list via `fs.readdirSync(frontend/pages)`, so it
  behaviorally-verifies all 27 files in `frontend/pages/*.html` (confirmed live run: 600 pass, 0 fail) but NEVER
  loads or asserts `frontend/index.html` (zero reference to "index.html" anywhere in the file) — despite index.html
  carrying its own interactive Grid/List view toggle, the exact element-class FE-I11 exists to gate. CLASS:
  Principle 18-B "universal-by-default" enumeration must cover frontend/**/*.html (glob from repo root), not one
  subdirectory picked because that's where the harness started — the same failure mode Principle 18-B was written
  to prevent (22 files born ungoverned). PREVENTION: widen the existing `ALL_PAGES` enumeration to also load
  `../index.html` (or switch to a recursive glob) rather than leave the root page permanently uncovered. →
  DISTILL-PENDING (candidate: fold into FE-I11 + functional-check.mjs as a named coverage-completeness fix).

- [2026-07-21 · cisem-sonnet · frontend-page-registry.yaml build] **Only 3 of 28 frontend pages carry an inline
  `<!-- tags: -->` / `<!-- Status: -->` HTML-comment header** (dynamic-menu.html, gallery.html, uxui.html — all
  "PREVIEW / DRAFT"); the other 25, including the most recently built schema.html (ARCH-00410), carry none. Also:
  "PREVIEW" is used live on 4 pages (3 inline + 1 via commit message only) but is NOT a member of CISEM-VOC-00002's
  Node Status enum (DRAFT|PROPOSED|DECLARED|RATIFIED|PLACEHOLDER|SCHEDULED|SPLIT|PROVISIONAL-ACTIVE) — meanwhile
  VOC-00001 lists "preview" as a page-KIND tag value, conflating a lifecycle-state word with a kind-tag word across
  the two vocab files. CLASS: a governance directive ("every page must carry tags+status") needs (a) a mechanical
  creation-time check on frontend/**/*.html specifically (extending creation-gate.sh/FE-invariants, not just the
  generic tags:/Status: presence check that already passes on non-HTML governed files), and (b) a VOC-00002 ruling
  on whether PREVIEW is promoted to a real enum member or pages should say PROVISIONAL-ACTIVE instead. →
  DISTILL-PENDING (candidate: new FE-invariant under CS-FRONTEND-001 + a VOC-00002 enum decision routed to Opus/Governor).
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
- [2026-07-21 · cisem-sonnet · TAC Stage 4 naming/numbering enforcement build] **A universal-by-default check
  finds MORE than its author anticipated, and that is the point:** building [TYPE-MATCH] to the dispatch's stated
  4 expected findings (ARCH-00380/381/394/397) surfaced a genuine 5th sibling (ARCH-00393, CS-FRONTEND-001's
  manifest, same MANIFEST-vs-ARCH mismatch) purely because the check enumerates ALL `.md` files, not the 4 named
  ones. Same for [NAMING-FORMAT]: built for the one pre-declared expected flag (TEMPLATE-PROTOCOL-001, which
  correctly cleared via the new exceptions registry), it ALSO caught 2 ids [I1]'s own regex is structurally BLIND
  to (`CISEM-BASE-CONTRACT-001`, `CISEM-PROTOCOL-TEMPLATE-001` — both 3-digit SEQ; [I1]'s pattern hardcodes
  `{5}` digits, so non-5-digit ids never even enter its match set). CLASS: when a NEW check is built "to confirm
  N known findings," it must still be built to enumerate the WHOLE class (Principle 18B) — the pre-declared
  findings are a MINIMUM verification, not the check's ceiling; a check that only matched the anticipated set
  would silently hide the same kind of blind-spot [I1] itself had for 16+ months. Also confirms a related class:
  a sibling check ([I1]) can have a narrow REGEX (not just a narrow SCOPE, RI-0009's class) that makes it blind to
  a whole shape of id (non-5-digit) — a distinct sub-class of "declared-universal-but-wired-narrow" worth folding
  into RI-0009's family. Same pattern repeated in [CREATION-GATE]'s V10 fix: widening the enumeration (adding
  repo-root + dna/-root `-maxdepth 1`) surfaced 4 MORE real ungoverned files (CISEM-WITNESS-00004/5/6,
  parked-and-rejected-register.md) beyond the 3 the dispatch pre-named. → DISTILL-PENDING (candidate: fold into
  RI-0009 as "narrow-regex" sub-class, alongside the existing "narrow-scope" class).
- [2026-07-21 · cisem-sonnet · TAC Stage 4 naming/numbering enforcement build] **Declared-exception registries
  need BOTH id-match and path-match suppression, not just one:** `naming-exceptions.yaml` needed an id-exact-match
  path (for `CISEM-TEMPLATE-PROTOCOL-001`, a single irregular node) AND a path-prefix path (for the `frontend/`
  blanket clause, which has no single id to match against — it exempts an entire governed subtree by a different
  corespine's authority). A check that only supports one suppression shape will force future exceptions into the
  wrong shape to fit it. CLASS: an exceptions/allowlist registry feeding a mechanical check should support both
  id-scoped and path-scoped entries from the start, not retrofit the second shape later. → DISTILL-PENDING.
- [2026-07-21 · cisem-sonnet · CS-FRONTEND-001 UX build (BUILD 1–6, Governor dispatch via Opus)] **A literal
  "redefine the page" instruction can collide with the Hard Constraint "never remove an element without flagging"
  — the resolution is ADD-a-new-default-view + demote-the-old-to-collapsed-and-labeled-legacy, not delete-and-
  replace.** Build 6 asked to "redefine" gallery.html's tabs from a deep Metadata/SEO tree into a collapsed
  filename+catalog-number list. Deleting the tree to build the new view would have violated the Hard Constraint
  and Principle 18A (no collateral deletion). Instead: the new collapsed-list catalog became the prominent DEFAULT
  surface; the pre-existing tree was wrapped under a `.sh sh-closed` header retitled "Full Metadata Tree (legacy
  view — unchanged, kept per Hard Constraint)" and left byte-identical underneath, still fully functional (search/
  sort/edit/delete all still reach it). CLASS: whenever a dispatch says "redefine/replace X" AND a standing
  no-removal constraint applies, the correct resolution is ADDITIVE-default-swap (new content becomes primary,
  old content is demoted+labeled+preserved, never deleted) — this should be a named pattern (candidate: "additive
  redefinition") folded into CLAUDE.md Principle 18A alongside deletion-guard/element-inventory, so future dispatches
  phrase "redefine" instructions with this resolution pre-agreed rather than leaving the tension implicit. →
  DISTILL-PENDING.
- [2026-07-21 · cisem-sonnet · CS-FRONTEND-001 UX build] **jsdom does not implement the `.contentEditable` IDL
  property reflection** (only the underlying `contenteditable` DOM ATTRIBUTE works via getAttribute/setAttribute)
  — a behavioral test asserting `el.contentEditable === 'true'` after `el.setAttribute('contenteditable','true')`
  silently returns `undefined` and fails, even though the real behavior (and real-browser behavior) is correct.
  CLASS: any FUTURE contenteditable/inline-edit behavioral test in `functional-check.mjs` (this frontend's jsdom
  gate) MUST assert via `el.getAttribute('contenteditable')`, never the `.contentEditable` property — a general
  jsdom-gap note worth adding to the functional-check.mjs file header so the next builder doesn't re-lose the same
  hour re-discovering it. → DISTILL-PENDING (candidate: fold into FE-I11's jsdom-gate documentation).
- [2026-07-21 · cisem-sonnet · CS-FRONTEND-001 UX build] **Extending a SHARED mechanism (one Sort button now
  covering tree groups + `.fl` lists + the new `.gal-catalog`) can silently invalidate a sibling test's assumption
  of stable DOM position.** The pre-existing gallery sort test clicked the SAME `#vbtn-sort-all` button my Build-1
  enhancement now also wires to `.gal-catalog`; that earlier click re-sorted my new catalog rows as a correct
  side-effect, which broke a LATER test that assumed `picRows[0]` was still "hero-banner-2026" by position. Fixed
  by keying the later assertion off a STABLE identifier (`data-catno`) instead of DOM position. CLASS: any test
  that captures "the Nth row" as a variable for reuse several assertions later, on a page where a SHARED sort/
  reorder mechanism might fire in between, should re-query by a stable attribute at point of use — not trust a
  captured NodeList-index reference across intervening reorder-capable clicks. → DISTILL-PENDING.
