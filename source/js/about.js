import { mobileVhFix } from './utils/mobile-vh-fix.js';
import { initModals } from './modules/modals/init-modals';
import { Form } from './modules/form-validate/form';
import { CustomSelect } from './modules/select/custom-select';
import { uploadFile, uploadImageDrop } from './modules/input-file/init-upload';
import { initFeedback } from './modules/init-feedback.js';
import './modules/animations/toggle';
import Swiper from 'swiper/swiper-bundle.js';

let swiperone;

function resizeScreen() {
    if (window.innerWidth > 767) {
        swiperone = new Swiper('.team__wrapper', {
            slidesPerView: 4,
            spaceBetween: 9,
            loop: true,
        })
    }
    if (window.innerWidth < 767 && swiperone instanceof Swiper) {
        swiperone.destroy();
    }
}

resizeScreen();

window.addEventListener("resize", () => {
    resizeScreen();
});


// Utils
// ---------------------------------

mobileVhFix();

// Modules
let acc = document.querySelectorAll('.choose__trigger');
// let accFirst = document.querySelectorAll('.choose__content--first');

acc.forEach(item => {
    item.addEventListener('click', e => {
        if (e.target.classList.contains('active')) {
            // accFirst.style.height = '';
            e.target.classList.remove('active');
            return;
        }
        acc.forEach(e => e.classList.remove('active'));
        e.target.classList.add('active');
    });
});

// все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
// в load следует добавить скрипты, не участвующие в работе первого экрана
window.addEventListener('load', () => {
    initModals();
    uploadFile();
    uploadImageDrop();
    const select = new CustomSelect();
    select.init();
    const form = new Form();
    window.form = form;
    form.init();
    initFeedback();
});