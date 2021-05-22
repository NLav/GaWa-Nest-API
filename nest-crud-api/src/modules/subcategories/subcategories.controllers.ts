import { Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Subcategory } from './subcategories.entity';
import { SubcategoryService } from './subcategories.service';
import { Request } from 'express';

@Controller('subcategory')
export class SubcategoryController {
  constructor(private readonly subcategoryService: SubcategoryService) {}

  @Get()
  async findAll(): Promise<Subcategory[]> {
    return this.subcategoryService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Subcategory> {
    return this.subcategoryService.findById(id);
  }

  @Post('')
  async createSubcategory(@Req() request: Request): Promise<Subcategory> {
    return this.subcategoryService.createSubcategory(request.body);
  }

  @Patch(':id')
  async updateSubcategory(
    @Req() request: Request,
    @Param('id') id: number,
  ): Promise<Subcategory> {
    return this.subcategoryService.updateSubcategory(id, request.body);
  }
}
