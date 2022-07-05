import { Product_category } from 'src/entities/product_category.entity';
import { Repository } from 'typeorm';
export declare class CategoryService {
    private categoriesRepo;
    constructor(categoriesRepo: Repository<Product_category>);
    getProductsCategories(): Promise<Product_category[]>;
    getProductCategory(id: number): Promise<Product_category>;
    getProductCategoryByName(name: string): Promise<Product_category>;
    create(body: any): Promise<Product_category>;
    update(id: any, body: any): Promise<Product_category>;
    delete(id: any): Promise<import("typeorm").DeleteResult>;
}
