const button = document.querySelector('.menu__btn'),
  list = document.querySelector('.menu__list');
console.log(button);
console.log(list);

button.addEventListener('click', () => {
  list.classList.toggle('menu__list--active');
});