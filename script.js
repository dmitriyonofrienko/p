//Разбиваем текст на слова
const text = new SplitType('.animated-text', { types: 'words' })
const words = document.querySelectorAll('.animated-text .word');

// Применяем задержку к каждому слову
words.forEach((word, index) => {
  word.style.animationDelay = `${index * 0.1}s`; // Увеличиваем задержку для каждого слова
});



//================================================
//================================================
// Проверяем, был ли уже выполнен скрипт анимации в этой сессии
let initialDelay = 1.6; // Начальная задержка перед анимацией, например, 1 секунда

if (sessionStorage.getItem('animationPlayed')) {
  initialDelay = 0; // Если анимация уже воспроизводилась, ставим задержку равной 0
}

// Выбираем все элементы с классом .fade-up
const elements = document.querySelectorAll('.fade-up');

// Устанавливаем задержку для всех элементов
elements.forEach((element, index) => {
  element.style.animationDelay = `${initialDelay + index * 0.05}s`; // Начальная задержка + индивидуальная задержка для каждого элемента
});

// Сохраняем флаг в sessionStorage, чтобы анимация не запускалась повторно в этой сессии
if (!sessionStorage.getItem('animationPlayed')) {
  sessionStorage.setItem('animationPlayed', 'true');
}


//================================================
//================================================
// Разбиваем текст на буквы
const textChars = new SplitType('.animated-chars', { types: 'words, chars' });
document.querySelectorAll('.animated-chars .word').forEach((word) => {
  const letters = word.querySelectorAll('.char');
  letters.forEach((letter, index) => {
    letter.style.animationDelay = `${index * 0.03}s`;
  });
});


//=====================================================
//=====================================================
//Паралакс эффект для телефонов
window.addEventListener('scroll', function () {
  const containers = document.querySelectorAll('.parallax-container');
  containers.forEach(container => {
    const image = container.querySelector('.parallax-image');
    const containerTop = container.getBoundingClientRect().top;
    const containerHeight = container.offsetHeight;
    const windowHeight = window.innerHeight;

    // Параллакс начинается, когда 20% контейнера видно
    const triggerPoint = windowHeight * 0.8; // 80% высоты окна
    if (containerTop < triggerPoint && containerTop + containerHeight > 0) {
      const scrollPosition = (windowHeight - containerTop) / (windowHeight + containerHeight);
      const speed = 0.8;
      const maxOffset = image.offsetHeight - containerHeight;
      const offset = maxOffset * scrollPosition * speed;

      const direction = container.dataset.direction || 'up';
      if (direction === 'up') {
        image.style.transform = `translateY(-${offset}px)`;
      } else if (direction === 'down') {
        image.style.transform = `translateY(-${offset}px)`;
      }
    }
  });
});
