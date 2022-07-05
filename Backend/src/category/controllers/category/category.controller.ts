import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryService } from 'src/category/services/category/category.service';

@Controller('category')
export class CategoryController {
  constructor(private productService: CategoryService) {}

  @Get('all')
  public findAll() {
    return this.productService.getProductsCategories();
  }

  @Get(':id')
  public findOne(@Param('id') id: string) {
    return this.productService.getProductCategory(parseInt(id));
  }

  @Post('create')
  public createCategory(@Body() body) {
    return this.productService.create(body);
  }

  @Put(':id')
  public updateCategory(@Param('id') id: string, @Body() body) {
    return this.productService.update(id, body);
  }

  @Delete(':id')
  public deleteCategory(@Param('id') id: string) {
    return this.productService.delete(id);
  }
  
}
