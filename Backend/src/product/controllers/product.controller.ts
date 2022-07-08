import { Body, Controller, Delete, Get, Param, Post, Put, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
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

  @Post(':id/img')
  @UseInterceptors(FileInterceptor('file'))
  async addAvatar(@Param('id') id: string,@UploadedFile() file: Express.Multer.File) {
    return this.productService.addImg(parseInt(id),file.buffer, file.originalname);
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
