import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private usersRepo;
    constructor(usersRepo: Repository<User>);
    getUsers(): Promise<User[]>;
    getUser(id: number): Promise<User>;
    getUserByUsername(username: string): Promise<User>;
    create(body: any): Promise<User>;
}
