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


