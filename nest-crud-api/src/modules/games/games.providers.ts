import { Connection, Repository } from 'typeorm';
import { Game } from './games.entity';

export const GameProviders = [
  {
    provide: 'GAME_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Game),
    inject: ['DATABASE_CONNECTION'],
  },
];
