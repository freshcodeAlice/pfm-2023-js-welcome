const user = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 18,
    email: 'joe@u.jdsa',
    favouriteFilm: 'It'
}

/* for ... in */

/*


let key = 'firstName';
console.log(user[key]);
key = 'lastName';
console.log(user[key]);
key = 'age';
console.log(user[key]);
key = 'email';
console.log(user[key]);
key = 'favouriteFilm';
console.log(user[key]);
*/
/*
 for (const key in user) {  // key на кожній  ітерації циклу отримує значення ключа об'єкта
    console.log(user[key]); /// age - 18
 }
 */

/*
Написати функцію, яка приймає об'єкт юзера і виводить всю інформацію про нього у вигляді:
firstName: Jane
lastName: Doe
age: 18
email: joe@u.jdsa
favouriteFilm: It


*/



function printUserInfo(user) {
    for (const key in user) {  // key на кожній  ітерації циклу отримує значення ключа об'єкта
        console.log(`${key}: ${user[key]}`); /// age - 18
     }
}

printUserInfo(user)

/*
Написати функцію, яка приймає об'єкт, що містить такі дані:


let obj = {
    a: 1,
    b: 'hello',
    v: true,
    c: 10,
    d: 20
}

Повернути з функції суму числових значень

*/


let obj = {
    a: 1,
    b: 'hello',
    v: true,
    c: 10,
    d: 20
}


function getSumOfNumberValues(obj) {
    let sum = 0;
    for (const key in obj) {
        if(typeof obj[key] === 'number') {
            sum += obj[key];
        }

    }
    return sum
}


/*
Таска на обчислювані властивості


*/




function getPlan() {
    const weekPlan = {
        Mon: 'go to work',
        Tue: 'friend party',
        Wed: 'dantist',
        Thu: 'homework',
        Fri: 'Walk in the park',
        Sat: 'lie in bed'
    }
    // яка запитує у користувача день тижня, який цікавить і повертає alert-ом план, який є у об'єкті
    let userInput = prompt('Який день тижня вас цікавить?');
    alert(weekPlan[userInput] || 'Nothing planned')
}