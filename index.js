/*  Черга (Queue) */
/* First in - first out */

class Queue {
    constructor(...args){
        this._head = 0;
        this._tail = 0;
        for (const el of args) {
            this.enqueue(el);
        }
    }

    get size() {
        return this._tail - this._head;
    }


    enqueue(value) {
        this[this._tail] = value;
        this._tail++;
        return this.size;
    }

    dequeue(){
        /// якщо черга не порожня

        if (this.size === 0) {
            return;
        }

        const firstElem = this[this._head];
        delete this[this._head];
        this._head++;
        return firstElem;
    }

    front() {
        // подивитись значення першого елемента в черзі
        return this[this._head]
    }

    empty() {
        // перевірити, чи порожня черга
        return this.size === 0;
    }
}


/*
enqueue - поставити елемент в чергу (запушити в кінець)
dequeue - забрати елемент з черги (перший)

*/


// таски: реалізувати front, empty і додавання елементів в чергу при створенні черги


/*
Написати функцію, який приймає і зливає дві черги в одну. Принцип зливання - один елемент з першої, один з другої 

*/

function mergeQueues(q1, q2){
//    debugger;
    const result = new Queue();
    while(q1.size || q2.size){
        if (q1.size){
            result.enqueue(q1.dequeue());
        }
        if (q2.size){
            result.enqueue(q2.dequeue());
        }

    }
    return result;
}


const q1 = new Queue(1, 2, 3);
const q2 = new Queue(5, 6, 7, 9, 10);