import { Sequelize, Model } from 'sequelize-typescript';
import * as Models from '../../model';

export const PROVIDER_DATABASE = Symbol('SEQUELIZE');
const models: Array<typeof Model> = [];
for (const modelKey in Models) {
    models.push(Models[modelKey]);
}

export const providers = [
    {
        provide: PROVIDER_DATABASE,
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                logging: console.log,
                username: 'zhouyu',
                password: '19931124',
                database: 'i-am-emperor',
            });
            sequelize.addModels(models);
            await sequelize.sync();
            return sequelize;
        },
    },
];
