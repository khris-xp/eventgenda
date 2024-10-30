import { BaseResponseType } from "@/common/responses/response.type";

export type RewardType = {
  _id: string;
  name: string;
  description: string;
  content: string;
  category: string;
  price: number;
  image: string;
  createdAt: string;
  updatedAt: string;
};

export type RewardResponseType = BaseResponseType & {
  data: RewardType;
};

export type RewardsResponseType = BaseResponseType & {
  data: RewardType[];
};
