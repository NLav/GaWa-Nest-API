import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Game {
    @PrimaryGeneratedColumn('primary_id')
    id: number;

    @Column({length: 500})
    name: string;

    @Column()
    description: string;

    @Column()
    year: number;

    @Column()
    publisher: string;
    
    @Column()
    developer: string;

}