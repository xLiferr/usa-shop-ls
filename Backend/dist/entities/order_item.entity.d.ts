import { Order_detail } from "./order_detail.entity";
import { Product } from "./product.entity";
export declare class Order_item {
    id: number;
    order: Order_detail;
    product: Product;
    quantity: number;
}
