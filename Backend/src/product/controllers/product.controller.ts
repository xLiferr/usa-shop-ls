import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProductDto } from '../dtos/product.dto';
import { ProductService } from '../services/product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('all')
  public findAll() {
    return this.productService.getProducts();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.getProduct(parseInt(id));
  }

  @Post('create')
  createProduct(@Body() body: CreateProductDto) {
    return this.productService.create(body);
  }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() body) {
    return this.productService.update(id, body);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.delete(id);
  }

}
