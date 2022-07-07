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
exports.OrderItemService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const order_item_entity_1 = require("../../entities/order_item.entity");
const typeorm_2 = require("typeorm");
let OrderItemService = class OrderItemService {
    constructor(orderItemRepo) {
        this.orderItemRepo = orderItemRepo;
    }
    getOrdersItem() {
        return this.orderItemRepo.find({
            loadRelationIds: true,
        });
    }
    async getOrderItem(id) {
        return await this.orderItemRepo.findOne(id, {
            loadRelationIds: true,
        });
    }
    async getOrderItemByOrder(orderId) {
        return await this.orderItemRepo.find({
            where: { order: orderId }
        });
    }
    async getOrderItemByProduct(productId) {
        return await this.orderItemRepo.find({
            where: { product: productId }
        });
    }
    async create(body) {
        const newOrderItem = new order_item_entity_1.Order_item();
        newOrderItem.order = body.order;
        newOrderItem.product = body.product;
        newOrderItem.quantity = body.quantity;
        return await this.orderItemRepo.save(newOrderItem);
    }
    async update(id, body) {
        const orderItem = await this.getOrderItem(id);
        if (!orderItem) {
            throw new common_1.BadRequestException('La orden no existe en el sistema.');
        }
        this.orderItemRepo.merge(orderItem, body);
        return await this.orderItemRepo.save(orderItem);
    }
    async delete(id) {
        return await this.orderItemRepo.delete(id);
    }
};
OrderItemService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_item_entity_1.Order_item)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OrderItemService);
exports.OrderItemService = OrderItemService;
//# sourceMappingURL=order-item.service.js.map