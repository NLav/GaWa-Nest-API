import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Game } from './games.entity';

@Injectable()
export class GameService {
  constructor(
    @Inject('GAME_REPOSITORY')
    private gameRepository: Repository<Game>,
  ) {}

  async findAll(): Promise<Game[]> {
    return this.gameRepository.find();
  }

  async findById(id: number): Promise<Game> {
    return this.gameRepository.findOne(id);
  }

  async createGame(data: any): Promise<Game> {
    const create = this.gameRepository.create({
      name: data.name,
      description: data.description,
      year: data.year,
      publisher: data.publisher,
      developer: data.developer,
    });
    return this.gameRepository.save(create);
  }

  async updateGame(id: number, data: any): Promise<Game> {
    const game = await this.findById(id);
    if (!game) throw new Error('Ta na disney?');
    game.name = data.name;
    game.description = data.description;
    game.year = data.year;
    game.publisher = data.publisher;
    game.developer = data.developer;

    return this.gameRepository.save(game);
  }
}
