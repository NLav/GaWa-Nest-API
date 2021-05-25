import { CategoryService } from '../categories/categories.service';
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Subcategory } from './subcategories.entity';

@Injectable()
export class SubcategoryService {
  constructor(
    @Inject('SUBCATEGORY_REPOSITORY')
    private subcategoryRepository: Repository<Subcategory>,
    private categoryService: CategoryService,
  ) {}

  async findAll(): Promise<Subcategory[]> {
    return this.subcategoryRepository.find({
      relations: ['category'],
    });
  }

  async findById(id: number): Promise<Subcategory> {
    return this.subcategoryRepository.findOne(id);
  }

  async createSubcategory(data: any): Promise<Subcategory> {
    const create = this.subcategoryRepository.create({
      name: data.name,
      description: data.description,
      category: data.category,
    });
    return this.subcategoryRepository.save(create);
  }

  async updateSubcategory(id: number, data: any): Promise<Subcategory> {
    const subcategory = await this.findById(id);
    if (!subcategory) throw new Error('Ta na disney?');
    subcategory.name = data.name;
    subcategory.description = data.description;

    return this.subcategoryRepository.save(subcategory);
  }
}
