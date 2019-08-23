import { Transaction, TransactionLock } from 'sequelize';

export namespace ICommon {

    export class FuncOption {
        transaction?: Transaction;
        operatorId?: string;
        lock?: TransactionLock;
    }

}