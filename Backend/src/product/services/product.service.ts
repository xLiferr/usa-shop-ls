import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { MoreThan, Repository } from 'typeorm';
import { Product_category } from 'src/entities/product_category.entity'


@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productsRepo: Repository<Product>,
    @InjectRepository(Product_category) private productsCategoryRepo: Repository<Product_category>,
  ) {}

  getProducts() {
    return this.productsRepo.find(
      {
        relations: ['category'],
        /**loadRelationIds: true,**/
        where: {
          stock: MoreThan(0),
        }
      }
    );
  }

  public async getProduct(id: number) {
    return await this.productsRepo.findOne(id,
      {
        relations: ['category'],
        /**loadRelationIds: true,**/
      }
    );
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
        { id: newProduct.category }
      }
    );
    
    if (!searchCategory) {
      throw new BadRequestException('La categoría del producto no existe');
    }

    return await this.productsRepo.save(newProduct);
  }

  async update(id, body) {
    const product = await this.getProduct(id);
    if (!product) {
      throw new BadRequestException('El producto no existe en el sistema.');
    }
    if (body.category) {
      const categoryToUpdate = await this.productsCategoryRepo.findOne(
        {
          where: 
          { name: body.category }
        }
      );
      if (!categoryToUpdate) {
        throw new BadRequestException('No existe la categoría.');
      }
    }
    this.productsRepo.merge(product, body);
    return await this.productsRepo.save(product);
  }

  async delete(id) {
    return await this.productsRepo.delete(id);
  }

}
