import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Platform } from '../platforms/platforms.entity';
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

  @ManyToMany(() => Subcategory)
  @JoinTable()
  subcategory: Subcategory[];

  @ManyToMany(() => Platform, ({ game }) => game)
  @JoinTable()
  platform: Platform[];
}
