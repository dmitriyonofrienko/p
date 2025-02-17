"use strict";

//fade up анимация для блоков с класом .fade-up
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var delay = entry.target.getAttribute("data-delay") || 0;
      setTimeout(function () {
        entry.target.classList.add("visible");
      }, delay);
    }
  });
}, {
  threshold: 0.15
});
document.querySelectorAll(".fade-up").forEach(function (el) {
  return observer.observe(el);
});
$(function () {
  $('.tlt').textillate();
});