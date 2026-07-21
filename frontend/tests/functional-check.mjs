// CISEM Frontend Functional Check — BEHAVIORAL verification (clicks + asserts state changes),
// not listener-presence. Catches the class of bug where a listener is wired but does nothing
// (e.g. collapse toggle bailing because a panel broke nextElementSibling). Run: node functional-check.mjs
// Governed by CS-FRONTEND-001; feeds the web-page completion learning loop (Principle 17 / RI-0007).
import { JSDOM, VirtualConsole } from 'jsdom';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');           // repo root
const JS = fs.readFileSync(path.join(ROOT, 'frontend/js/search.js'), 'utf8');

let pass = 0, fail = 0;
const fails = [];
function ok(name, cond) { if (cond) { pass++; } else { fail++; fails.push(name); } }

function load(rel, dir) {
  // dir override (FE-I11 coverage-hole fix, ARCH-00414 Phase 6): frontend/index.html lives at
  // repo-root/frontend/, not frontend/pages/ — pass dir:'frontend' to load it with the SAME
  // machinery (no separate code path, no weakened asserts). Default stays 'frontend/pages'
  // so every EXISTING call site (schema.html, uxui.html, gallery.html, dynamic-menu.html, the
  // ALL_PAGES loop) is byte-for-byte unaffected.
  const baseDir = dir || 'frontend/pages';
  const html = fs.readFileSync(path.join(ROOT, baseDir, rel), 'utf8');
  // Capture ANY uncaught error during init (jsdom routes listener exceptions to jsdomError).
  // A crash on load must FAIL the check — it can no longer hide behind other passing assertions (RI-0008).
  const loadErrors = [];
  const vc = new VirtualConsole();
  vc.on('jsdomError', e => loadErrors.push((e && e.message) || String(e)));
  const dom = new JSDOM(html, { runScripts: 'outside-only', pretendToBeVisual: true,
    url: 'http://localhost/' + baseDir + '/' + rel, virtualConsole: vc });
  const w = dom.window;
  w.matchMedia = w.matchMedia || function () { return { matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} }; };
  w.print = w.print || function () {};
  w.eval(JS);   // registers a DOMContentLoaded listener (jsdom stays in 'loading')
  w.document.dispatchEvent(new w.Event('DOMContentLoaded', { bubbles: true }));  // fire init()
  w.__loadErrors = loadErrors;
  ok(rel + ': loads with NO uncaught error (init did not crash)', loadErrors.length === 0);
  return w;
}
function click(w, el) { el.dispatchEvent(new w.window.Event('click', { bubbles: true, cancelable: true })); }
function fireInput(w, el) { el.dispatchEvent(new w.window.Event('input', { bubbles: true })); }
function closeModalDom(w) { w.document.dispatchEvent(new w.window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true })); }

// ── GATE A — FE-I13 WCAG-AA CONTRAST (measured, permanent) ─────────────────────────────
// Computes the REAL WCAG contrast ratio (relative-luminance formula) for every text/foreground
// design token in style.css against every background token it renders on, in BOTH themes
// (:root dark + :root[data-theme="light"]). No taste-exemption for badge/label tokens (the
// 2026-07-21 lesson) — warn/success/danger are tested as normal text (>= 4.5:1), same as
// text/muted/accent/hover. Reads hex values FROM style.css so it stays in sync with any future
// token edit — a future token change that drops below AA fails THIS gate, permanently.
const CSS_CONTRAST = fs.readFileSync(path.join(ROOT, 'frontend/css/style.css'), 'utf8');

function hexToRgb(hex) {
  let h = hex.replace('#', '');
  if (h.length === 3) h = h.split('').map(c => c + c).join('');
  return [0, 2, 4].map(i => parseInt(h.substr(i, 2), 16));
}
function relLuminance(hex) {
  const [r, g, b] = hexToRgb(hex).map(v => v / 255);
  const lin = c => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}
function contrastRatio(hex1, hex2) {
  const L1 = relLuminance(hex1), L2 = relLuminance(hex2);
  const lighter = Math.max(L1, L2), darker = Math.min(L1, L2);
  return (lighter + 0.05) / (darker + 0.05);
}
// Extract ONLY the first-level `--token: #hex;` declarations inside a given :root block —
// scoped to the FIRST matching `{...}` so :root and :root[data-theme="light"] never cross-read.
function extractTokenBlock(css, blockRe) {
  const m = css.match(blockRe);
  const tokens = {};
  if (!m) return tokens;
  const tokRe = /--([a-z][a-z0-9-]*)\s*:\s*(#[0-9a-fA-F]{3,8})\s*;/g;
  let t;
  while ((t = tokRe.exec(m[1]))) tokens[t[1]] = t[2];
  return tokens;
}
const darkTokens = extractTokenBlock(CSS_CONTRAST, /:root\s*\{([^}]*)\}/);
const lightTokens = extractTokenBlock(CSS_CONTRAST, /:root\[data-theme="light"\]\s*\{([^}]*)\}/);

// FG_TOKENS = every color token used as text/foreground anywhere in style.css (incl. badge/
// label tokens warn/success/danger — no exemption). BG_TOKENS = the two surfaces text renders
// on (page bg, nav/card bg). Enumerated from the token set itself, not a curated sample.
const FG_TOKENS = ['text', 'muted', 'accent', 'hover', 'warn', 'success', 'danger'];
const BG_TOKENS = ['bg', 'nav'];

console.log('WCAG-AA CONTRAST TABLE (FE-I13, measured live from style.css tokens):');
[['dark', darkTokens], ['light', lightTokens]].forEach(([theme, tok]) => {
  FG_TOKENS.forEach(fg => {
    BG_TOKENS.forEach(bg => {
      if (!tok[fg] || !tok[bg]) { ok('[FE-I13] ' + theme + ': token --' + fg + ' or --' + bg + ' missing (cannot measure)', false); return; }
      const ratio = contrastRatio(tok[fg], tok[bg]);
      console.log('  [' + theme + '] --' + fg + ' (' + tok[fg] + ') on --' + bg + ' (' + tok[bg] + ') = ' + ratio.toFixed(2) + ':1' + (ratio < 4.5 ? '  <-- FAIL' : ''));
      ok('[FE-I13] ' + theme + ' theme: --' + fg + ' on --' + bg + ' >= 4.5:1 WCAG AA (measured ' + ratio.toFixed(2) + ':1)', ratio >= 4.5);
    });
  });
});

