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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_category_entity_1 = require("../../../entities/product_category.entity");
const typeorm_2 = require("typeorm");
let CategoryService = class CategoryService {
    constructor(categoriesRepo) {
        this.categoriesRepo = categoriesRepo;
    }
    getProductsCategories() {
        return this.categoriesRepo.find();
    }
    async getProductCategory(id) {
        return await this.categoriesRepo.findOne(id);
    }
    async getProductCategoryByName(name) {
        return await this.categoriesRepo.findOne({
            where: { name: name }
        });
    }
    async create(body) {
        const newCategory = new product_category_entity_1.Product_category();
        newCategory.name = body.name;
        return await this.categoriesRepo.save(newCategory);
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_category_entity_1.Product_category)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map