
//Object 

const user : {
    firstName: "hla";
    middleName?: string;
    lastName: string;
    isMarried?: boolean;
} = {
    firstName: "hla", 
    lastName: "lalala",
    isMarried: true,
};

user.isMarried = false;
console.log(user)