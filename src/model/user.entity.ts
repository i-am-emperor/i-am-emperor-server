import { Table, Column, Model, DataType } from 'sequelize-typescript';

export interface IUser {
    readonly id: string;
    readonly account: string;
    readonly password: string;
    readonly personId: string;
}

@Table({
    underscored: true,
    modelName: 'user',
    createdAt: true,
    updatedAt: true,
})
export class User extends Model<User> {

    @Column({
        type: DataType.STRING,
        primaryKey: true,
    })
    readonly id: string;

    @Column({
        type: DataType.STRING,
    })
    readonly account: string;

    @Column({
        type: DataType.STRING,
    })
    readonly password: string;

    @Column({
        type: DataType.STRING,
        field: 'person_id',
    })
    readonly personId: string;

}
