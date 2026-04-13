// oop - class 
// class Animal {

//     name: string;
//     species: string;
//     sound: string;
    

//     constructor(name: string, species: string, sound: string){
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     }
//     makeSound(){
//         console.log(`${this.name} is making ${this.sound}`);
//     }
// }

// parameter property
class Animal {

    // public name: string;
    // public species: string;
    // public sound: string;
    

    constructor(public name: string, public species: string, public sound: string){
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }
    makeSound(){
        console.log(`${this.name} is making ${this.sound}`);
    }
}

const dog = new Animal('dogesh', 'dog', 'wouf')

const cat = new Animal('cat', 'cat', 'mew')

console.log(dog, cat);
cat.makeSound();