"use strict";

// const slides = document.querySelectorAll('.slide');
// let currentSlide = 0;
// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.classList.toggle('active', i === index);
//     });
// }
// function nextSlide() {
//     currentSlide = (currentSlide + 1) % slides.length;
//     showSlide(currentSlide);
// }
// setInterval(nextSlide, 2000);
// showSlide(currentSlide);
////////////////////////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', function() {
//     var video = document.getElementById('myVideo');
//     var videoContainer = document.querySelector('.centered');
//     function checkScroll() {
//         var rect = videoContainer.getBoundingClientRect();
//         if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
//             if (video.paused) {
//                 video.play();
//             }
//         } else {
//             if (!video.paused) {
//                 video.pause();
//             }
//         }
//     }
//     window.addEventListener('scroll', checkScroll);
//     checkScroll(); 
// });
// console.log("Hello, World!");
////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
  var videos = document.querySelectorAll('video.delayedAutoplay');
  var videoContainers = document.querySelectorAll('.centered');
  videos.forEach(function (video, index) {
    function playVideo() {
      video.play()["catch"](function (error) {
        console.log('Autoplay was prevented:', error);
      });
    }

    var observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          playVideo();
          observer.disconnect(); // Останавливаем наблюдение после первого воспроизведения
        }
      });
    }, {
      threshold: 0.5
    }); // 50% видимости для запуска видео

    observer.observe(videoContainers[index]);
  });
});