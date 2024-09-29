import { Schema, Document, models, model } from "mongoose";

// Define the ITag interface
export interface ITag extends Document {
  name: string;
  description: string;
  questions: Schema.Types.ObjectId[];
  follower: Schema.Types.ObjectId[];
  createdOn: Date;
}

// Define the Mongoose schema for the Tag
const TagSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  questions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
  follower: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

const Tag = models.Tag || model("Tag", TagSchema);

export default Tag;
