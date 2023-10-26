/* Замикання */

/*
Замикання - це комбінація функції та її лексичного оточення (області видимості)
*/

// let variable = 'John';

function printName() {
     let variable = 'Rick';
    console.log(variable);

    return function (){
        console.log(`${variable} say Hello`); /// Замикання - це те, що ось ця внутрішня функція ЗАПАМ'ЯТАЛА значення variable
    }


}

    const result = printName(); // printName відпрацювала і вмерла

    result();


    function makeCounter(){
        let i = 0;
        let j = 5;
        return function() {
 //           debugger;
            return i++;
        }

        /// на цьому функція makeCounter всьо
    }

    const firstCounter = makeCounter();

    const secondCounter = makeCounter();

    function fullName(lastName){
        return function(firstName) {  // lastName буде запам'ятовуватись із
            return `${firstName} ${lastName}`;
        }
    }

    const family = fullName('Doe');
    // family('John')

    const liFamily = fullName('Li');
    liFamily('John') // John Li
    liFamily('Rick li') // rick li


    function getURL(protocol){
        return function (domain) {
            return `${protocol}://${domain}`; 
        }
    }

    const https = getURL('https'); ///  запам'ятала протокол https
  //  https('google.com');
  // https('wikipedia.org'); 

  const ftp = getURL('ftp'); // повертається посилання на внутрішню функцію, яка запам'ятала ftp
  // ftp('google.com') ---> ftp://google.com

  const ws = getURL('ws') // websocket


  const urlCreater = protocol => domain => `${protocol}://${domain}`;


  /*
Створити функцію createAdder, яка приймає параметр m і повертає функцію, що приймає параметр n і повертає суму m + n

// createAdder(10) -> inner(20) // 10+20 
                    -> inner(30) // 10+30
   */

//  function createAdder(m) {
//     return function(n){
//         return m+n
//     }
//  }

const createAdder = m => n => n+m;

 const inner = createAdder(10);
const inner2 = createAdder(50);


/*  Каррування (currying) - це процес перетворення функції, яка приймає n аргументів на n функцій, які приймають 1 або більше аргументів
Зниження арності функції
арність (розмірність) - кількість аргументів функції

*/

// https://google.com/path?key1=value2

function URL(protocol, domain, path, queryParams) {
    return `${protocol}://${domain}/${path}?${queryParams}`
}

function fullURL(protocol) {
    return function(domain) {
        return function (path) {
            return function(queryParams='') {
                return `${protocol}://${domain}/${path}${queryParams ? `?${queryParams}` : ''}`
            }
        }
    }
}

const URLhttp = fullURL('http');
const URLdom = URLhttp('mysait.com'); // http, 'mysait'

const URLpath = URLdom('index');
//const URLquery = URLpath('key1=valu1');



///// об'єкт і замикання

function makeAPICounter() {
    let count = 0;
    return {
        increment() {
            return ++count;
        },
        decrement() {
            return --count;
        }
    }
}

const objCounter = makeAPICounter(); //  повертається об'єкт, який має два методи, що зберігають count в замиканні