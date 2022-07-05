import { User } from 'src/entities/user.entity';
import { User_payment } from 'src/entities/user_payment.entity';
import { Repository } from 'typeorm';
export declare class PaymentService {
    private paymentsRepo;
    private userRepo;
    constructor(paymentsRepo: Repository<User_payment>, userRepo: Repository<User>);
    getPayments(): Promise<User_payment[]>;
    getPayment(id: number): Promise<User_payment>;
    getPaymentByUser(userId: number): Promise<User_payment[]>;
    create(body: any): Promise<User_payment>;
    update(id: any, body: any): Promise<User_payment>;
    delete(id: any): Promise<import("typeorm").DeleteResult>;
}
