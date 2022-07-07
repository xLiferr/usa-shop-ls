import { Module } from '@nestjs/common';
import { ShoppingSessionService } from './services/shopping-session.service';
import { ShoppingSessionController } from './controllers/shopping-session.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shopping_session } from 'src/entities/shopping_session.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Shopping_session])
  ],
  providers: [ShoppingSessionService],
  controllers: [ShoppingSessionController]
})
export class ShoppingSessionModule {}
