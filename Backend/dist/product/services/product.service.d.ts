import { Product } from 'src/entities/product.entity';
import { Repository } from 'typeorm';
import { Product_category } from 'src/entities/product_category.entity';
export declare class ProductService {
    private productsRepo;
    private productsCategoryRepo;
    constructor(productsRepo: Repository<Product>, productsCategoryRepo: Repository<Product_category>);
    getProducts(): Promise<Product[]>;
    getProduct(id: number): Promise<Product>;
    getProductByName(name: string): Promise<Product>;
    create(body: any): Promise<Product>;
    update(id: any, body: any): Promise<Product>;
    delete(id: any): Promise<import("typeorm").DeleteResult>;
}
