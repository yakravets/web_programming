// 3. Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.

let money = prompt("Введите количество денег:", 0);
let priceChockolade = prompt("Введите цену шоколадки:", 0);

let count = (money - money % priceChockolade) / priceChockolade;
let resultMoney = money - (priceChockolade * count);

alert("Купите " + count + " шоколадок. Останется денег " + resultMoney);