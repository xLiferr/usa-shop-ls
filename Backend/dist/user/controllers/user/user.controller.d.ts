import { CreateUserDto } from 'src/user/dtos/user.dto';
import { UserService } from 'src/user/services/user/user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findAll(): Promise<import("../../../entities/user.entity").User[]>;
    findOne(id: string): Promise<import("../../../entities/user.entity").User>;
    create(body: CreateUserDto): Promise<import("../../../entities/user.entity").User>;
}
