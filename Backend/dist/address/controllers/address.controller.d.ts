import { AddressService } from '../services/address.service';
export declare class AddressController {
    private addressService;
    constructor(addressService: AddressService);
    findAll(): Promise<import("../../entities/user_address.entity").User_address[]>;
    findOne(id: string): Promise<import("../../entities/user_address.entity").User_address>;
    findByUser(userId: string): Promise<import("../../entities/user_address.entity").User_address[]>;
    createAddress(body: any): Promise<import("../../entities/user_address.entity").User_address>;
    updateAddress(id: string, body: any): Promise<import("../../entities/user_address.entity").User_address>;
    deleteAddress(id: string): Promise<import("typeorm").DeleteResult>;
}
