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
exports.AddressService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../../entities/user.entity");
const user_address_entity_1 = require("../../entities/user_address.entity");
const typeorm_2 = require("typeorm");
let AddressService = class AddressService {
    constructor(addressRepo, userRepo) {
        this.addressRepo = addressRepo;
        this.userRepo = userRepo;
    }
    getAddresses() {
        return this.addressRepo.find({
            loadRelationIds: true,
        });
    }
    async getAddress(id) {
        return await this.addressRepo.findOne(id, {
            loadRelationIds: true,
        });
    }
    async getAddressByUser(userId) {
        const user = await this.userRepo.findOne(userId);
        if (!user) {
            throw new common_1.BadRequestException('El usuario especificado no existe.');
        }
        return await this.addressRepo.find({
            where: { user: userId }
        });
    }
    async create(body) {
        const newAddress = new user_address_entity_1.User_address();
        newAddress.address = body.address;
        newAddress.city = body.city;
        newAddress.postal_code = body.postal_code;
        newAddress.country = body.country;
        newAddress.telephone = body.telephone;
        newAddress.mobile = body.mobile;
        newAddress.user = body.user_id;
        const searchAddress = await this.addressRepo.findOne({
            where: { address: newAddress.address, user: newAddress.user }
        });
        if (searchAddress) {
            throw new common_1.BadRequestException('La dirección ya ha sido agregada.');
        }
        return this.addressRepo.save(newAddress);
    }
    async update(id, body) {
        const address = await this.getAddress(id);
        if (!address) {
            throw new common_1.BadRequestException('La dirección no existe en el sistema.');
        }
        this.addressRepo.merge(address, body);
        return await this.addressRepo.save(address);
    }
    async delete(id) {
        return await this.addressRepo.delete(id);
    }
};
AddressService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_address_entity_1.User_address)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AddressService);
exports.AddressService = AddressService;
//# sourceMappingURL=address.service.js.map