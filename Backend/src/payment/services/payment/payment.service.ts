import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { User_payment } from 'src/entities/user_payment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(User_payment) private paymentsRepo: Repository<User_payment>,
    @InjectRepository(User) private userRepo: Repository<User>,
    ) {}

  getPayments() {
    return this.paymentsRepo.find(
      {
        loadRelationIds: true,
      }
    );
  }

  public async getPayment(id: number) {
    return await this.paymentsRepo.findOne(id,
      {
        loadRelationIds: true,
      }
    );
  }

  public async getPaymentByUser(userId: number) {
    const user = await this.userRepo.findOne(userId);
    if (!user) {
      throw new BadRequestException('El usuario especificado no existe.');
    }
    return await this.paymentsRepo.find(
      {
        where:
        {user: userId }
      }
    );
  }

  public async create(body) {
    const newPayment = new User_payment();
    newPayment.payment_type = body.payment_type;
    newPayment.account_no = body.account_no;
    newPayment.provider = body.provider;
    newPayment.expiry = body.expiry;
    newPayment.user = body.user_id;

    const searchPayment = await this.paymentsRepo.findOne(
      {
        where: 
        { account_no: newPayment.account_no, user: newPayment.user}
      }
    );
    
    if (searchPayment) {
      throw new BadRequestException('El método de pago ya ha sido agregado.');
    }

    return this.paymentsRepo.save(newPayment);
  }

  public async update(id, body) {
    const payment = await this.getPayment(id);
    if (!payment) {
      throw new BadRequestException('El método de pago no existe en el sistema.');
    }
    this.paymentsRepo.merge(payment, body);
    return await this.paymentsRepo.save(payment);
  }

  public async delete(id) {
    return await this.paymentsRepo.delete(id);
  }

}
