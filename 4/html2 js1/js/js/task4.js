// 4. Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).

let valueNumber = prompt("Введите трехзначное число:", 0);
let number = parseInt(valueNumber);

let result = 0;

for(; number; number = Math.floor(number / 10)) {
    result *= 10;
    result += number % 10;
}

document.write(`${valueNumber} -> ${result}`);
