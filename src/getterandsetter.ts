// getter and setter

class BankAccount {
    public readonly userId: number;
    public userName : string;
    private userBalance: number;

    constructor(userId: number, userName: string, userBalance: number){
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }
    // settig balance
    // addBalance (balance: number){
    //     this.userBalance = this.userBalance + balance
    // }
    // using setter 

    set addBalance(amount: number){
        this.userBalance += amount
    }

    // getBalance(){
    //     return this.userBalance
    // }

    // using getter 
    get getBalance(){
        return this.userBalance
    }
}



const amar = new BankAccount(111, "max", 200);

// amar.addBalance(100); // function call needed
// console.log(amar.getBalance()) // function call needed

amar.addBalance = 100;
amar.addBalance = 60;

console.log(amar.getBalance)


