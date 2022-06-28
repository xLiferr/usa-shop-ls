import { Payment_detail } from "./payment_detail.entity";
import { User } from "./user.entity";
export declare class Order_detail {
    id: number;
    user: User;
    payment: Payment_detail;
    total: number;
}
