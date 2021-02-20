// 6. Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

let circleLength = parseInt(prompt("Введите длину окружности:", 0));
let squarePerimeter = parseInt(prompt("Введите периметр квадрата:", 0));

let circleRadius = circleLength /(2 * Math.PI);
let squareSide = squarePerimeter / 4;

if((circleRadius * 2) <= squareSide){
    document.write('Circle can write in square');
}
else{
    document.write('Circle NOT can write in square');
}