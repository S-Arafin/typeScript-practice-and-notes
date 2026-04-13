// mapped type

// map

const arrayOfNumber: number[] = [1, 3, 3];

const arrayOfString: string[] = ["1", "3", "3"];

const arrOfStrWithMap: string[] = arrayOfNumber.map((num) => num.toString());

console.log(arrOfStrWithMap);

type AreaOfNum = {
  height: number;
  width: number;
};

// type AreaOfStr = {
//     height: string;
//     width: string;
// }

type Area<T> = {
  [key in keyof T]: T[key];
};

const area1: Area<{ height: string; width: number }> = {
  height: "50",
  width: 40,
};
