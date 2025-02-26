"use strict";

//Разбиваем текст на слова
var text = new SplitType('.animated-text', {
  types: 'words'
});
var words = document.querySelectorAll('.animated-text .word'); // Применяем задержку к каждому слову

words.forEach(function (word, index) {
  word.style.animationDelay = "".concat(index * 0.06, "s"); // Увеличиваем задержку для каждого слова
}); //================================================
//================================================
// Проверяем, был ли уже выполнен скрипт анимации в этой сессии

var initialDelay = 1.4; // Начальная задержка перед анимацией, например, 1 секунда

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
}); //=====================================================
//=====================================================
//- custom cursor script

var cursor = document.getElementById('custom-cursor');
var cursorText = cursor.querySelector('.cursor-text');
var targets = document.querySelectorAll('.hover-target');
var cursorWidth = cursor.offsetWidth;
var cursorHeight = cursor.offsetHeight; // Функция проверки ширины экрана

var isDesktop = function isDesktop() {
  return window.innerWidth >= 800;
}; // Скрываем курсор при загрузке


window.addEventListener('load', function () {
  cursor.style.display = 'none';
}); // Перемещение курсора только на экранах >= 800px

document.addEventListener('mousemove', function (e) {
  if (!isDesktop()) return; // Прерываем, если ширина < 800px

  var x = e.clientX;
  var y = e.clientY;
  var winWidth = window.innerWidth;
  var winHeight = window.innerHeight;
  var left = Math.min(Math.max(x, cursorWidth / 2), winWidth - cursorWidth / 2);
  var top = Math.min(Math.max(y, cursorHeight / 2), winHeight - cursorHeight / 2);
  cursor.style.left = "".concat(left, "px");
  cursor.style.top = "".concat(top, "px");
}); // Уникальный текст для каждого элемента только на экранах >= 800px

targets.forEach(function (target) {
  target.addEventListener('mouseenter', function () {
    if (!isDesktop()) return; // Прерываем, если ширина < 800px

    var text = target.getAttribute('data-cursor-text') || 'Click';
    cursorText.textContent = text; // Обновляем текст

    cursor.style.display = 'block';
  });
  target.addEventListener('mouseleave', function () {
    if (!isDesktop()) return; // Прерываем, если ширина < 800px

    cursor.style.display = 'none';
  });
}); // Дополнительно скрываем курсор при изменении размера окна

window.addEventListener('resize', function () {
  if (!isDesktop()) {
    cursor.style.display = 'none';
  }
}); //=====================================================
//=====================================================

var cursor2 = document.getElementById('custom-cursor2'); // Новый курсор

document.addEventListener('mousemove', function (e) {
  if (!isDesktop()) return;
  var x = e.clientX;
  var y = e.clientY;
  cursor2.style.left = "".concat(x, "px");
  cursor2.style.top = "".concat(y, "px");
}); // Для элементов с `data-cursor="cursor2"` показываем второй курсор

targets.forEach(function (target) {
  target.addEventListener('mouseenter', function () {
    if (!isDesktop()) return;
    var customCursorType = target.getAttribute('data-cursor');

    if (customCursorType === "cursor2") {
      cursor2.style.display = 'block';
      cursor.style.display = 'none';
    } else {
      cursor.style.display = 'block';
      cursor2.style.display = 'none';
    }
  });
  target.addEventListener('mouseleave', function () {
    if (!isDesktop()) return;
    cursor.style.display = 'none';
    cursor2.style.display = 'none';
  });
});