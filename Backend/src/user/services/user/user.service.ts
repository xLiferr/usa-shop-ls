import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepo: Repository<User>,
  ) {}

  getUsers() {
    return this.usersRepo.find();
  }

  public async getUser(id: number) {
    return await this.usersRepo.findOne(id);
  }

  public async getUserByUsername(username: string) {
    return await this.usersRepo.findOne(
      { where: 
        { username: username }
      }
    );
  }


  async create(body) {
    const newUser = new User();
    newUser.username = body.username;
    newUser.password = body.password;
    newUser.name = body.name;
    newUser.second_name = body.second_name;
    newUser.telephone = body.telephone;
    newUser.email = body.email;
    return this.usersRepo.save(newUser);
  }

}
