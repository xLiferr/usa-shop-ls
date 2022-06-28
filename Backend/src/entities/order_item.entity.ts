import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order_detail } from "./order_detail.entity";
import { Product } from "./product.entity";


@Entity()
export class Order_item {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(() => Order_detail)
  @JoinColumn()
  order: Order_detail
  
  @OneToOne(() => Product)
  @JoinColumn()
  product: Product

  @Column()
  quantity: number

}