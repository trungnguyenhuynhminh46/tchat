import { User } from "firebase/auth";
import create from "zustand";

interface StoreType {
  currentUser: User | null | undefined;
  setCurrentUser: (user: User | null) => void;
}

export const useAuthStore = create<StoreType>((set) => ({
  currentUser: undefined,
  setCurrentUser: (user: User | null) => {
    set({ currentUser: user });
  },
}));
