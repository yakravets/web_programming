// 8. Запросить дату (день, месяц, год) и вывести следующую за ней дату.
// Учтите возможность перехода на следующий месяц, год, а также високосный год.

let stringDate = prompt("Enter date in format 2015-01-12");

let unixtimeDate = Date.parse(stringDate);
let secondInDay = 86400;

let newDate = new Date(unixtimeDate + secondInDay + 1);

document.write(newDate.toJSON());
