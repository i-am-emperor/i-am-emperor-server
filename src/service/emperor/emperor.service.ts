import { Injectable, NotFoundException } from '@nestjs/common';
import { EmperorDao } from '../../dao/emperor.dao';
import { EmperorCreateDto } from '../../dto/emperor.dto';
import { Emperor } from '../../schema/emperor.schema';
import { makeId, makeShortId } from '../../util/util';
import { TaskService } from '../task/task.service';

@Injectable()
export class EmperorService {
  constructor(
    private readonly emperorDao: EmperorDao,
    private readonly taskService: TaskService,
  ) {}

  async findByUserId(userId: string): Promise<Emperor | null> {
    return this.emperorDao.find({ userId });
  }

  async findByUserIdOrThrow(userId: string): Promise<Emperor> {
    const emperor = await this.findByUserId(userId);
    if (emperor == null) throw new NotFoundException();
    return emperor;
  }

  async create(dto: EmperorCreateDto, userId: string): Promise<Emperor> {
    // TODO: 事务
    const emperor = await this.emperorDao.create(
      Object.assign(dto, {
        userId,
        shortId: makeShortId(),
        _id: makeId(),
      }),
    );
    await this.taskService.bulkCreateRandom(emperor._id, 5);
    return emperor;
  }
}
