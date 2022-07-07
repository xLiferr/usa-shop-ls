import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Shopping_session } from 'src/entities/shopping_session.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShoppingSessionService {
  constructor(
    @InjectRepository(Shopping_session) private shoppingSessionRepo: Repository<Shopping_session>,
  ) {}


  public async getShoppingSession(id: number) {
    return await this.shoppingSessionRepo.findOne(id,
      {
        loadRelationIds: true,
      }
    );
  }

  async create(body) {
    const newShoppingSession = new Shopping_session();
    newShoppingSession.total = body.total;
    newShoppingSession.user = body.user;
    
    return await this.shoppingSessionRepo.save(newShoppingSession);
  }

  async update(id, body) {
    const shoppingSession = await this.getShoppingSession(id);
    if (!shoppingSession) {
      throw new BadRequestException('El carrito no existe en el sistema.');
    }
    this.shoppingSessionRepo.merge(shoppingSession, body);
    return await this.shoppingSessionRepo.save(shoppingSession);
  }

  async delete(id) {
    return await this.shoppingSessionRepo.delete(id);
  }
}
