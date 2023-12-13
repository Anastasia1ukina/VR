import { mobileVhFix } from './utils/mobile-vh-fix.js';
import { initModals } from './modules/modals/init-modals';
import { Form } from './modules/form-validate/form';
import { CustomSelect } from './modules/select/custom-select';
import { uploadFile, uploadImageDrop } from './modules/input-file/init-upload';
import { initFeedback } from './modules/init-feedback.js';
import { gsapAnims } from './modules/animations/gsap-scroll';
import './modules/animations/blur-header';
import './modules/animations/scroll-btn';
import './modules/animations/toggle';
import './modules/animations/parallax-mouse';

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  mobileVhFix();

  // Modules
  let acc = document.querySelectorAll('.choose__trigger');

  acc.forEach(item => {
    item.addEventListener('click', e => {
      const chooseTriggerNode = e.target.closest('.choose__trigger');

      if (chooseTriggerNode.classList.contains('active')) {
        chooseTriggerNode.classList.remove('active');
        return;
      }
      acc.forEach(e => e.classList.remove('active'));
      chooseTriggerNode.classList.add('active');
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
  gsapAnims();
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
