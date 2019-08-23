import { ApiModelProperty } from '@nestjs/swagger';

export class AuthLoginBodyDto {
    @ApiModelProperty()
    readonly account: string;
    @ApiModelProperty()
    readonly password: string;
}