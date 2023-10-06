/* Функція  

Функція - це ізольований блок коду, який працює незалежно від основного коду, має власну область видимості

Принцип єдиної відповідальності
single-responsibility principle
Функція має виконувати одну роботу

*/

/*
Визначення функції (її об'явлення)

function ім'я функції(аргументи) {
    блок коду функції
} 


Виклик функції:
ім'я функції(аргументи)

*/

function getSumOfTwoNumber(num1, num2 = 1) {   /// Function declaration
    let result = num1 + num2;
    return result;
}

let resultOfFunction = getSumOfTwoNumber(2);

console.log('Result of function word is ' + resultOfFunction);