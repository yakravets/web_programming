function btn__click(e) {
    e.preventDefault();

    let form = document.querySelector('#form');
    form.classList.add('hidden');

    let result = document.querySelector('#result');
    result.classList.add('active');

    let login = document.querySelector('.form__login');

    let check = document.querySelector('.check__input');

    let check__text = '';
    if (check.checked == true) {
        check__text = 'запомнил';

    } else {
        check__text = 'не запомнил';
    }

    result.innerHTML = `"Привет, ${login.value}. Я тебя " + ${check__text}`;
}

let btn = document.querySelector('.form__btn')
btn.addEventListener('click', btn__click);