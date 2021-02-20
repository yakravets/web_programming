
// 5. Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.

let fileSize = 820;

let sizeMemoryFlashGB = parseInt(prompt("Введите размер флешки в Гб", 0));

let sizeMemoryFlashMB = sizeMemoryFlashGB * 1024;
let count = Math.floor(sizeMemoryFlashMB / fileSize);

document.write(`Поместиться ${count} файл(ов0.`);