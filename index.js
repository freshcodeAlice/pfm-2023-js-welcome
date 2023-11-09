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
