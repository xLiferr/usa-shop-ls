import { PaymentService } from '../../services/payment/payment.service';
export declare class PaymentController {
    private paymentService;
    constructor(paymentService: PaymentService);
    findAll(): Promise<import("../../../entities/user_payment.entity").User_payment[]>;
    findOne(id: string): Promise<import("../../../entities/user_payment.entity").User_payment>;
    findByUser(userId: string): Promise<import("../../../entities/user_payment.entity").User_payment[]>;
    createPayment(body: any): Promise<import("../../../entities/user_payment.entity").User_payment>;
    updatePayment(id: string, body: any): Promise<import("../../../entities/user_payment.entity").User_payment>;
    deletePayment(id: string): Promise<import("typeorm").DeleteResult>;
}
