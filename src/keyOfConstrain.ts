// keyof : type operator;

type richPeopleVehicle = {
    car : string;
    bike : string; 
    cng : string;
};

type myVehicle1 = "bike" | "car" | "cng"

type myVehicle2 = keyof richPeopleVehicle;

const myVehicle : myVehicle2 = "bike"
type User = {
     id: number;
    name: string;
    address: {
        city: string;
    }
}
const user: User= {
    id: 222,
    name: "sultan",
    address: {
        city: "ctg",
    }
}

// const myName = user ['name']
const getPropFromObj = <T>(obj: T, key: keyof T)=>{
    return obj[key]
}

const result = getPropFromObj(user, "name")

console.log(result)