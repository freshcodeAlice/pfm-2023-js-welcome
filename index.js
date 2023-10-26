
/*
Написати функцію, яка приймає два числа - start і end, повертає масив, наповнений числами від числа start до числа end. Включно з крайніми числами

1. Якщо нам передали не числа - викинути одну помилку
2. Якщо нам передали число end, яке меньше за число start - викинути іншу помилку

3. Виклик функції огорнути в try-catch

2, 5 -> [2, 3, 4, 5]
*/

/**
 * 
 * @param {Number} start - Start of number sequence
 * @param {Number} end - End of number sequence
 * @throws {TypeError} - If arguments is not a number
 * @throws {RangeError} - If start < end
 * @returns {Array} - array with numbers between start and end
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


/* JSDocs - документація коду

1. Пишемо перед функцією.
*/

//getRange(undefined, undefined)


//  Таска: написати функцію, яка приймає два числа і повертає добуток цих чисел. У випадку, якщо аргументи - не числа - викинути помилку. І описати функцію в JSDoc

/**
 * 
 * @param {Number} num1 - First number
 * @param {Number} num2 - Second number
 * @throws {TypeError} - If one of arguments is not a number
 * @returns {Number} - Multiply of two numbers
 */

function multy(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        throw new TypeError('Both arguments must numbers');
    }
    return num1*num2;
}


try {
    multy(2, 'h');
} catch(error){
    console.log('Multy error:')
    console.log(error);
}


/*
Коли помилка викидається (throw) - вона передається від функції до функції, поки не викинеться в глобальний код і не зупинить інтерпретацію скрипта

*/


function getErr() {
    /// щось робить
    function newErr() {
        /// функція теж щось робить
        anotherFunc()
        function anotherFunc() {
            ///
            throw new Error('Some error');
        }
    }


    newErr()
}

try {
    getErr();
} catch(error) {
    console.log('Ooops! Something goes wrong. Did you broke something?')
}


/*
Таска: написати функцію, яка приймає масив з числами і число. Повертає новий масив, в якому кожен елемент = елемент з початкового масиву, помножений на прийняте в якості другого аргументу число

Якщо перший аргумент - не масив - видати помилку,
якщо другий аргумент - не число - видати помилку, якщо він = 0 - повернути пустий масив

Описати функцію в JSDoc

*/

/**
 * 
 * @param {Array} arr 
 * @param {Number} num 
 * @throws {TypeError} - if arguments is not fit
 * @returns {Array(Number)} - array with multyplied elements
 */

function multyArr(arr, num) {
    if (!Array.isArray(arr)){
        throw new TypeError('First argument must be an array');
    }
    if (typeof num !== 'number') {
        throw new TypeError('Second argument must be a number')
    }
    if (num === 0) {
        return [];
    }
    return arr.map((el) => el*num);
}

try {
    console.log(multyArr([2, 3, 1, 2, 2], 's'));
} catch(error) {
    console.log('Function error')
}