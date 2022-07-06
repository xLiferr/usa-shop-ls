import { Product_category } from "./product_category.entity";
export declare class Product {
    id: number;
    name: string;
    category: Product_category;
    stock: number;
    price: number;
    gender: string;
}
