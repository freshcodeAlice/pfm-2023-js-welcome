/* Функції-конструктори */





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


const car = new Car('lanos', 100)  // Екземпляр




/* Прототипи */

function Rabbit(name, color){
    this.name = name;
    this.color = color;


}


function RabbitLogic () {
    this.jump = function() {
        console.log(`${this.name} is jumping`)
    }
    this.eat = function() {
        console.log(`${this.name} says nyam-nyam`);
    }
}


const rabLogic = new RabbitLogic();

Rabbit.prototype = rabLogic;

console.log(rabLogic);

const rabbit1 = new Rabbit('Ricky', 'grey');
rabbit1.eat();

rabLogic.bite = function() {
    console.log(`${this.name} bite you!`);
}


/*
Переписати котів та юзерів на 
окремо об'єкт з даними - окремо об'єкт з методами
і зв'язати їх прототипом

*/



function Cat(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
}

function CatPrototype() {
    this.meow = function() {
        console.log('meoooow');
    }
}

const catProto = new CatPrototype();
Cat.prototype =  catProto;

const cat1 = new Cat('Murz', 8, 'grey');

const cat2 = new Cat('Murka', 3, 'red');

const cat3 = new Cat('Barsik', 2, 'black');


//2


function User(firstName, lastName, age, mail) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.mail = mail;
   
}

function UserPrototype() {
    this.sayHello = function(){
        console.log(`${this.firstName} say: "Hello"`)
    }
}

const userPrototype = new UserPrototype();
User.prototype = userPrototype;

const user1 = new User('John', 'Doe', 18, 'daasdasd');
const user2 = new User('Jane', 'Snow', 30);