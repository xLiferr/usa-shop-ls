import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../../user/services/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    console.log("service auth validate");
    const user = await this.userService.getUserByUsername(username);
    if( user && user.password === pass) {
      const {password, ...result} = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    console.log("service auth login");
    const payload = { username: user.username, sub: user.id};
    return {
      access_token: this.jwtService.sign(payload),
      id: user.id,
      type: user.type
    }
  }
}
