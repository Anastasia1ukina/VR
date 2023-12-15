import { mobileVhFix } from './utils/mobile-vh-fix.js';
import { initModals } from './modules/modals/init-modals';
import { Form } from './modules/form-validate/form';
import { CustomSelect } from './modules/select/custom-select';
import { uploadFile, uploadImageDrop } from './modules/input-file/init-upload';
import { initFeedback } from './modules/init-feedback.js';
import { gsapAnims } from './modules/animations/gsap-about';
import './modules/animations/toggle';
import './modules/animations/blur-header';
import './modules/init-subscribe.js';
import './modules/animations/parallax-mouse';

let acc = document.querySelectorAll('.choose-about2__trigger');

acc.forEach(item => {
  item.addEventListener('click', e => {
    const chooseTriggerNode = e.target.closest('.choose-about2__trigger');

    if (chooseTriggerNode.classList.contains('active')) {
      chooseTriggerNode.classList.remove('active');
      return;
    }
    acc.forEach(e => e.classList.remove('active'));
    chooseTriggerNode.classList.add('active');
  });
});


// Utils
// ---------------------------------

mobileVhFix();

// Modules

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
    gsapAnims();
});