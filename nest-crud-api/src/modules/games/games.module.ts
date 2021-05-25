import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { GameController } from './games.controllers';
import { GameProviders } from './games.providers';
import { GameService } from './games.service';
import { SubcategoryModule } from '../subcategories/subcategories.module';

@Module({
  controllers: [GameController],
  imports: [DatabaseModule, SubcategoryModule],
  providers: [...GameProviders, GameService],
  exports: [GameService, GameModule],
})
export class GameModule {}
