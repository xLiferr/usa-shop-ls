import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()), 
    UserModule, AuthModule, ProductModule, CategoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
