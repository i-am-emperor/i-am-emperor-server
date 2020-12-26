import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema(
  {
    _id: { type: String, length: 32, required: true },
    emperorId: { type: String, required: true },
    startAt: { type: Date, required: true },
    done: { type: Boolean, required: true },
    result: { type: String, length: 10, required: false },
  },
  {
    timestamps: true,
    _id: false,
  },
);

export class Task {
  _id?: any;
  readonly emperorId: string;
  readonly startAt: Date;
  readonly done: boolean;
  readonly result?: string | null;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}

export interface TaskDocument extends mongoose.Document, Task {}

TaskSchema.index(
  { emperorId: 1, startAt: -1, done: 1 },
  { unique: false, background: true },
);
