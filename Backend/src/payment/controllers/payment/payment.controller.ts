import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PaymentService } from '../../services/payment/payment.service';


@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @Get('all')
  public findAll() {
    return this.paymentService.getPayments();
  }

  @Get(':id')
  public findOne(@Param('id') id: string) {
    return this.paymentService.getPayment(parseInt(id));
  }

  @Get('user/:userId')
  public findByUser(@Param('userId') userId: string) {
    return this.paymentService.getPaymentByUser(parseInt(userId));
  }

  @Post('create')
  public createPayment(@Body() body) {
    return this.paymentService.create(body);
  }

  @Put(':id')
  public updatePayment(@Param('id') id: string, @Body() body ) {
    return this.paymentService.update(id, body);
  }

  @Delete(':id')
  public deletePayment(@Param('id') id: string) {
    return this.paymentService.delete(id);
  }
}
