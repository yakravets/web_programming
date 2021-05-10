var btn = document.querySelector('.form__btn')
var q = document.querySelector('#question');
var c = document.querySelector('#canswer');
var w = document.querySelector('#wanswer');
var result = document.querySelector('.result__list');
var arr = [];

function btn__click(e) {
   e.preventDefault();
   result.innerHTML +=
      `<div class="result__item">
         <div class = "result__title" >${q.value}</div>
         <div class = "result__corect" >
            <span class = "result__label1" > Correct answer: </span>
            <p class = "result__ca" > ${c.value}</p>
            </div>
         <div class = "result__wrong">
            <span class = "result__label1" > Wrong answer: </span>
            <p class = "result__wa" >${w.value}</p> </div> </div>`;
}

btn.addEventListener('click', btn__click);