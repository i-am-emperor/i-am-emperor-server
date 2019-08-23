import { Injectable, Inject } from '@nestjs/common';
import { PROVIDER_DATABASE } from '../provider/database/database.provider';
import { Sequelize, Model } from 'sequelize-typescript';
import { FindOptions } from 'sequelize';

@Injectable()
export abstract class BaseDao<TInstance extends Model<TInstance>, TAttributes> {

    protected abstract readonly entityName: string;

    constructor(
        @Inject(PROVIDER_DATABASE) private readonly sequelize: Sequelize,
    ) { }

    public async findOne(
        options: FindOptions<TAttributes>,
    ) {
        const instance = await this.sequelize.model<TInstance, TAttributes>(this.entityName).findOne(options);
        if (!instance) return null;
        return instance.get({ plain: true }) as TAttributes;
    }

}
