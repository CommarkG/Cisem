/* CISEM Frontend — Client-side file list search */
(function () {
  function init() {
    var inp = document.getElementById('si');
    var cnt = document.getElementById('cnt');
    var nr  = document.getElementById('no-result');
    if (!inp) return;
    var items = document.querySelectorAll('.fi');
    var total = items.length;
    function upd() {
      var q = inp.value.toLowerCase().trim();
      var v = 0;
      items.forEach(function (el) {
        var show = !q || el.textContent.toLowerCase().indexOf(q) !== -1;
        el.style.display = show ? '' : 'none';
        if (show) v++;
      });
      if (cnt) cnt.textContent = q ? v + ' / ' + total : total + ' items';
      if (nr)  nr.style.display = (v === 0 && q) ? 'block' : 'none';
    }
    inp.addEventListener('input', upd);
    upd();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
