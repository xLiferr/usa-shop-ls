"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_service_1 = require("./config/config.service");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const product_module_1 = require("./product/product.module");
const category_module_1 = require("./category/category.module");
const address_module_1 = require("./address/address.module");
const payment_module_1 = require("./payment/payment.module");
const order_detail_module_1 = require("./order-detail/order-detail.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(config_service_1.configService.getTypeOrmConfig()),
            user_module_1.UserModule, auth_module_1.AuthModule, product_module_1.ProductModule, category_module_1.CategoryModule, address_module_1.AddressModule, payment_module_1.PaymentModule, order_detail_module_1.OrderDetailModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map