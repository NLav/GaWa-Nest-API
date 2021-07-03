import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './modules/games/games.module';
import { SubcategoryModule } from './modules/subcategories/subcategories.module';
import { CategoryModule } from './modules/categories/categories.module';
import { PlatformModule } from './modules/platforms/platforms.module';

@Module({
  imports: [GameModule, SubcategoryModule, CategoryModule, PlatformModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
