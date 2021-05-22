import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn({name:'primary_id'})
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
}
