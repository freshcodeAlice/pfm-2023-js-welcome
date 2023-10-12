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

 for (const key in user) {  // key на кожній  ітерації циклу отримує значення ключа об'єкта
    console.log(user[key]);
 }

