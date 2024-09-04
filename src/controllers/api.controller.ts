import axiosInstance from "@/services/api.service";

export async function apiController<T>(
  url: string,
  method: "get" | "post" | "put" | "patch" | "delete",
  data?: any,
): Promise<T> {
  try {
    const response = await axiosInstance.request({ url, method, data });
    return response.data;
  } catch (error) {
    const errorMessage =
      (error as any).response?.data?.message || (error as Error).message;
    return Promise.reject(errorMessage);
  }
}
