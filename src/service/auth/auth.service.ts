import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CONFIG } from '../../config';
import { AuthLoginDto, AuthRegisterDto } from '../../dto/auth.dto';
import { AuthLoginVo } from '../../vo/auth.vo';
import { EmperorService } from '../emperor/emperor.service';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly emperorService: EmperorService,
  ) {}

  async login(authLoginDto: AuthLoginDto): Promise<AuthLoginVo> {
    const user = await this.userService.findByAccount(authLoginDto.account);
    if (user && user.password === authLoginDto.password) {
      const emperor = await this.emperorService.findByUserIdOrThrow(user._id);
      const expiresIn = '5d';
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      return {
        accessToken: this.jwtService.sign(
          {
            sub: user._id,
            emperorId: emperor._id,
          },
          {
            secret: CONFIG.JWT_SECRET,
            expiresIn,
            audience: 'iamemperor',
            issuer: 'iamemperor',
            privateKey: CONFIG.PRIVATE_KEY,
          },
        ),
        expiresIn,
      };
    }
    throw new UnauthorizedException();
  }

  async register(dto: AuthRegisterDto): Promise<void> {
    const user = await this.userService.create({
      account: dto.account,
      password: dto.password,
    });
    await this.emperorService.create(
      {
        name: dto.name,
      },
      user._id,
    );
  }
}
