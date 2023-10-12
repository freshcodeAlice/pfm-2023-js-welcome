/// this

let cat = {
    name: 'Murzik',
    age: 8,
    color: 'red',
    eat: function() {
        console.log(`${this.name} Ням-ням`)
    },
    meow: function() {
        // console.log(this);
        console.log(`${this.name} каже Мяу`)
    }
}

/*
Ключове слово this вказує на об'єкт, який є контекстом виконання методу 
 
*/

/*
Створіть об'єкт, що описує квітку
Квітка має певну висоту
height: 20

Додати квітці метод grow(), який збільшує властивість висоти на 10см

*/

const flower = {
    height: 20,
    color: 'red',
    grow: function() {
        this.height += 10;
        return this
    }
}


/*
Chaining - (від chain - ланцюг) - організація коду таким чином, щоби було доступно виклик методів ланцюжковим способом:

flower.grow().grow()

*/


/*
Написати об'єкт ladder
Об'єкт має властивість currentStep

Два методи:
up() - піднімається на сходинку вверх (інкремент current)
down() - декремент (спускається на сходинку вниз)

Реалізувати методи таким чином, щоби був доступний ланцюжковий спосіб виклику



*/

const ladder = {
    currentStep: 0,
    up: function(){
        this.currentStep++;
        return this;
    },
    down: function() {
        this.currentStep--;
        return this;
    }
}