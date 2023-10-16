/* Масиви */

const array = {
    0: 3,
    1: 2,
    2: 1,
    3: 4,
    length: 4
}


const nativeArray = [3, 2, 1, 4];


/*
Масив - впорядкована сукупність даних.
В JS дані в комірках масива можуть бути різних типів.
Нумерація з 0 (відповідно останній індекс = розмір - 1)

Будь-який масив - екземпляр глобального вбудованого об'єкта Array (який містить купу корисних методів для роботи)

*/



/*
Таска: дан масив [5, 4, 3, 2, 1]
Вивести на консоль всі елементи масиву програмним методом

*/


const newArr = [5, 4, 3, 2, 1];

for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i]);
}


/*
Написати функцію, яка приймає масив і повертає суму його числових значень

*/


function getSumOfArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
       if(typeof array[i] === 'number') {
        sum += array[i];
       }
    }
    return sum;
}


/*
Таска 1: Даний масив. Написати функцію, яка знаходить найбільше числове значення в масиві.

Таска 2: Написати функцію, яка знаходить найменше числове значення в масиві


*/

function getMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
       if(array[i] > max) {
        max = array[i]
       }
        
    }

    return max;
}



function getMin(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
       if(array[i] < min) {
        min = array[i]
       }
        
    }

    return min;
}



/*
 Знайти середнє аріфметичне числових елементів масива

*/


function getAverageOfArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
       if(typeof array[i] === 'number') {
        sum += array[i];
       }
    }
    return sum / array.length;
}
