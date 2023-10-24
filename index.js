/* Стандартні вбудовані об'єкти

Date
Math
Errors

*/


// Errors

/*
Помилка - це об'єкт
*/


/*
Типи помилок:


 TypeError - некоректна робота з типами даних
 ReferenceError - виклик неіснуючої змінної/доступ до неіснуючого об'єкту
 SyntaxError - помилка написання коду
 RangeError - вихід за діапазон значень

 URIError - помилка з URI
 InternalError - помилка всередині рушія JS. Нестандартна, може ніколи не зустрітись
 EvalError - помилка при використанні функції eval(). Не використовуйте eval

*/



/// Таска: написати функцію, яка знаходить добуток двох чисел

function multy(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        // викинути помилку
        throw new TypeError('Both arguments must be numbers');  // throw викидає об'єкт помилки і зупиняє подальшу роботу коду
    }
    return num1*num2;
}


console.log('Код працював, працював, і викликав функцію')





// Передбачення роботи з помилками - це обробка помилок


try {
     // блок коду, який може викидати помилки

     const result = multy('aa', 'aaa');
    console.log(result);  // не відпрацює
    /// цей блок виконується до першої помилки
} catch(error){
    // в цьому блоці коду, який виконається ТІЛЬКИ ЯКЩО в блоці try сталася помилка - об'єкт помилки лежить в error
    console.log(error);
}


console.log('Код працює далі')


/*
Написати функцію, яка приймає два числа - start і end, повертає масив, наповнений числами від числа start до числа end. Включно з крайніми числами

1. Якщо нам передали не числа - викинути одну помилку
2. Якщо нам передали число end, яке меньше за число start - викинути іншу помилку

3. Виклик функції огорнути в try-catch

2, 5 -> [2, 3, 4, 5]
*/

function getRange(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number') {
        throw new TypeError('Both arguments must be numbers');
    } 
    if ( end < start) {
        throw new RangeError('End must be greater than start');
    }
    const arr = [];
    const size = end - start;
    for (let i = 0; i <= size; i++){
        arr[i] = start++
    }
    return arr;

}


try {
    getRange('d', 1);
} catch(er) {
    console.log(er.message) // повідомлення помилки
}