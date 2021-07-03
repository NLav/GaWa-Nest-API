import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Platform } from './platforms.entity';
import { GameService } from '../games/games.service';

@Injectable()
export class PlatformService {
  constructor(
    @Inject('PLATFORM_REPOSITORY')
    private platformRepository: Repository<Platform>,
  ) {}

  async findAll(): Promise<Platform[]> {
    return this.platformRepository.find({
      // relations: ['game', 'game.subcategory', 'subcategory.category'],
      relations: ['game'],
    });
  }

  async findById(id: number): Promise<Platform> {
    return this.platformRepository.findOne(id, {
      relations: ['game', 'game.subcategory', 'subcategory.category'],
    });
  }

  async createPlatform(data: any): Promise<Platform> {
    const create = this.platformRepository.create({
      name: data.name,
      description: data.description,
    });
    return this.platformRepository.save(create);
  }

  async updatePlatform(id: number, data: any): Promise<Platform> {
    const platform = await this.findById(id);
    if (!platform) throw new Error('Ta na disney?');

    platform.name = data.name;
    platform.description = data.description;

    return this.platformRepository.save(platform);
  }
}
