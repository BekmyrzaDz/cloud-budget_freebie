const button = document.querySelector('.menu__btn'),
  list = document.querySelector('.menu__list');

button.addEventListener('click', () => {
  list.classList.toggle('menu__list--active');
});