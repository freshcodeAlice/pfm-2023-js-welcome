/* Цикли */



/*
Написати функцію, яка приймає у користувача розмір (dimension) і малює будь-яким символом квадрат заданого розміру


*/

let userPrompt = Number(prompt('Введіть розмір фігури'));

//drawSquare(userPrompt);

drawEmptySquare(userPrompt)

function drawSquare(dimension) {
        let str = '';

    for(let j = 0; j < dimension; j++) {
        for(let i=0; i < dimension; i++) {

            str += '* ';
        }
        str += '\n'
    }
        
    console.log(str);

}


/* Намалювати квадрат пустим */

function drawEmptySquare(dimension) {
    let str = '';

for(let j = 0; j < dimension; j++) {
    for(let i=0; i < dimension; i++) {
        
        if(j === 0 || j === dimension - 1 || i === 0 || i === dimension - 1) { // якщо поточна ітерація циклу - це рамка, то малюємо зірочку
            str += '* ';
        } else {
            str += '  ';         // інакше - малюємо пробіл
        }


    }
    str += '\n'
}
    
console.log(str);

}


/*
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