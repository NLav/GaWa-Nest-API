import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Game } from '../games/games.entity';

@Entity()
export class Subcategory {
  @PrimaryGeneratedColumn({ name: 'primary_id' })
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column()
  description: string;

  // @ManyToMany((type) => Game, (subcategory) => Subcategory)
  // subcategory: Subcategory;
}
