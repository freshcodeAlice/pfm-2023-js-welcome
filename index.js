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