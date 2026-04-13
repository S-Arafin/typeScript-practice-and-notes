// static 

class Counter {
    static count : number = 0;// for ekta memory use static

    static increment(){
        return (Counter.count = Counter.count + 1);  // static use korar por this kaaj korbe na tokhon classer nam dite hobe

    }
    static decrement(){
        return (Counter.count = Counter.count - 1);
    }
}

// const instance1 = new Counter();//ekta memory



// console.log(instance1.increment())
// console.log(instance1.increment())
// console.log(instance1.increment())
// console.log(instance1.increment())
// console.log(instance1.increment())


// const instance2 = new Counter()//different memory
// console.log(instance2.increment())
// console.log(instance2.increment())

// const instance3 = new Counter();

console.log(Counter.increment())
console.log(Counter.increment())
console.log(Counter.increment())
console.log(Counter.increment())
console.log(Counter.increment())
console.log(Counter.increment())
