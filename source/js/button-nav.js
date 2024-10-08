const buttonNavElement = document.querySelector('.nav-button');
const navContainer = document.querySelector('.header__nav-container');
const navElement = document.querySelector('.nav');


export function initButtonNav() {
  buttonNavElement.addEventListener('click', () => {
    navContainer.classList.toggle('header__nav-container--active');
    buttonNavElement.classList.toggle('nav-button--active');
    navElement.classList.toggle('nav--active');
  });
}
