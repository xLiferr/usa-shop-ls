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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order_item = void 0;
const typeorm_1 = require("typeorm");
const order_detail_entity_1 = require("./order_detail.entity");
const product_entity_1 = require("./product.entity");
let Order_item = class Order_item {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Order_item.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => order_detail_entity_1.Order_detail),
    (0, typeorm_1.JoinColumn)({ name: 'order_id' }),
    __metadata("design:type", order_detail_entity_1.Order_detail)
], Order_item.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => product_entity_1.Product),
    (0, typeorm_1.JoinColumn)({ name: 'product_id' }),
    __metadata("design:type", product_entity_1.Product)
], Order_item.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order_item.prototype, "quantity", void 0);
Order_item = __decorate([
    (0, typeorm_1.Entity)()
], Order_item);
exports.Order_item = Order_item;
//# sourceMappingURL=order_item.entity.js.map