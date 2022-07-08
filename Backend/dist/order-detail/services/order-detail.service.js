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
exports.OrderDetailService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const order_detail_entity_1 = require("../../entities/order_detail.entity");
const typeorm_2 = require("typeorm");
const flowApi_1 = require("../flowApi");
const flowApi_2 = require("../flowApi");
let OrderDetailService = class OrderDetailService {
    constructor(orderDetailRepo) {
        this.orderDetailRepo = orderDetailRepo;
    }
    getOrdersDetail() {
        return this.orderDetailRepo.find({
            loadRelationIds: true,
        });
    }
    async getOrderDetail(id) {
        return await this.orderDetailRepo.findOne(id, {
            loadRelationIds: true,
        });
    }
    async getOrderDetailsByUser(userId) {
        return await this.orderDetailRepo.find({
            where: { user: userId }
        });
    }
    async create(body) {
        const newOrderDetail = new order_detail_entity_1.Order_detail();
        newOrderDetail.total = body.total;
        newOrderDetail.user = body.user;
        return await this.orderDetailRepo.save(newOrderDetail);
    }
    async update(id, body) {
        const orderDetail = await this.getOrderDetail(id);
        if (!orderDetail) {
            throw new common_1.BadRequestException('La orden no existe en el sistema.');
        }
        this.orderDetailRepo.merge(orderDetail, body);
        return await this.orderDetailRepo.save(orderDetail);
    }
    async delete(id) {
        return await this.orderDetailRepo.delete(id);
    }
    async createOrder(req, res) {
        console.log(req);
        const params = {
            commerceOrder: Math.floor(Math.random() * (2000 - 1100 + 1)) + 1100,
            subject: "Pago de prueba",
            currency: "CLP",
            amount: 5000,
            email: "dibiridap@gmail.com",
            paymentMethod: 9,
            urlConfirmation: flowApi_2.config.baseURL + "/order_detail/compraaa",
            urlReturn: flowApi_2.config.redirectURL,
        };
        const serviceName = "payment/create";
        const flowApi = new flowApi_1.FlowApi(flowApi_2.config);
        const response = await flowApi.send(serviceName, params, "POST");
        const redirect = response.url + "?token=" + response.token;
        console.log(redirect);
        res.json({
            redirect
        });
    }
};
__decorate([
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderDetailService.prototype, "createOrder", null);
OrderDetailService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_detail_entity_1.Order_detail)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OrderDetailService);
exports.OrderDetailService = OrderDetailService;
//# sourceMappingURL=order-detail.service.js.map