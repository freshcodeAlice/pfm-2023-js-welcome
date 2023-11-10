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