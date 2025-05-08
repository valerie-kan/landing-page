const burgerIcon = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-overlay');
const burgerModal = document.querySelector('.burger-modal');
const closeIcon = document.querySelector('.close-icon');

burgerIcon.addEventListener('click', () => {
  burgerMenu.classList.add('open');
});

closeIcon.addEventListener('click', () => {
  burgerMenu.classList.remove('open');
});

burgerMenu.addEventListener('click', e => {
  if (!burgerModal.contains(e.target)) {
    burgerMenu.classList.remove('open');
  }
});
