/* Map */

/*
1. Мапа містить пари ключ-значення
Ключем може бути будь-що
- String
- Number
- Boolean
- Object
- Symbol
- Function
- Array

2. Ключі унікальні (неможливо мати двох однакових ключів) і зберігаються у тому самому порядку, в якому були додані

*/
const s = Symbol();

const obj = {
    a: 'value',
    1: 'v',
    [Symbol()]: 'ttttt' 
}


const mapa = new Map([['stringKey', 'stringValue'], [{}, 'objectValue']]);

const auto = {
    speed: 150
}

mapa.set('aaa', 'ttt');
mapa.set(121, 340);
mapa.set(true, null);
mapa.set(auto, 'obj');
mapa.set(()=>{}, 'function');


mapa.keys();
/*MapIterator {'stringKey', {…}, 'aaa', 121, true, …}[[Entries]]0: "stringKey"1: Object2: "aaa"3: 1214: true5: Object6: ()=>{}[[Prototype]]: Map Iterator[[IteratorHasMore]]: true[[IteratorIndex]]: 0[[IteratorKind]]: "keys"
*/
mapa.values();
/*
MapIterator {'stringValue', 'objectValue', 'ttt', 340, null, …}
*/
[...mapa.keys()];
//(7) ['stringKey', {…}, 'aaa', 121, true, {…}, ƒ]
[...mapa.values()]


////  

const vocabulary = new Map([['cat', 'кішка'], ['dog', 'собака'], ['eat', 'їсти'], ['milk', 'молоко'], ['meat', 'м\'ясо']]);

//vocabulary.set()

function translater(str, vocabulary) {
    const words = str.split(' ');
    return words.map((word) =>  vocabulary.has(word) ? vocabulary.get(word) : word
        ).join(' ');
}

console.log(translater('cat eat milk but dog eat meat', vocabulary));



const user1 = {
    firstName: 'John',
    lastName: 'Snow',
    age: 20
}


const user2 = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 18
}


const johnMessage = ['hello', 'how are you?'];

const janeMessage = ['hi', 'im fine'];


const userMessagesMap = new Map();

userMessagesMap.set(user1, johnMessage);
userMessagesMap.set(user2, janeMessage);


/*
Написати функцію, яка приймає два рядка і перевіряє, чи є вони анаграмами, тобто чи можна з літер одного рядка без остатку зробити другий

'rockeit' -> 'torcket'
'fSdfWERWE'

Декомпозиція задачі:
1. Пробігтись по кожному слову і порахувати кількість літер в ньому
2. Порівняти мапи між собою.
    Якщо у мап різний розмір або за одним ключем різна кількість літер = false
    якщо мапи однакові за наповненням = true

*/


function isAnagramm(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    const map1 = wordToMap(str1.toLowerCase());
    const map2 = wordToMap(str2.toLowerCase());
 
 

    if (map1.size !== map2.size) {
        return false
    }

    for (const key of map1.keys()) {
        if(map1.get(key) !== map2.get(key)) {
            return false
        }
    }
    return true
}




function wordToMap(str) {
    const mapStr = new Map();
    for (const letter of str) {
        // перевіряємо, чи зустрічали ми цю літеру раніше
        if (mapStr.has(letter)) {
            //якщо вже зустрічали - витягти з мапи лічильника разів, скільки вже зустріли і збільшити на 1
            let counter = mapStr.get(letter);
            mapStr.set(letter, ++counter);

        } else {
            // якщо зустріли вперше
            mapStr.set(letter, 1);
        }
    }

    return mapStr
}

//mapa.clear() // повністю очищує мапу


/* Set - множина (множество) */

// Набір унікальних значень

const set = new Set();
set.add(2);
set.add(3);
set.add(4);

// set.clear() // очищує наповнення сета

  set.has() // чи є певний елемент в множині


  /// Таска: дан масив [1, 1, 1, 1, 2, 3, 3, 3, 2, 1, 4, 5, 6]
  // повернути новий масив без дублювань


const getDobleOut = arr =>  [...new Set(arr).values()];

  getDobleOut([1, 1, 1, 1, 2, 3, 3, 3, 2, 1, 4, 5, 6])

  /*
Таска: дани два масиви
[3, 2, 4, 5]

[4, 1, 7, 3]

[3, 2, 4, 5, 1, 7]

Повернути новий масив, що містить унікальні значення з обох масивів
  */


const getUnique = (arr1, arr2) => [...new Set(arr1.concat(arr2))];