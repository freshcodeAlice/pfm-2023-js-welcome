function fun1(){
    debugger;
    console.log('first function');
    fun2(); //stop
    console.log('first continue')
}

function fun2(){
    console.log('second function');
    fun3(); // stop
}

function fun3(){
    console.log('third function')
}


fun1()


/*
Стек - структура даних, яка реалізує принцип LIFO (last in - first out)
Найпростіший приклад - банка Pringles

У браузері виклики функцій складаються у Call Stack


*/