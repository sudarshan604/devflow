"use server";

import User from "@/database/user.model";
import { connectToDatabse } from "./moongooser";

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
