import { Injectable } from '@nestjs/common';
import { UserDao } from './user.dao';
import { ICommon } from '../../interface/common.interface';

@Injectable()
export class UserService {
    constructor(
        private readonly userDao: UserDao,
    ) { }

    public async findOneByAccount(
        account: string,
        option: ICommon.FuncOption,
    ) {
        return this.userDao.findOne({
            where: { account },
            transaction: option.transaction,
        });
    }

}
