import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Game } from './games.entity';
import { SubcategoryService } from '../subcategories/subcategories.service';
import { PlatformService } from '../platforms/platforms.service';

@Injectable()
export class GameService {
  constructor(
    @Inject('GAME_REPOSITORY')
    private gameRepository: Repository<Game>,
    private subcategoryService: SubcategoryService,
    private platformService: PlatformService,
  ) {}

  async findAll(): Promise<Game[]> {
    return this.gameRepository.find({
      relations: ['subcategory', 'subcategory.category', 'platform'],
    });
  }

  async findById(id: number): Promise<Game> {
    return this.gameRepository.findOne(id, {
      relations: ['subcategory', 'subcategory.category', 'platform'],
    });
  }

  async createGame(data: any): Promise<Game> {
    const allSubcategories = await this.subcategoryService.findAll();
    const subcategory = data.subcategory.map((id, i) => {
      return allSubcategories.find((n) => n.id == id);
    });

    const allPlatforms = await this.platformService.findAll();
    const platform = data.platform.map((id, i) => {
      return allPlatforms.find((n) => n.id == id);
    });

    const create = this.gameRepository.create({
      name: data.name,
      description: data.description,
      year: data.year,
      publisher: data.publisher,
      developer: data.developer,
      status: data.status,
      subcategory: subcategory,
      platform: platform,
    });
    return this.gameRepository.save(create);
  }

  async updateGame(id: number, data: any): Promise<Game> {
    const game = await this.findById(id);
    if (!game) throw new Error('Ta na disney?');

    const allSubcategories = await this.subcategoryService.findAll();
    const subcategory = data.subcategory.map((id, i) => {
      return allSubcategories.find((n) => n.id == id);
    });

    const allPlatforms = await this.platformService.findAll();
    const platform = data.platform.map((id, i) => {
      return allPlatforms.find((n) => n.id == id);
    });

    game.name = data.name;
    game.description = data.description;
    game.year = data.year;
    game.publisher = data.publisher;
    game.developer = data.developer;
    game.status = data.status;
    game.subcategory = subcategory;
    game.platform = platform;

    return this.gameRepository.save(game);
  }
}
