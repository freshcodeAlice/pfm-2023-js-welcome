/* Замикання */

/// глобальна область видимості (global scope)
let variable = 'John';

function printName() {
     let variable = 'Rick';
    console.log(variable);
    /* 
    Перш за все шукається локальна змінна name,
    Якщо її не знайдено - буде шукатися в батьківській області видимості
    */

    function sayHello(){
        let variable = 'Nick';
        console.log(`${variable} say Hello`);
    }
    sayHello();
}


printName();


function changeName(){
    variable = 'Jake';
}


//changeName();
printName();


if (true) {
 /// блочна область видимості
 let a = 'hello';
}
// a створена всередині if


function fn(){
    //локальна область видимості
}