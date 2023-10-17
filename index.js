/* Функції як аргументи інших функцій */



function multyTwo(argum) {
    return argum*2;
}

function square(argum) {
    return argum**2;
}

const fn2 = multyTwo; // передача посилання на функцію

/* Функція вищого порядку (High order function - HOF) */
function getConsoleExp(number, func) {   // функція - аргумент іншої функції
    const res = func(number);  // func - callback - функція зворотнього виклику
    console.log(res);
}




getConsoleExp(4, multyTwo);
getConsoleExp(3, square);