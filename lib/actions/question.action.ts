"use server";

import Question from "@/database/question.model";
import { connectToDatabase } from "../mongoose";
import Tag from "@/database/tag.model";
import User from "@/database/user.model";
import { revalidatePath } from "next/cache";

export async function getQuestions(params: any) {

  try {
    connectToDatabase();
    const questions = await Question.find({})
      .populate({
        path: "tags",
        model: Tag,
      })
      .populate({
        path: "authors",
        model: User,
      });

    return { questions };
  } catch (error) {
    console.log("error: ", error);
  }
}

export async function createQuestion(params: any) {
  try {
    connectToDatabase();

    const { title, content, tags, authors, author, path } = params;
    console.log("params: ", params);
    const question = await Question.create({
      title,
      content,
      authors: authors ?? author,
    });
    const tagDocuments = [];

    //Create the tag or find the if they exist
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        {
          name: {
            $regex: new RegExp(`^${tag}$`, "i"),
          },
        },
        {
          $setOnInsert: {
            name: tag,
          },
          $push: {
            question: question._id,
          },
        },
        { upsert: true, new: true }
      );

      tagDocuments.push(existingTag._id);
    }

    await Question.findByIdAndUpdate(question._id, {
      $push: {
        tags: {
          $each: tagDocuments,
        },
      },
    });

    revalidatePath(path);
  } catch (error) {}
}
