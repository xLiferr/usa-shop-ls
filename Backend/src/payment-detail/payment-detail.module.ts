import { Module } from '@nestjs/common';
import { PaymentDetailService } from './services/payment-detail.service';
import { PaymentDetailController } from './controllers/payment-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order_item } from 'src/entities/order_item.entity';
import { Payment_detail } from 'src/entities/payment_detail.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Payment_detail])
  ],
  providers: [PaymentDetailService],
  controllers: [PaymentDetailController]
})
export class PaymentDetailModule {}
