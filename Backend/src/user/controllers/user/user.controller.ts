import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dtos/user.dto';
import { UserService } from 'src/user/services/user/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('all')
  public findAll() {
    return this.userService.getUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.getUser(parseInt(id));
  }

  @Post('register')
  create(@Body() body: CreateUserDto) {
    return this.userService.create(body);
  }
}
