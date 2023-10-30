/* Рекурсія */


/*
Рекурсія - функція викликає саму себе (з іншими аргументами)


База рекурсії - умова, за якої наступного виклику функції не станеться, а замість цього повернеться обчислений результат
*/

//debugger;
function factorial(n){
    if (n === 1) {  // база рекурсії
        return 1;
    }
  
    return n*factorial(n-1) /// рекурсивний випадок
}


/// 5! = 1*2*3*4*5


//factorial(5);


/*
Написати рекурвну функцію, яка зводить число у заданий ступінь

pow(base, power)
5**3 = 5*5*5 = 125
5**1 = 5

*/

/*
function pow(base, power){
    if (power === 1) {
        return base;
    }
    return base * pow(base, power-1)
}
*/

const pow = (base, power) => (power === 1) ? base : base * pow(base, power-1)




const res = pow(5, 4);
//console.log(res);


/*
Знаходження н-члена послідовності Фібоначчі
F(n) = F(n-1) + F(n-2)

F(2) = 1; // база рекурсії
F(1) = 1;

*/


function fibonacchi(n){
    if (n === 1 || n === 2) {
        return 1;
    }
    return fibonacchi(n-1) + fibonacchi(n-2);
} 

// Зробити обчислення ряду Фібоначчі в циклі

function fibIter(n){
 //   debugger;
    let f1 = 1;
    let fnext = 1;

    let fn;

    if (n === 0)
    {
        return 0
    }    
    if (n === 1) {
        return f1
    }
 
 for (let i = 2; i <= n; i++){
        fn = f1 + fnext;
        f1 = fnext;
        fnext = fn;
    }

    return fn;
}



console.time('1');
fibonacchi(20)
console.timeEnd('1');


console.time('2');
fibIter(20)
console.timeEnd('2');




/*
Дано масив, що містить числа або вкладені масиви. Знайти найбільше число

[2, 4, 2, 3, [3, 1, 2, [3, 6, 4], 3], 1, [[[[[5]]]]]]

Декомпозиція задачі
1. Створити "порівнятор"
2. Перебрати масив і кожне число порівняти з порівнятором
3. Якщо поточне число - більше, то воно займає місце порівнятора
4. Якщо перед нами - не число, а масив, то зайти в нього і перебрати його повністю, порівнюючи його елементи.

*/


function findMax(arr){
    let max = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        if (Array.isArray(el)){
            // рекурсивний випадок
            el = findMax(el);
        }
        if (el > max) {
            max = el;
        }
        
    }
    return max;
}

/// [2, 4, 2, 3, [3, 1, 2, [3, 6, 4], 3], 1, [[[[[5]]]]]]  => [2, 4, 2, 3, 3, 1, 2, 3, 6, 4, 3, 1, 5]



/*
Таска: написати реалізацію методу flat(), який приймає масив з вкладеними масивами і повертає одномірний

*/

function flatten(arr, depth){

}

/*
Написати дві реалізації методу - одну рекурсивну, другу ітеративну (циклом)
Рекурсивну спробувати написати стрілкою в скороченому варіанті


Задачка з *: дописати метод sort, використовуючи рекурсію

[2, 1, 2, 2, [3, 2, 1], [2, [2, 2, 3, [3]]]] -> [2, 1, 2, 2, 3, 2, 1, 2, 2, 2, 3, 3]

Декомпозиція задачі:
0. Створити новий пустий масив, в який буде зберігатися результат
1. Пройтись по масиву від початку до кінця
2. Якщо перед нами - не масив - додаємо його до результуючого масиву
3. Якщо перед нами - масив, то:
    - проходимось по масиву від початку до кінця
    - якщо перед нами - не  масив - додаємо його до результуючого масиву
    
    - зменшувати глибину depth на 1

*/