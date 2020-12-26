import { Inject, Injectable } from '@nestjs/common';
import { Connection } from 'mongoose';
import { DATABASE_CONN } from '../constant/provider.const';
import {
  Emperor,
  EmperorDocument,
  EmperorSchema,
} from '../schema/emperor.schema';
import { BaseDao } from './base.dao';

@Injectable()
export class EmperorDao extends BaseDao<Emperor, EmperorDocument> {
  constructor(@Inject(DATABASE_CONN) private conn: Connection) {
    super();
    this.model = conn.model<EmperorDocument>('Emperor', EmperorSchema);
  }
}
