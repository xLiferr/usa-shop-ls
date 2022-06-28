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
exports.Cart_item = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./product.entity");
const shopping_session_entity_1 = require("./shopping_session.entity");
let Cart_item = class Cart_item {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Cart_item.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => shopping_session_entity_1.Shopping_session),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", shopping_session_entity_1.Shopping_session)
], Cart_item.prototype, "session", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => product_entity_1.Product),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", product_entity_1.Product)
], Cart_item.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Cart_item.prototype, "quantity", void 0);
Cart_item = __decorate([
    (0, typeorm_1.Entity)()
], Cart_item);
exports.Cart_item = Cart_item;
//# sourceMappingURL=cart_item.entity.js.map