import { ApiModelProperty } from '@nestjs/swagger';

export class UserCreateDto {
    @ApiModelProperty()
    readonly account: string;
    @ApiModelProperty()
    readonly password: string;
    @ApiModelProperty()
    readonly personId: string;
}