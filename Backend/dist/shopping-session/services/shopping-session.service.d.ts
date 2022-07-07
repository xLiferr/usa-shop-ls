import { Shopping_session } from 'src/entities/shopping_session.entity';
import { Repository } from 'typeorm';
export declare class ShoppingSessionService {
    private shoppingSessionRepo;
    constructor(shoppingSessionRepo: Repository<Shopping_session>);
    getShoppingSession(id: number): Promise<Shopping_session>;
    create(body: any): Promise<Shopping_session>;
    update(id: any, body: any): Promise<Shopping_session>;
    delete(id: any): Promise<import("typeorm").DeleteResult>;
}
