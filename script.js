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

  $(function () {
    $('.tlt').textillate();
  })


  //smooth scroll
  let scrollY = window.scrollY;
  let speed = 0.07; // Регулируй инерцию (0.05 - сильнее, 0.2 - слабее)
  let isScrolling;
  
  function smoothScroll() {
    scrollY += (window.scrollY - scrollY) * speed;
    window.scrollTo(0, scrollY);
    
    if (Math.abs(window.scrollY - scrollY) > 0.5) {
      isScrolling = requestAnimationFrame(smoothScroll);
    } else {
      cancelAnimationFrame(isScrolling);
    }
  }
  
  window.addEventListener("scroll", () => {
    if (!isScrolling) {
      smoothScroll();
    }
  });