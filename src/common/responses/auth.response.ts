export type AuthResponseType = {
  status: number;
  message: string;
  success: boolean;
  data: UserProfileType;
};

export type LoginResponseType = {
  status: number;
  message: string;
  success: boolean;
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
  role: string[];
  profileImage: string;
  history: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};
