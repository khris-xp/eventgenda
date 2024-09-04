import { LoginDto } from "@/common/dto/login.dto";
import Cookies from "js-cookie";
import { useMutation, useQuery } from "react-query";
import { authService } from "../services/auth.service";
import { useAuthStore } from "../stores/auth.store";

export const useAuth = () => {
  const cookies = Cookies;
  const { setAuth, actions } = useAuthStore();

  const loginMutation = useMutation(
    async (authDto: LoginDto) => {
      return await authService.login(authDto);
    },
    {
      onSuccess: (data) => {
        setCookies(data.data.accessToken);
        userProfileQuery.refetch();
      },
    },
  );

  const setCookies = (accessToken: string) => {
    cookies.set("token", accessToken);
  };

  const userProfileQuery = useQuery(
    "userProfile",
    async () => {
      return await authService.getUserProfile();
    },
    {
      onSuccess: (data) => {
        setAuth(data.data);
      },
      onError: (error) => {
        console.error("Error fetching user profile:", error);
        actions.logout();
      },
      enabled: !!cookies.get("token"),
    },
  );

  return {
    loginMutation,
    userProfileQuery,
    userProfile: userProfileQuery.data,
    userProfileLoading: userProfileQuery.isLoading,
    logout: actions.logout,
  };
};
