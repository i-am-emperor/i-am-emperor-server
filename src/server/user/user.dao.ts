import { Injectable } from '@nestjs/common';
import { BaseDao } from '../base.dao';
import { User, IUser } from '../../model';

@Injectable()
export class UserDao extends BaseDao<User, IUser> {
    protected readonly entityName: string = 'user';
}
