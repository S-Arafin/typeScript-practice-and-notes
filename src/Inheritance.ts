// inheritance
class School {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string){
        this.name = name;
        this.age = age;
        this.address = address;

    }

    getSleep(numOfHours : number){
        console.log(`${this.name}ghum ${numOfHours}`)
    }
}
class Student extends School{
  

}
class Teacher extends School {
    designation : string;

    constructor (name: string, age: number, address: string, designation: string){

        super(name , age, address);
        this.designation = designation
    }

    takeClass(numberOfClass: number){
        console.log(`${this.name} ${numberOfClass} ghonta class ney`);
    }
}

const student1 = new Student ('fakibaz', 16, 'bangladeshi');

student1.getSleep(15)