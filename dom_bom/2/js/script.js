let btn = document.querySelector('.form__btn')


function btn__click(e) {
    e.preventDefault();

    let form = document.querySelector('.form');
    let result = document.querySelector('.result');

    form.classList.add('hidden');
    result.classList.add('active');
    result.innerHTML = "На почту " + document.querySelector('.form__email').value + " - отправлено письмо с подтверждением ";
}
btn.addEventListener('click', btn__click);