/* Стандартні вбудовані об'єкти

Date
Math
Errors

Date - не тип даних!
Це окремий об'єкт, який представляє певну точку часу у вигляді таймштемпу
*/

const date1 = new Date();

// копіювання дати: date -> timestamp (кількість мілісекунд) -> створити новий об'єкт з заданим часом
const timestamp = date1.getTime();
const copyDate = new Date(timestamp); // новий об'єкт з тою самою зафіксованою точкою часу


/* Задача: скільки днів залишилось до кінця місяця? */



const months = [31,28,31,30,31,30,31,31,30,31,30,31];

const date = new Date();
const howMuchDaysLeft = months[date.getMonth()] - date.getDate();

console.log(howMuchDaysLeft);


/* Задача: вивести назву поточного дня тижня */

const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

console.log(week[date.getDay()-1]);


/*
Вивести години, хвилини і секунди поточної дати у вигляді:

Зараз XX годин XX хвилин XX секунд
*/

console.log(`Зараз ${date.getHours()} годин ${date.getMinutes()} хвилин ${date.getSeconds()} секунд`);


/*
Написати функцію, яка запитує у користувача двома prompt-ами день і місяць його народження і виводить alert-ом, скільки днів лишилось до його дня народження.

Якщо в поточному році день народження вже був, то вивести кількість днів до наступного

1. Спитати користувача, коли він народився
2. Створити новий об'єкт з датою з цими даними
3. Порівняти з поточною датою, якщо день народження вже пройшов - додати рік і порахувати, скільки лишилось.


milliseconds -> days: 100*60*60*24
*/


function getDaysLeftToBirthday(){
    const userBirthDay = Number(prompt('Введіть день свого народження'));
    const userBirthMonth = Number(prompt('Введіть місяць свого народження'));

    const today = new Date(); // витягнути рік
    let userbDate = new Date(today.getFullYear(), userBirthMonth - 1, userBirthDay);
   
    if(userbDate < today) {    //// якщо в цьому році вже дн був - додати рік
        userbDate = new Date(userbDate.setFullYear(today.getFullYear() + 1));
    }

    const millisecondsInDay = 1000*60*60*24;

    const res = (userbDate - today) / millisecondsInDay;
  alert(`До дн залишилось ${res.toFixed()} днів`)

}

getDaysLeftToBirthday()