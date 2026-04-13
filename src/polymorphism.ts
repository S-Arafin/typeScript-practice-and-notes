// polymorphism

class Person {
    getSleep(){
        console.log(`i'm a normal person i sleep for 8 hr`)
    }
}

class Student extends Person {
    getSleep(){
        console.log(`i'm a student i sleep 7 hours`)
    }
}


class dev extends Person {
    getSleep(){
        console.log(`i'm a developer i sleep 6 hours`)
    }
}

const getSleepingHours = (param: Person) => {
    param.getSleep();
}

const person1 = new Person();
const person2 = new Student();
const person3 = new dev();

getSleepingHours(person2)


class Shape {
    getArea() : number{
        return 0;
    }
}
class Circle extends Shape{

    radius: number;

    constructor(radius: number){
        super()
        this.radius = radius
    }

    getArea(): number {
        return Math.PI*this.radius*this.radius;
    }
}



