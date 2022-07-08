import { Module } from '@nestjs/common';
import { ProductService } from './services/product.service';
import { ProductController } from './controllers/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { Product_category } from 'src/entities/product_category.entity';
import { CategoryService } from 'src/category/services/category/category.service';
import { File } from 'src/entities/file.entity';
import { FileService } from 'src/file/services/file/file.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    TypeOrmModule.forFeature([Product_category]),
    TypeOrmModule.forFeature([File]),
  ],
  providers: [ProductService,CategoryService,FileService],
  controllers: [ProductController]
})
export class ProductModule {}
