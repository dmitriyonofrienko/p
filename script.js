//split text
const text = new SplitType('.animated-text', { types: 'words' })

// Выбираем все слова
const words = document.querySelectorAll('.animated-text .word');

// Применяем задержку к каждому слову
words.forEach((word, index) => {
  word.style.animationDelay = `${index * 0.1}s`; // Увеличиваем задержку для каждого слова
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


//================================================
//================================================


// // Создаем наблюдателя для элементов с классом .fade-up
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       // Добавляем класс "visible" для видимых элементов
//       entry.target.classList.add("visible");
//     }
//   });
// }, { threshold: 0.15 }); // Срабатывает, когда хотя бы 15% элемента видны

// // Выбираем все элементы с классом .fade-up и начинаем их наблюдать
// document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));