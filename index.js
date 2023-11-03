/* Symbol */

const symb = Symbol();

const obj = {
    key: 'value',
    a: 'b',
    1: 'c',
    [symb]: 'symbol key value'
}

const arr = [1, 2, 3, 4, 5, 6];


for (const key of arr) {
 //   console.log(key);
}



/*
Ітератор - це об'єкт (який є реалізацією ідеї-паттерна), що реалізує принцип перебору об'єкта


Symbol.iterator - це зарезервований системний метод, який повертає об'єкт ітератора

Виклик метода [Symbol.iterator] повертає об'єкт Ітератора
У об'єкті Ітератора має бути метод next()
Метод next() повертає об'єкт з двома обов'язковими властивостями:
    - value: це значення поточного елемента, якого ми перебираємо
    - done: чи дійшли ми до кінця колекції?

*/


const myObj = {
    _1: 'a',
    _2: 'b',
    _3: 'c',
    _4: 'd',
    _5: 'e',
    _6: 'f',
    length: 6,
    [Symbol.iterator]() {
        let i = 1;
        return {
            next: () => {
                return {
                    done: i >= this.length,
                    value: this[`_${i++}`]
                }
            }
        }
    }
}


/*
Написати ітератор для такого об'єкту:


*/

const exoticObj = {
    start: 2,
    end: 10,
    [Symbol.iterator]() {
        let from = this.start;
        let to = this.end + 1;
        return {
            next: () => {
                return {

                    value: from++,
                    done: from >= to,
                }
            }
        }
    }
}

/// Реалізувати ітератор таким чином, щоби перебір об'єкт виводив числа від start до end (включно)