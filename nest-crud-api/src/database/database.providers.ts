import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'nestcrud-postgres',
      port: 5432,
      username: 'nestcrud-dev',
      password: 'NARCIO',
      database: 'nestcrud-db',
      logging: true,
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];
