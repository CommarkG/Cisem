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
// page's content). Rule enforced on ALL 25 pages: if the toggle is present it MUST both
// (a) apply+remove the body class AND (b) have real reshapeable content (a container type
// that carries a body.view-window CSS rule). If it can't reshape, it MUST NOT be present.
const CSS = fs.readFileSync(path.join(ROOT, 'frontend/css/style.css'), 'utf8');
// content-container selectors that HAVE a body.view-window reshape rule:
const RESHAPEABLE = ['.fl', '.fi', '.cl', '.cl-item', '.tier-grid', '.tier-card']
  .filter(sel => new RegExp('body\\.view-window\\s+' + sel.replace('.', '\\.')).test(CSS));
ok('view-window CSS defines at least the core reshape rules (.fl/.cl/.tier-grid)',
  ['.fl', '.cl', '.tier-grid'].every(s => RESHAPEABLE.indexOf(s) !== -1));

const PAGES_DIR = path.join(ROOT, 'frontend/pages');
const ALL_PAGES = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.html'));
ok('enumerated ALL pages (>= 20, not a sample)', ALL_PAGES.length >= 20);
ALL_PAGES.forEach(function (page) {
  const wv = load(page);            // load() already asserts no-crash per page
  const btns = wv.document.querySelectorAll('.vbtn');
  if (btns.length >= 2) {
    const body = wv.document.body;
    const win = Array.prototype.find.call(btns, b => /window/i.test(b.textContent));
    const rows = Array.prototype.find.call(btns, b => /rows/i.test(b.textContent));
    ok(page + ': has both Rows and Window buttons', !!win && !!rows);
    if (win && rows) {
      click(wv, win);
      ok(page + ': Window APPLIES view-window (behavioral)', /view-window/.test(body.className));
      click(wv, rows);
      ok(page + ': Rows REMOVES view-window (behavioral)', !/view-window/.test(body.className));
    }
    // NO DEAD TOGGLE: a page carrying the toggle MUST have reshapeable content on it.
    const hasReshapeable = RESHAPEABLE.some(sel => wv.document.querySelector(sel));
    ok(page + ': toggle present => page has content a view-window rule reshapes (no dead toggle)', hasReshapeable);
  }
  // pages WITHOUT the toggle (tree pages, placeholders) are fine — nothing to assert.
});

console.log('CISEM FRONTEND FUNCTIONAL CHECK');
console.log('  ' + pass + ' pass, ' + fail + ' fail');
if (fail) { console.log('  FAILURES:'); fails.forEach(f => console.log('   ✗ ' + f)); }
else console.log('  ✅ ALL INTERACTIVE ELEMENTS BEHAVIORALLY VERIFIED');
process.exit(fail ? 1 : 0);
