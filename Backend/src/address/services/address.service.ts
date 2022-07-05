import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { User_address } from 'src/entities/user_address.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(User_address) private addressRepo: Repository<User_address>,
    @InjectRepository(User) private userRepo: Repository<User>,
    ) {}

  getAddresses() {
    return this.addressRepo.find(
      {
        loadRelationIds: true,
      }
    );
  }

  public async getAddress(id: number) {
    return await this.addressRepo.findOne(id,
      {
        loadRelationIds: true,
      }
    );
  }

  public async getAddressByUser(userId: number) {
    const user = await this.userRepo.findOne(userId);
    if (!user) {
      throw new BadRequestException('El usuario especificado no existe.');
    }
    return await this.addressRepo.find(
      {
        where:
        {user: userId }
      }
    );
  }

  public async create(body) {
    const newAddress = new User_address();
    newAddress.address = body.address;
    newAddress.city = body.city;
    newAddress.postal_code = body.postal_code;
    newAddress.country = body.country;
    newAddress.telephone = body.telephone;
    newAddress.mobile = body.mobile;
    newAddress.user = body.user_id;

    const searchAddress = await this.addressRepo.findOne(
      {
        where: 
        { address: newAddress.address, user: newAddress.user}
      }
    );
    
    if (searchAddress) {
      throw new BadRequestException('La dirección ya ha sido agregada.');
    }

    return this.addressRepo.save(newAddress);
  }

  public async update(id, body) {
    const address = await this.getAddress(id);
    if (!address) {
      throw new BadRequestException('La dirección no existe en el sistema.');
    }
    this.addressRepo.merge(address, body);
    return await this.addressRepo.save(address);
  }

  public async delete(id) {
    return await this.addressRepo.delete(id);
  }

}
