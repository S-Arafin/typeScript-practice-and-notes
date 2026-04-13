//function / arrow function

function sum(num1:number , num2:number): number{
    return num1+num2
}


console.log(sum(1,3))

const add = (num1:number, num2:number) : number => num1+num2;

console.log(add(2,8))

const poorUser = {
    name: 'arafin',
    balance: 0,
    addBalance(value: number): number{
        const total = this.balance + value;
       
        console.log(total)
        this.balance = total
        return this.balance;
    }
}

poorUser.addBalance(1000)

console.log(poorUser)

const arr: number[] = [1,2,3,5];

