import { Model, DataTypes, Sequelize } from 'sequelize';

class User extends Model { }
export const UserEntityDefine = (sequelize: Sequelize) => {
    return User.init(
        {
            id: {
                primaryKey: true,
                autoIncrement: false,
                allowNull: false,
                type: DataTypes.STRING,
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: 'user',
            underscored: true,
        },
    );
};
