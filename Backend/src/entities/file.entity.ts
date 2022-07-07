import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
export class File {
  @PrimaryGeneratedColumn()
  id: number
 
  @Column()
  filename: string
 
  @Column({
    type: 'bytea',
  })
  data: Uint8Array
}

 