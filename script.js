const burger = document.querySelector('.burger-wrapper');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');

contact.addEventListener('click', () => {
  console.log('clicked');
});

function toggleMenu() {
  burger.classList.toggle('toggle-menu');
  menu.classList.toggle('toggle-menu');
}

burger.addEventListener('click', toggleMenu);

function closeMenu() {
  burger.classList.remove('toggle-menu');
}
menu.addEventListener('click', closeMenu);
