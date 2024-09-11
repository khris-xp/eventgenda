export type BlogResponseType = {
  status: number;
  message: string;
  success: boolean;
  data: BlogType;
};

export type BlogsResponseType = {
  status: number;
  message: string;
  success: boolean;
  data: BlogType[];
};

export type BlogType = {
  _id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};
