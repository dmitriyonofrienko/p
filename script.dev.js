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
}); //smooth scroll

var scrollY = window.scrollY;
var speed = 0.07; // Регулируй инерцию (0.05 - сильнее, 0.2 - слабее)

var isScrolling;

function smoothScroll() {
  scrollY += (window.scrollY - scrollY) * speed;
  window.scrollTo(0, scrollY);

  if (Math.abs(window.scrollY - scrollY) > 0.5) {
    isScrolling = requestAnimationFrame(smoothScroll);
  } else {
    cancelAnimationFrame(isScrolling);
  }
}

window.addEventListener("scroll", function () {
  if (!isScrolling) {
    smoothScroll();
  }
});