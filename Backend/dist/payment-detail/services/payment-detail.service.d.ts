import { Payment_detail } from 'src/entities/payment_detail.entity';
import { Repository } from 'typeorm';
export declare class PaymentDetailService {
    private paymentDetailRepo;
    constructor(paymentDetailRepo: Repository<Payment_detail>);
    getPaymentsDetail(): Promise<Payment_detail[]>;
    getPaymentDetail(id: number): Promise<Payment_detail>;
    create(body: any): Promise<Payment_detail>;
    update(id: any, body: any): Promise<Payment_detail>;
    delete(id: any): Promise<import("typeorm").DeleteResult>;
}
