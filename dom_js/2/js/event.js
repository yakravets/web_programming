stadium.onclick = function(event) {

    //let ball = document.querySelector("ball");

    // координаты поля относительно окна браузера
    let fieldCoords = this.getBoundingClientRect();

    // мяч имеет абсолютное позиционирование (position:absolute), поле - относительное (position:relative)
    // таким образом, координаты мяча рассчитываются относительно внутреннего, верхнего левого угла поля
    let ballCoords = {
        top: event.clientY - fieldCoords.top - stadium.clientTop - ball.clientHeight / 2,
        left: event.clientX - fieldCoords.left - stadium.clientLeft - ball.clientWidth / 2
    };

    // запрещаем пересекать верхнюю границу поля
    if (ballCoords.top < 0)
        ballCoords.top = 0;

    // запрещаем пересекать левую границу поля
    if (ballCoords.left < 0)
         ballCoords.left = 0;


    // // запрещаем пересекать правую границу поля
    if (ballCoords.left + ball.clientWidth > stadium.clientWidth) {
        ballCoords.left = stadium.clientWidth - ball.clientWidth;
    }

    // запрещаем пересекать нижнюю границу поля
    if (ballCoords.top + ball.clientHeight > stadium.clientHeight) {
        ballCoords.top = stadium.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
}