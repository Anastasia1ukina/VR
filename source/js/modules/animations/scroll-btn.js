const anchors = document.querySelectorAll('a[href*="#"]');
const pageBody = document.querySelector('body');
// let navMain = document.querySelector('.main-nav');
// const checkbox = document.querySelector('.main-nav #active');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    const url = new URL(anchor.href);
    const blockID = url.hash.substr(1);
    const block = document.getElementById(blockID);

    if (block) {
      e.preventDefault();
    //   pageBody.style.position = '';
    //   navMain.classList.remove('main-nav--opened');
    //   pageBody.classList.remove('body-overlay--background');
    //   pageBody.style.overflow = '';

    //   checkbox.checked = false;


      block.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
}
