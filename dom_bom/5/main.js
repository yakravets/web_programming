var btn = document.querySelector('.form__btn')
var q = document.getElementById('question');
var c = document.getElementById('canswer');
var w = document.getElementById('wanswer');
var result = document.querySelector('.result__list');
var arr = [];

function btn__click(evt) {
   evt.preventDefault();
   var qv = q.value;
   var cv = c.value;
   var wv = w.value;
   result.innerHTML += '<div class="result__item"> <div class = "result__title" >' + qv + '</div> <div class = "result__corect" > <span class = "result__label1" > Correct answer: </span> <p class = "result__ca" > ' + cv + ' </p> </div> <div class = "result__wrong" ><span class = "result__label1" > Wrong answer: </span> <p class = "result__wa" > ' + wv + ' </p> </div> </div>';


}
btn.addEventListener('click', btn__click);