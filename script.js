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
const textChars = new SplitType('.animated-chars', { types: 'chars' });

// Выбираем все буквы
const letters = document.querySelectorAll('.animated-chars .char');

// Применяем задержку к каждой букве
letters.forEach((letter, index) => {
  letter.style.animationDelay = `${index * 0.03}s`; // Увеличиваем задержку для каждой буквы
});
