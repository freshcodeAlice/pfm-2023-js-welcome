/*
Модальні вікна

alert(message) - Повідомляє користувача про message
prompt(message) - Запитує message і повертає результат (ЯКИЙ ЗАВЖДИ Є РЯДКОМ)
confirm(message) - Повідомляє message і користувач натискає Ok або Cancel (відповідно резльтутатом виклику буде true або false)


*/


//let result = prompt('Скільки вам років?');

//alert(Number(result));


/*
Спитати у користувача, скільки місяців він вивчає javascript
Вивести в консоль фразу "Я вивчаю javascript .... місяців"

*/

let howMuchTime = prompt('Скільки місяців ви вивчаєте javascript?');
let result2 = 'Я вивчаю javascript '+ howMuchTime + ' місяців';

console.log(result2);
