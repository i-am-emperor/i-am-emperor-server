import { createParamDecorator } from '@nestjs/common';

export const Operator = createParamDecorator((data, req) => {
    return req.user;
});

export class IOperator {
    readonly userId: string;
    readonly personId: string;
}