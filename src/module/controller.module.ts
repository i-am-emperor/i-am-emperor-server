import { Module } from '@nestjs/common';
import { AuthController } from '../controller/auth.controller';
import { TaskController } from '../controller/task.controller';
import { ServiceModule } from './service.module';

@Module({
  imports: [ServiceModule],
  controllers: [AuthController, TaskController],
})
export class ControllerModule {}
