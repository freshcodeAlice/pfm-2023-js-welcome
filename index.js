/* Методи масивів */

/*
name
lastName
email
age
gender

*/

const USERNAMES = ['John', 'Josh', 'Jane', 'Rick', 'Keyli', 'Li', 'Bill', 'Mark', 'Sten'];


function User(name, lastName, email, age, gender){
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.gender = gender
}


function generateOneUser(){
    const name = USERNAMES[getRandom(0, USERNAMES.length)];
     const user = new User(name, 'Doe', `mail${getRandom(0, 100)}@mail.com}`, getRandom(10, 100), (Math.random() > 0.5) ? 'male' : 'female');
     return user;
    }

function getRandom(min, max) {  // генерація рандомного числа в заданому діаізоні
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getUsersArray(dimension) {
    const arr = new Array(dimension);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = generateOneUser();
    }
    return arr;
}



/*
Умовний (тернарний) оператор

if(умова) {
    блок коду, якщо умова - true
} else {
    блок коду, якщо умова - false
}

result = (умова) ? (результат, якщо умова - true) : (результат, якщо умова - false)

*/