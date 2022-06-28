import { Order_detail } from "./order_detail.entity";
export declare class Payment_detail {
    id: number;
    order: Order_detail;
    amount: number;
    provider: string;
    status: string;
}
