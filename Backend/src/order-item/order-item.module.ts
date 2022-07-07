import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order_item } from 'src/entities/order_item.entity';
import { OrderItemController } from './controllers/order-item.controller';
import { OrderItemService } from './services/order-item.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order_item])
  ],
  controllers: [OrderItemController],
  providers: [OrderItemService]
})
export class OrderItemModule {}
