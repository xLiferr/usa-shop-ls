import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product_category {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string
}