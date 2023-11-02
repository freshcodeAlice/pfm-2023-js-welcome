
/*
const user = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 18,
    email: 'joe@gmail.com'
}
*/

/*
function User(firstName, lastName, age, email) {
    // create {}, this -> {}
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
   
}

function UserProto(){
    this.sayHello = function () {
        console.log(`${this.firstName} say Hello`)
    }
}

User.prototype = new UserProto();
*/



class User {
    constructor(firstName, lastName, age, email){
        // створюємо об'єкт, наповнюємо за шаблоном
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;

        // повертається this 
    }

    sayHello () {  // метод юзера у прототипі
        console.log(`${this.firstName} say Hello`)
    }

    set age(v) {
        if (v < 20) {
            // робимо щось, щоб не створювати екземпляр
            // return null; -- не спрацює, бо повернення примітиву ігнорується
          throw new Error('User under 18'); // якщо при спробі сконструювати юзера виникає помилка, об'єкт юзера не буде створений
        }
        this._age = v;
    }

    static isUser(u){
        return u instanceof User;
    }

}

// переписати класс User, переробивши встановлення age на сеттер 


//const user = new User('Jane', 'Doe', 18, 'joe@gmail.com');


const user2 = new User('John', 'Doe', 20, 'joe@gmail.com');





/*
Паливо (Fuel)
- об'єм (volume)
- щільність (density)

- getFuelWeight
вага палива


Авто
- модель
- власна вага
- паливо

- getFullWeight():
Розрахувати повну вагу авта

*/


class Fuel{
    constructor(volume, density) {
        this.volume = volume;
        this.density = density;
    }

    getFuelWeight() {
        return this.volume * this.density;
    }

}


class Auto{
    constructor(model, weight, fuel){
        this.model = model;
        this.weight = weight;
        this.fuel = fuel;  // в якості значення передається об'єкт
    }

    getFullWeight() {
        return this.weight + this.fuel.getFuelWeight()
    }
}


const kerosin = new Fuel(50, 0.9);

const bmv = new Auto('BMV', 500, kerosin);


/*
Друг
- ім'я
- кількість грошей
- посилання на іншого друга або null, якщо друзів не має

- метод getFriendMoney


*/


class Friend {
    constructor (name, amountCash, friend = null) {
        this.name = name;
        this.amountCash = amountCash;
        this.friend = friend;
    }

    getFriendMoney() {
        if (this.friend instanceof Friend) {  // ця перевірка має бути на приналежніть до друзів
            return this.amountCash + this.friend.getFriendMoney();
        } else {
            return this.amountCash;
        }
      
    }
}


const me = new Friend('John', 10, null);

const fr = new Friend('Jake', 10, me);


const fr2 = new Friend('Rick', 20, fr);

/*
Як дізнатись, що об'єкт є екземпляром певного класу

*/





/*
Створити клас Worker
- name
- rate
- days

Метод getSalary(), який розраховує зп за формулою: rate*days


*/


class Worker{
    constructor(name, rate, days) {
        this.name = name;
       //  this._rate = rate;
        // Замість вручну встановлення _rate - скористаємось сеттером:
        this.rate = rate;


        // this._days = days; -- Замість цього користуємось сеттером:
        this.days = days; 
    }


    // get - віддавати, set - встановлювати

    /*
    setRate(value) {
        if (value < 0) {
            throw new RangeError('Rate must be great than 0');
        }
        this._rate = value;
        return this._rate;
    }

    getRate(){
        return this._rate;
    }
    */

    get rate(){
        return this._rate;
    }

    /*
    Використання геттера:
    wrkr.tariff

    */

    set rate(value){  // 1 argument must be
        if (value < 0) {
            throw new RangeError('Rate must be great than 0');
        }
        this._rate = value;
    }

    /*
    wrkr.tariff = 10;

    */

    get days() {
        return this._days;
    }

    
    set days(value){
        if (value < 0) {
            this._days = 0
        } else {
            this._days = value;
        }
    }
    

    getSalary() {
        return this.rate * this.days
    }
}


const wrkr = new Worker('John', 5, 20);

/*
ставка не може бути < 0, якщо передали -ставку, викинути помилку
кількість відпрацьованих днів не може бути < 0, то не викидати, замість цього this.days = 0


*/


// після створення екземпляру зміни полів не валідуються

/// угода розробників: приватні поля мають перед ім'ям _

// приватні поля (підтримка вже є, але з'явилась нещодавно, неоновлені/старі браузери можуть не підтримувати цю можливість) - ім'я поля починається з #
// цей механізм реалізований у мові



/*
Інкапсуляція - приховання певної складнощі або даних від зовнішнього впливу

Якщо має бути можливість зміни - має бути наданий інтерфейс (відповідний метод, який зможе це зробити)


*/




/*
Створити класс RangeValidator
- start (початок)
- end (кінець діапазону)

Умова: кінець не може бути раніше за початок діапазону - викидуємо помилку, об'єкт не створюємо

реалізувати геттери та сеттери для обох властивостей
реалізувати метод validate(value) і перевіряє, чи входить знаення в діапазон
реалізувати геттер range -> [start, ...., end] 

*/


class RangeValidator{
    constructor(start, end){
        this.start = start;
        this.end = end;
    }

    get start(){
        return this._start;
    }

    set start(v) {
        this._start = v;
    }

    get end() {
        return this._end;
    }

    set end(v) {
        if (v < this._start) {
            throw new RangeError('End must be greate than start')
        }
        this._end = v;
    }

