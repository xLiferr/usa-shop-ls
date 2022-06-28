import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Payment_detail } from "./payment_detail.entity";
import { User } from "./user.entity";


@Entity()
export class Order_detail{

  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => User)
  @JoinColumn( {name: 'user_id'} )
  user: User

  @OneToOne(() => Payment_detail, {nullable: true})
  @JoinColumn( {name: 'payment_id'} )
  payment: Payment_detail
  
  @Column()
  total: number

}