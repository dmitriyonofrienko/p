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