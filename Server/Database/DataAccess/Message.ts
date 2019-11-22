import mongoose, { Schema } from "mongoose";
import { DataAccessBase } from "./DataAccessBase";

export interface IMessageSchema extends mongoose.Document {
  room: string;
  messageText: string;
  receiver: Date;
}

export const MessageSchema = new Schema({
  room: String,
  messageText: String,
  receiver: Date
});

export const MessageModel = mongoose.model<IMessageSchema>('message', MessageSchema, "messages", false);

export class MessageDataAccess extends DataAccessBase<IMessageSchema> {
  constructor() {
    super(MessageModel);
  }
}