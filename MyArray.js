function MyArray(...argums){
    // new створює пустий {} і кладе його в this
    this.length = 0;
    this.push(...argums);


}


function MyArrayProto() {
    this.push = function (...v) {
       for(let i = 0; i < v.length; i++){
        this[this.length] = v[i];
        this.length++;
       }
        return this.length
    }


    this.pop = function(){
        // взяти останній елемент, видалити його
        let temporary = this[this.length - 1];
        delete this[this.length - 1];
        //delete obj.property
        // зменшити довжину на один
        this.length--;
        return temporary;
    }


    this.forEach = function(fn, thisArg) {
        for (let i = 0; i < this.length; i++) {
          fn.call(thisArg, this[i], i, this)         
        }
    }


    this.concat = function(array2) {
        /*  Викликається на екземплярі масиву, отримує другий масив в аргументи і повертає новий = масив1 + масив2 */
        const result = new MyArray();
        this.forEach(el => result.push(el));
        array2.forEach(el => result.push(el));
      
        return result;
    }

    this.at = function(index) {
        if(index < 0) {
            return this[this.length + index];
        }
        return this[index]
    }

    this.fill = function(value, start = 0, end = this.length) {
        if(start < 0) {
            start = this.length + start;
        }
        if(end < 0) {
            end = this.length + end
        }
        for (let i = start; i < end; i++) {
            this[i] = value;
        }
        return this
    }

    this.filter = function(filteringFunction, thisArg) {
        const result = new MyArray();
        for (let i = 0; i < this.length; i++) {
            if(filteringFunction.call(thisArg, this[i], i, this)){
                result.push(this[i])
            }
        }
        return result
    }

    this.find = function(checkingFunction, thisArg) {
        for (let i = 0; i < this.length; i++) {
            if(checkingFunction.call(thisArg, this[i], i, this)){
                return this[i]
            }
        }
    }


    this.join = function(separator = ','){
        let str = '';
        for (let i = 0; i < this.length - 1; i++) {
           str += this[i] + separator;
        }
        str += this[this.length-1];
        return str;
    }



    this.map = function(fn, thisArg) {
        const res = new MyArray();
        for (let i = 0; i < this.length; i++) {
           res.push(fn.call(thisArg, this[i], i, this));            
        }
    }


    this.slice = function(start = 0, end = this.length) {
        if (start < 0) {
            start = this.length + start;
        }
        if( start > this.length) {
            return new MyArray();
        }
        if(end < 0) {
            end = this.length + end;
        }
        const res = new MyArray();
        for (let i = start; i < end; i++) {
           res.push(this[i]) 
        }
        return res;
    }

    this.sort = function(compareFunction) {
        for (let j=0; j < this.length; j++) {
            for (let i = 0; i < this.length; i++) {
                if (compareFunction(this[i], this[i+1]) > 0){
                    // поміняти місцями елементи
                    let temporary = this[i];
                    this[i] = this[i+1];
                    this[i+1] = temporary;
                   
                } else {
                    // залишаємо елементи на місцях 
                  
                }
                
            }
        }
        
        return this
    }

}

MyArray.prototype = new MyArrayProto();

const arr = new MyArray();


/*
ДЗ: 

доповнити колекцію MyArray реалізацією методів нативного масива:
+/- concat
+ at
+ fill
+ filter
+ find
+ join
+ map
+ slice
+/- sort

Коли дійдемо до рекурсій та ітераторів - доробимо методи на найкращий вигляд

*/



/*
Важливий нюанс forEach




const arr = [1,2,3,4,5];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 3){
        continue;
    }
    console.log(arr[i]);
}
console.log('---------------')

arr.forEach((el) => {
    if(arr[i] === 3){
        continue;  <---- не працює перескакування на наступну ітерацію, бо ми не і циклі, а в функції, що виконується на кожній ітерації
    }
    console.log(el)
})



*/