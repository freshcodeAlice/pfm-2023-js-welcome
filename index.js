/* Області видимості


Область видимості - це той участок коду, де певне значення видиме, тобто ми можемо до нього достукатись


1. Змінні let і const видимі тільки всередині блоку, в якому вони визначені
2. Змінні визначені в загальному потоці коду є глобальними.


Функції мають доступ до області видимості, в яких ці функції визначені.


*/

let value2 = 'Вася';


function logger() {  /// Локальна область видимості
    let value = 'a'; // Локальна змінна
    console.log(value);

}




logger();

//anotherFun();


function anotherFun(){
    console.log(value); // Використається глобальна змінна
}
/// Покищо глобальної змінної value не існує

let value = 10;



function sayHello() { //Не детермінована через використання глобальної змінної
    console.log('Привіт, ', value2);
}



function changeName() {
    value2 = 'Саша'; //Мутація даних, ми змінили дані в глобальній змінній
}

sayHello(); // Виклик без аргументів - це все одно виклик з вхідними даними
changeName();


sayHello();


function determSayHello(name) {
    console.log("Гарний день, ", name);
}

let userName = 'Вася';

determSayHello(userName);
userName = 'Петя';
determSayHello(userName);
determSayHello(userName);



/*
Висновки:


1. Використання глобальний змінних, які хтось може змінити - це погана ідея
2. Для того, щоби функція точно працювала правильно, варто її робити принаймні детермінованою (а краще - чистою).
Всі значення, які потрібні функції, варто робити аргументами функції




*/



function calculator() {
    let a = 5;
    let b = 10;
    let result = sub(a, b);
    console.log(result);
}


function sub(num1, num2) {
    return num1 - num2;
}

