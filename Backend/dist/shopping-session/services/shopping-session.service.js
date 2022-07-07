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
exports.ShoppingSessionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const shopping_session_entity_1 = require("../../entities/shopping_session.entity");
const typeorm_2 = require("typeorm");
let ShoppingSessionService = class ShoppingSessionService {
    constructor(shoppingSessionRepo) {
        this.shoppingSessionRepo = shoppingSessionRepo;
    }
    async getShoppingSession(id) {
        return await this.shoppingSessionRepo.findOne(id, {
            loadRelationIds: true,
        });
    }
    async create(body) {
        const newShoppingSession = new shopping_session_entity_1.Shopping_session();
        newShoppingSession.total = body.total;
        newShoppingSession.user = body.user;
        return await this.shoppingSessionRepo.save(newShoppingSession);
    }
    async update(id, body) {
        const shoppingSession = await this.getShoppingSession(id);
        if (!shoppingSession) {
            throw new common_1.BadRequestException('El carrito no existe en el sistema.');
        }
        this.shoppingSessionRepo.merge(shoppingSession, body);
        return await this.shoppingSessionRepo.save(shoppingSession);
    }
    async delete(id) {
        return await this.shoppingSessionRepo.delete(id);
    }
};
ShoppingSessionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(shopping_session_entity_1.Shopping_session)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ShoppingSessionService);
exports.ShoppingSessionService = ShoppingSessionService;
//# sourceMappingURL=shopping-session.service.js.map