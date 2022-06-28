import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from 'src/category/services/category/category.service';

@Controller('category')
export class CategoryController {
  constructor(private productService: CategoryService) {}

  @Get('all')
  public findAll() {
    return this.productService.getProductsCategories();
  }

  @Post('create')
  createCategory(@Body() body) {
    return this.productService.create(body);
  }

  
}
