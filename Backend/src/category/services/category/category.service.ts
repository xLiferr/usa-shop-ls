import { BadRequestException, Injectable } from '@nestjs/common';
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
    const searchCategory = await this.getProductCategoryByName(body.name);
    console.log(searchCategory);
    if (searchCategory) {
      throw new BadRequestException('La categoría ya existe en el sistema.');
    }
    return await this.categoriesRepo.save(newCategory);
  }

  async update(id, body) {
    const category = await this.getProductCategory(id);
    if (!category) {
      throw new BadRequestException('La categoría no existe en el sistema.');
    }
    this.categoriesRepo.merge(category, body);
    return await this.categoriesRepo.save(category);
  }

  async delete(id) {
    return await this.categoriesRepo.delete(id);
  }


}
