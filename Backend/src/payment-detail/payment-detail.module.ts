import { Module } from '@nestjs/common';
import { PaymentDetailService } from './services/payment-detail.service';
import { PaymentDetailController } from './controllers/payment-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order_item } from 'src/entities/order_item.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order_item])
  ],
  providers: [PaymentDetailService],
  controllers: [PaymentDetailController]
})
export class PaymentDetailModule {}
