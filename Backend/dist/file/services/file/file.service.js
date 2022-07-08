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
exports.FileService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const file_entity_1 = require("../../../entities/file.entity");
const typeorm_2 = require("typeorm");
let FileService = class FileService {
    constructor(fileRepo) {
        this.fileRepo = fileRepo;
    }
    async uploadFile(dataBuffer, filename) {
        const newFile = await this.fileRepo.create({
            filename,
            data: dataBuffer
        });
        await this.fileRepo.save(newFile);
        return newFile;
    }
    async uploadDatabaseFileWithQueryRunner(dataBuffer, filename, queryRunner) {
        const newFile = await queryRunner.manager.create(file_entity_1.File, {
            filename,
            data: dataBuffer
        });
        await queryRunner.manager.save(file_entity_1.File, newFile);
        return newFile;
    }
    async getFileById(id) {
        return await this.fileRepo.findOne(id);
    }
    async deleteFileWithQueryRunner(id, queryRunner) {
        const deleteResponse = await queryRunner.manager.delete(file_entity_1.File, id);
        if (!deleteResponse.affected) {
            throw new common_1.NotFoundException();
        }
    }
};
FileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(file_entity_1.File)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FileService);
exports.FileService = FileService;
//# sourceMappingURL=file.service.js.map