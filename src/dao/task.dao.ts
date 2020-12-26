import { Inject, Injectable } from '@nestjs/common';
import { Connection } from 'mongoose';
import { DATABASE_CONN } from '../constant/provider.const';
import { Task, TaskDocument, TaskSchema } from '../schema/task.schema';
import { BaseDao } from './base.dao';

@Injectable()
export class TaskDao extends BaseDao<Task, TaskDocument> {
  constructor(@Inject(DATABASE_CONN) private conn: Connection) {
    super();
    this.model = conn.model<TaskDocument>('Task', TaskSchema);
  }
}
