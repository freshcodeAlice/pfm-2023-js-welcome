/* Цикли */


/*
Цикл - повторення певної дії n-ну кількість разів

Кожен раз повторення (кожний оберт) називається ітерація

*/

/*
while (умова) {
    блок коду, який повторюється, поки умова = true
} 
*/

/*
let counter = 0;
debugger;
while(counter < 5) {
    console.log(counter);
    counter++;
}

*/






/// Задача: є змінна goodPassword = 'qwerty'
// Запитати у користувача його пароль. Якщо він співпадає - вийти з цикла, якщо ні - продовжувати запитувати

/*
let goodPassword = 'qwerty';

while(true) {
    let userInput = prompt('Введіть пароль');
    if(userInput === goodPassword) {
        break; // якщо так - більше запитувати не треба
    } 
    alert('Неправильний пароль')
}


console.log('Це був правильний пароль')
*/


/*

Переписати попередній цикл так, щоби у користувача було лише 3 спроби вводу неправильного паролю


let goodPassword = 'qwerty';

let attempts = 0;
// debugger;

while(attempts++ <= 3) {

    let userInput = prompt('Введіть пароль');
    if(userInput === goodPassword) {
        ok();
        break; // якщо так - більше запитувати не треба
    } 
    alert('Неправильний пароль, введіть ще раз')
}



function ok() {
    console.log('Це був правильний пароль, тепер ми вас пустимо в кабінет');

}

*/

/* 

do {
    блок коду, який виконується на кожній ітерації
} while(умова)

*/

/*
let counter = 4;
do {
    console.log(counter);
    counter++; 
} while(counter <= 3) 

*/
/*
Для того, щоби цикл працював правильно, у нас має бути:
1. Лічильник ітерацій
2. Умова має бути пов'язана з цим лічильником
3. На кожній ітерації лічильник має змінюватись
*/


// Цикл for

/*

for (ініціалізація лічильника; умова виходу з циклу; дія з лічильником) {
    блок коду, який виконуватиметься в циклі
}

*/
///debugger;

for(let counter = 0; counter <= 3; counter++) {
    console.log(counter);
}



/*
let number = 4;
Написати за допомогою циклу зведення числа у 5 ступінь

*/

let number = 4;
let res = 1;
for (let counter = 0; counter < 5; counter++) {
    res = res * number;
}


/*
Написати цикл, який обчислює факторіал числа 5

F! = 1 * 2 * 3 * 4 * 5


*/

let factNumber = 5;
let result = 1;
for (let counter = 1; counter <= factNumber; counter++) {
    result *= counter;
}