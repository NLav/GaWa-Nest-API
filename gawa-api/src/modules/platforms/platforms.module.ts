import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PlatformController } from './platforms.controllers';
import { PlatformProviders } from './platforms.providers';
import { PlatformService } from './platforms.service';
import { GameProviders } from '../games/games.providers';

@Module({
  controllers: [PlatformController],
  imports: [DatabaseModule],
  providers: [...PlatformProviders, PlatformService],
  exports: [PlatformService, PlatformModule, ...PlatformProviders],
})
export class PlatformModule {}
