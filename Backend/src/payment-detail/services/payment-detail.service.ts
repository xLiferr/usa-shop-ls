import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment_detail } from 'src/entities/payment_detail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentDetailService {
  constructor(
    @InjectRepository(Payment_detail) private paymentDetailRepo: Repository<Payment_detail>,
  ) {}

  getPaymentsDetail() {
    return this.paymentDetailRepo.find(
      {
        /**relations: ['category'],**/
        loadRelationIds: true,
      }
    );
  }

  public async getPaymentDetail(id: number) {
    return await this.paymentDetailRepo.findOne(id,
      {
        loadRelationIds: true,
      }
    );
  }

  async create(body) {
    const newPaymentDetail = new Payment_detail();
    newPaymentDetail.amount = body.amount;
    newPaymentDetail.order = body.order;
    newPaymentDetail.provider = body.provider;
    newPaymentDetail.status = body.status;
    return await this.paymentDetailRepo.save(newPaymentDetail);
  }

  async update(id, body) {
    const paymentDetail = await this.getPaymentDetail(id);
    if (!paymentDetail) {
      throw new BadRequestException('El detalle de pago no existe en el sistema.');
    }
    this.paymentDetailRepo.merge(paymentDetail, body);
    return await this.paymentDetailRepo.save(paymentDetail);
  }

  async delete(id) {
    return await this.paymentDetailRepo.delete(id);
  }
}
