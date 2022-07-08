import { User } from "./user.entity";
export declare class Order_detail {
    id: number;
    user: User;
    total: number;
    date: Date;
    flow_order: string;
    status: number;
}
