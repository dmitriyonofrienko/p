"use strict";

//добавляет класс по скроллу
//анимирует логотип в хедере
// window.addEventListener("scroll", function () {
//     const header = document.querySelector(".logo");
//     if (window.scrollY > 5) {
//       header.classList.add("scrolled");
//     } else {
//       header.classList.remove("scrolled");
//     }
//   });
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
  threshold: 0.3
});
document.querySelectorAll(".fade-up").forEach(function (el) {
  return observer.observe(el);
}); //   //плавный переход между страницами
// document.addEventListener("DOMContentLoaded", () => {
//   const page = document.querySelector("body");
// // Делаем плавное появление после рендеринга
// requestAnimationFrame(() => {
//   page.classList.add("show");
// });
// // Плавное исчезновение при переходе
// document.querySelectorAll("a").forEach(link => {
//     link.addEventListener("click", (event) => {
//       event.preventDefault();
//       const href = link.getAttribute("href");
//       // Скрываем страницу перед переходом
//       page.classList.add("hide");
//       setTimeout(() => {
//         window.location.href = href;
//       }, 150); // Время совпадает с transition в CSS
//     });
//   });