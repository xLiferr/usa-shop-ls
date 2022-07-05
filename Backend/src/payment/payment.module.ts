import { Module } from '@nestjs/common';
import { PaymentService } from './services/payment/payment.service';
import { PaymentController } from './controllers/payment/payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User_payment } from 'src/entities/user_payment.entity';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User_payment]),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [PaymentService],
  controllers: [PaymentController]
})
export class PaymentModule {}
