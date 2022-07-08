import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true})
  username: string
  
  @Column()
  password: string

  @Column()
  name: string

  @Column()
  second_name: string

  @Column()
  telephone: string

  @Column( { nullable:true } )
  type: string

}