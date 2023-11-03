class MyArray {
    constructor(...argums) {
    // new створює пустий {} і кладе його в this
    this.length = 0;
    this.push(...argums);
    }


    push(...v) {
       for(let i = 0; i < v.length; i++){
        this[this.length] = v[i];
        this.length++;
       }
        return this.length
    }


    pop() {
        // взяти останній елемент, видалити його
        let temporary = this[this.length - 1];
        delete this[this.length - 1];
        //delete obj.property
        // зменшити довжину на один
        this.length--;
        return temporary;
    }


    forEach(fn, thisArg) {
        for (let i = 0; i < this.length; i++) {
          fn.call(thisArg, this[i], i, this)         
        }
    }


    concat(array2) {
        /*  Викликається на екземплярі масиву, отримує другий масив в аргументи і повертає новий = масив1 + масив2 */
        const result = new MyArray();
        this.forEach(el => result.push(el));
        array2.forEach(el => result.push(el));
      
        return result;
    }

   at (index) {
        if(index < 0) {
            return this[this.length + index];
        }
        return this[index]
    }

    fill(value, start = 0, end = this.length) {
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

   filter (filteringFunction, thisArg) {
        const result = new MyArray();
        for (let i = 0; i < this.length; i++) {
            if(filteringFunction.call(thisArg, this[i], i, this)){
                result.push(this[i])
            }
        }
        return result
    }

    find (checkingFunction, thisArg) {
        for (let i = 0; i < this.length; i++) {
            if(checkingFunction.call(thisArg, this[i], i, this)){
                return this[i]
            }
        }
    }


    join (separator = ','){
        let str = '';
        for (let i = 0; i < this.length - 1; i++) {
           str += this[i] + separator;
        }
        str += this[this.length-1];
        return str;
    }



   map (fn, thisArg) {
        const res = new MyArray();
        for (let i = 0; i < this.length; i++) {
           res.push(fn.call(thisArg, this[i], i, this));            
        }
    }


    slice (start = 0, end = this.length) {
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

    sort (compareFunction) {
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


    [Symbol.iterator](){
        let i = 0;
        
        return {
            /// this за допомогою стрілки береться з контексту метода об'єкта (тобто вказує на сам об'єкт)
           next: () => {
            return {
                value: this[i++],
                done: i > this.length
            }
            
           }
        }
    }

}


const myarr = new MyArray(9, 8, 7, 6);

//const iter = myarr[Symbol.iterator]();


for (const elem of myarr) {
//    console.log(elem);
}




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