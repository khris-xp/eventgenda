import { PaymentDto } from "@/common/dto/payment.dto";
import {
  PaymentResponseType,
  PaymentsResponseType,
} from "@/types/payment.type";
import axiosInstance from "./api.service";

export const paymentService = {
  createPayment: async (data: PaymentDto): Promise<PaymentResponseType> => {
    try {
      const response = await axiosInstance.post<PaymentResponseType>(
        "/api/payment",
        data,
      );
      return response.data;
    } catch (error) {
      const message = (error as Error).message;
      return Promise.reject(message);
    }
  },
  getPayments: async (): Promise<PaymentsResponseType> => {
    try {
      const response =
        await axiosInstance.get<PaymentsResponseType>("/payment");
      return response.data;
    } catch (error) {
      const message = (error as Error).message;
      return Promise.reject(message);
    }
  },
  getPaymentById: async (id: string): Promise<PaymentResponseType> => {
    try {
      const response = await axiosInstance.get<PaymentResponseType>(
        `/payment/${id}`,
      );
      return response.data;
    } catch (error) {
      const message = (error as Error).message;
      return Promise.reject(message);
    }
  },
};
