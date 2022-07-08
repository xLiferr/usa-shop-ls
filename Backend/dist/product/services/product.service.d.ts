/// <reference types="node" />
import { Product } from 'src/entities/product.entity';
import { Connection, Repository } from 'typeorm';
import { Product_category } from 'src/entities/product_category.entity';
import { File } from 'src/entities/file.entity';
import { FileService } from 'src/file/services/file/file.service';
export declare class ProductService {
    private productsRepo;
    private fileService;
    private productsCategoryRepo;
    private connection;
    constructor(productsRepo: Repository<Product>, fileService: FileService, productsCategoryRepo: Repository<Product_category>, connection: Connection);
    getProducts(): Promise<Product[]>;
    getProduct(id: number): Promise<Product>;
    getProductByName(name: string): Promise<Product>;
    create(body: any): Promise<Product>;
    update(id: any, body: any): Promise<Product>;
    addImg(productId: number, imageBuffer: Buffer, filename: string): Promise<File>;
    delete(id: any): Promise<import("typeorm").DeleteResult>;
}
