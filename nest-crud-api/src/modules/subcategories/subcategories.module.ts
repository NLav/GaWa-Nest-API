import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { SubcategoryController } from './subcategories.controllers';
import { SubcategoryProviders } from './subcategories.providers';
import { SubcategoryService } from './subcategories.service';

@Module({
  controllers: [SubcategoryController],
  imports: [DatabaseModule],
  providers: [...SubcategoryProviders, SubcategoryService],
})
export class SubcategoryModule {}
