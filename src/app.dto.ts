import { ApiModelProperty } from '@nestjs/swagger';

export class AuthSignInBodyDto {
    @ApiModelProperty()
    readonly account: string;
    @ApiModelProperty()
    readonly password: string;
}

export class AuthSignUpBodyDto {
    @ApiModelProperty()
    readonly account: string;
    @ApiModelProperty()
    readonly password: string;
}