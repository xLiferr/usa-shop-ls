import { Product } from "./product.entity";
import { Shopping_session } from "./shopping_session.entity";
export declare class Cart_item {
    id: number;
    session: Shopping_session;
    product: Product;
    quantity: number;
}
