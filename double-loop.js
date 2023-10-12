/*
1. Вирішити таски на подвійні цикли:

HomeTask 1:

Намалювати трикутник заданого користувачем розміру

*
**
***
****
*****
******

HomeTask 2:
Намалювати пустий квадрат з діагоналлю (зліва зверху - до права низу)

Задачка з *: Зробити квадрат зі зворотньою діагоналлю (з правого верхнього до лівого нижнього)

*/


//1
/*
let dimension = Number(prompt('Введіть розмір трикутничка'))

let str = '';
for (let i=0; i <= dimension; i++) {
    for (let j = 1; j <= i; j++) {
        str+= '*';
    }
    str += '\n'
}

console.log(str);
*/

//2

let dimension = Number(prompt('Введіть розмір трикутничка'));


let str = '';
for (let i=0; i < dimension; i++) {
    for (let j = 0; j < dimension; j++) {
        if (i === 0 || j === 0 || i === dimension - 1 || j === dimension - 1 || i === dimension - j - 1) {
            str += '* ';
        } else {
            str += '  ';
        }

    }
    str += '\n'
}

console.log(str);