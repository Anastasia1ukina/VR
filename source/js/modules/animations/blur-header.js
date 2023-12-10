const header = document.querySelector('.header');
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

window.addEventListener('scroll', function() {
  if (window.scrollY >= 70 && !navMain.classList.contains('main-nav--opened')){
    header.classList.add('active');
    navToggle.classList.add('is-active');
  } 
  if (window.scrollY < 70){
    header.classList.remove('active');
    navToggle.classList.remove('is-active');
  } 
});
