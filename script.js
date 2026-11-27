// NISHTECH VIL Mini site — keeps the footer year current. Vanilla JS.

(function () {
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
