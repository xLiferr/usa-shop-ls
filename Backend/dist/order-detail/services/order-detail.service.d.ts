import { Order_detail } from 'src/entities/order_detail.entity';
import { Repository } from 'typeorm';
export declare class OrderDetailService {
    private orderDetailRepo;
    constructor(orderDetailRepo: Repository<Order_detail>);
    getOrdersDetail(): Promise<Order_detail[]>;
    getOrderDetail(id: number): Promise<Order_detail>;
    getOrderDetailsByUser(userId: number): Promise<Order_detail[]>;
    create(body: any): Promise<Order_detail>;
    update(id: any, body: any): Promise<Order_detail>;
    delete(id: any): Promise<import("typeorm").DeleteResult>;
    createOrder(req: any, res: any): Promise<void>;
}
