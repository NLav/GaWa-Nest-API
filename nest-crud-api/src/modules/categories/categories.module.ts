import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { CategoryController } from './categories.controllers';
import { CategoryProviders } from './categories.providers';
import { CategoryService } from './categories.service';

@Module({
  controllers: [CategoryController],
  imports: [DatabaseModule],
  providers: [...CategoryProviders, CategoryService],
  exports: [CategoryService],
})
export class CategoryModule {}
