import { Schema, Document, models, model } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  name: string;
  userName: string;
  email: string;
  picture: string;
  saved: Schema.Types.ObjectId[];
  joinedAt: Date;
  portfolioWebsite?: string;
  location?: string;
  bio?: string;
  reputation?: number;
  password?: string;
}

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  picture: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  password: {
    type: String,
  },
  bio: {
    type: String,
    required: false,
  },
  portfolioWebsite: {
    type: String,
    required: false,
  },
  reputation: {
    type: Number,
    default: 0,
  },
  saved: [
    {
      type: Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
  joinedAt: {
    type: Date,
    default: Date.now,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
