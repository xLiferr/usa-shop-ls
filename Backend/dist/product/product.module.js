"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./services/product.service");
const product_controller_1 = require("./controllers/product.controller");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("../entities/product.entity");
const product_category_entity_1 = require("../entities/product_category.entity");
const category_service_1 = require("../category/services/category/category.service");
const file_entity_1 = require("../entities/file.entity");
const file_service_1 = require("../file/services/file/file.service");
let ProductModule = class ProductModule {
};
ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([product_entity_1.Product]),
            typeorm_1.TypeOrmModule.forFeature([product_category_entity_1.Product_category]),
            typeorm_1.TypeOrmModule.forFeature([file_entity_1.File]),
        ],
        providers: [product_service_1.ProductService, category_service_1.CategoryService, file_service_1.FileService],
        controllers: [product_controller_1.ProductController]
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map