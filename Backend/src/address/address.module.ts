import { Module } from '@nestjs/common';
import { AddressService } from './services/address.service';
import { AddressController } from './controllers/address.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User_address } from 'src/entities/user_address.entity';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User_address]),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [AddressService],
  controllers: [AddressController]
})
export class AddressModule {}
