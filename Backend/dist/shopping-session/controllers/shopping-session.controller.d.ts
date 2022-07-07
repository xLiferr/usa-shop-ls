import { ShoppingSessionService } from '../services/shopping-session.service';
export declare class ShoppingSessionController {
    private shoppingSessionService;
    constructor(shoppingSessionService: ShoppingSessionService);
    findOne(id: string): Promise<import("../../entities/shopping_session.entity").Shopping_session>;
    createShoppingSession(body: any): Promise<import("../../entities/shopping_session.entity").Shopping_session>;
    updateShoppingSession(id: string, body: any): Promise<import("../../entities/shopping_session.entity").Shopping_session>;
    deleteShoppingSession(id: string): Promise<import("typeorm").DeleteResult>;
}
