"use strict";

//запускает видео на странице только после того как пользователь видет его на 25%
document.addEventListener("DOMContentLoaded", function () {
  var videos = document.querySelectorAll("video");
  var playedVideos = new Set();

  if ("IntersectionObserver" in window) {
    var _observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !playedVideos.has(entry.target)) {
          entry.target.pause(); // Останавливаем видео, если оно запускается

          entry.target.muted = true; // Обязательно для автозапуска

          entry.target.play();
          playedVideos.add(entry.target);
        }
      });
    }, {
      threshold: 0.25
    });

    videos.forEach(function (video) {
      video.pause(); // Останавливаем видео при загрузке страницы

      _observer.observe(video);
    });
  }
}); //заглуает видео

document.addEventListener("DOMContentLoaded", function () {
  var videos = document.querySelectorAll("video");
  videos.forEach(function (video) {
    video.muted = true; // Программно отключаем звук

    video.play()["catch"](function (error) {
      return console.log("Autoplay blocked:", error);
    });
  });
}); //добавляет класс по скроллу
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
}); //плавный переход между страницами

document.addEventListener("DOMContentLoaded", function () {
  var page = document.querySelector("body"); // Делаем плавное появление после рендеринга

  requestAnimationFrame(function () {
    page.classList.add("show");
  }); // Плавное исчезновение при переходе

  document.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var href = link.getAttribute("href"); // Скрываем страницу перед переходом

      page.classList.add("hide");
      setTimeout(function () {
        window.location.href = href;
      }, 150); // Время совпадает с transition в CSS
    });
  });
});