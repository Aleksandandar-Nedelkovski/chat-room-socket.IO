import mongoose from "mongoose";

export type Model = mongoose.Model<mongoose.Document>

export const SecuredDatabase = {
  connection: 'mongodb://localhost:27017/websockets.io'
};