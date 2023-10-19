'use strict'
/* Контекст */


const newspaper = {
    title: 'Our super-newspaper',
    articles: [{
        author: 'John Doe',
        date: 19-10-2023,
        text: 'lorem ipsum'
    }, {
        author: 'Jane Doe',
        date: 19-10-2023,
        text: 'dolor sit'
    }, {
        author: 'Rick Doe',
        date: 19-10-2023,
        text: 'amet amen'
    }, {
    author: 'Sole Doe',
    date: 19-10-2023,
    text: 'lorem ipsum'
    }, {
    author: 'Nick Doe',
    date: 19-10-2023,
    text: 'ipsum loren'
    }],
    showArticles: function(){
        this.articles.forEach(show.bind(this)); /// this -> newspaper
    }
}


function show(currentArticle){
        console.log(`${this.title} --- ${currentArticle.author} - ${currentArticle.text}`);
}


/*
Передача контексту

*/


const auto = {
    model: 'BMV',
    speed: 150
}


function sayVzh(a, b) {
    console.log(`${this.model} робить вжжж зі швидкістю ${this.speed}`);
    console.log('А тим часом a+b = ', a+b);
}


//sayVzh.apply(auto, [2, 3]); /// виклик функції з об'єктом auto в якості this


/*
apply(this, [arguments]) - метод функції, який викликає функцію, передає їй в якості this перший аргумент і другий аргумент - масив - передає параметрами функції


call(this, arg1, arg2, arg3...) - метод функції, який викликає функцію, передає їй в якості this перший аргумент, всі аргументи після першого (поштучні) - передає параметрами функції

*/


const wrappedFunction = sayVzh.bind(auto);  // Огортає виклик функції в контекст, повертає посилання на готову до роботи функцію, якій this = auto

/// викликаємо готову до роботи функцію, контекст якої буде вже з нею
//wrappedFunction(5, 6);