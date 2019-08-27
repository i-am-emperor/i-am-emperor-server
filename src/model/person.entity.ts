import { Table, Column, Model, DataType } from 'sequelize-typescript';

export interface IPerson {
    readonly id: string;
    readonly name: string;
}

@Table({
    underscored: true,
    modelName: 'person',
    createdAt: true,
    updatedAt: true,
})
export class Person extends Model<Person> {

    @Column({
        type: DataType.STRING,
        primaryKey: true,
    })
    readonly id: string;

    @Column({
        type: DataType.STRING,
    })
    readonly name: string;

}
