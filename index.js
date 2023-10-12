/* Об'єкти 

Об'єкти мають властивості та методи.
Ключ (назва властивості) може бути тільки двох типів даних - рядок (String) або Symbol

*/

let computer = {
    memory: 1024,
    color: 'black',
    monitor: {
        width: {
            value: 24,
            uom: 'inch'
        },
        height: {
            value: 30,
            uom: 'inch'
        },
        manufacturer: {
            name: 'Sony',
            address: {
                country: 'Japan',
                city: 'Tokyo'
            },
        },
    },
    compProperty: 'some value',
    on: function() {
        console.log('This comp is on')
    }
}


computer.on();




/*
Оператори доступу до властивостей

. - доступ до властивості за її назвою

computer.color

[] - доступ до обчислюваної властивості 

*/

let cat = {
    name: 'Murzik'
}

let property = 'name';

cat[property]  /// cat['name'] === cat.name


/*
Створити об'єкт чашки
Чашка має властивості:
- колір (color)
- об'єм (volume)
- форма (form)

Маємо три змінні:
let prop1 = 'color';
let prop2 = 'volume';
let prop3 = 'form';


*/


let cup = {
    color: 'blue',
    volume: '300ml',
    form: 'circle',
}

let prop1 = 'color';
let prop2 = 'volume';
let prop3 = 'form';

console.log(cup[prop1]);  /// cup.color
console.log(cup[prop2]);  /// cup.color
console.log(cup[prop3]);  /// cup.color
