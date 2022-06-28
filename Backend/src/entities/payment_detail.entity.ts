import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order_detail } from "./order_detail.entity";


@Entity()
export class Payment_detail {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(() => Order_detail)
  @JoinColumn()
  order: Order_detail

  @Column()
  amount: number

  @Column()
  provider: string

  @Column()
  status: string

}