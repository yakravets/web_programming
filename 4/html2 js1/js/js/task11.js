
// 11. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

function getUnixTime(year, month, day){
    let date = year.toString() + '-' + month.toString() + '-' + day.toString()
    return Date.parse(date)
}

document.write(getUnixTime(2021, 01, 10));