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
exports.ShoppingSessionController = void 0;
const common_1 = require("@nestjs/common");
const shopping_session_service_1 = require("../services/shopping-session.service");
let ShoppingSessionController = class ShoppingSessionController {
    constructor(shoppingSessionService) {
        this.shoppingSessionService = shoppingSessionService;
    }
    findOne(id) {
        return this.shoppingSessionService.getShoppingSession(parseInt(id));
    }
    createShoppingSession(body) {
        return this.shoppingSessionService.create(body);
    }
    updateShoppingSession(id, body) {
        return this.shoppingSessionService.update(id, body);
    }
    deleteShoppingSession(id) {
        return this.shoppingSessionService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShoppingSessionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ShoppingSessionController.prototype, "createShoppingSession", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ShoppingSessionController.prototype, "updateShoppingSession", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShoppingSessionController.prototype, "deleteShoppingSession", null);
ShoppingSessionController = __decorate([
    (0, common_1.Controller)('shopping-session'),
    __metadata("design:paramtypes", [shopping_session_service_1.ShoppingSessionService])
], ShoppingSessionController);
exports.ShoppingSessionController = ShoppingSessionController;
//# sourceMappingURL=shopping-session.controller.js.map