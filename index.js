'use strict'
/* Контекст */


const obj = {
    key: 'value',
    method: function() {
        console.log(`key - ${this.key}`);
    }
}



function test(){  //// Function declaration
    console.log(this);
    /* 
    За умови 'use strict' this -> undefined,
    без - глобальний об'єкт Window
    */
}


test();   /* Window - об'єктне представлення всього браузера */


const fn = function() {  // function expression
    console.log(this);
        /* 
    За умови 'use strict' this -> undefined,
    без - глобальний об'єкт Window
    */
}

fn();


const arrow = () => {
    console.log(this);
    /* У стрілочних функцій this вказує на контекст, в якому функція була створена  */
}

arrow();