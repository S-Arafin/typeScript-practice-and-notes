// Generic Function

// const createArrayWithString = (value: string) => [value]
// const createArrayWithNumber = (value: number) => [value]
// const createArrayWithObject = (value: {id:number; name:string;}) => {
//     return[value]
// }

// const arrString = createArrayWithString("apple");


const createArrayWithGeneric = <T>(value: T) => {
    return [value]
}
const arrString = createArrayWithGeneric("apple");

// tuple

const createArrayWithTupleViaGeneric = <T,X>(param1: T, param2:X) => {
    return [param1, param2]
}

const res1 = createArrayWithTupleViaGeneric("lewda", 69)