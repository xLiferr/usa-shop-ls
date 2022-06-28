import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import { Shopping_session } from "./shopping_session.entity";


@Entity()
export class Cart_item {
  @PrimaryGeneratedColumn()
  id:number

  @OneToOne(() => Shopping_session)
  @JoinColumn()
  session: Shopping_session

  @OneToOne(() => Product)
  @JoinColumn()
  product: Product

  @Column()
  quantity: number
}