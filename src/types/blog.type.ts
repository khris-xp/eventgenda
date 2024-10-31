import { BaseResponseType } from "@/common/responses/response.type";
import { UserProfileType } from "./user.type";

export type BlogType = {
  _id: string;
  title: string;
  description: string;
  content: string;
  author: UserProfileType;
  image: string;
  createdAt: string;
  updatedAt: string;
};

export type BlogResponseType = BaseResponseType & {
  data: BlogType;
};

export type BlogsResponseType = BaseResponseType & {
  data: BlogType[];
};
