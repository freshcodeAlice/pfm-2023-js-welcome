const obj = {
    a: 'value',
    1: '1111'
}

const variable = 'a';

obj.a === obj[variable]

obj[1];


/*
Функції - як вони працюють?

*/
let n = 5;

function fn(num1, num2, num3){
    let res = (num1 + num2) - num3;
    console.log(n);
    return res; 
}


const result = fn(3, 4, 1);



function fn1(...arr){
    console.log(arr);
}


const fn2 = function() {

}

const arrow = (...arrr) => {

}



/*

this - це вказівник

*/

const bottle1 = {
    maxVolume: 300,
    currentVolume: 150,
    up: function() {
        this.currentVolume += 10;
        return this.currentVolume;
    },
    down: function(){
        this.currentVolume -= 10;
        return this.currentVolume;
    } 
}


function Bottle(maxVolume){
    // Оператор new створює нову пляшку і кладе посилання на неї в this
    this.maxVolume = maxVolume;
    this.currentVolume = 0;
}


const newBottle = new Bottle(300);

const bigBottle = new Bottle(700);



function emptyBottle() {
    this.currentVolume = 0;  // Щоби ця функція відпрацювала на потрібному об'єкті, цей об'єкт треба передати їй в якості this
}

emptyBottle.apply(newBottle, []); /// викликати функцію зараз, використовуючи в якості її this об'єкт newBottle
//emptyBottle.call(newBottle, arg1, arg2); 

const linkToWrappedFunction = emptyBottle.bind(newBottle);
/// десь потім в коді викликаємо готову функцію
linkToWrappedFunction();