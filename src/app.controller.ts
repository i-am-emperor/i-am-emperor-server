import { Controller, Get, UseGuards, Query, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './server/auth/auth.service';
import { Operator, IOperator } from './decorator/operator.decorator';
import { AuthSignInBodyDto, AuthSignUpBodyDto } from './app.dto';
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

    @Post('auth/sign_in')
    public async postAuthSignIn(
        @Body() body: AuthSignInBodyDto,
    ): Promise<{ token: string }> {
        return this.authService.signIn(body.account, body.password, {});
    }

    @Post('auth/sign_up')
    public async postAuthSignUp(
        @Body() body: AuthSignUpBodyDto,
    ): Promise<{ token: string }> {
        return this.authService.signUp(body.account, body.password, {});
    }
}
