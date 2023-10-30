
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
        if (age < 20) {
            // робимо щось, щоб не створювати екземпляр
            // return null; -- не спрацює, бо повернення примітиву ігнорується
          throw new Error('User under 18'); // якщо при спробі сконструювати юзера виникає помилка, об'єкт юзера не буде створений
        }
        this.age = age;
        this.email = email;

        // повертається this 
    }

    sayHello () {  // метод юзера у прототипі
        console.log(`${this.firstName} say Hello`)
    }


}




//const user = new User('Jane', 'Doe', 18, 'joe@gmail.com');


const user2 = new User('John', 'Doe', 20, 'joe@gmail.com');



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
        if (rate < 0) {
            throw new RangeError('Rate must be great that 0');
        }
        this.rate = rate;
        if (days < 0) {
            this.days = 0;
        } else {
            this.days = days;
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
