import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AUTH_JWT } from '../constant/strategy.const';
import { User } from '../decorator/user.decorator';
import { Task } from '../schema/task.schema';
import { TaskService } from '../service/task/task.service';
import { AuthUser } from '../vo/auth.vo';

@ApiTags('Task')
@ApiBearerAuth()
@UseGuards(AuthGuard(AUTH_JWT))
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @ApiResponse({ type: Task })
  @Get('next')
  async next(@User() user: AuthUser): Promise<Task | null> {
    return this.taskService.next(user.emperorId);
  }

  @Post(':id/pass')
  async pass(@Param('id') id: string, @User() user: AuthUser): Promise<void> {
    return this.taskService.pass(id, user.emperorId);
  }

  @Post(':id/reject')
  async reject(@Param('id') id: string, @User() user: AuthUser): Promise<void> {
    return this.taskService.reject(id, user.emperorId);
  }
}
