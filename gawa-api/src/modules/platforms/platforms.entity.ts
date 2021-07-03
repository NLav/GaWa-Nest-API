import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Game } from '../games/games.entity';

@Entity()
export class Platform {
  @PrimaryGeneratedColumn({ name: 'primary_id' })
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToMany(() => Game, ({ platform }) => platform)
  game: Game[];
}
