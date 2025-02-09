
//запускает видео на странице только после того как пользователь видет его на 25%
document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll("video");
  const playedVideos = new Set();

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !playedVideos.has(entry.target)) {
            entry.target.pause();  // Останавливаем видео, если оно запускается
            entry.target.muted = true; // Обязательно для автозапуска
            entry.target.play();
            playedVideos.add(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    videos.forEach((video) => {
      video.pause();  // Останавливаем видео при загрузке страницы
      observer.observe(video);
    });
  }
});


//заглуает видео
document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll("video");

  videos.forEach((video) => {
    video.muted = true; // Программно отключаем звук
    video.play().catch(error => console.log("Autoplay blocked:", error));
  });
});


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
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute("data-delay") || 0;
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, delay);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));






//плавный переход между страницами
document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector("body");

  // Делаем плавное появление после рендеринга
  requestAnimationFrame(() => {
    page.classList.add("show");
  });

  // Плавное исчезновение при переходе
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const href = link.getAttribute("href");

      // Скрываем страницу перед переходом
      page.classList.add("hide");

      setTimeout(() => {
        window.location.href = href;
      }, 150); // Время совпадает с transition в CSS
    });
  });
});