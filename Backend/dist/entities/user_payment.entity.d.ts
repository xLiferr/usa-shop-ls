import { User } from "./user.entity";
export declare class User_payment {
    id: number;
    user: User;
    payment_type: string;
    provider: string;
    account_no: number;
    expiry: Date;
}
