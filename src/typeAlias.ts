type User = {
    id:number;
    name: {
        firstName: string;
        LastName: string;
    };
    gender: "male" | "female";
    contact: string;
    address:{
        division: string;
        city: string;
    }

} 

const user1: User = {
    id: 123,
    name:{
        firstName: "mr",
        LastName: "kuddus",
      
    },
    gender: "male",
    contact: '0193840',
    address: {
        division: "Rangpur",
        city: "Rangpur",
    }

}
 
type AddFunc = (num1: number, num2: number) => number

const add: AddFunc = (num1, num2) =>{
     return num1 + num2   
}