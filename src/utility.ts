// utility types 

type Product = {
    id: number;
    name: string;
    price: string;
    stock: number;
    color?:string;
}

// type ProductSummary ={
//     id: number;
//     stock: number;
//     price: string;

// }

type ProductSummary = Pick<Product, "id"|"name"|"price">     //picks

type ProductWithout = Omit<Product, "stock"|"color">;       //removes 

type ProductWithColor = Required<Product>

type OptionalProduct = Partial<Product>

type ProductReadOnly = Readonly<Product>

const emptyObject : Record<string, unknown> = {}

const product1: Product = {
    id: 222,
    name: 'mouse',
    price: "20"
}

