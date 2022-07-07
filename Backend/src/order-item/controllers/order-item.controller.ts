import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { OrderItemService } from '../services/order-item.service';

@Controller('order-item')
export class OrderItemController {
  constructor(private orderItemService: OrderItemService) {}

  @Get('all')
  public findAll() {
    return this.orderItemService.getOrdersItem();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderItemService.getOrderItem(parseInt(id));
  }

  @Post('create')
  createOrderItem(@Body() body) {
    return this.orderItemService.create(body);
  }

  @Put(':id')
  updateOrderItem(@Param('id') id: string, @Body() body) {
    return this.orderItemService.update(id, body);
  }

  @Delete(':id')
  deleteOrderItem(@Param('id') id: string) {
    return this.orderItemService.delete(id);
  }
}
