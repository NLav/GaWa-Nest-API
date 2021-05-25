import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { CategoryModule } from '../categories/categories.module';
import { SubcategoryController } from './subcategories.controllers';
import { SubcategoryProviders } from './subcategories.providers';
import { SubcategoryService } from './subcategories.service';

@Module({
  controllers: [SubcategoryController],
  imports: [DatabaseModule, CategoryModule],
  providers: [...SubcategoryProviders, SubcategoryService],
  exports: [SubcategoryService, SubcategoryModule],
})
export class SubcategoryModule {}
