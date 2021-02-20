// 10. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей.
// При этом также посчитать, сколько четных и нечетных.
// Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

let count = 10;

let zeros = 0;
let pair = 0;
let notpair = 0;

for(i = 0; i < count; i++)
{
    let value = parseInt(prompt(`Enter ${i + 1} in ${count}`, 0));
    if (value == 0){
        zeros += 1;
    }else if((value % 2) == 0){
        pair += 1;
    }
    else{
        notpair += 1;
    }
}

document.write(
    `End:\n Pair numbers: ${pair}
    Not pair numbers:${notpair}
    Count zero:${zeros}`);