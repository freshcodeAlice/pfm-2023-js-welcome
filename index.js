/* Методи примітивів */


/*
При розробці js стояло дві мети:
1. Зробити примітиви легкими (не робити їх об'єктами)
2. Надати розробникам функціонал (властивості та методи) для зручної роботи



Примітиви - це примітиви.


*/



let a = 'hello'; // створюю примітивне значення, кладу його в змінну

a.length // викликаю властивість примітива
/*
1. Під капотом рушія js неявним чином створюєтся Об'єкт-обгортка
new String('hello')
2. У новоствореного об'єкта викликається потрібна властивість або метод, результат повертається на місце виклику
3. Об'єкт-обгортка знищується, примітив залишається примітивом.

*/

// Boolean

let bool = true;

// Number

Number.isNaN() /// друга версія глобальної функції isNaN


/// String

let str = 'lorem ipsum dolor sit amet';
           


str.at(0) /// === str[0] - повертає символ рядка за вказаним індексом
// повертає undefined, якщо переданий індекс виходить за межі рядка


str.charCodeAt() // повертає unicode-номер символа, що стоїть за вказаним індексом

let str2 = 'hello';

str.concat(' ', str2); // конкатенація рядків


str.includes('a') // шукає переданий підрядок у початковому рядку


str.indexOf() // повертає індекс першого входження підрядка в рядок. Якщо нема = -1


str.repeat() // повторює і склеює рядки задану кількість разів


//str.replace(str1, str2) // шукає входження str1 в рядку і замінює їх на str2. Може працювати як з підрядками, так і регулярними виразами 


str.slice() // копіює в новий рядок вказану частину від початкового індексу до кінечного


//str.split(separator) //  перетворювати рядок тексту на Array,тобто розбивати рядок на масив одиниць, використовуючи вказаний сепаратор. Split - зворотня операція до методу масиву join()


str.trim() // обрізає зайві пробіли на початку та в кінці рядка


str.toUpperCase() // перетворює в верхній регістр (великі літери)
str.toLowerCase() // перетворює в нижній регістр (маленькі літери)

function checkEqString(str1, str2) {
   return str1.toLowerCase() === str2.toLowerCase();
}

checkEqString('check', 'check') // true
checkEqString('CHECK', 'check') // true
checkEqString('cheCK', 'CHeck') // true



/*
Написати функцію, яка приймає рядок тексту, що містить різні слова. Повернути рядок, в якому кожне нове слово - з великої літери

*/

/*
function capitalizeString(str) {
    const arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
       let firstLetter = arr[i][0];
       let upper = firstLetter.toUpperCase();
        arr[i] = upper + arr[i].slice(1);
    }
    let res = arr.join(' ');
    return res;
}
*/

function capitalizeString(str) {
    return str.split(' ').map((word) => word.at(0).toUpperCase().concat(word.slice(1))).join(' ');
}



/*
Таски:

1. Написати функцію, яка приймає рядок тексту і має всередині масив з "забороненими словами". Повертає true, якщо рядок містить заборонене слово, і false, якщо не містить

const checkArr = ['xxx', 'viagra', 'spam']

*/

const checkArr = ['xxx', 'viagra', 'spam', 'XxXxX']

/*
function isSpam(str, badWordsArray) {
    for (let i = 0; i < badWordsArray.length; i++) {
        if(str.toLowerCase().includes(badWordsArray[i].toLowerCase())){
            return true
        }
    }
    return false
}
*/

function isSpam(str, badWordsArray){
   return badWordsArray.filter((badWord) => str.toLowerCase().includes(badWord.toLowerCase())).length !== 0;
}


/*
2. Написати функцію truncate() яка приймає рядок і задану довжину.
Якщо рядок довший за вказане число, то результатом повертається обрізаний рядок, в кінці якого - "..."
Якщо рядок початково менший, то нічого не обрізається

*/

/*
function truncate(str, length) {
    if(str.length <= length) {
        return str;
    }
    return str.slice(0, length).concat('...');
}

*/

function truncate(str, length) {
    return (str.length <= length) ? str : str.slice(0, length).concat('...');
}


/*
написати функцію, яка приймає рядок і повертає true, якщо рядок є паліндромом і false, якщо не є
Паліндром - це рядок, який однаково читається з обох боків

isPalindrom('hannah') // true
isPalindrom('mama') // false
isPalindrom('racecar') // true
isPalindrom('computer') // false

*/

function isPalindrom(str) {
   return str.toLowerCase().split('').reverse().join('') === str.toLowerCase()
}


/*
Написати функцію, яка приймає рядок і масив голосних літер, повертає кількість включень голосних у заданому рядку

function countVowels(str, vovelsArray)

vovelsArray = [a, e, i, o, u, y]

'hello to you' //6

'lorem ipsum dolor sit amet' // 9

*/

/*
function countVowels(str, vowelArray) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
       if(vowelArray.includes(str[i])){
        count++
       }
    }
    return count
}
*/

const vovelsArray = ['a', 'e', 'i', 'o', 'u', 'y'];


function countVowels(str, vowelArray){
    return str.split('').filter(letter => vovelsArray.includes(letter)).length
}


/*

Написати функцію, яка знаходить суму цифр в заданому числі. Користуватися методами рядка


*/


function getSumOfNumber(num){
    return String(num).split('').reduce((accum, elem) => accum + Number(elem), 0);
}