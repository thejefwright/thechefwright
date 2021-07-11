const burger = document.querySelector('.shadow-wrapper');
const innerBurger = document.querySelector('.burger-wrapper');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');

contact.addEventListener('click', () => {
  console.log('clicked');
});

function toggleMenu() {
  burger.classList.toggle('toggle-menu');
  innerBurger.classList.toggle('toggle-menu');
}

burger.addEventListener('click', toggleMenu);

function closeMenu() {
  burger.classList.remove('toggle-menu');
  innerBurger.classList.remove('toggle-menu');
}
menu.addEventListener('click', closeMenu);
