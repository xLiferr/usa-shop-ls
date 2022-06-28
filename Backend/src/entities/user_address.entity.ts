import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class User_address {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(() => User)
  @JoinColumn( {name: 'user_id'} )
  user: User

  @Column()
  address: string

  @Column()
  city: string

  @Column()
  postal_code: number

  @Column()
  country: string

  @Column({ nullable: true})
  telephone?: string

  @Column()
  mobile: string

}