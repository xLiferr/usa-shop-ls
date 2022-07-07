import { OrderItemService } from '../services/order-item.service';
export declare class OrderItemController {
    private orderItemService;
    constructor(orderItemService: OrderItemService);
    findAll(): Promise<import("../../entities/order_item.entity").Order_item[]>;
    findOne(id: string): Promise<import("../../entities/order_item.entity").Order_item>;
    createOrderItem(body: any): Promise<import("../../entities/order_item.entity").Order_item>;
    updateOrderItem(id: string, body: any): Promise<import("../../entities/order_item.entity").Order_item>;
    deleteOrderItem(id: string): Promise<import("typeorm").DeleteResult>;
}
