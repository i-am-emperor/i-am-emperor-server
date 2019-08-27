import { Injectable } from '@nestjs/common';
import { UserDao } from './user.dao';
import { ICommon } from '../../interface/common.interface';
import { IUser } from '../../model';
import { UserCreateDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(
        private readonly userDao: UserDao,
    ) { }

    public async findOneByAccount(
        account: string,
        option: ICommon.FuncOption,
    ): Promise<IUser | null> {
        return this.userDao.findOne({
            where: { account },
            transaction: option.transaction,
        });
    }

    public async create(
        body: UserCreateDto,
        option: ICommon.FuncOption,
    ) {
        return this.userDao.create(
            Object.assign(body, { id: '222' }),
            {
                transaction: option.transaction,
            },
        );
    }

}
