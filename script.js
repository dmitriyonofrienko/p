//fade up анимация для блоков с класом .fade-up
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute("data-delay") || 0;
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, delay);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));



// // use a script tag or an external JS file
// document.addEventListener("DOMContentLoaded", (event) => {
//   gsap.registerPlugin(TextPlugin)
//   // gsap code here!
//  });


// gsap.to("#myText", {duration: 1, text: "ДОПОМАГАЮ КЛІЄНТАМ РЕАЛІЗОВУВАТИ ЇХ БІЗНЕС ЦІЛІ ЧЕРЕЗ ДИЗАЙН.", delay: .1});