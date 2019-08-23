import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './server/user/user.module';
import { AuthModule } from './server/auth/auth.module';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [AppController],
})
export class AppModule { }
