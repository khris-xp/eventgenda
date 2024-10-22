import { BaseResponseType } from "@/common/responses/response.type";
import { UserProfileType } from "./user.type";

export type UserType = {
  name: string;
  email: string;
  role: string;
};

export type CategoryType = {
  name: string;
  description: string;
};

export type SponsorType = {
  name: string;
  logo: string;
  website: string;
};

export type EventRuleType = {
  maxParticipants: number;
  minAge: number;
  requiresIdVerification: boolean;
};

export type LocationModelType = {
  name: string;
  address: string;
  city: string;
  country: string;
};

export type ProjectType = {
  name: string;
  description: string;
};

export type EventType = {
  _id: string;
  title: string;
  description: string;
  limit: number;
  category: CategoryType;
  createdBy: UserProfileType;
  eventStartDate: Date;
  eventEndDate: Date;
  registrationStartDate: Date;
  registrationEndDate: Date;
  participants: UserType[];
  sponsor: SponsorType;
  eventRule: EventRuleType;
  donate: UserType[];
  projects: ProjectType[];
  prizes: number[];
  thumbnail: string;
  location: LocationModelType;
  createdAt: Date;
  updatedAt: Date;
};

export type EventResponseType = BaseResponseType & {
  data: EventType;
};

export type EventsResponseType = BaseResponseType & {
  data: EventType[];
};
