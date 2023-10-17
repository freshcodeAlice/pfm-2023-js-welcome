/* Методи масива */

/*
join

*/
const arr = [2, 3, 4, 5];


function myJoin(array, separator = ',') {
    let str = '';
    for (let i = 0; i < array.length - 1; i++) {
        str += array[i]+separator   
    }
    return str + array[array.length - 1];
    // результатом роботи має бути рядок, який є результатом склеювання всіх елементів масива
}