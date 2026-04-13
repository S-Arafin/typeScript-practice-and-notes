//obj destructuring 

const user:{
    id: number;
    name: {
        firstName: string;
        LastName: string;
    };
    gender: string;
    color: string;
} = {
    id: 124, 
    name: {
        firstName: 'S',
        LastName: "Arafin",
    },
    gender: "male",
    color: "brown"
}

const {color:lawda, name:{LastName:lala}} = user;

console.log(lawda, lala)

const friends = ['Karim', 'Rahim', 'Mahim'];
const [, , c] = friends;

console.log(c)