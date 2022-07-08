import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { OrderDetailService } from '../services/order-detail.service';

@Controller('order-detail')
export class OrderDetailController {
  constructor(private orderDetailService: OrderDetailService) {}

  @Get('all')
  public findAll() {
    return this.orderDetailService.getOrdersDetail();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderDetailService.getOrderDetail(parseInt(id));
  }

  @Post('create')
  createOrderDetail(@Body() body) {
    return this.orderDetailService.create(body);
  }

  @Put(':id')
  updateOrderDetail(@Param('id') id: string, @Body() body) {
    return this.orderDetailService.update(id, body);
  }

  @Delete(':id')
  deleteOrderDetail(@Param('id') id: string) {
    return this.orderDetailService.delete(id);
  }

  @Get('compraaa')
  registrarDatosCompra(@Body() body) {
    console.log("me llaman alguna vez");
    return this.orderDetailService.crearBoleta(body);
  }
}
