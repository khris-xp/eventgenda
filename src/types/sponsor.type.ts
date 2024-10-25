import { BaseResponseType } from "@/common/responses/response.type";
import { UserProfileType } from "./user.type";
import { EventType } from "./event.type";

export type SponsorType = {
  _id: string;
  user: UserProfileType;
  event: EventType;
  amount: number;
  type: string;
  createdAt: string;
  updatedAt: string;
};

export type SponsorResponseType = BaseResponseType & {
  data: SponsorType;
};

export type SponsorsResponseType = BaseResponseType & {
  data: SponsorType[];
};
