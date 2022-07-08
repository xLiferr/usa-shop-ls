import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';
 
@Entity()
export class File {
  @PrimaryGeneratedColumn()
  id: number
  
  @Column( {unique: true} )
  filename: string
 
  @Column({
    type: 'bytea',
  })
  data: Uint8Array

}

 