import { Connection } from 'typeorm';
import { Platform } from './platforms.entity';

export const PlatformProviders = [
  {
    provide: 'PLATFORM_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Platform),
    inject: ['DATABASE_CONNECTION'],
  },
];
