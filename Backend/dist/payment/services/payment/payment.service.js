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
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../../../entities/user.entity");
const user_payment_entity_1 = require("../../../entities/user_payment.entity");
const typeorm_2 = require("typeorm");
let PaymentService = class PaymentService {
    constructor(paymentsRepo, userRepo) {
        this.paymentsRepo = paymentsRepo;
        this.userRepo = userRepo;
    }
    getPayments() {
        return this.paymentsRepo.find({
            loadRelationIds: true,
        });
    }
    async getPayment(id) {
        return await this.paymentsRepo.findOne(id, {
            loadRelationIds: true,
        });
    }
    async getPaymentByUser(userId) {
        const user = await this.userRepo.findOne(userId);
        if (!user) {
            throw new common_1.BadRequestException('El usuario especificado no existe.');
        }
        return await this.paymentsRepo.find({
            where: { user: userId }
        });
    }
    async create(body) {
        const newPayment = new user_payment_entity_1.User_payment();
        newPayment.payment_type = body.payment_type;
        newPayment.account_no = body.account_no;
        newPayment.provider = body.provider;
        newPayment.expiry = body.expiry;
        newPayment.user = body.user_id;
        const searchPayment = await this.paymentsRepo.findOne({
            where: { account_no: newPayment.account_no, user: newPayment.user }
        });
        if (searchPayment) {
            throw new common_1.BadRequestException('El método de pago ya ha sido agregado.');
        }
        return this.paymentsRepo.save(newPayment);
    }
    async update(id, body) {
        const payment = await this.getPayment(id);
        if (!payment) {
            throw new common_1.BadRequestException('El método de pago no existe en el sistema.');
        }
        this.paymentsRepo.merge(payment, body);
        return await this.paymentsRepo.save(payment);
    }
    async delete(id) {
        return await this.paymentsRepo.delete(id);
    }
};
PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_payment_entity_1.User_payment)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PaymentService);
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map