import { CategoryService } from 'src/category/services/category/category.service';
export declare class CategoryController {
    private productService;
    constructor(productService: CategoryService);
    findAll(): Promise<import("../../../entities/product_category.entity").Product_category[]>;
    findOne(id: string): Promise<import("../../../entities/product_category.entity").Product_category>;
    createCategory(body: any): Promise<import("../../../entities/product_category.entity").Product_category>;
    updateCategory(id: string, body: any): Promise<import("../../../entities/product_category.entity").Product_category>;
    deleteCategory(id: string): Promise<import("typeorm").DeleteResult>;
}
