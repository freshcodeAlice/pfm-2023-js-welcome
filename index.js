/*  Linked List - Зв'язаний список */

class ListItem {
    constructor(v){
        this._data = v;
        this.next = null;
        this.prev = null;
    }

    get data(){
        return this._data;
    }

    set data(v) {
        this._data = v;
    }
}


class LinkedList {
    constructor(...args){
        this.length = 0;
        this.head = null;
        this.tail = null;
        for (const value of args) {
            this.push(value)
        }
        /*
        переписати конструктор на отримання невстановленої кількості аргументів при створенні екземпляра

        */
    }

    push(value) {
        /*
        якщо список пустий - то елемент є першим.
        Це означає, що голова і хвіст списку вказують на нього

        якщо в списку вже є елементи - нам потрібно цей новий прилаштувати в кінець
        Елемент списку, на який досі вказував кінець (tail) має отримати в next посилання на новий елемент
        новий елемент стає новим хвостом (tail)
        */
       const newItem = new ListItem(value);
       if (this.length === 0) {
            this.head = newItem;
            this.tail = newItem;
       } else {
            this.tail.next = newItem;
            newItem.prev = this.tail;
            this.tail = newItem;
       }
       return ++this.length;
    }


    pop() {
        /*
        Хвіст має вказувати на передостанній елемент (а останній просто прибирається з списку).
        Посилання на попередній елемент (prev) вказує на елемент, що стане новим хвостом
        Зменшити довжину

        Результат методу - повернути весь об'єкт LiItem, який був видалений
        */
       const deleted = this.tail;
       const preLast = this.tail.prev;
       preLast.next = null;
       this.tail = preLast;
       this.length--;
       return deleted;
    }

    shift() {
        // видаляємо елемент з початку списку
        const deleted = this.head;
        const nextElem = this.head.next;
        nextElem.prev = null;
        this.head = nextElem;
        this.length--;
        return deleted;
    }

    unshift(value) {
        const newItem = new ListItem(value);
        if (this.length === 0) {
            this.head = newItem;
            this.tail = newItem;
        } else {
            /*  
            - у нового елемента next має вказувати на той елемент який був перший раніше
            - у того, який був першим, prev має вказувати на новий
            - здвигаємо голову списка на новий елемент
            - збільшуємо довжину
            */
           newItem.next = this.head;
           this.head.prev = newItem;
           this.head = newItem;
        }
        return ++this.length;
    }

    find(value) {
        /*
        Починаємо обхід структури 
            від head і доки не досягнемо tail

            Порівнюємо - у обраного елемента data === value? 
                - якщо так - ми знайшли, що шукали, повертаємо поточний об'єкт
                - якщо ні - беремо об'єкт за посиланням  next

        */
       let currentItem = this.head;
      do {
        if (currentItem.data === value) {
            return currentItem;
           } else {
            currentItem = currentItem.next;
           }
       }  while (currentItem !== null);
       return null;
    }


    newFind(value) {
        for (const item of this) {
            if (item.data === value) {
                return item
            }
        }
        return null;
    }

    static fromArray(array) {
        return new LinkedList(...array);
        
    }

    toArray(){
        const arr = [];
        for (const item of this) {
            arr.push(item.data)
        }
        return arr;
    }
    
    [Symbol.iterator]() {
        return new LinkedListIterator(this);
    }
}

const ll = new LinkedList(5, 8, 10);


/*
shift(), unshift()
shift - видаляє елемент з початку
unshift(v) - вставляє елемент на початок

*/


/*
find(value) - приймає значення і шукає його по всьому списку, має повернути весь об'єкт ListItem, який має таке значення, або null, якщо таке значення не було знайдено




*/

class LinkedListIterator {
    constructor(list) {
        this.list = list;
        this.currentNode = null;
    }

    next() {
        this.currentNode = this.currentNode ? this.currentNode.next : this.list.head;
        return {
            value: this.currentNode,
            done: !this.currentNode
        }
    }
}
