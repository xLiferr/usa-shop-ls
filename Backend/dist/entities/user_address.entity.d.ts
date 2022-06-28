import { User } from "./user.entity";
export declare class User_address {
    id: number;
    user: User;
    address: string;
    city: string;
    postal_code: number;
    country: string;
    telephone?: string;
    mobile: string;
}
