"use strict";

//split text
var text = new SplitType('.animated-text', {
  types: 'words'
}); // Выбираем все слова

var words = document.querySelectorAll('.animated-text .word'); // Применяем задержку к каждому слову

words.forEach(function (word, index) {
  word.style.animationDelay = "".concat(index * 0.1, "s"); // Увеличиваем задержку для каждого слова
}); //================================================
//================================================
// Проверяем, был ли уже выполнен скрипт анимации в этой сессии

var initialDelay = 1.6; // Начальная задержка перед анимацией, например, 1 секунда

if (sessionStorage.getItem('animationPlayed')) {
  initialDelay = 0; // Если анимация уже воспроизводилась, ставим задержку равной 0
} // Выбираем все элементы с классом .fade-up


var elements = document.querySelectorAll('.fade-up'); // Устанавливаем задержку для всех элементов

elements.forEach(function (element, index) {
  element.style.animationDelay = "".concat(initialDelay + index * 0.05, "s"); // Начальная задержка + индивидуальная задержка для каждого элемента
}); // Сохраняем флаг в sessionStorage, чтобы анимация не запускалась повторно в этой сессии

if (!sessionStorage.getItem('animationPlayed')) {
  sessionStorage.setItem('animationPlayed', 'true');
} //================================================
//================================================
// Разбиваем текст на буквы


var textChars = new SplitType('.animated-chars', {
  types: 'chars'
}); // Выбираем все буквы

var letters = document.querySelectorAll('.animated-chars .char'); // Применяем задержку к каждой букве

letters.forEach(function (letter, index) {
  letter.style.animationDelay = "".concat(index * 0.03, "s"); // Увеличиваем задержку для каждой буквы
});