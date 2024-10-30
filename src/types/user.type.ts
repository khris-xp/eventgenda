import { BaseResponseType } from "@/common/responses/response.type";
import { HistoryType } from "./history.type";
import { OrganizationType } from "./organization.type";

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
  reward: number;
  role: string;
  profileImage: string;
  history: HistoryType[];
  organization?: OrganizationType;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
