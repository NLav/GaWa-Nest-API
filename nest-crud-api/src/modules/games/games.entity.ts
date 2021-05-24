import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToMany,
} from 'typeorm';
import { Subcategory } from '../subcategories/subcategories.entity';

@Entity()
export class Game {
  @PrimaryGeneratedColumn({ name: 'primary_id' })
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column()
  description: string;

  @Column()
  year: number;

  @Column()
  publisher: string;

  @Column()
  developer: string;

  @Column()
  status: boolean;

  @ManyToMany((type) => Subcategory, (game) => Game)
  @JoinColumn()
  subcategory: Subcategory;
}