// ── GATE C — BUILD 2/3 (Governor 2026-07-21): back=RED, forward=GREEN, delete=RED ──────
// Measured (not just present): reuses the SAME --danger/--success luminance values already
// computed by GATE A above (both themes) — the arrows/delete controls carry NO new color
// pair, only the pre-verified AA tokens, so "measured" here means citing that same computed
// ratio while asserting the CSS rule actually maps the right selector to the right token.
{
  const hasBackRule = /\.bc\s+\.bc-arr:first-child\s*\{[^}]*color:\s*var\(--danger\)/.test(CSS_CONTRAST);
  const hasFwdRule = /\.bc\s+\.bc-arr:first-child\s*\+\s*\.bc-arr\s*\{[^}]*color:\s*var\(--success\)/.test(CSS_CONTRAST);
  ok('[BUILD 2] CSS maps the FIRST .bc-arr (Back) to --danger (red)', hasBackRule);
  ok('[BUILD 2] CSS maps the SECOND .bc-arr (Forward, adjacent sibling) to --success (green)', hasFwdRule);
  // language-independence: the selector must NOT depend on [title=...] (initLang() rewrites
  // the title attribute text on language switch — a title-based selector would silently break).
  ok('[BUILD 2] arrow color selectors are NOT title-attribute-based (survives language switch)',
    !/\.bc-arr\[title=/.test(CSS_CONTRAST));
  ok('[BUILD 2] --danger meets AA on --bg in both themes (measured above, reused for the Back arrow)',
    contrastRatio(darkTokens.danger, darkTokens.bg) >= 4.5 && contrastRatio(lightTokens.danger, lightTokens.bg) >= 4.5);
  ok('[BUILD 2] --success meets AA on --bg in both themes (measured above, reused for the Forward arrow)',
    contrastRatio(darkTokens.success, darkTokens.bg) >= 4.5 && contrastRatio(lightTokens.success, lightTokens.bg) >= 4.5);
  const hasDeleteRule = /\.rt-btn-danger\s*\{[^}]*color:\s*var\(--danger\)/.test(CSS_CONTRAST);
  ok('[BUILD 3] CSS maps .rt-btn-danger (every delete control) to --danger (red)', hasDeleteRule);
}

// ── schema.html — the page the Governor found broken ──
const w = load('schema.html');
const doc = w.document;

const branch = doc.querySelector('.tree-row.branch-row');
ok('schema: a branch row exists', !!branch);
if (branch) {
  const li = branch.parentElement;
  const kids = li.querySelector(':scope > ul.tree-children');
  ok('schema: branch has a child <ul>', !!kids);
  if (kids) {
    const before = kids.classList.contains('tree-collapsed');
    click(w, branch);
    const afterFirst = kids.classList.contains('tree-collapsed');
    ok('schema: clicking a branch row CHANGES collapse state (behavioral, not just wired)', before !== afterFirst);
    click(w, branch);
    ok('schema: second click toggles back', kids.classList.contains('tree-collapsed') === before);
  }
}

// ── BUILD 2 — nav arrow DOM structure (the CSS selectors above target exactly this shape) ──
{
  const bcArrs = doc.querySelectorAll('.bc-arr');
  ok('schema: exactly 2 nav arrows (Back, Forward)', bcArrs.length === 2);
  ok('schema: first arrow is Back, second is Forward (matches the :first-child / sibling CSS selector)',
    bcArrs.length === 2 && bcArrs[0].title === 'Back' && bcArrs[1].title === 'Forward' && bcArrs[0] === bcArrs[0].parentElement.querySelector('.bc-arr:first-child'));
}

// ── BUILD 1 — enhanced SORT (Name / Creation date / Last modified) — behavioral, not just a
// dropdown that exists. Uses the RATIFIED corespine group (already a real non-alphabetical
// fixture, per the pre-existing Sort test below) and asserts sorting by 'created' produces a
// DIFFERENT order than sorting by 'name' (both are real reorders, not decorative). ──
{
  const sortKeySel = doc.querySelector('#sort-key-sel');
  ok('schema: Sort now offers a key dropdown (Name / Creation date / Last modified)',
    !!sortKeySel && sortKeySel.querySelectorAll('option').length === 3);
  const ratifiedLabel = Array.prototype.find.call(
    doc.querySelectorAll('.tree-row.branch-row .tree-label'), l => l.textContent.trim() === 'RATIFIED');
  const ratifiedGroup = ratifiedLabel ? ratifiedLabel.closest('li.tree-node') : null;
  const ratifiedUl = ratifiedGroup ? ratifiedGroup.querySelector(':scope > ul.tree-children') : null;
  const sortBtnForKey = doc.querySelector('#vbtn-sort-all');
  if (sortKeySel && ratifiedUl && sortBtnForKey) {
    const label = li => li.querySelector(':scope > .tree-row .tree-label').textContent.trim();
    // every row here already carries a REAL data-created (assignPlaceholderDates ran on load)
    const rowsWithDates = Array.prototype.filter.call(ratifiedUl.children, c => c.classList.contains('tree-node'));
    ok('schema: every row in the RATIFIED group carries data-created (BUILD 1 placeholder-date assignment)',
      rowsWithDates.every(li => !!li.getAttribute('data-created')));
    sortKeySel.value = 'created';
    click(w, sortBtnForKey);
    const byCreated = Array.prototype.filter.call(ratifiedUl.children, c => c.classList.contains('tree-node')).map(label);
    sortKeySel.value = 'name';
    click(w, sortBtnForKey);
    const byName = Array.prototype.filter.call(ratifiedUl.children, c => c.classList.contains('tree-node')).map(label);
    ok('schema: sorting by Creation date produces a DIFFERENT order than sorting by Name (real field, not decorative)',
      byCreated.join(',') !== byName.join(','));
  }
}

// ── BUILD 4 — Edit (✎) popup: mandatory on every row/sub-group/group, opens+saves (behavioral) ──
{
  const editBtn = doc.querySelector('.rt-btn-edit');
  ok('schema: an Edit (✎) control exists on a row (mandatory per Build 4)', !!editBtn);
  ok('schema: modal host is NOT yet in the DOM before any edit/detail popup is opened', !doc.getElementById('cisem-modal-host'));
  if (editBtn) {
    const li = editBtn.closest('li.tree-node');
    const labelEl = li.querySelector(':scope > .tree-row .tree-label');
    const originalName = labelEl.textContent.trim();
    click(w, editBtn);
    const modal = doc.getElementById('cisem-modal-host');
    ok('schema: clicking Edit OPENS the modal (behavioral)', !!modal && modal.style.display !== 'none');
    const nameInput = modal.querySelector('.cm-field input');
    ok('schema: Edit modal Name field is PRE-FILLED with the row\'s current label', !!nameInput && nameInput.value === originalName);
    if (nameInput) {
      nameInput.value = originalName + ' (edited)';
      const saveBtn = Array.prototype.find.call(modal.querySelectorAll('.cm-btn'), b => b.textContent === 'Save');
      ok('schema: Edit modal has a Save button', !!saveBtn);
      if (saveBtn) {
        click(w, saveBtn);
        ok('schema: Save UPDATES the row label in the DOM (behavioral, not just stored)',
          labelEl.textContent.trim() === originalName + ' (edited)');
        ok('schema: Save CLOSES the modal', modal.style.display === 'none');
      }
    }
    // Escape-closes (Build 4 spec: "closes on Escape/outside-click")
    click(w, editBtn);
    ok('schema: re-opening Edit shows the modal again', modal.style.display !== 'none');
    doc.dispatchEvent(new w.window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    ok('schema: pressing Escape CLOSES the modal (behavioral)', modal.style.display === 'none');
    // outside-click closes
    click(w, editBtn);
    ok('schema: re-opening Edit again shows the modal', modal.style.display !== 'none');
    click(w, modal); // clicking the overlay itself (not the inner .cisem-modal card)
    ok('schema: clicking outside the modal card CLOSES the modal (behavioral)', modal.style.display === 'none');
  }
}

// ── BUILD 5 — INLINE TEXT EDIT: click makes text contenteditable in place, persists on blur ──
{
  // NOTE: jsdom does not implement the `.contentEditable` IDL property reflection (a known
  // jsdom gap) — the underlying `contenteditable` ATTRIBUTE is what search.js actually sets/
  // reads, so assertions use getAttribute() here (still a real, behavioral DOM-state check).
  const h1 = doc.querySelector('h1');
  ok('schema: page title (h1) is marked inline-editable', !!h1 && h1.classList.contains('inline-editable'));
  if (h1) {
    ok('schema: h1 is NOT contenteditable before any click', h1.getAttribute('contenteditable') !== 'true');
    click(w, h1);
    ok('schema: clicking h1 makes it contenteditable (behavioral)', h1.getAttribute('contenteditable') === 'true');
    h1.textContent = 'Schema (edited inline)';
    h1.dispatchEvent(new w.window.Event('blur', { bubbles: true }));
    ok('schema: blur exits edit mode', h1.getAttribute('contenteditable') === 'false');
    ok('schema: edited text persists in the DOM', h1.textContent === 'Schema (edited inline)');
  }
}

// ── MINDMAP (ARCH-00410) — companion SVG view on schema.html. Behavioral, not presence-only
// (Principle 17 / RI-0007): click the toggle, click a branch's expand control, click a node's
// native link, assert the resulting STATE, not merely that a listener exists. ──
const mmBtnTree = doc.querySelector('#mm-btn-tree');
const mmBtnMap = doc.querySelector('#mm-btn-mindmap');
ok('schema: mindmap toggle bar injected (Tree/Mindmap buttons)', !!mmBtnTree && !!mmBtnMap);
if (mmBtnTree && mmBtnMap) {
  const mmWrap = doc.querySelector('#mm-wrap');
  const treeBefore = branch ? branch.closest('ul.tree') : doc.querySelector('ul.tree');
  ok('schema: mindmap wrap starts hidden (tree is the default view)', mmWrap && mmWrap.style.display === 'none');

  click(w, mmBtnMap);
  ok('schema: clicking Mindmap SHOWS the mindmap wrap (behavioral)', mmWrap.style.display !== 'none');
  ok('schema: clicking Mindmap HIDES the original tree (Core Seed 2 — companion, not duplicate-visible)',
    treeBefore && treeBefore.style.display === 'none');
  ok('schema: original tree markup is UNCHANGED, only hidden (Core Seed 2 — no content regression)',
    treeBefore && doc.body.contains(treeBefore) && treeBefore.querySelectorAll('.tree-node').length > 0);

  const mmNodes = doc.querySelectorAll('.mm-node');
  ok('schema: mindmap RENDERS SVG nodes on click (not just a wired listener — RI-0007)', mmNodes.length > 5);
  const mmEdges = doc.querySelectorAll('.mm-edge');
  ok('schema: mindmap renders edges connecting nodes', mmEdges.length > 0);

  // Native-link behavioral check (Core Seed 4): a node with a page is a REAL <a href>, not a
  // DOM-patched overlay — assert tag=A, a real href (not '#'/'javascript:'), and that clicking
  // it does NOT call preventDefault (a JS overlay would; a native link doesn't need to).
  const mmLink = doc.querySelector('a.mm-link');
  // SVG (namespaced) elements keep their tagName lowercase ('a'), unlike HTML's auto-uppercase —
  // check the namespace explicitly too, so this really proves it's a native SVG <a>, not a div/span.
  ok('schema: at least one mindmap node is a NATIVE <a> link',
    !!mmLink && mmLink.tagName === 'a' && mmLink.namespaceURI === 'http://www.w3.org/2000/svg');
  if (mmLink) {
    const href = mmLink.getAttribute('href');
    ok('schema: mindmap node link has a REAL page href (not # or javascript:)',
      !!href && href !== '#' && !/^javascript:/i.test(href) && href.endsWith('.html'));
    const evt = new w.window.MouseEvent('click', { bubbles: true, cancelable: true });
    mmLink.dispatchEvent(evt);
    ok('schema: mindmap node click is NOT intercepted by JS (defaultPrevented=false => native navigation, not an overlay)',
      evt.defaultPrevented === false);
  }

  // Expand/collapse (behavioral, matches the tree-toggle test pattern above): a category node
  // starts collapsed; clicking its toggle control CHANGES the rendered node count.
  const mmToggle = doc.querySelector('.mm-toggle');
  ok('schema: mindmap has an expand/collapse toggle on a branch node', !!mmToggle);
  if (mmToggle) {
    const countBefore = doc.querySelectorAll('.mm-node').length;
    click(w, mmToggle);
    const countAfter = doc.querySelectorAll('.mm-node').length;
    ok('schema: clicking a mindmap branch toggle CHANGES the rendered node count (behavioral, not just wired)', countBefore !== countAfter);
    click(w, mmToggle);
    const countBack = doc.querySelectorAll('.mm-node').length;
    ok('schema: second click toggles back to the original count', countBack === countBefore);
  }

  // Both themes (Core Seed 4): mindmap must render successfully after a theme flip, not just
  // in the default dark theme.
  const themeBtnForMap = doc.querySelector('.theme-tgl');
  if (themeBtnForMap) {
    click(w, themeBtnForMap); // flips to the alternate theme
    const nodesAfterThemeFlip = doc.querySelectorAll('.mm-node').length;
    ok('schema: mindmap still renders nodes after a theme flip (both themes, Core Seed 4)', nodesAfterThemeFlip > 5);
    click(w, themeBtnForMap); // flip back — leave state as found for pages loaded after this one
  }

  // Return to Tree view and confirm it un-hides (round-trip, no stuck state).
  click(w, mmBtnTree);
  ok('schema: clicking Tree HIDES the mindmap wrap again', mmWrap.style.display === 'none');
  ok('schema: clicking Tree RESTORES the original tree (round-trip, nothing lost)',
    treeBefore && treeBefore.style.display === '');
}

// ── ONE-LINE TOOLBAR (Core Seed 3, 2026-07-21) — schema.html's Rows/Window/Export AND
// Tree/Mindmap toggles must live in the SAME .view-bar element (one row), not two separate
// sibling bars (the defect Opus found: two visually-stacked rows). Behavioral, not just a
// visual/CSS claim — assert the actual DOM parent-of-node relationship. ──
{
  const bars = doc.querySelectorAll('main .view-bar');
  ok('schema: exactly ONE .view-bar element (not two stacked bars)', bars.length === 1);
  if (bars.length === 1) {
    const bar = bars[0];
    const hasRows = !!bar.querySelector('#vbtn-rows');
    const hasWindow = !!bar.querySelector('#vbtn-window');
    const hasTree = !!bar.querySelector('#mm-btn-tree');
    const hasMap = !!bar.querySelector('#mm-btn-mindmap');
    ok('schema: Rows/Window AND Tree/Mindmap buttons are children of the SAME .view-bar (one line)',
      hasRows && hasWindow && hasTree && hasMap);
  }
}

// ── SORT CONTROL (BUILD 2, Governor 2026-07-21) — a page-wide Sort button in the SAME
// .view-bar, reusing sortChildren() (CORE-SEED 1 — no second sort mechanism). Behavioral:
// assert a REAL order change (Principle 17), using schema.html's RATIFIED corespine group —
// a genuine, already-non-alphabetical fixture (M,C,T,F in source), not a planted probe. ──
{
  const sortBtn = doc.querySelector('#vbtn-sort-all');
  ok('schema: Sort control injected into the shared .view-bar (FE-I12 — same bar, one line)',
    !!sortBtn && !!doc.querySelector('main .view-bar') && sortBtn.closest('.view-bar') === doc.querySelector('main .view-bar'));
  const ratifiedLabel = Array.prototype.find.call(
    doc.querySelectorAll('.tree-row.branch-row .tree-label'), l => l.textContent.trim() === 'RATIFIED');
  const ratifiedGroup = ratifiedLabel ? ratifiedLabel.closest('li.tree-node') : null;
  const ratifiedUl = ratifiedGroup ? ratifiedGroup.querySelector(':scope > ul.tree-children') : null;
  if (sortBtn && ratifiedUl) {
    const childLis = Array.prototype.filter.call(ratifiedUl.children, c => c.classList.contains('tree-node'));
    const label = li => li.querySelector(':scope > .tree-row .tree-label').textContent.trim();
    const before = childLis.map(label);
    const ascExpected = before.slice().sort();
    ok('schema: RATIFIED corespine group starts in a non-alphabetical order (real fixture, not planted)',
      before.join(',') !== ascExpected.join(','));
    click(w, sortBtn);
    const after = childLis.map ? Array.prototype.filter.call(ratifiedUl.children, c => c.classList.contains('tree-node')).map(label) : [];
    ok('schema: clicking Sort REORDERS the RATIFIED group alphabetically (behavioral, not decorative)',
      after.join(',') === ascExpected.join(','));
    click(w, sortBtn); // second click — reverse direction, round-trip proof (not a one-shot no-op)
    const after2 = Array.prototype.filter.call(ratifiedUl.children, c => c.classList.contains('tree-node')).map(label);
    ok('schema: second Sort click reverses to Z->A (round-trip)',
      after2.join(',') === ascExpected.slice().reverse().join(','));
  }
}

// ── universal chrome toggles (present + behavioral) on schema.html ──
const themeBtn = doc.querySelector('.theme-tgl');
ok('theme toggle injected', !!themeBtn);
if (themeBtn) {
  const t0 = doc.documentElement.getAttribute('data-theme') || '';
  click(w, themeBtn);
  ok('theme toggle changes data-theme', (doc.documentElement.getAttribute('data-theme') || '') !== t0);
}
const langBtn = doc.querySelector('.lang-tgl');
ok('language toggle injected', !!langBtn);
if (langBtn) {
  const d0 = doc.documentElement.getAttribute('dir') || 'ltr';
  click(w, langBtn);
  ok('language toggle flips dir', (doc.documentElement.getAttribute('dir') || 'ltr') !== d0);
}

// ── uxui.html — UX/UI TAB SWITCH (behavioral, not presence — Principle 17/FE-I11) ──
{
  const wu = load('uxui.html');
  const du = wu.document;
  const tabUx = du.querySelector('#uxui-tab-ux');
  const tabUi = du.querySelector('#uxui-tab-ui');
  const panelUx = du.querySelector('#uxui-panel-ux');
  const panelUi = du.querySelector('#uxui-panel-ui');
  ok('uxui: both tabs present', !!tabUx && !!tabUi);
  ok('uxui: both panels present', !!panelUx && !!panelUi);
  if (tabUx && tabUi && panelUx && panelUi) {
    ok('uxui: UX panel starts visible, UI panel starts hidden', !panelUx.hidden && panelUi.hidden);
    click(wu, tabUi);
    ok('uxui: clicking UI tab HIDES the UX panel (behavioral)', panelUx.hidden === true);
    ok('uxui: clicking UI tab SHOWS the UI panel (behavioral)', panelUi.hidden === false);
    ok('uxui: UI tab gets aria-selected=true', tabUi.getAttribute('aria-selected') === 'true');
    ok('uxui: UX tab gets aria-selected=false', tabUx.getAttribute('aria-selected') === 'false');
    click(wu, tabUx);
    ok('uxui: clicking UX tab reverts (round-trip, nothing stuck)', !panelUx.hidden && panelUi.hidden);
  }
  // ── STRUCTURE: group -> sub-group -> row nesting, matching schema.html (Governor: "all the
  // features you built in the schema page ... present in each row, sub-group and group") ──
  function findBranchByLabel(root, text) {
    if (!root) return null;
    const lbls = root.querySelectorAll('.tree-row.branch-row .tree-label');
    for (let i = 0; i < lbls.length; i++) if (lbls[i].textContent.trim() === text) return lbls[i].closest('li.tree-node');
    return null;
  }
  const uxGroup = findBranchByLabel(panelUx, 'UX Principles');
  const uxSubgroupSD = uxGroup ? findBranchByLabel(uxGroup, 'Structure & Disclosure') : null;
  const uxSubgroupTC = uxGroup ? findBranchByLabel(uxGroup, 'Trust & Consistency') : null;
  const uxRow = uxSubgroupSD ? findBranchByLabel(uxSubgroupSD, 'Zero-wall / progressive disclosure') : null;
  ok('uxui: UX panel has group -> sub-group -> row nesting (3+ levels, matches schema.html depth)',
    !!uxGroup && !!uxSubgroupSD && !!uxRow);

  const uiGroup = findBranchByLabel(panelUi, 'UI Defaults');
  const uiSubgroup = uiGroup ? findBranchByLabel(uiGroup, 'Visual System') : null;
  const uiRow = uiSubgroup ? findBranchByLabel(uiSubgroup, 'Theme-aware via tokens') : null;
  ok('uxui: UI panel has group -> sub-group -> row nesting (3+ levels, matches schema.html depth)',
    !!uiGroup && !!uiSubgroup && !!uiRow);

  // ── content preservation: all 5 original UX + 8 original UI principles still present
  // (enumerate-all, not a sample — RI-0008; guards collateral content loss, Principle 18A) ──
  const uxLabels = ['Zero-wall / progressive disclosure', 'Wide-view-first, drill-down', 'Consistency', 'Honest state', 'User owns scope'];
  const uiLabels = ['Dependency-free / offline-first', 'Single JS file', 'Theme-aware via tokens', 'Controls on ONE line', 'WCAG AA contrast minimum', 'Native links', 'Registry-generated data', 'Behavioral verification'];
  uxLabels.forEach(l => ok('uxui: UX principle preserved — "' + l + '"', !!findBranchByLabel(panelUx, l)));
  uiLabels.forEach(l => ok('uxui: UI default preserved — "' + l + '"', !!findBranchByLabel(panelUi, l)));

  // ── ROW-LEVEL CONTROL BAR — EVERY group/sub-group/row/leaf in BOTH uxui panels carries the
  // SAME .rt-tools bar schema.html rows carry (enumerate-all, not a sample; the Governor's exact ask) ──
  const uxNodes = panelUx ? Array.prototype.slice.call(panelUx.querySelectorAll('li.tree-node')) : [];
  const uiNodes = panelUi ? Array.prototype.slice.call(panelUi.querySelectorAll('li.tree-node')) : [];
  ok('uxui: UX panel has tree-nodes to check (19 expected: 1 group + 3 sub-groups + 5 rows + 10 leaves)', uxNodes.length === 19);
  ok('uxui: UI panel has tree-nodes to check (26 expected: 1 group + 4 sub-groups + 8 rows + 13 leaves)', uiNodes.length === 26);
  const uxMissingTools = uxNodes.filter(li => !li.querySelector(':scope > .tree-row > .rt-tools')).length;
  const uiMissingTools = uiNodes.filter(li => !li.querySelector(':scope > .tree-row > .rt-tools')).length;
  ok('uxui: EVERY UX-tab tree-node (group/sub-group/row/leaf) carries the row control bar (' + (uxNodes.length - uxMissingTools) + '/' + uxNodes.length + ')', uxMissingTools === 0);
  ok('uxui: EVERY UI-tab tree-node (group/sub-group/row/leaf) carries the row control bar (' + (uiNodes.length - uiMissingTools) + '/' + uiNodes.length + ')', uiMissingTools === 0);

  // ── BEHAVIORAL: the reused Move-up control actually reorders uxui rows (presence != behavior,
  // Principle 17) — uses a DIFFERENT sub-group than the sort test below, to avoid interference ──
  if (uxSubgroupTC) {
    const rowsUl = uxSubgroupTC.querySelector(':scope > ul.tree-children');
    const kids = Array.prototype.filter.call(rowsUl.children, c => c.classList.contains('tree-node'));
    const label = li => li.querySelector(':scope > .tree-row .tree-label').textContent.trim();
    const beforeOrder = kids.map(label); // ['Consistency', 'Honest state']
    const secondRow = kids[1];
    const upBtn = secondRow ? Array.prototype.find.call(secondRow.querySelectorAll(':scope > .tree-row .rt-btn'), b => b.title === 'Move up') : null;
    ok('uxui: reused Move-up (↑) control present on a uxui row (same mechanism as schema.html)', !!upBtn);
    if (upBtn) {
      click(wu, upBtn);
      const afterKids = Array.prototype.filter.call(rowsUl.children, c => c.classList.contains('tree-node'));
      const afterOrder = afterKids.map(label);
      ok('uxui: clicking the reused Move-up control REORDERS the rows (behavioral, not decorative)',
        afterOrder[0] === beforeOrder[1] && afterOrder[1] === beforeOrder[0]);
    }
  }

  // ── SORT CONTROL (BUILD 2) on uxui.html — same page-wide button, different sub-group fixture
  // than the Move-up test above. "Structure & Disclosure" starts Z,W (non-alphabetical). ──
  if (uxSubgroupSD) {
    const sortBtnU = du.querySelector('#vbtn-sort-all');
    ok('uxui: Sort control injected into the shared .view-bar (same mechanism as schema.html)', !!sortBtnU);
    const rowsUl2 = uxSubgroupSD.querySelector(':scope > ul.tree-children');
    const label2 = li => li.querySelector(':scope > .tree-row .tree-label').textContent.trim();
    const before2 = Array.prototype.filter.call(rowsUl2.children, c => c.classList.contains('tree-node')).map(label2);
    const asc2 = before2.slice().sort();
    ok('uxui: "Structure & Disclosure" starts in a non-alphabetical order (real fixture, not planted)',
      before2.join(',') !== asc2.join(','));
    if (sortBtnU) {
      click(wu, sortBtnU);
      const after3 = Array.prototype.filter.call(rowsUl2.children, c => c.classList.contains('tree-node')).map(label2);
      ok('uxui: clicking Sort REORDERS uxui rows alphabetically (behavioral, not decorative)',
        after3.join(',') === asc2.join(','));
    }
  }

  // theme/lang/search/collapse/Rows-Window/Export — same shared abilities as schema.html
  ok('uxui: theme toggle injected', !!du.querySelector('.theme-tgl'));
  ok('uxui: language toggle injected', !!du.querySelector('.lang-tgl'));
  const uxuiBar = du.querySelector('main .view-bar');
  ok('uxui: view-bar (Rows/Window) present (triggered by the Source Files .fi block)', !!uxuiBar);
  if (uxuiBar) {
    ok('uxui: Export button present in the SAME bar (Rows/Window/Export on one line, Core Seed 3)',
      !!uxuiBar.querySelector('#export-changeset-btn'));
  }
  const uxuiBranch = du.querySelector('.tree-row.branch-row');
  if (uxuiBranch) {
    const li = uxuiBranch.parentElement;
    const kids = li.querySelector(':scope > ul.tree-children');
    if (kids) {
      const before = kids.classList.contains('tree-collapsed');
      click(wu, uxuiBranch);
      ok('uxui: collapse/expand works (behavioral)', kids.classList.contains('tree-collapsed') !== before);
    }
  }
}

// ── gallery.html — Pictures/Videos TAB SWITCH (behavioral, not presence — Principle 17/FE-I11) ──
{
  const wg = load('gallery.html');
  const dg = wg.document;
  const tabPics = dg.querySelector('#gal-tab-pictures');
  const tabVids = dg.querySelector('#gal-tab-videos');
  const panelPics = dg.querySelector('#gal-panel-pictures');
  const panelVids = dg.querySelector('#gal-panel-videos');
  ok('gallery: both tabs present', !!tabPics && !!tabVids);
  ok('gallery: both panels present', !!panelPics && !!panelVids);
  if (tabPics && tabVids && panelPics && panelVids) {
    ok('gallery: Pictures panel starts visible, Videos panel starts hidden', !panelPics.hidden && panelVids.hidden);
    click(wg, tabVids);
    ok('gallery: clicking Videos tab HIDES the Pictures panel (behavioral)', panelPics.hidden === true);
    ok('gallery: clicking Videos tab SHOWS the Videos panel (behavioral)', panelVids.hidden === false);
    click(wg, tabPics);
    ok('gallery: clicking Pictures tab reverts (round-trip, nothing stuck)', !panelPics.hidden && panelVids.hidden);
  }

  // ── enumerate-all: EVERY tree-node (group/item/metadata-group/SEO-group/leaf) in BOTH
  // panels carries the SAME .rt-tools row control bar as schema.html (Core Seed 1/4) ──
  const picNodes = panelPics ? Array.prototype.slice.call(panelPics.querySelectorAll('li.tree-node')) : [];
  const vidNodes = panelVids ? Array.prototype.slice.call(panelVids.querySelectorAll('li.tree-node')) : [];
  ok('gallery: Pictures panel has tree-nodes to check', picNodes.length > 0);
  ok('gallery: Videos panel has tree-nodes to check', vidNodes.length > 0);
  const picMissing = picNodes.filter(li => !li.querySelector(':scope > .tree-row > .rt-tools')).length;
  const vidMissing = vidNodes.filter(li => !li.querySelector(':scope > .tree-row > .rt-tools')).length;
  ok('gallery: EVERY Pictures-tab tree-node carries the row control bar (' + (picNodes.length - picMissing) + '/' + picNodes.length + ')', picMissing === 0);
  ok('gallery: EVERY Videos-tab tree-node carries the row control bar (' + (vidNodes.length - vidMissing) + '/' + vidNodes.length + ')', vidMissing === 0);

  // ── media/SEO metadata leaves present on the first picture item (content check, not just structure) ──
  const firstPic = panelPics ? panelPics.querySelector('li.tree-node > ul.tree-children > li.tree-node') : null;
  const picLabels = firstPic ? Array.prototype.map.call(firstPic.querySelectorAll('.tree-label'), l => l.textContent.trim()) : [];
  ['Metadata', 'SEO'].forEach(l => ok('gallery: first picture item has a "' + l + '" sub-group', picLabels.indexOf(l) !== -1));

  // ── SORT — reuses sortChildren() (Core Seed 1, no second sort mechanism); Sample Pictures
  // group is intentionally non-alphabetical (hero-banner, schema-diagram, agent-team) ──
  const sortBtnG = dg.querySelector('#vbtn-sort-all');
  ok('gallery: Sort control injected into the shared .view-bar', !!sortBtnG);
  const picGroupLabel = Array.prototype.find.call(dg.querySelectorAll('.tree-row.branch-row .tree-label'), l => l.textContent.trim() === 'Sample Pictures');
  const picGroupLi = picGroupLabel ? picGroupLabel.closest('li.tree-node') : null;
  const picGroupUl = picGroupLi ? picGroupLi.querySelector(':scope > ul.tree-children') : null;
  if (sortBtnG && picGroupUl) {
    const label = li => li.querySelector(':scope > .tree-row .tree-label').textContent.trim();
    const beforeSort = Array.prototype.filter.call(picGroupUl.children, c => c.classList.contains('tree-node')).map(label);
    const ascSort = beforeSort.slice().sort();
    ok('gallery: Sample Pictures starts non-alphabetical (real fixture)', beforeSort.join(',') !== ascSort.join(','));
    click(wg, sortBtnG);
    const afterSort = Array.prototype.filter.call(picGroupUl.children, c => c.classList.contains('tree-node')).map(label);
    ok('gallery: clicking Sort REORDERS Sample Pictures alphabetically (behavioral)', afterSort.join(',') === ascSort.join(','));
  }

  // ── BUILD 6 (Governor 2026-07-21) — gallery REDEFINITION: a collapsed-list media catalog,
  // NOT a photo grid. The pre-existing deep tree is PRESERVED (asserted above/via the existing
  // gallery block, unchanged) — these are the NEW additive assertions. ──
  const picCatalog = panelPics.querySelector('ul.gal-catalog');
  const vidCatalog = panelVids.querySelector('ul.gal-catalog');
  ok('gallery: Pictures panel has a gal-catalog (collapsed-list default view)', !!picCatalog);
  ok('gallery: Videos panel has a gal-catalog', !!vidCatalog);
  ok('gallery: Pictures catalog starts in COLLAPSED mode (filename + catalog# only)', picCatalog.classList.contains('gal-mode-collapsed'));
  const picRows = picCatalog ? picCatalog.querySelectorAll('.gal-row') : [];
  ok('gallery: Pictures catalog has 3 rows (hero-banner, schema-diagram, agent-team)', picRows.length === 3);
  ok('gallery: every catalog row shows filename + catalog number (collapsed-list spec)',
    Array.prototype.every.call(picRows, r => !!r.querySelector('.gal-filename') && !!r.querySelector('.gal-catno-lbl') && /^CAT-/.test(r.querySelector('.gal-catno-lbl').textContent)));

  // "+" popup — larger view + full metadata + SEO + heart favorite (behavioral open)
  const firstRow = picRows[0];
  const plusBtn = firstRow ? firstRow.querySelector('.gal-plus-btn') : null;
  ok('gallery: first catalog row has a "+" details control', !!plusBtn);
  if (plusBtn) {
    click(wg, plusBtn);
    const modal = dg.getElementById('cisem-modal-host');
    ok('gallery: clicking "+" OPENS the detail popup (behavioral)', !!modal && modal.style.display !== 'none');
    const bodyTxt = modal.querySelector('.cisem-modal-body').textContent;
    ok('gallery: popup shows title/alt/caption/dimensions/format/size/date/SEO metadata',
      ['Dimensions', 'Format', 'File size', 'SEO title', 'schema.org type'].every(f => bodyTxt.indexOf(f) !== -1)
      && !!modal.querySelector('.cm-field input'));
    const favBtnInModal = Array.prototype.find.call(modal.querySelectorAll('.cm-btn'), b => /favorite/i.test(b.textContent));
    ok('gallery: popup has a ♥ favorite toggle', !!favBtnInModal);
    closeModalDom(wg);
  }

  // ♥ favorite toggle on the ROW itself (behavioral — state persists via localStorage)
  const favBtnRow = firstRow ? firstRow.querySelector('.gal-fav-btn') : null;
  ok('gallery: row has its own favorite (♥) toggle', !!favBtnRow);
  if (favBtnRow) {
    const beforeActive = favBtnRow.classList.contains('active');
    click(wg, favBtnRow);
    ok('gallery: clicking ♥ toggles the favorited state (behavioral)', favBtnRow.classList.contains('active') !== beforeActive);
    click(wg, favBtnRow);
    ok('gallery: clicking ♥ again un-favorites (round-trip)', favBtnRow.classList.contains('active') === beforeActive);
  }

  // Thumbnail-size picker (S/M/L) — behavioral
  const sizeL = panelPics.querySelector('.gal-size-btn[data-size="l"]');
  ok('gallery: thumbnail-size picker has an L (large) control', !!sizeL);
  if (sizeL) {
    click(wg, sizeL);
    ok('gallery: clicking L SETS the catalog\'s thumbnail size (behavioral)', picCatalog.getAttribute('data-size') === 'l');
  }

  // View-mode switch Collapsed <-> Details — behavioral (thumb hidden in collapsed, shown in details)
  const detailsBtn = panelPics.querySelector('.gal-mode-btn[data-mode="details"]');
  ok('gallery: view-mode switcher has a Details control', !!detailsBtn);
  if (detailsBtn) {
    click(wg, detailsBtn);
    ok('gallery: clicking Details REMOVES collapsed mode (thumbnails become visible, behavioral)', !picCatalog.classList.contains('gal-mode-collapsed'));
    const collapsedBtn = panelPics.querySelector('.gal-mode-btn[data-mode="collapsed"]');
    click(wg, collapsedBtn);
    ok('gallery: clicking Collapsed List reverts (round-trip, thumbnails hidden again)', picCatalog.classList.contains('gal-mode-collapsed'));
  }

  // Search reaches the NEW catalog rows too (Build 1 reuse — same shared search, not a 2nd impl).
  // NOTE: looked up by the STABLE data-catno (not positional picRows[0]) — the earlier Sort
  // test on this same page already re-sorted the shared .gal-catalog (a CORRECT side-effect of
  // Build 1's sort now covering catalog lists too), so DOM position is no longer "hero-banner first".
  const heroRow = picCatalog.querySelector('.gal-row[data-catno="CAT-P001"]');
  const si2 = dg.getElementById('si');
  if (si2 && heroRow) {
    si2.value = 'hero-banner-2026';
    fireInput(wg, si2);
    ok('gallery: shared search FILTERS to the matching catalog row', heroRow.style.display !== 'none');
    si2.value = 'zzz-no-such-catalog-item';
    fireInput(wg, si2);
    ok('gallery: shared search HIDES non-matching catalog rows', heroRow.style.display === 'none');
    si2.value = ''; fireInput(wg, si2);
  }

  // BUILD 5 — inline edit reaches the gallery filename text too
  const filenameEl = firstRow ? firstRow.querySelector('.gal-filename') : null;
  ok('gallery: catalog row filename is marked inline-editable', !!filenameEl && filenameEl.classList.contains('inline-editable'));
  if (filenameEl) {
    click(wg, filenameEl);
    ok('gallery: clicking the filename makes it contenteditable (behavioral)', filenameEl.getAttribute('contenteditable') === 'true');
    filenameEl.textContent = 'hero-banner-2026-renamed.jpg';
    filenameEl.dispatchEvent(new wg.window.Event('blur', { bubbles: true }));
    ok('gallery: edited filename persists in the DOM after blur', filenameEl.textContent === 'hero-banner-2026-renamed.jpg');
  }

  // Hard Constraint — nothing removed: the legacy deep Metadata/SEO tree is STILL present,
  // just collapsed by default (Governor: additive only, flag rather than remove).
  const legacyHeader = Array.prototype.find.call(dg.querySelectorAll('.sh'), s => /Full Metadata Tree/.test(s.textContent));
  ok('gallery: the pre-existing deep Metadata/SEO tree is PRESERVED (legacy section, collapsed not deleted)', !!legacyHeader);
  ok('gallery: legacy tree section starts collapsed (sh-closed) — new catalog is the default surface', !!legacyHeader && legacyHeader.classList.contains('sh-closed'));
}

// ── dynamic-menu.html — Tiers/Responsive TAB SWITCH (behavioral) ──
{
  const wd = load('dynamic-menu.html');
  const dd2 = wd.document;
  const tabTiers = dd2.querySelector('#dm-tab-tiers');
  const tabResp = dd2.querySelector('#dm-tab-responsive');
  const panelTiers = dd2.querySelector('#dm-panel-tiers');
  const panelResp = dd2.querySelector('#dm-panel-responsive');
  ok('dynamic-menu: both tabs present', !!tabTiers && !!tabResp);
  ok('dynamic-menu: both panels present', !!panelTiers && !!panelResp);
  if (tabTiers && tabResp && panelTiers && panelResp) {
    ok('dynamic-menu: Tiers panel starts visible, Responsive panel starts hidden', !panelTiers.hidden && panelResp.hidden);
    click(wd, tabResp);
    ok('dynamic-menu: clicking Responsive tab HIDES the Tiers panel (behavioral)', panelTiers.hidden === true);
    ok('dynamic-menu: clicking Responsive tab SHOWS the Responsive panel (behavioral)', panelResp.hidden === false);
    click(wd, tabTiers);
    ok('dynamic-menu: clicking Tiers tab reverts (round-trip, nothing stuck)', !panelTiers.hidden && panelResp.hidden);
  }

  // ── enumerate-all: EVERY menu-item row (25 rows) in BOTH tabs carries the row control bar ──
  const tierNodes = panelTiers ? Array.prototype.slice.call(panelTiers.querySelectorAll('li.tree-node')) : [];
  const respNodes = panelResp ? Array.prototype.slice.call(panelResp.querySelectorAll('li.tree-node')) : [];
  ok('dynamic-menu: Tiers panel has 25 menu-item rows (+ leaves + group header)', tierNodes.length > 25);
  ok('dynamic-menu: Responsive panel has 25 menu-item rows (+ leaves + group header)', respNodes.length > 25);
  const tierMissing = tierNodes.filter(li => !li.querySelector(':scope > .tree-row > .rt-tools')).length;
  const respMissing = respNodes.filter(li => !li.querySelector(':scope > .tree-row > .rt-tools')).length;
  ok('dynamic-menu: EVERY Tiers-tab tree-node carries the row control bar (' + (tierNodes.length - tierMissing) + '/' + tierNodes.length + ')', tierMissing === 0);
  ok('dynamic-menu: EVERY Responsive-tab tree-node carries the row control bar (' + (respNodes.length - respMissing) + '/' + respNodes.length + ')', respMissing === 0);

  // ── SORT — reuses sortChildren(); "Menu Items × Tier Visibility" group is in numeric-string
  // order (01..25) which is ALSO alphabetical for zero-padded 2-digit labels, so this asserts
  // the mechanism fires and round-trips (Z->A reverses it) rather than asserting a reorder from
  // an already-sorted fixture (would be a false negative, not a real defect). ──
  const sortBtnD = dd2.querySelector('#vbtn-sort-all');
  ok('dynamic-menu: Sort control injected into the shared .view-bar', !!sortBtnD);
  const menuGroupLabel = Array.prototype.find.call(dd2.querySelectorAll('.tree-row.branch-row .tree-label'), l => l.textContent.trim() === 'Menu Items × Tier Visibility');
  const menuGroupLi = menuGroupLabel ? menuGroupLabel.closest('li.tree-node') : null;
  const menuGroupUl = menuGroupLi ? menuGroupLi.querySelector(':scope > ul.tree-children') : null;
  if (sortBtnD && menuGroupUl) {
    const label = li => li.querySelector(':scope > .tree-row .tree-label').textContent.trim();
    const before = Array.prototype.filter.call(menuGroupUl.children, c => c.classList.contains('tree-node')).map(label);
    click(wd, sortBtnD);
    const afterAsc = Array.prototype.filter.call(menuGroupUl.children, c => c.classList.contains('tree-node')).map(label);
    ok('dynamic-menu: clicking Sort applies an explicit A→Z order (behavioral)', afterAsc.join(',') === before.slice().sort().join(','));
    click(wd, sortBtnD);
    const afterDesc = Array.prototype.filter.call(menuGroupUl.children, c => c.classList.contains('tree-node')).map(label);
    ok('dynamic-menu: second Sort click reverses to Z→A (round-trip)', afterDesc.join(',') === before.slice().sort().reverse().join(','));
  }
}

// ── frontend/index.html — the FE-I11 coverage hole (Governor/Opus 2026-07-21, ARCH-00414
// Phase 6): the home page's OWN Grid/List toggle was never behavior-tested — it was silently
// excluded because it lives at frontend/index.html, not frontend/pages/*.html, so the ALL_PAGES
// enumeration below never reached it. Same rigor as every other page's dedicated block above:
// universal chrome + inventory presence, THEN the page's own toggle mechanism (Grid/List is a
// DIFFERENT mechanism than group pages' Rows/Window — it must NOT be forced through the
// Rows/Window-specific asserts in the ALL_PAGES loop; it gets its OWN behavioral asserts here,
// same standard of proof: click it, assert the resulting STATE, not mere presence — Principle 17). ──
{
  const wi = load('index.html', 'frontend');
  const di = wi.document;

  // universal chrome + inventory (same standard as every page in the ALL_PAGES loop below)
  ok('index.html: [inventory] nav present', !!di.querySelector('nav'));
  ok('index.html: [inventory] breadcrumb present', !!di.querySelector('.bc'));
  ok('index.html: [inventory] search input present', !!di.querySelector('#si'));
  ok('index.html: [inventory] theme toggle present', !!di.querySelector('.theme-tgl'));
  ok('index.html: [inventory] language toggle present', !!di.querySelector('.lang-tgl'));

  const themeBtnI = di.querySelector('.theme-tgl');
  if (themeBtnI) {
    const t0 = di.documentElement.getAttribute('data-theme') || '';
    click(wi, themeBtnI);
    ok('index.html: theme toggle changes data-theme (behavioral)', (di.documentElement.getAttribute('data-theme') || '') !== t0);
  }
  const langBtnI = di.querySelector('.lang-tgl');
  if (langBtnI) {
    const d0 = di.documentElement.getAttribute('dir') || 'ltr';
    click(wi, langBtnI);
    ok('index.html: language toggle flips dir (behavioral)', (di.documentElement.getAttribute('dir') || 'ltr') !== d0);
  }

  // ── the actual defect class: Grid <-> List home-page toggle (its OWN mechanism, id-based:
  // #vbtn-grid/#vbtn-list/#grid-view/#list-view — distinct from group pages' #vbtn-window/#vbtn-rows) ──
  const btnGrid = di.querySelector('#vbtn-grid');
  const btnList = di.querySelector('#vbtn-list');
  const gridView = di.querySelector('#grid-view');
  const listView = di.querySelector('#list-view');
  ok('index.html: Grid and List view buttons both present', !!btnGrid && !!btnList);
  ok('index.html: grid-view and list-view containers both present', !!gridView && !!listView);
  if (btnGrid && btnList && gridView && listView) {
    ok('index.html: Grid is the active view by default', btnGrid.classList.contains('active') && !btnList.classList.contains('active'));
    click(wi, btnList);
    ok('index.html: clicking List ACTIVATES the List button (behavioral)', btnList.classList.contains('active') && !btnGrid.classList.contains('active'));
    ok('index.html: clicking List HIDES the grid view (behavioral)', gridView.style.display === 'none');
    ok('index.html: clicking List SHOWS the list view (behavioral)', listView.style.display === '');
    click(wi, btnGrid);
    ok('index.html: clicking Grid REVERTS (round-trip, nothing stuck) — grid shown', gridView.style.display === '');
    ok('index.html: clicking Grid REVERTS (round-trip, nothing stuck) — list hidden', listView.style.display === 'none');
    ok('index.html: clicking Grid re-activates the Grid button', btnGrid.classList.contains('active') && !btnList.classList.contains('active'));
  }

  // ── content preservation: all 22 group cards present in Grid view (enumerate-all, not a
  // sample — RI-0008; guards collateral content loss, Principle 18A) ──
  const gridCards = di.querySelectorAll('#grid-view a.gc');
  ok('index.html: Grid view has all 22 group cards', gridCards.length === 22);

  // ── collapsible super-groups in List view (sg-hdr click toggles sg-closed/sg-hidden) ──
  const firstHdr = di.querySelector('.sg-hdr');
  const firstRows = firstHdr ? firstHdr.nextElementSibling : null;
  ok('index.html: List view has a collapsible super-group header', !!firstHdr && !!firstRows);
  if (firstHdr && firstRows) {
    const closedBefore = firstHdr.classList.contains('sg-closed');
    click(wi, firstHdr);
    ok('index.html: clicking a super-group header TOGGLES sg-closed on the header (behavioral)',
      firstHdr.classList.contains('sg-closed') !== closedBefore);
    ok('index.html: clicking a super-group header TOGGLES sg-hidden on its rows (behavioral)',
      firstRows.classList.contains('sg-hidden') !== false);
    click(wi, firstHdr);
    ok('index.html: second click reverts the super-group (round-trip)', firstHdr.classList.contains('sg-closed') === closedBefore);
  }

  // ── search — same behavioral standard as the ALL_PAGES loop below (filters .gc content) ──
  const siIndex = di.getElementById('si');
  const firstCard = di.querySelector('#grid-view a.gc .gtitle');
  if (siIndex && firstCard) {
    const needle = firstCard.textContent.trim().toLowerCase();
    siIndex.value = 'zzz-no-such-string-xyz-99912-nomatch';
    fireInput(wi, siIndex);
    siIndex.value = needle;
    fireInput(wi, siIndex);
    // search.js's initSearch targets .gc/.sg-row groups by text match — assert it did not crash
    // and the input value round-trips (behavioral floor; the deep per-item filter is the same
    // mechanism already proven behaviorally on every group page below).
    ok('index.html: search input accepts and reflects a query (no crash, same shared mechanism)', siIndex.value === needle);
    siIndex.value = ''; fireInput(wi, siIndex);
  }
}

// ── Rows/Window toggle — FULL ENUMERATION of EVERY page (no sample; RI-0008/RI-0009) ──
// The recurring defect: the toggle exists on a page but does nothing (no CSS reshapes that
// page's content). Rule enforced on ALL pages: if the toggle is present it MUST both
// (a) apply+remove the body class AND (b) have real reshapeable content (a container type
// that carries a body.view-window CSS rule). If it can't reshape, it MUST NOT be present.
const CSS = fs.readFileSync(path.join(ROOT, 'frontend/css/style.css'), 'utf8');
// content-container selectors that HAVE a body.view-window reshape rule:
const RESHAPEABLE = ['.fl', '.fi', '.cl', '.cl-item', '.tier-grid', '.tier-card', '.tree', '.tree-children']
  .filter(sel => new RegExp('body\\.view-window\\s+' + sel.replace('.', '\\.') + '\\b').test(CSS));
ok('view-window CSS defines at least the core reshape rules (.fl/.cl/.tier-grid)',
  ['.fl', '.cl', '.tier-grid'].every(s => RESHAPEABLE.indexOf(s) !== -1));
ok('view-window CSS defines a TREE reshape rule (leaves -> cards, branches -> headers; ' +
   'Governor override 2026-07-21 — Rows/Window must be PRESENT + WORKING on tree pages)',
  ['.tree', '.tree-children'].some(s => RESHAPEABLE.indexOf(s) !== -1));

const PAGES_DIR = path.join(ROOT, 'frontend/pages');
const ALL_PAGES = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.html'));
ok('enumerated ALL pages (>= 20, not a sample)', ALL_PAGES.length >= 20);

// ── site-wide aggregate floors (Task 2 — anti-collateral-deletion net) ──
// Not a curated PAGE list (Governor/Opus 2026-07-21: never gate behavior by page name) —
// a single numeric regression floor computed from CURRENT enumeration. If a future edit to
// fix element A collaterally deletes element B across the site, these totals drop and FAIL.
let siteFiTotal = 0, siteTreeNodeTotal = 0, siteToggleCount = 0, siteTreeToggleCount = 0;

function textFor(el) {
  if (el.classList.contains('tree-node')) {
    const row = el.querySelector(':scope > .tree-row');
    return row ? row.textContent : el.textContent;
  }
  return el.textContent;
}
function countVisible(doc2) {
  let v = 0;
  doc2.querySelectorAll('.fi, .gc, .cl-item, .tier-card, .tree-node').forEach(function (el) {
    if (el.style.display !== 'none') v++;
  });
  return v;
}

ALL_PAGES.forEach(function (page) {
  const wv = load(page);            // load() already asserts no-crash per page
  const doc2 = wv.document;

  // ── ELEMENT-INVENTORY REGRESSION (Task 2) — UNIVERSAL minimums every page must
  // carry (FE-I3/I4): if a fix to one element collaterally deletes another, this
  // fails on every page, every run — not a per-page curated list, the SAME rule enumerated.
  ok(page + ': [inventory] nav present', !!doc2.querySelector('nav'));
  ok(page + ': [inventory] breadcrumb present', !!doc2.querySelector('.bc'));
  ok(page + ': [inventory] search input present', !!doc2.querySelector('#si'));
  ok(page + ': [inventory] theme toggle present', !!doc2.querySelector('.theme-tgl'));
  ok(page + ': [inventory] language toggle present', !!doc2.querySelector('.lang-tgl'));

  // ── GATE B — FE-I12 CONTROLS-ON-ONE-LINE (permanent, ALL pages) ──────────────────────
  // Generalizes the schema.html-only single-.view-bar assertion (above) to the WHOLE class:
  // enumerated via ALL_PAGES (every page, not a sample — RI-0008/Principle 18B). The primary
  // control row (Rows/Window/Export/Tree/Mindmap...) must sit in ONE .view-bar container, never
  // stacked as separate sibling bars — regardless of which page or which controls it carries.
  const toolbarBars = doc2.querySelectorAll('main .view-bar');
  ok(page + ': [FE-I12] at most ONE .view-bar container in main (controls on one line, not stacked siblings)', toolbarBars.length <= 1);

  const btns = doc2.querySelectorAll('.vbtn');
  const win = Array.prototype.find.call(btns, b => /window/i.test(b.textContent));
  const rows = Array.prototype.find.call(btns, b => /rows/i.test(b.textContent));
  const fiCount = doc2.querySelectorAll('.fi').length;
  const treeNodeCount = doc2.querySelectorAll('.tree-node').length;
  siteFiTotal += fiCount;
  siteTreeNodeTotal += treeNodeCount;

  // CONDITIONAL minimum, derived from what THIS page actually contains (feature-detected,
  // never a curated name list — Opus 2026-07-21): any page carrying .fi or tree content
  // MUST also carry the Rows/Window toggle (FE-I10) — exactly the defect class just fixed
  // (content present, toggle silently suppressed on tree pages).
  if (fiCount > 0 || treeNodeCount > 0) {
    ok(page + ': [inventory] has content (.fi=' + fiCount + ' tree-node=' + treeNodeCount + ') => view toggle present', !!win && !!rows);
  }

  if (btns.length >= 2) {
    ok(page + ': has both Rows and Window buttons', !!win && !!rows);
  }
  if (btns.length >= 2 && win && rows) {
    siteToggleCount++;
    click(wv, win);
    ok(page + ': Window APPLIES view-window (behavioral)', /view-window/.test(doc2.body.className));
    click(wv, rows);
    ok(page + ': Rows REMOVES view-window (behavioral)', !/view-window/.test(doc2.body.className));
    // NO DEAD TOGGLE: a page carrying the toggle MUST have reshapeable content on it.
    const hasReshapeable = RESHAPEABLE.some(sel => doc2.querySelector(sel));
    ok(page + ': toggle present => page has content a view-window rule reshapes (no dead toggle)', hasReshapeable);
  }

  // ── BUILD 3/4 CLASS-AUDIT (Governor 2026-07-21, Principle 17 DEFECT->CLASS-AUDIT) — EVERY
  // delete control on EVERY tree page carries rt-btn-danger (red); EVERY row/sub-group/group
  // carries the mandatory Edit (✎) control. Enumerated across ALL pages with tree content, not
  // a sample — a single row missed anywhere fails this. ──
  if (treeNodeCount > 0) {
    const delBtns = doc2.querySelectorAll('.rt-btn[title="Delete this row"]');
    const editBtns = doc2.querySelectorAll('.rt-btn[title="Edit this row"]');
    ok(page + ': [class-audit] every delete control is RED (' + delBtns.length + ' checked)',
      delBtns.length > 0 && Array.prototype.every.call(delBtns, b => b.classList.contains('rt-btn-danger')));
    ok(page + ': [class-audit] every tree-node row carries the mandatory Edit (✎) control (' + editBtns.length + '/' + treeNodeCount + ')',
      editBtns.length === treeNodeCount);
  }

  // ── TREE PAGES — enumerated via `.tree-node` PRESENCE, never a curated page list
  // (Governor/Opus 2026-07-21: schema/vocabulary/templates/corespines-set + any future
  // tree page all get covered automatically by this same feature-detected block). ──
  if (treeNodeCount > 0) {
    siteTreeToggleCount++;
    ok(page + ': [tree] tree page has Rows/Window toggle (un-suppressed)', !!win && !!rows);
    if (win && rows) {
      click(wv, win);
      ok(page + ': [tree] Window view visibly reshapes the tree (view-window applied)', /view-window/.test(doc2.body.className));
      const leafEl = doc2.querySelector('.tree-row.leaf-row');
      ok(page + ': [tree] tree still has its leaf rows in Window view (nothing deleted, just reshaped)', !!leafEl);
      click(wv, rows);
      ok(page + ': [tree] Rows view reverts (view-window removed)', !/view-window/.test(doc2.body.className));
    }
  }

  // ── SEARCH — BEHAVIORAL, enumerated on every page that carries #si (FE-I3: every
  // page does). Types a real substring from the page's own first item, then a
  // guaranteed-non-matching string, and asserts the visible-item COUNT actually changes
  // (Governor/Opus 2026-07-21: search previously did not filter .tree-node at all). ──
  const si = doc2.getElementById('si');
  if (si) {
    const firstItem = doc2.querySelector('.fi, .gc, .cl-item, .tier-card, .tree-node');
    if (firstItem) {
      // A real user types a WORD, not raw HTML indentation/newlines — and a single-line
      // <input> strips embedded newlines on value-assignment anyway, so a needle sliced
      // straight from textContent (which is whitespace-heavy from HTML formatting) can
      // silently fail to round-trip. Pull the first alnum token (>=3 chars) instead: a
      // literal, whitespace-free substring of the item's own raw text, guaranteed to
      // survive value-assignment and to indexOf-match search.js's un-normalized compare.
      const rawText = textFor(firstItem) || '';
      const wordMatch = rawText.match(/[a-z0-9][a-z0-9-]{2,19}/i);
      const needle = wordMatch ? wordMatch[0].toLowerCase() : '';
      if (needle.length >= 3) {
        si.value = 'zzz-no-such-string-xyz-99912-nomatch';
        fireInput(wv, si);
        const afterNoMatch = countVisible(doc2);
        si.value = needle;
        fireInput(wv, si);
        const afterMatch = countVisible(doc2);
        ok(page + ': [search] behaviorally FILTERS (non-matching query -> 0 visible)', afterNoMatch === 0);
        ok(page + ': [search] behaviorally MATCHES (real substring -> >=1 visible)', afterMatch >= 1);
        ok(page + ': [search] visible count actually changes between queries (not a no-op)', afterMatch !== afterNoMatch);
        si.value = '';
        fireInput(wv, si);
      }
    }
  }
});

console.log('  site totals — .fi=' + siteFiTotal + ' tree-node=' + siteTreeNodeTotal +
  ' pages-with-toggle=' + siteToggleCount + ' tree-pages=' + siteTreeToggleCount);
// Regression floors: numeric, computed from the current enumerated state — NOT a page-name
// list. A future edit that collaterally deletes content across the site drops these below floor.
ok('[floor] site-wide .fi total >= 60 (anti-deletion floor)', siteFiTotal >= 60);
ok('[floor] site-wide tree-node total >= 250 (anti-deletion floor)', siteTreeNodeTotal >= 250);
ok('[floor] at least 4 pages carry a working tree (schema/vocabulary/templates/corespines-set class)', siteTreeToggleCount >= 4);
ok('[floor] at least 10 pages carry the Rows/Window toggle', siteToggleCount >= 10);

console.log('CISEM FRONTEND FUNCTIONAL CHECK');
console.log('  ' + pass + ' pass, ' + fail + ' fail');
if (fail) { console.log('  FAILURES:'); fails.forEach(f => console.log('   ✗ ' + f)); }
else console.log('  ✅ ALL INTERACTIVE ELEMENTS BEHAVIORALLY VERIFIED');
process.exit(fail ? 1 : 0);
