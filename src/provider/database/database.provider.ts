import { Sequelize } from 'sequelize';
import { loadEntities } from '../../model';

export const providers = [
    {
        provide: 'SEQUELIZE',
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
            loadEntities(sequelize);
            await sequelize.sync({ force: true });
            return sequelize;
        },
    },
];