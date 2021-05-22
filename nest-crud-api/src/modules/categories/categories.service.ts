import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from './categories.entity';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private categoryRepository: Repository<Category>,
  ){}

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async findById(id: number): Promise<Category> {
    return this.categoryRepository.findOne(id);
  }

  async createCategory(data:any): Promise<Category> {
    const create = this.categoryRepository.create({
      name: data.name,
      description: data.description,
    });
    return this.categoryRepository.save(create);
  }

  async updateCategory(id: number, data: any): Promise<Category> {
    const category = await this.findById(id);
    if (!category) throw new Error('Ta na disney?');
    category.name = data.name;
    category.description = data.description;

    return this.categoryRepository.save(category);
  }
}
