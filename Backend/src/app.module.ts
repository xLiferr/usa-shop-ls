import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { AddressModule } from './address/address.module';
import { PaymentModule } from './payment/payment.module';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { OrderItemModule } from './order-item/order-item.module';
import { PaymentDetailModule } from './payment-detail/payment-detail.module';
import { ShoppingSessionModule } from './shopping-session/shopping-session.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()), 
    UserModule, AuthModule, ProductModule, CategoryModule, AddressModule, PaymentModule, OrderDetailModule, OrderItemModule, PaymentDetailModule, ShoppingSessionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
