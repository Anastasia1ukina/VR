const initFeedback = () => {
    const form = document.querySelector('[data-modal="feedback"]');
  
    if (!form) {
      return;
    }
  
    const fields = Array.from(form.querySelectorAll('[data-validate-type]'));
    const btn = form.querySelector('button[type="submit"]');
  
    const inputs = form.querySelectorAll('input, textarea');
  
    inputs.forEach((input) => {
      input.addEventListener('keyup', (e) => {
        input.closest('[data-validate-type]').classList.toggle('is-filled', e.target.value);
      });
    });
  
    form.addEventListener('input', () => {
      const formValid = fields.every((field) => field.classList.contains('is-valid'));
  
      btn.disabled = !formValid;
    });
  };
  
  export {initFeedback};
  