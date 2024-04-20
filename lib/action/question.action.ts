"use server";
import Question from "@/database/question.model";
import { connectToDatabse } from "./moongooser";
import Tag from "@/database/tag.model";
import User from "@/database/user.model";
import { GetQuestionsParams, createQuestionParams } from "./shared.types";
import { revalidatePath } from "next/cache";

export async function getQuestions(param: GetQuestionsParams) {
  try {
    connectToDatabse();
    const question = await Question.find({})
      .populate({ path: "tags", model: Tag })
      .populate({ path: "author", model: User });

    return { question };
  } catch (error) {
    console.log(error);
  }
}

export async function createQuestion(params: createQuestionParams) {
  try {
    connectToDatabse();
    const { title, content, tags, author } = params;
    const question = await Question.create({
      title,
      content,
      author,
    });
    const tagDocuments = [];
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { question: question._id } },
        { upsert: true, new: true }
      );
      tagDocuments.push(existingTag._id);
    }
    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocuments } },
    });

    // revalidatePath(path);
  } catch (error) {}
}
