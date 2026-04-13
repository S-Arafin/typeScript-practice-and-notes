const friends = ["Rahim", "Karim"];

const school = ["Pintu", "Chintu", "Dintu"];

const collage = ["sam", "dam", "lam"];
friends.push(...school)
friends.push(...collage)



const user = {name: "Lam", phone:"019342134"};

const other = {hobby: "kiting"}

const userInfo = {...user, ...other}


const sendInvite = (...friends: string[])=>{
    friends.forEach((friend: string)=>
        console.log(`send to ${friend}`))
    
}

sendInvite('pintu', "chintu", "jhontu")