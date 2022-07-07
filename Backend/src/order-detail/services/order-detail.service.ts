import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order_detail } from 'src/entities/order_detail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderDetailService {
  constructor(
      @InjectRepository(Order_detail) private orderDetailRepo: Repository<Order_detail>,
    ) {}

  getOrdersDetail() {
    return this.orderDetailRepo.find(
      {
        /**relations: ['category'],**/
        loadRelationIds: true,
      }
    );
  }

  public async getOrderDetail(id: number) {
    return await this.orderDetailRepo.findOne(id,
      {
        loadRelationIds: true,
      }
    );
  }

  public async getOrderDetailsByUser(userId: number) {
    return await this.orderDetailRepo.find(
      {
        where: 
        { user: userId }
      }
    );
  }

  async create(body) {
    const newOrderDetail = new Order_detail();
    newOrderDetail.total = body.total;
    newOrderDetail.user = body.user;
    return await this.orderDetailRepo.save(newOrderDetail);
  }

  async update(id, body) {
    const orderDetail = await this.getOrderDetail(id);
    if (!orderDetail) {
      throw new BadRequestException('La orden no existe en el sistema.');
    }
    this.orderDetailRepo.merge(orderDetail, body);
    return await this.orderDetailRepo.save(orderDetail);
  }

  async delete(id) {
    return await this.orderDetailRepo.delete(id);
  }
}
