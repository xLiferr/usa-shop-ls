import { Order_item } from 'src/entities/order_item.entity';
import { Repository } from 'typeorm';
export declare class OrderItemService {
    private orderItemRepo;
    constructor(orderItemRepo: Repository<Order_item>);
    getOrdersItem(): Promise<Order_item[]>;
    getOrderItem(id: number): Promise<Order_item>;
    getOrderItemByOrder(orderId: number): Promise<Order_item[]>;
    getOrderItemByProduct(productId: number): Promise<Order_item[]>;
    create(body: any): Promise<Order_item>;
    update(id: any, body: any): Promise<Order_item>;
    delete(id: any): Promise<import("typeorm").DeleteResult>;
}
