import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class User_payment {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(() => User)
  @JoinColumn( {name: 'user_id'} )
  user: User

  @Column()
  payment_type: string

  @Column()
  provider: string

  @Column()
  account_no: number

  @Column()
  expiry: Date
}