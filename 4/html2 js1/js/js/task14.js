
// 14. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
//  Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

function getAreas(x, y){
    if(typeof y !== 'undefined'){
        return x * y;
    }else{
        return x*x;
    }

}

document.write('areas rectangle with size 2 and 3 = ' + getAreas(2, 3) + '<br>')
document.write('areas square with side 5 = ' + getAreas(5))