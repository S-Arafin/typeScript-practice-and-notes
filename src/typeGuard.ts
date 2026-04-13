//type narrowing 
// in , typeof 

type Alpha = number|string;
const add = (num1: Alpha, num2: Alpha)=>{
    if (typeof num1 === "number" && num2 === "number"){
        return num1+num2;
    }
    else{
        num1.toString() + num2.toString()
    }
}

// in guard

type NormalUser = {
    name: string;
};

type AdminUser = {
    name: string;
    role: "admin"
};

const getUserInfo = (user: NormalUser | AdminUser) =>{

    if('role' in user){
        console.log(`this ${user.name} and role ${user.role}`);
    }
    else{
        console.log(`${user.name}`)
    }
    
};

getUserInfo({name: 'Normal', role: 'admin'
})