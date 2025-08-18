export type Sku = {
    code: string;
    name: string;
    stock?: number;
    price?: string;
};

export type Product = {
    id: number;
    brand: string;
    image: string;
    style: string;
    substyle: string;
    abv: string;
    origin: string;
    information: string;
    skus: Sku[];
};

export type ProductDetail = {
    stock: number;
    price: string;
}