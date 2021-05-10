var btn = document.querySelector('.form__btn')
var form = document.querySelector('.form');
var result = document.querySelector('.result');
var f = document.querySelector('.firstname');
var l = document.querySelector('.lastname');
var d = document.querySelector('.birthday');
var g = document.querySelector('.gender');
var cnt = document.querySelector('.country');
var sk = document.querySelector('.skills');
var ct = document.querySelector('.city');
var nameRadio = document.getElementsByName('radio');
var carr = document.getElementsByName('country');
var carr2 = document.getElementsByName('city');
var skills = document.getElementsByName('skill');

function btn__click(evt) {
    evt.preventDefault();
    form.classList.add('hidden');
    result.classList.add('active');
    var c;
    var country;
    var s = '';
    for (var i = 0; i < nameRadio.length; i++) {
        if (nameRadio[i].checked) {
            c = nameRadio[i].value;
        }
    }
    for (var i = 0; i < carr.length; i++) {
        if (carr[i].selected) {
            country = carr[i].value;
        }
    }
    for (var i = 0; i < carr2.length; i++) {
        if (carr2[i].selected) {
            city = carr2[i].value;
        }
    }
    for (var i = 0; i < skills.length; i++) {
        if (skills[i].checked) {
            s += skills[i].value + ', ';
        }
    }
    s = s.substr(0, s.length - 2);
    f.innerHTML = document.getElementById('firstname').value;
    l.innerHTML = document.getElementById('lastname').value;
    d.innerHTML = document.getElementById('birth').value;
    g.innerHTML = c;
    cnt.innerHTML = country;
    ct.innerHTML = city;
    sk.innerHTML = s;
}
btn.addEventListener('click', btn__click);