import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constant';
import { UserModule } from '../user/user.module';

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '2d' },
        }),
    ],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule { }