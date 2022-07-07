import { PaymentDetailService } from '../services/payment-detail.service';
export declare class PaymentDetailController {
    private paymentDetailService;
    constructor(paymentDetailService: PaymentDetailService);
    findAll(): Promise<import("../../entities/payment_detail.entity").Payment_detail[]>;
    findOne(id: string): Promise<import("../../entities/payment_detail.entity").Payment_detail>;
    createPaymentDetail(body: any): Promise<import("../../entities/payment_detail.entity").Payment_detail>;
    updatePaymentDetail(id: string, body: any): Promise<import("../../entities/payment_detail.entity").Payment_detail>;
    deletePaymentDetail(id: string): Promise<import("typeorm").DeleteResult>;
}
