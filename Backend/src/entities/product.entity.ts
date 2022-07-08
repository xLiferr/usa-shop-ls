import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { File } from "./file.entity";
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

  @Column( { nullable:true } )
  gender: string

  @JoinColumn({ name: 'img_id' })
  @OneToOne(() => File,{ nullable: true })
  file?: File;
 
  @Column({ nullable: true })
  avatar_id?: number;
}