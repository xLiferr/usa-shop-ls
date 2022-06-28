import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";


@Entity()
export class Shopping_session{
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(() => User)
  @JoinColumn( {name:'user_id'} )
  user: User

  @Column()
  total: number
}