import { LoginDto } from "@/common/dto/login.dto";
import {
  AuthResponseType,
  LoginResponseType,
} from "@/common/responses/auth.response";
import { apiController } from "@/controllers/api.controller";

export const authService = {
  login: async (loginRequest: LoginDto): Promise<LoginResponseType> => {
    return await apiController("/api/auth/login", "post", loginRequest);
  },
  getUserProfile: async (): Promise<AuthResponseType> => {
    return await apiController("/api/auth/profile", "get");
  },
};
