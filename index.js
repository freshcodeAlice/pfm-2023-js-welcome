/* Функції-конструктори */

/*
 const cat = {
    name: 'Murz',
    age: 8,
    color: 'grey',
    meow: function() {
        console.log('meow')
    }
 }


 const cat2 = {
    name: 'Murka',
    age: 3,
    color: 'red',
    meow: function() {
        console.log('meow')
    }
 }

 const cat3 = {
    name: 'Barsik',
    age: 2,
    color: 'black',
    meow: function() {
        console.log('meow')
    }
 }

 */

/* Функція-конструктор: особливий "режим" роботи функції, при якому вона створює об'єкт за заданим шаблоном і повертає його внаслідок роботи

*/

function Cat(name, age, color) {
    /// До всього-всього - ключове слово new створює новий об'єкт
    // посилання на цей конкретний новостворений об'єкт кладеться в this
    /// this = {}
    this.name = name;
    this.age = age;
    this.color = color;
    this.meow = function() {
        console.log('meoooow');
    }
}

const cat1 = new Cat('Murz', 8, 'grey');

const cat2 = new Cat('Murka', 3, 'red');

const cat3 = new Cat('Barsik', 2, 'black');


/* Написати функцію-конструктор для юзера
Властивості:
- ім'я
- прізвище
- вік
- мейл

метод
- sayHello
*/


function User(firstName, lastName, age, mail) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.mail = mail;
    this.sayHello = function(){
        console.log(`${this.firstName} say: "Hello"`)
    }
}


const user1 = new User('John', 'Doe', 18, 'daasdasd');
const user2 = new User('Jane', 'Snow', 30);


/*
Створити функцію-конструктор для сутності Країна
Country
- назва
- population (кількість населення)
- area (площа)

Метод
- щільність населення (getDensity)
    кількість населення / площу країни

*/


function Country(name, population, area) {
    this.name = name;
    this.population = population;
    this.area = area;
    this.getDensity = function(){
        return this.population / this.area;
    }
}


const ukr = new Country('Ukraine', 43790000, 603628);



/*
Написати функцію-конструктор для авта
- name,
- maxSpeed
- speed

Реалізувати методи:
- accelerate(value) - прийняти в функцію величину в km/h і збільшити поточну швидкість на вказану величину
- deaccelerate(value) - прийняти величину і зменшити поточну швидкість
- stop() - зупинка машини (швидкість = 0)



*/


function Car(name, maxSpeed) {
    this.name = name;
    this.maxSpeed = maxSpeed;
    this.speed = 0;

    this.accelerate = function(value = 0) {
        if (isNaN(value)){
            return false; // Error
        }
        this.speed += value;
        if (this.speed > maxSpeed) {
            this.speed = maxSpeed;
        }
        return this.speed
    }

    this.deaccelerate = function (value = 0) {
        if (isNaN(value)){
            return false; // Error
        }
        this.speed -= value;
        if (this.speed < 0){
            this.speed = 0;
        }
        return this.speed
    }

    this.stop = function() {
        return this.speed = 0;
    }

}