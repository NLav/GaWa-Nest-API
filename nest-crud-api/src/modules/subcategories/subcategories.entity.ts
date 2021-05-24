import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { Category } from '../categories/categories.entity';
import { Game } from '../games/games.entity';

@Entity()
export class Subcategory {
  @PrimaryGeneratedColumn({ name: 'primary_id' })
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column()
  description: string;

  @ManyToOne((type) => Category, (subcategory) => Subcategory)
  category: Category;

  @ManyToMany((type) => Game, (subcategory) => Subcategory)
  game: Game;
}