    get range(){
        // const arr = [];
        // for (let i = this.start; i <= this.end; i++){
        //     arr.push(i);
        // }

        return new Array(this.end-this.start+1).fill(null).map((el, i) => this.start + i)
    }

    validate(value) {
        return value >= this.start && value <= this.end
    }
}



/*  ООП  */


class Animal{
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    eat() {
        return `${this.name} is eating`
    }

    static isAnimal(obj) {
        return obj instanceof Animal;
    }

    toString() {
        return `${this.name} is ${this.type}`
    }

}





class Cat extends Animal {
    constructor(name){
        super(name, null); /// спочатку створився об'єкт Animal, туди додались всі дані, які йому були потрібні, і тільки після цього клас-наслідник може додавати свої властівості і методи
        this.type = 'cat';
    }

    run(){
        return `${this.name} is running`
    }


    eat() {
        return `${this.name} mrmyau`
    }
}


class Dog extends Animal {
    constructor(name) {
        super(name, null);
        this.type = 'dog';
    }


    bark() {
        return `gav-gav`;
    }
}

const cat = new Cat ('Murka');

/*
Якщо клас розширює інший класс (extends):
в конструкторі класу-наслідника першим ділом викликаємо конструктор батьківського класу

*/



/*
Створити клас Юзер, який має
- ім'я
- прізвище
- мейл

метод
- getFullName, який повертає повне ім'я


Класс Moderator,
який має все те саме + метод
 - getBan(user) -> user.isBanned = true

Класс Админ,
який вміє все те саме, що Модератор,
і властивість admin = true


*/


class Userrr {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}


new Userrr('John', 'Doe', 'fdskjhf@lkjsdf')

 class Moderator extends Userrr {
    constructor(firstName, lastName, email, anotherValue){
        super(firstName, lastName, email);
        this.anotherValue = anotherValue;
    }

    getBan(u) {
        return u.isBanned = true;
    }
 }

 class Admin extends Moderator {
    constructor(firstName, lastName, email, anotherValue) {
        super(firstName, lastName, email, anotherValue);
        this.admin = true;
    }
 }

 /*
User -> Moderator -> Admin

 */




/*
Створити клас Білка
- name
- color

- climb -> `ця білка лізе на дерево`


Створити клас Білка-Летяга, яка вміє не тільки лазати по деревах, але і літати
- maxFlyDistance

- fly(v) -> якщо v < maxFlyDistance -> `ця білка вміє літати так далеко`
            інакше -> 'ця білка не може залетіти так далеко'



Створити клас КазковаБілка,
яка окрім всього, що вміє Білка-Летяга вмітиме ще співати пісні і танці танцювати
- repertuar: [String] - перелік пісень, які білка вміє співати
- isDancing = false

dance() -> isDansing -> true

singASong(String) -> чи вміє білка співати цю пісню


*/

class Squirrel {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }


    climb() {
        return `${this.name} лазає по деревах`
    }
}


 class FlyingSquirrel extends Squirrel {
    constructor(name, color, maxFlyDistance) {
        super(name, color);
        this.maxFlyDistance = maxFlyDistance;
    }

    fly(v) {
        return this.maxFlyDistance > v ? `${this.name} білка вміє літати так далеко` : `${this.name} білка не вміє літати так далеко`
    }
 }


  class FairySquirrel extends FlyingSquirrel {
    constructor(name, color, maxFlyDistance, repertuar = []){
        super(name, color, maxFlyDistance);
        this.repertuar = repertuar;
        this.isDancing = false;
    }


    dance() {
        this.isDancing = true;
    }


    singASong(songName) {
        return this.repertuar.includes(songName) ? `${this.name} білка може це заспівати` : `${this.name} білка не може цього заспівати`
    }
  }

//////////////

 class Figure {   /* Абстрактний клас, від якого наслідуються інші класи */
    constructor(type) {
        this.type = type;
    }


    getSquare(){
        /// undefined
    }
 }


class Triangle extends Figure {
    constructor(a, b, angle) {
        super('tringle');
        this.a = a;
        this.b = b;
        this.angle = angle;
    }


    getSquare(){
        return 0.5 * this.a * this.b * Math.sin(this.angle);
    }
}


class Square extends Figure {
    constructor(a) {
        super('square');
        this.a = a;
    }

    getSquare() {
        return this.a*this.a;
    }
}


class Circle extends Figure {
    constructor(radius) {
        super('circle');
        this.radius = radius;
    }
}


function calculate(figure){
    if (figure instanceof Figure){
        return figure.getSquare();
    }

}


const trg = new Triangle(3, 2, 60);

calculate(trg);


/*
Клас Auto
- maxSpeed
- capacity
- fuel

start() - "машина їде"

Класс Truck
яка наслідується від Auto + має 
- maxCargo - максимальна вантажопідйомність

start() - "вантаж відправлено"

Написати функцію, яка стартує передану їй машину і виводить на консоль результат виклику методу

*/

class Car {
    constructor(maxSpeed, capacity, fuel) {
        this.maxSpeed = maxSpeed;
        this.capacity = capacity;
        this.fuel = fuel;
    }

    start(){
        return `машина їде`
    }
}

class Truck extends Car {
    constructor(maxSpeed, capacity, fuel, maxCargo) {
        super(maxSpeed, capacity, fuel);
        this.maxCargo = maxCargo;
    }

    start(){
        return "вантаж відправлено"
    }
}


function getStatus(auto) {
    if (auto instanceof Car) {
        console.log(auto.start());
    }
}