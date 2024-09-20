import { CreateBlogDto, UpdateBlogDto } from "@/common/dto/blog.dto";
import { LoginDto } from "@/common/dto/login.dto";
import axiosInstance from "@/services/api.service";
import axios from "axios";

export async function apiController<T>(
  url: string,
  method: "get" | "post" | "put" | "patch" | "delete",
  data?: LoginDto | CreateBlogDto | UpdateBlogDto,
): Promise<T> {
  try {
    const response = await axiosInstance.request({ url, method, data });
    return response.data;
  } catch (error) {
    let errorMessage: string;
    if (axios.isAxiosError(error)) {
      errorMessage = error.response?.data?.message || error.message;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    } else {
      errorMessage = "An unknown error occurred";
    }
    return Promise.reject(errorMessage);
  }
}
