import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../provider/database/database.module';
import { UserService } from './user.service';
import { UserDao } from './user.dao';

@Module({
    imports: [
        DatabaseModule,
    ],
    providers: [UserService, UserDao],
    exports: [UserService],
})
export class UserModule { }