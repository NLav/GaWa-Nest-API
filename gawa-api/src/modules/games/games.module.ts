import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { GameController } from './games.controllers';
import { GameProviders } from './games.providers';
import { GameService } from './games.service';
import { SubcategoryModule } from '../subcategories/subcategories.module';
import { PlatformModule } from '../platforms/platforms.module';

@Module({
  controllers: [GameController],
  imports: [DatabaseModule, SubcategoryModule, PlatformModule],
  providers: [...GameProviders, GameService],
  exports: [GameService, GameModule],
})
export class GameModule {}
