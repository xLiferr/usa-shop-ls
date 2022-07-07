import { Module } from '@nestjs/common';
import { OrderDetailService } from './services/order-detail.service';
import { OrderDetailController } from './controllers/order-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order_detail } from 'src/entities/order_detail.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order_detail])
  ],
  providers: [OrderDetailService],
  controllers: [OrderDetailController]
})
export class OrderDetailModule {}
