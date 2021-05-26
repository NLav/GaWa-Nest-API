import { Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Category } from './categories.entity';
import { CategoryService } from './categories.service';
import { Request } from 'express';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Category> {
    return this.categoryService.findById(id);
  }

  @Post('')
  async createCategory(@Req() request: Request): Promise<Category> {
    return this.categoryService.createCategory(request.body);
  }

  @Patch(':id')
  async updateCategory(
    @Req() request: Request,
    @Param('id') id: number,
  ): Promise<Category> {
    return this.categoryService.updateCategory(id, request.body);
  }
}
