/*
1. Площа квадрата

2. Квадратне рівняння


3. Меню

*/


//1

function getSquareOfSquare(a) {
    return a*a;
}


//2
function getRootsOfQuadraticEquation(a, b, c) {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        console.log('Невірні вхідні дані'); /// краще повернути помилку
        return false;
    }
    let d = b**2 - 4*a*c;
    if (d < 0) {
        console.log('Рівняння не має коренів'); // повернути null
    } else if (d === 0) {
        let x = -b / 2*a;
        console.log('Рівняння має корінь ', x); // повернути одне значення
    } else {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        console.log('х1 = ', x1);  // повернути два значення
        console.log('x2 = ', x2);
    }
}



//3

function getMenu() {
    debugger;
    let userOption = prompt('Виберіть напій: \n 1 - Сік\n 2 - Вода\n 3 - Чай');
    switch(userOption) {
        case '1': {
            alert('Ви обрали сік');
            break;
        }
        case '2': {
            alert('Ви обрали воду');
            break;
        }
        case '3': {
            alert('Ви обрали чай');
            break;
        }
        case null:
        case '': 
        {
            alert('Ви нічого не обрали');
            break;
        }
        default: {
            alert('Такого напою не подаєм')
        }
    }
}




///// Приклад: Запросити у користувача номер місяця
// Якщо вказаний місяць - це січень, або лютий, або грудень - вивести "зима"
// Якщо березень, квітень, травень - вивести "весна"
// Якщо червень, липень, серпень - вивести "літо"
// Якщо весерень, жовтень, листопад - вивести "осінь"

function getSeason() {
    let monthNumber = Number(prompt('Введіть номер місяця'));
    switch(monthNumber) {
        case 1:
        case 2:
        case 12: {
            alert('Зима');
            break;
        }
        case 3:
        case 4: 
        case 5: {
            alert('Весна');
            break;
        }
        case 6:
        case 7:
        case 8: {
            alert('Літо');
            break
        }
        case 9:
        case 10:
        case 11: {
            alert('Осінь');
            break
        }
        default: {
            alert('Такого сезону нема')
        }
    }
}