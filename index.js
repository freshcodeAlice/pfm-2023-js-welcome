/* Об'єкти */

/*
Number
String
Boolean
null
undefined

BigInt
Symbol

*/

/*
Структура даних - це форма організації даних

Структури даних: змінна, об'єкт, масив, список

*/


/* 
Об'єкт - самостійна структурна одиниця, яка містить властивості(значення) та методи

Ключ: значення
*/

let value = 5;


function someFun() { // функція
    /// щось робимо
}


let monitor = {
    diagonal: 27,
    brightness: 200,
    aspectRatio: '16:9',
    on: function() {   // метод об'єкта
        console.log('Наш монітор працює!')
    },   // trailing coma
}


/*
Практика: описати об'єкт Кота.
Кіт має наступні властивості:
- ім'я
- колір хутра
- колір очей
- вага
- вік

Кіт вміє:
- нявкати ("Мяу")
- бігати ("Тигидик")
- їсти ("Ням-ням-ням")


*/



let cat = {
    name: 'Murzik',
    color: 'red',
    eyeColor: 'grey',
    weight: 10,
    age: 5,
    meow: function () {
        console.log('MEOOOOWWWWWWw')
    },
    run: function () {
        console.log('ТИГДИК-ТИГДИК')
    },
    eat: function() {
        console.log('Ням-ням-ням')
    },
    girlfriend: {
        name: 'Murka',
        color: 'grey',
        eyeColor: 'green'
    }
}

//Отримання значення з об'єкта   ---- Read
cat.color

console.log(cat);

///  Десь отут котику стукнуло 6 рочків

cat.age = cat.age + 1;   /// Update
//cat.age++;

console.log(cat);


//// тепер хочу додати коту нову властивість

cat.favouriteFood = 'tune';  /// create

/// видалити властивість age


delete cat.age




/*
Описати об'єкт квітки
Квітка має властивість:
- різновид
- колір
- висота

Квітка вміє 
- пити
- рости

Потім після опису квітки
1. Додати метод "розквітати"
2. Додати до висоти 10см
3. Видалити властивість "колір"


*/ 


let flower = {
    species: 'astra',
    color: 'red',
    height: 30,
    drink: function () {
        console.log('glglglg')
    },
    grow() {
        console.log('Im growing')
    },
    die: () => {
        console.log('im dying')
    }
}


flower.bloom = function () {
    console.log('Подивіться на ці квіточки')
};


flower.height = flower.height + 10;


delete flower.color;





/*
Особливості об'єктів

Об'єкти зберігаються за посиланням

*/


let obj = {
    a: 5,
    b: 10
}


let obj2 = {
    a: 5,
    b: 10
}


/*
Функції - це теж об'єкти

*/

let fun1 = function() {
    console.log("Я супер-функція")
}

let fun2 = fun1;


