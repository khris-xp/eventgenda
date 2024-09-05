import { UserInit } from "@/constants/user.constant";
import { UserProfileType } from "@/types/auth-response.type";
import Cookies from "js-cookie";
import { create } from "zustand";

const cookies = Cookies;

interface AuthStore {
  auth?: UserProfileType | null;
  setAuth: (auth?: UserProfileType | null) => void;
  actions: {
    logout: () => void;
  };
}

export const AuthStore = create<AuthStore>((set) => ({
  auth: UserInit,
  setAuth: (auth) => set({ auth }),
  actions: {
    logout: () => {
      cookies.remove("token");
      set({ auth: null });
    },
  },
}));
