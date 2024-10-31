import { EventType } from "./event.type";
import { UserProfileType } from "./user.type";

export type HistoryType = {
  _id: string;
  event: EventType;
  user: UserProfileType;
  createdDate: string;
  updatedDate: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
