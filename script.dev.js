"use strict";

////////////////////////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', function() {
//     var videos = document.querySelectorAll('video.delayedAutoplay');
//     var videoContainers = document.querySelectorAll('.centered');
//     videos.forEach((video, index) => {
//         function playVideo() {
//             video.play().catch(error => {
//                 console.log('Autoplay was prevented:', error);
//             });
//         }
//         var observer = new IntersectionObserver(function(entries, observer) {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     playVideo();
//                     observer.disconnect(); 
//                 }
//             });
//         }, { threshold: 0.5 }); 
//         observer.observe(videoContainers[index]);
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
  var videos = document.querySelectorAll('video.delayedAutoplay');
  videos.forEach(function (video) {
    function playVideo() {
      video.muted = true; // Чтобы избежать блокировки

      video.play()["catch"](function (error) {
        console.log('Autoplay was prevented:', error);
      });
    }

    var observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          playVideo();
          observer.unobserve(entry.target); // Отслеживает только нужное видео
        }
      });
    }, {
      threshold: 0.5
    });
    var container = video.closest('.centered');
    if (container) observer.observe(container);
  });
}); //автоповтор слайдера логотипов на главнйо странице

document.addEventListener("DOMContentLoaded", function () {
  var logoFlow = document.querySelector(".logo_flow_inner");
  logoFlow.innerHTML += logoFlow.innerHTML;
});