import { Module } from '@nestjs/common';
import { EmperorDao } from '../dao/emperor.dao';
import { TaskDao } from '../dao/task.dao';
import { UserDao } from '../dao/user.dao';
import { DatabaseModule } from '../provider/mongodb/mongodb.module';

const providers = [UserDao, TaskDao, EmperorDao];

@Module({
  imports: [DatabaseModule],
  providers,
  exports: providers,
})
export class DaoModule {}
