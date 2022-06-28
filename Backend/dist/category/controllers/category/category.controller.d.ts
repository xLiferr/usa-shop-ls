import { CategoryService } from 'src/category/services/category/category.service';
export declare class CategoryController {
    private productService;
    constructor(productService: CategoryService);
    findAll(): Promise<import("../../../entities/product_category.entity").Product_category[]>;
    createCategory(body: any): Promise<import("../../../entities/product_category.entity").Product_category>;
}
