"use strict"

const menuLinks = document.querySelectorAll('.menu__link[data-goto');
if (menuLinks.length > 0) {
  menuLinks.forEach(link => {
    link.addEventListener('click', linkClick);
  });
  function linkClick(event) {
    const link = event.target;
    if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
      const gotoBlock = document.querySelector(link.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      });
      event.preventDefault();
    }
  }
}
//---------------//
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  })
}

/// self-test
console.log('Самопроверка:');
console.log('вёрстка валидная (10)');
console.log('вёрстка семантическая (20)');
console.log('для оформления СV используются css-стили (10)');
console.log('контент размещается в блоке, который горизонтально центрируется на странице (10)');
console.log('вёрстка адаптивная (10)');
console.log('есть адаптивное бургер-меню (10)');
console.log('на странице СV присутствует изображение - фото или аватарка автора CV (10)');
console.log('контакты для связи и перечень навыков оформлены в виде списка ul > li (10)');
console.log('CV содержит контакты, краткую информацию о себе, навыки, образование, уровень английского (10)');
console.log('CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода (10)');
console.log('CV содержит изображения-ссылки на выполненные вами проекты (10)');
console.log('CV выполнено на английском языке (10)');
console.log('выполнены требования к репозиторию (10)');
console.log('есть видео резюме автора CV на английском языке (10)');
console.log('дизайн, оформление, качество выполнения CV не ниже чем в примерах CV (10)');
console.log('Итого: 160 баллов');
