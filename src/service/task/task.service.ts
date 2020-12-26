import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { TaskDao } from '../../dao/task.dao';
import { Task } from '../../schema/task.schema';
import { makeId } from '../../util/util';
import * as moment from 'moment';
import * as _ from 'lodash';

@Injectable()
export class TaskService {
  constructor(private readonly taskDao: TaskDao) {}

  private async bulkCreate(
    emperorId: string,
    dtos: {
      startAt: Date;
    }[],
  ) {
    await this.taskDao.bulkCreate(
      dtos.map((dto) => ({
        _id: makeId(),
        emperorId,
        startAt: dto.startAt,
        done: false,
        result: null,
      })),
    );
  }

  public async bulkCreateRandom(emperorId: string, count: number) {
    const dtos: {
      startAt: Date;
    }[] = [];
    for (let i = 1; i <= count; i++) {
      const iUnix = _.random(moment().unix(), moment().unix() + 3 * 24);
      dtos.push({ startAt: new Date(iUnix * 1000) });
    }
    return this.bulkCreate(emperorId, dtos);
  }

  async next(emperorId: string): Promise<Task | null> {
    const task = await this.taskDao.find(
      {
        emperorId,
        startAt: { $lte: new Date() },
        done: false,
      },
      {
        sort: { startAt: 1 },
      },
    );
    if (task == null) return null;
    return task;
  }

  async pass(id: string, emperorId: string): Promise<void> {
    const res = await this.taskDao.update(
      { _id: id, done: false },
      {
        result: 'pass',
        done: true,
      },
    );
    if (!res) throw new InternalServerErrorException();
    await this.bulkCreateRandom(emperorId, 2);
  }

  async reject(id: string, emperorId: string): Promise<void> {
    const res = await this.taskDao.update(
      { _id: id, done: false },
      {
        result: 'reject',
        done: true,
      },
    );
    if (!res) throw new InternalServerErrorException();
    await this.bulkCreateRandom(emperorId, 2);
  }
}
