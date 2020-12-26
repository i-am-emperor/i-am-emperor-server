import { Inject, Injectable } from '@nestjs/common';
import { Connection } from 'mongoose';
import { DATABASE_CONN } from '../constant/provider.const';
import { User, UserDocument, UserSchema } from '../schema/user.schema';
import { BaseDao } from './base.dao';

@Injectable()
export class UserDao extends BaseDao<User, UserDocument> {
  constructor(@Inject(DATABASE_CONN) private conn: Connection) {
    super();
    this.model = conn.model<UserDocument>('User', UserSchema);
  }
}
