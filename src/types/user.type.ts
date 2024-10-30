import { BaseResponseType } from "@/common/responses/response.type";
import { HistoryType } from "./history.type";
import { OrganizationType } from "./organization.type";
import { RewardType } from "./reward.type";

export type AuthResponseType = BaseResponseType & {
  data: UserProfileType;
};

export type LoginResponseType = BaseResponseType & {
  data: {
    accessToken: string;
  };
};

export type UserProfileType = {
  _id: string;
  email: string;
  fullName: string;
  userName: string;
  age: number;
  coin: number;
  role: string;
  profileImage: string;
  history: HistoryType[];
  redeemedRewards: RewardType[];
  organization?: OrganizationType;
  createdAt: string;
  updatedAt: string;
  rewardPoints: number;
  __v: number;
};
