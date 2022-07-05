import { CreateProductDto } from '../dtos/product.dto';
import { ProductService } from '../services/product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    findAll(): Promise<import("../../entities/product.entity").Product[]>;
    findOne(id: string): Promise<import("../../entities/product.entity").Product>;
    createProduct(body: CreateProductDto): Promise<import("../../entities/product.entity").Product>;
    updateProduct(id: string, body: any): Promise<import("../../entities/product.entity").Product>;
    deleteProduct(id: string): Promise<import("typeorm").DeleteResult>;
}
