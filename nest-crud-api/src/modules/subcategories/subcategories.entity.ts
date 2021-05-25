import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../categories/categories.entity';

@Entity()
export class Subcategory {
  @PrimaryGeneratedColumn({ name: 'primary_id' })
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Category, (subcategory) => Subcategory, { nullable: false })
  categoryId: Category;
}
