import { UserEntityDefine } from './user.entity';

import { Sequelize } from 'sequelize';
export function loadEntities(sequelize: Sequelize) {
    UserEntityDefine(sequelize);
}