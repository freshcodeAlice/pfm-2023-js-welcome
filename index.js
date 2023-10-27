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
console.log(res);