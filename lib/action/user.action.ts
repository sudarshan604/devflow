"use server";

import User from "@/database/user.model";
import { connectToDatabse } from "./moongooser";
import {
  CreateUserParams,
  DeleteUserParam,
  UpdateUserParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";
// import path from "path";
import Question from "@/database/question.model";

export async function getUserById(params: any) {
  try {
    connectToDatabse();
    const { userId } = params;
    console.log("user id-", userId);
    const user = await User.findOne({ clerkId: userId });

    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function createUser(userData: CreateUserParams) {
  try {
    connectToDatabse();
    const newUser = await User.create(userData);

    return newUser;
  } catch (error) {
    console.log(error);
  }
}

export async function updateUser(params: UpdateUserParams) {
  try {
    connectToDatabse();
    const { clerkId, updateData, path } = params;

    await User.findOneAndUpdate({ clerkId }, updateData, {
      new: true,
    });
    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUser(params: DeleteUserParam) {
  try {
    connectToDatabse();
    const { clerkId } = params;

    const user = await User.findOneAndDelete({ clerkId });
    if (!user) {
      throw new Error("User nor found");
    }

    // const userQuestionIs = await Question.find({ author: user._id }).distinct(
    //   "_id"
    // );
    await Question.deleteMany({ author: user._id });
    const deletedUser = await User.findByIdAndDelete(user._id);
    return deletedUser;
  } catch (error) {
    console.log(error);
  }
}
