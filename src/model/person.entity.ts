import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
    underscored: true,
    modelName: 'person',
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
