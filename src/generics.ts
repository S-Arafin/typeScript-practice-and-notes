//dynamacally generalize

type GenericArray<T> = Array<T>

// const friends: string[]value>

const friends: GenericArray<string> = ["rahim", "karim"]

const sqrFunc = (value: number): number => {
    return value*value;
}

type Cordinates<X,Y> = [X, Y];

const cordinate1 :  Cordinates<number, number> = [1,2];
const cordinate2 :  Cordinates<string, string> = ["1", "2"];