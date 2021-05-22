import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { GameController } from './games.controllers';
import { GameProviders } from './games.providers';
import { GameService } from './games.service';

@Module({
  controllers: [GameController],
  imports: [DatabaseModule],
  providers: [...GameProviders, GameService],
})
export class GameModule {}
