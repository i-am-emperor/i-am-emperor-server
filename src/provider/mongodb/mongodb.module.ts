import { Module } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { DATABASE_CONN } from 'src/constant/provider.const';

export const databaseProviders = [
  {
    provide: DATABASE_CONN,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost/iamemperor', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        autoIndex: true,
      }),
  },
];

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
