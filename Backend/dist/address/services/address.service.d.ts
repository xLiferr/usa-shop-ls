import { User } from 'src/entities/user.entity';
import { User_address } from 'src/entities/user_address.entity';
import { Repository } from 'typeorm';
export declare class AddressService {
    private addressRepo;
    private userRepo;
    constructor(addressRepo: Repository<User_address>, userRepo: Repository<User>);
    getAddresses(): Promise<User_address[]>;
    getAddress(id: number): Promise<User_address>;
    getAddressByUser(userId: number): Promise<User_address[]>;
    create(body: any): Promise<User_address>;
    update(id: any, body: any): Promise<User_address>;
    delete(id: any): Promise<import("typeorm").DeleteResult>;
}
