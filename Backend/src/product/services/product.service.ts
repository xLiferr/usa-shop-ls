import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { Connection, MoreThan, Repository } from 'typeorm';
import { Product_category } from 'src/entities/product_category.entity'
import { File } from 'src/entities/file.entity';
import { FileService } from 'src/file/services/file/file.service';


@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productsRepo: Repository<Product>,
    private fileService: FileService,
    @InjectRepository(Product_category) private productsCategoryRepo: Repository<Product_category>,
    private connection: Connection,
    
  ) {}

  getProducts() {
    return this.productsRepo.find(
      {
        relations: ['category','file'],
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
    newProduct.gender = body.gender;

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

  async addImg(productId: number, imageBuffer: Buffer, filename: string) {
    const queryRunner = this.connection.createQueryRunner();
 
    await queryRunner.connect();
    await queryRunner.startTransaction();
 
    try {
      const product = await queryRunner.manager.findOne(Product, productId);
      const currentAvatarId = product.avatar_id;
      const avatar = await this.fileService.uploadDatabaseFileWithQueryRunner(imageBuffer, filename, queryRunner);
 
      await queryRunner.manager.update(Product, productId, {
        avatar_id: avatar.id
      });
 
      if (currentAvatarId) {
        await this.fileService.deleteFileWithQueryRunner(currentAvatarId, queryRunner);
      }
 
      await queryRunner.commitTransaction();
 
      return avatar;
    } catch {
      await queryRunner.rollbackTransaction();
      throw new InternalServerErrorException();
    } finally {
      await queryRunner.release();
    }
  }

  async delete(id) {
    return await this.productsRepo.delete(id);
  }

}
