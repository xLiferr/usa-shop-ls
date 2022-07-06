"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("../../entities/product.entity");
const typeorm_2 = require("typeorm");
const product_category_entity_1 = require("../../entities/product_category.entity");
let ProductService = class ProductService {
    constructor(productsRepo, productsCategoryRepo) {
        this.productsRepo = productsRepo;
        this.productsCategoryRepo = productsCategoryRepo;
    }
    getProducts() {
        return this.productsRepo.find({
            relations: ['category'],
        });
    }
    async getProduct(id) {
        return await this.productsRepo.findOne(id, {
            loadRelationIds: true,
        });
    }
    async getProductByName(name) {
        return await this.productsRepo.findOne({
            where: { name: name }
        });
    }
    async create(body) {
        const newProduct = new product_entity_1.Product();
        newProduct.name = body.name;
        newProduct.category = body.category;
        newProduct.price = body.price;
        newProduct.stock = body.stock;
        const searchCategory = await this.productsCategoryRepo.findOne({
            where: { id: newProduct.category }
        });
        if (!searchCategory) {
            throw new common_1.BadRequestException('La categoría del producto no existe');
        }
        return await this.productsRepo.save(newProduct);
    }
    async update(id, body) {
        const product = await this.getProduct(id);
        if (!product) {
            throw new common_1.BadRequestException('El producto no existe en el sistema.');
        }
        if (body.category) {
            const categoryToUpdate = await this.productsCategoryRepo.findOne({
                where: { name: body.category }
            });
            if (!categoryToUpdate) {
                throw new common_1.BadRequestException('No existe la categoría.');
            }
        }
        this.productsRepo.merge(product, body);
        return await this.productsRepo.save(product);
    }
    async delete(id) {
        return await this.productsRepo.delete(id);
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(1, (0, typeorm_1.InjectRepository)(product_category_entity_1.Product_category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map