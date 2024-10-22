export type CreateEventDto = {
  title: string;
  description: string;
  limit: number;
  amountRequired: number;
};

export type UpdateEventDto = {
  title?: string;
  description?: string;
  limit?: number;
  amountRequired?: number;
};
