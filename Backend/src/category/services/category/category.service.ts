import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product_category } from 'src/entities/product_category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Product_category) private categoriesRepo: Repository<Product_category>,
  ) {}
  
  getProductsCategories() {
    return this.categoriesRepo.find();
  }

  async getProductCategory(id: number) {
    return await this.categoriesRepo.findOne(id);
  }

  async getProductCategoryByName(name: string) {
    return await this.categoriesRepo.findOne(
      {
        where:
        { name: name}
      }
    );
  }

  async create(body) {
     const newCategory = new Product_category();
     newCategory.name = body.name
     return await this.categoriesRepo.save(newCategory);
  }


}
