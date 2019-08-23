import { Controller, Get, UseGuards, Query, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './server/auth/auth.service';
import { Operator, IOperator } from './decorator/operator.decorator';
import { AuthLoginBodyDto } from './app.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller()
export class AppController {
    constructor(
        private readonly authService: AuthService,
    ) { }

    @UseGuards(AuthGuard('jwt'))
    @Get('auth/user')
    getAuthUser(
        @Operator() operator: IOperator,
    ): IOperator {
        return operator;
    }

    @Post('auth/login')
    public async postAuthLogin(
        @Body() body: AuthLoginBodyDto,
    ): Promise<{ token: string }> {
        return this.authService.login(body.account, body.password, {});
    }
}
