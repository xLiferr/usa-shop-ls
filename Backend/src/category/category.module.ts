import { Module } from '@nestjs/common';
import { CategoryService } from './services/category/category.service';
import { CategoryController } from './controllers/category/category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product_category } from 'src/entities/product_category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product_category])
  ],
  providers: [CategoryService],
  controllers: [CategoryController],
  exports: [CategoryService]
})
export class CategoryModule {}
