"use strict";

//=====================================================
//=====================================================
var lenis = new Lenis({
  duration: 1.2,
  easing: function easing(t) {
    return Math.min(1, 1.001 - Math.pow(2, -10 * t));
  }
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);