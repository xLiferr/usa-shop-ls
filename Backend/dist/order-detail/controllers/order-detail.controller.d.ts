import { OrderDetailService } from '../services/order-detail.service';
export declare class OrderDetailController {
    private orderDetailService;
    constructor(orderDetailService: OrderDetailService);
    findAll(): Promise<import("../../entities/order_detail.entity").Order_detail[]>;
    findOne(id: string): Promise<import("../../entities/order_detail.entity").Order_detail>;
    createOrderDetail(body: any): Promise<import("../../entities/order_detail.entity").Order_detail>;
    updateOrderDetail(id: string, body: any): Promise<import("../../entities/order_detail.entity").Order_detail>;
    deleteOrderDetail(id: string): Promise<import("typeorm").DeleteResult>;
    registrarDatosCompra(req: any, res: any): Promise<void>;
}
