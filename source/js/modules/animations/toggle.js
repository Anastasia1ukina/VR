let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let contactsBtn = document.querySelector('.main-nav__contact--mobile');
const pageBody = document.querySelector('body');
let htmlScroll = document.querySelector('html');

if (document.querySelector('.main-nav--no-js')) {
  navMain.classList.remove('main-nav--no-js');
}

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    if (navMain.classList.contains('main-nav--opened')) {
      pageBody.style.overflow = '';
      htmlScroll.style.overflow = '';
      navMain.classList.remove('main-nav--opened');
    }
  }
});

navToggle.addEventListener('click', (evt) => {
  if (pageBody.style.overflow === '') {
    navMain.classList.toggle('main-nav--opened');
    contactsBtn.classList.add('active');
    pageBody.style.overflow = 'hidden';
    htmlScroll.style.overflow = 'hidden';
  } else {
    navMain.classList.remove('main-nav--opened');
    pageBody.style.overflow = '';
    htmlScroll.style.overflow = '';
  }
});

contactsBtn.addEventListener('click', (evt) => {
  const target = evt.target;
  if (!target.closest('.main-nav') && !target.closest('.main-nav__toggle')) {
    navMain.classList.remove('main-nav--opened');
    pageBody.style.overflow = '';
    htmlScroll.style.overflow = '';
  }
});
