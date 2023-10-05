/// Debugger

/*
Запитати у користувача число. Якщо воно парне - вивести в консоль, що воно парне
Якщо непарне - вивести, що непарне.

*/

debugger;

let userNumber = Number(prompt('Введіть число'));


if (isNaN(userNumber)) {
    console.log('Ви ввели не число')
} else if (userNumber % 2) {
    console.log('Це непарне число')
} else {
    console.log('Це парне число');
}

