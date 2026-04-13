// instance of type guard

class Person {
    name : string;

    constructor(name: string){
        this.name = name
    }
     getSleep(numOfHours : number){
        console.log(`${this.name} ghumay ${numOfHours} `)
    }
}

class Student extends Person {
    constructor(name: string){
        super(name);
    }
    doStudy(numOfHours : number){
        console.log(`${this.name} pore ${numOfHours} `)
    }
}

class Teacher extends Person {
    constructor (name: string){
        super(name);

    }
    takeClass(numOfHours : number){
        console.log(`${this.name} classney ${numOfHours} `)
    }
}

// function guard
const isStudent = (user : Person)=>{
    return user instanceof Student;
}



// class can be used as type
const getUserInfo = (user: Person) => {
    if(isStudent(user)){
        user.doStudy(10)
    }
    else if(user instanceof Teacher){
        user.takeClass(5)
    }
    else{
        user.getSleep(10)
    }
}

const student1 = new Student('lawda');
const teacher1 = new Teacher('hola')

getUserInfo(teacher1)