import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PaymentDetailService } from '../services/payment-detail.service';

@Controller('payment-detail')
export class PaymentDetailController {
  constructor(private paymentDetailService: PaymentDetailService) {}

  @Get('all')
  public findAll() {
    return this.paymentDetailService.getPaymentsDetail();
  }

  @Get(':id')
  public findOne(@Param('id') id: string) {
    return this.paymentDetailService.getPaymentDetail(parseInt(id));
  }

  @Post('create')
  public createPaymentDetail(@Body() body) {
    return this.paymentDetailService.create(body);
  }

  @Put(':id')
  public updatePaymentDetail(@Param('id') id: string, @Body() body ) {
    return this.paymentDetailService.update(id, body);
  }

  @Delete(':id')
  public deletePaymentDetail(@Param('id') id: string) {
    return this.paymentDetailService.delete(id);
  }
}
