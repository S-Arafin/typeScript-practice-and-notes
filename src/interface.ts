type User = {
    name: string;
    age: number;

}

interface IUser {
    name: string;
    age: number;

}

interface IUserWithRole extends IUser {
    role: string;

}
type  Add = (num1: number, num2: number) => number;
interface IAdd {
    (num1: number, num2: number): number;
}

const add: IAdd = (num1, num2) => num1 + num2;
