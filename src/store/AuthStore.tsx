import { create } from "zustand";
import { persist } from "zustand/middleware";

type Walk = {
  id: string;
  name: string;
  description: string;
  length: number;
  walkImageUrl: string;
  region: {
    name: string;
  };
  difficulty: {
    name: string;
  };
}

type AuthState = {
  // addSavedWalk: any;
  token: string | null;
  userName: string | null;
  savedWalks : Walk[];
  setAuth: (token: string, userName: string) => void;
  setToken: (token: string) => void;
  setUserName: (userName: string) => void;
  addSavedWalk : (walk : Walk) => void;
  removeSavedWalk: (id: string) => void;
  setSavedWalks : (savedWalks : Walk[]) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      userName: null,
      savedWalks:[],

      setAuth: (token,userName) => set({token,userName}),

      addSavedWalk : (walk) =>
        set((state) => ({
          savedWalks: [...state.savedWalks, walk],
        })),

        removeSavedWalk : (id) =>
          set((state) => ({
            savedWalks : state.savedWalks.filter((w) => w.id !== id)
          })),

          setSavedWalks : (walks) => set({savedWalks: walks}),

      setToken: (token) => set({ token }),

      setUserName : (userName) => set({userName}),

      logout: () => set({ token: null, userName : null }),
    }),
    {
      name: "auth-storage",
    }
  )
);