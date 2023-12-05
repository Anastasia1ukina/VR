// let navMain = document.querySelector('.main-nav');
// let navToggle = document.querySelector('.main-nav__toggle');
// const pageBody = document.querySelector('body');
// const btnIntro = document.querySelector('.intro__button');
// // const pageBody= document.querySelector('html');

// if (document.querySelector('.main-nav--no-js')) {
//   navMain.classList.remove('main-nav--no-js');
// }

// document.addEventListener('keydown', (evt) => {
//   if (evt.key === 'Escape') {
//     if (navMain.classList.contains('main-nav--opened')) {
//       pageBody.style.overflow = '';
//       navMain.classList.remove('main-nav--opened');
//     }
//   }
// });

// navToggle.addEventListener('click', (evt) => {
//   if (pageBody.style.overflow === '') {
//     navMain.classList.toggle('main-nav--opened');
//     pageBody.style.overflow = 'hidden';
//     btnIntro.style.display = 'none'
//   } else {
//     navMain.classList.remove('main-nav--opened');
//     pageBody.style.overflow = '';
//     btnIntro.style.display = '';
//   }
// });

// window.addEventListener('click', (evt) => {
//   const target = evt.target;
//   if (!target.closest('.main-nav') && !target.closest('.main-nav__toggle')) {
//     navMain.classList.remove('main-nav--opened');
//     pageBody.style.overflow = '';
//   }
// });
