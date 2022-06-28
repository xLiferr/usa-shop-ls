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
exports.User_payment = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let User_payment = class User_payment {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User_payment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], User_payment.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User_payment.prototype, "payment_type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User_payment.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], User_payment.prototype, "account_no", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], User_payment.prototype, "expiry", void 0);
User_payment = __decorate([
    (0, typeorm_1.Entity)()
], User_payment);
exports.User_payment = User_payment;
//# sourceMappingURL=user_payment.entity.js.map