import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  token: string | null;
  userName: string | null;
  setAuth: (token: string, userName: string) => void;
  setToken: (token: string) => void;
  setUserName: (userName: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      userName: null,

      setAuth: (token,userName) => set({token,userName}),

      setToken: (token) => set({ token }),

      setUserName : (userName) => set({userName}),

      logout: () => set({ token: null, userName : null }),
    }),
    {
      name: "auth-storage",
    }
  )
);