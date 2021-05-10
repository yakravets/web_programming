var btn = document.querySelector('.form__btn')
var test = document.querySelector('.test');
var result = document.querySelector('.result');


function btn__click(evt) {
    evt.preventDefault();
    test.classList.add('hidden');
    result.classList.add('active');
    result.innerHTML = "На почту " + document.querySelector('.form__email').value + " - отправлено письмо с подтверждением ";
}
btn.addEventListener('click', btn__click);