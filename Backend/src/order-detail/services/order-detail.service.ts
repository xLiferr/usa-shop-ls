import { BadRequestException, Injectable, Req, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order_detail } from 'src/entities/order_detail.entity';
import { Repository } from 'typeorm';
import { FlowApi } from '../flowApi';
import { config } from '../flowApi';

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

  async createOrder(@Req() req, @Res() res) {
    console.log(req);
    const params = { 
      commerceOrder: Math.floor(Math.random() * (2000 - 1100 + 1)) + 1100,
      subject: "Pago de prueba",
      currency: "CLP",
      amount: 5000,
      email: "dibiridap@gmail.com",
      paymentMethod: 9,
      urlConfirmation: config.baseURL + "/order_detail/compraaa",
      urlReturn: config.redirectURL,
    };

    // Define el metodo a usar
    const serviceName = "payment/create";

    // Instancia la clase FlowApi
    const flowApi = new FlowApi(config);
    // Ejecuta el servicio

    const response = await flowApi.send(serviceName, params, "POST");
        //Prepara url para redireccionar el browser del pagador
    const redirect = response.url + "?token=" + response.token;
    console.log(redirect);
    res.json({
      redirect
    });

  }

}
