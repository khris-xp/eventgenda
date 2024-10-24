import { BaseResponseType } from "@/common/responses/response.type";

export type CategoryType = {
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type CategoryResponseType = BaseResponseType & {
  data: CategoryType;
};

export type CategoriesResponseType = BaseResponseType & {
  data: CategoryType[];
};
