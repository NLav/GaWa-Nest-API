import { Connection } from 'typeorm';
import { Subcategory } from './subcategories.entity';

export const SubcategoryProviders = [
  {
    provide: 'SUBCATEGORY_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(Subcategory),
    inject: ['DATABASE_CONNECTION'],
  },
];
