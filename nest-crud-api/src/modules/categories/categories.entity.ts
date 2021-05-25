import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Subcategory } from '../subcategories/subcategories.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn({ name: 'primary_id' })
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Subcategory, (category) => Category)
  @JoinColumn()
  subcategory: Subcategory;
}
