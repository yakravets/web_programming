// 7. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла.
// После вопросов выведите пользователю количество набранных баллов.

let sum = 0;

let answer1 = confirm("1 > 10?");
if (!answer1) {
    sum += 2;
    document.write('1. OK\n');
}
else{
    document.write('1. NOOOOOO\n');
}

let answer2 = confirm("2 + 2 * 2 = 8?");
if (!answer2) {
    sum += 2;
    document.write('1. OK\n');
}
else{
    document.write('1. NOOOOOO\n');
}

let answer3 = confirm("You like Javascript?");
if (answer3) {
    sum += 2;
    document.write('1. OK\n');
}
else{
    document.write('1. NOOOOOO\n');
}

document.write(`You result: ${sum}`);

