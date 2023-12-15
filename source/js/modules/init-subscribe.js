document.addEventListener('DOMContentLoaded', function () {
    const footerformNode = document.querySelector('.footer__form');
    let footerTextMessage = document.querySelector('.footer__text-message');
    const form = document.getElementById('form');
    let email = document.querySelector('._email');

    footerformNode.addEventListener('submit', function(event) {
        event.preventDefault();

        let error = formValidate(form);

        if (email.value !== '') {
            footerTextMessage.classList.add('active');
            footerformNode.classList.remove('active');
            email.value = '';

            setTimeout(function () {
                footerTextMessage.classList.remove('active');
                footerformNode.classList.add('active');
            }, 3000);
        }
    });

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('is-invalid')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
    }
    function formAddError(input) {
        input.classList.add('is-invalid');
    }
    function formRemoveError(input) {
        input.classList.remove('is-invalid');
    }
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});

