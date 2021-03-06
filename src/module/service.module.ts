import { Module, Provider } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { CONFIG } from '../config';
import { AuthService } from '../service/auth/auth.service';
import { JwtStrategy } from '../service/auth/jwt.strategy';
import { EmperorService } from '../service/emperor/emperor.service';
import { TaskService } from '../service/task/task.service';
import { UserService } from '../service/user/user.service';
import { DaoModule } from './dao.module';

const providers: Provider[] = [
  AuthService,
  UserService,
  TaskService,
  EmperorService,
];
providers.push(JwtStrategy);

@Module({
  imports: [
    DaoModule,
    PassportModule,
    JwtModule.register({
      secret: CONFIG.JWT_SECRET,
    }),
  ],
  providers,
  exports: providers,
})
export class ServiceModule {}
