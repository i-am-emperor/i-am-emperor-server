import * as mongoose from 'mongoose';

export const EmperorSchema = new mongoose.Schema(
  {
    _id: { type: String, length: 32, required: true },
    shortId: { type: String, length: 10, required: true },
    userId: { type: String, length: 32, required: true },
    name: { type: String, length: 5, required: true },
  },
  {
    timestamps: true,
    _id: false,
  },
);

export class Emperor {
  _id?: any;
  readonly userId: string;
  readonly shortId: string;
  readonly name: string;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}

export interface EmperorDocument extends mongoose.Document, Emperor {}

EmperorSchema.index({ userId: 1 }, { unique: true, background: true });
EmperorSchema.index({ shortId: 1 }, { unique: true, background: true });
