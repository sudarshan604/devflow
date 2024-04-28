"use server";

import User from "@/database/user.model";
import { connectToDatabse } from "./moongooser";
import { GetTopInteractedTagsParams } from "./shared.types";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDatabse();
    const { userId, limit = 3 } = params;

    const user = await User.findById(userId);

    if (!user) throw new Error("User not found");

    return [
      { _id: "1", name: "tag" },
      { _id: "1", name: "tag" },
    ];
  } catch (error) {
    console.log(error);
    throw error;
  }
}
