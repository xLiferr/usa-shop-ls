"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingSessionModule = void 0;
const common_1 = require("@nestjs/common");
const shopping_session_service_1 = require("./services/shopping-session.service");
const shopping_session_controller_1 = require("./controllers/shopping-session.controller");
const typeorm_1 = require("@nestjs/typeorm");
const shopping_session_entity_1 = require("../entities/shopping_session.entity");
let ShoppingSessionModule = class ShoppingSessionModule {
};
ShoppingSessionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([shopping_session_entity_1.Shopping_session])
        ],
        providers: [shopping_session_service_1.ShoppingSessionService],
        controllers: [shopping_session_controller_1.ShoppingSessionController]
    })
], ShoppingSessionModule);
exports.ShoppingSessionModule = ShoppingSessionModule;
//# sourceMappingURL=shopping-session.module.js.map