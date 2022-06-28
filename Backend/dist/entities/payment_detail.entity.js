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
exports.Payment_detail = void 0;
const typeorm_1 = require("typeorm");
const order_detail_entity_1 = require("./order_detail.entity");
let Payment_detail = class Payment_detail {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Payment_detail.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => order_detail_entity_1.Order_detail),
    (0, typeorm_1.JoinColumn)({ name: 'order_id' }),
    __metadata("design:type", order_detail_entity_1.Order_detail)
], Payment_detail.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payment_detail.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payment_detail.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payment_detail.prototype, "status", void 0);
Payment_detail = __decorate([
    (0, typeorm_1.Entity)()
], Payment_detail);
exports.Payment_detail = Payment_detail;
//# sourceMappingURL=payment_detail.entity.js.map