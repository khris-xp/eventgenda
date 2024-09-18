import { UserInit } from "@/constants/user.constant";
import { UserProfileType } from "@/types/user.type";
import Cookies from "js-cookie";
import create from "zustand";

interface AuthStoreInterface {
  authenticated: boolean;
  setAuthentication: (val: boolean) => void;
  user: UserProfileType;
  setUser: (user: UserProfileType) => void;
  action: {
    logout: () => void;
  };
}

export const useAuthStore = create<AuthStoreInterface>((set) => ({
  authenticated: false,
  user: UserInit,
  setAuthentication: (val) => set((state) => ({ authenticated: val })),
  setUser: (user) => set({ user }),
  action: {
    logout: () => {
      Cookies.remove("token");
      set({ authenticated: false, user: UserInit });
    },
  },
}));
