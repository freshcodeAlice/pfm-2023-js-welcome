/* Методи масивів */

// forEach(функція) - приймає функцію і виконує її на кожному елементі масиву
// результатом роботи forEach завжди є undefined
// Не змінює елементи масиву

const array = [4, 5, 6, 7, 8];

array.forEach(callback)


function callback(currentValue, index, array) {
    console.log(`${currentValue} --- ${index} --- ${array}`);
}




function myOwnForEach(array, fn){
    for (let i = 0; i < array.length; i++) {
      fn(array[i], i, array);        
    }
}


const users = [{
    name: 'John',
    lastName: 'Doe',
    email: '123@mail', 
    age: 15
}, {
    name: 'Josh',
    lastName: 'Foe',
    email: '321@mail',
    age: 20
}, {
    name: 'Jack',
    lastName: 'Crow',
    email: '456@mail',
    age: 18,
},{
    name: 'Jane',
    lastName: 'Snow',
    email: '654@mail',
     age: 13
}];

/*
users.forEach(function(currentUser){
    currentUser.age = 20;
})
*/

/*
Вивести мейли всіх юзерів на консоль
*/


users.forEach(function(currentUser) {
    console.log(currentUser.email);
})


/*  map() */


/*  map(функція) - приймає функцію, виконує її на кожному елементі початкового масиву і в якості результату повертає новий масив з результатами роботи коллбеку */


const emails = users.map(function(currentValue, index, array) {
    return currentValue.email
}); // ['123@mail', '321@mail', '456@mail', '654@mail']




/* filter() - фільтрує елементи масива на співпадіння умові */


// filter(функція) - створює новий масив, який складається з елементів початкового, які "пройшли перевірку" -
// функція, яку передали методу, повертає true - елемент пройшов
// функція повертає false - елемент не пройшов


const filtered = users.filter(function(currentValue, index, array) {
    return currentValue.age > 18
});


/*
Створити масив [4, 5, 6, 7, 8, 10]
Вільтрувати його так, щоби в результаті отримати масив з [4, 6, 8, 10]

*/

const res = [4, 5, 6, 7, 8, 10].filter(function(curNum) {
    return curNum % 2 === 0;
});



 /*  Sort */
 

 const arr1 = [7, 5, 23, 1, 2, 4];

 /// Сортує масив

 // sort(функція) - приймає функцію і сортує елементи масива відповідно до результатів роботи цієї функції
 // мутує масив (змінює початковий)

 function comparator(a, b) {   // порівнююча функція
    if (a > b) {  // якщо наступний елемент - більше ніж попередній - він має залишитись на місці
        return 1;
    } else if( a < b) { // якщо наступний менше - вони поміняються місцями
        return -1;
    } else {
        return 0;
    }
 }


 arr1.sort(comparator)


/// Задача: відсортувати юзерів за віком

users.sort(function (u1, u2) {
    return u1.age - u2.age
});


/*   reduce */

// Метод reduce зводить всі елементи масива до якогось одного результату

const arr5 = [3, 4, 5, 6, 7, 8, 9];

// Знайти суму всіх елементів масиву
const result = arr5.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
}, 0);