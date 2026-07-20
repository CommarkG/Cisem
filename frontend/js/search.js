/* CISEM Frontend — Search + Collapse + View Toggle + Theme + Language + Tree Editor
   (CS-FRONTEND-001, FE-I2 — the ONE JS file; every page's behavior lives here,
   auto-injected by feature-detection, never by hand-editing per-page HTML.) */
(function () {

  // ── THEME TOGGLE (Dark/Bright — Phase 1.2) ──────────────────────────
  // Persists in localStorage; applies a [data-theme="light"] override on <html>
  // (single CSS block in style.css, FE-I5 tokens-only). Injected into .nav-r
  // on every page — same auto-inject pattern as initPageViewToggle (FE-I10).
  function initTheme() {
    var KEY = 'cisem-theme';
    var navR = document.querySelector('.nav-r');
    if (!navR) return;

    function apply(t) {
      if (t === 'light') document.documentElement.setAttribute('data-theme', 'light');
      else document.documentElement.removeAttribute('data-theme');
    }

    var saved = localStorage.getItem(KEY) === 'light' ? 'light' : 'dark';
    apply(saved);

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'ni theme-tgl';
    btn.id = 'theme-tgl';
    btn.title = 'Toggle dark / bright theme';
    btn.textContent = saved === 'light' ? '☀' : '☾'; // ☀ / ☾ (shows CURRENT theme)
    navR.insertBefore(btn, navR.firstChild);

    btn.addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      var next = cur === 'light' ? 'dark' : 'light';
      apply(next);
      localStorage.setItem(KEY, next);
      btn.textContent = next === 'light' ? '☀' : '☾';
    });
  }

  // ── LANGUAGE TOGGLE (EN/HE — Phase 1.3) ─────────────────────────────
  // EN is default + fully populated (untouched page content = EN passthrough).
  // HE: real strings for the small set of universal nav/chrome elements (proof
  // the mechanism works); everything else is an honest stub/passthrough (same
  // EN text) — dir/lang state genuinely flips and persists either way.
  var I18N = {
    en: {
      'nav.index': 'Index ▾',
      'nav.search.ph': 'Filter...',
      'nav.tbr.title': 'To Be Reviewed & Created',
      'nav.help.title': 'Help',
      'bc.back.title': 'Back',
      'bc.forward.title': 'Forward',
      'nav.home': 'Home'
    },
    he: {
      'nav.index': 'אינדקס ▾',
      'nav.search.ph': 'סנן...',
      'nav.tbr.title': 'לבדיקה וליצירה',
      'nav.help.title': 'עזרה',
      'bc.back.title': 'אחורה',
      'bc.forward.title': 'קדימה',
      'nav.home': 'בית'
    }
  };

  function initLang() {
    var KEY = 'cisem-lang';
    var navR = document.querySelector('.nav-r');
    if (!navR) return;

    // tag the universal chrome elements with data-i18n hooks (JS-injected,
    // same auto-inject convention as the rest of this file — no HTML edits)
    var idxLbl = document.querySelector('.idx-lbl');
    if (idxLbl) idxLbl.setAttribute('data-i18n', 'nav.index');
    var si = document.getElementById('si');
    if (si) si.setAttribute('data-i18n-ph', 'nav.search.ph');
    var tbr = document.querySelector('.nav-r a[href*="to-be-reviewed"]');
    if (tbr) tbr.setAttribute('data-i18n-title', 'nav.tbr.title');
    var help = document.querySelector('.nav-r a[href*="help.html"]');
    if (help) help.setAttribute('data-i18n-title', 'nav.help.title');
    var back = document.querySelector('.bc-arr[title="Back"]');
    if (back) back.setAttribute('data-i18n-title', 'bc.back.title');
    var fwd = document.querySelector('.bc-arr[title="Forward"]');
    if (fwd) fwd.setAttribute('data-i18n-title', 'bc.forward.title');
    var homeCrumb = document.querySelector('.bc a[href$="index.html"]');
    if (homeCrumb) {
      homeCrumb.setAttribute('data-i18n', 'nav.home');
    } else {
      var bc = document.querySelector('.bc');
      if (bc) {
        var spans = bc.querySelectorAll('span:not(.sep)');
        if (spans.length) spans[0].setAttribute('data-i18n', 'nav.home');
      }
    }

    function apply(l) {
      document.documentElement.setAttribute('lang', l);
      document.documentElement.setAttribute('dir', l === 'he' ? 'rtl' : 'ltr');
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var k = el.getAttribute('data-i18n');
        el.textContent = (I18N[l] && I18N[l][k]) || I18N.en[k] || el.textContent;
      });
      document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
        var k = el.getAttribute('data-i18n-ph');
        el.placeholder = (I18N[l] && I18N[l][k]) || I18N.en[k] || el.placeholder;
      });
      document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
        var k = el.getAttribute('data-i18n-title');
        el.title = (I18N[l] && I18N[l][k]) || I18N.en[k] || el.title;
      });
    }

    var saved = localStorage.getItem(KEY) === 'he' ? 'he' : 'en';
    apply(saved);

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'ni lang-tgl';
    btn.id = 'lang-tgl';
    btn.title = 'Switch language (EN / HE)';
    btn.textContent = saved === 'he' ? 'עב' : 'EN'; // shows CURRENT language
    navR.insertBefore(btn, navR.firstChild);

    btn.addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('lang') === 'he' ? 'he' : 'en';
      var next = cur === 'he' ? 'en' : 'he';
      apply(next);
      localStorage.setItem(KEY, next);
      btn.textContent = next === 'he' ? 'עב' : 'EN';
    });
  }

  // ── SEARCH (works on .fi file rows AND .gc grid cards) ─────────────
  function initSearch() {
    var inp = document.getElementById('si');
    var cnt = document.getElementById('cnt');
    var nr  = document.getElementById('no-result');
    if (!inp) return;
    var items = document.querySelectorAll('.fi, .gc, .cl-item, .tier-card');
    var total = items.length;
    function upd() {
      var q = inp.value.toLowerCase().trim();
      var v = 0;
      items.forEach(function (el) {
        var show = !q || el.textContent.toLowerCase().indexOf(q) !== -1;
        el.style.display = show ? '' : 'none';
        if (show) v++;
      });
      if (cnt) cnt.textContent = q ? v + ' / ' + total : (total ? total + ' items' : '');
      if (nr)  nr.style.display = (v === 0 && q) ? 'block' : 'none';
    }
    inp.addEventListener('input', upd);
    upd();
  }

  // ── COLLAPSIBLE SECTION HEADERS (.sh toggles the next .fl list) ────
  function initCollapse() {
    document.querySelectorAll('.sh').forEach(function (sh) {
      // Collapse ALL following siblings until the next .sh — works for any content
      // type after the header (.fl lists, .cl-item rows, .tier-card/.card grids, etc.),
      // not just a single .fl (fixed 2026-07-18: enriched pages broke the .fl-only assumption).
      sh.addEventListener('click', function () {
        var closed = sh.classList.toggle('sh-closed');
        var el = sh.nextElementSibling;
        while (el && !el.classList.contains('sh')) {
          el.classList.toggle('sh-hidden', closed); // force in sync with header state
          el = el.nextElementSibling;
        }
      });
    });
  }

  // ── ROWS / WINDOW VIEW TOGGLE (auto-injected on group pages with .fi items) ──
  function initPageViewToggle() {
    var items = document.querySelectorAll('.fi');
    if (!items.length) return; // placeholder / help pages — skip

    // Build toggle bar and insert before the first .sh, or after pg-desc
    var bar = document.createElement('div');
    bar.className = 'view-bar';
    bar.innerHTML =
      '<button class="vbtn active" id="vbtn-rows">&#8801; Rows</button>' +
      '<button class="vbtn" id="vbtn-window">&#9635; Window</button>';

    var mainEl  = document.querySelector('main');
    var firstSh = mainEl && mainEl.querySelector('.sh');
    var pgDesc  = mainEl && mainEl.querySelector('.pg-desc');
    if (firstSh) {
      mainEl.insertBefore(bar, firstSh);
    } else if (pgDesc && pgDesc.nextSibling) {
      mainEl.insertBefore(bar, pgDesc.nextSibling);
    } else if (mainEl) {
      mainEl.appendChild(bar);
    }

    var btnR = bar.querySelector('#vbtn-rows');
    var btnW = bar.querySelector('#vbtn-window');

    btnR.addEventListener('click', function () {
      document.body.classList.remove('view-window');
      btnR.classList.add('active'); btnW.classList.remove('active');
    });
    btnW.addEventListener('click', function () {
      document.body.classList.add('view-window');
      btnW.classList.add('active'); btnR.classList.remove('active');
    });
  }

  // ── COLLAPSIBLE TREE (VS-Code-explorer style — .tree-row.branch-row toggles ──
  // the immediately-following .tree-children <ul>. Keyboard-friendly: focusable,
  // Enter/Space toggles. Leaf rows (.leaf-row) are inert — no listener attached.
  function initTreeToggle() {
    document.querySelectorAll('.tree-row.branch-row').forEach(function (row) {
      row.setAttribute('tabindex', '0');
      row.setAttribute('role', 'button');
      // Robust child lookup: the editor inserts a .rt-panel after the row, so
      // nextElementSibling is unreliable — always find the child <ul> via the parent <li>.
      var kids = row.parentElement && row.parentElement.querySelector(':scope > ul.tree-children');
      row.setAttribute('aria-expanded', String(kids ? !kids.classList.contains('tree-collapsed') : false));
      function toggle() {
        var children = row.parentElement && row.parentElement.querySelector(':scope > ul.tree-children');
        if (!children) return;
        var collapsed = children.classList.toggle('tree-collapsed');
        var tgl = row.querySelector('.tree-toggle');
        if (tgl) tgl.textContent = collapsed ? '+' : '−'; // − (minus)
        row.setAttribute('aria-expanded', String(!collapsed));
      }
      row.addEventListener('click', toggle);
      row.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
      });
    });
  }

  // ── VIEW TOGGLE (index.html home page: grid ↔ grouped list) ────────
  function initViewToggle() {
    var btnG = document.getElementById('vbtn-grid');
    var btnL = document.getElementById('vbtn-list');
    var gv   = document.getElementById('grid-view');
    var lv   = document.getElementById('list-view');
    if (!btnG || !btnL || !gv) return;

    btnG.addEventListener('click', function () {
      btnG.classList.add('active');   btnL.classList.remove('active');
      gv.style.display = '';
      if (lv) lv.style.display = 'none';
    });
    btnL.addEventListener('click', function () {
      btnL.classList.add('active');   btnG.classList.remove('active');
      gv.style.display = 'none';
      if (lv) lv.style.display = '';
    });

    // Collapsible super-groups in list view
    document.querySelectorAll('.sg-hdr').forEach(function (h) {
      var rows = h.nextElementSibling;
      if (!rows) return;
      h.addEventListener('click', function () {
        h.classList.toggle('sg-closed');
        rows.classList.toggle('sg-hidden');
      });
    });
  }

  // ═════════════════════════════════════════════════════════════════
  // PHASE 2 — TREE ROW EDITOR (schema.html / vocabulary.html /
  // corespines-set.html only — self-detects via .tree-row presence;
  // zero HTML edits, FE-I2 single-JS honored). DOM-based operations +
  // localStorage persistence + Blob-download + window.print(). No
  // framework. Never writes to disk/git — captures a changeset for
  // Opus to review + commit (§1.7).
  // ═════════════════════════════════════════════════════════════════

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function safeName(s) { return String(s).replace(/[^a-z0-9.\-]/gi, '_'); }

  function downloadBlob(filename, content, mime) {
    var blob = new Blob([content], { type: mime || 'text/plain' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  function initTreeEditor() {
    if (!document.querySelector('.tree-row')) return; // only tree pages

    var CHKEY = 'cisem-changeset:' + (location.pathname.split('/').pop() || 'page');

    function loadChangeset() {
      try {
        var raw = JSON.parse(localStorage.getItem(CHKEY));
        return raw || defaultChangeset();
      } catch (e) { return defaultChangeset(); }
    }
    function defaultChangeset() {
      return { adds: [], deletes: [], order: {}, comments: {}, uploads: {}, moved: [] };
    }
    function saveChangeset(cs) {
      try { localStorage.setItem(CHKEY, JSON.stringify(cs)); }
      catch (e) { window.alert('CISEM editor: could not save (storage limit reached). Export your changeset, then clear an upload to free space.'); }
    }

    // ── nid assignment: deterministic path from each tree root's DOM order ──
    function assignTreeIds() {
      function walk(ul, nid) {
        ul.setAttribute('data-nid', nid);
        var idx = 0;
        Array.prototype.forEach.call(ul.children, function (li) {
          if (!li.classList || !li.classList.contains('tree-node')) return;
          var childNid = nid + '.' + idx;
          li.setAttribute('data-nid', childNid);
          idx++;
          var childUl = li.querySelector(':scope > ul.tree-children');
          if (childUl) walk(childUl, childNid);
        });
      }
      document.querySelectorAll('ul.tree').forEach(function (rootUl, ti) { walk(rootUl, 't' + ti); });
    }

    function promoteToBranch(li) {
      var row = li.querySelector(':scope > .tree-row');
      if (!row || row.classList.contains('branch-row')) return;
      row.classList.remove('leaf-row');
      row.classList.add('branch-row');
      var tgl = row.querySelector('.tree-toggle');
      if (tgl) { tgl.classList.remove('leaf'); tgl.textContent = '−'; }
      row.setAttribute('tabindex', '0');
      row.setAttribute('role', 'button');
      row.setAttribute('aria-expanded', 'true');
      row.addEventListener('click', function (e) {
        if (e.target.closest('.rt-tools')) return;
        var kidsUl = li.querySelector(':scope > ul.tree-children');
        if (!kidsUl) return;
        var collapsed = kidsUl.classList.toggle('tree-collapsed');
        var t = row.querySelector('.tree-toggle');
        if (t) t.textContent = collapsed ? '+' : '−';
        row.setAttribute('aria-expanded', String(!collapsed));
      });
    }

    function renderAddedChild(parentLi, add) {
      var childUl = parentLi.querySelector(':scope > ul.tree-children');
      if (!childUl) {
        childUl = document.createElement('ul');
        childUl.className = 'tree-children';
        childUl.setAttribute('data-nid', parentLi.getAttribute('data-nid'));
        parentLi.appendChild(childUl);
        promoteToBranch(parentLi);
      }
      var li = document.createElement('li');
      li.className = 'tree-node';
      li.setAttribute('data-nid', add.id);
      li.innerHTML = '<div class="tree-row leaf-row"><span class="tree-toggle leaf">·</span>' +
        '<span class="tree-label">' + escapeHtml(add.label) + '</span>' +
        (add.note ? '<span class="tree-note">' + escapeHtml(add.note) + '</span>' : '') +
        '<span class="tree-badge added">ADDED</span></div>';
      childUl.appendChild(li);
      return li;
    }

    function persistOrder(parentUl) {
      if (!parentUl) return;
      var parentNid = parentUl.getAttribute('data-nid');
      if (!parentNid) return;
      var order = [];
      Array.prototype.forEach.call(parentUl.children, function (c) {
        if (c.classList.contains('tree-node')) order.push(c.getAttribute('data-nid'));
      });
      var cs = loadChangeset();
      cs.order[parentNid] = order;
      saveChangeset(cs);
    }

    function moveRow(li, dir) {
      var parentUl = li.parentElement;
      var sibling = dir === 'up' ? li.previousElementSibling : li.nextElementSibling;
      while (sibling && !sibling.classList.contains('tree-node')) {
        sibling = dir === 'up' ? sibling.previousElementSibling : sibling.nextElementSibling;
      }
      if (!sibling) return;
      if (dir === 'up') parentUl.insertBefore(li, sibling);
      else parentUl.insertBefore(sibling, li);
      persistOrder(parentUl);
    }

    function collectMoveDestinations(li) {
      var nid = li.getAttribute('data-nid');
      var parentUl = li.parentElement;
      var grandLi = parentUl.parentElement;
      if (!grandLi || !grandLi.classList || !grandLi.classList.contains('tree-node')) return [];
      var container = grandLi.parentElement;
      if (!container) return [];
      var out = [];
      Array.prototype.forEach.call(container.children, function (sib) {
        if (!sib.classList.contains('tree-node')) return;
        if (sib === grandLi) return; // already there
        var kidsUl = sib.querySelector(':scope > ul.tree-children');
        if (!kidsUl) return; // only groups with a children-container are valid destinations
        if (nid.indexOf(sib.getAttribute('data-nid')) === 0) return; // guard against moving into own subtree
        var lbl = sib.querySelector(':scope > .tree-row .tree-label');
        out.push({ nid: kidsUl.getAttribute('data-nid'), label: lbl ? lbl.textContent.trim() : sib.getAttribute('data-nid') });
      });
      return out;
    }

    function moveToGroup(li, targetNid) {
      var targetUl = document.querySelector('ul[data-nid="' + targetNid + '"]');
      if (!targetUl || targetUl === li.parentElement) return;
      var oldParentUl = li.parentElement;
      var nid = li.getAttribute('data-nid');
      targetUl.appendChild(li);
      persistOrder(oldParentUl);
      persistOrder(targetUl);
      var cs = loadChangeset();
      cs.moved = cs.moved || [];
      cs.moved.push({ nid: nid, toParent: targetNid, ts: new Date().toISOString() });
      saveChangeset(cs);
    }

    function deleteRow(li) {
      if (!window.confirm('Delete this row (and any children under it)? This is captured in the changeset, not applied to the repo directly.')) return;
      var nid = li.getAttribute('data-nid');
      var cs = loadChangeset();
      if (cs.deletes.indexOf(nid) === -1) cs.deletes.push(nid);
      saveChangeset(cs);
      li.remove();
    }

    function addChild(li) {
      var label = window.prompt('New row label:');
      if (!label) return;
      var note = window.prompt('Note (optional):') || '';
      var nid = li.getAttribute('data-nid');
      var cs = loadChangeset();
      var addEntry = { id: nid + '.custom-' + Date.now(), parentNid: nid, label: label, note: note, ts: new Date().toISOString() };
      cs.adds.push(addEntry);
      saveChangeset(cs);
      var newLi = renderAddedChild(li, addEntry);
      wireRowToolbar(li);    // parent may have just been promoted to a branch — refresh its toolbar
      wireRowToolbar(newLi);
    }

    function sortChildren(li) {
      var ul = li.querySelector(':scope > ul.tree-children');
      if (!ul) return;
      var items = Array.prototype.filter.call(ul.children, function (c) { return c.classList.contains('tree-node'); });
      var asc = ul.getAttribute('data-sort') !== 'asc';
      items.sort(function (a, b) {
        var la = (a.querySelector('.tree-label') || {}).textContent || '';
        var lb = (b.querySelector('.tree-label') || {}).textContent || '';
        return asc ? la.localeCompare(lb) : lb.localeCompare(la);
      });
      items.forEach(function (it) { ul.appendChild(it); });
      ul.setAttribute('data-sort', asc ? 'asc' : 'desc');
      persistOrder(ul);
    }

    function renderRowPanel(li) {
      var nid = li.getAttribute('data-nid');
      var row = li.querySelector(':scope > .tree-row');
      if (!row) return;
      var panel = li.querySelector(':scope > .rt-panel');
      var cs = loadChangeset();
      var cmts = (cs.comments && cs.comments[nid]) || [];
      var ups = (cs.uploads && cs.uploads[nid]) || [];
      if (!panel) {
        panel = document.createElement('div');
        panel.className = 'rt-panel';
        row.insertAdjacentElement('afterend', panel);
      }
      var html = '';
      if (cmts.length) {
        html += '<div class="rt-comments">' + cmts.map(function (c) {
          return '<div class="rt-comment' + (c.status === 'PARKED' ? ' rt-parked' : '') + '">' +
            '<span class="rt-c-badge">' + c.status + '</span>' + escapeHtml(c.text) +
            '<span class="rt-c-ts">' + c.ts + '</span></div>';
        }).join('') + '</div>';
      }
      if (ups.length) {
        html += '<div class="rt-uploads">' + ups.map(function (u) {
          return '<span class="rt-upload-chip">\u{1F4CE} ' + escapeHtml(u.filename) + '</span>';
        }).join('') + '</div>';
      }
      panel.innerHTML = html;
      panel.style.display = (cmts.length || ups.length) ? '' : 'none';
    }

    function addComment(li, status) {
      var text = window.prompt(status === 'PARKED' ? 'Park a suggestion (text):' : 'Add a comment:');
      if (!text) return;
      var nid = li.getAttribute('data-nid');
      var cs = loadChangeset();
      cs.comments[nid] = cs.comments[nid] || [];
      cs.comments[nid].push({ text: text, ts: new Date().toISOString(), status: status });
      saveChangeset(cs);
      renderRowPanel(li);
    }

    function wireUpload(li, input) {
      input.addEventListener('change', function () {
        var file = input.files && input.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function () {
          var nid = li.getAttribute('data-nid');
          var cs = loadChangeset();
          cs.uploads[nid] = cs.uploads[nid] || [];
          cs.uploads[nid].push({ filename: file.name, content: reader.result, ts: new Date().toISOString() });
          saveChangeset(cs);
          renderRowPanel(li);
        };
        reader.readAsDataURL(file); // universal (text or binary), captured for the export bundle only
        input.value = '';
      });
    }

    function nodeToMD(li, depth, includeChildren, cs) {
      cs = cs || loadChangeset();
      var row = li.querySelector(':scope > .tree-row');
      var label = row && row.querySelector('.tree-label') ? row.querySelector('.tree-label').textContent.trim() : '';
      var note  = row && row.querySelector('.tree-note')  ? row.querySelector('.tree-note').textContent.trim()  : '';
      var badge = row && row.querySelector('.tree-badge') ? row.querySelector('.tree-badge').textContent.trim() : '';
      var tag   = row && row.querySelector('.tree-tag')   ? row.querySelector('.tree-tag').textContent.trim()   : '';
      var indent = '  '.repeat(depth);
      var lines = [indent + '- **' + label + '**' + (badge ? ' [' + badge + ']' : '') + (tag ? ' _(' + tag + ')_' : '') + (note ? ' — ' + note : '')];
      var nid = li.getAttribute('data-nid');
      var cmts = (cs.comments && cs.comments[nid]) || [];
      cmts.forEach(function (c) { lines.push(indent + '  > [' + c.status + '] ' + c.text + ' (' + c.ts + ')'); });
      if (includeChildren !== false) {
        var childUl = li.querySelector(':scope > ul.tree-children');
        if (childUl) {
          Array.prototype.forEach.call(childUl.children, function (childLi) {
            if (childLi.classList.contains('tree-node')) lines = lines.concat(nodeToMD(childLi, depth + 1, true, cs));
          });
        }
      }
      return lines;
    }

    function exportRowMD(li) {
      var nid = li.getAttribute('data-nid');
      downloadBlob('cisem-row-' + safeName(nid) + '.md', '# CISEM Row Export — ' + nid + '\n\n' + nodeToMD(li, 0, false).join('\n') + '\n', 'text/markdown');
    }
    function exportGroupMD(li) {
      var nid = li.getAttribute('data-nid');
      downloadBlob('cisem-group-' + safeName(nid) + '.md', '# CISEM Group Export — ' + nid + '\n\n' + nodeToMD(li, 0, true).join('\n') + '\n', 'text/markdown');
    }

    function ensurePrintStage() {
      var el = document.getElementById('print-stage');
      if (!el) { el = document.createElement('div'); el.id = 'print-stage'; document.body.appendChild(el); }
      return el;
    }
    function printNode(li, title, includeChildren) {
      var stage = ensurePrintStage();
      var lines = nodeToMD(li, 0, includeChildren);
      stage.innerHTML = '<h1>' + escapeHtml(title) + '</h1><pre>' + escapeHtml(lines.join('\n')) + '</pre>';
      document.body.classList.add('printing-scoped');
      window.print();
      document.body.classList.remove('printing-scoped');
      stage.innerHTML = '';
    }

    function wireRowToolbar(li) {
      var row = li.querySelector(':scope > .tree-row');
      if (!row) return;
      var existing = row.querySelector('.rt-tools');
      if (existing) existing.remove(); // idempotent rebuild (needed after a leaf is promoted to a branch)

      var hasKids = !!li.querySelector(':scope > ul.tree-children');
      var tools = document.createElement('span');
      tools.className = 'rt-tools';

      function mkBtn(label, title, fn) {
        var b = document.createElement('button');
        b.type = 'button'; b.className = 'rt-btn'; b.textContent = label; b.title = title;
        b.addEventListener('click', function (e) { e.stopPropagation(); fn(); });
        tools.appendChild(b);
        return b;
      }

      mkBtn('+', 'Add child row', function () { addChild(li); });
      mkBtn('×', 'Delete this row', function () { deleteRow(li); });
      mkBtn('↑', 'Move up', function () { moveRow(li, 'up'); });
      mkBtn('↓', 'Move down', function () { moveRow(li, 'down'); });

      var destinations = collectMoveDestinations(li);
      if (destinations.length) {
        var sel = document.createElement('select');
        sel.className = 'rt-move-sel';
        sel.title = 'Move this row to a different sub-group / group';
        var optDefault = document.createElement('option');
        optDefault.textContent = '→ move to…'; optDefault.value = '';
        sel.appendChild(optDefault);
        destinations.forEach(function (d) {
          var o = document.createElement('option'); o.value = d.nid; o.textContent = d.label; sel.appendChild(o);
        });
        sel.addEventListener('click', function (e) { e.stopPropagation(); });
        sel.addEventListener('change', function (e) {
          e.stopPropagation();
          if (sel.value) moveToGroup(li, sel.value);
          sel.value = '';
        });
        tools.appendChild(sel);
      }

      mkBtn('\u{1F4AC}', 'Add a comment', function () { addComment(li, 'COMMENT'); });
      mkBtn('\u{1F4CC}', 'Park a suggestion', function () { addComment(li, 'PARKED'); });

      var fileInput = document.createElement('input');
      fileInput.type = 'file'; fileInput.className = 'rt-file-input';
      fileInput.addEventListener('click', function (e) { e.stopPropagation(); });
      wireUpload(li, fileInput);
      mkBtn('\u{1F4CE}', 'Upload a file (captured into the export bundle — never written to the repo directly)', function () { fileInput.click(); });
      tools.appendChild(fileInput);

      mkBtn('MD', 'Export this row as Markdown', function () { exportRowMD(li); });
      mkBtn('PDF', 'Export this row as PDF (browser print)', function () { printNode(li, 'CISEM Row Export', false); });

      if (hasKids) {
        mkBtn('⇅', 'Sort children A→Z / Z→A', function () { sortChildren(li); });
        mkBtn('GMD', 'Export this whole group (incl. children) as Markdown', function () { exportGroupMD(li); });
        mkBtn('GPDF', 'Export this whole group (incl. children) as PDF (browser print)', function () { printNode(li, 'CISEM Group Export', true); });
      }

      row.appendChild(tools);
      renderRowPanel(li);
    }

    function applyDeletes(cs) {
      (cs.deletes || []).forEach(function (nid) {
        var el = document.querySelector('li[data-nid="' + nid + '"]');
        if (el) el.remove();
      });
    }
    function applyMoves(cs) {
      (cs.moved || []).forEach(function (m) {
        var el = document.querySelector('li[data-nid="' + m.nid + '"]');
        var target = document.querySelector('ul[data-nid="' + m.toParent + '"]');
        if (el && target) target.appendChild(el);
      });
    }
    function applyAdds(cs) {
      (cs.adds || []).forEach(function (a) {
        if ((cs.deletes || []).indexOf(a.id) !== -1) return;
        var parent = document.querySelector('li[data-nid="' + a.parentNid + '"]');
        if (!parent) return;
        renderAddedChild(parent, a);
      });
    }
    function applyOrder(cs) {
      Object.keys(cs.order || {}).forEach(function (parentNid) {
        var parentUl = document.querySelector('ul[data-nid="' + parentNid + '"]');
        if (!parentUl) return;
        (cs.order[parentNid] || []).forEach(function (nid) {
          var el = parentUl.querySelector(':scope > li[data-nid="' + nid + '"]');
          if (el) parentUl.appendChild(el);
        });
      });
    }

    function addChangesetButton() {
      var bar = document.querySelector('.view-bar');
      if (!bar) return; // these 3 pages always have a Source Files .fl block -> bar exists (FE-I10)
      var btn = document.createElement('button');
      btn.className = 'vbtn cs-export-btn';
      btn.id = 'export-changeset-btn';
      btn.textContent = '⬇ Export Changeset';
      btn.title = 'Download every local edit (adds/deletes/reorders/moves/comments/parked/uploads) as one file for Opus to review + commit';
      btn.addEventListener('click', exportChangeset);
      bar.appendChild(btn);
    }

    function exportChangeset() {
      var cs = loadChangeset();
      var page = location.pathname.split('/').pop() || 'page';
      var md = '# CISEM Frontend Changeset — ' + page + '\n\n' +
        '_Generated ' + new Date().toISOString() + ' — staged for Opus review + commit (CLAUDE.md §1.7: the page captures, Opus commits, never auto-written to git)._\n\n';
      md += '## Adds (' + cs.adds.length + ')\n' + (cs.adds.length ? cs.adds.map(function (a) {
        return '- `' + a.id + '` under `' + a.parentNid + '`: **' + a.label + '**' + (a.note ? ' — ' + a.note : '');
      }).join('\n') : '_none_') + '\n\n';
      md += '## Deletes (' + cs.deletes.length + ')\n' + (cs.deletes.length ? cs.deletes.map(function (d) { return '- `' + d + '`'; }).join('\n') : '_none_') + '\n\n';
      var moved = cs.moved || [];
      md += '## Moves (' + moved.length + ')\n' + (moved.length ? moved.map(function (m) { return '- `' + m.nid + '` → `' + m.toParent + '` (' + m.ts + ')'; }).join('\n') : '_none_') + '\n\n';
      var orderKeys = Object.keys(cs.order || {});
      md += '## Reorders (' + orderKeys.length + ' groups)\n' + (orderKeys.length ? orderKeys.map(function (p) { return '- `' + p + '`: ' + cs.order[p].join(' → '); }).join('\n') : '_none_') + '\n\n';
      var cCount = 0, pCount = 0;
      Object.keys(cs.comments || {}).forEach(function (k) { cs.comments[k].forEach(function (c) { c.status === 'PARKED' ? pCount++ : cCount++; }); });
      md += '## Comments (' + cCount + ') / Parked Suggestions (' + pCount + ')\n';
      Object.keys(cs.comments || {}).forEach(function (nid) {
        cs.comments[nid].forEach(function (c) { md += '- `' + nid + '` [' + c.status + '] ' + c.text + ' _(at ' + c.ts + ')_\n'; });
      });
      var upKeys = Object.keys(cs.uploads || {});
      md += '\n## Uploads (' + upKeys.length + ' rows)\n';
      upKeys.forEach(function (nid) { cs.uploads[nid].forEach(function (u) { md += '- `' + nid + '`: ' + u.filename + ' (' + u.ts + ')\n'; }); });
      md += '\n## Raw JSON (for Opus to apply/commit)\n```json\n' + JSON.stringify(cs, null, 2) + '\n```\n';
      downloadBlob('cisem-changeset-' + page.replace('.html', '') + '-' + Date.now() + '.md', md, 'text/markdown');
    }

    // ── boot sequence ──
    assignTreeIds();
    var cs0 = loadChangeset();
    applyDeletes(cs0);
    applyMoves(cs0);
    applyAdds(cs0);
    document.querySelectorAll('li.tree-node').forEach(function (li) { wireRowToolbar(li); });
    applyOrder(cs0);
    addChangesetButton();
  }

  function init() {
    initTheme();
    initLang();
    initSearch();
    initCollapse();
    initPageViewToggle(); // group pages — auto-injects Rows/Window toggle
    initViewToggle();     // home page only — Grid/List toggle
    initTreeToggle();     // schema/vocabulary/corespines-set — collapsible tree rows
    initTreeEditor();     // Phase 2 — self-detects .tree-row (same 3 pages), no-op elsewhere
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();
})();
