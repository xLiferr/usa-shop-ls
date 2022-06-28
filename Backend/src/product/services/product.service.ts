import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { Repository } from 'typeorm';
import { Product_category } from 'src/entities/product_category.entity'

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productsRepo: Repository<Product>,
    @InjectRepository(Product_category) private productsCategoryRepo: Repository<Product_category>,
  ) {}

  getProducts() {
    return this.productsRepo.find();
  }

  public async getProduct(id: number) {
    return await this.productsRepo.findOne(id);
  }

  public async getProductByName(name: string) {
    return await this.productsRepo.findOne(
      {
        where: 
        { name: name }
      }
    );
  }

  async create(body) {
    const newProduct = new Product();
    newProduct.name = body.name;
    newProduct.category = body.category;
    newProduct.price = body.price;
    newProduct.stock = body.stock;

    const searchCategory = await this.productsCategoryRepo.findOne(
      {
        where: 
        { name: newProduct.category }
      }
    );
    
    if (!searchCategory) {
      throw new BadRequestException('La categoría del producto no existe');
    }

    return await this.productsRepo.save(newProduct);
  }

}
