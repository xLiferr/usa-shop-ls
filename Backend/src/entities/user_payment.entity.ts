import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class User_payment {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => User)
  @JoinColumn( {name: 'user_id'} )
  user: User

  @Column()
  payment_type: string

  @Column()
  provider: string

  @Column()
  account_no: string

  @Column()
  expiry: Date
}