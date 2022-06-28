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
exports.Order_detail = void 0;
const typeorm_1 = require("typeorm");
const payment_detail_entity_1 = require("./payment_detail.entity");
const user_entity_1 = require("./user.entity");
let Order_detail = class Order_detail {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Order_detail.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], Order_detail.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => payment_detail_entity_1.Payment_detail, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'payment_id' }),
    __metadata("design:type", payment_detail_entity_1.Payment_detail)
], Order_detail.prototype, "payment", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order_detail.prototype, "total", void 0);
Order_detail = __decorate([
    (0, typeorm_1.Entity)()
], Order_detail);
exports.Order_detail = Order_detail;
//# sourceMappingURL=order_detail.entity.js.map