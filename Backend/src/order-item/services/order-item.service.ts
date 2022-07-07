import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order_item } from 'src/entities/order_item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderItemService {
  constructor(
    @InjectRepository(Order_item) private orderItemRepo: Repository<Order_item>,
  ) {}

  getOrdersItem() {
    return this.orderItemRepo.find(
      {
        /**relations: ['category'],**/
        loadRelationIds: true,
      }
    );
  }

  public async getOrderItem(id: number) {
    return await this.orderItemRepo.findOne(id,
      {
        loadRelationIds: true,
      }
    );
  }

  public async getOrderItemByOrder(orderId: number) {
    return await this.orderItemRepo.find(
      {
        where: 
        { order: orderId }
      }
    );
  }

  public async getOrderItemByProduct(productId: number) {
    return await this.orderItemRepo.find(
      {
        where: 
        { product: productId }
      }
    );
  }

  async create(body) {
    const newOrderItem = new Order_item();
    newOrderItem.order = body.order;
    newOrderItem.product = body.product;
    newOrderItem.quantity = body.quantity;
    return await this.orderItemRepo.save(newOrderItem);
  }

  async update(id, body) {
    const orderItem = await this.getOrderItem(id);
    if (!orderItem) {
      throw new BadRequestException('La orden no existe en el sistema.');
    }
    this.orderItemRepo.merge(orderItem, body);
    return await this.orderItemRepo.save(orderItem);
  }

  async delete(id) {
    return await this.orderItemRepo.delete(id);
  }
}
