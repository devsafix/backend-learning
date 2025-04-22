import { Timestamp } from 'bson';
import mongoose from 'mongoose';

const userschema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'password is required'],
      unique: true,
    },
  },
  {
    Timestamp: true,
  }
);

export const User = mongoose.model('User', userschema);
