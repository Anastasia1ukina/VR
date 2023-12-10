const anchors = document.querySelectorAll('a[href*="#"]');
const pageBody = document.querySelector('body');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    const url = new URL(anchor.href);
    const blockID = url.hash.substr(1);
    const block = document.getElementById(blockID);

    if (block) {
      e.preventDefault();

      block.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
}
