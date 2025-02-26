//Разбиваем текст на слова
const text = new SplitType('.animated-text', { types: 'words' })
const words = document.querySelectorAll('.animated-text .word');

// Применяем задержку к каждому слову
words.forEach((word, index) => {
  word.style.animationDelay = `${index * 0.06}s`; // Увеличиваем задержку для каждого слова
});


//================================================
//================================================
// Проверяем, был ли уже выполнен скрипт анимации в этой сессии
let initialDelay = 1.4; // Начальная задержка перед анимацией, например, 1 секунда

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


//=====================================================
//=====================================================
//- custom cursor script
  const cursor = document.getElementById('custom-cursor');
  const cursorText = cursor.querySelector('.cursor-text');
  const targets = document.querySelectorAll('.hover-target');
  const cursorWidth = cursor.offsetWidth;
  const cursorHeight = cursor.offsetHeight;

  // Функция проверки ширины экрана
  const isDesktop = () => window.innerWidth >= 800;

  // Скрываем курсор при загрузке
  window.addEventListener('load', () => {
    cursor.style.display = 'none';
  });

  // Перемещение курсора только на экранах >= 800px
  document.addEventListener('mousemove', (e) => {
    if (!isDesktop()) return; // Прерываем, если ширина < 800px

    const x = e.clientX;
    const y = e.clientY;
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;

    let left = Math.min(Math.max(x, cursorWidth / 2), winWidth - cursorWidth / 2);
    let top = Math.min(Math.max(y, cursorHeight / 2), winHeight - cursorHeight / 2);

    cursor.style.left = `${left}px`;
    cursor.style.top = `${top}px`;
  });

  // Уникальный текст для каждого элемента только на экранах >= 800px
  targets.forEach(target => {
    target.addEventListener('mouseenter', () => {
      if (!isDesktop()) return; // Прерываем, если ширина < 800px

      const text = target.getAttribute('data-cursor-text') || 'Click';
      cursorText.textContent = text; // Обновляем текст
      cursor.style.display = 'block';
    });
    target.addEventListener('mouseleave', () => {
      if (!isDesktop()) return; // Прерываем, если ширина < 800px

      cursor.style.display = 'none';
    });
  });

  // Дополнительно скрываем курсор при изменении размера окна
  window.addEventListener('resize', () => {
    if (!isDesktop()) {
      cursor.style.display = 'none';
    }
  });


//=====================================================
//=====================================================
const cursor2 = document.getElementById('custom-cursor2'); // Новый курсор

document.addEventListener('mousemove', (e) => {
    if (!isDesktop()) return;

    const x = e.clientX;
    const y = e.clientY;

    cursor2.style.left = `${x}px`;
    cursor2.style.top = `${y}px`;
});

// Для элементов с `data-cursor="cursor2"` показываем второй курсор
targets.forEach(target => {
    target.addEventListener('mouseenter', () => {
        if (!isDesktop()) return;

        const customCursorType = target.getAttribute('data-cursor');

        if (customCursorType === "cursor2") {
            cursor2.style.display = 'block';
            cursor.style.display = 'none';
        } else {
            cursor.style.display = 'block';
            cursor2.style.display = 'none';
        }
    });

    target.addEventListener('mouseleave', () => {
        if (!isDesktop()) return;

        cursor.style.display = 'none';
        cursor2.style.display = 'none';
    });
});
