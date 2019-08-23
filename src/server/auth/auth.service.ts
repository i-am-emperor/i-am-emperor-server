import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { ICommon } from '../../interface/common.interface';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) { }

    async validUser(
        account: string,
        password: string,
        option: ICommon.FuncOption,
    ): Promise<false | { userId: string, personId: string }> {
        const user = await this.userService.findOneByAccount(account, option);
        if (user && user.password === password) {
            return { userId: user.id, personId: user.personId };
        }
        return false;
    }

    async login(
        account: string,
        password: string,
        option: ICommon.FuncOption,
    ) {
        const payload = await this.validUser(account, password, option);
        if (payload === false) throw new UnauthorizedException('登录失败');
        return {
            token: `Bearer ${this.jwtService.sign(payload)}`,
        };
    }
}
