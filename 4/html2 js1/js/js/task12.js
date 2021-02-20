
// 12. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

function getUTCDate(unixtime){
    var date = new Date(unix_timestamp * 1000);
    
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
}

let unix_timestamp = 1549312452;
document.write(getUTCDate(unix_timestamp));


