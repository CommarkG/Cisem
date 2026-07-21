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

function load(rel) {
  const html = fs.readFileSync(path.join(ROOT, 'frontend/pages', rel), 'utf8');
  // Capture ANY uncaught error during init (jsdom routes listener exceptions to jsdomError).
  // A crash on load must FAIL the check — it can no longer hide behind other passing assertions (RI-0008).
  const loadErrors = [];
  const vc = new VirtualConsole();
  vc.on('jsdomError', e => loadErrors.push((e && e.message) || String(e)));
  const dom = new JSDOM(html, { runScripts: 'outside-only', pretendToBeVisual: true,
    url: 'http://localhost/frontend/pages/' + rel, virtualConsole: vc });
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
