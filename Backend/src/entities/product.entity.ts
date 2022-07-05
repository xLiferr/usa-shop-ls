import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product_category } from "./product_category.entity";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true})
  name: string

  @ManyToOne(() => Product_category)
  @JoinColumn( {name:'category_id'} )
  category: Product_category

  @Column()
  stock: number

  @Column()
  price: number
}