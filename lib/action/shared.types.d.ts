import { IUser } from "@/database/user.model";
import { Schema } from "mongoose";
export interface GetQuestionsParams {
  page?: number;
  pageSize?: number;
  searchQuery?: string;
  filter?: string;
}

export interface createQuestionParams {
  title: string;
  content: string;
  tags: string[];
  author: Schema.Types.objectId | IUser;
  path: string;
}
