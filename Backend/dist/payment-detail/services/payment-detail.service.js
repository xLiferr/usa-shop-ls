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
exports.PaymentDetailService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const payment_detail_entity_1 = require("../../entities/payment_detail.entity");
const typeorm_2 = require("typeorm");
let PaymentDetailService = class PaymentDetailService {
    constructor(paymentDetailRepo) {
        this.paymentDetailRepo = paymentDetailRepo;
    }
    getPaymentsDetail() {
        return this.paymentDetailRepo.find({
            loadRelationIds: true,
        });
    }
    async getPaymentDetail(id) {
        return await this.paymentDetailRepo.findOne(id, {
            loadRelationIds: true,
        });
    }
    async create(body) {
        const newPaymentDetail = new payment_detail_entity_1.Payment_detail();
        newPaymentDetail.amount = body.amount;
        newPaymentDetail.order = body.order;
        newPaymentDetail.provider = body.provider;
        newPaymentDetail.status = body.status;
        return await this.paymentDetailRepo.save(newPaymentDetail);
    }
    async update(id, body) {
        const paymentDetail = await this.getPaymentDetail(id);
        if (!paymentDetail) {
            throw new common_1.BadRequestException('El detalle de pago no existe en el sistema.');
        }
        this.paymentDetailRepo.merge(paymentDetail, body);
        return await this.paymentDetailRepo.save(paymentDetail);
    }
    async delete(id) {
        return await this.paymentDetailRepo.delete(id);
    }
};
PaymentDetailService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(payment_detail_entity_1.Payment_detail)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PaymentDetailService);
exports.PaymentDetailService = PaymentDetailService;
//# sourceMappingURL=payment-detail.service.js.map