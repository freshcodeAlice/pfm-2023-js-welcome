/*
Логічне І  (&&)

Результат - перший операнд, який був false, або останній операнд, якщо всі були true
*/

let age = 30;

// потрібно дізнатись, чи вік користувача в діапазоні від 20 до 40 років

/*
age >= 20  &&  age <= 40
true            true            === true
false           true            === false
true            false           === false
false           false           === false

Логічне І (AND) виконує всі умови, якщо всі вони - true, то результатом буде true
Якщо хоч хтось з операндів - false, то результатом буде false

Якщо операнд буде не Boolean, то він автоматично конвертується для порівняння в Boolean
*/

/*
Логічне АБО (||)

Результат - повертає перший true-операнд, або останній false, якщо всі були false
*/


false || null || undefined

/*
age >= 20  ||  age <= 40
true            true        === true
false           true        === true
true            false       === true
false           false       === false

*/


let userName = 0;

let consoleMessage = 'Привіт, ' + (userName || 'Аноним');

console.log(consoleMessage);