/*  Stack  */


// Last in - first out

class Stack {
    constructor(maxSize, ...arr){
        this._maxSize = maxSize;
        this._size = 0;
        /*
        При створенні нового стеку можна передавати будь-яку кількість елементів

        */
       for (const item of arr) {
            this.push(item)
       }
    }

    get size() {
        return this._size;
    }

    get isEmpty() {
        return this._size === 0;
    }

    push(value) {
        /// потрібно перевірити, чи не досягли ми максимального розміру
        if (this._size >= this._maxSize) {
            throw new RangeError('Stack overflow')
        }
        this[`_${this._size}`] = value;
        this._size++;
        return this._size;
    }

    pop(){
        // метод, який дістає (і видаляє ) останній елемент стеку
        if (this._size <= 0) {
            return
        }
        const lastItem = this[`_${this._size - 1}`];
        delete this[`_${this._size - 1}`];
        this._size--;
        return lastItem;
    }

    pick() {
        /// повертає значення останнього елементу, не видаляючи його зі стеку
        return this[`_${this._size - 1}`];
    }

}



const stack = new Stack(3);



/*
()({})   -- true 
[(]}(]]]]  -- false
)

Написати функцію, яка приймає рядок, що містить дужки і повертає true, якщо дужки відкриваються-закриваються в правильному порядку і false, якщо це не так

(((())(((

Декомпозиція задачі:

1. Прийняти рядок, створити новий стек
2. Пройтися циклом по рядку, який ми отримали на вхід
3. Проаналізувати кожен наступний символ рядка, який ми перебираємо
    - це дужка, що відкривається
            --> тоді додаємо її в стек
    - це дужка, яка закривається 
            - видалити останню зі стека
4. Коли доходимо до кінця рядка - аналізуємо стек. Якщо він пустий - дужки були в правильному порядку, повертаємо true. Якщо не пустий - false
*/

/* найпростіший варіант рішення

function isSequenceRight(str) {
    const stack = new Stack(str.length);
    for (const symb of str) {
        if (symb === '(') {
            stack.push(symb);
        }
        if(stack.isEmpty) {
            return false
        }
        if(symb === ')' && stack.pick() === '('){
            stack.pop();
        }
    }
    return stack.isEmpty;
}

*/

//// Приймаємо ззовні "налаштування" - ті дужки, які нам зараз треба шукати

const brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
}

function isSequenceRight(str, brackets) {
   
    const stack = new Stack(str.length);
    const closeBrackets = Object.values(brackets);
    for (const symb of str) {
       if(brackets[symb]) {
        stack.push(symb);
        continue;
       }
       if (stack.isEmpty && closeBrackets.includes(symb)) {
        return false;
       }
       const lastItemFromStack = stack.pick();
       const correctCloseBracket = brackets[lastItemFromStack];
       if (symb === correctCloseBracket) {
        stack.pop();
        continue;
       } 
       if (closeBrackets.includes(symb)) {
        return false;
       }
       /// якщо дужка перед нами закривається 
       // (}) ()
    }

    return stack.isEmpty;
}

///// (2+2[{}])


