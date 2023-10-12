
function sayHello(user) {
    let hello = '';
    if (user.age > 5 && user.age < 18) {
        hello = 'hi'
    } else if(user.age > 18 && user.age < 30) {
        hello = 'hello'
    } else {
        hello = 'Good afternoon'
    }
    console.log(`${hello}, ${user.name} ${user.lastName}`);
}

const user = {
    name: 'John',
    lastName: 'Doe',
    age: 20
}

sayHello(user);


function getBan(userObj) {
    userObj.banned = true;  // мутація об'єкта - ми змінили об'єкт в пам'яті, бо за посиланням можемо робити з об'єктом все що завгодно
}


/* const 

Константи 

*/


let a = 5;
a = 10;

const b = 10;
//b = 15; // TypeError: Assignment to constant variable.

const obj = {
    a: 'value'
}