"use strict";

//Разбиваем текст на слова
var text = new SplitType('.animated-text', {
  types: 'words'
});
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
  types: 'words, chars'
});
document.querySelectorAll('.animated-chars .word').forEach(function (word) {
  var letters = word.querySelectorAll('.char');
  letters.forEach(function (letter, index) {
    letter.style.animationDelay = "".concat(index * 0.03, "s");
  });
}); //=====================================================
//=====================================================
//Паралакс эффект для телефонов

window.addEventListener('scroll', function () {
  var containers = document.querySelectorAll('.parallax-container');
  containers.forEach(function (container) {
    var image = container.querySelector('.parallax-image');
    var containerTop = container.getBoundingClientRect().top;
    var containerHeight = container.offsetHeight;
    var windowHeight = window.innerHeight; // Параллакс начинается, когда 20% контейнера видно

    var triggerPoint = windowHeight * 0.8; // 80% высоты окна

    if (containerTop < triggerPoint && containerTop + containerHeight > 0) {
      var scrollPosition = (windowHeight - containerTop) / (windowHeight + containerHeight);
      var speed = 0.8;
      var maxOffset = image.offsetHeight - containerHeight;
      var offset = maxOffset * scrollPosition * speed;
      var direction = container.dataset.direction || 'up';

      if (direction === 'up') {
        image.style.transform = "translateY(-".concat(offset, "px)");
      } else if (direction === 'down') {
        image.style.transform = "translateY(-".concat(offset, "px)");
      }
    }
  });
});