"use server";

import { connectToDatabse } from "./moongooser";

export async function createQuestion(params: type) {
  try {
    connectToDatabse();
  } catch (error) {}
}
