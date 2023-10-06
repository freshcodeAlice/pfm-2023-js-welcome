/* Функція  

Функція - це ізольований блок коду, який працює незалежно від основного коду, має власну область видимості

Принцип єдиної відповідальності
single-responsibility principle
Функція має виконувати одну роботу

*/

/*

Function declaration

Визначення функції (її об'явлення)

function ім'я функції(аргументи) {
    блок коду функції
} 


Виклик функції:
ім'я функції(аргументи)

*/

let resultOfFunction = getSumOfTwoNumber(2);

function getSumOfTwoNumber(num1, num2 = 1) { 
    let result = num1 + num2;
    return result;
}


console.log('Result of function word is ' + resultOfFunction);

 /*
Function expression (Функціональний вираз)

let fun1 = function (аргументи) {
    тіло функції
}

Виклик функції
fun1()

 */


let getDivide = function (num1, num2) {
    return num1 / num2
}

getDivide(4, 2);



/*

Arrow function


let funName = (аргументи) => {
    тіло функції
}

Вона може бути ще менше:

let getSquare = x => x*x


getSquare(3)

*/




let getSquare = x => x**2;


console.log(getSquare(4))




/// Hoisting (підняття)
/*
Процес "перегляду" коду інтерпретатором до виконання коду (до інтерпретації).
При цьому всі змінні та об'єкти створюються в пам'яті, але безспосередньо вирази та виклики функцій не обчислюються, і змінні кладеться undefined

Function declaration можуть бути доступні до виклику з будь-якого місця коду
Function expression - тільки після того, як вони були визначені
*/



/*
Практика:
Написати функцію, яка приймає два числа і повертає максимальне з них


*/


function getMax(num1, num2) {
    if (num1 > num2) {
        return num1
    }
    return num2
}


/*
Написати функцію, яка перевіряє парність числа
isEven

*/

function isEven(number) {

    return number % 2 === 0

}

let arrowIsEven = num => num % 2 === 0;



/*
Написати функцію, яка приймає на вхід радіус і повертає площу круга
S = pi * r**2
*/


function getSquareOfCircle (radius) {
    const PI = 3.14;
    return PI * radius **2;
}




/*
Таска 3: зробити калькулятор

1. Запитати у користувача послідовно два числа.
2. Запитати у користувача символ дії: *, /, + -

4. Написати 4 функції (на кожну дію по одній)

В результаті має бути 5 функції


Перевірку символів реалізувати через if-else if -else

*/



function sum(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function multy(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}



/*

SWITCH-CASE

switch (значення, за яким ми маємо "перемикатися") {
    case "значення 1": {
        робимо якусь дію
    }
    case "значення 2": {
        робимо якусь іншу дію
    }
    case "значення 3": {
        робимо якусь дію
    }
    case "значення 4": {
        робимо якусь дію
    }
    default: {
        робимо якусь дію, якщо жодне значення не підійшло
    }
}


*/




function calculator() {
    debugger;
    let num1 = Number(prompt('Введіть перше число'));
    let num2 = Number(prompt('Введіть друге число'));
    let action = prompt('Введіть дію: +, -, *, /');

    let result = null;

    // if(action === '+') {
    //     result = sum(num1, num2);
    // } else if(action === '-') {
    //     result = sub(num1, num2);
    // } else if(action === '*') {
    //     result = multy(num1, num2);
    // } else if (action === '/') {
    //     result = div(num1, num2);
    // } else {
    //     alert('Неправильна дія');
    //     return;
    // }


    switch (action) {
        case '+': {
            result = sum(num1, num2);
            break;
        }
        case '-': {
            result = sub(num1, num2);
            break;
        }
        case '*': {
            result = multy(num1, num2);
            break;
        }
        case '/': {
            result = div(num1, num2);
            break;
        }
        default: {
            alert('Неправильна дія');
        }
    }



    alert('Результат = '+result);
}