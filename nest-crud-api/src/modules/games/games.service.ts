import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Game } from './games.entity';
import { Subcategory } from '../subcategories/subcategories.entity';
import { SubcategoryService } from '../subcategories/subcategories.service';

@Injectable()
export class GameService {
  constructor(
    @Inject('GAME_REPOSITORY')
    private gameRepository: Repository<Game>,
    private subcategoryService: SubcategoryService,
  ) {}

  async findAll(): Promise<Game[]> {
    return this.gameRepository.find({
      relations: ['subcategory', 'subcategory.category'],
    });
  }

  async findById(id: number): Promise<Game> {
    return this.gameRepository.findOne(id);
  }

  async createGame(data: any): Promise<Game> {
    // const subcategory = await this.subcategoryService.findById(
    //   data.subcategory,
    // );
    const AllSubcategory = await this.subcategoryService.findAll();
    const subcategory = data.subcategory.map((id, i) => {
      return AllSubcategory.find((n) => n.id == id);
    });

    const create = this.gameRepository.create({
      name: data.name,
      description: data.description,
      year: data.year,
      publisher: data.publisher,
      developer: data.developer,
      status: data.status,
      subcategory: subcategory,
    });

    console.log('*****', create);

    console.log('****** DATA CATEGORY ' + data.subcategory);
    return this.gameRepository.save(create);
  }

  async createMultipleGame(data: any): Promise<Game> {
    const create = data.map((g) =>
      this.gameRepository.create({
        name: g.name,
        description: g.description,
        year: g.year,
        publisher: g.publisher,
        developer: g.developer,
        status: g.status,
      }),
    );
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
    game.status = data.status;
    game.subcategory = data.subcategory;

    return this.gameRepository.save(game);
  }
}
