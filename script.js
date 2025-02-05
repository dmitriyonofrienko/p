////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    var videos = document.querySelectorAll('video.delayedAutoplay');
    var videoContainers = document.querySelectorAll('.centered');

    videos.forEach((video, index) => {
        function playVideo() {
            video.play().catch(error => {
                console.log('Autoplay was prevented:', error);
            });
        }

        var observer = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    playVideo();
                    observer.disconnect(); // Останавливаем наблюдение после первого воспроизведения
                }
            });
        }, { threshold: 0.5 }); // 50% видимости для запуска видео

        observer.observe(videoContainers[index]);
    });
});



//автоповтор слайдера логотипов на главнйо странице
document.addEventListener("DOMContentLoaded", function () {
    const logoFlow = document.querySelector(".logo_flow_inner");
    logoFlow.innerHTML += logoFlow.innerHTML;
  });