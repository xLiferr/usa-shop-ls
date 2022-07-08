import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";


@Entity()
export class Order_detail{

  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => User)
  @JoinColumn( {name: 'user_id'} )
  user: User
  
  @Column()
  total: number

  @Column()
  date: Date

  @Column()
  flow_order: string

  @Column( { nullable: true} )
  status: number

}